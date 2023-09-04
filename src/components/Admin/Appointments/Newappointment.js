import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment, useState } from 'react'
import { FaUser, FaUserPlus } from 'react-icons/fa';
import { IoMdCalendar } from 'react-icons/io';
import { IoCloseSharp } from "react-icons/io5";
import { MdLocationOn } from 'react-icons/md';
import SelectMenu from '../common/SelectMenu';
import clientPro from '../../../../public/image/clientprof.png';
import Icon from '@mdi/react';
import { mdiAccount, mdiAccountPlus, mdiCalendarBlank, mdiCalendarCheck, mdiCalendarClock, mdiCalendarToday, mdiClock, mdiClose, mdiInformationOutline, mdiLinkOff, mdiMapMarker, mdiMapMarkerRadius, mdiPlus, mdiVideo } from '@mdi/js';

const Newappointment = ({ isNewAppModal, setIsNewAppModal }) => {
    const [confirmationStatus, setConfirmationStatus] = useState('1');
    console.log("🚀 ~ file: Newappointment.js:18 ~ Newappointment ~ confirmationStatus:", confirmationStatus)
    const options = [
        {
            id: 1,
            option: 'ALL'
        },
        {
            id: 2,
            option: 'Active clients this month'
        },
        {
            id: 3,
            option: 'sdf'
        }
    ]

    const handleConfirmation = (e) => { 
        setConfirmationStatus(e.target.value)
     }
    return (
        <div>
            <Transition appear show={isNewAppModal} as={Fragment}>
                <Dialog as="div" className="relative z-[9999]" onClose={setIsNewAppModal}>
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
                                <Dialog.Panel className="w-full max-w-[900px] md:max-w-full transform overflow-hidden rounded bg-white  text-left align-middle shadow-xl transition-all">
                                    <div className='p-[25px] relative'>
                                        <button onClick={() => setIsNewAppModal(false)} className='absolute right-[10px] top-[10px] outline-none'>
                                            <IoCloseSharp className='text-[18px]' />
                                        </button>
                                        <h2 className='text-[28px] leading-[40px] text-center'>Schedule new appointment</h2>
                                        <span className='text-[13px] text-center block' >Information for scheduling a new appointment</span>
                                    </div>
                                    <div className='pb-[20px] px-[30px] relative'>
                                        <div>
                                            <div>
                                                <div>
                                                    <div className='pb-[20px]'>
                                                        <div className='row -mx-[15px]'>
                                                            <div className='w-1/2 float-left px-[15px]'>
                                                                <div className='bg-[#1AB394] text-white text-center overflow-hidden text-ellipsis p-[0.7em] block border box-border whitespace-nowrap rounded-[5px] border-solid border-[#EEEEEE]'>
                                                                    <div className='text-[1.1em] align-middle'>1. Select client</div>
                                                                </div>
                                                            </div>
                                                            <div className='w-1/2 float-left px-[15px]'>
                                                                <div className='bg-[#ffffff] text-center overflow-hidden text-ellipsis p-[0.7em] block border box-border whitespace-nowrap rounded-[5px] border-solid border-[#EEEEEE]'>
                                                                    <div className='text-[1.1em] align-middle'>2. Confirm scheduling information</div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className='hidden'>
                                                    <div className='flex mb-[15px]'>
                                                        <div className='mr-[10px] flex-grow'>
                                                            <input
                                                                type='text'
                                                                className='h-[34px] text-ellipsis input-transition bg-[white] bg-none border text-inherit block w-full px-3 py-1.5 rounded-[1px] border-solid border-[#e5e6e7] focus:border-[#1AB394] focus:ring-0 placeholder:text-[13px] placeholder:opacity-[0.6]'
                                                                placeholder='Search clients by name, occupation, identification number or contact...'
                                                            />
                                                        </div>
                                                        <SelectMenu option={options}  />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <div className='my-[5px]'>
                                                            <div className="flex border group cursor-pointer rounded-[1px] border-solid border-[#eeeeee] hover:border-[#1AB394] p-[10px]">
                                                                <div className="relative">
                                                                    <Image
                                                                        src={clientPro}
                                                                        className="rounded-full max-h-[80px] max-w-[80px]"
                                                                    />
                                                                </div>
                                                                <div className="flex flex-col flex-1 pl-3">
                                                                    <h1 className="text-[16px] text-[#676a6c] group-hover:text-[#1AB394]">
                                                                        Example client
                                                                    </h1>
                                                                    <span className="text-[13px] opacity-[0.8] text-[#676a6c]">
                                                                        Occupation example
                                                                    </span>
                                                                    <div className="flex gap-1">
                                                                        <div className="bg-[#E0FAF1] flex items-center justify-center w-4 h-4 rounded-full">
                                                                            <IoMdCalendar className="text-[#12896D] scale-x-[-1]" />
                                                                        </div>
                                                                        <span className="text-[11px] opacity-[0.8] text-[#676a6c]">
                                                                            No appointments yet
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="">
                                                                    <Icon path={mdiAccount} size="18px" className="text-[#AAAAAA]" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            onClick={() => setIsOpen(true)}
                                                            className="border rounded-[1px] cursor-pointer border-solid border-[#eeeeee] group hover:border-[#1AB394] flex p-5 gap-6 text-center items-center "
                                                        >
                                                            <Icon path={mdiAccountPlus} size="48px" className="text-[#888888] group-hover:text-[#1AB394]" />
                                                            <span className="text-[16px] group-hover:text-[#1AB394] text-[#888888] font-normal">
                                                                Add new client
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <form>
                                                        <div className='row -mx-[15px]'>
                                                            <div className='px-[15px] float-left w-1/2'>
                                                                <label className='inline-block max-w-full mb-[5px] font-[700]'>Client</label>
                                                                <div className='h-[74px] p-[13px] mb-[15px] border-[1px] border-[#eeeeee] flex'>
                                                                    <div className='h-[45px] mr-[15px] relative'>
                                                                        <Image
                                                                            src={clientPro}
                                                                            className="rounded-full max-h-[45px] max-w-[45px] border-[1px] border-[#eeeeee] align-middle"
                                                                        />
                                                                    </div>
                                                                    <div className='align-middle relative flex flex-col flex-grow min-w-0'>
                                                                        <div className='flex gap-[8px]'>
                                                                            <h3 className='pr-[25px] break-words text-[16px]'>Example client</h3>
                                                                        </div>
                                                                        <Icon path={mdiAccount} color="#aaaaaa" size="18px" className='absolute top-0 right-0' />
                                                                        <div className='h-[18px] overflow-hidden whitespace-nowrap text-ellipsis font-[300]'>Occupation example</div>
                                                                        <div className='hidden mt-[4px] font-[300]'>
                                                                            <div className='overflow-hidden whitespace-nowrap text-ellipsis text-[85%]'>
                                                                                <div className='flex gap-[4px]'>
                                                                                    <Icon path={mdiCalendarToday} size="16px" className='bg-[#E0FAF1] text-[#12896D] align-middle mr-[3px] rounded-[50%]' />
                                                                                    No appointments yet
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='px-[15px] float-left w-1/2'>
                                                                <div>
                                                                    <label className='inline-block max-w-full mb-[5px] font-[700]'>Video consultation</label>
                                                                </div>
                                                                <div className='mb-[15px]'>
                                                                    <div className='mb-[6px]'>
                                                                        <div className='relative table border-separate w-full mb-[6px]'>
                                                                            <div className='bg-[white] w-[43px] table-cell border text-inherit text-sm font-normal leading-none text-center px-3 py-1.5 rounded-[1px] border-solid border-[#e5e6e7] whitespace-nowrap align-middle'>
                                                                                <Icon path={mdiVideo} size="18px" color='#676a6c' />
                                                                            </div>
                                                                            <select className='h-[34px] text-[13px] focus:ring-0 leading-[1.43] input-transition focus:border-[#1ab394] table-cell relative z-[2] float-left w-full border text-inherit px-3 py-1.5 rounded-[1px] border-solid border-[#e5e6e7]'>
                                                                                <option>Without video call</option>
                                                                                <option>Google Meet</option>
                                                                                <option>Zoom</option>
                                                                                <option>Other services</option>
                                                                            </select>
                                                                        </div>
                                                                        <div className='relative table border-separate w-full'>
                                                                            <div className='bg-[white] w-[43px] table-cell border text-inherit text-sm font-normal leading-none text-center px-3 py-1.5 rounded-[1px] border-solid border-[#e5e6e7] whitespace-nowrap align-middle'>
                                                                                <Icon path={mdiLinkOff} size="18px" color='#676a6c' />
                                                                            </div>
                                                                            <input className='h-[34px] text-[13px] focus:ring-0 leading-[1.43] input-transition focus:border-inherit table-cell relative z-[2] float-left w-full border text-inherit px-3 py-1.5 rounded-[1px] border-solid border-[#e5e6e7] cursor-not-allowed' placeholder='Not available in this option' readOnly />

                                                                            <div className='bg-[white] w-[43px] table-cell border text-inherit text-sm font-normal leading-none text-center px-3 py-1.5 rounded-[1px] border-solid border-[#e5e6e7] whitespace-nowrap align-middle'>
                                                                                <Icon path={mdiInformationOutline} size="18px" color='#676a6c' />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='row -mx-[15px]'>
                                                            <div className='px-[15px] float-left w-1/2'>
                                                                <div className='mb-[15px]'>
                                                                    <label className='inline-block max-w-full mb-[5px] font-[700]'> Start of appointment</label>
                                                                    <div className='relative table border-separate w-full mb-[6px]'>
                                                                        <div className='bg-[white] w-[43px] table-cell border text-inherit text-sm font-normal leading-none text-center px-3 py-1.5 rounded-[1px] border-solid border-[#e5e6e7] whitespace-nowrap align-middle'>
                                                                            <Icon path={mdiCalendarClock} size="18px" color='#676a6c' />
                                                                        </div>
                                                                        <input type="datetime-local" className='h-[34px] text-[13px] focus:ring-0 leading-[1.43] input-transition focus:border-[#1ab394] table-cell relative z-[2] float-left w-full border text-inherit px-3 py-1.5 rounded-[1px] border-solid border-[#e5e6e7]' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='px-[15px] float-left w-1/2'>
                                                                <div className='mb-[15px]'>
                                                                    <label className='inline-block max-w-full mb-[5px] font-[700]'>End of appointment</label>
                                                                    <div className='relative table border-separate w-full mb-[6px]'>
                                                                        <div className='bg-[white] w-[43px] table-cell border text-inherit text-sm font-normal leading-none text-center px-3 py-1.5 rounded-[1px] border-solid border-[#e5e6e7] whitespace-nowrap align-middle'>
                                                                            <Icon path={mdiCalendarClock} size="18px" color='#676a6c' />
                                                                        </div>
                                                                        <input type="datetime-local" className='h-[34px] text-[13px] focus:ring-0 leading-[1.43] input-transition focus:border-[#1ab394] table-cell relative z-[2] float-left w-full border text-inherit px-3 py-1.5 rounded-[1px] border-solid border-[#e5e6e7]' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='row -mx-[15px]'>
                                                            <div className='px-[15px] float-left w-1/2'>
                                                                <div>
                                                                    <label className='inline-block max-w-full mb-[5px] font-[700]'>Appointment status</label>
                                                                </div>
                                                                <div className='mb-[15px]'>
                                                                    <div className='mb-[6px]'>
                                                                        <div className='relative table border-separate w-full mb-[6px]'>
                                                                            <div className='bg-[white] w-[43px] table-cell border text-inherit text-sm font-normal leading-none text-center px-3 py-1.5 rounded-[1px] border-solid border-[#e5e6e7] whitespace-nowrap align-middle'>
                                                                                <Icon path={confirmationStatus === '0' ? mdiCalendarCheck : mdiCalendarBlank} size="18px" color='#676a6c' />
                                                                            </div>
                                                                            <select className='h-[34px] text-[13px] focus:ring-0 leading-[1.43] input-transition focus:border-[#1ab394] table-cell relative z-[2] float-left w-full border text-inherit px-3 py-1.5 rounded-[1px] border-solid border-[#e5e6e7]' defaultValue={confirmationStatus} onChange={handleConfirmation}>
                                                                                <option value={'0'}>Confirmed</option>
                                                                                <option value={'1'}>Not confirmed</option>
                                                                            </select>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='px-[15px] float-left w-1/2'>
                                                                <div className='mb-[15px]'>
                                                                    <label className='inline-block max-w-full mb-[5px] font-[700]'>End of appointment</label>
                                                                    <div className='relative table border-separate w-full mb-[6px]'>
                                                                        <div className='bg-[white] w-[43px] table-cell border text-inherit text-sm font-normal leading-none text-center px-3 py-1.5 rounded-[1px] border-solid border-[#e5e6e7] whitespace-nowrap align-middle'>
                                                                            <Icon path={mdiMapMarkerRadius} size="18px" color='#676a6c' />
                                                                        </div>
                                                                        <input type="text" readOnly placeholder='sdf' className='h-[34px] text-[13px] focus:ring-0 leading-[1.43] input-transition focus:border-inherit table-cell relative z-[2] float-left w-full border text-inherit px-3 py-1.5 rounded-[1px] border-solid border-[#e5e6e7] cursor-not-allowed' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='row -mx-[15px] mb-[10px]'>
                                                            <div className='px-[15px] float-left w-full flex justify-between'>
                                                                <div className='mb-[5px] font-[700] cursor-pointer hover:text-[#1AB394]'>Add scheduling notes</div>
                                                                <div className='flex'><Icon path={mdiPlus} size="18px" color='#676a6c' /></div>
                                                            </div>
                                                            <div className='px-[15px] float-left w-full flex justify-between'>
                                                                <div className='mb-[5px] font-[700] cursor-pointer hover:text-[#1AB394]'>Scheduling notes</div>
                                                                <div className='flex mb-[5px] cursor-pointer text-[#CC5965] group'>
                                                                    <div className='text-[#CC5965] hidden group-hover:block'>Remove</div>
                                                                    <Icon path={mdiClose} size="18px" className='text-[#676a6c] group-hover:text-[#CC5965]' />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='row -mx-[15px]'>
                                                            <div className='mb-[5px] px-[15px] float-left w-full'>
                                                            <textarea className='h-[34px] text-[13px] focus:ring-0 leading-[1.43] input-transition focus:border-[#1ab394] table-cell relative z-[2] float-left w-full border text-inherit px-3 py-1.5 rounded-[1px] border-solid border-[#e5e6e7]' rows="2" cols="2">
                                                            </textarea>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex items-center px-[30px] pb-[15px]'>
                                        <button className='px-3 hover:bg-[#FAFAFB] trnasition duration-200 border rounded-[3px] text-[14px] py-[6px]' onClick={() => setIsNewAppModal(false)}>
                                            Back
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

export default Newappointment