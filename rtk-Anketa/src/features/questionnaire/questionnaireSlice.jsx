import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [
    {
      id: 1,
      text: "Question 1?",
      answers: [
        {
          text: "Option 1",
          value: 1,
        },
        {
          text: "Option 2",
          value: 2,
        },
      ],
      userAnswer: null,
      correctAnswer: 1,
    },
    {
      id: 2,
      text: "Question 2?",
      answers: [
        {
          text: "Option 1",
          value: 1,
        },
        {
          text: "Option 2",
          value: 2,
        },
      ],
      userAnswer: null,
      correctAnswer: 2,
    },
    {
      id: 3,
      text: "Question 3?",
      answers: [
        {
          text: "Option 1",
          value: 1,
        },
        {
          text: "Option 2",
          value: 2,
        },
      ],
      userAnswer: null,
      correctAnswer: 1,
    },
    {
      id: 4,
      text: "Question 4?",
      answers: [
        {
          text: "Option 1",
          value: 1,
        },
        {
          text: "Option 2",
          value: 2,
        },
      ],
      userAnswer: null,
      correctAnswer: 2,
    },
    {
      id: 5,
      text: "Question 5?",
      answers: [
        {
          text: "Option 1",
          value: 1,
        },
        {
          text: "Option 2",
          value: 2,
        },
      ],
      userAnswer: null,
      correctAnswer: 2,
    },
  ],
  score: 0,
  isSubmitted: false,
};

const questionnaireSlice = createSlice({
  name: "questionnare",
  initialState,
  reducers: {
    answerQuestion: (state, action) => {
      const { questionId, answerValue } = action.payload;
      const question = state.questions.find((q) => q.id === questionId);
      if (question) {
        question.userAnswer = answerValue;
      }
    },
    submitAnswers: (state) => {
      let newScore = 0;
      state.questions.forEach((q) => {
        if (q.userAnswer === q.correctAnswer) {
          newScore += 1;
        }
      });
      state.score = newScore;
      state.isSubmitted = true;
    },
  },
});

export const { answerQuestion, submitAnswers } = questionnaireSlice.actions;
export default questionnaireSlice.reducer;
