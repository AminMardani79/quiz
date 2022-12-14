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
  padding-bottom: 60px;
  .quiz_header {
    color: #743f25;
    font-weight: 900;
    font-size: 3.3rem;
  }
  @media screen and (max-width: 992px) {
    .quiz_header {
      font-size: 2.6rem;
      padding-top: 15px;
      margin-bottom: 0;
    }
  }
  .score {
    color: #824d33;
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 0;
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
  .no_question_found {
    color: #d61411;
    font-weight: 800;
    font-size: 25px;
    margin-bottom: 15px;
    text-shadow: 3px 3px 5px #fff;
  }
  .header_info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    padding: 0 10px;
    .timer {
      margin-bottom: 0;
      color: #743f25;
      font-size: 20px;
      font-weight: 600;
    }
  }
  @media screen and (max-width: 674px) {
    .next_btn {
      margin-right: 0.7rem;
    }
    .score {
      font-size: 22px;
    }
    .count_down {
      font-size: 16px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  input {
    width: 300px;
    height: 38px;
    border: 1px solid #743f25;
    border-radius: 4px;
    padding: 4px 6px;
  }
  input:focus {
    outline: 1px solid #2684ff;
    border-color: #2684ff;
  }
  .select_list {
    width: 300px;
    border: 1px solid #743f25;
    border-radius: 4px;
    padding: 0;
    .css-6j8wv5-Input {
      padding: 0;
      margin: 0;
    }
    .css-319lph-ValueContainer {
      padding: 0 6px;
    }
    .css-1s2u09g-control {
      box-shadow: none !important;
    }
  }

  label {
    color: #743f25;
    font-weight: 700;
    margin-top: 6px;
  }
`;
