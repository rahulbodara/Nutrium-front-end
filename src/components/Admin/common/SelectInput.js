import React from 'react'

const SelectInput = (props) => {
    const handleSelect = (e) => {
        const { name, value } = e.target;
        props.setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }
    return (
        <div className={`flex select-none ${props?.className}`}>
            <div className={`field-title ${props?.labelStyle} flex border bg-[#FAFAFB] text-[1.1em] items-center z-[1] px-2.5 py-[5px] border-solid border-[#EEEEEE]`}>
                <label className='inline-block max-w-full'>{props?.label}</label>
            </div>
            <div className='flex flex-grow'>
                <div className='relative flex-grow select-none border border-[#EEEEEE]'>
                    <select name={props.name} value={props?.value} className='w-full border-none focus:ring-0 text-[14px]' onClick={(e) => handleSelect(e)}>
                        <option value="choose your subscription" selected disabled>
                            All Workplace
                        </option>
                        {
                            props?.option.map((item) => (
                                <option key={item?.id} value={item?.name}>{item?.name}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
        </div>
    )
}

export default SelectInput