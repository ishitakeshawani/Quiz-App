import React from "react";
import { Routes, Route } from "react-router-dom";
import { CategoryPage, HomePage, RulesPage } from "./pages";

export default function routes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/category/:categoryName" element={<CategoryPage />} />
      <Route path="/rules/:quizName" element={<RulesPage />} />
    </Routes>
  );
}
