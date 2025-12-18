# Oligopoly Study Assistant
AI-Powered Interactive Study Tool (NotebookLM-Inspired)

An interactive AI-based study assistant designed to help students understand oligopoly and related economics concepts through conversational learning, voice interaction, and curated video resources. The project emphasizes clean architecture, real-world deployment, and a product-oriented engineering approach.

Live Demo  
Frontend: https://oligopoly-citrine-sage-ltd.netlify.app/  
Backend API: https://oligopoly-backend.onrender.com/

Key Features  
• Interactive study chat inspired by NotebookLM  
• Context-aware AI responses based on study material  
• Voice-based student questions using speech-to-text  
• Teacher-style audio responses using text-to-speech  
• Clear voice-recording popup during microphone usage  
• Curated video resources for concept clarity and exam preparation  
• Fully deployed frontend and backend on modern cloud platforms  

Tech Stack  
Frontend: React (Vite), JavaScript (ES6+), HTML5, CSS3, Axios  
Backend: Node.js, Express.js, REST APIs, PDF parsing  
Deployment: Netlify (Frontend), Render (Backend)

Product-Level Project Structure  

This project follows a scalable, production-grade structure with clear separation of concerns. The current implementation prioritizes delivery and clarity, while the structure below represents how the application is designed to scale in a real product environment.

Repository Root  
oligopoly-study-assistant/  
backend/  
frontend/  
README.md  

Backend Structure (Product-Grade Design)  
backend/  
src/  
app.js – Express app initialization and middleware  
routes/ – API route definitions (e.g., /api/ask)  
controllers/ – Request handling and flow control  
services/ – AI logic, voice processing, and business rules  
utils/ – PDF parsing and helper utilities  
config/ – Environment and configuration handling  
data/ – Study material (chapter.pdf)  
index.js – Server entry point  
.env – Environment variables  
package.json – Backend dependencies  

Frontend Structure (Product-Grade Design)  
frontend/  
src/  
components/ – Reusable UI components (chat input, messages, recording modal)  
pages/ – Application views (Study Chat, Video Resources)  
services/ – API communication layer  
hooks/ – Voice recording and audio logic  
utils/ – Shared constants and helpers  
App.jsx – Application root  
main.jsx – React entry point  
public/ – Static assets  
vite.config.js – Vite configuration  
package.json – Frontend dependencies  

Local Setup Instructions  

1. Clone the repository  
git clone https://github.com/tanmaypaliwal576/Internship-Assignment.git  
cd Internship-Assignment  

2. Backend setup  
cd backend  
npm install  
Create a .env file:  
PORT=3000  
Start the backend server:  
node index.js  
Backend runs at: http://localhost:3000  

3. Frontend setup  
cd ../frontend  
npm install  
npm run dev  
Frontend runs at: http://localhost:5173  

API Endpoint  

POST /api/ask  

Request body:  
{  
  "question": "What is oligopoly?"  
}  

Response:  
{  
  "answer": "Oligopoly is a market structure where a few firms dominate the industry..."  
}  

Future Improvements  

With additional time, the following enhancements would be implemented:  
• Preserving chat history across page reloads  
• Improved UI/UX polish and accessibility  
• Conversation history sidebar  
• Advanced voice controls and transcripts  
• User authentication for personalized learning  

Author  

Tanmay Paliwal  
B.Tech Computer Science Student, NMIMS Indore  
Full Stack Developer (MERN)  
GitHub: https://github.com/tanmaypaliwal576  
Email: tanmaypaliwal12345@gmail.com  

License  

This project is created for internship evaluation and educational purposes only.
