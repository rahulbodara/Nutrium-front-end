import { mdiBorderColor, mdiCheck, mdiClose, mdiCloseCircle } from '@mdi/js'
import Icon from '@mdi/react'
import React, { useState } from 'react'

const EditableTextarea = (props) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isInputEmpty, setIsInputEmpty] = useState(true);
    const [inputValue, setInputValue] = useState(props?.initialValue || '');

    const handleInput = (event) => {
        const value = event?.target?.value;
        props?.onInputChange(value);
        setIsInputEmpty(value === '');
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
        setInputValue('');
      };
    
    const handleCancel = () => {
        setIsFocused(false);
        setInputValue(props?.initialValue);
      };

    return (
        <div className={`${props?.className} flex select-none admin-select-field mt-[7px]`}>
            <div className={`${props?.labelWidth} md:basis-[140px] md:min-w-[140px]   flex border bg-[#FAFAFB] text-[1.1em] items-center z-[1] px-2.5 py-[5px] border-solid border-[#EEEEEE]`}>{props?.label}</div>
            <div className='grow-[3] border-[1px_solid_#EEEEEE] border-l-0 flex select-none'>
                <div className='select-field flex-grow border-[#EEEEEE] relative border-[1px]'>
                    <textarea
                        type="text"
                        rows="1"
                        className={`w-full h-full border-none outline-none pr-[24px] min-h-[57px] p-[10px] focus:ring-0 ${props?.textAreaClass}`}
                        // onKeyDown={handleInput}
                        onFocus={handleFocus}
                        // onBlur={handleBlur}
                        value={inputValue}
                        onChange={(e) =>{ 
                            handleInput(e)
                            setInputValue(e.target.value)}}
                    />
                    {
                        isFocused ? 
                        <span onClick={handleBlur} className='absolute right-[4px] top-[26%] opacity-[0.7]'>
                            <Icon path={mdiCloseCircle} size="15px" color='#aaaaaa' />
                        </span> : ''
                    }
                </div>
                <button type="button" onClick={() => {props.handleSubmit(); setIsFocused(false)}} className={`${isFocused ? 'block' : 'hidden'} clr-grn flex cursor-pointer items-center align-middle bg-[#FAFAFB] p-2.5 border-l-[#EEEEEE] border-[1px]`}>
                    <Icon
                        path={mdiCheck}
                        size="18px"
                        color="#1ab394"
                    />
                </button>
                <div className={`${isFocused ? 'block' : 'hidden'} clr-grn flex cursor-pointer items-center align-middle bg-[#FAFAFB] p-2.5 border-l-[#EEEEEE] border-[1px]`}>
                    <Icon
                        path={mdiClose}
                        size="18px"
                        color={'#DB4965'}
                        onClick={handleCancel}
                    />
                </div>
            <button type='button' onClick={handleFocus} className={`${isFocused ? 'hidden' : "block"} clr-grn flex cursor-pointer items-center align-middle bg-[#FAFAFB] p-2.5 border-l-[#EEEEEE] border-[1px]`}>
                <Icon path={mdiBorderColor} size="18px" color={'#1ab394'} />
            </button>
        </div>
        </div>
    )
}

export default EditableTextarea

