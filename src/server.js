import { Server, Model, RestSerializer } from "miragejs";
import {
  loginHandler,
  signupHandler,
} from "./backend/controllers/AuthController";
import { getAllCategoriesHandler } from "./backend/controllers/CategoryController";
import { users } from "./backend/db/users";
import { initialUserData } from "./backend/utils/authUtils";
import { categories } from "./backend/db/categories";

export function makeServer({ environment = "development" } = {}) {
  let server = new Server({
    serializers: {
      application: RestSerializer,
    },
    environment,
    models: {
      user: Model,
      category: Model,
    },

    // Runs on the start of the server
    seeds(server) {
      users.forEach((item) =>
        server.create("user", {
          ...item,
          ...initialUserData,
        })
      );
      categories.forEach((item) => server.create("category", { ...item }));
    },

    routes() {
      this.namespace = "api";
      // auth routes (public)
      this.post("/auth/signup", signupHandler.bind(this));
      this.post("/auth/login", loginHandler.bind(this));
      //categories routes(public)
      this.get("/categories", getAllCategoriesHandler.bind(this));
    },
  });
  return server;
}
