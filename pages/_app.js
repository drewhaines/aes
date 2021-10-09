import "../styles/globals.css";
import "../styles/home.scss";
import "react-static-tweets/styles.css";

import { ThemeProvider } from "theme-ui";
import theme from "../theme/index";

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
