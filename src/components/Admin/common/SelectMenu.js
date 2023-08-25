import React, { useEffect, useRef } from 'react'
import 'select2/dist/css/select2.min.css';
import $ from 'jquery';
import 'select2';

const SelectMenu = (props) => {
    const selectRef = useRef(null);
    useEffect(() => {
        const $select = $(selectRef.current);
        $('.select2-dropdown').addClass('custom-dropdown');

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
      <div className='max-w-[130px]'>
          <div className='relative flex-1 select-none border-[#EEEEEE]'>
              <select
                  ref={selectRef}
                  className="w-full mt-2 p-[10px] text-[#6e7c91] rounded-md"
              >
                {
                    props?.option?.map((option) => (
                        <>
                            <option className={`${option.option}`}>{option.option}</option>
                        </>
                    ))

                }
              </select>
          </div>
      </div>
  )
}

export default SelectMenu