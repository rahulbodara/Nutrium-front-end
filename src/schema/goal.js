import { USER_NAME } from "@/constants/validationMessege";
import * as yup from "yup";

export const goals = yup.object().shape({
  value: yup.string().required(USER_NAME).nullable(),
  description: yup.string().required(USER_NAME).nullable(),
  deadline: yup.date().required(USER_NAME),
});

// export const goalmeasured = yup.object().shape({
//    value: yup.string().required(USER_NAME).nullable(),
//   description: yup.string().required(USER_NAME).nullable(),
//   deadline: yup.date().required(USER_NAME),
// });