import React, { useState, useEffect } from "react";
import Answer from "../Answer";

function MathQuiz() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [points, setPoints] = useState(0);

  const generateQuestions = () => {
    setA(Math.floor(Math.random() * 10) + 1);
    setB(Math.floor(Math.random() * 10) + 1);
  };

  useEffect(() => {
    generateQuestions();
  }, []);

  const updatePoints = (isCorrect) => {
    if (isCorrect) {
      setPoints((prev) => prev + 1);
    } else {
      setPoints((prev) => (prev > 0 ? prev - 1 : 0));
    }
    generateQuestions();
  };

  return (
    <div>
      <h1>Math Quiz</h1>
      <p>
        Сколько будет {a} + {b} ?
      </p>
      <p>Текущий счёт: {points}</p>
      <Answer a={a} b={b} updatePoints={updatePoints} />
    </div>
  );
}
export default MathQuiz;
