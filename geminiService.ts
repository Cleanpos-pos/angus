
import { GoogleGenAI, Type } from "@google/genai";
import { MENU_ITEMS } from "./constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getMenuRecommendation(userPreference: string) {
  const menuContext = MENU_ITEMS.map(item => {
    const prices = item.prices ? item.prices.map(p => `${p.label}: ${p.price}`).join(', ') : item.price;
    return `${item.name} [${item.category}/${item.subcategory || 'Main'}]: ${item.description} (${prices})`;
  }).join('\n');
  
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Based on this extensive menu:\n${menuContext}\n\nRecommend a full meal for a user who says: "${userPreference}". Suggest a main, a side, and a drink if applicable. Mention the pricing options clearly. Keep the tone high-energy, urban, and Appetizing.`,
    config: {
      systemInstruction: "You are the Angus Burger AI Assistant in Wembley. You know every item on the menu from Beef Burgers to the Greek Meze. You are friendly, street-smart, and very enthusiastic about flame-grilled food. Keep responses brief, formatted with bold highlights, and punchy.",
      temperature: 0.8,
    },
  });

  return response.text;
}
