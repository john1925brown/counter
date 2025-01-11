import { useState } from 'react';
import { ActuallyNumber } from '../ActuallyNumber/ActuallyNumber';
import { Button } from '../Button/Button';
import styled from 'styled-components';

type CounterPropsType = {
  startValue: number;
  maxValue: number;
  isError: boolean;
};

export const Counter = ({
  startValue,
  maxValue,
  isError,
}: CounterPropsType) => {
  const [count, setCount] = useState(startValue);

  const resetHandler = () => {
    setCount(startValue);
  };

  const incrementHandler = () => {
    if (count !== maxValue) {
      setCount(count + 1);
    }
  };

  return (
    <StyledCounter>
      <ActuallyNumber count={count} maxValue={maxValue} isError={isError} />
      <BtnsGroup>
        <Button
          title="inc"
          callBack={incrementHandler}
          isDisabled={count === maxValue || isError}
        />
        <Button
          title="reset"
          callBack={resetHandler}
          isDisabled={count === startValue || isError}
        />
      </BtnsGroup>
    </StyledCounter>
  );
};



const StyledCounter = styled.div`
  max-width: 300px;
  width: 100%;
  padding: 10px;
  border: 2px solid blue;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const BtnsGroup = styled.div`
  border: 2px solid blue;
  padding: 10px;
  border-radius: 10px;
  width: 70%;
  display: flex;
  justify-content: space-around;
`;
