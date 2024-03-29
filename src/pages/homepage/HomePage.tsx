import { Footer } from "../../components";
import homeimage from "../../assets/Images/home-image.svg";
import "./homepage.css";
import { Categories } from "../../components";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setDocumentTitle } from "../../hooks";

export function HomePage() {
  setDocumentTitle("Memory Nomads | Home");
  return (
    <div>
      <div className="quiz-home-page">
        <ToastContainer />
        <div>
          <div className="home-page-title">Memory Nomads</div>
          <h5>Let's play awesome quizzes..</h5>
          <Link to="/category/All">
            <button className="btn explore-btn">Explore quizzes</button>
          </Link>
        </div>
        <img src={homeimage} alt="homepage-image" className="homepage-img" />
      </div>
      <div className="quiz-categories">
        <h4 className="center-text heading-font">Featured Categories</h4>
        <Categories />
      </div>
      <Footer />
    </div>
  );
}
