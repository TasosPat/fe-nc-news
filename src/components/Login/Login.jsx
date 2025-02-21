import { useState } from "react";
import { useAuth } from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";
import {
  LoginContainer,
  StyledTitle,
  LoginForm,
  Input,
  Button,
  ErrorMessage,
} from "./styles";

function Login() {
  const [username, setUsername] = useState("");
  const { login, loading, error } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const success = await login(username);
    if (success) {
      navigate("/profile");
    }
  };

  return (
    <LoginContainer>
      <StyledTitle>Login</StyledTitle>
      <LoginForm onSubmit={handleSubmit}>
        <Input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Enter Username"
          required
        />
        <Button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </Button>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </LoginForm>
    </LoginContainer>
  );
}

export default Login;
