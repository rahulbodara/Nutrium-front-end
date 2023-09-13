import React, { useEffect, useRef } from 'react'
import 'select2/dist/css/select2.min.css';
import $ from 'jquery';
import 'select2';

const SelectMenu = (props) => {
    console.log(props,"propsprops");
    const selectRef = useRef(null);
    useEffect(() => {
        const $select = $(selectRef.current);
        $('.select2-dropdown').addClass('custom-dropdown');

        $select.on("change", (e) => {
            console.log("jksdcbjhsbcvsb", e.target.value);
        });
        $select.select2(
            props?.searchOption === false && {
                minimumResultsForSearch: Infinity,
            }
        );
        return () => {
            $select.off('select2:open');
            $select.off('select2:close');
            $select.select2('destroy');
        };
    });
  return (
      <div className={`max-w-[130px] ${props?.className}`}>
          <div className={`relative flex-1 select-none border-[#EEEEEE] ${props?.SelectClass}`}>
              <select
                  ref={selectRef}
                  className="w-full mt-2 p-[10px] text-[#6e7c91] rounded-md"
                  name={props.name}
                  value={props.selectedValue}
                  onChange={props.onChange}
              >
                {
                    props?.option?.map((option, index) => (
                        <>
                            <option id={index} value={option.option} className={`${option.option}`}>{option.option}</option>
                        </>
                    ))

                }
              </select>
          </div>
      </div>
  )
}

export default SelectMenu