// import * as S from "./styles/App";
import { ThemeProvider } from "styled-components";
import { Footer, Header } from "./components/index";
import { Home } from "./pages/home";
import { theme } from "./styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Home />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
