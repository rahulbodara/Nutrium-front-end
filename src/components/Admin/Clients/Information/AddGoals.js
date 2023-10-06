import React, { useEffect, useState } from "react";
import Modal from "../../common/Modal";
import DatePicker from "react-datepicker";
import { ErrorMessage, Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { handleApiCall } from "@/util/apiUtils";
import { CreateGoalData, GetAllGoalData } from "@/redux/action/goal";
import { useRouter } from "next/router";
import { goalmeasured, goals } from "@/schema/goal";
import { MdCalendarMonth } from "react-icons/md";

const AddGoals = (props) => {
  const router = useRouter();
  const { query } = router;

  const initialValues = {
    goalType: "",
    description: "",
    measurementType: "",
    value: "",
    unit: "",
    deadline: "",
  };

  const dispatch = useDispatch();

  const formatDateToMMDDYYYY = (isoDate) => {
    const date = new Date(isoDate);
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  useEffect(() => {
    dispatch(GetAllGoalData(query.id));
  }, [dispatch]);

  const handleSubmit = async (values) => {
    try {
      let updatedGoalData;
      if (
        values.goalType === "Generic (Sports and food routines, among others)"
      ) {
        updatedGoalData = {
          ...values,
          goalType: values.goalType,
          description: values.description,
          measurementType: '',
          value:'',
          unit: '',
          deadline: formatDateToMMDDYYYY(values.deadline),
        };
      } else {
        updatedGoalData = {
          ...values,
          goalType: values.goalType,
          description: values.description,
          measurementType: values.measurementType,
          value: values.value,
          unit: values.unit,
          deadline:  formatDateToMMDDYYYY(values.deadline),
        };
      }
      const success = await handleApiCall(
        dispatch,
        CreateGoalData(updatedGoalData, query.id),
        "Goals successfully created"
      );
      console.log(success, "successsucess");
      if (success) {
        dispatch(GetAllGoalData(query.id));
        props.setIsOpen(false);
      }
    } catch (error) {
      console.log("Error---", error);
    }
  };

  return (
    <div>
      <Modal
        title={props?.title}
        subtitle={props?.subtitle}
        isOpen={props.isOpen}
        className={props?.className}
        closeIcon={props?.closeIcon}
        setIsOpen={props.setIsOpen}
      >
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={goals}

          // validationSchema={(values) =>
          //   values?.goalType ===
          //   "Measured (Anthropometric data, Analytical Data, Body Composition)"
          //     ? goalmeasured
          //     : goals
          // }
        >
          {({ values, errors, touched }) => (
            <Form>
              <div className="px-[30px] pt-[0] py-[20px]">
                <div className="mt-[7px]">
                  <div className="mb-[5px] font-bold">
                    <abbr title="required">*</abbr> Goal type
                  </div>
                  <Field
                    as="select"
                    name="goalType"
                    className="border focus:shadow-none shadow-none focus:outline-none outline-none focus:ring-0 ring-0 transition-all duration-300 p-[6px_12px] w-full h-[34px] text-[13px] leading-4 focus:border-[#1ab394] border-[#e5e6e7]"
                  >
                    <option value="" selected disabled>
                      Please select your goal
                    </option>
                    <option value="Generic (Sports and food routines, among others)">
                      Generic (Sports and food routines, among others)
                    </option>

                    <option
                      value="Measured (Anthropometric data, Analytical Data, Body
                    Composition)"
                    >
                      Measured (Anthropometric data, Analytical Data, Body
                      Composition)
                    </option>
                  </Field>
                </div>
                <div className=" mt-[15px]">
                  <div className="mb-[5px] font-bold">Description</div>
                  <Field
                    type="text"
                    name="description"
                    placeholder="ex: Drink more than 1 liter of water per day"
                    // className="border focus:shadow-none shadow-none focus:outline-none outline-none focus:ring-0 ring-0 transition-all duration-300 p-[6px_12px] w-full h-[34px] text-[13px] leading-4 focus:border-[#1ab394] border-[#e5e6e7]"
                    className={`border focus:shadow-none shadow-none focus:outline-none outline-none focus:ring-0 ring-0 transition-all duration-300 p-[6px_12px] w-full h-[34px] text-[13px] leading-4 border-[#e5e6e7] ${
                      errors.description && touched.description
                        ? "border-dotted border-red-600"
                        : ""
                    }`}
                  />
                  {values.goalType ===
                    "Generic (Sports and food routines, among others)" && (
                    <ErrorMessage
                      name="description"
                      component="span"
                      // className="text-red-500 text-xs"
                      className="block mt-[5px] font-bold text-[13px] text-[#cc5965]"
                    />
                  )}
                </div>
                {values.goalType ===
                "Measured (Anthropometric data, Analytical Data, Body Composition)" ? (
                  <div className=" mt-[25px]">
                    <div className="mb-[5px] font-bold">
                      <abbr title="required">*</abbr> Measurement type
                    </div>
                    <Field
                      as="select"
                      name="measurementType"
                      className="border focus:shadow-none shadow-none focus:outline-none outline-none focus:ring-0 ring-0 transition-all duration-300 p-[6px_12px] w-full h-[34px] text-[13px] leading-4 focus:border-[#1ab394] border-[#e5e6e7]"
                    >
                      <option value="kilogram">kilogram</option>
                      <option value="pound">pound</option>
                      <option value="stone">stone</option>
                    </Field>
                    <div className="grid mt-[25px] grid-cols-12 gap-[30px]">
                      <div className="col-span-7">
                        <div className="mb-[5px] font-bold">
                          <abbr title="required">*</abbr> Value
                        </div>
                        <Field
                          type="number"
                          name="value"
                          // className="border focus:shadow-none shadow-none focus:outline-none outline-none focus:ring-0 ring-0 transition-all duration-300 p-[6px_12px] w-full h-[34px] text-[13px] leading-4 focus:border-[#1ab394] border-[#e5e6e7]"
                          className={`border focus:shadow-none shadow-none focus:outline-none outline-none focus:ring-0 ring-0 transition-all duration-300 p-[6px_12px] w-full h-[34px] text-[13px] leading-4 border-[#e5e6e7] ${
                            errors.value && touched.value
                              ? "border-dotted  border-green-600"
                              : ""
                          }`}
                        />

                        <ErrorMessage
                          name="value"
                          component="span"
                          className="block mt-[5px] font-bold text-[13px] text-[#cc5965]"
                        />
                      </div>
                      <div className="col-span-5">
                        <div className="mb-[5px] font-bold">
                          <abbr title="required"></abbr> Unit
                        </div>
                        <Field
                          as="select"
                          name="unit"
                          className="border focus:shadow-none shadow-none focus:outline-none outline-none focus:ring-0 ring-0 transition-all duration-300 p-[6px_12px] w-full h-[34px] text-[13px] leading-4 focus:border-[#1ab394] border-[#e5e6e7]"
                        >
                          <option value="kilogram">kilogram</option>
                          <option value="pound">pound</option>
                          <option value="stone">stone</option>
                        </Field>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                <div className="mt-[15px] relative">
                  <div className="mb-[5px] font-bold">
                    <abbr title="required">*</abbr> Deadline
                  </div>
                  <div className="flex items-center">
                    <Field name="deadline">
                      {({ field, form }) => (
                        <DatePicker
                          selected={field.value}
                          onChange={(date) =>
                            form.setFieldValue(field.name, date)
                          }
                          dateFormat="dd/MM/yyyy"
                          // className="border border-[#EEEEEE] w-full focus:outline-none focus:ring-transparent p-[4px]"
                          className={`border focus:shadow-none shadow-none focus:outline-none outline-none focus:ring-0 ring-0 transition-all duration-300 p-[6px_12px] w-full h-[34px] text-[13px] leading-4 border-[#e5e6e7] ${
                            errors.deadline && touched.deadline
                              ? "border-dotted border-red-600"
                              : ""
                          }`}
                        />
                      )}
                    </Field>
                    <MdCalendarMonth className="border border-[#EEEEEE] p-[7px] w-[40px] h-[36px] border-l-0" />
                  </div>
                  <ErrorMessage
                    name="deadline"
                    component="span"
                    className="block mt-[5px] font-bold text-[13px] text-[#cc5965]"
                  />
                </div>
                <div className="text-end mt-[20px] flex items-center justify-end">
                  <div>
                    <button
                      type="button"
                      onClick={() => props.setIsOpen(false)}
                      className="bg-white  border rounded-[3px] text-[14px] px-[12px] py-[6px]"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-[#1AB394] ml-[5px] text-[#FFFFFF] rounded-[3px] text-[14px] px-[12px] py-[6px]"
                    >
                      Set goal
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </Modal>
    </div>
  );
};

export default AddGoals;
