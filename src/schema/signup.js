import * as yup from "yup";
import {
  FIRST_NAME_REQUIRED,
  INVALID_EMAIL,
  EMAIL_REQUIRED,
  PASSWORD_REQUIRED,
  TERMS_AND_CONDITION,
} from "../constants/validationMessege";

export const signUpSchema = yup.object().shape({
  fullName: yup.string().required(FIRST_NAME_REQUIRED).nullable(),
  email: yup.string().required(EMAIL_REQUIRED).email(INVALID_EMAIL).nullable(),
  password: yup.string().required(PASSWORD_REQUIRED).nullable(),
  termsAndCondition: yup
    .boolean()
    .oneOf([true], TERMS_AND_CONDITION)
    .nullable(),
});


export const signUpSchemaStep2 = yup.object().shape({
  gender: yup.string().required("Gender Required").nullable(),
  country: yup.string().required("country Required").nullable(),
  dob: yup.string().required("select date").nullable(),
  phoneNo: yup.string().required("add phone number").nullable(),
  profession: yup.string().required("select proffesion").nullable(),
});

export const signUpSchemaStep3 = yup.object().shape({
  lookingFor: yup.string().required("What are you looking for in Nutrium?").nullable(),
  workplace: yup.string().required("This field cannot be empty").nullable(),
  expertise: yup
    .array()
    .required("Select at least one Expertise")
    .test("has-expertise", "Select at least one Expertise", (value) => {
      return Array.isArray(value) && value.length > 0;
    })
    .nullable(),
  averageClient: yup.string().required("Select average client").nullable(),
});


