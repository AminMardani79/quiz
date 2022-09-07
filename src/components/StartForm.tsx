import React from "react";
import Select, { SingleValue } from "react-select";
import { CategoryOptions, DifficultyOptions } from "../data/data";
// context
import { useStateContext } from "../contexts/ContextProvider";
// styles
import { Form } from "../App.styles";
// types
interface IFormProps {
  startQuiz: () => void;
}
export type SelectType = {
  label: string;
  value: string;
};
function StartForm({ startQuiz }: IFormProps) {
  const { count, setCount, difficulty, setDifficulty, category, setCategory } =
    useStateContext();
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let number = +e.target.value;
    number <= 50 && number >= 1 ? setCount(number) : setCount(10);
  };
  const difficultyChange = (selectedOption: SingleValue<SelectType>) => {
    setDifficulty(selectedOption as SelectType);
  };
  const categoryChange = (selectedOption: SingleValue<SelectType>) => {
    setCategory(selectedOption as SelectType);
  };
  return (
    <Form>
      <div>
        <div>
          <label>Count : </label>
        </div>
        <input
          type="number"
          value={count}
          onChange={inputChangeHandler}
          min={1}
          max={50}
        />
      </div>
      <div>
        <div>
          <label>Category : </label>
        </div>
        <Select
          className="select_list"
          defaultValue={category}
          options={CategoryOptions}
          onChange={categoryChange}
        />
      </div>
      <div>
        <div>
          <label>Dificullty : </label>
        </div>
        <Select
          className="select_list"
          defaultValue={difficulty}
          options={DifficultyOptions}
          onChange={difficultyChange}
        />
      </div>
      <button className="start_btn" type="button" onClick={startQuiz}>
        Start
      </button>
    </Form>
  );
}

export default StartForm;
