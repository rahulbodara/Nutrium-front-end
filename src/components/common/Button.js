import React from 'react'

const Button = ({type, className, onSubmit ,children, onClick}) => {
  return (
    <>
       <button className={`py-[8px] px-[30px] bg-[#EA9F77] hover:bg-[#e8966a] rounded-[5px] text-white ${className}`} type={type} onSubmit={onSubmit} onClick={onClick}>{children}</button>
    </>
  )
}

export default Button   