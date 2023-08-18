import React, { Fragment, useState } from 'react'
import Icon from '@mdi/react'
import { mdiAccount, mdiCakeVariant, mdiCamera, mdiChevronDown, mdiInformationOutline, mdiPhone } from '@mdi/js'
import Steps from '@/components/Admin/Clients/Information/Steps'
import MainLayout from '@/components/Admin/MainLayout';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import 'moment/locale/en-gb';
import { mdiHelp } from '@mdi/js';
import { IoHelpOutline } from 'react-icons/io5';
import { Dialog, Transition } from '@headlessui/react'

const localizer = momentLocalizer(moment);

const Followup = () => {
    const [open, setOpen] = useState(false)
    const events = [
        {
            title: 'Event 1',
            start: new Date(),
            end: new Date(),
        },
    ];
    return (
        <div>
            <MainLayout head={"Follow-up"} text={"Check your clients' progress"}>
                <div className='mt-[-20px]'>
                    <div className=' mx-[-15px]'>
                        <div className='p-[24px] shadow-box1 bg-[#FFFFFF]'>
                            <div className='md:block flex items-center'>
                                <div className='flex justify-between items-center'>
                                    <div className='min-w-[80px] h-[80px] group overflow-hidden mr-[24px] relative rounded-full'>
                                        <img src="/image/male_thumb.png" className='min-w-[80px] h-[80px] rounded-full' />
                                        <button className='text-[35px] text-white absolute bg-black/[30%] group-hover:flex hidden transition duration-300 items-center justify-center inset-0'>
                                            <Icon path={mdiCamera} size={1.5} />
                                        </button>
                                    </div>
                                    <button className='mb-[16px] hidden md:block'>
                                        <Icon className='text-[#AAAAAA] text-[16px]' path={mdiAccount} size={1} />
                                    </button>
                                </div>
                                <div className='w-full md:mt-[24px] mt-0'>
                                    <div className='flex justify-between w-full items-center'>
                                        <h2 className='mb-2 text-[20px]'>Maulik Kanani</h2>
                                        <button className='mb-[16px] md:hidden block'>
                                            <Icon className='text-[#AAAAAA] text-[16px]' path={mdiAccount} size={1} />
                                        </button>
                                    </div>
                                    <div className='2lg:block flex justify-between items-center'>
                                        <div className='md:block flex gap-[24px]'>
                                            <div className='flex items-center w-auto 2lg:w-1/2 md:w-full'>
                                                <Icon className='text-[#1AB394] mr-[8px]' path={mdiPhone} size={0.7} />
                                                <span className='text-[#888888] font-[300] text-[14px]'>094 275 99 609</span>
                                            </div>
                                            <div className='flex items-center w-auto 2lg:w-1/2 md:w-full'>
                                                <Icon className='text-[#1AB394] mr-[8px]' path={mdiCakeVariant} size={0.8} />
                                                <span className='text-[#888888] text-[14px]'>01/30/2018 (5 years)</span>
                                            </div>
                                        </div>
                                        <div className='2lg:hidden flex items-center justify-end'>
                                            <button className='text-[#1AB394] border border-[#1AB394] hover:text-white rounded-[3px] px-[10px] py-[5px] trnasition duration-200 hover:bg-[#1AB394]'>
                                                Send message
                                            </button>
                                            <button className=' border border-[#1AB394] text-white rounded-[3px] ml-2 px-[10px] py-[5px] hover:bg-[#18a689] hover:border-[#18a689] trnasition duration-200 bg-[#1AB394]'>
                                                Schedule appointment
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='hidden 2lg:flex items-center w-full mt-[24px]'>
                                <button className='text-[#1AB394] border border-[#1AB394] hover:text-white rounded-[3px] px-[10px] py-[5px] trnasition duration-200 hover:bg-[#1AB394] w-full'>
                                    Send message
                                </button>
                                <button className=' border border-[#1AB394] text-white rounded-[3px] ml-2 px-[10px] py-[5px] hover:bg-[#18a689] hover:border-[#18a689] trnasition duration-200 bg-[#1AB394] w-full'>
                                    Schedule appointment
                                </button>
                            </div>
                        </div>
                        <div className='bg-[#FAFAFB] hover:bg-[#f2f2f4] text-[13px] cursor-pointer text-[#717171] flex items-center justify-center gap-1 h-[40px] border border-[#EEEEEE] py-[11px] px-[24px]'>
                            <span>More Details</span> <Icon path={mdiChevronDown} size={0.8} />
                        </div>
                    </div>
                    <div className='pt-[25px] pb-[25px]'>
                        <div className='rounded-[5px] overflow-hidden bg-white flex shadow-box1'>
                            <div className='w-[54px] flex items-center justify-center bg-[#EA9F77] p-[15px] text-white'>
                                <Icon path={mdiInformationOutline} size={1} />
                            </div>
                            <div className='px-[35px] flex-1 2lg:block flex items-center justify-between py-[20px]'>
                                <div className='basis-[80%]'>
                                    <h3 className='text-[20px] leading-[20px] text-[#EA9F77] mb-2.5'>It's not possible to edit the current client's information</h3>
                                    <span className='text-[12px] text-[#888888]'>
                                        You can't edit any client because your subscription expired.
                                    </span>
                                </div>
                                <button className='text-white basis-[20%] active:shadow-innershdaow py-[6px] px-[12px] hover:bg-[#e8966a] bg-[#EA9F77] text-[14px] border border-[#EA9F77] rounded-[3px] mt-0 2lg:mt-[10px] 2lg:w-full w-auto'>
                                    Subscribe now
                                </button>
                            </div>
                        </div>
                        <div className='mt-[25px]'>
                            <Steps />
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-[30px]'>
                    <div className='rounded-[5px]  bg-white shadow-box1'>
                        <div className='p-[20px] pb-[15px]'>
                            <h3 className='text-[20px] leading-[24px] '>Follow-up</h3>
                            <span className='text-[12px] text-[#888888]/[70%]'>
                                Check your clients' daily progress
                            </span>
                        </div>
                        <div className='calender-main p-[0_20px_20px]'>
                            <Calendar
                                onNavigate={['TODAY', 'NEXT', 'PREV']}
                                views={["month", "week"]}
                                localizer={localizer}
                                events={events}
                                startAccessor="start"
                                endAccessor="end"
                                style={{ height: 500 }}
                            />
                            <div className='p-[10px_0px_5px] flex gap-[10px] text-[11px]'>
                                <div className='flex items-center gap-[5px]'><span className='bg-[#1AB394] w-[22px] h-[11px] block rounded-[3px]' /><p className='text-[#888] uppercase'>COMPLIANT</p></div>
                                <div className='flex items-center gap-[5px]'><span className='bg-[#EA9F77] w-[22px] h-[11px] block rounded-[3px]' /><p className='text-[#888] uppercase'>Struggling</p></div>
                                <div className='flex items-center gap-[5px]'><span className='bg-[#DB4965] w-[22px] h-[11px] block rounded-[3px]' /><p className='text-[#888] uppercase'>Not compliant</p></div>
                                <div className='flex items-center gap-[5px]'><span className='bg-[#DDDDDD] w-[22px] h-[11px] block rounded-[3px]' /><p className='text-[#888] uppercase'>Insufficient data</p></div>
                                <button onClick={() => setOpen(true)} className='bg-[#DDDDDD] w-[18px] h-[18px] rounded-full flex justify-center items-center text-[#676a6c]'><IoHelpOutline /></button>
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
                                            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
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
                                                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                                                        <div>
                                                            <h1>Food diary status</h1>
                                                        </div>
                                                        <div className="mt-5 sm:mt-6">
                                                            <button
                                                                type="button"
                                                                className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                                onClick={() => setOpen(false)}
                                                            >
                                                                Go back to dashboard
                                                            </button>
                                                        </div>
                                                    </Dialog.Panel>
                                                </Transition.Child>
                                            </div>
                                        </div>
                                    </Dialog>
                                </Transition.Root>
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>

        </div>
    )
}

export default Followup
