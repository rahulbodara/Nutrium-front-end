import React from "react";

const PriceField = (props) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const [parentName, childName] = name.split(".");
      props.setFormData((prevFormData) => ({
        ...prevFormData,
        [parentName]: {
          ...prevFormData[parentName],
          [childName]: value,
        },
      }));
    } else {
      props.setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };
  return (
    <div className={`flex select-none ${props?.className}`}>
      <div className="field-title min-w-[160px] flex-basis-[160px] flex border bg-[#FAFAFB] text-[1.1em] items-center z-[1] px-2.5 py-[5px] border-solid border-[#EEEEEE]">
        <label className="inline-block max-w-full">{props?.label}</label>
      </div>
      <div className="flex flex-grow">
        <div className="relative flex-grow select-none border border-[#EEEEEE]">
          <input
            type="text"
            className="focus:ring-0 p-[6px_12px] border-none w-full text-[13px] 
                    placeholder:opacity-[0.6]"
            placeholder={props?.placeholder}
            name={props.name}
            value={props.value}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default PriceField;
