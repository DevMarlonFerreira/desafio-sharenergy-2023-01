import { createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";

const GlobalStyle = createGlobalStyle`
  html {
    background: ${(props) => props.theme.colors.white};
    font-family: "Poppins", sans-serif;
    box-sizing: border-box;
    }
    *, *:before, *:after {
      box-sizing: inherit;
    }
  body {
    margin: 0;
    font-size: 14px;
    color: ${(props) => props.theme.colors.text};
  }
`;

const GlobalStyledComposed = () => (
  <>
    <GlobalStyle />
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;600;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  </>
);

export default GlobalStyledComposed;