import styled, { createGlobalStyle } from "styled-components";
import BgImage from "./assets/images/papper.jpg";

export const GlobalStyle = createGlobalStyle`
    html{
        height: 100vh;
    }
    body{
        background: url(${BgImage});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        margin:0;
        padding:0;
        display: flex;
        justify-content: center;
    }
    *{
        box-sizing: border-box;
        font-family: "Catamaran", sans-serif;
    }
`;

export const QuizWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .quiz_header {
    color: #743f25;
    font-weight: 900;
    font-size: 3.3rem;
  }
  .score {
    color: #824d33;
    font-size: 25px;
    font-weight: 700;
  }
  .start_btn,
  .next_btn {
    width: 100px;
    height: 40px;
    border-radius: 5px;
    padding: 5px 10px;
    display: inline-block;
    cursor: pointer;
    border: 2px solid #743f25;
    color: #743f25;
    font-weight: 700;
    transition: all 0.1s linear;
    background-color: #fff;
  }
  .next_btn {
    align-self: flex-end;
    font-size: 14px;
    margin-top: 10px;
    width: 130px;
    height: 35px;
    padding: 0;
  }
  .start_btn:hover,
  .next_btn:hover {
    background-color: #82543f;
    color: #fff;
  }
  .start_btn {
    margin-top: 10px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  select,
  input {
    width: 200px;
    border: 1px solid #743f25;
    border-radius: 4px;
    padding: 4px 6px;
  }
  input:focus,
  select:focus {
    outline: 1px solid #743f25;
  }

  label {
    color: #743f25;
    font-weight: 700;
    margin-top: 6px;
  }
`;
