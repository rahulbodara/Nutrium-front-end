import React from "react";
import { Field } from "formik";

const InputField = (props) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const [parentName, childName] = name.split(".");
      props?.setFormData((prevFormData) => ({
        ...prevFormData,
        [parentName]: {
          ...prevFormData[parentName],
          [childName]: value,
        },
      }));
    } else {
      props.setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };
  return (
    <div className={`flex select-none ${props?.className}`}>
      <div
        className={`${props?.labelStyle} md:min-w-[140px] md:flex-basis-[140px] field-title flex border bg-[#FAFAFB] text-[1.1em] items-center z-[1] px-2.5 py-[5px] border-solid border-[#EEEEEE]`}
      >
        <label className="inline-block max-w-full">{props?.label}</label>
      </div>
      <div className="flex flex-grow">
        <div className="relative flex-grow select-none border border-[#EEEEEE]">
          <div className="flex h-full">
            {props.mobile ? (
              <div className="bg-[#EEEEEE] h-full cursor-not-allowed min-w-[60px] flex justify-center items-center border-0 text-inherit text-sm font-normal leading-none text-center px-3 py-1.5 rounded-[1px]">
                + 91
              </div>
            ) : (
              ""
            )}
            {props.formik === false ?
              <Field
                type="text"
                className="focus:ring-0 p-[6px_12px] border-none w-full text-[13px] placeholder:opacity-[0.6]"
                name={props.name}
              /> :
              <input
                type="text"
                className="focus:ring-0 p-[6px_12px] border-none w-full text-[13px] placeholder:opacity-[0.6]"
                placeholder={props?.placeholder}
                name={props.name}
                value={props.value}
                onChange={handleChange}
              />
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputField;
