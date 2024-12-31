import Board from "./Board.js";
import { useState } from "react";
import Button from "./Button.js";

function random(n) {
  return Math.ceil(Math.random() * n);
}
function App() {
  const [myHistory, setMyHistory] = useState([]); //나의 주사위 기록
  const [otherHistory, setOtherHistory] = useState([]); //상대의 주사위 기록

  const handleClick = () => {
    const nextMyNum = random(6);
    const nextOtherNum = random(6);
    // setNum(nextMyNum);
    // setOtherNum(nextOtherNum);
    // setSum(sum + nextMyNum);
    // setOtherSum(otherSum + nextOtherNum);
    setMyHistory([...myHistory, nextMyNum]);
    setOtherHistory([...otherHistory, nextOtherNum]);
  };

  const handleClearClick = () => {
    // setNum(1);
    // setSum(0);
    setMyHistory([]);
    // setOtherNum(1);
    // setOtherSum(0);
    setOtherHistory([]);
  };
  return (
    <div>
      <div>
        <Button onClick={handleClick}>던지기</Button>
        <Button onClick={handleClearClick}>처음부터</Button>
      </div>
      <div>
        <Board name="나" color="blue" gameHistory={myHistory} />
        <Board name="상대" color="red" gameHistory={otherHistory} />
      </div>
    </div>
  );
}

export default App;
