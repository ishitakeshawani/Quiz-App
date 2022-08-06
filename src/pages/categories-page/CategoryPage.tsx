import { Footer } from "../../components";
import "./categorypage.css";
import { useQuiz } from "../../contexts";
import { useParams, Link } from "react-router-dom";
import { setDocumentTitle } from "../../hooks";
import { Quiz } from "../../contexts/Quiz.type";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast,ToastContainer } from "react-toastify";
import * as Mui from "@material-ui/core";

export function CategoryPage() {
  const [isLoading, setIsloading] = useState(false);
  setDocumentTitle("Memory Nomads | Categories");
  const { quizState, dispatch } = useQuiz();
  const { categoryName } = useParams();

  useEffect(() => {
    (async () => {
      setIsloading(true)
      try {
        const {
          data: { quizzes },
        } = await axios.get("/api/quizzes");
        dispatch({
          type: "SET_QUIZZES",
          payload: {quizList: quizzes},
        });
        setIsloading(false)
      } catch (error) {
         toast("Something went wrong.");
      }
    })();
  }, []);

  const getQuizList = () => {
    if (categoryName === "All") {
      return quizState?.quizList;
    }
    const quizList = quizState.quizList.filter(
      (quiz: Quiz) => quiz.categoryName === categoryName
    );
    return quizList;
  };



  return (
    <div>
      <ToastContainer />
      <div className="quiz-category flex-row">
        <div className="quiz-category-title">{categoryName} Quizzes</div>
        <div className="flex-row quiz-category-list">
        {isLoading && (
              <Mui.Grid container justify="center">
                <Mui.CircularProgress />
              </Mui.Grid>
            )}
            {getQuizList().map((quiz: Quiz) => {
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
