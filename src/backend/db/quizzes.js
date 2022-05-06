import { v4 as uuid } from "uuid";
import deathNote from "../../assets/Images/deathnote.jfif";
import naruto from "../../assets/Images/naruto.jpg";
import badminton from "../../assets/Images/badminton.jpg";
import gk from "../../assets/Images/gk.jpg";

export const quizzes = [
  {
    _id: uuid(),
    categoryName: "Anime",
    questions: 3,
    quizName: "Death Note",
    score: 0,
    img: deathNote,
    questionsList: [
      {
        _id: uuid(),
        question: "What is the main character's full name?",
        options: [
          {
            option: "Misa Amane",
            isCorrect: false,
            _id: uuid(),
            isSelected: false,
          },
          {
            option: "Light Yagami",
            isCorrect: true,
            _id: uuid(),
            isSelected: false,
          },
          { option: "Near", isCorrect: false, _id: uuid(), isSelected: false },
          { option: "L", isCorrect: false, _id: uuid(), isSelected: false },
        ],
      },
      {
        _id: uuid(),
        question: "What is the favorite food of Light's Shinigami, Ryuk?",
        options: [
          {
            option: "Red apples",
            isCorrect: true,
            _id: uuid(),
            isSelected: false,
          },
          {
            option: "Grapes",
            isCorrect: false,
            _id: uuid(),
            isSelected: false,
          },
          {
            option: "oranges",
            isCorrect: false,
            _id: uuid(),
            isSelected: false,
          },
          {
            option: "Pineapple",
            isCorrect: false,
            _id: uuid(),
            isSelected: false,
          },
        ],
      },
      {
        _id: uuid(),
        question:
          "What is Light's preferred way of killing people through the Death Note?",
        options: [
          {
            option: "Car accident",
            isCorrect: false,
            _id: uuid(),
            isSelected: false,
          },
          {
            option: "Brain annuerism",
            isCorrect: false,
            _id: uuid(),
            isSelected: false,
          },
          {
            option: "Heart attack",
            isCorrect: true,
            _id: uuid(),
            isSelected: false,
          },
          {
            option: "Suicide",
            isCorrect: false,
            _id: uuid(),
            isSelected: false,
          },
        ],
      },
    ],
  },
  {
    _id: uuid(),
    categoryName: "Anime",
    questions: 2,
    quizName: "Naruto",
    score: 0,
    img: naruto,
    questionsList: [
      {
        _id: uuid(),
        question: "What is the name of Kakashi's smallest Ninken?",
        options: [
          {
            option: "Urushi",
            isCorrect: false,
            _id: uuid(),
            isSelected: false,
          },
          {
            option: "Shiba",
            isCorrect: false,
            _id: uuid(),
            isSelected: false,
          },
          {
            option: "Pakkun",
            isCorrect: true,
            _id: uuid(),
            isSelected: false,
          },
          {
            option: "Bisuke",
            isCorrect: false,
            _id: uuid(),
            isSelected: false,
          },
        ],
      },
      {
        _id: uuid(),
        question: "How old was Naruto in the original Naruto?",
        options: [
          {
            option: "10",
            isCorrect: false,
            _id: uuid(),
            isSelected: false,
          },
          {
            option: "12",
            isCorrect: true,
            _id: uuid(),
            isSelected: false,
          },
          {
            option: "13",
            isCorrect: false,
            _id: uuid(),
            isSelected: false,
          },
          {
            option: "15",
            isCorrect: false,
            _id: uuid(),
            isSelected: false,
          },
        ],
      },
    ],
  },
  {
    _id: uuid(),
    categoryName: "Sports",
    questions: 3,
    quizName: "Badminton",
    score: 0,
    img: badminton,
    questionsList: [
      {
        _id: uuid(),
        question:
          "When does the umpire call the score out loud during a badminton game?",
        options: [
          {
            option: "Before the game starts",
            isCorrect: false,
            _id: uuid(),
            isSelected: false,
          },
          {
            option: "After the game finishes",
            isCorrect: false,
            _id: uuid(),
            isSelected: false,
          },
          {
            option: "After the rally finishes",
            isCorrect: true,
            _id: uuid(),
            isSelected: false,
          },
        ],
      },
      {
        _id: uuid(),
        question: "Which term is used when a player violates the rules?",
        options: [
          {
            option: "An error",
            isCorrect: false,
            _id: uuid(),
            isSelected: false,
          },
          {
            option: "A fault",
            isCorrect: true,
            _id: uuid(),
            isSelected: false,
          },
          {
            option: "A mistake",
            isCorrect: false,
            _id: uuid(),
            isSelected: false,
          },
        ],
      },
      {
        _id: uuid(),
        question:
          "What can be the maximum number of games in a badminton match?",
        options: [
          {
            option: "3",
            isCorrect: true,
            _id: uuid(),
            isSelected: false,
          },
          {
            option: "5",
            isCorrect: false,
            _id: uuid(),
            isSelected: false,
          },
          {
            option: "7",
            isCorrect: false,
            _id: uuid(),
            isSelected: false,
          },
        ],
      },
    ],
  },
  {
    _id: uuid(),
    categoryName: "General Knowledge",
    questions: 2,
    quizName: "General Knowledge",
    score: 0,
    img: gk,
    questionsList: [
      {
        _id: uuid(),
        question:
          "During Freedom Struggle of India, which among the following movements started with Dandi ?",
        options: [
          {
            option: "Swadeshi Movement",
            isCorrect: false,
            _id: uuid(),
            isSelected: false,
          },
          {
            option: "Noncooperative Movement",
            isCorrect: false,
            _id: uuid(),
            isSelected: false,
          },
          {
            option: "Civil Disobedience Movement",
            isCorrect: true,
            _id: uuid(),
            isSelected: false,
          },
        ],
      },
      {
        _id: uuid(),
        question:
          "Lord William Bentinck is credited for which of the following in the Indian History ?",
        options: [
          {
            option: "Abolition of sati",
            isCorrect: true,
            _id: uuid(),
            isSelected: false,
          },
          {
            option: "Education reforms",
            isCorrect: false,
            _id: uuid(),
            isSelected: false,
          },
          {
            option: "Local government",
            isCorrect: false,
            _id: uuid(),
            isSelected: false,
          },
        ],
      },
    ],
  },
];
