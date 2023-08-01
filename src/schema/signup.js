import * as yup from "yup";
import {
  FIRST_NAME_REQUIRED,
  INVALID_EMAIL,
  EMAIL_REQUIRED,
  PASSWORD_REQUIRED,
} from "../constants/validationMessege";

export const signUpSchema = yup.object().shape({
  fullName: yup.string().required(FIRST_NAME_REQUIRED).nullable(),
  email: yup.string().required(EMAIL_REQUIRED).email(INVALID_EMAIL).nullable(),
  password: yup.string().required(PASSWORD_REQUIRED).nullable(),
});
