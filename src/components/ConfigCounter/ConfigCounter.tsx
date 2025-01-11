import styled from 'styled-components';
import { Button } from '../Button/Button';
import { ChangeEvent } from 'react';
import { StartValue } from './StartValue';
import { MaxValue } from './MaxValue';

type ConfigCounterPropsType = {
  setStartValue: (startNum: number) => void; // void??
  startValue: number;
  setMaxValue: (startNum: number) => void; // void??
  maxValue: number;
  setValuesHandler: () => void;
  isError: boolean;
};

export const ConfigCounter = ({
  startValue,
  setStartValue,
  maxValue,
  setMaxValue,
  setValuesHandler,
  isError,
}: ConfigCounterPropsType) => {
  const startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setStartValue(+e.currentTarget.value);
  };

  const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxValue(+e.currentTarget.value);
  };

  return (
    <StyledConfigCounter>
      <InputsGroup>
        <MaxValue maxValue={maxValue} maxValueHandler={maxValueHandler} />
        <StartValue
          startValue={startValue}
          startValueHandler={startValueHandler}
        />
      </InputsGroup>
      <div>
        <Button title="set" isDisabled={isError} callBack={setValuesHandler} />
      </div>
    </StyledConfigCounter>
  );
};

const StyledConfigCounter = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  max-width: 300px;
  width: 100%;
  padding: 10px;
  border: 2px solid blue;
  border-radius: 10px;
`;

const InputsGroup = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  padding: 10px;
  border: 2px solid blue;
  border-radius: 10px;
`;
