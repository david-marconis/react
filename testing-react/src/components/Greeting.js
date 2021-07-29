import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const textChangeHandler = () => {
    setChangedText(true);
  };
  return (
    <div>
      <h2>Hello world</h2>
      {!changedText && <Output>It's good to see you!</Output>}
      {changedText && <Output>Changed!</Output>}
      <button onClick={textChangeHandler}>Change text!</button>
    </div>
  );
};

export default Greeting;
