import { useState } from "react";

export default function App() {
  const [playermove, setPlayermove] = useState("");
  const [computermove, setcomputermove] = useState("");
  const [result, setresult] = useState("");
  const [history, setHistory] = useState([]);
  const [streak, setStreak] = useState(0);

  let choices = ["Rock", "Paper", "Scissors"];

  function cpuMove() {
    let index = Math.floor(Math.random() * 3);
    return choices[index];
  }

  function winner(user, cpu) {
    if (user === cpu) return "Draw";

    if (
      (user === "Rock" && cpu === "Scissors") ||
      (user === "Paper" && cpu === "Rock") ||
      (user === "Scissors" && cpu === "Paper")
    ) {
      return "You Win 🎉";
    }

    return "Computer Win 💻";
  }

  function getEmoji(move) {
    if (move === "Rock") return "🪨";
    if (move === "Paper") return "📄";
    if (move === "Scissors") return "✂️";
    return "";
  }
  const [score, setScore] = useState({ player: 0, cpu: 0 });

  function handleClick(move) {
    const user = move;            
    const cpu = cpuMove();        
    setPlayermove(user);
    setcomputermove(cpu);
    const win = winner(user, cpu);
    setresult(win);
    if (win === "You Win 🎉") {
    setScore(prev => ({ ...prev, player: prev.player + 1 }));
  } else if (win === "Computer Win 💻") {
    setScore(prev => ({ ...prev, cpu: prev.cpu + 1 }));
  }
    setHistory(prev => [
    ...prev,
    {
      player: user,
      cpu: cpu,
      result: win
    }
  ]);
    if (win === "You Win 🎉") {
      setStreak(prev => prev + 1);
    } else {
      setStreak(0); // reset on loss or draw
    }
}

  return (
    <div>
      <h1>Rock Paper Scissors</h1>

      <h2>
        Computer {getEmoji(computermove)} : You {getEmoji(playermove)}
      </h2>

      <button onClick={() => handleClick("Rock")}>🪨</button>
      <button onClick={() => handleClick("Paper")}>📄</button>
      <button onClick={() => handleClick("Scissors")}>✂️</button>

      <h2>Result: {result}</h2>
      <h2>You: {score.player} | Computer: {score.cpu}</h2>   
      <h3>History:</h3>
      <ul>
        {history.map((item, index) => (
          <li key={index}>
            You: {getEmoji(item.player)} | CPU: {getEmoji(item.cpu)} → {item.result}
          </li>
        ))}
      </ul> 
      <h3>🔥 Streak: {streak}</h3>
      </div>
  );
}