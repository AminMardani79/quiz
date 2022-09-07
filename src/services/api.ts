import { shuffleArray } from "../util/utils";

export interface Question {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

export interface QuestionState extends Question {
  answers: string[];
}

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export const fetchQuizQuestions = async (
  amount: number,
  difficulty: string,
  category: string
) => {
  const endPoint = `${
    process.env.REACT_APP_API_URL
  }?amount=${amount}&difficulty=${difficulty}${
    category !== "any" ? `&category=${category}` : ""
  }&type=multiple`;

  const data = await (await fetch(endPoint)).json();
  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
