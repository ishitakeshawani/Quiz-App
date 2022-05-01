import { v4 as uuid } from "uuid";
/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Anime",
  },
  {
    _id: uuid(),
    categoryName: "Sports",
  },
  {
    _id: uuid(),
    categoryName: "General Knowledge",
  },
];
