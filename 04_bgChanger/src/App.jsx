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
            // onClick={setColor("#fca5a5")}
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

/*

Line number 16 : 

The error you're encountering, "Too many re-renders," is because you're invoking the setColor function directly inside the onClick attribute, causing it to be called on every render of the component.

In React, when a component re-renders, every line of code within the component's function body is executed. When you invoke setColor("#fca5a5") directly in the onClick attribute, it sets the color state to #fca5a5 every time the component renders. This, in turn, triggers a re-render of the component, causing an infinite loop of re-renders and consequently the error message.

To fix this issue, you should pass a function to the onClick attribute instead of directly calling setColor. Here's the corrected code:

jsx
Copy code
<button
  onClick={() => {
    setColor("#fca5a5");
  }}
  className="outline-none px-4 py-2 m-1  rounded-full text-black shadow-lg w-20"
  style={{ backgroundColor: "#fca5a5" }}
>
  Red
</button>
By wrapping setColor("#fca5a5") in an arrow function inside the onClick attribute, you ensure that setColor is called only when the button is clicked, not on every render of the component. This prevents the infinite loop of re-renders and resolves the error.

*/
