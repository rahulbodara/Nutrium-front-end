import {
    TYPE_OF_SERVICE
  } from "@/constants/validationMessege";
  import * as yup from "yup";
  
  export const workplace = yup.object().shape({
    name: yup.string().required(TYPE_OF_SERVICE).nullable(),
  });
  