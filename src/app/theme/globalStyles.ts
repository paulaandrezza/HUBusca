import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    margin: 0;
    padding: 0;
    background: linear-gradient(135deg, rgba(215,230,255,1) 0%, rgba(243,219,246,1) 50%, rgba(240,220,247,1) 55%, rgba(217,227,255,1) 100%);
    overflow-x: hidden;

    &:after {
      content: "";
      right: 0;
      bottom: 0;
      position: absolute;
      width: 100%;
      height: 50%;
      background: url("/right_bottom.png") no-repeat right bottom;
    }

    &:before {
      content: "";
      left: 0;
      bottom: 0;
      position: absolute;
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

  button, select {
    font-family: inherit;
  }
`;

export default GlobalStyle;
