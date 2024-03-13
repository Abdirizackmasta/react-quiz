import { useEffect } from "react";
import { UseQuiz } from "../context/QuizContext";

function Timer() {
  const { dispatch, secondsRemaining } = UseQuiz();
  const mins = Math.floor(secondsRemaining / 60);
  const secs = secondsRemaining % 60;
  useEffect(
    function () {
      const id = setInterval(function () {
        //   console.log("tick");
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {mins < 10 ? "0" + mins : mins}: {secs < 10 ? "0" + secs : secs}
    </div>
  );
}

export default Timer;
