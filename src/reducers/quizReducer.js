export const quizReducer = (quizState, { type, payload }) => {
  switch (type) {
    case "SET_CATEGORY":
      return { ...quizState, categories: payload };
      break;

    default:
      return quizState;
  }
};
