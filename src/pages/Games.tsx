import { useState, useEffect, useCallback } from "react";

type GameState = "idle" | "waiting" | "ready" | "tooSoon" | "result";

export default function Games() {
  const [lights, setLights] = useState(0); // 0 = off, 1–5 = red lights
  const [gameState, setGameState] = useState<GameState>("idle");
  const [startTime, setStartTime] = useState(0);
  const [reaction, setReaction] = useState<number | null>(null);
  const [leaderboard, setLeaderboard] = useState<
    { name: string; score: number }[]
  >([]);
  const [playerName, setPlayerName] = useState("");

  // Load leaderboard on mount
  useEffect(() => {
    fetch("http://localhost:8001/leaderboard")
      .then((res) => res.json())
      .then(setLeaderboard)
      .catch(console.error);
  }, []);

  /** Starts the reaction test */
  const startGame = () => {
    setLights(0);
    setGameState("waiting");
    setReaction(null);

    let count = 0;
    const interval = setInterval(() => {
      count++;
      setLights(count);
      if (count === 5) {
        clearInterval(interval);
        const randomDelay = Math.random() * 2000 + 1000;
        setTimeout(() => {
          setGameState("ready");
          setLights(0);
          setStartTime(Date.now());
        }, randomDelay);
      }
    }, 800);
  };

  /** Handles stopping the game when space is pressed */
  const stopGame = useCallback(() => {
    if (gameState === "waiting") {
      setGameState("tooSoon");
    } else if (gameState === "ready") {
      const time = Date.now() - startTime;
      setReaction(time);
      setGameState("result");
    }
  }, [gameState, startTime]);

  // Listen for spacebar press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault();
        stopGame();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [stopGame]);

  /** Submits player score to backend */
  const submitScore = async () => {
    if (!playerName || reaction === null) {
      alert("Enter your name and play first!");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", playerName);
      formData.append("score", reaction.toString());

      const res = await fetch("http://localhost:8001/submit-score", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        const updated = await fetch("http://localhost:8001/leaderboard").then(
          (r) => r.json()
        );
        setLeaderboard(updated);
      } else {
        console.error(await res.text());
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      className="w3-row-padding w3-margin-top"
      style={{ fontFamily: "'Orbitron', sans-serif" }}
    >
      {/* Reaction Test Section */}
      <div className="w3-half w3-center">
        <h1 className="w3-text-red">F1 Reaction Time Test</h1>
        <p>
          Press <strong>Spacebar</strong> when the lights go out!
        </p>

        {/* Lights */}
        <div className="w3-margin">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className="w3-circle"
              style={{
                display: "inline-block",
                width: "50px",
                height: "50px",
                margin: "10px",
                backgroundColor: lights > i ? "red" : "#555",
              }}
            />
          ))}
        </div>

        {/* Start Button */}
        <button
          onClick={startGame}
          className="w3-button w3-red w3-large w3-round-xlarge"
          disabled={gameState === "waiting" || gameState === "ready"}
        >
          {["idle", "result", "tooSoon"].includes(gameState)
            ? "Start Game"
            : "Game Running..."}
        </button>

        {/* Results */}
        <div className="w3-margin">
          {gameState === "result" && <h2>Your time: {reaction} ms</h2>}
          {gameState === "tooSoon" && (
            <h2 className="w3-text-orange">Too soon! 🚫</h2>
          )}
        </div>

        {/* Score Submission */}
        {gameState === "result" && (
          <div className="w3-margin">
            <input
              type="text"
              placeholder="Enter your name"
              className="w3-input w3-border w3-round"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
            />
            <button
              onClick={submitScore}
              className="w3-button w3-green w3-margin-top w3-round"
            >
              Submit Score
            </button>
          </div>
        )}
      </div>

      {/* Leaderboard Section */}
      <div className="w3-half w3-padding-large">
        <h2 className="w3-center w3-text-blue">🏆 Leaderboard</h2>
        <table className="w3-table-all w3-hoverable w3-centered">
          <thead>
            <tr className="w3-red">
              <th>Rank</th>
              <th>Name</th>
              <th>Time (ms)</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((entry, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>
                  <strong>{entry.name}</strong>
                </td>
                <td>{entry.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
