import React from "react";
import { useParams, Link } from "react-router-dom";
import { Footer } from "../../components";
import "./rulespage.css";
import { setDocumentTitle } from "../../hooks";

export function RulesPage() {
  setDocumentTitle("Memory Nomads | Rules");
  const { quizName } = useParams();
  return (
    <div>
      <div className="quiz-rule-page flex-row">
        <div className="quiz-rules flex-row">
          <div className="quiz-rule-title">{quizName}</div>
          <div className="quiz-rules-list">
            <p>1. Each right answer scores 10 Points</p>
            <p>2. Each multiple choice question has only one correct answer</p>
            <p>3. To win the quiz you need to score more than 70%</p>
          </div>
          <Link to={`/quiz/${quizName}`}>
            <button className="btn start-quiz-btn">Start Quiz</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
