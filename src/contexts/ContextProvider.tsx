import React, { createContext, useContext, useState } from "react";
import { SelectType } from "../components/StartForm";
import { CategoryOptions, DifficultyOptions } from "../data/data";
// types
interface IContextProps {
  children: React.ReactNode;
}

interface IContextState {
  count: number;
  difficulty: SelectType;
  category: SelectType;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  setDifficulty: React.Dispatch<React.SetStateAction<SelectType>>;
  setCategory: React.Dispatch<React.SetStateAction<SelectType>>;
}

const StateContext = createContext({} as IContextState);

function ContextProvider({ children }: IContextProps) {
  const [count, setCount] = useState(10);
  const [difficulty, setDifficulty] = useState(
    DifficultyOptions[1] as SelectType
  );
  const [category, setCategory] = useState(CategoryOptions[0] as SelectType);
  return (
    <StateContext.Provider
      value={{
        count,
        difficulty,
        category,
        setCount,
        setDifficulty,
        setCategory,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}

export default ContextProvider;

export const useStateContext = () => useContext(StateContext);
