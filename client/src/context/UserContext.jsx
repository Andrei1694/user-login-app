import { createContext, useState } from "react";

import { useCookies } from "react-cookie";
import { loginRequest, registerUser } from "../requests";
import { useNavigate } from "react-router-dom";
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const navigate = useNavigate();
  const handleRegister = async (values) => {
    const { email, password, name } = values;
    setIsLoading(true);
    try {
      const { user, token } = await registerUser(email, password, name);
      setUser({ user, token });
      setCookie("token", token);
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      setIsLoading(false);
      setError(error.response.data.message);
    }
  };

  const handleLogin = async (values) => {
    const { email, password } = values;
    setIsLoading(true);
    try {
      const { user, token } = await loginRequest(email, password);
      setUser(user);
      setCookie("token", token);
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      setIsLoading(false);
      // setError(error?.response?.data?.message);
      console.log(error);
    }
  };

  const handleLogout = () => {
    setUser(null);
    removeCookie("token");
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
