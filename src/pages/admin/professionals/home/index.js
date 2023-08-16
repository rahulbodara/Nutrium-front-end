import MainLayout from '@/components/Admin/MainLayout'
import { userData } from '@/redux/action/auth'
import Icon from '@mdi/react'
import { mdiCalendarToday } from '@mdi/js'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export default function Home() {
  const dispatch = useDispatch()

  console.log("testetst");

  useEffect(() => {
    const fetch = async () => {
      await dispatch(userData())
    }
    fetch()
  }, [dispatch])

  return (
    <>
      <MainLayout head={"Professional home page"} text={"Check your next appointments and your activity"}>
        {/* <Dropdown /> */}
        <div className='bg-[#FAE8E4] flex justify-center text-[#EA9F77] py-2 px-4 items-center -mx-[15px] shadow-[0_2px_2px_0_rgba(144,144,144,0.14),0_3px_1px_-2px_transparent,0_1px_5px_0_rgba(145,145,145,0.12)]'>
          <div className='text-center'>Confirm your email address to activate your account.</div>
          <div className='flex ml-6 items-center'>
            <div className='flex items-center justify-center text-center text-[#EA9F77] bg-[#fff] border-none py-2 px-4 rounded shadow-[0px_2px_4px_rgba(0,0,0,0.1)]'>Remind later</div>
            <div className='ml-2 flex items-center justify-center text-center text-[#fff] bg-[#EA9F77] py-2 px-4 rounded shadow-[0px_2px_4px_rgba(0,0,0,0.1)]'>Resend confirmation email</div>
          </div>
        </div>
        <div className='pt-6 pr-0 pb-32 pl-0'>
          <div className='w-4/6'>
            <div>
              <div className='bg-[#fff] mb-6 mt-0 p-0 shadow-[0_2px_2px_0_rgba(144,144,144,0.14),0_3px_1px_-2px_transparent,0_1px_5px_0_rgba(145,145,145,0.12)] rounded-[5px]'>
                <div className='px-5 pb-[15px] pt-[20px] flex items-center'>
                  <div className='grow'>
                    <h4 className='m-0 text-[20px] font-[400] leading-[1.1]'>Next appointment
                      <small className='text-[#DB4965] text-[0.6em] font-[300] mt-auto mr-0 mb-[2px] ml-[5px]'> (Delayed)</small>
                    </h4>
                    <div className='font-[100] text-[12px] text-[#888888]'>Your appointment should have started a month ago</div>
                  </div>
                  <div className='text-[1.1em] font-[300]'>15 of July
                  <span> at 
                    <span className='text-[1.2em] font-[400]'> 9:00 AM</span>
                  </span>
                  </div>
                </div>
                <div className='pt-[5px] p-5 flex'>
                  <div className='my-0 -mx-5 border-l border-[#1AB394] w-4/6 pl-[18px]'>
                    <div className='flex'>
                      <div className='mr-[15px] relative'>
                        <a>
                          <img src='/image/female_thumb.png' className='max-w-[80px] max-h-[80px] rounded-[50%] border border-[#EEEEEE] h-auto' />
                        </a>
                      </div>
                      <div className='flex-1 grow justify-start flex flex-col'>
                        <div className='gap-[8px] flex justify-start'>
                          <h3 className='m-0 font-[400] text-[16px]'>
                            <a className='text-[#676A6C]'>Example client</a>
                          </h3>
                        </div>
                        <div className='h-[18px] font-[300]'>Occupation example</div>
                        <div className='mt-1 font-[300]'>
                          <div className='text-[85%]'>
                            <div className='gap-[4px] flex'>
                              <a><Icon path={mdiCalendarToday} className='mb-0 rounded-[50%] bg-[#E0FAF1] text-[#12896D] mr-[3px] flex justify-center items-center w-[16px] h-[16px]' /></a>
                              No appointments yet
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='w-1/3 pr-0'>
                    <a className='mt-[5px] bg-[#1AB394] border-[#1AB394] text-[#fff] rounded-[3px] block w-full py-[5px] px-[10px] text-[12px] leading-[1.5] mb-0 text-center font-[400] border'>Start</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  )
}
