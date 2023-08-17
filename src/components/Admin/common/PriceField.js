import React from 'react'

const PriceField = (props) => {
  return (
    <div className={`flex select-none ${props?.className}`}>
            <div className='field-title min-w-[160px] flex-basis-[160px] flex border bg-[#FAFAFB] text-[1.1em] items-center z-[1] px-2.5 py-[5px] border-solid border-[#EEEEEE]'>
                <label className='inline-block max-w-full'>{props?.label}</label>
            </div>
            <div className='flex flex-grow'>
                <div className='relative flex-grow select-none border border-[#EEEEEE]'>
                    <input type="text" className='focus:ring-0 p-[6px_12px] border-none w-full text-[13px] placeholder:opacity-[0.6]' placeholder={props?.placeholder} />
                </div>
            </div>
        </div>
  )
}

export default PriceField