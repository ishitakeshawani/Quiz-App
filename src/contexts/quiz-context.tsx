import { createContext, useContext, useReducer, useEffect } from "react";
import { quizReducer } from "../reducers";
import axios from "axios";
import { toast } from "react-toastify";
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


  useEffect(() => {
    (async () => {
      try {
        const {
          data: { quizzes },
        } = await axios.get("/api/quizzes");
        console.log(quizzes)
        dispatch({
          type: "SET_QUIZZES",
          payload: quizzes,
        });
      } catch (error) {
        // toast(error.message);
      }
    })();
  }, []);



  const [quizState, dispatch] = useReducer(quizReducer, initialState);
  return (
    <quizContext.Provider value={{ quizState, dispatch }}>
      {children}
    </quizContext.Provider>
  );
};

const useQuiz = () => useContext(quizContext);

export { QuizProvider, useQuiz };
