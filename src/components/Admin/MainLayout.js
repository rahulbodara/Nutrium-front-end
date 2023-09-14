import React, { useState } from 'react'
import ContentHeader from './common/ContentHeader';
import Sidebar from './Sidebar'

const MainLayout = ({children, head, text}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const handleClose = () => { 
    setIsCollapsed(false)
   }
  return (
    <div className='w-full'>
        <Sidebar isCollapsed = {isCollapsed} /> 
        <div className={`page-wrapper hide-scollbar min-h-[1200px] md:ml-0 px-[15px] md:px-0 relative bg-[#f3f3f4] ${isCollapsed === true ? 'ml-[70px]' : 'ml-[220px]'} `}>
        <ContentHeader  setIsCollapsed={setIsCollapsed} isCollapsed={isCollapsed} head={head} text={text} />
        <div className={`${isCollapsed === true ? 'md:block' : 'md:hidden'} hidden fixed top-0 left-0 right-0 bottom-0 opacity-[0.4] bg-black z-[2039]`} onClick={handleClose}></div>
      
        {children}
    </div>
    </div>
  )
}

export default MainLayout