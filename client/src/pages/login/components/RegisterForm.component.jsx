import { useFormik } from "formik";
import * as yup from "yup";
import Input from "../../../components/Input";
import { FormContainer } from "../../../components/FormContainer";
import Button from "../../../components/Button";

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
    </FormContainer>
  );
}
