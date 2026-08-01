# Oligopoly Study Assistant

> 🚧 **This project is currently under active development.** New features, improvements, and optimizations are being added continuously.

An AI-powered interactive study assistant inspired by **NotebookLM** that helps students understand **oligopoly** and related economics concepts through conversational AI, voice interaction, and curated educational resources. The project is built with a product-oriented architecture emphasizing scalability, clean code, and real-world deployment.

---

## 🚀 Live Demo

- **Frontend:** https://oligopoly-citrine-sage-ltd.netlify.app/
- **Backend:** https://oligopoly-backend.onrender.com/

---

## ✨ Features

- 🤖 AI-powered conversational study assistant
- 📚 Context-aware responses based on study material
- 🎙️ Voice-based questions using Speech-to-Text
- 🔊 Teacher-style answers using Text-to-Speech
- 🎤 Interactive microphone recording interface
- 🎥 Curated educational video recommendations
- 📄 PDF-based knowledge retrieval
- ⚡ Fast and responsive React UI
- 🌐 Fully deployed frontend and backend
- 🏗️ Modular and scalable architecture

---

## 🛠️ Tech Stack

### Frontend

- React (Vite)
- JavaScript (ES6+)
- HTML5
- CSS3
- Axios

### Backend

- Node.js
- Express.js
- REST APIs
- PDF Parsing

### Deployment

- Netlify
- Render

---

## 📁 Project Structure

```text
Internship-Assignment/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── data/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   └── app.js
│   ├── index.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/tanmaypaliwal576/Internship-Assignment.git
cd Internship-Assignment
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=3000
```

Start the backend server:

```bash
node index.js
```

Backend runs at:

```
http://localhost:3000
```

---

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## 📡 API

### POST `/api/ask`

### Request

```json
{
  "question": "What is oligopoly?"
}
```

### Response

```json
{
  "answer": "Oligopoly is a market structure where a few firms dominate an industry..."
}
```

---

## 🎯 Highlights

- NotebookLM-inspired AI study experience
- Voice-enabled learning
- Context-aware AI responses
- Clean REST API architecture
- Product-oriented folder structure
- Modular frontend and backend
- Cloud deployment with Netlify & Render
- Easy to extend and maintain

---

## 🚀 Future Improvements

- User authentication
- Persistent chat history
- Conversation sidebar
- Support for multiple study materials
- Dark mode
- Accessibility improvements
- Download conversations as PDF
- AI-generated quizzes
- AI-generated study notes
- Multi-language support

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create your feature branch

```bash
git checkout -b feature/your-feature
```

3. Commit your changes

```bash
git commit -m "Add your feature"
```

4. Push to your branch

```bash
git push origin feature/your-feature
```

5. Open a Pull Request

---

## 👨‍💻 Author

**Tanmay Paliwal**

B.Tech Computer Science, NMIMS Indore  
Full Stack MERN Developer

- GitHub: https://github.com/tanmaypaliwal576
- Email: tanmaypaliwal12345@gmail.com

---

## 📄 License

This project was developed as part of an internship evaluation and is intended for educational and demonstration purposes.

---

## ⭐ Support

If you found this project useful, consider giving it a **⭐ Star** on GitHub. Your support is greatly appreciated!
