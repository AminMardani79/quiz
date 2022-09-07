import React, { useState } from "react";
// components
import QuestionCard from "./components/QuestionCard";
import Loader from "./components/Loader";
// api
import { fetchQuizQuestions } from "./services/api";
// styles
import { GlobalStyle, QuizWrapper } from "./App.styles";
// types
import { QuestionState } from "./services/api";
import StartForm from "./components/StartForm";
import { useStateContext } from "./contexts/ContextProvider";
export interface AnswerObject {
  question: string;
  answer: string;
  isCorrect: boolean;
  correctAnswer: string;
}

function App() {
  const { count, difficulty, category } = useStateContext();
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [gameOver, setGameOver] = useState(true);
  const [number, setNumber] = useState(0);
  const [score, setScore] = useState(0);

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      count,
      difficulty.value,
      category.value
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
    const nextNumber = number + 1;
    nextNumber === count ? setGameOver(true) : setNumber(nextNumber);
  };
  return (
    <>
      <GlobalStyle />
      <QuizWrapper>
        <h1 className="quiz_header">Quiz App</h1>
        {(gameOver || userAnswers.length === count) && !loading ? (
          <StartForm startQuiz={startQuiz} />
        ) : null}
        {loading && <Loader />}
        {!loading && !gameOver && !!questions.length && (
          <>
            <p className="score">Score is : {score}</p>
            <QuestionCard
              callback={checkAnswer}
              question={questions[number].question}
              questionNumber={number + 1}
              answers={questions[number].answers}
              userAnswer={userAnswers ? userAnswers[number] : undefined}
              totalQuestions={count}
            />
          </>
        )}
        {!loading && !questions.length && !gameOver && (
          <>
            <div className="no_question_found">No question found</div>
            <StartForm startQuiz={startQuiz} />
          </>
        )}
        {!gameOver &&
          !loading &&
          userAnswers.length === number + 1 &&
          number !== count - 1 && (
            <button className="next_btn" type="button" onClick={nextQuestion}>
              Next Question
            </button>
          )}
      </QuizWrapper>
    </>
  );
}

export default App;
