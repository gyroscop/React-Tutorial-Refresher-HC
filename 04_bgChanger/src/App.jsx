import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="w-screen h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12  inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => {
              setColor("#fca5a5");
            }}
            className="outline-none px-4 py-2 m-1  rounded-full text-black shadow-lg w-20"
            style={{ backgroundColor: "#fca5a5" }}
          >
            Red
          </button>

          <button
            onClick={() => {
              setColor("#34d399");
            }}
            className="outline-none px-4 py-2 m-1  rounded-full text-black shadow-lg w-20"
            style={{ backgroundColor: "#34d399" }}
          >
            Green
          </button>

          <button
            onClick={() => {
              setColor("#7dd3fc");
            }}
            className="outline-none px-4 py-2 m-1  rounded-full text-black shadow-lg w-20"
            style={{ backgroundColor: "#7dd3fc" }}
          >
            Blue
          </button>

          <button
            onClick={() => {
              setColor("#7dd3fc");
            }}
            className="outline-none px-4 py-2 m-1  rounded-full text-black shadow-lg w-20"
            style={{ backgroundColor: "#c4b5fd" }}
          >
            Violet
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
