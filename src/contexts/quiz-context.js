import { React, createContext, useContext, useReducer, useEffect } from "react";
import { quizReducer } from "../reducers";
import axios from "axios";

const quizContext = createContext();

const QuizProvider = ({ children }) => {
  const initialState = {
    categories: [],
  };

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { categories },
        } = await axios.get("/api/categories");

        dispatch({
          type: "SET_CATEGORY",
          payload: categories,
        });
      } catch (error) {
        console.log(error);
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