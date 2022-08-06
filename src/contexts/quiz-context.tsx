import { createContext, useContext, useReducer } from "react";
import { quizReducer } from "../reducers";
import axios from "axios";
import { ContextType, InitialStateType, QuizProviderProps } from "./QuizContext.type";

export const initialState: InitialStateType = {
  categories: [],
  quizList: [],
  currentQuestionIndex: 0,
};

const quizContext = createContext<ContextType>({
  quizState: initialState,
  dispatch: () => undefined
});

const QuizProvider = ({ children }: QuizProviderProps) => {

  const [quizState, dispatch] = useReducer(quizReducer, initialState);
  return (
    <quizContext.Provider value={{ quizState, dispatch }}>
      {children}
    </quizContext.Provider>
  );
};

const useQuiz = () => useContext(quizContext);

export { QuizProvider, useQuiz };
