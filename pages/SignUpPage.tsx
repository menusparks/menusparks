
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Logo } from '../constants';
import Spinner from '../components/Spinner';

const SignUpPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    restaurantName: '',
    cuisine: '',
    aLaCarte: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { signup } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      if (!formData.name || !formData.email || !formData.password || !formData.restaurantName || !formData.cuisine) {
        throw new Error("Please fill out all required fields.");
      }
      await signup(formData);
      // On success, the App's routing logic will navigate to the dashboard.
      // We don't set isLoading to false here, as this component will be unmounted.
    } catch (err: any) {
      setError(err.message || 'Failed to sign up. Please try again.');
      // Only set loading to false on failure, as we're staying on the page.
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center py-12">
      <div className="w-full max-w-lg">
        <div className="bg-brand-surface border border-gray-700/50 rounded-xl shadow-2xl shadow-brand-dark p-8">
          <div className="flex justify-center mb-6">
            <Logo />
          </div>
          <h2 className="text-3xl font-bold text-center text-white mb-2">Create Your Account</h2>
          <p className="text-center text-gray-400 mb-6">Join MenuSparks and start revolutionizing your menu today.</p>

          {error && <p className="bg-red-900/50 text-red-300 p-3 rounded-md mb-4 text-center">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Your Name</label>
                <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} className="mt-1 w-full bg-gray-800 border border-gray-600 rounded-md py-2 px-3 text-white focus:ring-brand-primary focus:border-brand-primary" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
                <input id="email" name="email" type="email" autoComplete="email" required value={formData.email} onChange={handleChange} className="mt-1 w-full bg-gray-800 border border-gray-600 rounded-md py-2 px-3 text-white focus:ring-brand-primary focus:border-brand-primary" />
              </div>
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
              <input id="password" name="password" type="password" required value={formData.password} onChange={handleChange} className="mt-1 w-full bg-gray-800 border border-gray-600 rounded-md py-2 px-3 text-white focus:ring-brand-primary focus:border-brand-primary" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="restaurantName" className="block text-sm font-medium text-gray-300">Restaurant Name</label>
                <input id="restaurantName" name="restaurantName" type="text" required value={formData.restaurantName} onChange={handleChange} className="mt-1 w-full bg-gray-800 border border-gray-600 rounded-md py-2 px-3 text-white focus:ring-brand-primary focus:border-brand-primary" />
              </div>
               <div>
                <label htmlFor="cuisine" className="block text-sm font-medium text-gray-300">Cuisine / Style</label>
                <input id="cuisine" name="cuisine" type="text" required value={formData.cuisine} onChange={handleChange} placeholder="e.g., Italian, Modern American" className="mt-1 w-full bg-gray-800 border border-gray-600 rounded-md py-2 px-3 text-white focus:ring-brand-primary focus:border-brand-primary" />
              </div>
            </div>
            
            <div className="pt-4">
                <div className="bg-brand-surface/80 border border-gray-600 rounded-lg p-4">
                    <label htmlFor="aLaCarte" className="flex items-start cursor-pointer">
                        <input type="checkbox" id="aLaCarte" name="aLaCarte" checked={formData.aLaCarte} onChange={handleChange} className="mt-1 h-5 w-5 flex-shrink-0 rounded bg-gray-700 border-gray-500 text-brand-primary focus:ring-brand-primary"/>
                        <div className="ml-3">
                            <span className="font-bold text-white">Optional: Hands-Free Setup (+$15 one-time)</span>
                            <p className="text-sm text-gray-400 mt-1">Short on time? We'll set up your profile for you! We can pull info from your website, or you can email us menus and invoices.</p>
                        </div>
                    </label>
                </div>
            </div>

            <p className="text-xs text-center text-gray-500 pt-2">After signing up, you'll be able to provide more detailed information to help us tailor your specials.</p>

            <div>
              <button type="submit" disabled={isLoading} className="w-full flex justify-center py-3 px-4 mt-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-brand-dark bg-brand-primary hover:bg-brand-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-brand-primary disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors">
                {isLoading ? <Spinner size="sm" /> : 'Sign Up & Get Started'}
              </button>
            </div>
          </form>
           <p className="mt-6 text-center text-sm text-gray-400">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-brand-primary-light hover:text-brand-primary">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
