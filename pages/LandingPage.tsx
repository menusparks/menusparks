
import React, { useState } from 'react';
import { Logo } from '../constants';
import SpecialCard from '../components/SpecialCard';
import { Special } from '../types';

// --- Icon Components ---
const ClipboardIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
);

const LightbulbIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
);

const RecipeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);

const ChevronDownIcon = () => (
  <svg className="h-6 w-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

// --- Page Sections ---

const HeroSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setSubmitted(true);
    console.log(`Email submitted: ${email}`);
  };

  return (
    <section className="relative text-center min-h-[80vh] flex flex-col justify-center items-center" id="coming-soon">
        <div className="inline-block p-4 bg-brand-surface rounded-full mb-4">
            <Logo />
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-brand-primary-light to-brand-accent leading-snug">
            Something New is Simmering.
        </h1>
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-gray-200 mt-2 leading-snug">
            Stop Staring at Your Inventory.
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-400">
            Get chef-driven specials from what you already have in stock—complete with costing, menu descriptions, and social media captions.
        </p>
        <div className="mt-8 max-w-xl mx-auto w-full">
            {submitted ? (
                <div className="bg-green-900/50 text-green-300 p-4 rounded-lg text-lg font-semibold animate-fade-in">
                    <p>Thank you! You're on the list. We'll be in touch soon.</p>
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
                        className="flex-grow w-full bg-gray-800 border border-gray-600 rounded-md shadow-sm py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all"
                    />
                    <button
                        type="submit"
                        className="bg-brand-primary-dark hover:bg-brand-primary-darker text-brand-dark font-bold py-2 px-6 rounded-lg text-base transition-all duration-300 transform hover:scale-105 shadow-lg shadow-brand-primary/20"
                    >
                        ✨ Reserve My Launch Deal
                    </button>
                </form>
            )}
            {error && <p id="email-error" role="alert" className="text-red-400 mt-2">{error}</p>}
            <p className="text-xs text-gray-500 mt-4">Be the first to know and get an exclusive launch day offer.</p>
        </div>
        <div className="absolute bottom-10 animate-bounce">
          <ChevronDownIcon />
        </div>
    </section>
  );
};

const HowItWorksSection = () => {
    const steps = [
        {
            icon: <ClipboardIcon />,
            title: "1. Profile Your Kitchen",
            description: "Tell us your restaurant's style, brand, available kitchen equipment, and key ingredients you want to move."
        },
        {
            icon: <LightbulbIcon />,
            title: "2. Spark an Idea",
            description: "Our kitchen expert analyzes your profile to generate a unique, creative special."
        },
        {
            icon: <RecipeIcon />,
            title: "3. Get the Full Recipe",
            description: "Receive a complete recipe card with costing, pricing, and even a social media post."
        }
    ];

    return (
        <section className="text-center animate-fade-in-up">
            <h2 className="text-4xl font-bold text-white mb-2 tracking-tight">From Inventory to Inspiration</h2>
            <p className="text-lg text-brand-primary-light font-semibold mb-12">In Three Simple Steps</p>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {steps.map((step, index) => (
                    <div key={index} className="bg-brand-surface border border-gray-700/50 rounded-xl p-8 text-center flex flex-col items-center">
                        <div className="text-brand-primary mb-4">{step.icon}</div>
                        <h3 className="text-xl font-bold text-gray-100 mb-2">{step.title}</h3>
                        <p className="text-gray-400">{step.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

const ShowcaseSection = () => {
    const showcaseSpecial: Special = {
        id: 'spec-showcase',
        dishName: 'Spicy Honey-Glazed Chicken Thighs',
        dishType: 'Main Course',
        season: 'Year-Round',
        menuDescription: 'Crispy, bone-in chicken thighs tossed in a fiery honey-chipotle glaze, served with a cooling cilantro-lime crema and charred corn salsa. A perfect balance of sweet, spicy, and smoky.',
        ingredients: ['4 bone-in, skin-on chicken thighs', '1/2 cup honey', '2 tbsp chipotle in adobo, minced', '1 lime, juiced', '1/4 cup cilantro, chopped', '1/2 cup sour cream or Greek yogurt', '1 cup corn kernels'],
        preparationSteps: ['Pat chicken thighs dry and season. Sear skin-side down until golden.', 'Whisk together honey, chipotle, and lime juice for the glaze.', 'Brush glaze over chicken and finish in a 400°F oven for 15-20 minutes.', 'Mix cilantro, lime juice, and sour cream for the crema. Sauté or grill corn until lightly charred.'],
        costBreakdown: { estimatedFoodCost: 4.80, suggestedMenuPrice: 22.00, profitMarginPercentage: 78.2 },
        socialMediaPost: 'Turn up the heat this week! 🔥 Our new Spicy Honey-Glazed Chicken is calling your name. Sweet, spicy, and seriously addictive. #chickendinner #spicyhoney #menusparks',
        imageSuggestion: 'A top-down shot on a dark slate plate. The glistening chicken is the star, drizzled with crema and sprinkled with fresh cilantro. A lime wedge sits on the side.',
        createdAt: new Date().toISOString()
      };

    return (
        <section className="animate-fade-in-up">
            <div className="text-center">
                <h2 className="text-4xl font-bold text-white mb-2 tracking-tight">This is a MenuSpark.</h2>
                <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">You get more than just an idea. You get a complete, ready-to-implement battle plan for a profitable special.</p>
            </div>
            <div className="max-w-4xl mx-auto">
                <SpecialCard special={showcaseSpecial} initiallyExpanded={true} />
            </div>
        </section>
    );
}

const QuoteSection = () => (
    <section className="text-center bg-brand-surface/30 rounded-2xl animate-fade-in-up p-12 md:p-16">
        <div className="max-w-3xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-semibold italic text-gray-200 leading-relaxed">
                "Built by chefs. Backed by 25 years, 13 restaurants, and 1 mission: to make incredible menus accessible to every kitchen."
            </blockquote>
            <p className="mt-6 text-lg font-bold text-brand-primary-light">- The MenuSparks Team</p>
        </div>
    </section>
);


const FinalCtaSection = () => (
    <section className="text-center animate-fade-in-up">
        <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Ready to Ignite Your Menu?</h2>
        <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">Don't miss out on our exclusive launch offer. Be the first to know when MenuSparks goes live.</p>
        <a href="#coming-soon"
            className="bg-brand-primary hover:bg-brand-primary-dark text-brand-dark font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-brand-primary/20"
        >
            Join the Waitlist
        </a>
    </section>
);

const LandingPage: React.FC = () => {
  return (
    <div className="space-y-20 md:space-y-28">
      <HeroSection />
      <HowItWorksSection />
      <ShowcaseSection />
      <QuoteSection />
      <FinalCtaSection />
    </div>
  );
};

export default LandingPage;
