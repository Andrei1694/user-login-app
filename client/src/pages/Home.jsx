import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function HomePage() {
  const { user } = useContext(UserContext);

  return (
    <>
      <h1>Hello {user ? user?.name : null}</h1>
    </>
  );
}
