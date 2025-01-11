import styled from 'styled-components';

type ActuallyNumberTypeProps = {
  count: number;
  maxValue: number;
  isError: boolean;
};

export const ActuallyNumber = ({
  count,
  maxValue,
  isError,
}: ActuallyNumberTypeProps) => {
  return (
    <StyledActuallyNumber count={count} maxValue={maxValue}>
      {isError ? <ErrorMessage>Incorrect value!</ErrorMessage> : count}
    </StyledActuallyNumber>
  );
};

const StyledActuallyNumber = styled.div<{ count: number; maxValue: number }>`
  color: ${(props) => (props.count === props.maxValue ? 'red' : 'blue')};
  font-size: 40px;
  font-weight: bold;
`;

const ErrorMessage = styled.p`
  color: red;
`;
