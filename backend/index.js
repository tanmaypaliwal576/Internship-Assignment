const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const fs = require("fs");
const pdfParse = require("pdf-parse"); // v1.1.1
const { SambaNova } = require("sambanova");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// ------------------------------------
// SAMBANOVA CLIENT
// ------------------------------------
const client = new SambaNova({
  api_key: process.env.SAMBANOVA_API_KEY,
  base_url: "https://api.sambanova.ai/v1",
});

// ------------------------------------
// GLOBAL STATE
// ------------------------------------
let knowledgeBase = "";
let isPDFLoaded = false;

// ------------------------------------
// LOAD & CLEAN PDF (OLIGOPOLY)
// ------------------------------------
async function loadPDF() {
  try {
    const dataBuffer = fs.readFileSync("./data/chapter.pdf");
    const pdfData = await pdfParse(dataBuffer);

    knowledgeBase = pdfData.text
      .replace(/\n+/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    isPDFLoaded = true;
    console.log("✅ PDF loaded successfully");
  } catch (error) {
    console.error("❌ PDF load error:", error.message);
    process.exit(1);
  }
}

// ------------------------------------
// HEALTH CHECK
// ------------------------------------
app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    pdfLoaded: isPDFLoaded,
  });
});

// ------------------------------------
// NOTEBOOKLM-STYLE ASK API (SAMBANOVA)
// ------------------------------------
app.post("/api/ask", async (req, res) => {
  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: "Question is required" });
  }

  if (!isPDFLoaded) {
    return res.status(503).json({ error: "Study material is still loading" });
  }

  try {
    const systemPrompt = `
You are an economics teacher.

RULES:
- Answer ONLY using the provided study material.
- If the question is outside the material, say:
  "This question is outside the provided study material."
- Explain concepts in simple, student-friendly language.
- Keep answers concise and exam-oriented.
`;

    const response = await client.chat.completions.create({
      model: "ALLaM-7B-Instruct-preview",
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: `STUDY MATERIAL:\n${knowledgeBase}\n\nQUESTION:\n${question}`,
        },
      ],
      temperature: 0.1,
      top_p: 0.1,
    });

    const answer = response.choices[0].message.content;

    res.json({
      role: "teacher",
      answer,
    });
  } catch (error) {
    console.error("❌ SambaNova Error:", error.message);
    res.status(500).json({ error: "Failed to generate answer" });
  }
});

// ------------------------------------
// START SERVER AFTER PDF LOAD
// ------------------------------------
(async () => {
  await loadPDF();

  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
})();
