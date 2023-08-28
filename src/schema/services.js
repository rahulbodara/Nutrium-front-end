import {
  DATE_OF_BIRTH,
  EMAIL_REQUIRED,
  INVALID_EMAIL,
  PASSWORD_REQUIRED,
  USER_NAME,
  TYPE_OF_SERVICE
} from "@/constants/validationMessege";
import * as yup from "yup";

export const addNewServices = yup.object().shape({
    typeofservice: yup.string().required(TYPE_OF_SERVICE).nullable(),
  dateOfBirth: yup.string().required(DATE_OF_BIRTH).nullable(),
  email: yup.string().required(EMAIL_REQUIRED).email(INVALID_EMAIL).nullable(),
  phoneNumber: yup.string().required(USER_NAME).nullable(),
  zipcode: yup.string().required(USER_NAME).nullable(),
  occupation: yup.string().required(USER_NAME).nullable(),
  gender: yup.string().required(USER_NAME).nullable(),
});
