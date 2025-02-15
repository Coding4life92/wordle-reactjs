import React, { useContext } from "react";
import { AppContext } from "../App";

const GameOver = () => {
  const { gameOver, currAttempt, correctWord } = useContext(AppContext);

  return (
    <div className="gameover">
      <h3>{gameOver.guessedWord ? "You Correctly Guessed" : "You failed"}</h3>
      <h1>Correct: {correctWord}</h1>
      {gameOver.guessedWord && (
        <h3>You Guessed in {currAttempt.attempt} at attempts</h3>
      )}
    </div>
  );
};

export default GameOver;
