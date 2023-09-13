import React, { forwardRef, useState } from "react";
import Modal from "../../common/Modal";
import DatePicker from "react-datepicker";

const AddGoals = (props) => {
  const [goalType, setGoalType] = useState("0");

  console.log("🚀 ~ file: AddGoals.js:7 ~ AddGoals ~ goalType:", goalType);

  const [startDate, setStartDate] = useState(new Date());

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <div onClick={onClick} ref={ref} className="flex relative items-center">
      <input
        value={value}
        className="flex-1 border w-full text-[13px]  ml-[-1px] focus:ring-0 focus:outline-none focus:border-[#EEEEEE] min-h-[34px] pr-[45px] py-[5px] px-[10px] border-[#EEEEEE]"
      />
      <i className="fa fa-fw fa-calendar-days p-[6px_12px] min-w-[45px] justify-center flex items-center  absolute right-[0px] h-full border-l border-[#EEEEEE]"></i>
    </div>
  ));
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
        <div className="px-[30px] pt-[0] py-[20px]">
          <div className=" mt-[7px]">
            <div className="mb-[5px] font-bold">
              <abbr title="required">*</abbr> Goal type
            </div>
            <select
              onChange={(e) => setGoalType(e.target.value)}
              className="border focus:shadow-none shadow-none focus:outline-none outline-none focus:ring-0 ring-0 transition-all duration-300 p-[6px_12px] w-full h-[34px] text-[13px] leading-4 focus:border-[#1ab394] border-[#e5e6e7]"
            >
              <option selected={goalType === "0"}  value="0">
                Generic (Sports and food routines, among others)
              </option>
              <option selected={goalType === "1"} value="1">
                Measured (Anthropometric data, Analytical Data, Body
                Composition)
              </option>
            </select>
          </div>
          {/* {goalType ? (
            <>
              <div className=" mt-[25px]">
                <div className="mb-[5px] font-bold">
                  <abbr title="required">*</abbr> Measurement type
                </div>
                <select className="border focus:shadow-none shadow-none focus:outline-none outline-none focus:ring-0 ring-0 transition-all duration-300 p-[6px_12px] w-full h-[34px] text-[13px] leading-4 focus:border-[#1ab394] border-[#e5e6e7]">
                  <option selected="selected" value="0">
                    Generic (Sports and food routines, among others)
                  </option>
                  <option value="1">
                    Measured (Anthropometric data, Analytical Data, Body
                    Composition)
                  </option>
                </select>
              </div>
              <div className="grid mt-[25px] grid-cols-12 gap-[30px]">
                <div className="col-span-7">
                  <div className="mb-[5px] font-bold">
                    <abbr title="required">*</abbr> Measurement type
                  </div>
                  <input
                    type="number"
                    className="border focus:shadow-none shadow-none focus:outline-none outline-none focus:ring-0 ring-0 transition-all duration-300 p-[6px_12px] w-full h-[34px] text-[13px] leading-4 focus:border-[#1ab394] border-[#e5e6e7]"
                  />
                </div>
                <div className="col-span-5">
                  <div className="mb-[5px] font-bold">
                    <abbr title="required">*</abbr> Measurement type
                  </div>
                  <select className="border focus:shadow-none shadow-none focus:outline-none outline-none focus:ring-0 ring-0 transition-all duration-300 p-[6px_12px] w-full h-[34px] text-[13px] leading-4 focus:border-[#1ab394] border-[#e5e6e7]">
                    <option selected="selected" value="0">
                      kilogram
                    </option>
                    <option value="1">pound</option>
                    <option value="1">stone</option>
                  </select>
                </div>
              </div>
            </>
          ) : (
            <>
            
            </>
          )} */}

          {goalType === "0" ? (
            <div className=" mt-[15px]">
              <div className="mb-[5px] font-bold">Description</div>
              <input
                placeholder="ex: Drink more than 1 liter of water per day"
                className="border focus:shadow-none shadow-none focus:outline-none outline-none focus:ring-0 ring-0 transition-all duration-300 p-[6px_12px] w-full h-[34px] text-[13px] leading-4 focus:border-[#1ab394] border-[#e5e6e7]"
              />
            </div>
          ) : (
            <div className=" mt-[25px]">
              <div className="mb-[5px] font-bold">
                <abbr title="required">*</abbr> Measurement type
              </div>
              <select className="border focus:shadow-none shadow-none focus:outline-none outline-none focus:ring-0 ring-0 transition-all duration-300 p-[6px_12px] w-full h-[34px] text-[13px] leading-4 focus:border-[#1ab394] border-[#e5e6e7]">
                <option selected="selected" value="0">
                  kilogram
                </option>
                <option value="1">pound</option>
                <option value="1">stone</option>
              </select>
              <div className="grid mt-[25px] grid-cols-12 gap-[30px]">
                <div className="col-span-7">
                  <div className="mb-[5px] font-bold">
                    <abbr title="required">*</abbr> Value
                  </div>
                  <input
                    type="number"
                    className="border focus:shadow-none shadow-none focus:outline-none outline-none focus:ring-0 ring-0 transition-all duration-300 p-[6px_12px] w-full h-[34px] text-[13px] leading-4 focus:border-[#1ab394] border-[#e5e6e7]"
                  />
                </div>
                <div className="col-span-5">
                  <div className="mb-[5px] font-bold">
                    <abbr title="required"></abbr> Unit
                  </div>
                  <select className="border focus:shadow-none shadow-none focus:outline-none outline-none focus:ring-0 ring-0 transition-all duration-300 p-[6px_12px] w-full h-[34px] text-[13px] leading-4 focus:border-[#1ab394] border-[#e5e6e7]">
                    <option selected="selected" value="0">
                      kilogram
                    </option>
                    <option value="1">pound</option>
                    <option value="1">stone</option>
                  </select>
                </div>
              </div>

              <div className=" mt-[15px]">
                <div className="mb-[5px] font-bold">Description</div>
                <input
                //   placeholder="ex: Drink more than 1 liter of water per day"
                  className="border focus:shadow-none shadow-none focus:outline-none outline-none focus:ring-0 ring-0 transition-all duration-300 p-[6px_12px] w-full h-[34px] text-[13px] leading-4 focus:border-[#1ab394] border-[#e5e6e7]"
                />
              </div>
            </div>
          )}

          {/* <div className=" mt-[15px]">
            <div className="mb-[5px] font-bold">Description</div>
            <input
              placeholder="ex: Drink more than 1 liter of water per day"
              className="border focus:shadow-none shadow-none focus:outline-none outline-none focus:ring-0 ring-0 transition-all duration-300 p-[6px_12px] w-full h-[34px] text-[13px] leading-4 focus:border-[#1ab394] border-[#e5e6e7]"
            />
          </div> */}
          <div className="mt-[15px]">
            <div className="mb-[5px] font-bold">
              <abbr title="required">*</abbr> Deadline
            </div>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              showYearDropdown
              className="flex-1 border w-full text-[13px] ml-[-1px] focus:ring-0 focus:outline-none focus:border-[#EEEEEE] min-h-[38px] py-[5px] px-[10px] border-[#EEEEEE]"
              dateFormatCalendar="MMMM"
              yearDropdownItemNumber={15}
              scrollableYearDropdown
              customInput={<ExampleCustomInput />}
            />
          </div>
          <div className="text-end mt-[20px] flex items-center justify-between">
            <button className="bg-[#DB4965]  border border-[#DB4965] text-white rounded-[3px] text-[14px] px-[12px] py-[6px]">
              Remove
            </button>
            <div>
              <button className="bg-white  border rounded-[3px] text-[14px] px-[12px] py-[6px]">
                Cancel
              </button>
              <button className="bg-[#1AB394] ml-[5px] text-[#FFFFFF] rounded-[3px] text-[14px] px-[12px] py-[6px]">
                Save
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AddGoals;
