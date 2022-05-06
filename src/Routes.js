import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  CategoryPage,
  HomePage,
  QuizPage,
  RulesPage,
  ResultPage,
} from "./pages";

export default function routes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/category/:categoryName" element={<CategoryPage />} />
      <Route path="/rules/:quizName" element={<RulesPage />} />
      <Route path="/quiz/:quizName" element={<QuizPage />} />
      <Route path="/result/:quizName" element={<ResultPage />} />
    </Routes>
  );
}
