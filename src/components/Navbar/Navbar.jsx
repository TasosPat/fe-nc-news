import { StyledLink, StyledNavbar } from "./styles";

function Navbar() {
  return (
    <nav>
      <StyledNavbar>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/topics">Topics</StyledLink>
        </li>
        <li>
          <StyledLink to="/articles">Recent Articles</StyledLink>
        </li>
      </StyledNavbar>
    </nav>
  );
}

export default Navbar;
