export default function VideoSummary() {
  return (
    <div style={{ maxWidth: "900px", margin: "40px auto" }}>
      <h2>🎥 Video Summary — Oligopoly</h2>

      <p>
        These videos explain the concept of oligopoly visually. Watch them for
        better understanding and exam preparation.
      </p>

      <div style={{ marginBottom: "30px" }}>
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/Ec19ljjvlCI"
          title="Oligopoly Explained"
          allowFullScreen
        />
      </div>

      <div style={{ marginBottom: "30px" }}>
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/Z_S0VA4jKes"
          title="Oligopoly Exam Tips"
          allowFullScreen
        />
      </div>

      <h3>📝 Exam-Oriented Summary</h3>
      <ul>
        <li>Oligopoly is a market with a few dominant firms.</li>
        <li>Firms are interdependent in decision-making.</li>
        <li>Price rigidity often occurs due to the kinked demand curve.</li>
        <li>Examples include telecom, airlines, and automobile industries.</li>
        <li>Collusion may occur formally or informally.</li>
      </ul>
    </div>
  );
}
