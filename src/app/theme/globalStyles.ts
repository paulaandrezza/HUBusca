import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    margin: 0;
    padding: 32px 16px;
    background: linear-gradient(90deg, rgba(215,230,255,1) 0%, rgba(243,219,246,1) 50%, rgba(240,220,247,1) 55%, rgba(217,227,255,1) 100%);
    overflow-x: hidden;

    display: grid;
    grid-template-rows: 1fr 1fr auto;
    grid-template-areas: "logo" "header" "main";
    gap: 16px;

    @media screen and (min-width: 768px) {
      padding: 64px 128px;
      grid-template-columns: 4fr 1fr;
      grid-template-rows: 1fr auto;
      grid-template-areas: 
      "header logo"
      "main aside";
      gap: 64px;
    }

    &:after {
      content: "";
      right: 0;
      bottom: 0;
      position: fixed;
      z-index: -1;
      width: 100%;
      height: 50%;
      background: url("/right_bottom.png") no-repeat right bottom;
    }

    &:before {
      content: "";
      left: 0;
      bottom: 0;
      position: fixed;
      z-index: -1;
      width: 100%;
      height: 50%;
      background: url("/left_bottom.png") no-repeat left bottom;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ol, ul {
    list-style: none;
  }

  button, select, input {
    font-family: inherit;
  }
`;

export default GlobalStyle;
