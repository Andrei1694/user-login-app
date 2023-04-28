import { useFormik } from "formik";
import * as yup from "yup";
import Input from "../../../components/Input";
import styled from "styled-components";

const initialValues = {
  email: "",
  password: "",
  confirmPassword: "",
};

const registerValidationSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Confirm Password is required"),
});

const FormContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export default function RegisterForm() {
  const formik = useFormik({
    initialValues,
    validationSchema: registerValidationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <FormContainer>
      <h5>Register</h5>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <Input
            label="Email"
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
          <Input
            label="Password"
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
        <div>
          <Input
            label="Comfirm Password"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <span>{formik.errors.confirmPassword}</span>
          )}
        </div>
        <button type="submit">Register</button>
      </form>
    </FormContainer>
  );
}
