import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Components/Card.jsx";

function App() {
  return (
    <>
      <h1 className="bg-green-300 text-black p-4 rounded font-semibold shadow-sm mb-3 cursor-cell">
        TailWind CSS
      </h1>
      <Card
        userName="Dibya"
        role="React Developer"
        company="Google"
        image="https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <Card
        userName="Jiu"
        role="Game Developer"
        company="Nvidia"
        image="https://images.pexels.com/photos/4467687/pexels-photo-4467687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
    </>
  );
}

export default App;
