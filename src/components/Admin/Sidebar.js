import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useRef } from 'react';
import Icon from '@mdi/react';
import { tabTitle } from './tabData';
import { mdiAccountPlus, mdiAlarmPlus, mdiStarCircle } from '@mdi/js';



const Sidebar = (props) => {
  const {isCollapsed} = props;
  const router = useRouter();

  return (
    <>
      <nav className={`${isCollapsed === true ? "w-[70px] md:w-[220px] md:left-0" : "w-[220px] " } z-[2040] md:bg-[#2f4050] md:-left-[220px] bg-[#2f4050] md:w-[220px]  md:block md:transition-[0.5s] border-[#2f4050] overflow-hidden h-full fixed shadow-[0_2px_2px_0_rgba(144,144,144,0.14),0_1px_5px_0_rgba(145,145,145,0.12)]`}>
          <div className="sidebar-collapse">
            <ul className='pl-0 mb-0 list-none'>
              <li className="nav-header relative block p-0 bg-[#293846]">
                <Link href="" className='relative block text-[#a7b1c2] font-[600]'>
                  <div>
                    <div className={`${isCollapsed === true ? 'hidden' : 'p-[38px]'}`}>
                      <div className='bg-nav-logo bg-contain bg-no-repeat bg-center h-20'></div>
                    </div>
                    <div className={`${isCollapsed === true ? 'min-h-[60px] py-[13px] block md:hidden' : 'hidden'} text-center text-[18px] font-[600] text-white`}>
                      <div className={`bg-small-heart bg-center bg-contain bg-no-repeat h-[30px]`}></div>
                    </div>
                    <div className={`${isCollapsed === true ? 'min-h-[60px] p-[38px] md:block' : 'md:hidden'} hidden text-center text-[18px] font-[600] text-white`}>
                      <div className={`bg-nav-logo-mobile bg-center bg-contain bg-no-repeat h-[30px]`}></div>
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
            <div className='relative overflow-hidden w-auto bg-[#2f4050]'>
              
                <ul className='pl-0 mb-0 list-none'>
                  {
                    tabTitle.map((item,index) => {
                      const isActive = router.pathname.split('/').slice(-1)[0] === item.route;

                      return (
                        <li className='#293846' key={index}>
                          <Link href={item.route} className={`${
                            isActive && 'bg-[#293846]'
                          } flex p-[10px_20px] font-[500] items-center hover:bg-[#293846] text-[#a7b1c2]`}>
                              <div className={`flex min-w-[30px] min-h-[30px] relative items-center rounded-[50%] justify-center ${isActive ? "bg-[#1AB394]" : "bg-[#ffffff1a]"}  h-[30px]`}>
                              <Icon path={item.icon} size="18px" color={isActive ? '#fff' : '#a7b1c2'}  />
                              {
                                item.feature === true ? 
                                <div className=' right-[-5px] text-[#EA9F77] leading-[0] absolute bg-[#2F4050] rounded-[50%] -bottom-0.5'>
                                  <Icon path={mdiStarCircle} size="14px"/>
                                </div>: ""
                              }
                              </div>
                              {
                                isCollapsed === true ?
                                <span className={`flex-grow ml-[7px] hidden md:block tracking-[0.5px]`}>{item.title}</span>
                                :
                                <span className={`flex-grow ml-[7px] tracking-[0.5px]`}>{item.title}</span>
                                
                              }
                          </Link>
                          
                        </li>
                      )
                    })
                  }
                </ul>

            </div>
          </div>
          <ul className='quick-actions absolute bottom-0 w-full pl-0 mb-0 list-none'>
            <li className='relative block'>
              <Link href="#" className='flex p-[10px_20px] font-[600] items-center bg-[#1ab394] hover:bg-[#18a689] text-white'>
                <div className='flex min-w-[30px] min-h-[30px] relative items-center rounded-[50%] justify-center bg-[#ffffff1a] h-[30px]'>
                  <Icon path={mdiAlarmPlus} size="18px" color='white' />
                </div>
                {
                  isCollapsed === true ? 
                  <span className='flex-grow ml-[7px] text-[13px] hidden md:block tracking-[0.5px] whitespace-pre'>Schedule appointment</span>
                   :
                  <span className='flex-grow ml-[7px] text-[13px] tracking-[0.5px] whitespace-pre'>Schedule appointment</span>
                }
              </Link>
            </li>
            <li className='relative block'>
              <Link href="#" className='active flex p-[10px_20px] font-[500] items-center bg-[#12896d] hover:bg-[#107b62] text-white'>
                <div className='flex min-w-[30px] min-h-[30px] relative items-center rounded-[50%] justify-center bg-[#ffffff1a] h-[30px]'>
                  <Icon path={mdiAccountPlus} size="18px" color='white' />
                </div>
                {
                  isCollapsed === true ? 
                <span className='flex-grow ml-[7px] text-[13px] hidden md:block tracking-[0.5px] whitespace-pre'>Register client</span>
                  
                  :
                <span className='flex-grow ml-[7px] text-[13px] tracking-[0.5px] whitespace-pre'>Register client</span>
                }
              </Link>
            </li>
            
          </ul>
      </nav>
    </>
  )
}

export default Sidebar