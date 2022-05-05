import { useParams, useNavigate } from "react-router-dom";
import { useQuiz } from "../../contexts";

export const CurrentQuestion = ({ questionsList, currentQuestionIndex }) => {
  const { quizName } = useParams();
  const { quizState, dispatch } = useQuiz();
  const quiz = quizState.quizList.filter((quiz) => quiz.quizName == quizName);
  const quizId = quiz.length > 0 && quiz[0]._id;
  const navigate = useNavigate();

  const handleOptionClick = (
    id,
    questionId,
    isCorrect,
    isSelected,
    optionId
  ) => {
    if (!isSelected) {
      isSelected = true;
      dispatch({
        type: "SET_SELECTED_OPTION",
        payload: {
          quizId,
          questionId,
          optionId,
          isSelected,
          score: isCorrect ? 10 : 0,
        },
      });
      setTimeout(() => nextQuestion(), 700);
    }
  };
  const nextQuestion = () => {
    if (currentQuestionIndex < questionsList.length - 1) {
      dispatch({
        type: "SET_CURRENT_QUESTION_INDEX",
        payload: currentQuestionIndex + 1,
      });
    }
  };
  return (
    <>
      <div className="question-title">
        {questionsList?.length > 0 &&
          questionsList[currentQuestionIndex]?.question}
      </div>
      <div className="quiz-options flex-col">
        {questionsList.length > 0 &&
          questionsList[currentQuestionIndex].options.map((opt) => (
            <div
              key={opt._id}
              className={`option ${
                opt.isSelected && opt.isCorrect ? "right-ans" : ""
              } ${opt.isSelected && !opt.isCorrect ? "wrong-ans" : ""} `}
              onClick={() =>
                handleOptionClick(
                  quizId,
                  questionsList[currentQuestionIndex]._id,
                  opt.isCorrect,
                  opt.isSelected,
                  opt._id
                )
              }
            >
              {opt.option}
            </div>
          ))}
      </div>
      <div className="back-next-link">
        <button
          className="btn link-no-style goback-link"
          onClick={() => navigate("/category/All")}
        >
          Quit <i class="fa-solid fa-xmark ml-1"></i>
        </button>
        <button
          className="btn link-no-style next-link"
          onClick={() => nextQuestion()}
        >
          next <i className="fa fa-arrow-right ml-1"></i>
        </button>
      </div>
    </>
  );
};
