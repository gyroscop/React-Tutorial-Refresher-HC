import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCounter] = useState(0);

  const addValue = () => {
    setCounter((count = count + 1));
    console.log(count);
  };

  const removeValue = () => {
    setCounter((count = count - 1));
    console.log(count);
  };

  return (
    <>
      <h1>Count is {count}</h1>
      <button onClick={addValue}>Increase Count</button>
      <button onClick={removeValue}>Decrease Count</button>
      <footer> Footer count {count}</footer>
    </>
  );
}

export default App;
