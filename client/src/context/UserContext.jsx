import { createContext, useState } from "react";
import axios from "axios";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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
      console.log(user);
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
