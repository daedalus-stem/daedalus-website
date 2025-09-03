import { useEffect, useState } from "react";

type LeaderboardEntry = {
  name: string;
  score: number;
  created_at: string;
};

export default function Leaderboard() {
  const [scores, setScores] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    fetch("http://localhost:8001/leaderboard")
      .then((res) => res.json())
      .then((data) => setScores(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>🏁 Leaderboard</h1>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "8px" }}>Rank</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Name</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Time (ms)</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Date</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((entry, idx) => (
            <tr key={idx}>
              <td style={{ border: "1px solid black", padding: "8px" }}>{idx + 1}</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>{entry.name}</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>{entry.score.toFixed(2)}</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {new Date(entry.created_at).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
