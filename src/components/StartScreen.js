import { UseQuiz } from "../context/QuizContext";

function StartScreen() {
  const { numQuestions, dispatch } = UseQuiz();
  return (
    <div className="start">
      <h2>Welcome to the React Quiz!</h2>
      <h3> {numQuestions} questions to test your React Mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start!
      </button>
    </div>
  );
}

export default StartScreen;
