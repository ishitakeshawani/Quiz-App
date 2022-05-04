import { v4 as uuid } from "uuid";
import deathNote from "../../assets/Images/deathnote.jfif";
import naruto from "../../assets/Images/naruto.jpg";
import badminton from "../../assets/Images/badminton.jpg";
import gk from "../../assets/Images/gk.jpg";

export const quizzes = [
  {
    _id: uuid(),
    categoryName: "Anime",
    questions: 5,
    quizName: "Death Note",
    img: deathNote,
  },
  {
    _id: uuid(),
    categoryName: "Anime",
    questions: 5,
    quizName: "Naruto",
    img: naruto,
  },
  {
    _id: uuid(),
    categoryName: "Sports",
    questions: 5,
    quizName: "Badminton",
    img: badminton,
  },
  {
    _id: uuid(),
    categoryName: "General Knowledge",
    questions: 5,
    quizName: "General Knowledge",
    img: gk,
  },
];
