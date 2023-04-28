import { Navigate, Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

export default function Layout({ requireAuth = false }) {
  const { user } = useContext(UserContext);
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
