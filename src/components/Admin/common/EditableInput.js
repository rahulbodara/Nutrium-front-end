import { mdiBorderColor, mdiCheck, mdiClose, mdiCloseCircle } from '@mdi/js';
import Icon from '@mdi/react';
import React, { useState } from 'react';

const EditableInput = (props) => {
  // const { initialValue, onInputChange, handleCancel, handleSubmit } = props;
  // console.log('props-------------->', props);
  const [isFocused, setIsFocused] = useState(false);
  const [isInputEmpty, setIsInputEmpty] = useState(true);
  const [inputValue, setInputValue] = useState(props?.initialValue || '');
  console.log("🚀 ~ file: EditableInput.js:11 ~ EditableInput ~ inputValue:", inputValue)

  // const handleInput = (event) => {
  //   if (event.target) {
  //     setIsInputEmpty(false);
  //   }
  // };
  const handleInput = (event) => {
    const value = event?.target?.value;
    props?.onInputChange(value); // Pass the input name and value to the callback
    setIsInputEmpty(value === '');
  };

  // const handleInput = (event) => {
  //   const value = event.target.value;
  //   setInputValue(value);
  //   setIsInputEmpty(value === '');
  // };

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
    <div className={`${props?.mainClass} flex select-none admin-select-field mt-[7px]`}>
      <div
        className={`${props?.labelWidth} md:basis-[140px] md:min-w-[140px] flex border bg-[#FAFAFB] text-[1.1em] items-center z-[1] px-2.5 py-[5px] border-solid border-[#EEEEEE]`}
      >
        {props?.label}
      </div>
      <div className="grow-[3] border-[#EEEEEE] border-[1px]  border-l-0 flex select-none">
        <div className="select-field flex-grow border-[#EEEEEE] relative border-[1px]">
          <input
            type="text"
            className="w-full h-full text-[13px] border-none outline-none pr-[24px] min-h-[38px] p-[10px] focus:ring-0"
            // onKeyDown={handleInput}
            onFocus={handleFocus}
            // onBlur={handleBlur}
            value={inputValue}
            onChange={(e) => {
              handleInput(e)
              setInputValue(e.target.value)
            }}
          />
          {isFocused ? (
            <span onClick={handleBlur} className="absolute right-[4px] top-[36%] opacity-[0.7]">
              <Icon path={mdiCloseCircle} size="15px" color="#aaaaaa" />
            </span>
          ) : (
            ''
          )}
        </div>
        {/* {isFocused ? ( */}
        <>
          <button type="button" onClick={() => { props.handleSubmit(); setIsFocused(false) }} className={`${isFocused ? 'block' : 'hidden'} clr-grn flex cursor-pointer items-center align-middle bg-[#FAFAFB] p-2.5 border-l-[#EEEEEE] border-[1px]`}>
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
        </>
        {/* ) : ( */}
        <button type='button' onClick={handleFocus} className={`${isFocused ? 'hidden' : "block"} clr-grn flex cursor-pointer items-center align-middle bg-[#FAFAFB] p-2.5 border-l-[#EEEEEE] border-[1px]`}>
          <Icon path={mdiBorderColor} size="18px" color={'#1ab394'} />
        </button>
        {/* )} */}
      </div>
    </div>
  );
};

export default EditableInput;
