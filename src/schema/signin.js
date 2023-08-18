import * as yup from "yup";
import {
  INVALID_EMAIL,
  EMAIL_REQUIRED,
  PASSWORD_REQUIRED,
} from "../constants/validationMessege";

export const signInValidationSchema = yup.object().shape({
    email: yup.string().required(EMAIL_REQUIRED).email(INVALID_EMAIL).nullable(),
    password: yup.string().required(PASSWORD_REQUIRED).nullable(),
});

export const forgotPasswordValidationSchema = yup.object().shape({
    email: yup.string().required(EMAIL_REQUIRED).email(INVALID_EMAIL).nullable(),
})