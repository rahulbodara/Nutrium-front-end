import React from 'react'
import Select from '@/components/common/select'
import MultiSelect from "@/components/common/Multiselect";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { signUpSchemaStep3 } from '@/schema/signup';
import CustomSelect from './customSelect';

const Step3 = ({ handleSubmit, handleMultiSelectChange }) => {
  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  const MultiSelectOptions = [
    {
      label: "Chinese",
      value: "zh-CN"
    },
    {
      label: "English (US)",
      value: "en-US"
    },
    {
      label: "English (GB)",
      value: "en-GB"
    },
    {
      label: "French",
      value: "fr-FR"
    },
    {
      label: "Spanish",
      value: "es-ES"
    }
  ];

  return (
    <div>
      <section
        className={`p-[80px] max-md:p-[40px] w-full relative bg-white`}
      >
        <div className="mb-[40px]">
          <h1 className=" text-3xl text-[#1AB394] tracking-[0.5px] text-center">
            Last step to start using Nutrium!
          </h1>
        </div>
        <Formik
          initialValues={{
            lookingFor: "",
            workplace: "",
            expertise: "",
            averageClient: "",
          }}
          validationSchema={signUpSchemaStep3}
          onSubmit={(values) => {
            console.log("values", values);
            console.log("🚀 ~ file: Step3.jsx:34 ~ Step3 ~ handleSubmit:", handleSubmit)
          }}
        >
          {(formik) => {
            const { handleBlur } = formik;
            return (
              <Form>
                <div className="mb-[15px]">
                  <label className='inline-block max-w-full text-[13px] mb-[5px] text-[#676a6c]'>What are you looking for in Nutrium</label>
                  <Field
                    name="lookingFor"
                    options={options}
                    component={CustomSelect}
                    placeholder="Choose one option"
                    isMulti={false}
                  />
                  <ErrorMessage
                    name="lookingFor"
                    component="span"
                    className="text-red-500 text-xs"
                  />
                </div>
                <div className="mb-[15px]">
                  <label
                    htmlFor="workplace"
                    className="text-[#676a6c] text-[13px]"
                  >
                    Workplace
                  </label>
                  <Field
                    type="text"
                    name="workplace"
                    className="w-full text-[13px] focus:outline-none border-[1px] border-[#aaa] rounded-[3px] h-[34px] p-[8px] text-[#676a6c] focus:border-[#1AB394] placeholder:text-[#676a6c42]"
                    id="workplace"
                    placeholder="E.g.Nutrium practice:Online practice"
                  />
                  <ErrorMessage
                    name="workplace"
                    component="span"
                    className="text-red-500 text-xs"
                  />
                </div>

                <div className='mb-[15px]'>
                  <label
                    htmlFor="workplace"
                    className="text-[#676a6c] text-[13px]"
                  >
                    Expertise
                  </label>
                  <Field
                    name="expertise"
                    options={MultiSelectOptions}
                    component={CustomSelect}
                    placeholder="Select multi Expertise..."
                    isMulti={true}
                  />
                  <ErrorMessage
                    name="expertise"
                    component="span"
                    className="text-red-500 text-xs"
                  />
                </div>
                <div className="mb-[15px]">
                  <label className="text-[#676a6c] text-[13px]">
                    Average number of clients per month
                  </label>
                  <div className="grid grid-cols-[1fr_1fr_1fr_1fr] max-md:grid-cols-[1fr_1fr] max-md:gap-y-[1em] auto-rows-[1fr] gap-x-[1em]">
                    <span>
                      <label
                        htmlFor="radio1"
                        className="flex justify-center items-center h-full w-full radio-pill"
                      >
                        <Field
                          type="radio"
                          id="radio1"
                          name="averageClient"
                          className="hidden"
                        />
                        <label
                          className="rounded p-[1em] max-md:p-[0.5em] flex items-center justify-center border border-[#AAAAAA] text-[#AAAAAA] text-[13px] w-full text-center hover:bg-[#EEEEEE] h-full cursor-pointer"
                          htmlFor="radio1"
                        >
                          No clients
                        </label>
                      </label>
                    </span>
                    <span>
                      <label
                        htmlFor="radio2"
                        className="flex justify-center items-center h-full w-full rounded radio-pill"
                      >
                        <Field
                          type="radio"
                          id="radio2"
                          name="averageClient"
                          className="hidden"
                        />
                        <label
                          className="rounded p-[1em] max-md:p-[0.5em] flex items-center justify-center border border-[#AAAAAA] text-[#AAAAAA] text-[13px] w-full text-center hover:bg-[#EEEEEE] h-full cursor-pointer"
                          htmlFor="radio2"
                        >
                          Up to 10
                        </label>
                      </label>
                    </span>
                    <span>
                      <label
                        htmlFor="radio3"
                        className="flex justify-center items-center h-full w-full rounded radio-pill"
                      >
                        <Field
                          type="radio"
                          id="radio3"
                          name="averageClient"
                          className="hidden"
                        />
                        <label
                          className="rounded p-[1em] max-md:p-[0.5em] flex items-center justify-center border border-[#AAAAAA] text-[#AAAAAA] text-[13px] w-full text-center hover:bg-[#EEEEEE] h-full cursor-pointer"
                          htmlFor="radio3"
                        >
                          Up to 25
                        </label>
                      </label>
                    </span>
                    <span>
                      <label
                        htmlFor="radio4"
                        className="flex justify-center items-center h-full w-full rounded radio-pill"
                      >
                        <Field
                          type="radio"
                          id="radio4"
                          name="averageClient"
                          className="hidden"

                        />
                        <label
                          className="rounded p-[1em] max-md:p-[0.5em] flex items-center justify-center border border-[#AAAAAA] text-[#AAAAAA] text-[13px] w-full text-center hover:bg-[#EEEEEE] h-full cursor-pointer"
                          htmlFor="radio4"
                        >
                          More than 25
                        </label>
                      </label>
                    </span>
                  </div>
                  <ErrorMessage
                    name="averageClient"
                    component="span"
                    className="text-red-500 text-xs"
                  />
                </div>
                <button
                  className="w-full border-[1px] rounded-[3px] text-[#fff] text-[14px] bg-[#EA9F77] py-[6px] px-[12px] mt-[24px]"
                  name="button"
                  type="submit"
                >
                  Access Nutrium
                </button>
              </Form>)
          }}
        </Formik>

      </section>
    </div>
  )
}

export default Step3
