import React from "react";
import deathNote from "../../assets/Images/deathnote.jfif";
import { Footer } from "../../components";
import "./categorypage.css";

export function CategoryPage() {
  return (
    <div>
      <div className="quiz-category flex-row">
        <div className="quiz-category-title">Anime Quizzes</div>
        <div className="flex-row quiz-category-list">
          <div className="card card-box-shadow">
            <div className="card-section regular-font-weight" id="card-section">
              <img className="card-img" src={deathNote} alt="" />
              <div className="card-header">
                <div className="flex">
                  <div className="card-header-title bold-font-weight">
                    Death Note
                  </div>
                  <a href="/Rules/rules.html">
                    <button className="btn play-btn">Play now</button>
                  </a>
                </div>
                <p className="author-name">10 Questions</p>
              </div>
            </div>
          </div>
          <div className="card card-box-shadow">
            <div className="card-section regular-font-weight" id="card-section">
              <img className="card-img" src={deathNote} alt="" />
              <div className="card-header">
                <div className="flex">
                  <div className="card-header-title bold-font-weight">
                    Death Note
                  </div>
                  <a href="/Rules/rules.html">
                    <button className="btn play-btn">Play now</button>
                  </a>
                </div>
                <p className="author-name">10 Questions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
