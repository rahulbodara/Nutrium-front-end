import MainLayout from '@/components/Admin/MainLayout'
import React from 'react'
import Image from 'next/image'
import calenderIcon from '../../../../../public/image/google_calendar.png'
import zoomIcon from '../../../../../public/image/zoom_meetings.png'
import inbodyIcon from '../../../../../public/image/inbody.png'
import akernIcon from '../../../../../public/image/akern_bia.png'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'


const Integrations = () => {

    const [open, setOpen] = useState(false)

    const cancelButtonRef = useRef(null)

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
                                        <button onClick={() => setOpen(true)} className='text-[#888888] bg-[#FAFAFB] p-[10px] text-center uppercase rounded-bl-[5px] rounded-br-[5px] sm:rounded-none'>Disable</button>
                                        <Transition.Root show={open} as={Fragment}>
                                            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                                                <Transition.Child
                                                    as={Fragment}
                                                    enter="ease-out duration-300"
                                                    enterFrom="opacity-0"
                                                    enterTo="opacity-100"
                                                    leave="ease-in duration-200"
                                                    leaveFrom="opacity-100"
                                                    leaveTo="opacity-0"
                                                >
                                                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                                                </Transition.Child>

                                                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                                                    <div className="flex min-h-[60%] items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                                        <Transition.Child
                                                            as={Fragment}
                                                            enter="ease-out duration-300"
                                                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                                                            leave="ease-in duration-200"
                                                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                                        >
                                                            <Dialog.Panel className="relative transform overflow-hidden rounded bg-white px-4 pb-4 pt-5 text-center shadow-xl transition-all sm:my-8 max-w-[600px] sm:w-auto sm:max-w-[295px] w-auto sm:p-[25px_30px]">
                                                                <h2 className='mt-[15px] font-[400] text-[#575757] text-[30px] text-center m-[25px_0] p-0 leading-[40px] block sm:text-[24px] sm:leading-7 sm:mt-0'>Do you want to disable the InBody integration?</h2>
                                                                <p className='block text-[#797979] text-[16px] font-[300] text-inherit m-0 p-0 leading-[normal] sm:text-[14px]'>
                                                                    You will no longer be able to import measurements from the InBody scales if you conclude this action. You can always enable this integration in this page.
                                                                </p>
                                                                <div className='sm:flex sm:flex-wrap'>
                                                                    <button onClick={() => setOpen(false)} className='inline-block bg-[#C1C1C1] hover:bg-red-500 text-[#fff] border-0 text-[17px] font-[500] p-[10px_32px] m-[26px_5px_0px_5px] sm:order-2 sm:bg-[#FFF] sm:text-[#676A6C] sm:border sm:border-[#EEEEEE] sm:m-[10px_0_0] sm:flex-[1_0_100%]'>Cancel</button>
                                                                    <div className='inline-block sm:order-1 sm:flex-[1_0_100%]'>
                                                                        <button className='inline-block bg-[#b35f6f] hover:bg-red-700 shadow-[(#db4965cc_0px_0px_2px)_(#0000000d_0px_0px_0px_1px-inset)] text-[#fff] text-[17px] font-[500] p-[10px_32px] m-[26px_5px_0px_5px] sm:w-full sm:m-[26px_0_0]'>Disable</button>
                                                                    </div>
                                                                </div>
                                                            </Dialog.Panel>
                                                        </Transition.Child>
                                                    </div>
                                                </div>
                                            </Dialog>
                                        </Transition.Root>
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
