import { useState } from "react";
import StudyChat from "./pages/StudyChat";
import VideoSummary from "./components/VideoSummary";

export default function App() {
  const [tab, setTab] = useState("chat");

  return (
    <div
      style={{
        maxWidth: "980px",
        margin: "40px auto",
        padding: "0 20px",
      }}
    >
      {/* Badge */}
      <div style={{ textAlign: "center", marginBottom: "14px" }}>
        <span
          style={{
            background: "#e2e8f0",
            padding: "6px 14px",
            borderRadius: "999px",
            fontSize: "13px",
          }}
        >
          📘 Interactive Study
        </span>
      </div>

      {/* Title */}
      <h1 style={{ textAlign: "center", margin: 0 }}>
        Oligopoly Study Assistant
      </h1>

      <p
        style={{
          textAlign: "center",
          marginTop: "8px",
          color: "#475569",
        }}
      >
        Ask questions, listen to explanations, and study efficiently with
        AI-powered assistance
      </p>

      {/* Tabs */}
      <div
        style={{
          display: "flex",
          background: "#cbd5e1",
          borderRadius: "10px",
          padding: "4px",
          marginTop: "24px",
        }}
      >
        <button
          onClick={() => setTab("chat")}
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "8px",
            background: tab === "chat" ? "#ffffff" : "transparent",
            fontWeight: 500,
          }}
        >
          💬 Chat
        </button>

        <button
          onClick={() => setTab("video")}
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "8px",
            background: tab === "video" ? "#ffffff" : "transparent",
            fontWeight: 500,
          }}
        >
          🎥 Video Resources
        </button>
      </div>

      {/* Content */}
      <div style={{ marginTop: "20px" }}>
        {tab === "chat" ? <StudyChat /> : <VideoSummary />}
      </div>
    </div>
  );
}
