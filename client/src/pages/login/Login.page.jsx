import { useState } from "react";
import LoginForm from "./components/LoginForm.component";
import RegisterForm from "./components/RegisterForm.component";

export default function LoginPage() {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };
  const renderMessage = () => {
    return (
      <p>
        {showLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <a href="#" onClick={toggleForm}>
          {showLogin ? "Register" : "Login"}
        </a>
      </p>
    );
  };
  return (
    <div>
      {showLogin ? (
        <LoginForm>{renderMessage()}</LoginForm>
      ) : (
        <RegisterForm>{renderMessage()}</RegisterForm>
      )}
    </div>
  );
}
