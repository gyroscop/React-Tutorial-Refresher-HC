import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1 className="bg-green-600 p-3 rounded-md">React-Router</h1>
      </div>
      <Header />
    </>
  );
}

export default App;
