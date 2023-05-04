import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function HomePage() {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <>
      <h1>Hello {user ? user?.user.name : null}</h1>
    </>
  );
}
