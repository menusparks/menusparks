
import { GoogleGenAI, Type } from "@google/genai";
import { RestaurantProfile, Special } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const responseSchema = {
  type: Type.OBJECT,
  properties: {
    dishName: { type: Type.STRING, description: "Creative name for the dish." },
    dishType: { type: Type.STRING, description: "e.g., Appetizer, Main Course, Dessert, Cocktail." },
    season: { type: Type.STRING, description: "e.g., Summer, Winter, Year-round." },
    menuDescription: { type: Type.STRING, description: "A compelling menu description matching the restaurant's brand voice. Should be 2-3 sentences." },
    ingredients: {
      type: Type.ARRAY,
      description: "List of ingredients with quantities.",
      items: { type: Type.STRING }
    },
    preparationSteps: {
      type: Type.ARRAY,
      description: "Step-by-step preparation instructions.",
      items: { type: Type.STRING }
    },
    costBreakdown: {
      type: Type.OBJECT,
      properties: {
        estimatedFoodCost: { type: Type.NUMBER, description: "Estimated food cost per serving in USD." },
        suggestedMenuPrice: { type: Type.NUMBER, description: "Suggested price on the menu in USD." },
        profitMarginPercentage: { type: Type.NUMBER, description: "Calculated profit margin percentage." }
      }
    },
    socialMediaPost: { type: Type.STRING, description: "A short, engaging social media post with 2-3 relevant hashtags." },
    imageSuggestion: { type: Type.STRING, description: "A detailed description for generating a high-quality food photo, including composition, lighting, and mood." }
  },
  required: ['dishName', 'dishType', 'season', 'menuDescription', 'ingredients', 'preparationSteps', 'costBreakdown', 'imageSuggestion']
};

export const generateSpecial = async (
  profile: RestaurantProfile,
  existingSpecials: Special[]
): Promise<Omit<Special, 'id' | 'createdAt'>> => {
  const existingDishNames = existingSpecials.map(s => s.dishName).join(', ');

  const systemInstruction = `You are 'MenuSparks', an expert executive chef that generates innovative, profitable, and delicious weekly specials for restaurants.
Your goal is to help restaurants utilize their inventory, create exciting new dishes, and increase their revenue.
You must adhere strictly to the JSON schema provided for your response. Do not output any text outside of the JSON object.`;

  const prompt = `
    A restaurant needs a new special. Here is their profile:
    - Restaurant Name: ${profile.name}
    - Cuisine: ${profile.cuisine}
    - Brand Identity: ${profile.brandIdentity}
    - Key inventory items they want to use: ${profile.inventory}

    Here are some specials they have run recently, please create something new and different: ${existingDishNames || 'None'}

    Generate a single, complete, and creative menu special based on this information.
    The special should be profitable, sound delicious, and match the restaurant's brand.
    Calculate a realistic cost breakdown.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        responseMimeType: "application/json",
        responseSchema: responseSchema,
        temperature: 0.8,
      },
    });

    const jsonText = response.text.trim();
    const parsedJson = JSON.parse(jsonText);

    // Basic validation to ensure the parsed object fits the expected structure
    if (!parsedJson.dishName || !parsedJson.costBreakdown) {
      throw new Error("Invalid JSON structure received from service.");
    }

    return parsedJson as Omit<Special, 'id' | 'createdAt'>;

  } catch (error: any) {
    console.error("Error generating special with Gemini API:", error);
    if (error.message.includes('API_KEY')) {
        throw new Error("The API key is invalid or missing. Please check your configuration.");
    }
    throw new Error("Failed to generate a special. The service may be busy or an error occurred. Please try again.");
  }
};
