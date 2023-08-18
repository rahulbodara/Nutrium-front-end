import React from 'react'
import { ErrorMessage, Field, Form, Formik } from "formik";
import { signUpSchemaStep2 } from '@/schema/signup';
import CustomSelect from './customSelect';

const Step2 = ({ handleSubmit }) => {
  const options = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
    { label: "Other", value: "Other" },
  ];

  const countryOptions = [
    { label: "India", value: "India" },
    { label: "USA", value: "USA" },
    { label: "Canada", value: "Canada" },
  ];


  const profession = [
    { label: "Nutritionist", value: "Nutritionist" },
    { label: "Dietitian", value: "Dietitian" },
    { label: "Nutritional Therapist", value: "Nutritional Therapist" },
    { label: "Health Coach", value: "Health Coach" },
    { label: "Student", value: "Student" },
    { label: "Other", value: "Other" },
  ];


  

  return (
    <div>
      <section
        className={`p-[80px] max-md:p-[40px] w-full relative bg-white `}
      >
        <div className="mb-[40px]">
          <h1 className=" text-3xl text-[#1AB394] tracking-[0.5px] text-center">
            Hi, nna! We need some information so we can improve your
            experience
          </h1>
        </div>
        <Formik
          initialValues={{
            gender: "",
            country: "",
            dateOfBirth: "",
            phoneNumber: "",
            profession: ""
          }}
          validationSchema={signUpSchemaStep2}
          onSubmit={(values) => {
            console.log("🚀 ~ file: Step2.jsx:41 ~ Step2 ~ values:", values)
            handleSubmit(values);
          }}
        >
          {(formik) => {
            const { handleBlur } = formik;
            return (
              <Form>
                <div className="mb-[15px]">
                  <label className='inline-block max-w-full text-[13px] mb-[5px] text-[#676a6c]'>Gender</label>
                  {/* <Field as="select" name="gender" value={formik.values.gender} onBlur={handleBlur} defaultValue="" className="w-full mt-2 p-[10px] text-[#6e7c91] rounded-md">
                    <option value="option1">Select Gender</option>
                    <option value="option1">Male</option>
                    <option value="option2">Female</option>
                    <option value="option2">Other</option>
                  </Field> */}
                  <Field
                    name="gender"
                    options={options}
                    component={CustomSelect}
                    onBlur={handleBlur}
                    placeholder="Choose one option"
                    isMulti={false}
                  />
                  <ErrorMessage
                    name="gender"
                    component="span"
                    className="text-red-500 text-xs"
                  />
                </div>
                <div className="mb-[15px]">
                  <label className='inline-block max-w-full text-[13px] mb-[5px] text-[#676a6c]'>country</label>
                  {/* <Field as="select" name="country" value={formik.values.country} onBlur={handleBlur} defaultValue="" className="w-full mt-2 p-[10px] text-[#6e7c91] rounded-md">
                    <option value="option1">Select country</option>
                    <option value="option1">Male</option>
                    <option value="option2">Female</option>
                    <option value="option2">Other</option>
                  </Field> */}
                  <Field
                    name="country"
                    options={countryOptions}
                    component={CustomSelect}
                    onBlur={handleBlur}
                    placeholder="Choose one option"
                    isMulti={false}
                  />
                  <ErrorMessage
                    name="country"
                    component="span"
                    className="text-red-500 text-xs"
                  />
                </div>
                <div>
                  <label
                    htmlFor=""
                    className="inline-block max-w-full text-[13px] mb-[5px] text-[#676a6c]"
                  >
                    Date of Birth
                  </label>
                  <div className="mb-[15px]">
                    <Field
                      name="dateOfBirth"
                      placeholder="MM/DD/YYYY"
                      // inputMode="number"
                      type="date"
                      className="w-full h-[34px] placeholder:text-[15px] text-[#676a6c] placeholder:text-[#676a6c42] border-[1px] rounded-[3px] border-[#aaaaaa] focus:placeholder:text-[#676a6c] focus:border-[#1AB394] focus-visible:!outline-none focus:border-[1px] focus:bg-transparent p-[8px] "
                    />
                  </div>
                  <ErrorMessage
                    name="dateOfBirth"
                    component="span"
                    className="text-red-500 text-xs"
                  />
                </div>
                <div>
                  <label
                    htmlFor=""
                    className="inline-block max-w-full text-[#676a6c] text-[13px] mb-[5px]"
                  >
                    Mobile Phone
                  </label>
                  <div className="mb-[15px] flex">
                    <div className="w-24 h-[34px] placeholder:text-[15px] border-[1px] border-r-0 cursor-not-allowed  rounded-l-[3px] rounded-r-[0px] border-[#aaaaaa] focus:border-[#1AB394] focus-visible:!outline-none focus:border-[1px] focus:bg-transparent p-[8px] "></div>
                    <Field
                      name='phoneNumber'
                      placeholder="insert your mobile phone number"
                      inputMode="text"
                      className="h-[34px] text-[#676a6c] placeholder:text-[#676a6c42]   w-full border-[1px] rounded-l-[0px] rounded-r-[3px] border-[#aaaaaa] focus:border-[#1AB394] focus-visible:!outline-none focus:border-[1px] focus:bg-transparent p-[8px] "
                    />
                  </div>
                  <ErrorMessage
                    name="phoneNumber"
                    component="span"
                    className="text-red-500 text-xs"
                  />
                </div>
                <div className="mb-[15px]">
                  <label className='inline-block max-w-full text-[13px] mb-[5px] text-[#676a6c]'>Profession</label>
                  {/* <Field as="select" name="profession" value={formik.values.profession} onBlur={handleBlur} defaultValue="" className="w-full mt-2 p-[10px] text-[#6e7c91] rounded-md">
                    <option value="option1">Select Profession</option>
                    <option value="option1">Nutritionlist</option>
                    <option value="option2">Dietitian</option>
                    <option value="option2">Nutritional Therapist</option>
                    <option value="option2">Health Coach</option>
                    <option value="option2">Student</option>
                    <option value="option2">Other</option>
                  </Field> */}
                   <Field
                    name="profession"
                    options={profession}
                    component={CustomSelect}
                    onBlur={handleBlur}
                    placeholder="Choose one option"
                    isMulti={false}
                  />
                  <ErrorMessage
                    name="profession"
                    component="span"
                    className="text-red-500 text-xs"
                  />
                </div>
                <button type="submit" className="p-2 capitalize text-white rounded-[5px] w-full mt-[24px] bg-[#EA9F77]">
                  Continue
                </button>
              </Form>
            )
          }}

        </Formik>
      </section>
    </div>
  )
}

export default Step2
