import React from 'react';
import { Link } from 'react-router-dom';
import { SUBSCRIPTION_PLANS, Logo, PourPlanLogo } from '../constants';
import { SubscriptionPlan, SubscriptionTier } from '../types';

const CheckIcon: React.FC<{ className?: string }> = ({ className = 'text-brand-primary' }) => (
  <svg className={`h-6 w-6 flex-shrink-0 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const HeroSection: React.FC = () => (
  <section className="text-center py-20">
    <div className="inline-block p-4 bg-brand-surface rounded-full mb-4">
       <Logo />
    </div>
    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-brand-primary-light to-brand-accent leading-tight">
      Stop Staring at Your Inventory.
    </h1>
    <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-gray-200 mt-2 leading-tight">
      Start Selling Specials.
    </h2>
    <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-400">
      MenuSparks is your secret weapon, an expert executive chef that turns your existing inventory into profitable, creative weekly specials that delight customers and boost your bottom line.
    </p>
    <div className="mt-8">
      <Link
        to="/signup"
        className="bg-brand-primary hover:bg-brand-primary-dark text-brand-dark font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-brand-primary/20"
      >
        Spark Your First Special
      </Link>
    </div>
  </section>
);

const PricingCard: React.FC<{ plan: SubscriptionPlan, isFeatured?: boolean }> = ({ plan, isFeatured }) => {
  if (plan.name === SubscriptionTier.DESSERT) {
    const premiumFeatures = [
      'Access to trending food specials & seasonal dishes',
      'Exclusive vendor discounts on ingredients',
      'Early access to holiday & limited-run menus',
      'Menu-ready promotional assets (photos, copy)',
      'White-labeled options for your brand',
      'Priority requests for events & catering',
    ];

    return (
      <div className="border border-brand-primary/60 rounded-xl p-8 flex flex-col h-full bg-brand-surface shadow-2xl shadow-brand-primary/20 relative overflow-hidden">
        <div className="absolute top-2 -right-10">
          <div className="bg-brand-primary text-brand-dark text-xs font-bold py-1 px-10 transform rotate-45">
            COMING SOON
          </div>
        </div>
        <h3 className="text-2xl font-bold text-brand-primary-light">{plan.name}</h3>
        <p className="mt-4 text-gray-400">The ultimate toolkit for culinary innovation and profit maximization.</p>
        <ul className="mt-6 space-y-4 text-gray-300 flex-grow">
          {premiumFeatures.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckIcon className="text-brand-primary-light" />
              <span className="ml-3">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-6 text-center">
           <button
            type="button"
            className="w-full font-bold py-3 px-6 rounded-lg bg-brand-primary/80 text-brand-dark hover:bg-brand-primary transition-colors"
            onClick={() => alert('Thanks for your interest! The waitlist will be available soon.')}
          >
            Notify Me
          </button>
          <p className="text-xs mt-3 text-gray-500">Join the waitlist for an early bird discount!</p>
          <p className="text-xs mt-1 text-gray-500">
            Bundle with PourPlan's "The Top Shelf" tier for the ultimate package.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`border rounded-xl p-8 flex flex-col h-full ${isFeatured ? 'border-brand-primary shadow-2xl shadow-brand-primary/20 bg-brand-surface' : 'border-gray-700 bg-brand-surface/50'}`}>
      <h3 className="text-2xl font-bold text-gray-100">{plan.name}</h3>
      <p className="mt-4">
        <span className="text-4xl font-extrabold text-white">${plan.price}</span>
        <span className="text-gray-400"> / week</span>
      </p>
      <ul className="mt-6 space-y-4 text-gray-300 flex-grow">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckIcon />
            <span className="ml-3">{feature}</span>
          </li>
        ))}
      </ul>
      
      {plan.bundleDeal && (
        <div className="mt-6 pt-6 border-t border-gray-600/50 flex-grow-0">
            <h4 className="font-bold text-center text-cyan-400">Bundle & Save!</h4>
            <p className="text-center text-sm text-gray-400 mt-2">
                Add PourPlan's <span className="font-bold text-white">"{plan.bundleDeal.name}"</span> plan.
            </p>
            <div className="text-center mt-2">
                 <span className="text-3xl font-bold text-white">${plan.bundleDeal.price}</span>
                 <span className="text-gray-400"> / week for both</span>
                 <span className="ml-2 line-through text-red-500/80">${plan.bundleDeal.originalPrice}</span>
            </div>
        </div>
      )}

      <Link
        to="/signup"
        className={`mt-8 block w-full text-center font-bold py-3 px-6 rounded-lg transition-colors duration-300 ${isFeatured ? 'bg-brand-primary text-brand-dark hover:bg-brand-primary-dark' : 'bg-gray-700 text-gray-200 hover:bg-gray-600'}`}
      >
        {plan.cta}
      </Link>
    </div>
  );
};

const PricingSection: React.FC = () => (
  <section id="pricing" className="py-20">
    <h2 className="text-4xl font-bold text-center text-white">Find the Perfect Spark</h2>
    <p className="text-lg text-gray-400 text-center mt-4 max-w-xl mx-auto">Simple, transparent pricing. Cancel anytime. No hidden fees.</p>
    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {SUBSCRIPTION_PLANS.map((plan, index) => (
        <PricingCard key={plan.name} plan={plan} isFeatured={index === 1} />
      ))}
    </div>
  </section>
);

const CrossPromotionSection: React.FC = () => {
  return (
    <section id="pour-plan" className="my-16 bg-brand-surface/50 rounded-xl border border-gray-700/50">
      <div className="container mx-auto p-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 text-center md:text-left">
          <div className="flex-shrink-0">
            <PourPlanLogo />
          </div>
          <div className="flex-grow">
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Need a Spark for Your Bar?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto md:mx-0 text-lg text-gray-400">
              Introducing <span className="font-bold text-white">PourPlan</span>, our new sister service for crafting profitable and trending beverage menus. From signature cocktails to curated wine lists, we've got your drinks covered.
            </p>
            <div className="mt-6">
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); alert('PourPlan is launching soon! Get ready to elevate your beverage program.'); }} 
                className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-lg text-md transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/20"
              >
                Learn More (Coming Soon)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


const TestimonialCard: React.FC<{ quote: string, name: string, role: string }> = ({ quote, name, role }) => (
  <figure className="bg-brand-surface/50 p-6 rounded-lg border border-gray-700">
    <blockquote className="text-gray-300 italic">“{quote}”</blockquote>
    <figcaption className="mt-4">
        <div className="font-bold text-white">{name}</div>
        <div className="text-sm text-brand-primary-light">{role}</div>
    </figcaption>
  </figure>
);

const TestimonialsSection: React.FC = () => (
    <section id="testimonials" className="py-20">
        <h2 className="text-4xl font-bold text-center text-white">Loved by Chefs and Owners</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <TestimonialCard quote="MenuSparks completely changed our weekly planning. We're more creative, less wasteful, and customers love the new specials." name="Maria Garcia" role="Owner, The Corner Bistro" />
            <TestimonialCard quote="I was skeptical about a service like this, but the quality of the recipes and menu descriptions is outstanding. It saves me hours every week." name="David Chen" role="Executive Chef, Urban Eatery" />
            <TestimonialCard quote="Our bar's profitability is up 15% since we started using MenuSparks for cocktail specials. It's a no-brainer." name="Jessica Riley" role="Bar Manager, The Alchemist's Brew" />
        </div>
    </section>
);


const LandingPage: React.FC = () => {
  return (
    <div className="space-y-16">
      <HeroSection />
      <PricingSection />
      <CrossPromotionSection />
      <TestimonialsSection />
    </div>
  );
};

export default LandingPage;