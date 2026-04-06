import { useState } from "react";

export default function App() {
  const [playermove, setPlayermove] = useState("");
  const [computermove, setcomputermove] = useState("");
  const [result, setresult] = useState("");

function handleClick(move){
    if (move == "Rock"){
        setPlayermove("🪨")
    }
    else if (move == "Paper"){
        setPlayermove("📄")
    }
    else{
        setPlayermove("✂️")
    }
}

  return (
    <div>
      <h1>Rock Paper Scissors</h1>
      <h2>Computer : You</h2>

      <button onClick={() => handleClick("Rock")}>🪨</button>
      <button onClick={() => handleClick("Paper")}>📄</button>
      <button onClick={() => handleClick("Scissors")}>✂️</button>

      <h2>Your Move: {playermove}</h2>
      <h2>Result: {result}</h2>
    </div>
  );
}
