import React from "react";
const ColorPickerField = (props) => {
    const handlechange = (e) => {
        const { name, value } = e.target;
        console.log("🚀 ~ file: InputField.js:7 ~ handlechange ~ value:", value)
        props.setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };
  return (
    <div className={`flex select-none ${props?.className}`}>
      <div className="field-title min-w-[160px] flex-basis-[160px] md:min-w-[140px] md:flex-basis-[140px] flex border bg-[#FAFAFB] text-[1.1em] items-center z-[1] px-2.5 py-[5px] border-solid border-[#EEEEEE]">
        <label className="inline-block max-w-full">{props?.label}</label>
      </div>
      <div className="flex flex-grow">
        <div className="relative flex-grow select-none border border-[#EEEEEE]">
          <div className="flex h-full">
            <input
              type="text"
              className="focus:ring-0 p-[6px_12px] border-none w-full text-[13px] placeholder:opacity-[0.6]"
              placeholder={props?.placeholder}
              name={props.name}
              value={props.value}
              onChange={handlechange}
            />
            <div className="bg-black max-w-[40px] height-[40px] w-full b-[1px_solid_#EEEEEE] border-l-0 flex flex-grow-[3] select-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPickerField;
