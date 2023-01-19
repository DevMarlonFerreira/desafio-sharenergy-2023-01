import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";

import Routes from "./routes/index";
import {basic} from "./styles/themes/basic";

function App() {
  return (
    <ThemeProvider theme={basic}>
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;