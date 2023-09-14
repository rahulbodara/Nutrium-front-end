import React from "react";
import Select from "react-select";

export const CustomSelect = ({
  className,
  placeholder,
  field,
  form,
  options,
  isMulti = false
}) => {
  const onChange = (option) => {
    form.setFieldValue(
      field?.name,
      isMulti
        ? option.map((item) => item?.value)
        : option?.value
    );
  };

  const getValue = () => {
    if (field?.value !== undefined && options) {
      if (isMulti) {
        return options.filter((option) =>
          Array.isArray(field?.value)
            ? field?.value.indexOf(option?.value) >= 0
            : false
        );
      } else {
        return options.find((option) => option?.value === field?.value);
      }
    } else {
      return isMulti ? [] : "";
    }
  };


  return (
    <Select
      className={className}
      name={field?.name}
      value={getValue()}
      onChange={onChange}
      placeholder={placeholder}
      options={options}
      isMulti={isMulti}
    />
  );
};

export default CustomSelect;
