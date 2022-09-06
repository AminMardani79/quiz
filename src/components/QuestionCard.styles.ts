import styled from "styled-components";

// types
type ButtonProps = {
  correct: boolean;
  userClicked: boolean;
};

export const CardWrapper = styled.div`
  padding: 25px 30px;
  border-radius: 6px;
  background-color: #fff;
  .question_number {
    text-align: center;
    background-color: #743f25;
    padding: 2px 5px;
    border-radius: 5px;
    color: #fff;
  }
  p {
    color: #743f25;
    font-weight: 700;
  }
`;

export const ButtonWrapper = styled.div<ButtonProps>`
  width: 100%;
  margin-bottom: 5px;
  > button {
    width: 100%;
    height: 100%;
    cursor: pointer;
    background-color: ${({ correct, userClicked }) =>
      correct ? "#3f8f2b" : !correct && userClicked ? "#d61411" : "#fff"};
    border: 1px solid #743f25;
    border-radius: 4px;
    padding: 5px 10px;
    color: #743f25;
    border: 1px solid
      ${({ correct, userClicked }) =>
        correct ? "#3f8f2b" : !correct && userClicked ? "#d61411" : "#743f25"};
    color: ${({ correct, userClicked }) =>
      userClicked || correct ? "#fff" : "#743f25"};
  }
  > button:disabled {
    cursor: not-allowed;
  }
`;