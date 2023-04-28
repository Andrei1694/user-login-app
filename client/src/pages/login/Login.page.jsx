import { useState } from "react";
import LoginForm from "./components/LoginForm.component";
import RegisterForm from "./components/RegisterForm.component";

export default function LoginPage() {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div>
      {showLogin ? <LoginForm /> : <RegisterForm />}
      <p>
        {showLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <a href="#" onClick={toggleForm}>
          {showLogin ? "Register" : "Login"}
        </a>
      </p>
    </div>
  );
}
