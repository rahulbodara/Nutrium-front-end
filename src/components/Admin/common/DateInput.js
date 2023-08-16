import { mdiBorderColor, mdiCheck, mdiClose, mdiCloseCircle } from '@mdi/js'
import Icon from '@mdi/react'
import React, { useState } from 'react'

const DateInput = (props) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isInputEmpty, setIsInputEmpty] = useState(true);
    const daysArray = Array.from({ length: 31 }, (_, index) => index + 1);
    const monthsArray = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    const currentYear = new Date().getFullYear();
    const startYear = 1903;
    const yearsArray = Array.from(
        { length: currentYear - startYear + 1 },
        (_, index) => currentYear - index
    );

    console.log(yearsArray, "fffffffffffffffff");
    const handleInput = (event) => {
        if (event.target) {
            setIsInputEmpty(false)
        }
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
        setIsInputEmpty(true)

    };
    return (
        <div className={`flex select-none admin-select-field ${props.className}`}>
            <div className={`${props?.labelWidth}  flex border bg-[#FAFAFB] text-[1.1em] items-center z-[1] px-2.5 py-[5px] border-solid border-[#EEEEEE]`}>{props?.label}</div>
            <div className='flex-grow border-[1px_solid_#EEEEEE] border-l-0 flex select-none'>
                <div className='select-field flex-grow border-[#EEEEEE] relative border-[1px]'>
                    <span className='p-[10px] '>
                        <select name="day" id="day" className='w-auto p-0 border-none focus:ring-0 bg-transparent'>
                            <option></option>
                            {
                                daysArray?.map((item,index) => (
                                    <option value={item} key={index} selected={item === 28}>{item}</option>
                                ))
                            }
                        </select>
                        &nbsp;
                        <select name="month" id="month" className='w-auto border-none focus:ring-0 outline-none bg-transparent'>
                            <option></option>
                            {
                                monthsArray?.map((item,index) => (
                                    <option value={item} key={index} selected={item === "Dec"}>{item}</option>
                                ))
                            }
                        </select>
                        &nbsp;
                        <select name="year" id="year" className='w-auto border-none focus:ring-0 outline-none bg-transparent'>
                            <option></option>
                            {
                                yearsArray?.map((item,index) => {
                                    const strYr = item.toString();
                                   return <option value={strYr} key={index} selected={strYr === "2007"}>{strYr}</option>
                                })
                            }
                        </select>
                    </span>
                </div>
                {
                    isFocused ? 
                    <>
                        <div className='clr-grn flex cursor-pointer items-center align-middle bg-[#FAFAFB] p-2.5 border-l-[#EEEEEE] border-[1px]'>
                            <Icon path={mdiCheck} size="18px" color='#1ab394' />
                        </div>
                        <div className='clr-grn flex cursor-pointer items-center align-middle bg-[#FAFAFB] p-2.5 border-l-[#EEEEEE] border-[1px]'>
                            <Icon path={mdiClose} size="18px" color={'#DB4965'} />
                        </div> 
                    </>
                    : 
                    <div className='clr-grn flex cursor-pointer items-center align-middle bg-[#FAFAFB] p-2.5 border-l-[#EEEEEE] border-[1px]'>
                        <Icon path={mdiBorderColor} size="18px" color={'#1ab394'} />
                    </div>
                }
            </div>
        </div>
    )
}

export default DateInput
