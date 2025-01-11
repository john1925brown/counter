import { ChangeEvent } from "react";

type StartValuePropsType = {
  startValue: number;
  startValueHandler: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const StartValue = ({
  startValue,
  startValueHandler,
}: StartValuePropsType) => {
  return (
    <div>
      <p>start value:</p>
      <input type="number" value={startValue} onChange={startValueHandler} />
    </div>
  );
};
