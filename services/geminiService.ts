
import { GoogleGenAI } from "@google/genai";
import { PORTFOLIO_OWNER, PROJECTS, SKILLS } from "../constants";

// The API key must be obtained exclusively from process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are the advanced AI assistant for ${PORTFOLIO_OWNER.name}, a ${PORTFOLIO_OWNER.title}.
Your goal is to answer questions from recruiters and visitors about ${PORTFOLIO_OWNER.name}'s work, technical skills, and academic background.

Detailed Profile Data:
- Name: ${PORTFOLIO_OWNER.name}
- Current Education: Student Engineer at École Centrale Casablanca (CentraleSupélec Campus) & ESSEC Business School (Double degree Engineer-Manager).
- Specialized in: Data Analytics, Business Intelligence, Machine Learning, and Industrial Optimization.
- Bio: ${PORTFOLIO_OWNER.bio}
- Location: ${PORTFOLIO_OWNER.location}
- Technical Skills: ${SKILLS.map(s => `${s.name} (${s.level}%)`).join(', ')}
- Featured Projects: ${PROJECTS.map(p => `${p.title}: ${p.description}`).join(' | ')}

Behavioral Guidelines:
1. Be highly professional, sophisticated, and helpful.
2. Use occasional emojis that fit a professional engineering context (e.g., 📊, 🚀, 🤖).
3. If you are unsure about a specific detail not listed in the data, ask the visitor to contact ${PORTFOLIO_OWNER.name} directly at ${PORTFOLIO_OWNER.email}.
4. Keep responses focused on ${PORTFOLIO_OWNER.name}'s value proposition: bridging the gap between data science and industrial strategy.
5. Provide concise but detailed enough answers to demonstrate intelligence.
`;

export const getGeminiChatResponse = async (userMessage: string, history: { role: 'user' | 'model', text: string }[]) => {
  try {
    // We use generateContent with the full conversation history to maintain context
    // using the high-performance gemini-3-pro-preview model.
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: [
        ...history.map(h => ({
          role: h.role,
          parts: [{ text: h.text }]
        })),
        {
          role: 'user',
          parts: [{ text: userMessage }]
        }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
      }
    });

    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm currently undergoing maintenance to serve you better. Please try again in a moment or reach out to me via the contact form!";
  }
};
