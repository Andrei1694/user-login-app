import { useFormik } from "formik";
import { useContext } from "react";
import * as yup from "yup";
import { UserContext } from "../../../context/UserContext";
import { useNavigate } from "react-router-dom";
import Input from "../../../components/Input";
import { FormContainer } from "../../../components/FormContainer";
import Button from "../../../components/Button";

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
    <FormContainer>
      <h5>Login</h5>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <Input
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

          <Input
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

          <Button type="submit">Login</Button>
        </form>
      </div>
    </FormContainer>
  );
}
