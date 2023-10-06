import MainLayout from '@/components/Admin/MainLayout'
import { mdiAccountOutline, mdiLabelOutline } from '@mdi/js'
import Icon from '@mdi/react'
import React from 'react'

export default function Conversations() {
  return (
    <>

      <MainLayout head={"Messages"} text={"Send, read and reply to messages from your clients."}>
        {/* <Dropdown /> */}
        <div className='p-[25px_0_125px]'>
          <div className='-mx-[15px] flex'>
            <div className='w-[66.66%] px-[15px]'>
              <div>
                <div className='bg-[#FFFFFF] mb-[25px] mt-0 p-0 shadow-[(0_2px_2px_0_rgba(144,144,144,0.14))_(0_3px_1px_-2px_transparent)_(0_1px_5px_0_rgba(145,145,145,0.12))] rounded-[5px]'>
                  <div className='p-[20px_20px_15px_20px] flex items-center'>
                    <div className='grow '>
                      <div className='flex'>
                        <div className='w-[50px]'>
                          <div className='w-[40px] h-[40px] flex mr-[7px] overflow-hidden'>
                            <a href=''>
                              <img src='/image/female_thumb.png' className='w-[40px] h-[40px] border-none rounded-[50%] max-w-[70px] max-h-[70px]' />
                            </a>
                          </div>
                        </div>
                        <div className='flex-[1] grow min-w-0'>
                          <h3 className='m-0 text-[20px] font-[400] leading-[1.1]'>Example conversation</h3>
                          <div className='h-[18px] font-[100] text-[12px] text-[#888888] overflow-hidden whitespace-nowrap text-ellipsis flex items-center'>
                            <a href='' className='text-[#676A6C] flex font-[100]'>
                              <Icon path={mdiAccountOutline} size={0.65} className='text-[15px] mr-[3px]' />
                              Example client
                            </a>
                            <Icon path={mdiLabelOutline} size={0.65} className='text-[15px] mr-[3px] ml-[5px]' />
                            Follow Up
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-[33.33%] px-[15px]'></div>
          </div>
        </div>
      </MainLayout>
    </>
  )
}
