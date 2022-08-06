import { useQuiz } from "../../contexts";
import { Link } from "react-router-dom";
import { Category } from "./Category.type";
import { useEffect } from "react";
import axios from "axios";
import { toast,ToastContainer } from "react-toastify";

export function Categories() {
  const { quizState,dispatch } = useQuiz();
  const categories = quizState?.categories;
  useEffect(() => {
    (async () => {
      try {
        const {
          data: { categories },
        } = await axios.get("/api/categories");
        dispatch({
          type: "SET_CATEGORY",
          payload: { categories: categories },
        });
      } catch (error) {
        toast("Something went wrong.");
      }
    })();
  }, []);
  
  return (
    <div className="featured-categories flex-row">
      {categories?.map((category: Category) => {
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
