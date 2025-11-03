
import { GoogleGenAI, Chat } from "@google/genai";

// Ensure the API key is available from environment variables
if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// System instruction to prime the chatbot
const systemInstruction = `You are a friendly and knowledgeable AI assistant for a startup called Butter AI. 
Butter AI helps early-stage SaaS founders detect customer churn before it happens by unifying CRM, Slack, and usage data into one clear dashboard.
Key features include:
1. Customer Health Scoring: AI-driven scores based on multi-channel interactions.
2. Insight Summaries: Natural language explanations for why a customer is at risk.
3. Automated Alerts: Timely Slack notifications for at-risk customers.
Your goal is to answer questions about Butter AI concisely and encourage visitors to sign up for early access. Be helpful and professional.`;

// Create and export a single chat instance to maintain conversation history
export const chat: Chat = ai.chats.create({
  model: 'gemini-2.5-flash',
  config: {
    systemInstruction,
  },
});

export const sendMessageToAI = async (message: string) => {
  try {
    const result = await chat.sendMessageStream({ message });
    return result;
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    throw new Error("Failed to get a response from the AI. Please try again.");
  }
};
