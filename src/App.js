import Dice from "./Dice";
import Button from "./Button.js";

function App() {
  return (
    <div>
      <Button>던지기</Button>
      <Button>처음부터</Button>
      <Dice color="red" num={4}></Dice>
    </div>
  );
}

export default App;
