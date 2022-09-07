import React from "react";
import sanitizeHtml from "sanitize-html";
// types
import { AnswerObject } from "../App";
import { useStateContext } from "../contexts/ContextProvider";
// styles
import { ButtonWrapper, CardWrapper } from "./QuestionCard.styles";
type PropTypes = {
  question: string;
  answers: string[];
  totalQuestions: number;
  questionNumber: number;
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
};

const QuestionCard: React.FC<PropTypes> = ({
  question,
  answers,
  totalQuestions,
  questionNumber,
  callback,
  userAnswer,
}) => {
  const { category, difficulty } = useStateContext();
  return (
    <CardWrapper>
      <div className="quiz_info">
        <span>Category : {category.label}</span>
        <span>Difficulty : {difficulty.label}</span>
      </div>
      <p className="question_number">
        Question : {questionNumber} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: sanitizeHtml(question) }} />
      <div>
        {answers.map((answer) => (
          <ButtonWrapper
            key={answer}
            userClicked={userAnswer?.answer === answer}
            correct={userAnswer?.correctAnswer === answer}
          >
            <button
              className="answer_btn"
              disabled={!!userAnswer}
              type="button"
              onClick={callback}
              value={answer}
            >
              <span
                dangerouslySetInnerHTML={{ __html: sanitizeHtml(answer) }}
              />
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </CardWrapper>
  );
};

export default QuestionCard;
