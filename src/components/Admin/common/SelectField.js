import React, { useEffect, useRef } from 'react'
import 'select2/dist/css/select2.min.css';
import $ from 'jquery';
import 'select2';

const SelectField = (props) => {
    const selectRef = useRef(null);
    const handleChange = (e) => {
        const { name, value } = e.target;
        // if (name.includes(".")) {
        //   const [parentName, childName] = name.split(".");
        //   props.setFormData((prevFormData) => ({
        //     ...prevFormData,
        //     [parentName]: {
        //       ...prevFormData[parentName],
        //       [childName]: value,
        //     },
        //   }));
        // } else {
            const select = $(selectRef.current);
            select.value = value;
            console.log("🚀 ~ file: SelectField.js:22 ~ handleChange ~ select.value:", select.value)
          props.setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
          }));
        // }
      };
    useEffect(() => {
        const $select = $(selectRef.current);

        $('.select2-container--default .select2-results__option--selected').css('background-color', 'red !important');


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
        <div className={`flex select-none ${props?.className}`}>
            <div className='field-title min-w-[160px] flex-basis-[160px] flex border bg-[#FAFAFB] text-[1.1em] items-center z-[1] px-2.5 py-[5px] border-solid border-[#EEEEEE]'>
                <label className='inline-block max-w-full'>{props?.label}</label>
            </div>
            <div className='flex flex-grow'>
                <div className='relative flex-grow select-none border border-[#EEEEEE]'>
                    <select
                        ref={selectRef}
                        name={props.name}
                        className="w-full mt-2 p-[10px] text-[#6e7c91] rounded-md"
                        value={props.value ? props.value: ''}
                        handleChange={handleChange}
                    > 
                        {props?.option?.map((item, index) => (
                            <>
                                <option key={index} value={item.value}>{item.name}</option>
                            </>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default SelectField