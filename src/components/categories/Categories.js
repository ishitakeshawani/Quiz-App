import React from "react";
import { useQuiz } from "../../contexts";
import { Link } from "react-router-dom";

export function Categories() {
  const { quizState } = useQuiz();
  const categories = quizState.categories;
  return (
    <div className="featured-categories flex-row">
      {categories.map((category) => {
        return (
          <Link key={category.id} to="/" className="link-no-style">
            <div className="feature-category-item">{category.categoryName}</div>
          </Link>
        );
      })}
    </div>
  );
}
