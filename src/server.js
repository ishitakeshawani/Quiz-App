import { Server, Model, RestSerializer } from "miragejs";
import {
  loginHandler,
  signupHandler,
} from "./backend/controllers/AuthController";
import { getAllCategoriesHandler } from "./backend/controllers/CategoryController";
import { users } from "./backend/db/users";
import { initialUserData } from "./backend/utils/authUtils";
import { categories } from "./backend/db/categories";
import {
  getQuizHandler,
  getAllQuizzesHandler,
} from "./backend/controllers/QuizController";
import { quizzes } from "./backend/db/quizzes";

export function makeServer({ environment = "development" } = {}) {
  let server = new Server({
    serializers: {
      application: RestSerializer,
    },
    environment,
    models: {
      user: Model,
      category: Model,
      quiz: Model,
    },

    // Runs on the start of the server
    seeds(server) {
      users.forEach((item) =>
        server.create("user", {
          ...item,
          ...initialUserData,
        })
      );

      quizzes.forEach((item) => server.create("quiz", { ...item }));

      categories.forEach((item) => server.create("category", { ...item }));
    },

    routes() {
      this.namespace = "api";
      // auth routes (public)
      this.post("/auth/signup", signupHandler.bind(this));
      this.post("/auth/login", loginHandler.bind(this));
      // quizzes routes (public)
      this.get("/quizzes", getAllQuizzesHandler.bind(this));
      this.get("/quizzes/:quizId", getQuizHandler.bind(this));

      //categories routes(public)
      this.get("/categories", getAllCategoriesHandler.bind(this));
    },
  });
  return server;
}
