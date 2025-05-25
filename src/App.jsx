import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./contexts/authContext";
import {
  Articles,
  ArticleInfo,
  Header,
  Topics,
  Error,
  Login,
  Profile,
  Home
} from "./components";
import { AppWrapper } from "./styles/styles";
import { theme } from "./styles/theme";
import "./App.css";

function App() {
  return (
    <AuthProvider>
    <ThemeProvider theme={theme}>
     
        <Header />
        <AppWrapper>
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:article_id" element={<ArticleInfo />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/*" element={<Error />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          </AppWrapper>
      </ThemeProvider>
      </AuthProvider>
  )
}

export default App
