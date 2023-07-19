import React from 'react'

const Button = ({type, className, onSubmit ,children}) => {
  return (
    <>
       <button className={`py-[8px] px-[30px] bg-[#EA9F77] rounded-[5px] text-white ${className}`} type={type} onSubmit={onSubmit}>{children}</button>
    </>
  )
}

export default Button   