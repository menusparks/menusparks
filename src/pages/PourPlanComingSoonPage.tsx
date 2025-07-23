
import React, { useState } from 'react';
import { PourPlanLogo } from '../constants';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="bg-brand-surface/50 p-6 rounded-lg border border-gray-700/50 text-center">
    <div className="flex justify-center text-cyan-400 mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-white">{title}</h3>
    <p className="mt-2 text-gray-400">{children}</p>
  </div>
);

const PourPlanComingSoonPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    console.log('Email for PourPlan waitlist:', email);
    setSubmitted(true);
  };

  return (
    <div className="text-center py-10 md:py-20">
      <div className="inline-block p-4 bg-brand-surface rounded-full mb-4">
        <PourPlanLogo />
      </div>
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
        The Perfect Pour is Coming.
      </h1>
      <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-gray-200 mt-2">
        Elevate Your Beverage Program.
      </h2>
      <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-400">
        From trending cocktails to profitable wine pairings, PourPlan is your dedicated partner for crafting unforgettable drink menus that delight guests and drive revenue.
      </p>

      <div className="mt-12 max-w-lg mx-auto">
        {submitted ? (
          <div className="bg-green-900/50 border border-green-700 text-green-300 p-6 rounded-lg text-center animate-fade-in">
            <h3 className="text-2xl font-bold">You're on the list!</h3>
            <p className="mt-2">Cheers! We'll notify you with an exclusive early-bird offer as soon as PourPlan is ready to serve.</p>
          </div>
        ) : (
          <div className="bg-brand-surface p-8 rounded-xl border border-gray-700/50 shadow-2xl shadow-brand-dark">
            <h3 className="text-2xl font-bold text-white">Be the First to Know</h3>
            <p className="text-gray-400 mt-2 mb-6">Join the waitlist for launch notifications and an exclusive early-bird discount.</p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your-email@bar.com"
                aria-label="Email address"
                required
                className="w-full flex-grow bg-gray-800 border border-gray-600 rounded-md shadow-sm py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors duration-200 shadow-lg shadow-blue-500/20"
              >
                Notify Me
              </button>
            </form>
            {error && <p className="text-red-400 mt-3 text-sm">{error}</p>}
          </div>
        )}
      </div>

      <div className="mt-24">
        <h2 className="text-3xl font-bold text-center text-white">What We're Mixing</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <FeatureCard
            title="Signature Cocktail Crafting"
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
          >
            Generate unique, brand-aligned cocktail recipes using your existing spirits and inventory.
          </FeatureCard>
           <FeatureCard
            title="Profit-Driven Pairings"
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" /></svg>}
          >
            Get smart wine, beer, and cocktail pairing suggestions for your food menu to increase average check size.
          </FeatureCard>
           <FeatureCard
            title="Bar-Ready Marketing"
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" /></svg>}
          >
            Receive enticing menu descriptions, social media copy, and visual concepts to promote your beverage program.
          </FeatureCard>
        </div>
      </div>
    </div>
  );
};

export default PourPlanComingSoonPage;
