import { mdiBorderColor, mdiCheck, mdiClose, mdiCloseCircle } from "@mdi/js";
import Icon from "@mdi/react";
import React, { useState } from "react";
import moment from "moment";
const DateInput = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState(props.initialValue || '')
  const [dob, setDob] = useState(moment(props?.userData?.dateOfBirth, "DD-MM-YYYY"));
  const now = moment();
  const formattedDOB = dob.format("DD/MM/YYYY");
  const formattedNow = now.format("DD/MM/YYYY");
  const age = moment(formattedNow, 'DD/MM/YYYY').diff(moment(formattedDOB, 'DD/MM/YYYY'), 'years');
  const [isInputEmpty, setIsInputEmpty] = useState(true);
  const daysArray = Array.from({ length: 31 }, (_, index) => index + 1);
  const monthsArray = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const currentYear = new Date().getFullYear();
  const startYear = 1903;
  const yearsArray = Array.from(
    { length: currentYear - startYear + 1 },
    (_, index) => currentYear - index
  );

  console.log(yearsArray, "fffffffffffffffff");
  const handleInput = (event) => {
    if (event.target) {
      setIsInputEmpty(false);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setIsInputEmpty(true);
  };

  const handleChangeDay = (event) => {
    const newDob = dob.clone();
    newDob.date(parseInt(event.target.value));
    setDob(newDob);
  };

  const handleChangeMonth = (event) => {
    const newDob = dob.clone();
    newDob.month(monthsArray.indexOf(event.target.value));
    setDob(newDob);
  };

  const handleChangeYear = (event) => {
    const newDob = dob.clone();
    newDob.year(parseInt(event.target.value));
    setDob(newDob);
  };

  const handleCancel = () => {
    setIsFocused(false);
    setInputValue(props?.initialValue);
  };

  return (
    <div className={`flex select-none admin-select-field ${props.className}`}>
      <div
        className={`${props?.labelWidth}  flex border bg-[#FAFAFB] text-[1.1em] items-center z-[1] px-2.5 py-[5px] border-solid border-[#EEEEEE]`}
      >
        {props?.label}
      </div>
      <div className="flex-grow border-[1px_solid_#EEEEEE] border-l-0 flex select-none">
        <div className="select-field flex-grow border-[#EEEEEE] relative border-[1px]">
          {isFocused ? (
            <span className={`p-[10px]`}>
              <select
                name="day"
                id="day"
                className="w-auto p-0 border-none focus:ring-0 bg-transparent"
                onChange={handleChangeDay}
                value={dob.date()}
              >
                <option></option>
                {daysArray?.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
              &nbsp;
              <select
                name="month"
                id="month"
                className="w-auto border-none focus:ring-0 outline-none bg-transparent"
                onChange={handleChangeMonth}
                value={monthsArray[dob.month()]}
              >
                <option></option>
                {monthsArray?.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
              &nbsp;
              <select
                name="year"
                id="year"
                className="w-auto border-none focus:ring-0 outline-none bg-transparent"
                onChange={handleChangeYear}
                value={dob.year()}
              >
                <option></option>
                {yearsArray?.map((item, index) => {
                  const strYr = item.toString();
                  return (
                    <option value={strYr} key={index}>
                      {strYr}
                    </option>
                  );
                })}
              </select>
            </span>
          ) : (
            <span className={`p-[10px]`}>
              {formattedDOB}({age} Years)
            </span>
          )}
        </div>
            <button type="button" onClick={() => {props.onChange(formattedDOB); props.handleSubmit({ [props.name]: formattedDOB }); setIsFocused(false)}} className={`${isFocused ? 'block' : 'hidden'} clr-grn flex cursor-pointer items-center align-middle bg-[#FAFAFB] p-2.5 border-l-[#EEEEEE] border-[1px]`}>
                    <Icon
                        path={mdiCheck}
                        size="18px"
                        color="#1ab394"
                    />
                </button>
                <div className={`${isFocused ? 'block' : 'hidden'} clr-grn flex cursor-pointer items-center align-middle bg-[#FAFAFB] p-2.5 border-l-[#EEEEEE] border-[1px]`}>
                    <Icon
                        path={mdiClose}
                        size="18px"
                        color={'#DB4965'}
                        onClick={handleCancel}
                    />
                </div>
            <button type='button' onClick={handleFocus} className={`${isFocused ? 'hidden' : "block"} clr-grn flex cursor-pointer items-center align-middle bg-[#FAFAFB] p-2.5 border-l-[#EEEEEE] border-[1px]`}>
            <Icon path={mdiBorderColor} size="18px" color={'#1ab394'} />
          </button>
      </div>
    </div>
  );
};

export default DateInput;
