import { Category } from "../components/categories/Category.type"
import { Quiz } from "./Quiz.type"

export type QuizProviderProps = {
    children: JSX.Element
}

export type InitialStateType = {
    categories: Category[],
    quizList: Quiz[],
    currentQuestionIndex: number,
}

export type ContextType = {
    quizState: InitialStateType;
    dispatch: React.Dispatch<QuizAction>;
}

export type QuizAction =
    | {
        type: "SET_CATEGORY";
        payload: { categories: Category[] }
    }
    |
    {
        type: "SET_QUIZZES";
        payload: { quizList: Quiz[] }
    }
    |
    {
        type: "SET_CURRENT_QUESTION_INDEX";
        payload: { currentQuestionIndex: number }
    }
    |
    {
        type: "SET_SELECTED_OPTION";
        payload: {
            isSelected: boolean
            optionId: string
            questionId: string
            quizId: string
            score: number;
        }
    }
    |
    {
        type: "RESET_QUIZ";
    }

