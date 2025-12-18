import { useState } from "react";
import { listenOnce } from "../utils/listen";

export default function InputBox({ onSend }) {
  const [input, setInput] = useState("");
  const [recording, setRecording] = useState(false);

  const startVoice = () => {
    listenOnce(
      (spokenText) => {
        if (spokenText) {
          onSend(spokenText);
        }
      },
      () => {
        // onStart
        setRecording(true);
      },
      () => {
        // onEnd
        setRecording(false);
      }
    );
  };

  return (
    <>
      {/* 🔴 Recording Popup */}
      {recording && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "#ffffff",
              padding: "30px 40px",
              borderRadius: "14px",
              textAlign: "center",
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
            }}
          >
            <div
              style={{
                fontSize: "36px",
                marginBottom: "10px",
                animation: "pulse 1.2s infinite",
              }}
            >
              🎙️
            </div>
            <h3 style={{ margin: "0 0 6px" }}>Listening…</h3>
            <p style={{ margin: 0, color: "#64748b", fontSize: "14px" }}>
              Speak now. Recording will stop automatically.
            </p>
          </div>
        </div>
      )}

      {/* Input Bar */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          background: "#f1f5f9",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question about oligopoly..."
          disabled={recording}
          style={{
            flex: 1,
            border: "none",
            outline: "none",
            background: "transparent",
          }}
        />

        <button
          onClick={() => {
            if (!input.trim()) return;
            onSend(input);
            setInput("");
          }}
          disabled={recording}
          style={{
            background: "#94a3b8",
            color: "white",
            padding: "8px 10px",
            borderRadius: "8px",
            opacity: recording ? 0.6 : 1,
          }}
        >
          ➤
        </button>

        <button
          onClick={startVoice}
          disabled={recording}
          style={{
            background: "#0f172a",
            color: "white",
            padding: "8px 10px",
            borderRadius: "8px",
            opacity: recording ? 0.6 : 1,
          }}
        >
          🎙️
        </button>
      </div>
    </>
  );
}
