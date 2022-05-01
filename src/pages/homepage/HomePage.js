import React from "react";
import { Footer, NavBar } from "../../components";
import homeimage from "../../assets/Images/home-image.svg";
import "./homepage.css";

export function HomePage() {
  return (
    <div>
      <div className="quiz-home-page flex-row">
        <div>
          <div className="home-page-title">Memory Nomads</div>
          <h5>Let's play awesome quizzes..</h5>
          <a href="/Category/category.html">
            <button className="btn explore-btn">Explore quizzes</button>
          </a>
        </div>
        <img src={homeimage} alt="homepage-image" className="homepage-img" />
      </div>
      <div className="quiz-categories">
        <h4 className="center-text heading-font">Featured Categories</h4>
        <div className="featured-categories flex-row">
          <a href="/Category/category.html" className="link-no-style">
            <div className="feature-category-item">Anime</div>
          </a>
          <div className="feature-category-item">Sports</div>
          <div className="feature-category-item">General Knowledge</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
