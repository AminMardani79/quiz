import { shuffleArray } from "../util/utils";

export type Question = {
    category:string;
    correct_answer:string;
    difficulty:string;
    incorrect_answers:string[];
    question:string;
    type:string
}

export type QuestionState = Question & {answers:string[]}

export enum Difficulty{
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
}


export const fetchQuizQuestions = async (amount:number,difficulty:Difficulty)=>{
    const endPoint = `${process.env.REACT_APP_API_URL}?amount=${amount}&difficulty=${difficulty}&category=19&type=multiple`
    const data = await (await fetch(endPoint)).json();
    return data.results.map((question:Question)=>(
        {
            ...question,
            answers : shuffleArray([...question.incorrect_answers,question.correct_answer])
        }
    ))
}