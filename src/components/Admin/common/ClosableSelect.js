import Icon from '@mdi/react';
import React, { useEffect, useRef, useState } from 'react';
import { mdiChevronDown, mdiChevronUp, mdiCloseCircleOutline } from '@mdi/js';
import 'select2/dist/css/select2.min.css';
import $ from 'jquery';
import 'select2';

const ClosableSelect = (props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectValue, setSelectValue] = useState(props.initialValue || '')
  const selectRef = useRef(null);
  const [selectedValue, setSelectedValue] = useState(props.initialValue || "");

  const handleonClick = () => {
    setIsDropdownOpen(true);
  };
  const handlefalseClick = () => {
    setIsDropdownOpen(false);
  };
  useEffect(() => {
    const $select = $(selectRef.current);

    $select.select2({
      minimumResultsForSearch: props.searchOption === false ? Infinity : 0,
    });

    $select.on("change", (e) => {
      const selectedValue = e.target.value;
      if (props?.onChange) {
        props?.onChange(selectedValue);
        const updatedValue = { [props.name]: selectedValue }
        props.handleSubmit(updatedValue)
      }
    });

    return () => {
      $select.off("change");
      $select.select2("destroy");
    };
  }, [props?.searchOption]);

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    if (props.onValueChange) {
      props.onValueChange(value);
    }
  };
  return (
    <div className={`flex select-none admin-select-field ${props?.className}`}>
      {props?.label ? (
        <div
          className={`${props?.labelWidth
            } md:basis-[140px] md:min-w-[140px] flex border bg-[#FAFAFB] text-[1.1em] items-center z-[1] px-2.5 py-[5px] border-solid border-[#EEEEEE] ${isDropdownOpen ? "border-[#1ab394]" : "border-[#EEEEEE]"
            }`}
        >
          {props?.label}
        </div>
      ) : (
        ""
      )}
      {props?.Icon ? (
        <div
          className={`flex border bg-[#FAFAFB] text-[1.1em] items-center z-[1] px-2.5 py-[5px] border-solid ${isDropdownOpen ? "!border-[#1ab394] border-r-0" : "border-[#EEEEEE]"
            } border-[#EEEEEE]`}
        >
          <Icon path={props.Icon} size="18px" />
        </div>
      ) : (
        ""
      )}
      <div
        className={`grow-[3] ${isDropdownOpen && props?.focusEffect
          ? "!border-[1px_solid_#1ab394]"
          : "border-[#EEEEEE] border-[1px] "
          } border-[#EEEEEE] border-[1px] border-l-0 flex select-none`}
      >
        <div
          className={`select-field flex-grow border-[#EEEEEE] ${isDropdownOpen && props?.focusEffect
            ? "!border-[#1ab394]"
            : "border-[#EEEEEE]"
            } border-[1px] border-r-0`}
        >
          <select
            ref={selectRef}
            className="w-full mt-2 p-[10px] text-[#6e7c91] rounded-md"
            value={selectValue}
          >
            {props?.option?.map((item, index) => {
              return (
              <>
                <option key={index} value={item.value}>
                  {props.workData ? item : item.name}
                </option>
              </>
            )})}
          </select>
        </div>
        {props.closable ? (
          <>
            {isDropdownOpen ? (
              <div
                className={`clr-grn flex cursor-pointer items-center align-middle ${isDropdownOpen && props?.focusEffect
                  ? "!border-l-[#1ab394]"
                  : "border-l-[#EEEEEE]"
                  } bg-[#FAFAFB] p-2.5 border-[1px]`}
              >
                <Icon
                  path={mdiCloseCircleOutline}
                  size="18px"
                  color="#1ab394"
                />
              </div>
            ) : (
              <div className="w-[40px] h-[40px] border-l-0 border-[#EEEEEE] border-[1px]"></div>
            )}
          </>
        ) : (
          ""
        )}
        <div
          className={`clr-grn flex cursor-pointer items-center align-middle`}
        >
          {isDropdownOpen === false && (
            <div
              className={`clr-grn flex cursor-pointer items-center align-middle 
          ${isDropdownOpen && props?.focusEffect
                  ? "border-[#1ab394]"
                  : "border-[#EEEEEE]"
                } bg-[#FAFAFB] p-2.5  border-[1px]
          `}
            >
              <Icon
                path={mdiChevronDown}
                size="18px"
                color={`${isDropdownOpen === false && "#1AB394"}`}
                onClick={handleonClick}
              />
            </div>
          )}
          {isDropdownOpen === true && (
            <>
              <div className="clr-grn flex h-full  cursor-pointer items-center align-middle bg-[#FAFAFB] p-2.5 border-l-[#EEEEEE] border-[1px]">
                <Icon
                  path={mdiCloseCircleOutline}
                  size="18px"
                  color="#1ab394"
                  onClick={handlefalseClick}
                />
              </div>
              <div className="clr-grn flex  h-full  cursor-pointer items-center align-middle bg-[#FAFAFB] p-2.5 border-l-[#EEEEEE] border-[1px]">
                <Icon
                  path={isDropdownOpen === true && mdiChevronUp}
                  size="18px"
                  color={"#DB4965"}
                  onClick={handlefalseClick}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClosableSelect;
