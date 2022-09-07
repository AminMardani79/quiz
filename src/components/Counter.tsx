import { memo } from "react";
import Countdown from "react-countdown";
import { useStateContext } from "../contexts/ContextProvider";

interface ICounterProps {
  onTimeOver: () => void;
}

function Counter({ onTimeOver }: ICounterProps) {
  const { count } = useStateContext();
  return (
    <Countdown date={Date.now() + 60000 * count} onComplete={onTimeOver} />
  );
}

export default memo(Counter);
