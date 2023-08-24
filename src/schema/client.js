import { DATE_OF_BIRTH, EMAIL_REQUIRED, INVALID_EMAIL, PASSWORD_REQUIRED, USER_NAME } from "@/constants/validationMessege";
import * as yup from "yup";


export const clientValidationSchema = yup.object().shape({
  email: yup.string().required(EMAIL_REQUIRED).email(INVALID_EMAIL).nullable(),
  dateOfBirth: yup.string().required(DATE_OF_BIRTH).nullable(),
  fullName: yup.string().required(USER_NAME).nullable(),
});

export const addNewClient = yup.object().shape({
  fullName: yup.string().required(USER_NAME).nullable(),
  dateOfBirth: yup.string().required(DATE_OF_BIRTH).nullable(),
  email: yup.string().required(EMAIL_REQUIRED).email(INVALID_EMAIL).nullable(),
  phoneNumber: yup.string().required(USER_NAME).nullable(),
  zipcode: yup.string().required(USER_NAME).nullable(),
  occupation: yup.string().required(USER_NAME).nullable(),
  gender: yup.string().required(USER_NAME).nullable()
})