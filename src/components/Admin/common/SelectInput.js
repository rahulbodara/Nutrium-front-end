import React from 'react'

const SelectInput = (props) => {
    return (
        <div className={`flex select-none ${props?.className}`}>
            <div className={`field-title ${props?.labelStyle} flex border bg-[#FAFAFB] text-[1.1em] items-center z-[1] px-2.5 py-[5px] border-solid border-[#EEEEEE]`}>
                <label className='inline-block max-w-full'>{props?.label}</label>
            </div>
            <div className='flex flex-grow'>
                <div className='relative flex-grow select-none border border-[#EEEEEE]'>
                  <select className='w-full border-none focus:ring-0 text-[14px]'>
                    {
                        props?.option.map((item) => (
                            <option key={item?.id}>{item?.option}</option>
                        ))
                    }
                  </select>
                </div>
            </div>
        </div>
    )
}

export default SelectInput