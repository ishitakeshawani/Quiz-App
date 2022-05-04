export const quizReducer = (quizState, { type, payload }) => {
  switch (type) {
    case "SET_CATEGORY":
      return { ...quizState, categories: payload };

    case "SET_QUIZZES":
      return { ...quizState, quizList: payload };

    default:
      return quizState;
  }
};
