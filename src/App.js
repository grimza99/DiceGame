import Dice from "./Dice";
import Button from "./Button.js";
import { useState } from "react";

function App() {
  const [num, setNum] = useState(1);
  const handleClick = () => {
    setNum(random(6));
  };
  function random(n) {
    return Math.ceil(Math.random() * n);
  }
  const handleClearClick = () => {
    setNum(1);
  };
  return (
    <div>
      <Button onClick={handleClick}>던지기</Button>
      <Button onClick={handleClearClick}>처음부터</Button>
      <Dice color="red" num={num}></Dice>
    </div>
  );
}

export default App;
