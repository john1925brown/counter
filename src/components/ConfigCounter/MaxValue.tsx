import { ChangeEvent } from 'react';

type MaxValuePropsType = {
  maxValue: number;
  maxValueHandler: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const MaxValue = ({ maxValue, maxValueHandler }: MaxValuePropsType) => {
  return (
    <div>
      <p>max value:</p>
      <input type="number" value={maxValue} onChange={maxValueHandler} />
    </div>
  );
};
