export type Option = {
    option: string;
    isCorrect: boolean;
    _id: string;
    isSelected: boolean;
}

export type Question = {
    _id: string;
    question: string;
    options: Option[]
}

export type Quiz = {
    _id: string;
    categoryName: string;
    questions: number;
    quizName: string;
    score: number;
    img: string;
    questionsList: Question[]
}

