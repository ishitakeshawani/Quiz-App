import { useQuiz } from "../../contexts";
import { Link } from "react-router-dom";
import { Category } from "./Category.type";
import { useEffect,useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import * as Mui from "@material-ui/core";

export function Categories() {
  const { quizState,dispatch } = useQuiz();
  const [isLoading, setIsloading] = useState(false);
  const categories = quizState?.categories;
  useEffect(() => {
    (async () => {
      setIsloading(true)
      try {
        const {
          data: { categories },
        } = await axios.get("/api/categories");
        dispatch({
          type: "SET_CATEGORY",
          payload: { categories: categories },
        });
        setIsloading(false)
      } catch (error) {
        toast("Something went wrong.");
      }
    })();
  }, []);
  
  return (
    <div>
    {isLoading &&  (
      <Mui.Grid container justify="center">
        <Mui.CircularProgress />
      </Mui.Grid>
    )}
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
    </div>
  );
}
