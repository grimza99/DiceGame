import Dice from "./Dice";
import Button from "./Button.js";
import { useState } from "react";
function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [num, setNum] = useState(1);
  const [sum, setSum] = useState(0);
  const [gameHistory, setGameHistory] = useState([]);

  const handleClick = () => {
    const nextNum = random(6);
    setNum(nextNum);
    setSum(sum + nextNum);
    setGameHistory([...(gameHistory + nextNum)]);
  };

  const handleClearClick = () => {
    setNum(1);
    setSum(0);
    setGameHistory([]);
  };
  return (
    <div>
      <div>
        <Button onClick={handleClick}>던지기</Button>
        <Button onClick={handleClearClick}>처음부터</Button>
      </div>
      <div>
        <h2>나</h2>
        <Dice color="blue" num={num}></Dice>
        <h2>상대</h2>
        <Dice color="red" num={num}></Dice>
        <h2>총점</h2>
        <p>{sum}</p>
        <h2>기록</h2>
        <p>{gameHistory.join(", ")}</p>
      </div>
    </div>
  );
}

export default App;
