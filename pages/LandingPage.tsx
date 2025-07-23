
import React, { useState } from 'react';
import { Logo } from '../constants';

const HeroSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    // Basic email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setSubmitted(true);
    // In a real app, you'd send this to a mailing list service.
    console.log(`Email submitted: ${email}`);
  };

  return (
    <section className="text-center py-20" id="coming-soon">
      <div className="inline-block p-4 bg-brand-surface rounded-full mb-4">
        <Logo />
      </div>
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-brand-primary-light to-brand-accent leading-tight">
        Something New is Simmering.
      </h1>
      <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-gray-200 mt-2 leading-tight">
        Get Ready to Spark Your Menu.
      </h2>
      <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-400">
        MenuSparks is your future secret weapon, drawing on 25 years of kitchen experience and deep industry knowledge to turn your existing inventory into profitable, creative weekly specials. We're launching soon!
      </p>
      <div className="mt-8 max-w-md mx-auto">
        {submitted ? (
          <div className="bg-green-900/50 text-green-300 p-4 rounded-lg text-lg font-semibold animate-fade-in">
            <p>Thank you! We'll notify you as soon as we launch.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="w-full flex flex-col sm:flex-row gap-2">
            <label htmlFor="email-input" className="sr-only">Email address</label>
            <input
              id="email-input"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              aria-invalid={error ? 'true' : 'false'}
              aria-describedby="email-error"
              className="flex-grow w-full bg-gray-800 border border-gray-600 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all"
            />
            <button
              type="submit"
              className="bg-brand-primary hover:bg-brand-primary-dark text-brand-dark font-bold py-3 px-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-brand-primary/20"
            >
              Notify Me
            </button>
          </form>
        )}
        {error && <p id="email-error" role="alert" className="text-red-400 mt-2">{error}</p>}
        <p className="text-xs text-gray-500 mt-4">Be the first to know and get an exclusive launch day offer.</p>
      </div>
    </section>
  );
};

const LandingPage: React.FC = () => {
  return (
    <div className="space-y-16">
      <HeroSection />
    </div>
  );
};

export default LandingPage;
