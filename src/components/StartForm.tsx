import React from "react";
import { Form } from "../App.styles";

interface IFormProps {
  startQuiz: () => void;
}

function StartForm({ startQuiz }: IFormProps) {
  return (
    <Form>
      <div>
        <div>
          <label>Count : </label>
        </div>
        <input type="number" />
      </div>
      <div>
        <div>
          <label>Category : </label>
        </div>
        <select></select>
      </div>
      <div>
        <div>
          <label>Dificullty : </label>
        </div>
        <select></select>
      </div>
      <button className="start_btn" type="button" onClick={startQuiz}>
        Start
      </button>
    </Form>
  );
}

export default StartForm;
