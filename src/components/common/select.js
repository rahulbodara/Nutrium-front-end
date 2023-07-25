import React, { useEffect, useRef } from 'react'
import 'select2/dist/css/select2.css';
import $ from 'jquery'; 
import 'select2';


const Select = (props) => {
    console.log("🚀 ~ file: select.js:8 ~ Select ~ props:", props?.searchOption)
    
    const selectRef = useRef(null);
    useEffect(() => {
        $(selectRef.current).select2(
            props?.searchOption === false && 
            {
            minimumResultsForSearch: Infinity,
            }
        );

        return () => {
            $(selectRef.current).select2('destroy');
        };
      }, []);
  return (
      <div>
            <label className='inline-block max-w-full text-[13px] mb-[5px] text-[#676a6c]'>{props.label}</label>
            <select ref={selectRef} defaultValue="" className="w-full mt-2 p-[10px] text-[#6e7c91] rounded-md">
                <option value="option1">Male</option>
                <option value="option2">Female</option>
                <option value="option2">Other</option>
            </select>
      </div>
  )
}

export default Select