import styled from 'styled-components';

type ActuallyNumberTypeProps = {
  count: number;
};

export const ActuallyNumber = ({ count }: ActuallyNumberTypeProps) => {
  return <StyledActuallyNumber count={count}>{count}</StyledActuallyNumber>;
};

const StyledActuallyNumber = styled.div<{ count: number }>`
  color: ${(props) => (props.count === 5 ? 'red' : 'blue')};
  font-size: 40px;
  font-weight: bold;
`;
