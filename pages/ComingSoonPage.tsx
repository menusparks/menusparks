
import React, { useState } from 'react';
import { Logo } from '../constants';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="bg-brand-surface/50 p-6 rounded-lg border border-gray-700/50 text-center">
    <div className="flex justify-center text-brand-primary mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-white">{title}</h3>
    <p className="mt-2 text-gray-400">{children}</p>
  </div>
);

const ComingSoonPage: React.FC = () => {
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
    console.log('Email for waitlist:', email);
    setSubmitted(true);
  };

  return (
    <div className="text-center py-10 md:py-20">
      <div className="inline-block p-4 bg-brand-surface rounded-full mb-4">
        <Logo />
      </div>
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-brand-primary-light to-brand-accent">
        Something Great is Cooking.
      </h1>
      <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-gray-200 mt-2">
        Get Ready for MenuSparks.
      </h2>
      <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-400">
        Stop staring at your inventory and start selling specials. MenuSparks is your expert culinary partner, turning your surplus ingredients into profitable, must-try dishes.
      </p>

      <div className="mt-12 max-w-lg mx-auto">
        {submitted ? (
          <div className="bg-green-900/50 border border-green-700 text-green-300 p-6 rounded-lg text-center animate-fade-in">
            <h3 className="text-2xl font-bold">You're on the list!</h3>
            <p className="mt-2">Thank you for signing up. We'll email you with an exclusive early-bird offer as soon as we launch.</p>
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
                placeholder="your-email@restaurant.com"
                aria-label="Email address"
                required
                className="w-full flex-grow bg-gray-800 border border-gray-600 rounded-md shadow-sm py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
              />
              <button
                type="submit"
                className="bg-brand-primary hover:bg-brand-primary-dark text-brand-dark font-bold py-3 px-6 rounded-lg text-lg transition-colors duration-200 shadow-lg shadow-brand-primary/20"
              >
                Notify Me
              </button>
            </form>
            {error && <p className="text-red-400 mt-3 text-sm">{error}</p>}
          </div>
        )}
      </div>

      <div className="mt-24">
        <h2 className="text-3xl font-bold text-center text-white">What's Cooking?</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <FeatureCard
            title="Intelligent Menu Creation"
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>}
          >
            Get chef-quality weekly specials generated from your inventory, matching your restaurant's unique brand and cuisine.
          </FeatureCard>
           <FeatureCard
            title="Data-Driven Profit"
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>}
          >
            Every special comes with a full cost breakdown, suggested menu price, and profit margin analysis to boost your bottom line.
          </FeatureCard>
           <FeatureCard
            title="Instant Marketing"
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.356a1.76 1.76 0 013.417-.592V5.882a1.76 1.76 0 013.417.592l2.147 6.356a1.76 1.76 0 01-3.417.592z" /></svg>}
          >
            Receive mouth-watering menu descriptions, social media post copy, and photo suggestions for every single dish.
          </FeatureCard>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;
