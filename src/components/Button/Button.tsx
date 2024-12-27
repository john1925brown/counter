import styled from 'styled-components';

type ButtonPropsType = {
  title: string;
  callBack: () => void;
  isDisabled?: boolean;
};

export const Button = ({ title, callBack, isDisabled }: ButtonPropsType) => {
  return (
    <StyledBtn onClick={callBack} disabled={isDisabled}>
      {title}
    </StyledBtn>
  );
};

export const StyledBtn = styled.button`
  background-color: #fff;
  border: 2px solid blue;
  padding: 10px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`;
