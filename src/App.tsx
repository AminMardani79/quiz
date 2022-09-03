import React, { useState } from "react";
// components
import QuestionCard from "./components/QuestionCard";
// api
import { fetchQuizQuestions } from "./services/api";
// types
import { Difficulty, QuestionState } from "./services/api";
type AnswerObject = {
  question: string;
  answer: string;
  isCorrect: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;
function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [gameOver, setGameOver] = useState(true);
  const [number, setNumber] = useState(0);
  const [score, setScore] = useState(0);

  console.log(questions, loading);

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.MEDIUM
    );
    setQuestions(newQuestions);
    setUserAnswers([]);
    setNumber(0);
    setScore(0);
    setLoading(false);
  };
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    // user answer
    const answer = e.currentTarget.value;
    // check if its correct
    const isCorrect = questions[number].correct_answer === answer;
    if (isCorrect) setScore((prev) => prev + 1);
    // add user answer
    const answerObject = {
      question: questions[number].question,
      answer,
      isCorrect,
      correctAnswer: questions[number].correct_answer,
    };
    setUserAnswers((prev) => [...prev, answerObject]);
  };
  const nextQuestion = () => {
    console.log(number);

    const nextNumber = number + 1;
    if (nextNumber === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextNumber);
    }
  };
  console.log(questions);
  return (
    <div className="quiz_app">
      <h1>Quiz App</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <button className="start_btn" type="button" onClick={startQuiz}>
          Start
        </button>
      ) : null}
      {!gameOver && !loading && <p className="score">Score is : </p>}
      {loading && <p>Loading ...</p>}
      {!loading && !gameOver && (
        <QuestionCard
          callback={checkAnswer}
          question={questions[number].question}
          questionNumber={number + 1}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          totalQuestions={TOTAL_QUESTIONS}
        />
      )}
      {!gameOver &&
        !loading &&
        userAnswers.length === number + 1 &&
        number !== TOTAL_QUESTIONS - 1 && (
          <button className="next_btn" type="button" onClick={nextQuestion}>
            Next Question
          </button>
        )}
    </div>
  );
}

export default App;
