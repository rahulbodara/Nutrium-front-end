import {
  TYPE_OF_SERVICE
} from "@/constants/validationMessege";
import * as yup from "yup";

export const services = yup.object().shape({
  typeOfService: yup.string().required(TYPE_OF_SERVICE).nullable(),
  nameOfService: yup.string().required(TYPE_OF_SERVICE).nullable(),
  pricing: yup.string().required(TYPE_OF_SERVICE).nullable(),
});
