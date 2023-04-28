import { useContext } from "react";
import { Navbar } from "../components/Navbar";
import { UserContext } from "../context/UserContext";
import styled from "styled-components";
import { Link, Navigate, Outlet } from "react-router-dom";
const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 0.5rem;
  margin-right: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;
export default function ProtectedLayout() {
  const { user, handleLogout } = useContext(UserContext);

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Navbar>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/weather">Weather</NavLink>
        <NavLink onClick={handleLogout}>Logout</NavLink>
      </Navbar>
      <Outlet />
    </div>
  );
}
