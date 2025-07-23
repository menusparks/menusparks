
import React, { useState } from 'react';
import { Special } from '../types';

const DetailItem: React.FC<{ label: string; value: React.ReactNode; className?: string }> = ({ label, value, className }) => (
  <div className={className}>
    <h4 className="text-sm font-bold text-brand-primary-light tracking-wider uppercase">{label}</h4>
    <div className="text-gray-300 mt-1">{value}</div>
  </div>
);

const SpecialCard: React.FC<{ special: Special; initiallyExpanded?: boolean }> = ({ special, initiallyExpanded = false }) => {
  const [isExpanded, setIsExpanded] = useState(initiallyExpanded);

  return (
    <div className="bg-brand-surface rounded-xl overflow-hidden shadow-lg border border-gray-700/50 transition-all duration-300 hover:shadow-brand-primary/20 hover:border-brand-primary/30">
      {special.generatedImageUrl && (
        <img src={special.generatedImageUrl} alt={special.dishName} className="w-full h-56 object-cover" />
      )}
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-xs text-brand-primary uppercase font-semibold tracking-wider">{special.dishType} &bull; {special.season}</p>
            <h3 className="text-2xl font-bold text-gray-100 mt-1">{special.dishName}</h3>
          </div>
          <button onClick={() => setIsExpanded(!isExpanded)} className="text-brand-primary-light hover:text-brand-primary-dark transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        <p className="mt-4 text-gray-400 italic">{special.menuDescription}</p>

        {isExpanded && (
          <div className="mt-6 space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <DetailItem label="Ingredients" value={<ul className="list-disc list-inside space-y-1">{special.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}</ul>} />
              <DetailItem label="Preparation" value={<ol className="list-decimal list-inside space-y-2">{special.preparationSteps.map((step, i) => <li key={i}>{step}</li>)}</ol>} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-700/50">
                <DetailItem label="Est. Food Cost" value={`$${special.costBreakdown.estimatedFoodCost.toFixed(2)}`} className="text-center" />
                <DetailItem label="Suggested Price" value={`$${special.costBreakdown.suggestedMenuPrice.toFixed(2)}`} className="text-center" />
                <DetailItem label="Profit Margin" value={`${special.costBreakdown.profitMarginPercentage.toFixed(1)}%`} className="text-center" />
            </div>

            {special.socialMediaPost && (
                <div className="pt-6 border-t border-gray-700/50">
                    <DetailItem label="Social Media Post Idea" value={<p className="text-gray-400 italic">"{special.socialMediaPost}"</p>} />
                </div>
            )}
            
            {!special.generatedImageUrl && special.imageSuggestion && (
              <div className="pt-6 border-t border-gray-700/50">
                <DetailItem label="Image Suggestion" value={<p className="text-gray-400 italic">"{special.imageSuggestion}"</p>} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SpecialCard;
