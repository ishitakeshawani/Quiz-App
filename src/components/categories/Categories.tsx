import { useQuiz } from "../../contexts";
import { Link } from "react-router-dom";
import { Category } from "./Category.type";
import { ContextType } from "../../contexts/QuizContext.type";
import { useEffect } from "react";
import axios from "axios";

export function Categories() {
  const { quizState,dispatch } = useQuiz();
  console.log(quizState)
  const categories = quizState.categories;
  useEffect(() => {
    (async () => {
      try {
        const {
          data: { categories },
        } = await axios.get("/api/user/categories");
        console.log(categories,"mn")
        dispatch({
          type: "SET_CATEGORY",
          payload: { categories: categories },
        });
      } catch (error) {
        // toast(error.message);
      }
    })();
  }, []);
  
  return (
    <div className="featured-categories flex-row">
      {categories.map((category: Category) => {
        return (
          <Link
            key={category._id}
            to={`/category/${category.categoryName}`}
            className="link-no-style"
          >
            <div className="feature-category-item">{category.categoryName}</div>
          </Link>
        );
      })}
    </div>
  );
}
