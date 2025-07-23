

export enum SubscriptionTier {
  APPETIZER = 'The Appetizer',
  ENTREE = 'The Entrée',
  DESSERT = 'The Dessert',
}

export interface SubscriptionPlan {
  name: SubscriptionTier;
  price: number;
  features: string[];
  cta: string;
  bundleDeal?: {
    name: string; // PourPlan tier name
    price: number; // Combined price
    originalPrice: number; // Sum of individual prices
  }
}

export interface RestaurantProfile {
  name: string;
  cuisine: string;
  brandIdentity: string;
  inventory: string;
}

export interface CostBreakdown {
  estimatedFoodCost: number;
  suggestedMenuPrice: number;
  profitMarginPercentage: number;
}

export interface Special {
  id: string;
  dishName: string;
  dishType: string;
  season: string;
  menuDescription: string;
  ingredients: string[];
  preparationSteps: string[];
  costBreakdown: CostBreakdown;
  socialMediaPost?: string;
  imageSuggestion: string;
  generatedImageUrl?: string;
  createdAt: string;
}

export interface User {
  id: string;
  email: string;
  subscription: SubscriptionTier;
  profile: RestaurantProfile;
  specials: Special[];
}

export interface SignUpData {
  name: string;
  email: string;
  restaurantName: string;
  cuisine: string;
  aLaCarte: boolean;
}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string) => Promise<User | null>;
  logout: () => void;
  signup: (data: SignUpData) => Promise<User | null>;
  updateProfile: (profile: RestaurantProfile) => Promise<void>;
  addSpecial: (special: Omit<Special, 'id' | 'createdAt'>) => Promise<void>;
  updateSpecialImage: (specialId: string, imageUrl: string) => Promise<void>;
}
