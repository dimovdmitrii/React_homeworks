import { useSelector, useDispatch } from "react-redux";
import {
  submitAnswers,
  reset,
} from "./features/questionnaire/questionnaireSlice";
import Question from "./components/Question/Question";
import Result from "./components/result/Result";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questionnaire.questions);
  const submitted = useSelector((state) => state.questionnaire.submitted);
  const userAnswers = useSelector((state) => state.questionnaire.userAnswers);

  const allAnswered = userAnswers.every((answer) => answer !== null);

  const handleSubmit = () => {
    if (allAnswered) {
      dispatch(submitAnswers());
    } else {
      alert("Please answer all questions before submitting.");
    }
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div className="app">
      <h1>Questionnaire</h1>
      {questions.map((q) => (
        <Question key={q.id} question={q} />
      ))}

      {!submitted ? (
        <button
          className="submitButton"
          onClick={handleSubmit}
          disabled={!allAnswered}
        >
          Submit
        </button>
      ) : (
        <>
          <Result />
          <button className="submitButton" onClick={handleReset}>
            Restart
          </button>
        </>
      )}
    </div>
  );
}

export default App;
