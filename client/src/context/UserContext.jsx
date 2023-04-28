import { createContext, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cookies, setCookie] = useCookies(["user"]);

  const handleRegister = async (values) => {
    const { email, password, name } = values;
    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:3000/users", {
        email,
        password,
        name,
      });
      console.log(response);
      setUser({ user: response.data.user, token: response.data.token });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.response.data.message);
    }
  };

  const handleLogin = async (values) => {
    const { email, password } = values;
    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:3000/users/login", {
        email,
        password,
      });
      setUser({ user: response.data.user, token: response.data.token });
      setCookie("user", {
        user: response.data.user,
        token: response.data.token,
      });
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
