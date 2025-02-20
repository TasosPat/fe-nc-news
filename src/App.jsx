import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
// import { AuthProvider } from "./contexts/authContext";
import {
  Articles,
  ArticleInfo,
  Header,
  Topics
} from "./components";
import { AppWrapper } from "./styles/styles";
import { theme } from "./styles/theme";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
     
        <Header />
        <AppWrapper>
          <Routes>
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:article_id" element={<ArticleInfo />} />
            <Route path="/topics" element={<Topics />} />
          </Routes>
          </AppWrapper>
      </ThemeProvider>
  )
}

export default App
