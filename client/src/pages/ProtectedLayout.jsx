import { Navigate, Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

export default function ProtectedLayout() {
  const { user } = useContext(UserContext);
  if (!user) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
