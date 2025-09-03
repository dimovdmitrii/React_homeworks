import { useDispatch, useSelector } from "react-redux";
import { answerQuestion } from "../../features/questionnaire/questionnaireSlice";
import styles from "./styles.module.css";

function Question({ question }) {
  const dispatch = useDispatch();
  const userAnswer = useSelector(
    (state) =>
      state.questionnaire.questions.find((q) => q.id === question.id).userAnswer
  );
  const isSubmitted = useSelector((state) => state.questionnaire.isSubmitted);

  const handleAnswer = (answerValue) => {
    if (!isSubmitted) {
      dispatch(answerQuestion({ questionId: question.id, answerValue }));
    }
  };

  const isCorrect = isSubmitted && userAnswer === question.correctAnswer;
  const isIncorrect = isSubmitted && userAnswer !== question.correctAnswer;

  return (
    <div className={styles.questionContainer}>
      <h3>{question.text}</h3>
      <div className={styles.answerOptions}>
        {question.answers.map((answer) => (
          <button
            key={answer.value}
            onClick={() => handleAnswer(answer.value)}
            disabled={isSubmitted}
            className={`${styles.answerBtn}
                ${userAnswer === answer.value ? styles.selected : ""}
                ${
                  isSubmitted && answer.value === question.correctAnswer
                    ? styles.correct
                    : ""
                }
                ${
                  isIncorrect && userAnswer === answer.value
                    ? styles.incorrect
                    : ""
                }
                `}
          >
            {answer.text}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
