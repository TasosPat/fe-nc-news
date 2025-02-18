import { Navbar } from "../";

import { StyledHeader, StyledLink } from "./styles";

function Header() {
  return (
    <StyledHeader>
      <div>
        <StyledLink to="/">NC News</StyledLink>
      </div>
      <Navbar />
    </StyledHeader>
  );
}

export default Header;
