import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [
    {
      id: 1,
      text: "Question 1?",
      options: ["Option 1", "Option 2"],
      answer: 0,
    },
    {
      id: 2,
      text: "Question 2?",
      options: ["Option 1", "Option 2"],
      answer: 1,
    },
    {
      id: 3,
      text: "Question 3?",
      options: ["Option 1", "Option 2"],
      answer: 0,
    },
    {
      id: 4,
      text: "Question 4?",
      options: ["Option 1", "Option 2"],
      answer: 0,
    },
    {
      id: 5,
      text: "Question 5?",
      options: ["Option 1", "Option 2"],
      answer: 1,
    },
  ],
  userAnswers: Array(5).fill(null),
  submitted: false,
  score: 0,
};

const questionnaireSlice = createSlice({
  name: "questionnaire",
  initialState,
  reducers: {
    answerQuestion: (state, action) => {
      const { questionId, optionIndex } = action.payload;
      state.userAnswers[questionId - 1] = optionIndex;
    },
    submitAnswers: (state) => {
      state.submitted = true;
      let calculatedScore = 0;
      state.questions.forEach((q, idx) => {
        if (state.userAnswers[idx] === q.answer) {
          calculatedScore += 1;
        }
      });
      state.score = calculatedScore;
    },
    reset: (state) => {
      state.userAnswers = Array(state.questions.length).fill(null);
      state.submitted = false;
      state.score = 0;
    },
  },
});

export const { answerQuestion, submitAnswers, reset } =
  questionnaireSlice.actions;
export default questionnaireSlice.reducer;
