import { Response } from "miragejs";

/**
 * All the routes related to Product are present here.
 * These are Publicly accessible routes.
 * */

/**
 * This handler handles gets all products in the db.
 * send GET Request at /api/products
 * */

export const getAllQuizzesHandler = function () {
  return new Response(200, {}, { quizzes: this.db.quizzes });
};

/**
 * This handler handles gets all products in the db.
 * send GET Request at /api/user/products/:productId
 * */

export const getQuizHandler = function (schema, request) {
  const quizId = request.params.quizId;
  try {
    const quiz = schema.products.findBy({ _id: quizId });
    return new Response(200, {}, { quiz });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};
