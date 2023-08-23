import { Dialog, Transition } from '@headlessui/react'
import { mdiAccount, mdiAt, mdiCalendar, mdiClipboardAccount, mdiExitToApp, mdiFlagVariant, mdiHumanMaleFemale, mdiInformationOutline, mdiMapMarker, mdiMapMarkerRadius, mdiPhone } from '@mdi/js';
import Icon from '@mdi/react';
import React, { Fragment, useState } from 'react'
import { BiSolidUser } from 'react-icons/bi';
import { IoCloseSharp } from "react-icons/io5";
import DatePicker from "react-datepicker";
import Switcher from '../common/Switcher';

const SetShedule = ({ isSheduleOpen, setIsSheduleOpen }) => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div>
            <Transition appear show={isSheduleOpen} as={Fragment}>
                <Dialog as="div" className="relative z-[9999]" onClose={setIsSheduleOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-50" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-start justify-center sm:p-5 p-10 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-[896px] transform overflow-hidden rounded bg-white  text-left align-middle shadow-xl transition-all">
                                    <div className='p-[25px] relative'>
                                        <button onClick={() => setIsSheduleOpen(false)} className='absolute right-[10px] top-[10px]'>
                                            <IoCloseSharp className='text-[18px]' />
                                        </button>
                                        <h2 className='text-[28px] leading-[40px] text-center'>Set schedule</h2>
                                        <span className='text-[13px] text-center block' >Set schedule for each day of the week</span>
                                    </div>
                                    <div>
                                        <div className='px-[30px] py-[20px] bg-[#fafafb] border-t-[1px] border-[#DDDDDD]'>
                                            <div className='flex items-center'>
                                                <div className='flex-grow flex items-center'>
                                                    <div className='flex-grow flex items-center'>
                                                        <div className='flex-grow text-[#aaaaaa] text-[14px] font-[600]'>Monday</div>
                                                    </div>
                                                    <div className='ml-[10px]'>
                                                        <button className='p-[6px_8px] bg-white border-[1px] border-[#eeeeee] rounded-[3px] inline-block text-center whitespace-nowrap align-middle cursor-pointer select-none'>
                                                            <Icon path={mdiExitToApp} className="rotate-[90deg]" size={"18px"} color='#676A6C' />
                                                        </button>
                                                    </div>
                                                </div>
                                                <div></div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className='flex items-center px-[30px] pb-[15px] justify-end'>
                                        <button className='px-3 hover:bg-[#FAFAFB] trnasition duration-200 border rounded-[3px] text-[14px] py-[6px]'>
                                            Cancel
                                        </button>
                                        <button className='px-3 ml-[5px] rounded-[3px] border hover:bg-[#18a689] border-[#1AB394] bg-[#1AB394] text-[#FFFFFF] text-[14px] py-[6px]'>
                                            Save
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    )
}

export default SetShedule