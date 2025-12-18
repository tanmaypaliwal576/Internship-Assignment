export default function MessageBubble({ role, text }) {
  const isTeacher = role === "teacher";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: isTeacher ? "flex-start" : "flex-end",
        marginBottom: "12px",
      }}
    >
      <div
        style={{
          maxWidth: "70%",
          background: isTeacher ? "#f1f5f9" : "#2563eb",
          color: isTeacher ? "#0f172a" : "#ffffff",
          padding: "12px 14px",
          borderRadius: "12px",
          fontSize: "14px",
        }}
      >
        {text}
      </div>
    </div>
  );
}
