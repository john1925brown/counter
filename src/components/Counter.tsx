import { useState } from 'react';
import { ActuallyNumber } from './ActuallyNumber/ActuallyNumber';
import { Button } from './Button/Button';
import styled from 'styled-components';

export const Counter = () => {
  const [count, setCount] = useState(0);
  const isDisabled = count === 5;

  const incCallback = () => {
    if (!isDisabled) {
      setCount(count + 1);
    }
  };

  const resetCallback = () => {
    setCount(0);
  };

  return (
    <StyledCounter>
      <ActuallyNumber count={count} />
      <BtnsGroup>
        <Button title="inc" callBack={incCallback} isDisabled={isDisabled} />
        <Button title="reset" callBack={resetCallback} />
      </BtnsGroup>
    </StyledCounter>
  );
};

const StyledCounter = styled.div`
  margin: 0 auto;
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
