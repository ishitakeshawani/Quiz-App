import "./resultpage.css";
import { Footer } from "../../components";
import { useParams } from "react-router-dom";
import { useQuiz } from "../../contexts";
import { Link } from "react-router-dom";
import { setDocumentTitle } from "../../hooks";
import { Option, Question, Quiz } from "../../contexts/Quiz.type";
import { nanoid } from 'nanoid'

export function ResultPage() {
  setDocumentTitle("Memory Nomads | Result");
  const { quizName } = useParams();
  const { quizState, dispatch } = useQuiz();
  const quiz = quizState.quizList.filter((quiz: Quiz) => quiz.quizName === quizName);
  const questions = quiz[0]?.questionsList;
  const score = quiz[0]?.score;

  const playAgain = () => {
    dispatch({
      type: "RESET_QUIZ",
    });
  };
  return (
    <div>
      <div className="result-page flex-col">
        <div className="result-page-title">Quiz Result</div>
        <div className="result-desc">
          {score >= quiz[0]?.questions * 10 * 0.7
            ? "Yess! you did well 🎉"
            : "You need to improve :("}
        </div>

        <div className="your-score">
          Your final score : {score}/{quiz[0]?.questions * 10}
        </div>
        <Link
          className="play-again btn"
          to={`/quiz/${quizName}`}
          onClick={() => playAgain()}
        >
          Play Again
        </Link>
        <div className="questions flex-col">
          {questions?.map((question: Question, index: number) => {
            return (
              <div key={nanoid()} className="questions flex-col">
                <div className="question-name">
                  {index + 1}.{question.question}
                </div>
                <div className="options">
                  {question.options.map((option: Option) => (
                    <div key={nanoid()}
                      className={`option ${option.isCorrect ? "right-ans" : ""
                        } ${option.isSelected && !option.isCorrect
                          ? "wrong-ans"
                          : ""
                        } `}
                    >
                      {option.option}
                      <i
                        className={`${option.isSelected && !option.isCorrect
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
