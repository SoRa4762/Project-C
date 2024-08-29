import * as yup from "yup";

export const signUpSchema = yup.object().shape({
  username: yup.string().required("Username shall not be empty").min(3).max(20),
  email: yup
    .string()
    .email("Invalid email")
    .required("Email shall not be empty"),
  password: yup
    .string()
    .required("Password shall not be empty")
    .min(8, "Password shall not be less than 8 characters")
    .max(50, "Password shall not be more than 50 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords shall match each other"),
  iAgree: yup
    .bool()
    .oneOf([true], "You shall agree to our terms and conditions"),
});

export const signInSchema = yup.object().shape({
  email: yup.string().required("Email shall not be empty"),
  password: yup.string().required("Password shall not be empty"),
  rememberMe: yup.bool(),
});
