import {
    EVENT_TITLE,
  } from "@/constants/validationMessege";
  import * as yup from "yup";
  
  export const event = yup.object().shape({
    title: yup.string().required(EVENT_TITLE).nullable(),
  }).required();