import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCounter] = useState(0);

  const addValue = () => {
    if (count == 20) {
      alert("No more increment allowed");
      return;
    }
    setCounter((count) => count + 1);
    setCounter((count) => count + 1); // per increment 2

    /*
    setCounter( count + 1);
    setCounter(count + 1); // per increment 1
    */

    /*
    setCounter( count =  count + 1);
    setCounter(count =  count + 1); // per increment 2
    */

    console.log(count);
  };

  const removeValue = () => {
    if (count == 0) {
      alert("No more decrement allowed");
      return;
    }
    setCounter((count = count - 1)); // works with let only
    // setCounter((count) => count - 1);  works with const + let

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
