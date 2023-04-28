import { useFormik } from "formik";
import * as yup from "yup";
import Input from "../../../components/Input";
import { FormContainer } from "../../../components/FormContainer";
import Button from "../../../components/Button";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";

const initialValues = {
  email: "",
  name: "",
  password: "",
  confirmPassword: "",
};

const registerValidationSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  name: yup.string().min(5).required("Name is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Confirm Password is required"),
});

export default function RegisterForm({ children }) {
  const { handleRegister } = useContext(UserContext);
  const formik = useFormik({
    initialValues,
    validationSchema: registerValidationSchema,
    onSubmit: async (values) => {
      try {
        handleRegister(values);
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <FormContainer>
      <h5>Register</h5>
      <form onSubmit={formik.handleSubmit}>
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
        <Input
          label="Name"
          type="text"
          name="name"
          id="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name && (
          <span>{formik.errors.name}</span>
        )}
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

        <Button type="submit">Register</Button>
      </form>
      {children}
    </FormContainer>
  );
}
