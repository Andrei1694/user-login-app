import { Link, Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import styled from "styled-components";

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 0.5rem;
  margin-right: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;
export default function Layout() {
  return (
    <>
      <Navbar>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
      </Navbar>
      <Outlet />
    </>
  );
}
