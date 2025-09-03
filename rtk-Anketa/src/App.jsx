import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import Question from "./components/Question/Question";
import Result from "./components/result/Result";
import { submitAnswers } from "./features/questionnaire/questionnaireSlice";

function App() {
  const questions = useSelector((state) => state.questionnaire.questions);
  const dispatch = useDispatch();
  const isSubmitted = useSelector((state) => state.questionnaire.isSubmitted);

  const handleSubmit = () => {
    dispatch(submitAnswers());
  };

  return (
    <div className="app-container">
      <h1>Quiz</h1>
      {questions.map((question) => (
        <Question key={question.id} question={question} />
      ))}
      <button onClick={handleSubmit} disabled={isSubmitted}>
        Send
      </button>
      <Result />
    </div>
  );
}

export default App;
