import React from "react";
import { Footer } from "../../components";
import "./categorypage.css";
import { useQuiz } from "../../contexts";
import { useParams, Link } from "react-router-dom";
import { setDocumentTitle } from "../../hooks";

export function CategoryPage() {
  setDocumentTitle("Memory Nomads | Categories");
  const { quizState } = useQuiz();
  const { categoryName } = useParams();
  const getQuizList = () => {
    if (categoryName === "All") {
      return quizState.quizList;
    }
    const quizList = quizState.quizList.filter(
      (quiz) => quiz.categoryName === categoryName
    );
    return quizList;
  };

  return (
    <div>
      <div className="quiz-category flex-row">
        <div className="quiz-category-title">{categoryName} Quizzes</div>
        <div className="flex-row quiz-category-list">
          {getQuizList().map((quiz) => {
            return (
              <div key={quiz._id} className="card card-box-shadow">
                <div
                  className="card-section regular-font-weight"
                  id="card-section"
                >
                  <img className="card-img" src={quiz.img} alt="quiz photo" />
                  <div className="card-header">
                    <div className="card-quiz-name-play-btn">
                      <div className="card-header-title bold-font-weight">
                        {quiz.quizName}
                      </div>
                      <Link to={`/rules/${quiz.quizName}`}>
                        <button className="btn play-btn">Play now</button>
                      </Link>
                    </div>
                    <p className="author-name">{quiz.questions} Questions</p>
                  </div>
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
