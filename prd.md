# Butter AI: Phase 2 Product Requirements Document (PRD)

## 1. Overview & Goal
Butter AI is an AI-powered customer health engine designed to help early-stage SaaS startups detect churn risks before they occur. Founders often lose customers simply because they do not see declining engagement early enough. Butter solves this by unifying CRM notes, customer messages, and product usage signals into one clear view and translating them into actionable insight using AI.

**Updates Since Phase 1:**  
The Phase 2 prototype focuses on the marketing and storytelling components of Butter AI. The live website demonstrates the core problem, communicates the product value, and includes an AI-powered interactive Q&A chatbot describing the solution. The prototype showcases how Butter AI would assist founders in interpreting customer signals and preventing churn.

## 2. Core Features (Implemented)
| Feature | Status | AI Used? | Notes |
|--------|--------|----------|-------|
| Hero section & landing page | Complete | Yes | Frames the core customer problem and value of Butter AI. |
| About section | Complete | Yes | Explains mission, churn pain, and differentiation. |
| Product section | Complete | Yes | Describes future functions like unified data and insight scoring. |
| Interactive AI Q&A chatbot | Complete | Yes | Built through AI Studio to answer churn and product questions. |
| Contact section | Complete | Yes | Static call to action for waitlist signup. |
| Branding + Navigation | Complete | Yes | Smooth scroll, consistent colors, structured layout. |
| GitHub Pages hosting | Complete | Yes | Production build placed in /docs for hosting. |

## 3. AI Specification
### AI Role in the Prototype
The AI powers the interactive Q&A chatbot, simulating Butter’s insight engine by answering questions about churn, customer signals, and the value of unified data.

### AI Tasks
1. Natural-language understanding  
2. Founder-friendly explanation generation  
3. Tone-matched output aligned with Butter’s brand voice  

### Inputs
- User questions  
- System prompt context  
- Butter AI product description  

### Outputs
- Short, clear explanations about churn, customer health, and product value  

### Why Chosen
The model provides fast, reliable, low-friction content generation suitable for interactive demo use.

### How It Supports the Product Goal
It demonstrates Butter’s long-term AI vision: interpreting data and summarizing insights automatically.

## 4. Technical Architecture
### Frontend
- React + TypeScript  
- Vite  
- TailwindCSS  
- Components for hero, about, product, chatbot, contact  

### AI Integration
- Google AI Studio “Build” feature  
- Lightweight service wrapper for inference calls  

### Hosting
- Built using `npm run build`  
- Output placed inside `/docs` for GitHub Pages  

### Repository Structure
```
components/
docs/
services/
App.tsx
index.html
index.tsx
vite.config.ts
README.md
prd.md
```

## 5. Prompting Strategy & Iteration Log
### Prompt 1: Chatbot Behavior
**Initial:**  
“You are Butter AI, an assistant explaining customer churn and the value of unified data. Keep answers short.”

**Adjustments:**  
- Tuned for clarity  
- Reduced jargon  
- Improved brand voice consistency  

### Prompt 2: Product Explanations
**Goal:** Generate landing page copy.  
Refined for tone, style, and founder-friendly language.

### Prompt 3: UI Component Generation
Prompts used to generate Hero/Product/About components.  
Adjusted Tailwind classes, spacing, readability.

## 6. UX & Design Notes
- Clean layout emphasizing storytelling  
- Smooth navigation and simple color palette  
- Chatbot placed mid-page for engagement  
- Designed for mobile responsiveness  

**Tradeoffs**
- Chatbot not connected to real data  
- No backend or database  
- Insight engine not fully implemented  

## 7. Next Steps (Phase 3)
### Product Improvements
- Add sample customer datasets  
- Simulate churn scoring  
- Build a mini dashboard  

### Technical Roadmap
- Backend for mock customer data  
- More advanced prompt engineering  
- Add onboarding flow  

### AI Extensions
- Sentiment analysis simulation  
- Recommendation generator  
- Weekly summary mock-up  

## Live Links
(Insert after deployment)
- Live site URL  
- AI Studio link  
- GitHub repo: https://github.com/ESTEEM-GenAI-25/vibecoding-intro-KingKJuul
