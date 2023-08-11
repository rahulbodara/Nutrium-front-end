import Icon from '@mdi/react'
import React, { useEffect, useRef, useState } from 'react'
import { mdiChevronDown, mdiChevronUp, mdiCloseCircleOutline } from '@mdi/js';
import 'select2/dist/css/select2.min.css';
import $ from 'jquery';
import 'select2';

const ClosableSelect = (props) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const selectRef = useRef(null);
    useEffect(() => {
        const $select = $(selectRef.current);

        $('.select2-container--default .select2-results__option--selected').css('background-color', 'red !important');
        

        $select.on('select2:open', () => {
            setIsDropdownOpen(true);
        });

        $select.on('select2:close', () => {
            setIsDropdownOpen(false);
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
    }, []);
    return (
      <div className={`flex select-none admin-select-field ${props?.className}`}>
        <div className={`${props?.labelWidth} flex border bg-[#FAFAFB] text-[1.1em] items-center z-[1] px-2.5 py-[5px] border-solid border-[#EEEEEE]`}>
          {props?.label}
        </div>
        <div className="grow-[3] border-[1px_solid_#EEEEEE] border-l-0 flex select-none">
          <div className="select-field flex-grow border-[#EEEEEE] border-[1px] border-r-0">
            <select
              ref={selectRef}
              className="w-full mt-2 p-[10px] text-[#6e7c91] rounded-md"
            >
              {props?.option?.map((item,index) => (
                <>
                    <option key={index} value={item.value} >{item.option}</option>
                </>
              ))}
            </select>
          </div>
          {
            props.closable ?
              <>
                {isDropdownOpen ? (
                  <div className="clr-grn flex cursor-pointer items-center align-middle bg-[#FAFAFB] p-2.5 border-l-[#EEEEEE] border-[1px]">
                    <Icon path={mdiCloseCircleOutline} size="18px" color="#1ab394" />
                  </div>
                ) : (
                  <div className="w-[40px] h-[40px] border-l-0 border-[#EEEEEE] border-[1px]"></div>
                )}
              </> : ""
          }


          <div className="clr-grn flex cursor-pointer items-center align-middle bg-[#FAFAFB] p-2.5 border-l-[#EEEEEE] border-[1px]">
            <Icon
              path={isDropdownOpen ? mdiChevronUp : mdiChevronDown}
              size="18px"
              color={`${isDropdownOpen ? "#DB4965" : "#1AB394"}`}
            />
          </div>
        </div>
      </div>
    );
}

export default ClosableSelect
