import React, { useState } from "react";
// components
import QuestionCard from "./components/QuestionCard";
// api
import { fetchQuizQuestions } from "./services/api";
// types
import { Difficulty } from "./services/api";

const startQuiz = () => {};
const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};
const nextQuestion = () => {};
const TOTAL_QUESTIONS = 10;
function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [gameOver, setGameOver] = useState(true);
  const [number, setNumber] = useState(0);
  const [score, setScore] = useState(0);

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.MEDIUM));
  return (
    <div className="quiz_app">
      <h1>Quiz App</h1>
      <button className="start_btn" type="button" onClick={startQuiz}>
        Start
      </button>
      <p className="score">Score is : </p>
      {/*       <QuestionCard
        callback={checkAnswer}
        question={questions[number].question}
        questionNumber={number + 1}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
      /> */}
      <button className="next_btn" type="button" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
}

export default App;
