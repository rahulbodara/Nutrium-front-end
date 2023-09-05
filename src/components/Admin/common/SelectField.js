import React, { useEffect, useRef } from "react";
import "select2/dist/css/select2.min.css";
import $ from "jquery";
import "select2";

const SelectField = (props) => {
  const selectRef = useRef(null);
  useEffect(() => {
    const $select = $(selectRef.current);

    $select.select2({
      minimumResultsForSearch: props.searchOption === false ? Infinity : 0,
    });

    $select.on("change", (e) => {
      const selectedValue = e.target.value;
      console.log("🚀 ~ file: SelectField.js:18 ~ $select.on ~ selectedValue:", selectedValue)
      if (props?.onChange) {
        props?.onChange(selectedValue);
      }
    });

    return () => {
      $select.off("change");
      $select.select2("destroy");
    };
  }, [props?.searchOption]);

  return (
    <div className={`flex select-none ${props.className}`}>
    {
      props.label === undefined ? (
        <div>
        <label className="inline-block max-w-full">{props.label}</label>
      </div>  
      ):(
      <div
        className={`${props?.LabelclassName} field-title min-w-[160px] flex-basis-[160px] flex border bg-[#FAFAFB] text-[1.1em] items-center z-[1] px-2.5 py-[5px] border-solid border-[#EEEEEE]`}
      >
        <label className="inline-block max-w-full">{props?.label}</label>
      </div>
      )
    }
      <div className="flex flex-grow">
        <div className="relative flex-grow select-none border border-[#EEEEEE]">
          <select
            ref={selectRef}
            name={props.name}
            className="w-full mt-2 p-[10px] text-[#6e7c91] rounded-md"
            value={props.value}
          >
            {props.default &&
              <option selected disabled>
                {props?.defaultValue}
              </option>
            }
            {props.option?.map((item, index) => (
              <option key={index} value={item.value}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SelectField;
