
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { User, RestaurantProfile, SubscriptionTier, AuthContextType, Special, SignUpData } from '../types';

const MOCK_USER: User = {
  id: 'user-123',
  email: 'chef@thesizzlinggrill.com',
  subscription: SubscriptionTier.ENTREE,
  profile: {
    name: 'The Sizzling Grill',
    cuisine: 'Modern American with a focus on seasonal ingredients',
    brandIdentity: 'Upscale casual, rustic, warm, and inviting. We emphasize quality and creativity.',
    inventory: 'chicken breasts, salmon fillets, asparagus, potatoes, lemons, garlic, butter, red wine, thyme, rosemary, chocolate, berries'
  },
  specials: [
    {
      id: 'spec-001',
      dishName: 'Pan-Seared Salmon with Lemon-Dill Risotto',
      dishType: 'Main Course',
      season: 'Spring',
      menuDescription: 'Perfectly pan-seared salmon with a crispy skin, served atop a creamy lemon and dill risotto, finished with grilled asparagus spears.',
      ingredients: ['1 salmon fillet', '1 cup Arborio rice', '4 cups chicken broth', '1/2 cup dry white wine', '1 lemon (zest and juice)', '2 tbsp fresh dill, chopped', '1/2 lb asparagus', '2 tbsp olive oil', 'Salt and pepper to taste'],
      preparationSteps: ['Prepare risotto by toasting rice...', 'Sear salmon skin-side down...', 'Grill asparagus...'],
      costBreakdown: { estimatedFoodCost: 7.50, suggestedMenuPrice: 28.00, profitMarginPercentage: 73.2 },
      socialMediaPost: 'Catch of the week! Our Pan-Seared Salmon with Lemon-Dill Risotto is the perfect taste of spring. #salmon #springmenu #farmtotable',
      imageSuggestion: 'A close-up shot of the salmon on the risotto, with a rustic wooden table background. Garnish with a sprig of dill.',
      createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
    }
  ]
};


const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate checking for a logged-in user session
    const session = localStorage.getItem('menusparks_user');
    if (session) {
      setUser(JSON.parse(session));
    }
    setLoading(false);
  }, []);

  const login = (email: string): Promise<User | null> => {
    console.log(`Simulating login for ${email}`);
    // In a real app, this would be an API call
    return new Promise(resolve => {
      setTimeout(() => {
        const userData = { ...MOCK_USER, email };
        localStorage.setItem('menusparks_user', JSON.stringify(userData));
        setUser(userData);
        resolve(userData);
      }, 500);
    });
  };

  const logout = () => {
    localStorage.removeItem('menusparks_user');
    setUser(null);
  };
  
  const signup = (data: SignUpData): Promise<User | null> => {
    console.log(`Simulating signup for ${data.email}`);
    return new Promise(resolve => {
        setTimeout(() => {
            const newUser: User = {
                id: `user-${Date.now()}`,
                email: data.email,
                // On signup, user gets the starter plan by default. They can upgrade later.
                subscription: SubscriptionTier.APPETIZER, 
                profile: {
                    name: data.restaurantName,
                    cuisine: data.cuisine,
                    brandIdentity: 'e.g., Family-friendly, fine dining, rustic, modern...',
                    inventory: 'e.g., salmon, chicken thighs, potatoes, asparagus...',
                },
                specials: [],
            };

            if (data.aLaCarte) {
                console.log(`User ${data.email} selected the one-time $15 setup service.`);
                // In a real app, this would trigger a one-time charge or flag the account.
            }
            
            localStorage.setItem('menusparks_user', JSON.stringify(newUser));
            setUser(newUser);
            resolve(newUser);
        }, 500);
    });
};


  const updateProfile = (profile: RestaurantProfile): Promise<void> => {
    if (!user) return Promise.resolve();
    return new Promise<void>(resolve => {
        setTimeout(() => {
            const updatedUser = { ...user, profile };
            localStorage.setItem('menusparks_user', JSON.stringify(updatedUser));
            setUser(updatedUser);
            resolve();
        }, 300);
    });
  };
  
  const addSpecial = (newSpecialData: Omit<Special, 'id' | 'createdAt'>): Promise<void> => {
    if (!user) return Promise.resolve();
    return new Promise<void>(resolve => {
        setTimeout(() => {
            const newSpecial: Special = {
                ...newSpecialData,
                id: `spec-${Date.now()}`,
                createdAt: new Date().toISOString()
            };
            const updatedUser = { ...user, specials: [newSpecial, ...user.specials] };
            localStorage.setItem('menusparks_user', JSON.stringify(updatedUser));
            setUser(updatedUser);
            resolve();
        }, 300);
    });
  };

  const updateSpecialImage = (specialId: string, imageUrl: string): Promise<void> => {
    if (!user) return Promise.resolve();
    return new Promise<void>(resolve => {
      setTimeout(() => {
        const updatedSpecials = user.specials.map(s =>
          s.id === specialId ? { ...s, generatedImageUrl: imageUrl } : s
        );
        const updatedUser = { ...user, specials: updatedSpecials };
        localStorage.setItem('menusparks_user', JSON.stringify(updatedUser));
        setUser(updatedUser);
        resolve();
      }, 300);
    });
  };

  const value: AuthContextType = { user, loading, login, logout, signup, updateProfile, addSpecial, updateSpecialImage };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
