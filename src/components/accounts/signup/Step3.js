import React, { useState } from 'react'
import Select from '@/components/common/select'
import MultiSelect from "@/components/common/Multiselect";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { signUpSchemaStep3, signUpSchemaStep3Student } from '@/schema/signup';
import CustomSelect from './customSelect';
import {toast} from 'react-toastify'
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { signUp } from '@/redux/action/auth';
const Step3 = ({ handleSubmit, handleMultiSelectChange,userData }) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const profession = userData?.profession

  
  const nutrium = [
    { label: "Learn my clients' information and needs before the first appointment", value: "Learn my clients' information and needs before the first appointment" },
    { label: "Get more clients and grow my nutrition business", value: "Get more clients and grow my nutrition business" },
    { label: "Inform my clients with interactive and custom resources", value: "Inform my clients with interactive and custom resources" },
    { label: "Create custom meal plans in a faster and simpler way", value: "Create custom meal plans in a faster and simpler way" },
    { label: "Securely store and manage my clients' information", value: "Securely store and manage my clients' information" },
    { label: "Simplify appointment booking and management processes", value: "Simplify appointment booking and management processes" },
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


  const HandleForm = async (values) => {
    // setData({...data,...values})
    const body = {...userData,...values}
    const response = await dispatch(signUp(body))
    console.log("🚀 ~ file: Step3.jsx:51 ~ HandleForm ~ response:", response)
    if(response?.data?.success === true){
      localStorage.setItem("token",response?.data?.token)
      toast.success(response?.data?.message)
      router.push("/admin/professionals/home")
    }

    toast.error(response?.error?.data?.message)
  }


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
          initialValues={
            profession === "Student" ?
            {
              nutrium: "",
              workplace: "",
              courseEndDate: "",
            }
            :
          {
            nutrium: "",
            workplace: "",
            expertise: "",
            clientPerMonth: "",
          }
        }
          validationSchema={profession === "Student" ? signUpSchemaStep3Student : signUpSchemaStep3}
          onSubmit={(values) => {
            HandleForm(values)
          }}
        >
          {(formik) => {
            const { handleBlur,setFieldValue } = formik;
            return (
              <Form>
                <div className="mb-[15px]">
                  <label className='inline-block max-w-full text-[13px] mb-[5px] text-[#676a6c]'>What are you looking for in Nutrium</label>
                  <Field
                    name="nutrium"
                    options={nutrium}
                    component={CustomSelect}
                    placeholder="Choose one option"
                    isMulti={false}
                  />
                  <ErrorMessage
                    name="nutrium"
                    component="span"
                    className="text-red-500 text-xs"
                  />
                </div>
                {
                  profession === "Student" ? 
                  <>
                  <div className="mb-[15px]">
                  <label
                    htmlFor="workplace"
                    className="text-[#676a6c] text-[13px]"
                  >
                    University
                  </label>
                  <Field
                    type="text"
                    name="workplace"
                    className="w-full text-[13px] focus:outline-none border-[1px] border-[#aaa] rounded-[3px] h-[34px] p-[8px] text-[#676a6c] focus:border-[#1AB394] placeholder:text-[#676a6c42]"
                    id="workplace"
                    placeholder="Insert your university's name"
                  />
                  <ErrorMessage
                    name="workplace"
                    component="span"
                    className="text-red-500 text-xs"
                  />
                </div>

                <div className="mb-[15px]">
                  <label
                    htmlFor="courseEndDate"
                    className="text-[#676a6c] text-[13px]"
                  >
                    Predicted course end date
                  </label>
                  <Field
                    type="text"
                    name="courseEndDate"
                    className="w-full text-[13px] focus:outline-none border-[1px] border-[#aaa] rounded-[3px] h-[34px] p-[8px] text-[#676a6c] focus:border-[#1AB394] placeholder:text-[#676a6c42]"
                    id="courseEndDate"
                    placeholder="YYYY/MM"
                  />
                  <ErrorMessage
                    name="courseEndDate"
                    component="span"
                    className="text-red-500 text-xs"
                  />
                </div>
                  
                  </>  
                  :
                  <>
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
                    htmlFor="expertise"
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
                    {['No clients', 'upto 10', 'upto 25', 'More than 25'].map((label, index) => (
                      <span key={index}>
                        {console.log(label,"label")}
                        <label
                          htmlFor={`radio${index + 1}`}
                          className={`flex justify-center items-center h-full w-full ${
                            formik.values.clientPerMonth === label ? 'rounded radio-pill' : 'rounded'
                          }`}
                        >
                          <Field
                            type="radio"
                            id={`radio${index + 1}`}
                            name="clientPerMonth"
                            value={label}
                            className="hidden"
                          />
                          <label
                            className={`rounded p-[1em] max-md:p-[0.5em] flex items-center justify-center border border-[#AAAAAA] text-[#AAAAAA] text-[13px] w-full text-center hover:bg-[#EEEEEE] h-full cursor-pointer ${
                              formik.values.clientPerMonth === label ? 'bg-[#EEEEEE]' : ''
                            }`}
                            htmlFor={`radio${index + 1}`}
                          >
                            {label}
                          </label>
                        </label>
                      </span>
                    ))}
                  </div>
                  <ErrorMessage
                    name="clientPerMonth"
                    component="span"
                    className="text-red-500 text-xs"
                  />
                </div>
                </>
                }



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
