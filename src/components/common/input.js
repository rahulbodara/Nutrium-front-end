import React from 'react'

const Input = ({className, type, id, placeholder, name}) => {
  return (
    <>
        <input type={type} id={id} className={`bg-white h-full pl-[20px] rounded-[5px] placeholder:text-[#0000003a] shadow-sm ${className}`} name={name} placeholder={placeholder} />
    </>
  )
}

export default Input