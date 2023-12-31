import Icon from '@mdi/react';
import React, { useEffect, useRef, useState } from 'react';
import { mdiChevronDown, mdiChevronUp, mdiCloseCircleOutline } from '@mdi/js';
import 'select2/dist/css/select2.min.css';
import $ from 'jquery';
import 'select2';

const TagSelect = (props) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const selectRef = useRef(null);
    const [selectedValue, setSelectedValue] = useState(props.initialValue || '');
  
    useEffect(() => {
      const $select = $(selectRef.current);
  
      $('.select2-container--default .select2-results__option--selected').css(
        'background-color',
        'red !important'
      );
  
      $select.select2({
        minimumResultsForSearch: props.searchOption === false ? Infinity : 0,
      });
  
      $select.on("change", (e) => {
        const selectedOptions = Array.from(e.target.selectedOptions).map(
          (option) => option.value
        );
          
        if (props?.onChange) {
          const formattedOptions = selectedOptions.map(option => `${option}`).join(', ');
          props?.onChange(formattedOptions);
          const updatedValue = { [props.name]: formattedOptions }
          props.handleSubmit(updatedValue)
        }
      });
      $(".js-example-tokenizer").select2({
        tags: true,
        tokenSeparators: [',', ' ']
      });
      return () => {
        $select.off("change");
        $select.select2("destroy");
      };
    }, [props?.searchOption]);
  
    const handleSelectChange = (event) => {
      const value = event.target.value;
      setSelectedValue(value);
    };

    return (
        <div className={`flex select-none admin-select-field ${props?.className}`}>
        {props?.label ? (
          <div
            className={`${
              props?.labelWidth
            } md:basis-[140px] md:min-w-[140px] flex border bg-[#FAFAFB] text-[1.1em] items-center z-[1] px-2.5 py-[5px] border-solid border-[#EEEEEE] ${
              isDropdownOpen ? 'border-[#1ab394]' : 'border-[#EEEEEE]'
            }`}
          >
            {props?.label}
          </div>
        ) : (
          ''
        )}
        {props?.Icon ? (
          <div
            className={`flex border bg-[#FAFAFB] text-[1.1em] items-center z-[1] px-2.5 py-[5px] border-solid ${
              isDropdownOpen && props?.focusEffect
                ? '!border-[#1ab394] border-r-0'
                : 'border-[#EEEEEE]'
            } border-[#EEEEEE]`}
          >
            <Icon path={props.Icon} size="18px" />
          </div>
        ) : (
          ''
        )}
        <div
          className={`grow-[3] ${
            isDropdownOpen && props?.focusEffect
              ? '!border-[1px_solid_#1ab394]'
              : 'border-[1px_solid_#EEEEEE]'
          } border-[1px_solid_#EEEEEE] border-l-0 flex select-none`}
        >
          <div
            className={`select-field flex-grow border-[#EEEEEE] ${
              isDropdownOpen && props?.focusEffect
                ? '!border-[#1ab394]'
                : 'border-[#EEEEEE]'
            } custom-tag border-[1px] border-r-0`}
          >
            <select
              ref={selectRef}
              multiple={true}
              tags={true}
              className="w-full mt-2 p-[10px] js-example-tokenizer text-[#6e7c91] rounded-md"
              // onChange={handleSelectChange}
              defaultValue={selectedValue}
            >
              {props?.option?.map((item, index) => (
                <>
                  <option key={index} value={item.value}>
                    {item.option}
                  </option>
                </>
              ))}
            </select>
          </div>
          {props.closable ? (
            <>
              {isDropdownOpen ? (
                <div
                  className={`clr-grn flex cursor-pointer items-center align-middle ${
                    isDropdownOpen && props?.focusEffect
                      ? '!border-l-[#1ab394]'
                      : 'border-l-[#EEEEEE]'
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
            ''
          )}
  
          <div
            className={`clr-grn flex cursor-pointer items-center align-middle ${
              isDropdownOpen && props?.focusEffect
                ? 'border-[#1ab394]'
                : 'border-[#EEEEEE]'
            } bg-[#FAFAFB] p-2.5  border-[1px]`}
          >
            <Icon
              path={isDropdownOpen ? mdiChevronUp : mdiChevronDown}
              size="18px"
              color={`${isDropdownOpen ? '#DB4965' : '#1AB394'}`}
            />
          </div>
        </div>
      </div>
    )
}

export default TagSelect
