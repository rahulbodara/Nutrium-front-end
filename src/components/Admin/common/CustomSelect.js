import React, { useEffect, useRef } from 'react'
import 'select2/dist/css/select2.min.css';
import $ from 'jquery';
import 'select2';
const CustomSelect = (props) => {
    console.log("🚀 ~ file: CustomSelect.js:6 ~ CustomSelect ~ props:", props.option)
    const selectRef = useRef(null);
    useEffect(() => {
        const $select = $(selectRef.current);
        $('.select2-container--default .select2-results__option--selected');

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
        <div className={`relative flex-grow select-none border border-[#EEEEEE] ${props?.className}`}>
            <select
                ref={selectRef}
                className={`w-full mt-2 p-[10px] text-[#6e7c91] rounded-[0] ${props?.SelectClassName}`}
            >
                {
                    props?.defaultOptions &&
                    <option>{props?.defaultOptions}</option>

                }
                {
                    props?.option?.map((option) => (
                        <>
                            <option className={`${option.name}`}>{option.name}</option>
                        </>
                    ))

                }
            </select>
        </div>

    )
}

export default CustomSelect
