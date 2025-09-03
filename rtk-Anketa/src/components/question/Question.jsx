import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { answerQuestion } from "../../features/questionnaire/questionnaireSlice";
import styles from "./styles.module.css";

const Question = ({ question }) => {
  const dispatch = useDispatch();
  const userAnswers = useSelector((state) => state.questionnaire.userAnswers);

  const handleChange = (e) => {
    dispatch(
      answerQuestion({
        questionId: question.id,
        optionIndex: Number(e.target.value),
      })
    );
  };

  return (
    <div className={styles.question}>
      <h3>{question.text}</h3>
      {question.options.map((option, idx) => (
        <label key={idx} className={styles.option}>
          <input
            type="radio"
            name={`question-${question.id}`}
            value={idx}
            checked={userAnswers[question.id - 1] === idx}
            onChange={handleChange}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default Question;
