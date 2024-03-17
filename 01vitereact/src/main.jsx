import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";

function App() {
  return (
    <>
      <h1>This is a custom vite + react project</h1>
    </>
  );
}

// const customElement = {
//   type: "a",
//   props: {
//     href: "https://trends.google.com/trends/",
//     target: "_blank",
//   },
//   children: "Click me",
// };

const anotherElement = <h1>"This is just another dummy element"</h1>;

const reactElement = React.createElement(
  "a",
  { href: "https://trends.google.com/trends/", target: "_blank" },
  "click me to see trends",
  anotherElement
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>reactElement</React.StrictMode>

  reactElement
);
