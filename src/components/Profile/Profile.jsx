import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";

import {
  LogoutButton,
  StyledTitle,
  ProfileContainer,
  UserDetailsSection,
} from "./styles";

function Profile() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

useEffect(() => {
    if (!currentUser) {
        navigate("/login");
        return;
      }
      setIsLoading(false);
}, [currentUser, navigate])

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (isLoading) return <p>Loading Profile...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ProfileContainer>
      <StyledTitle>Profile</StyledTitle>
      {currentUser && (
        <UserDetailsSection>
          <h2>User Details</h2>
          <img src={currentUser.avatar_url} alt="User icon" />
          <p>Username: {currentUser.username}</p>
          <p>Full Name: {currentUser.name}</p>
        </UserDetailsSection>
      )}
      <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
    </ProfileContainer>
  );
}

export default Profile;
