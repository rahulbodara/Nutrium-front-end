import React, { Fragment, useState } from 'react'
import Steps from '@/components/Admin/Clients/Information/Steps'
import MainLayout from '@/components/Admin/MainLayout';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/en-gb';
import { IoHelpOutline } from 'react-icons/io5';
import { Dialog, Transition } from '@headlessui/react'
import ClientDetail from '@/components/Admin/Clients/ClientDetail';
import ClientSubscribe from '@/components/Admin/Clients/ClientSubscribe';
import CustomCalendar from '@/components/Admin/Clients/Calander/CustomCalendar';
import Icon from '@mdi/react';
import { mdiClockOutline, mdiClose, mdiCloseThick } from '@mdi/js';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

const status = [
    {
        color: '#1AB394',
        title: 'Compliant',
        description: 'No significant changes were made to the meal plan'
    },
    {
        color: '#EA9F77',
        title: 'Struggling',
        description: 'Some significant changes were made to the meal plan'
    },
    {
        color: '#DB4965',
        title: 'Not compliant',
        description: 'A high number of significant changes were made to the meal plan'
    },
    {
        color: '#DDDDDD',
        title: 'Insufficient data',
        description: 'The client did not register enough information'
    },
]

const Followup = () => {
    const [open, setOpen] = useState(false)


    return (
        <div>
            <MainLayout head={"Follow-up"} text={"Check your clients' progress"}>
                <div className='mt-[-20px]'>
                    <ClientDetail />
                    <div className='pt-[25px] pb-[25px]'>
                        <ClientSubscribe />
                        <div className='mt-[25px]'>
                            <Steps />
                        </div>
                    </div>
                </div>
                <div className='2lg:block grid grid-cols-2 gap-[30px]'>
                    <div className='rounded-[5px]  bg-white shadow-box1'>
                        <div className='p-[20px] pb-[15px]'>
                            <h3 className='text-[20px] leading-[24px] '>Follow-up</h3>
                            <span className='text-[12px] text-[#888888]/[70%]'>
                                Check your clients' daily progress
                            </span>
                        </div>
                        <div className='calender-main p-[0_20px_20px]'>
                            <CustomCalendar  height={500}/>
                            <div className='p-[10px_0px_5px] flex gap-[10px] text-[11px]'>
                                <div className='flex items-center gap-[5px]'><span className='bg-[#1AB394] w-[22px] h-[11px] block rounded-[3px]' /><p className='text-[#888] uppercase'>COMPLIANT</p></div>
                                <div className='flex items-center gap-[5px]'><span className='bg-[#EA9F77] w-[22px] h-[11px] block rounded-[3px]' /><p className='text-[#888] uppercase'>Struggling</p></div>
                                <div className='flex items-center gap-[5px]'><span className='bg-[#DB4965] w-[22px] h-[11px] block rounded-[3px]' /><p className='text-[#888] uppercase'>Not compliant</p></div>
                                <div className='flex items-center gap-[5px]'><span className='bg-[#DDDDDD] w-[22px] h-[11px] block rounded-[3px]' /><p className='text-[#888] uppercase'>Insufficient data</p></div>
                                <button onClick={() => setOpen(true)} className='bg-[#DDDDDD] w-[18px] h-[18px] rounded-full flex justify-center items-center text-[#676a6c]'><IoHelpOutline /></button>
                            </div>
                            <div className=''>
                                <h3 className='my-[20px] text-[20px] font-[300] text-center'>Jul 14, 2023</h3>
                                <h3 className='mt-[20px] mb-[15px] text-[17px] font-[300] text-left'>Food diary</h3>
                                <div className='grid grid-cols-2 gap-x-[30px] gap-y-[12px]'>
                                    <div className='text-[16px] rounded-[5px] py-[10px] px-[15px] flex items-center border-t-[5px] border border-[#EEEEEE] border-t-[#1AB394] text-[#888888]'>
                                        <div className='mr-[5px]'>

                                            <Icon path={mdiClockOutline} size={0.7} className='text-[16px]  text-[#888888]' />
                                        </div>
                                        <div className='flex truncate'>
                                            <span className='text-[16px]  text-[#888888]'>07h00</span>
                                            <span className='text-[16px] truncate ml-[5px] text-[#888888]'>- Breakfast</span>
                                        </div>
                                    </div>
                                    <div className='text-[16px] rounded-[5px] py-[10px] px-[15px] flex items-center border-t-[5px] border border-[#EEEEEE] border-t-[#1AB394] text-[#888888]'>
                                        <div className='mr-[5px]'>

                                            <Icon path={mdiClockOutline} size={0.7} className='text-[16px]  text-[#888888]' />
                                        </div>
                                        <div className='flex truncate'>
                                            <span className='text-[16px]  text-[#888888]'>16h00</span>
                                            <p className='text-[16px] truncate ml-[5px] text-[#888888]'>- Afternoon snack</p>
                                        </div>
                                    </div>
                                    <div className='text-[16px] rounded-[5px] py-[10px] px-[15px] flex items-center border-t-[5px] border border-[#EEEEEE] border-t-[#1AB394] text-[#888888]'>
                                        <div className='mr-[5px]'>

                                            <Icon path={mdiClockOutline} size={0.7} className='text-[16px]  text-[#888888]' />
                                        </div>
                                        <div className='truncate flex'>
                                            <span className='text-[16px]  text-[#888888]'>10h00</span>
                                            <span className='text-[16px] truncate ml-[5px] text-[#888888]'>- Morning snack</span>
                                        </div>
                                    </div>
                                    <div className='text-[16px] rounded-[5px] py-[10px] px-[15px] flex items-center border-t-[5px] border border-[#EEEEEE] border-t-[#DB4965] text-[#888888]'>
                                        <div className='mr-[5px]'>

                                            <Icon path={mdiClockOutline} size={0.7} className='text-[16px]  text-[#888888]' />
                                        </div>
                                        <div className='truncate flex'>
                                            <span className='text-[16px]  text-[#888888]'>19h00</span>
                                            <span className='text-[16px] truncate ml-[5px] text-[#888888]'>- Dinner</span>
                                        </div>
                                    </div>
                                    <div className='text-[16px] rounded-[5px] py-[10px] px-[15px] flex items-center border-t-[5px] border border-[#EEEEEE] border-t-[#1AB394] text-[#888888]'>
                                        <div className='mr-[5px]'>

                                            <Icon path={mdiClockOutline} size={0.7} className='text-[16px]  text-[#888888]' />
                                        </div>
                                        <div className='truncate flex'>
                                            <span className='text-[16px]  text-[#888888]'>12h00</span>
                                            <span className='text-[16px] truncate ml-[5px] text-[#888888]'>- Lunch</span>
                                        </div>
                                    </div>
                                    <div className='text-[16px] rounded-[5px] py-[10px] px-[15px] flex items-center border-t-[5px] border border-[#EEEEEE] border-t-[#1AB394] text-[#888888]'>
                                        <div className='mr-[5px]'>

                                            <Icon path={mdiClockOutline} size={0.7} className='text-[16px]  text-[#888888]' />
                                        </div>
                                        <div className='truncate flex'>
                                            <span className='text-[16px]  text-[#888888]'>22h00</span>
                                            <span className='text-[16px] truncate ml-[5px] text-[#888888]'>- Supper</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-end'>
                                    <h3 className='mt-[20px] flex-1 mb-[15px] text-[17px] font-[300] text-left'>Water intake</h3>
                                    <span className='text-[#AAAAAA] text-[16px]'>1.79/2 L</span>
                                </div>
                                <div className='h-[20px] bg-[#f5f5f5] overflow-hidden rounded w-full'>
                                    <div style={{ width: '89.5%' }} className='custom-progress-bar h-full'>

                                    </div>
                                </div>
                                <h3 className='mt-[20px] mb-[15px] text-[17px] font-[300] text-left'>Food diary</h3>
                                <div className='grid grid-cols-5'>
                                    <div className='relative w-full h-full max-w-[105px] max-h-[105px]'>
                                        <CircularProgressbar  value={12} styles={buildStyles({ pathColor: '#7FD18C' ,trailColor: '#d6d6d6', backgroundColor: '#f3f3f4', })} />
                                        <div className='absolute flex items-center justify-center inset-0' >
                                            <div className='text-center'>
                                                <span className='text-[13px] font-semibold'>1915 kcal</span>
                                                <div className='border border-[#D2D2D2]/[50%] w-[40px] mx-auto my-[3xp]'>

                                                </div>
                                                <span className='text-[#888888] text-[11px] '>2127 kcal</span>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </MainLayout>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-[10000]" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full justify-center py-[30px] text-center items-start">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded bg-white  text-left shadow-modal transition-all  w-full max-w-[600px] ">
                                    <button onClick={() => setOpen(false)} className='absolute top-[10px] right-[10px]'>
                                        <Icon path={mdiCloseThick} size={0.6} className='opacity-[40%]' />
                                    </button>
                                    <div className='p-[25px] text-center'>
                                        <h1 className='text-[28.5px]'>Food diary status</h1>
                                        <span className='text-[13px] '>How to read the food diary status</span>
                                    </div>
                                    <div className='pb-[4px] px-[30px]'>
                                        {status.map((item, index) => {
                                            return (
                                                <div key={index} className='flex mb-[16px] items-center gap-[10px]'>
                                                    <div style={{ backgroundColor: `${item.color}` }} className='w-[85px] h-[40px] rounded '>

                                                    </div>
                                                    <div>
                                                        <h5 className='text-[13px] font-semibold'>{item.title}</h5>
                                                        <span className='text-[13px] font-[300]'>{item.description}</span>
                                                    </div>
                                                </div>
                                            )
                                        })
                                        }
                                    </div>

                                    <div className="px-[30px] pb-[15px] text-end">
                                        <button
                                            type="button"
                                            className=" border border-[#EEEEEE]  rounded bg-[#FFFFFF] px-3 py-1.5 text-sm hover:bg-[#FAFAFB] focus-visible:outline-0 focus-visible:outline-offset-0"
                                            onClick={() => setOpen(false)}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    )
}

export default Followup
