import {
     FOOD_REQUIRED,
  } from "@/constants/validationMessege";
  import * as yup from "yup";
  
  export const food = yup.object().shape({
    observation: yup.string().required(FOOD_REQUIRED).nullable(),
  }).required();