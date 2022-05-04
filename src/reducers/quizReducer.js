export const quizReducer = (quizState, { type, payload }) => {
  switch (type) {
    case "SET_CATEGORY":
      return { ...quizState, categories: payload };

    case "SET_QUIZZES":
      return { ...quizState, quizList: payload };

    case "SET_CURRENT_QUESTION_INDEX":
      return { ...quizState, currentQuestionIndex: payload };

    case "SET_SELECTED_OPTION":
      return {
        ...quizState,
        quizList: quizState.quizList.map((quiz) =>
          quiz._id === payload.quizId
            ? {
                ...quiz,
                score: quiz.score + payload.score,
                questionsList: quiz.questionsList.map((question) =>
                  question._id === payload.questionId
                    ? {
                        ...question,
                        options: question.options.map((option) =>
                          option._id == payload.optionId
                            ? { ...option, isSelected: payload.isSelected }
                            : option
                        ),
                      }
                    : question
                ),
              }
            : quiz
        ),
      };

    default:
      return quizState;
  }
};
