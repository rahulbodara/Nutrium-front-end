import React, { useState } from 'react'
import ContentHeader from './common/ContentHeader';
import Sidebar from './Sidebar'

const MainLayout = ({children, head, text}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className='w-full'>
        <Sidebar isCollapsed = {isCollapsed} /> 
        <div className={`page-wrapper hide-scollbar min-h-[1200px] px-[15px] relative bg-[#f3f3f4] ${isCollapsed === true ? 'ml-[70px]' : 'ml-[220px]'} `}>
        <ContentHeader  setIsCollapsed={setIsCollapsed} isCollapsed={isCollapsed} head={head} text={text} />
      
        {children}
    </div>
    </div>
  )
}

export default MainLayout