import React from "react";
import { useSelector } from "react-redux";
import styles from "./styles.module.css";

const Result = () => {
  const { submitted, score } = useSelector((state) => state.questionnaire);

  if (!submitted) return null;

  return (
    <div className={styles.result}>
      <h2>Your Score: {score}</h2>
    </div>
  );
};

export default Result;
