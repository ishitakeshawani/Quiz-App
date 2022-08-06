import { Question } from "../../contexts/Quiz.type"

export type CurrentQuestionProps = {
    questionsList: Question[];
    currentQuestionIndex: number;
}