import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  :root {
    --main-color: #ffbc0d;
    --sub-color: #e18733;
    --subBg-color: #dec8b4;
    --black-color: #2d2d2d;
    --shadow-color: #ebebeb;
    --bg-color: #f7f7f7
    --red-color: ##db0007;
    --white-color: #FFF;
  }


  html {
    font-family: "Noto Sans KR";
    font-size: 10px;
  }

  main {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: var(--black-color);
    letter-spacing: -1.5px;
  }

  a {
    display: block;
    text-decoration: none;
    color: var(--black-color);
  }

  ul, li {
    list-style: none;
  }
`;

export default GlobalStyle;
