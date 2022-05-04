import React from "react";
import { useParams, Link } from "react-router-dom";
import { Footer } from "../../components";
import "./rulespage.css";

export function RulesPage() {
  const { quizName } = useParams();
  return (
    <div>
      <div class="quiz-rule-page flex-row">
        <div class="quiz-rules flex-row">
          <div class="quiz-rule-title">{quizName}</div>
          <div class="quiz-rules-list">
            <p>1. Each right answer scores 10 Points</p>
            <p>2. Each multiple choice question has only one correct answer</p>
            <p>3. To win the quiz you need to score more than 70%</p>
          </div>
          <Link to="/">
            <button class="btn start-quiz-btn">Start Quiz</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
