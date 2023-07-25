import React, { useEffect, useRef, useState } from 'react';
import 'select2/dist/css/select2.min.css';
import $ from 'jquery';
import 'select2';

const MultiSelect = ({ options, onChange, label }) => {
  const selectRef = useRef(null);

  useEffect(() => {
    $(selectRef.current).select2();
    $(selectRef.current).on('change', (e) => {
      const selectedValues = $(e.target).val();
      onChange(selectedValues);
    });

    return () => {
      $(selectRef.current).off('change');
      $(selectRef.current).select2('destroy');
    };
  }, [onChange]);

  return (
    <div>
    <label className='inline-block max-w-full text-[13px] mb-[5px] text-[#676a6c]'>{label}</label>
      <select ref={selectRef} multiple className="w-full rounded-lg shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
          {options.map((option) => (
              <option key={option.value} value={option.value}>
                  {option.label}
              </option>
          ))}
      </select>
    </div>

  );
};

export default MultiSelect;