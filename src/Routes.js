import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  CategoryPage,
  HomePage,
  QuizPage,
  RulesPage,
  ResultPage,
  LoginPage,
  SignUpPage,
} from "./pages";
import { RequireAuth } from "./RequireAuth";
import { useAuth } from "./contexts";

export default function routes() {
  const { isLoggedIn } = useAuth();
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth isLoggedIn={isLoggedIn}>
            <HomePage />
          </RequireAuth>
        }
      />
      <Route
        path="/category/:categoryName"
        element={
          <RequireAuth isLoggedIn={isLoggedIn}>
            <CategoryPage />
          </RequireAuth>
        }
      />
      <Route
        path="/rules/:quizName"
        element={
          <RequireAuth isLoggedIn={isLoggedIn}>
            <RulesPage />
          </RequireAuth>
        }
      />
      <Route
        path="/quiz/:quizName"
        element={
          <RequireAuth isLoggedIn={isLoggedIn}>
            <QuizPage />
          </RequireAuth>
        }
      />
      <Route
        path="/result/:quizName"
        element={
          <RequireAuth isLoggedIn={isLoggedIn}>
            <ResultPage />
          </RequireAuth>
        }
      />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}
