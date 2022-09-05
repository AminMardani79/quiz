import React from "react";
import sanitizeHtml from "sanitize-html";
// types
import { AnswerObject } from "../App";
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
  return (
    <CardWrapper>
      <p className="question_number">
        Question : {questionNumber} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: sanitizeHtml(question) }} />
      <div>
        {answers.map((answer) => (
          <ButtonWrapper
            userClicked={userAnswer?.answer === answer}
            correct={userAnswer?.correctAnswer === answer}
            key={answer}
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
