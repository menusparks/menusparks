
import React from 'react';
import { SubscriptionPlan, SubscriptionTier } from './types';

export const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    name: SubscriptionTier.APPETIZER,
    price: 9,
    features: [
      '3-5 Weekly Specials',
      'Recipe Card & Menu Description',
      'Basic Inventory Integration',
      'Email Support',
    ],
    cta: 'Choose Appetizer',
    bundleDeal: {
      name: 'The Well',
      price: 15,
      originalPrice: 18,
    },
  },
  {
    name: SubscriptionTier.ENTREE,
    price: 15,
    features: [
      '5-7 Weekly Specials',
      'Recipe, Description & Costing',
      'Social Media Content Snippets',
      'Priority Email Support',
      'Access to Specials Database',
    ],
    cta: 'Choose Entrée',
    bundleDeal: {
      name: 'The Call',
      price: 25,
      originalPrice: 30,
    },
  },
  {
    name: SubscriptionTier.DESSERT,
    price: 25, // Price not shown, but kept for data structure
    features: [], // Features are hardcoded in the premium card
    cta: 'Learn More',
  },
];

export const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <svg
      width="40"
      height="40"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_101_2)">
        <path
          d="M63.8333 30.5C62.1667 22.5 58.5 15.5 50 15C41.5 15.5 37.8333 22.5 36.1667 30.5C36.1667 38.5 41.5 44.1667 50 51C58.5 44.1667 63.8333 38.5 63.8333 30.5Z"
          fill="#F97316"
        />
        <path
          d="M50 51C41.5 44.1667 36.1667 38.5 36.1667 30.5C32.3333 37.1667 30.8333 44.5 31.5 51C32.1667 57.5 35.8333 63.1667 40.5 66.5L50 85L59.5 66.5C64.1667 63.1667 67.8333 57.5 68.5 51C69.1667 44.5 67.6667 37.1667 63.8333 30.5C63.8333 38.5 58.5 44.1667 50 51Z"
          fill="#EF4444"
        />
      </g>
      <path
        d="M62.5 56.5C62.5 60.3333 61.3333 64.1667 58.5 66.5L50 85L41.5 66.5C38.6667 64.1667 37.5 60.3333 37.5 56.5C37.5 52.6667 40.8333 49.3333 45 48.5V41.5H55V48.5C59.1667 49.3333 62.5 52.6667 62.5 56.5Z"
        fill="#FBBF24"
      />
      <path
        d="M50 59.5C47.25 59.5 45 57.25 45 54.5C45 51.75 47.25 49.5 50 49.5C52.75 49.5 55 51.75 55 54.5C55 57.25 52.75 59.5 50 59.5Z"
      />
      <path d="M46.5 44.5H53.5V41.5H46.5V44.5Z" fill="#121212" />
      <path
        d="M48 44.5V49C48 50.1046 48.8954 51 50 51C51.1046 51 52 50.1046 52 49V44.5H48Z"
        fill="#121212"
      />
      <path
        d="M41.5 66.5C39 64.5 37.5 61.5 37.5 56.5H39.5C39.5 61 40.5 63.5 42.5 65.5L41.5 66.5Z"
        fill="#121212"
      />
      <path
        d="M58.5 66.5L57.5 65.5C59.5 63.5 60.5 61 60.5 56.5H62.5C62.5 61.5 61 64.5 58.5 66.5Z"
        fill="#121212"
      />
      <path
        d="M50 85L51 83L58.5 66.5L59.5 67.5L51.5 84L50 85Z"
        fill="#121212"
      />
      <path
        d="M50 85L49 84L40.5 67.5L41.5 66.5L49 83L50 85Z"
        fill="#121212"
      />
      <path
        d="M45 48.5C41.4101 49.2731 38.5 52.5762 38.5 56.5H36.5C36.5 52.2033 39.8594 48.4054 44 47.5V41.5H43V40.5H57V41.5H56V47.5C60.1406 48.4054 63.5 52.2033 63.5 56.5H61.5C61.5 52.5762 58.5899 49.2731 55 48.5V42.5H45V48.5Z"
        fill="#121212"
      />
      <defs>
        <filter
          id="filter0_f_101_2"
          x="11.5"
          y="-5"
          width="77"
          height="110"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_101_2" />
        </filter>
      </defs>
    </svg>
    <span className="text-2xl font-bold tracking-tighter text-yellow-400">
      MENUSPARKS
    </span>
  </div>
);

export const PourPlanLogo: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pourplan-gradient" x1="12" y1="3" x2="12" y2="12" gradientUnits="userSpaceOnUse">
          <stop stopColor="#22d3ee"/>
          <stop offset="1" stopColor="#3b82f6"/>
        </linearGradient>
      </defs>
      <path d="M3 3L21 3L12 12L3 3Z" fill="url(#pourplan-gradient)"/>
      <path d="M12 12V21" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round"/>
      <path d="M8 21H16" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round"/>
    </svg>
    <span className="text-3xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
      POURPLAN
    </span>
  </div>
);
