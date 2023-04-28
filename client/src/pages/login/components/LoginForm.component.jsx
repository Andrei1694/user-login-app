import { useFormik } from "formik";
import { useContext } from "react";
import * as yup from "yup";
import { UserContext } from "../../../context/UserContext";
import { Navigate, useNavigate } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};

const loginValidationSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup.string().required("Password is required"),
});

export default function LoginForm() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues,
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      //   alert(JSON.stringify(values, null, 2));
      handleLogin();
      navigate("/");
    },
  });
  const { handleLogin } = useContext(UserContext);
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <span>{formik.errors.email}</span>
          )}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <span>{formik.errors.password}</span>
          )}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
