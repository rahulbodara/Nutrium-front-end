import {
    USER_NAME,
  } from "@/constants/validationMessege";
  import * as yup from "yup";
  
  export const secretaries = yup.object().shape({
    email: yup.string().required(USER_NAME).nullable(),
    name: yup.string().required(USER_NAME).nullable(),
  });