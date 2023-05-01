import { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 0.5rem;
  margin-right: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;

const NavContainer = styled.nav`
  background-color: #333;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.5rem;
`;

export function Navbar() {
  const { user, handleLogout } = useContext(UserContext);
  return (
    <NavContainer>
      <NavLink to="/">Home</NavLink>
      {user && <NavLink to="/weather">Weather</NavLink>}
      {!user && <NavLink to="/login">Login</NavLink>}
      {user && <NavLink onClick={handleLogout}>Logout</NavLink>}
    </NavContainer>
  );
}
