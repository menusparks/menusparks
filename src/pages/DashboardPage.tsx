
import React, { useState, useCallback } from 'react';
import { useAuth } from '../hooks/useAuth';
import { generateSpecial } from '../services/geminiService';
import { RestaurantProfile, Special } from '../types';
import Spinner from '../components/Spinner';
import SpecialCard from '../components/SpecialCard';

type Tab = 'generator' | 'history' | 'profile';

const ProfileView: React.FC<{ profile: RestaurantProfile; onSave: (profile: RestaurantProfile) => Promise<void>; onSaveSuccess: () => void }> = ({ profile, onSave, onSaveSuccess }) => {
  const [formData, setFormData] = useState<RestaurantProfile>(profile);
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setSaveMessage('');
    try {
      await onSave(formData);
      setSaveMessage('Profile saved!');
      setTimeout(() => {
        onSaveSuccess();
      }, 1500);
    } catch (error) {
        setSaveMessage('Failed to save profile.');
    } finally {
        setIsSaving(false);
    }
  };

  return (
    <div className="bg-brand-surface p-8 rounded-lg border border-gray-700/50">
      <h2 className="text-2xl font-bold text-white mb-4">Restaurant Profile</h2>
      <p className="text-gray-400 mb-6">This information helps us craft the perfect specials for your brand.</p>
      <form onSubmit={handleSave} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300">Restaurant Name</label>
          <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="mt-1 w-full bg-gray-800 border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:ring-brand-primary focus:border-brand-primary" />
        </div>
        <div>
          <label htmlFor="cuisine" className="block text-sm font-medium text-gray-300">Cuisine Type</label>
          <input type="text" name="cuisine" id="cuisine" value={formData.cuisine} onChange={handleChange} className="mt-1 w-full bg-gray-800 border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:ring-brand-primary focus:border-brand-primary" />
        </div>
        <div>
          <label htmlFor="brandIdentity" className="block text-sm font-medium text-gray-300">Brand Identity / Vibe</label>
          <textarea name="brandIdentity" id="brandIdentity" rows={3} value={formData.brandIdentity} onChange={handleChange} className="mt-1 w-full bg-gray-800 border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:ring-brand-primary focus:border-brand-primary" placeholder="e.g., Family-friendly, fine dining, rustic, modern..."></textarea>
        </div>
        <div>
          <label htmlFor="inventory" className="block text-sm font-medium text-gray-300">Key Inventory Items</label>
          <textarea name="inventory" id="inventory" rows={4} value={formData.inventory} onChange={handleChange} className="mt-1 w-full bg-gray-800 border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:ring-brand-primary focus:border-brand-primary" placeholder="e.g., salmon, chicken thighs, potatoes, asparagus, red wine..."></textarea>
        </div>
        <div className="flex justify-end items-center gap-4 pt-2">
          {saveMessage && <p className={`text-sm ${saveMessage.includes('Failed') ? 'text-red-400' : 'text-green-400'}`}>{saveMessage}</p>}
          <button type="submit" disabled={isSaving} className="bg-brand-primary hover:bg-brand-primary-dark text-brand-dark font-bold py-2 px-6 rounded-lg transition-colors duration-200 disabled:bg-gray-600 disabled:cursor-not-allowed">
            {isSaving ? <Spinner size="sm"/> : 'Save Profile'}
          </button>
        </div>
      </form>
    </div>
  );
};

const GeneratorView: React.FC = () => {
    const { user, addSpecial } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [generatedSpecial, setGeneratedSpecial] = useState<Special | null>(null);

    const handleGenerate = useCallback(async () => {
        if (!user) return;
        setIsLoading(true);
        setError(null);
        setGeneratedSpecial(null);
        try {
            const result = await generateSpecial(user.profile, user.specials);
            setGeneratedSpecial({ ...result, id: 'temp', createdAt: new Date().toISOString() });
            await addSpecial(result);

        } catch (e: any) {
            setError(e.message || "An unexpected error occurred.");
        } finally {
            setIsLoading(false);
        }
    }, [user, addSpecial]);

    return (
        <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-2">Ready for a New Idea?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Click the button below to generate a new, unique menu special based on your profile and inventory.</p>
            <button
                onClick={handleGenerate}
                disabled={isLoading}
                className="bg-gradient-to-r from-brand-primary to-brand-accent text-white font-bold py-4 px-10 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-brand-primary/30 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isLoading ? (
                    <div className="flex items-center gap-2">
                        <Spinner size="sm" />
                        <span>Sparking...</span>
                    </div>
                ) : (
                    '✨ Spark a New Special'
                )}
            </button>

            {error && <div className="mt-8 bg-red-900/50 text-red-300 p-4 rounded-lg max-w-2xl mx-auto">{error}</div>}
            
            {generatedSpecial && !error && (
                <div className="mt-12 text-left animate-fade-in">
                    <h3 className="text-2xl font-bold text-center mb-4 text-white">This Week's Spark!</h3>
                    <SpecialCard special={generatedSpecial} initiallyExpanded={true} />
                </div>
            )}
        </div>
    );
};

const HistoryView: React.FC<{ specials: Special[] }> = ({ specials }) => {
    if (specials.length === 0) {
        return <p className="text-center text-gray-500 py-10">No past specials found. Generate one to get started!</p>
    }
    return (
        <div>
            <h2 className="text-2xl font-bold text-white mb-6">Specials Archive</h2>
            <div className="space-y-6">
                {specials.map(special => <SpecialCard key={special.id} special={special} />)}
            </div>
        </div>
    )
};


const DashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('generator');
  const { user, updateProfile } = useAuth();

  if (!user) {
    return <div className="flex justify-center items-center h-full"><Spinner /></div>;
  }
  
  const TabButton: React.FC<{tabId: Tab; children: React.ReactNode}> = ({tabId, children}) => (
    <button
        onClick={() => setActiveTab(tabId)}
        className={`px-4 py-2 font-semibold rounded-md transition-colors ${activeTab === tabId ? 'bg-brand-primary text-brand-dark' : 'text-gray-300 hover:bg-brand-surface'}`}
    >
        {children}
    </button>
  );

  return (
    <div>
        <div className="mb-8 flex justify-center bg-brand-surface/50 border border-gray-700/50 rounded-lg p-2 max-w-md mx-auto">
            <nav className="flex space-x-2">
                <TabButton tabId="generator">Generator</TabButton>
                <TabButton tabId="history">History</TabButton>
                <TabButton tabId="profile">Profile</TabButton>
            </nav>
        </div>

        <div>
            {activeTab === 'generator' && <GeneratorView />}
            {activeTab === 'history' && <HistoryView specials={user.specials} />}
            {activeTab === 'profile' && <ProfileView profile={user.profile} onSave={updateProfile} onSaveSuccess={() => setActiveTab('generator')} />}
        </div>
    </div>
  );
};

export default DashboardPage;
