import React, { useState } from 'react'

const Switcher = (props) => {
    const [isSwitchOn, setIsSwitchOn] = useState(props?.isChecked);
    console.log("🚀 ~ file: Switcher.js:5 ~ Switcher ~ isSwitchOn:", isSwitchOn)

    const handleSwitch = (event) => {
    console.log("🚀 ~ file: Switcher.js:7 ~ handleSwitch ~ event:", event)
    setIsSwitchOn(event.target.checked)

    }
    return (
        <div>
            <div className='relative'>
                <div className='w-[100px] h-[34px] align-middle bg-white border border-[#eeeeee] my-[10px] min-w-[59px] min-h-[34px] text-white relative overflow-hidden rounded-[3px] inline-block text-center'>
                    <input type="checkbox" id='switcher' onChange={handleSwitch} defaultChecked={isSwitchOn} className='hidden' />
                    <div className={` ${isSwitchOn ? "left-0" : "-left-full"} absolute w-[200%] inset-y-0 select-none transition-[left] duration-[0.35s]`}>
                        {
                            isSwitchOn ? 
                            <label htmlFor='switcher' className={`absolute top-0 bottom-0 pr-[24px] pl-[12px] right-[50%] left-0 bg-[#1AB394] inline-block align-middle min-h-[20px] cursor-pointer text-white p-[6px_12px] text-[14px] leading-[1.42] whitespace-nowrap select-none max-w-full`}>{props?.label1}</label>:
                            <label htmlFor='switcher' className={`absolute top-0 bottom-0 bg-[#EEEEEE] right-0 left-[50%]  pl-[24px] border-[#bababa] text-[#676A6C]  inline-block align-middle min-h-[20px] cursor-pointer  p-[6px_12px] text-[14px] leading-[1.42] whitespace-nowrap select-none max-w-full`}>{props?.label2}</label>
                        }
                        <span className='bg-white inline-block border border-[#eeeeee] relative mx-auto w-0 h-full text-white rounded-[3px] p-[6px_12px] text-[14px] leading-[1.42] whitespace-nowrap select-none max-w-full'></span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Switcher