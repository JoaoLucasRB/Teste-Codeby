import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --blue: #3b74f2;
    --dark-blue: #3267db;
    --red: #eb4034;
    --dark-red: #d63c31;
    --black: #333;
    --grey: #efefef;
    --dark-grey: #9a9a9a;
    --white: #ffffff;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background:var(--white);
    -webkit-font-smoothing: antialiased;
  }
  html,body {
    height: 100%;
  }
  body, input, button, p, span {
    font: 14px Roboto, sans-serif;
  }
  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }
  button {
    cursor: pointer;
  }
  h1 {
    color: var(--blue);
  }

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  } 
`;