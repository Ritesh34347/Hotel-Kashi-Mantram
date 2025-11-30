import { GoogleGenAI, Type } from "@google/genai";
import { RoomCategory, ImageAnalysisResult } from "../types";

// In a real app, this would be validated. For this demo, we assume it exists or fail gracefully.
const API_KEY = process.env.API_KEY || ""; 

const ai = new GoogleGenAI({ apiKey: API_KEY });

const SYSTEM_INSTRUCTION = `
You are an expert hotel interior designer and content manager for 'Hotel Kashi Mantram' in Varanasi.
Your task is to analyze hotel photos and categorize them into one of the following specific categories:
1. Standard / Executive Rooms
2. Premium Rooms
3. Super Premium Rooms
4. Family Suite
5. Family Studio (Terrace View)

Use visual cues:
- Terrace/View -> Family Studio
- Multiple beds/Interconnected -> Family Suite
- High luxury/Rain shower -> Super Premium
- Spacious/Sitting area -> Premium
- Compact/Functional -> Standard

Also generate a short SEO-friendly alt text and a marketing caption.
Return JSON only.
`;

export const analyzeImage = async (base64Data: string, mimeType: string): Promise<ImageAnalysisResult> => {
  if (!API_KEY) {
    // Mock response if no key is provided to prevent app crash during demo
    console.warn("No API KEY found. Returning mock analysis.");
    return new Promise(resolve => setTimeout(() => resolve({
        category: RoomCategory.PREMIUM,
        confidence: 0.85,
        altText: "Mock analysis of hotel room interior",
        caption: "AI analysis requires a valid API key. This is a placeholder."
    }), 1500));
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: {
        parts: [
          {
            inlineData: {
              mimeType: mimeType,
              data: base64Data
            }
          },
          {
            text: "Analyze this image and categorize it. Provide category, confidence score (0-1), altText, and caption."
          }
        ]
      },
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            category: { type: Type.STRING, enum: Object.values(RoomCategory) },
            confidence: { type: Type.NUMBER },
            altText: { type: Type.STRING },
            caption: { type: Type.STRING }
          },
          required: ["category", "confidence", "altText", "caption"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from Gemini");
    
    return JSON.parse(text) as ImageAnalysisResult;

  } catch (error) {
    console.error("Gemini Analysis Failed:", error);
    throw error;
  }
};
