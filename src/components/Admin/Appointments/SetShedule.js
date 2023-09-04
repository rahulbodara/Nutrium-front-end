import { Dialog, Transition } from '@headlessui/react'
import { mdiExitToApp, mdiMinusCircleOutline, mdiPlusCircleOutline } from '@mdi/js';
import Icon from '@mdi/react';
import React, { Fragment, useEffect, useState } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import Switcher from '../common/Switcher';
import { Tooltip as ReactTooltip } from "react-tooltip";


const dayList = [
    {
        id: 1,
        label: 'Monday',
        isChecked: false
    },
    {
        id: 2,
        label: 'Tuseday',
        isChecked: false
    },
    {
        id: 3,
        label: 'Wednesday',
        isChecked: false
    },
    {
        id: 4,
        label: 'Thursday',
        isChecked: false
    },
    {
        id: 5,
        label: 'Friday',
        isChecked: false
    },
    {
        id: 6,
        label: 'Saturday',
        isChecked: false
    },
    {
        id: 7,
        label: 'Sunday',
        isChecked: false
    },
]

const SetShedule = ({ isSheduleOpen, setIsSheduleOpen }) => {
    const [days, setDays] = useState();

    useEffect(() => {
        setDays(dayList)
    }, []);

    const toggleCheckbox = (id) => {
        setDays((prevDays) =>
            prevDays.map((day) =>
                day.id === id ? { ...day, isChecked: !day.isChecked } : day
            )
        );
    };

    const isAtLeastOneDayChecked = days?.some(day => day.isChecked);
   
    return (
        <>
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
                            <div className="flex min-h-full items-start justify-center sm:p-5 p-10 md:p-[10px] text-center">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Dialog.Panel className="w-full max-w-[600px] md:max-w-full transform overflow-hidden rounded bg-white  text-left align-middle shadow-xl transition-all">
                                        <div className='p-[25px] relative'>
                                            <button onClick={() => setIsSheduleOpen(false)} className='absolute right-[10px] top-[10px] outline-none'>
                                                <IoCloseSharp className='text-[18px]' />
                                            </button>
                                            <h2 className='text-[28px] leading-[40px] text-center'>Set schedule</h2>
                                            <span className='text-[13px] text-center block' >Set schedule for each day of the week</span>
                                        </div>
                                        <div className='py-[20px]'>
                                            {
                                                days && days?.map((day, index) => {
                                                    return (
                                                        <div className={`px-[30px] py-[20px] bg-[#fafafb] border-t-[1px] border-[#DDDDDD] ${index === dayList.length - 1 ? 'border-b-[1px]' : ''}`} key={index}>
                                                            <div className='flex items-center'>
                                                                <div className='flex-grow flex items-center'>
                                                                    <div className='flex-grow flex items-center'>
                                                                        <div className='flex-grow text-[#aaaaaa] text-[14px] font-[600]'>{day.label}</div>
                                                                    </div>
                                                                   
                                                                    <div className={`ml-[10px] p-[6px_12px] ${isAtLeastOneDayChecked ? "block" : 'hidden'}`}>
                                                                        <button className='p-[6px_8px] bg-white border-[1px] border-[#eeeeee] rounded-[3px] inline-block text-center whitespace-nowrap align-middle cursor-pointer select-none' data-tooltip-id='importIcon'>
                                                                            <Icon path={mdiExitToApp} className="rotate-[90deg]" size={"18px"} color='#676A6C' />
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                                <div className='text-end'>
                                                                    <Switcher id={day.id} label1="Enabled" label2="Disabled" checked={day.isChecked} onChange={() => toggleCheckbox(day.id)} />
                                                                </div>
                                                            </div>
                                                            <div className={`mt-[20px] ${day.isChecked ? 'block' : 'hidden'}`}>
                                                                <div className='flex'>
                                                                    <div className='flex flex-grow'>
                                                                        <div className='hidden flex-grow basis-0 mr-[10px] w-[100px]'>
                                                                            <div className='text-[12px] font-light ml-[3px] mb-[3px]'>Workplace</div>
                                                                        </div>
                                                                        <div className='flex-grow basis-0 mr-[10px] w-[100px]'>
                                                                            <div className='text-[12px] font-light ml-[3px] mb-[3px]'>Start time</div>
                                                                            <div>
                                                                                <input type={"time"} className='text-[14px] h-[32px] p-[5px] rounded-[5px] border-solid !border-[#AAAAAA] text-center focus:ring-0 bg-white input-transition focus:!border-[#1ab394] w-full' />
                                                                            </div>
                                                                        </div>
                                                                        <div className='flex-grow basis-0 w-[100px]'>
                                                                            <div className='text-[12px] font-light ml-[3px] mb-[3px]'>End time</div>
                                                                            <div>
                                                                                <input type={"time"} className='text-[14px] h-[32px] p-[5px] rounded-[5px] border-solid !border-[#AAAAAA] text-center focus:ring-0 bg-white input-transition focus:!border-[#1ab394] w-full' />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='flex items-center'>
                                                                        <div className='mt-[20px] ml-[10px] cursor-pointer' data-tooltip-id='minusIcon'><Icon path={mdiMinusCircleOutline} color="#DB4965" size={"18px"} /></div>
                                                                    </div>
                                                                    <div className='flex items-center'>
                                                                        <div className='mt-[20px] ml-[10px] cursor-pointer' data-tooltip-id='plusIcon'><Icon path={mdiPlusCircleOutline} color="#1AB394" size={"18px"} /></div>
                                                                    </div>
                                                                </div>
                                                                <div className='hidden'></div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className='flex items-center px-[30px] pb-[15px] justify-end'>
                                            <button className='px-3 hover:bg-[#FAFAFB] trnasition duration-200 border rounded-[3px] text-[14px] py-[6px]' onClick={() => setIsSheduleOpen(false)}>
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
            <ReactTooltip
                id="importIcon"
                place="top"
                content="Import"
                className='!p-[3px_8px] !bg-[#2f4050] opacity-[.9] z-[99999]'
            />
            <ReactTooltip
                id="minusIcon"
                place="top"
                content="Remove time frame"
                className='!p-[3px_8px] !bg-[#2f4050] opacity-[.9] z-[99999]'
            />
            <ReactTooltip
                id="plusIcon"
                place="top"
                content="Add new time frame"
                className='!p-[3px_8px] !bg-[#2f4050] !w-[100px] text-center opacity-[.9] z-[99999]'
            />
        </>
    )
}

export default SetShedule