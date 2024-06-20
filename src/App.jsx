import React from "react";
import { useState } from "react";
import StartGame from "./component/StartGame.jsx";
import GamePlay from "./component/GamePlay.jsx";

export default function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>{isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}</>
  );
}