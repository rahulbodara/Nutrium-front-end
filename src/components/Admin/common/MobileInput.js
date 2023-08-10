import { mdiBorderColor, mdiCheck, mdiClose, mdiCloseCircle } from '@mdi/js'
import Icon from '@mdi/react'
import React, { useState } from 'react'

const MobileInput = (props) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isInputEmpty, setIsInputEmpty] = useState(true);

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
        <div className='flex select-none admin-select-field mt-[7px]'>
            <div className={`${props?.labelWidth} flex border bg-[#FAFAFB] text-[1.1em] items-center z-[1] px-2.5 py-[5px] border-solid border-[#EEEEEE]`}>{props?.label}</div>
            <div className='grow-[3] border-[1px_solid_#EEEEEE] border-l-0 flex select-none'>
                <div className='select-field flex-grow border-[#EEEEEE] relative border-[1px]'>
                    <input
                        type="text"
                        className='w-full h-full outline-none pr-[24px] min-h-[38px] p-[10px]'
                        onKeyDown={handleInput}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                    {
                        !isInputEmpty ? 
                        <span className='absolute right-[4px] top-[26%] opacity-[0.7]'>
                            <Icon path={mdiCloseCircle} size="15px" color='#aaaaaa' />
                        </span> : ''
                    }
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

export default MobileInput
