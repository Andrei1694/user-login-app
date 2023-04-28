import { Link, Navigate, Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import styled from "styled-components";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 0.5rem;
  margin-right: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;
export default function Layout({ requireAuth = false }) {
  const { user, handleLogout } = useContext(UserContext);
  if (requireAuth && !user) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
