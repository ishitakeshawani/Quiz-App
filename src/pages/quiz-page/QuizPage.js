import React from "react";
import { useParams } from "react-router-dom";
import { Footer } from "../../components";
import { useQuiz } from "../../contexts";
import "./quizpage.css";
import { CurrentQuestion } from "../../components";

export function QuizPage() {
  const { quizName } = useParams();
  const { quizState } = useQuiz();
  const quiz = quizState.quizList.filter((quiz) => quiz.quizName == quizName);
  const score = quiz.length > 0 && quiz[0].score;
  const questionsList = quiz.length > 0 && quiz[0].questionsList;
  const currentQuestionIndex = quizState.currentQuestionIndex;

  return (
    <div>
      <div className="questions-page flex-col">
        <div className="questions-page-title">{quizName}</div>
        <div className="question flex-col">
          <div className="questions-number-score flex-row">
            <div>
              Questions : {currentQuestionIndex + 1}/{questionsList.length}
            </div>
            <div className="score">Score: {score}</div>
          </div>
          <CurrentQuestion
            questionsList={questionsList}
            currentQuestionIndex={currentQuestionIndex}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
