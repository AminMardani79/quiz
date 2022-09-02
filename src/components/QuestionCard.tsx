import React from "react";
import sanitizeHtml from "sanitize-html";

type PropTypes = {
  question: string;
  answers: string[];
  totalQuestions: number;
  questionNumber: number;
  callback: any;
  userAnswer: any;
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
    <div>
      <p className="question_number">
        Question : {questionNumber} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: sanitizeHtml(question) }} />
      <div>
        {answers.map((answer) => (
          <button
            className="answer_btn"
            disabled={userAnswer}
            type="button"
            onClick={callback}
          >
            <span dangerouslySetInnerHTML={{ __html: sanitizeHtml(answer) }} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
