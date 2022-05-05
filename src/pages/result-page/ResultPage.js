import React from "react";
import "./resultpage.css";
import { Footer } from "../../components";
import { useParams } from "react-router-dom";
import { useQuiz } from "../../contexts";
import { Link } from "react-router-dom";

export function ResultPage() {
  const { quizName } = useParams();
  const { quizState, dispatch } = useQuiz();
  const quiz = quizState.quizList.filter((quiz) => quiz.quizName === quizName);
  const questions = quiz[0]?.questionsList;
  const score = quiz[0]?.score;

  const playAgain = () => {
    dispatch({
      type: "RESET_QUIZ",
    });
  };
  return (
    <div>
      <div class="result-page flex-col">
        <div class="result-page-title">Quiz Result</div>
        <div class="result-desc">
          {score >= quiz[0]?.questions * 10 * 0.7
            ? "Yess! you did well 🎉"
            : "You need to improve :("}
        </div>

        <div class="your-score">
          Your final score : {score}/{quiz[0]?.questions * 10}
        </div>
        <Link
          className="play-again btn"
          to={`/quiz/${quizName}`}
          onClick={() => playAgain()}
        >
          Play Again
        </Link>
        <div class="questions flex-col">
          {questions?.map((question, index) => {
            return (
              <div class="questions flex-col">
                <div class="question-name">
                  {index + 1}.{question.question}
                </div>
                <div class="options">
                  {question.options.map((option) => (
                    <div
                      className={`option ${
                        option.isCorrect ? "right-ans" : ""
                      } ${
                        option.isSelected && !option.isCorrect
                          ? "wrong-ans"
                          : ""
                      } `}
                    >
                      {option.option}
                      <i
                        class={`${
                          option.isSelected && !option.isCorrect
                            ? `fa-solid fa-xmark`
                            : ""
                        }
                          ${option.isCorrect && `fa-solid fa-check`}`}
                      ></i>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
