import MainLayout from '@/components/Admin/MainLayout'
import { userData } from '@/redux/action/auth'
import Icon from '@mdi/react'
import { mdiCalendarToday, mdiLaunch, mdiMinus, mdiPlus } from '@mdi/js'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Menu, Transition } from '@headlessui/react'
import { BiCaretDown } from 'react-icons/bi'
import { Fragment, useState } from 'react'
import { FollowUpMenuData } from '@/components/Admin/FollowUpMenuData'
import Link from 'next/link'



export default function Home() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
        <div className='notification_bar bg-[#FAE8E4] sm:flex-wrap sm:text-[12px] sm:py-4 sm:px-6 flex justify-center text-[#EA9F77] py-2 px-4 items-center -mx-[15px] shadow-[0_2px_2px_0_rgba(144,144,144,0.14),0_3px_1px_-2px_transparent,0_1px_5px_0_rgba(145,145,145,0.12)]'>
          <div className='text-center sm:mb-4'>Confirm your email address to activate your account.</div>
          <div className='notification_bar_box flex ml-6 sm:ml-0 items-center sm:w-full '>
            <div className='action flex items-center justify-center text-center text-[#EA9F77] bg-[#fff] border-none py-2 px-4 rounded shadow-[0px_2px_4px_rgba(0,0,0,0.1)]'>Remind later</div>
            <div className='action ml-2 flex items-center justify-center text-center text-[#fff] bg-[#EA9F77] py-2 px-4 rounded shadow-[0px_2px_4px_rgba(0,0,0,0.1)]'>Resend confirmation email</div>
          </div>
        </div>
        <div className='pt-6 pr-0 pb-32 pl-0 xl:flex-wrap flex gap-7 md:gap-0 md:mx-[-15px]'>
          <div className='w-4/6 xl:w-full xl:order-1'>
            <div>
              <div className='bg-[#fff] relative mb-6 mt-0 p-0 shadow-[0_2px_2px_0_rgba(144,144,144,0.14),0_3px_1px_-2px_transparent,0_1px_5px_0_rgba(145,145,145,0.12)] rounded-[5px] sm:rounded-none'>
                <div className='px-5 pb-[15px] pt-[20px] flex items-center'>
                  <div className='grow'>
                    <h4 className='m-0 text-[20px] font-[400] leading-[1.1]'>Next appointment
                      <small className='text-[#DB4965] text-[0.6em] font-[300] mt-auto mr-0 mb-[2px] ml-[5px]'> (Delayed)</small>
                    </h4>
                    <div className='font-[100] text-[12px] text-[#888888] opacity-[0.8]'>Your appointment should have started a month ago</div>
                  </div>
                  <div className='text-[1.1em] font-[300] sm:hidden'>15 of July
                    <span> at
                      <span className='text-[1.2em] font-[400] text-[#676A6C]'> 9:00 AM</span>
                    </span>
                  </div>
                </div>
                <div className='pt-[5px] p-5 md:pb-0 flex md:block'>
                  <div className='mr-5 my-0 -mx-5 border-l-2 sm:border-[#EA9F77] border-[#1AB394] md:w-full w-4/6 pl-[18px]'>
                    <div className='flex'>
                      <div className='mr-[15px] relative'>
                        <a>
                          <img src='/image/female_thumb.png' className='max-w-[80px] max-h-[80px] sm:max-w-[40px] sm:max-h-[40px] rounded-[50%] border border-[#EEEEEE] h-auto' />
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
                            <div className='gap-[4px] flex items-center'>
                              <a className='rounded-[50%] bg-[#E0FAF1] mr-[3px] flex justify-center items-center w-[17px] h-[17px]'>
                                <Icon path={mdiCalendarToday} className='mb-0  text-[#12896D] w-[12px] h-[12px]' />
                              </a>
                              No appointments yet
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='p-0 mt-5 -mr-5 mb-0 -ml-5 hidden md:flex'>
                    <a className='bg-[#E0FAF1] text-[#1AB394] border-none py-2 px-[10px] uppercase font-[600] rounded-[3px] block w-full text-[12px] leading-[1.5] text-center align-middle'>Start</a>
                  </div>
                  <div className='w-1/3 pr-0 md:hidden'>
                    <a className='mt-[5px] bg-[#1AB394] border-[#1AB394] text-[#fff] rounded-[3px] block w-full py-[5px] px-[10px] text-[12px] leading-[1.5] mb-0 text-center font-[400] border'>Start</a>
                    <div className='topbar-menu mt-[12px]'>
                      {/* <ul className='pl-0 mb-0 list-none '>
                        <li className='mr-[20px]'>
                            <Link href={""} className="relative py-[20px] pl-[10px] flex items-center justify-end text-[14px] min-h-[50px] text-[#a7b1c2] font-[600]">
                                <Image src={userIcon} width={100} className='block 2lg:hidden h-[35px] w-[35px] mr-[10px] rounded-full' alt="user-icon" />
                                <span className='text-[#888888] font-normal text-[1.1em] text-ellipsis overflow-hidden whitespace-nowrap'>{userData?.fullName}</span>
                                <BiCaretDown />
                            </Link>
                        </li>
                    </ul> */}
                      <Menu>
                        <Menu.Button onClick={toggleMenu} className="relative w-full justify-center flex items-center rounded border text-[14px] min-h-[30px] text-[#a7b1c2] font-[600]">
                          {/* <Image src={userIcon} width={35} className='block 2lg:hidden h-[35px] w-[35px] mr-[10px] rounded-full' alt="user-icon" /> */}
                          <span className='text-[#888888] font-normal text-[12px] text-ellipsis overflow-hidden whitespace-nowrap'>More options</span>
                          <BiCaretDown />
                        </Menu.Button>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"

                        >
                          <Menu.Items className="absolute z-10 w-full mt-[1px] justify-center right-[170px] max-w-[182px] border-[1px] w-100 origin-top-right divide-y divide-gray-100 rounded-[3px] bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {
                              FollowUpMenuData && FollowUpMenuData.map((item, index) => (
                                <div key={index}>
                                  <Link href={item.route} className='flex items-center p-[0px_20px] hover:text-[#262626] cursor-pointer text-[12px] rounded-[3px] leading-[25px] m-[4px] text-left whitespace-nowrap hover:bg-[#f5f5f5] '>
                                    {item.title}
                                  </Link>
                                </div>
                              ))
                            }
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-[#fff] mb-[25px] mt-0 p-0 shadow-[0_2px_2px_0_rgba(144,144,144,0.14),0_3px_1px_-2px_transparent,0_1px_5px_0_rgba(145,145,145,0.12)] rounded-[5px] md:hidden'>
                <div className='px-5 pt-5 pb-[15px] flex items-center'>
                  <div className='grow'>
                    <h4 className='m-0 text-[20px] font-[400] leading-[1.1]'>Future appointments</h4>
                    <div className='font-[100] text-[12px] text-[#888888] opacity-[0.8]'>Check your future appointments and clients</div>
                  </div>
                  <div>
                    <a className='text-[#676A6C]'>
                      <Icon path={mdiPlus} className='inline-block leading-[1] w-[25px]' />
                      <div className='absolute'></div>
                    </a>
                  </div>
                </div>
                <div className='p-5 pt-0'>
                  <div className='relative'>
                    <div className='absolute top-0 bottom-0 left-0 right-0 z-[1] flex justify-center items-center'>
                      <div className='flex-[3_0_0]'></div>
                      <div className='flex-[4_0_0] text-center '>
                        <div className='text-[20px]'>This list is empty</div>
                        <div>You haven't scheduled additional appointments.</div>
                        <a className='font-[600] leading-[30px] text-[#1AB394]'>Schedule appointment</a>
                      </div>
                      <div className='curly_arrow'></div>
                    </div>
                    <div>
                      <div className='border-b border-[#E0FAF1] pt-0 flex px-0 py-[10px] opacity-[0.4]'>
                        <div className='pr-5 m-auto w-[70px]'>
                          <div className='w-full h-[12px] bg-[#E0FAF1] rounded-[10px]'></div>
                          <div className='w-1/2 mt-[10px] mr-auto mb-0 ml-auto h-[8px] bg-[#E0FAF1] rounded-[10px]'></div>
                        </div>
                        <div className='ml-[10px]'>
                          <img src='/image/male_thumb.png' className='w-[50px] h-[50px] rounded-[50%] max-w-full' />
                        </div>
                        <div className='m-auto grow'>
                          <div className='h-[12px] w-[30%] bg-[#E0FAF1] rounded-[10px]'></div>
                          <div className='w-[20%] mt-[6px] h-[8px] bg-[#E0FAF1] rounded-[10px]'></div>
                          <div className='w-[40%] mt-[12px] h-[8px] bg-[#E0FAF1] rounded-[10px]'></div>
                        </div>
                        <div className='m-auto w-[25%] bg-[#E0FAF1] text-[#fff] py-[2px] px-[10px] rounded-[3px] min-h-[26px]'></div>
                      </div>
                      <div className='pb-0 flex py-[10px] px-0 opacity-[0.4]'>
                        <div className='pr-[20px] m-auto w-[70px]'>
                          <div className='w-full h-[12px] bg-[#E0FAF1] rounded-[10px]'></div>
                          <div className='w-1/2 mt-[10px] mr-auto mb-0 ml-auto h-[8px] bg-[#E0FAF1] rounded-[10px]'></div>
                        </div>
                        <div className='ml-[10px]'>
                          <img src='/image/female_thumb.png' className='w-[50px] h-[50px] rounded-[50%] max-w-full' />
                        </div>
                        <div className='m-auto grow'>
                          <div className='w-[40%] h-[12px] bg-[#E0FAF1] rounded-[10px]'></div>
                          <div className='w-[20%] mt-[6px] h-[8px] bg-[#E0FAF1] rounded-[10px]'></div>
                          <div className='w-[30%] mt-[12px] h-[8px] bg-[#E0FAF1] rounded-[10px]'></div>
                        </div>
                        <div className='m-auto w-[25%] bg-[#E0FAF1] text-[#fff] rounded-[3px] min-h-[26px] py-[2px] px-[10px]'></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-1/3 xl:w-full xl:order-2'>
            <div className='xl:flex xl:flex-wrap'>
              <div className='w-full xl:w-[48%] xl:mr-[30px] lg:mr-0 lg:w-full'>
                <div className='bg-[#fff] mb-[25px] mt-0 p-0 shadow-[0_2px_2px_0_rgba(144,144,144,0.14),0_3px_1px_-2px_transparent,0_1px_5px_0_rgba(145,145,145,0.12)] rounded-[5px] md:hidden'>
                  <div className='pt-5 pr-5 pb-[15px] pl-5'>
                    <h4 className='m-0 text-[20px] font-[400] leading-[1.1]'>Statistics of the week</h4>
                    <div className='font-[400] text-[12px] text-[#888888] opacity-[0.8]'>Check the most important statistics of the week</div>
                  </div>
                  <div className='p-5 pt-0'>
                    <div>
                      <ul className='p-0 m-0 list-none'>
                        <li className='mt-0'>
                          <h2 className='mt-0 mb-0 text-[24px] font-[100]'>0 of 0</h2>
                          <div className='w-full table'>
                            <div className='font-[100] py-[3px] px-0 table-cell text-[0.85em] align-middle'>Appointments performed</div>
                          </div>
                          <div>
                            <div className='h-[5px] mb-0 mt-[5px] shadow-none overflow-hidden bg-[#f5f5f5] rounded'>
                              <div className='w-0 h-[5px] mb-0 bg-[#1ab394] shadow-none float-left text-[12px] leading-[20px] text-[#fff] text-center'></div>
                            </div>
                          </div>
                        </li>
                        <li className='mt-[15px]'>
                          <h2 className='mt-0 mb-0 text-[24px] font-[100]'>0</h2>
                          <div className='table w-full'>
                            <div className='font-[100] py-[3px] px-0 table-cell align-middletext-[0.85em]'>New clients</div>
                            <div className='text-right table-cell align-middle text-[0.85em]'>
                              <div className='text-[16px] align-middle mr-[3px] '><a><Icon path={mdiMinus} /></a></div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full xl:w-[48%] lg:w-full'>
                <div className='border-t-2 border-[#EA9F77] bg-[#fff] mb-[25px] mt-0 p-0 shadow-[0_2px_2px_0_rgba(144,144,144,0.14),0_3px_1px_-2px_transparent,0_1px_5px_0_rgba(145,145,145,0.12)] rounded-[5px] sm:rounded-none'>
                  <div className='px-5 pt-5 pb-[15px]'>
                    <div className='m-0 text-[20px] font-[400] leading-[1.1] flex '>Open conversations
                      <div className='ml-auto '>
                        <a className='flex items-center '>
                          <Icon path={mdiLaunch} className='text-[1.1em] w-[20px] ' />
                        </a>
                      </div>
                    </div>
                    <div className='font-[100] text-[12px] text-[#888888] opacity-[0.8]'>Last received conversations</div>
                  </div>
                  <div className='p-5 pt-0'>
                    <div>
                      <div>
                        <div className='border-0 p-0 m-0'>
                          <a className='text-[#676A6C] flex'>
                            <div className='w-[30px] h-[30px] min-h-[30px] min-w-[30px] flex mr-[7px] relative overflow-hidden'>
                              <img src='/image/female_thumb.png' className='w-[30px] h-[30px] border-none rounded-[50%] max-w-full block align-middle' />
                            </div>
                            <div className='grow'>
                              <div className='flex leading-[1em] items-center'>
                                <strong className='grow font-bold'>Example client</strong>
                                <small className='text-[#1AB394] text-[80%]'>July 14</small>
                              </div>
                              <div className='leading-0 mt-[3px]'>
                                <div className='text-[#888888] overflow-hidden leading-[1.3em] max-h-[2.6em]'>Hi Nna! You can check here all the messages sent by your clients between appointments.</div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full xl:w-[48%] lg:w-full'>
                <div className='border-t-2 border-[#EA9F77] bg-[#fff] mb-[25px] mt-0 p-0 shadow-[0_2px_2px_0_rgba(144,144,144,0.14),0_3px_1px_-2px_transparent,0_1px_5px_0_rgba(145,145,145,0.12)] rounded-[5px] sm:rounded-none'>
                  <div className='px-5 pt-5 pb-[15px]'>
                    <div className='m-0 text-[20px] font-[400] leading-[1.1] flex text-[#676A6C]'>Follow-up
                      <div className='ml-auto'>
                        <a className='flex items-center '><Icon path={mdiLaunch} className='text-[1.1em] w-[20px] ' /></a>
                      </div>
                    </div>
                    <div className='font-[100] text-[12px] text-[#888888] opacity-[0.8]'>Latest activities and logs of your clients</div>
                  </div>
                  <div className='p-5 pt-0'>
                    <div>
                      <div>
                        <div className='m-0 pb-[10px] border-b border-[#e7eaec] overflow-hidden'>
                          <a className='text-[#676A6C] flex'>
                            <div className='w-[30px] h-[30px] min-w-[30px] min-h-[30px] flex mr-[7px] relative overflow-hidden'>
                              <img src='/image/female_thumb.png' className='w-[30px] h-[30px] border-none rounded-[50%] max-w-full block align-middle' />
                            </div>
                            <div className='leading-[1em] grow'>
                              <strong className='font-bold'>Example client</strong>
                              <span className='leading-[16px] text-[#888888] ml-1'>registered physical activity</span>
                              <div className='mt-[5px] text-[#1AB394] text-[85%]'>July 14</div>
                            </div>
                          </a>
                        </div>
                        <div className='m-0 pb-[10px] mt-[10px] border-b border-[#e7eaec] overflow-hidden'>
                          <a className='text-[#676A6C] flex'>
                            <div className='w-[30px] h-[30px] min-w-[30px] min-h-[30px] flex mr-[7px] relative overflow-hidden'>
                              <img src='/image/female_thumb.png' className='w-[30px] h-[30px] border-none rounded-[50%] max-w-full block align-middle' />
                            </div>
                            <div className='leading-[1em] grow'>
                              <strong className='font-bold'>Example client</strong>
                              <span className='leading-[16px] text-[#888888] ml-1'>registered supper</span>
                              <div className='mt-[5px] text-[#1AB394] text-[85%]'>July 14</div>
                            </div>
                          </a>
                        </div>
                        <div className='m-0 pb-[10px] mt-[10px] border-b border-[#e7eaec] overflow-hidden'>
                          <a className='text-[#676A6C] flex'>
                            <div className='w-[30px] h-[30px] min-w-[30px] min-h-[30px] flex mr-[7px] relative overflow-hidden'>
                              <img src='/image/female_thumb.png' className='w-[30px] h-[30px] border-none rounded-[50%] max-w-full block align-middle' />
                            </div>
                            <div className='leading-[1em] grow'>
                              <strong className='font-bold'>Example client</strong>
                              <span className='leading-[16px] text-[#888888] ml-1'>registered dinner</span>
                              <div className='mt-[5px] text-[#1AB394] text-[85%]'>July 14</div>
                            </div>
                          </a>
                        </div>
                        <div className='m-0 mt-[10px] overflow-hidden'>
                          <a className='text-[#676A6C] flex'>
                            <div className='w-[30px] h-[30px] min-w-[30px] min-h-[30px] flex mr-[7px] relative overflow-hidden'>
                              <img src='/image/female_thumb.png' className='w-[30px] h-[30px] border-none rounded-[50%] max-w-full block align-middle' />
                            </div>
                            <div className='leading-[1em] grow'>
                              <strong className='font-bold'>Example client</strong>
                              <span className='leading-[16px] text-[#888888] ml-1'>registered afternoon snack</span>
                              <div className='mt-[5px] text-[#1AB394] text-[85%]'>July 14</div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
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
