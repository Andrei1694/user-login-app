import { createContext, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cookies, setCookie] = useCookies(["token"]);

  const handleRegister = async (values) => {
    setIsLoading(true);
    try {
      const response = await axios.post("/api/register", values);
      setUser(response.data.user);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.response.data.message);
    }
  };

  const handleLogin = async (values) => {
    setIsLoading(true);
    try {
      //   const response = await axios.post("/api/login", values);
      //   setUser(response.data.user);
      setUser({
        name: "Stanciu",
      });
      setCookie("token", { Ceva: 2 });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.response.data.message);
    }
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isLoading,
        error,
        handleRegister,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
