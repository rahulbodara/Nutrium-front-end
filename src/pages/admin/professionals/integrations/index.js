import MainLayout from '@/components/Admin/MainLayout'
import React from 'react'
import Image from 'next/image'
import calenderIcon from '../../../../../public/image/google_calendar.png'
import zoomIcon from '../../../../../public/image/zoom_meetings.png'
import inbodyIcon from '../../../../../public/image/inbody.png'
import akernIcon from '../../../../../public/image/akern_bia.png'




const Integrations = () => {
    return (
        <div>
            <MainLayout head={"List of integrations"} text={"Connect Nutrium with your apps and services"}>
                <div className='p-[25px_0px_125px]'>
                    <div>
                        <div>
                            <div className='text-[16px] p-[10px_5px] text-[#888888]'>Software</div>
                            <div className='m-[0px_-5px] w-auto flex p-0 !flex-row sm:flex-wrap sm:m-0'>
                                <div className='p-[0px_10px] flex flex-col flex-[0_0_auto] w-[25%] sm:w-full sm:p-0 lg:w-[50%]'>
                                    <div className='h-full flex flex-col justify-between bg-[#FFF] mb-[25px] mt-0 p-0 shadow-[(0_2px_2px_0_#90909024)_(0_3px_1px_-2px_transparent)_(0_1px_5px_0_#9191911f)] rounded-[5px]'>
                                        <div className='h-[90px] p-[20px_20px_15px_20px] flex items-center'>
                                            <Image src={calenderIcon} width={55} className='max-w-full max-h-[55px] h-auto block align-middle ' alt="calender-icon" />
                                        </div>
                                        <div className='grow p-5 pt-0'>
                                            <h4 className='leading-[normal] overflow-hidden whitespace-nowrap text-ellipsis mb-1 mt-[5px] font-[600] text-[14px] m-0'>Google Calendar</h4>
                                            <div className='text-[12px] text-[#AAAAAA]'>
                                                Sync your appointments with Google Calendar.
                                                <a href='' className='text-[#AAAAAA] underline'> Learn more</a>
                                                .
                                            </div>
                                        </div>
                                        <button className='text-[#FFF] bg-[#1AB394] p-[10px] text-center uppercase rounded-bl-[5px] rounded-br-[5px] sm:rounded-none'>Enable</button>
                                    </div>
                                </div>
                                <div className='p-[0px_10px] flex flex-col flex-[0_0_auto] w-[25%] sm:w-full sm:p-0 lg:w-[50%]'>
                                    <div className='h-full flex flex-col justify-between bg-[#FFF] mb-[25px] mt-0 p-0 shadow-[(0_2px_2px_0_#90909024)_(0_3px_1px_-2px_transparent)_(0_1px_5px_0_#9191911f)] rounded-[5px]'>
                                        <div className='h-[90px] p-[20px_20px_15px_20px] flex items-center'>
                                            <Image src={zoomIcon} width={110} className='max-w-full max-h-[90px] h-auto block align-middle ' alt="calender-icon" />
                                        </div>
                                        <div className='grow p-5 pt-0'>
                                            <h4 className='leading-[normal] overflow-hidden whitespace-nowrap text-ellipsis mb-1 mt-[5px] font-[600] text-[14px] m-0'>Zoom</h4>
                                            <div className='text-[12px] text-[#AAAAAA]'>
                                                Sync your video calling appointments with Zoom to generate the meeting link automatically.
                                                <a href='' className='text-[#AAAAAA] underline'> Learn more</a>
                                                .
                                            </div>
                                        </div>
                                        <button className='text-[#FFF] bg-[#1AB394] p-[10px] text-center uppercase rounded-bl-[5px] rounded-br-[5px] sm:rounded-none'>Enable</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='text-[16px] p-[10px_5px] text-[#888888]'>Equipments</div>
                            <div className='m-[0px_-5px] w-auto flex p-0 !flex-row sm:flex-wrap sm:m-0'>
                                <div className='p-[0px_10px] flex flex-col flex-[0_0_auto] w-[25%] sm:w-full sm:p-0 lg:w-[50%]'>
                                    <div className='h-full flex flex-col justify-between bg-[#FFF] mb-[25px] mt-0 p-0 shadow-[(0_2px_2px_0_#90909024)_(0_3px_1px_-2px_transparent)_(0_1px_5px_0_#9191911f)] rounded-[5px]'>
                                        <div className='h-[90px] p-[20px_20px_15px_20px] flex items-center'>
                                            <Image src={inbodyIcon} width={110} className='max-w-full max-h-[55px] h-auto block align-middle ' alt="calender-icon" />
                                        </div>
                                        <div className='grow p-5 pt-0'>
                                            <h4 className='leading-[normal] overflow-hidden whitespace-nowrap text-ellipsis mb-1 mt-[5px] font-[600] text-[14px] m-0'>InBody</h4>
                                            <div className='text-[12px] text-[#AAAAAA]'>
                                                Import clients' measurements with InBody scales.
                                                <a href='' className='text-[#AAAAAA] underline'> Learn more</a>
                                                .
                                            </div>
                                        </div>
                                        <button className='text-[#888888] bg-[#FAFAFB] p-[10px] text-center uppercase rounded-bl-[5px] rounded-br-[5px] sm:rounded-none'>Disable</button>
                                    </div>
                                </div>
                                <div className='p-[0px_10px] flex flex-col flex-[0_0_auto] w-[25%] sm:w-full sm:p-0 lg:w-[50%]'>
                                    <div className='h-full flex flex-col justify-between bg-[#FFF] mb-[25px] mt-0 p-0 shadow-[(0_2px_2px_0_#90909024)_(0_3px_1px_-2px_transparent)_(0_1px_5px_0_#9191911f)] rounded-[5px]'>
                                        <div className='h-[90px] p-[20px_20px_15px_20px] flex items-center'>
                                            <Image src={akernIcon} width={70} className='max-w-full max-h-[90px] h-auto block align-middle ' alt="calender-icon" />
                                        </div>
                                        <div className='grow p-5 pt-0'>
                                            <h4 className='leading-[normal] overflow-hidden whitespace-nowrap text-ellipsis mb-1 mt-[5px] font-[600] text-[14px] m-0'>Akern BIA</h4>
                                            <div className='text-[12px] text-[#AAAAAA]'>
                                                Import clients' measurements with Akern BIA devices.
                                                <a href='' className='text-[#AAAAAA] underline'> Learn more</a>
                                                .
                                            </div>
                                        </div>
                                        <button className='text-[#888888] bg-[#FAFAFB] p-[10px] text-center uppercase rounded-bl-[5px] rounded-br-[5px] sm:rounded-none'>Disable</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </div>
    )
}

export default Integrations
