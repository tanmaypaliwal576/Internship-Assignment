import { useState } from "react";
import axios from "axios";
import MessageBubble from "../components/MessageBubble";
import InputBox from "../components/InputBox";
import { speakText } from "../utils/speak";

export default function StudyChat() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendQuestion = async (question) => {
    setMessages((prev) => [...prev, { role: "student", content: question }]);
    setLoading(true);

    const res = await axios.post("http://localhost:3000/api/ask", { question });

    setMessages((prev) => [
      ...prev,
      { role: "teacher", content: res.data.answer },
    ]);

    speakText(res.data.answer);
    setLoading(false);
  };

  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "14px",
        border: "1px solid #e2e8f0",
        height: "520px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          flex: 1,
          padding: "20px",
          overflowY: "auto",
        }}
      >
        {messages.length === 0 ? (
          <div
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              color: "#64748b",
            }}
          >
            <div>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "#e2e8f0",
                  margin: "0 auto 12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                💬
              </div>
              <strong>Start the conversation</strong>
              <p style={{ fontSize: "14px" }}>
                Ask any question about oligopoly, market structures, or
                economics concepts
              </p>
            </div>
          </div>
        ) : (
          messages.map((msg, i) => (
            <MessageBubble key={i} role={msg.role} text={msg.content} />
          ))
        )}

        {loading && <p>Teacher is thinking…</p>}
      </div>

      <div
        style={{
          padding: "14px",
          borderTop: "1px solid #e2e8f0",
        }}
      >
        <InputBox onSend={sendQuestion} />
      </div>
    </div>
  );
}
