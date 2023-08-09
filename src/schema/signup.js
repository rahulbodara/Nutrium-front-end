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
  termsAndCondition: yup.boolean()
    .test('accept-terms', 'You must accept the Terms and Conditions of Use and the Privacy Policy to continue', value => value === true),
});


export const signUpSchemaStep2 = yup.object().shape({
  gender: yup.string().required("Gender Field Is Required").nullable(),
  country: yup.string().required("country Field Is Required").nullable(),
  dateOfBirth: yup.string().required("Select Your Date Of Birth").nullable(),
  phoneNumber: yup.string()
    .required("Phone Number is Required")
    .matches(/^\d{10}$/, "Phone Number must be exactly 10 digits")
    .nullable(),
  profession: yup.string().required("select Your proffesion").nullable(),
});

export const signUpSchemaStep3 = yup.object().shape({
  nutrium: yup.string().required("What are you looking for in Nutrium?").nullable(),
  workplace: yup.string().required("This field cannot be empty").nullable(),
  expertise: yup
    .array()
    .required("Select at least one Expertise")
    .test("has-expertise", "Select at least one Expertise", (value) => {
      return Array.isArray(value) && value.length > 0;
    })
    .nullable(),
  clientPerMonth: yup.string().required("Please Select average client").nullable(),
});

export const signUpSchemaStep3Student = yup.object().shape({
  nutrium: yup.string().required("What are you looking for in Nutrium?").nullable(),
  workplace: yup.string().required("This field cannot be empty").nullable(),
  courseEndDate: yup.string().required("This field cannot be empty").nullable(),
});
