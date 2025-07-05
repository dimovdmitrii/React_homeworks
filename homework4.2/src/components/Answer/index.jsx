import React, { useState } from "react";


function Answer({ a, b, updatePoints }) {
  const [userAnswer, setUserAnswer] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const correctAnswer = a + b;
    const isCorrect = parseInt(userAnswer, 10) === correctAnswer;
    updatePoints(isCorrect);
    setUserAnswer("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={userAnswer}
        onChange={(event) => setUserAnswer(event.target.value)}
        placeholder="Введите ответ"
        required
      />
      <button type="submit">Проверить </button>
    </form>
  );
}

export default Answer;
