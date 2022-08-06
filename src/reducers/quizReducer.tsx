import { quizzes } from "../backend/db/quizzes";
import { InitialStateType, QuizAction } from "../contexts/QuizContext.type";

export const quizReducer = (
  quizState: InitialStateType,
  action: QuizAction
) => {
  switch (action.type) {
    case "SET_CATEGORY":
      return { ...quizState, categories: action.payload.categories };

    case "SET_QUIZZES":
      return { ...quizState, quizList: action.payload.quizList };

    case "SET_CURRENT_QUESTION_INDEX":
      return { ...quizState, currentQuestionIndex: action.payload.currentQuestionIndex };

    // This is for set option which is selected by user.
    // Here will find quiz,question and it's option then will set isSeelected to true.
    case "SET_SELECTED_OPTION":
      return {
        ...quizState,
        quizList: quizState.quizList.map((quiz) =>
          quiz._id === action.payload.quizId
            ? {
              ...quiz,
              score: quiz.score + action.payload.score,
              questionsList: quiz.questionsList.map((question) =>
                question._id === action.payload.questionId
                  ? {
                    ...question,
                    options: question.options.map((option) =>
                      option._id == action.payload.optionId
                        ? { ...option, isSelected: action.payload.isSelected }
                        : option
                    ),
                  }
                  : question
              ),
            }
            : quiz
        ),
      };

    case "RESET_QUIZ": {
      return {
        ...quizState,
        quizList: quizzes,
        currentQuestionIndex: 0,
      };
    }

    default:
      throw new Error(`action type not found.`);
  }
};
