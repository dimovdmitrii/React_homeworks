import { useSelector } from "react-redux";
import styles from "./styles.module.css";

function Result() {
  const score = useSelector((state) => state.questionnaire.score);
  const totalQuestions = useSelector(
    (state) => state.questionnaire.questions.length
  );

  const isSubmitted = useSelector((state) => state.questionnaire.isSubmitted);

  if (!isSubmitted) {
    return null;
  }

  return (
    <div className={styles.resultContainer}>
      <h2>
        Your Score: {score} from {totalQuestions}
      </h2>
    </div>
  );
}

export default Result;
