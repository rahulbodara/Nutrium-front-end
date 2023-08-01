import React from 'react'

const Input = ({className, type, id, placeholder, name}) => {
  return (
    <>
        <input type={type} id={id} className={`bg-white text-[#6e7c91] tracking-[0.5px] outline-none text-[1rem] h-full pl-[20px] rounded-[5px] placeholder:text-[#0000003a] placeholder:text-[1.1rem] xl:placeholder:text-[0.91rem] shadow-[0px_4px_10px_-4px_#717171] ${className}`} name={name} placeholder={placeholder} />
    </>
  )
}

export default Input