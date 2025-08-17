import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    --main-pink-color: #EB6CA1;
    --main-blue-color: #0074BC;
    --main-yellow-color: #FFE74D;
    --black-color: #000;
    --white-color: #FFF;
  }

  html {
    font-size: 10px;
  }

  * {
    box-sizing: border-box;
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
