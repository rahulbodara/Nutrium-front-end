import { Dialog, Transition } from '@headlessui/react'
import { mdiCalendarCheck, mdiCalendarText } from '@mdi/js';
import Icon from '@mdi/react';
import React, { Fragment, useState } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import Modal from '../common/Modal';
import Newappointment from './Newappointment';


const SetDateModal = ({ isDateModalOpen, setIsDateModalOpen }) => {
  const [isNewAppModal, setIsNewAppModal] = useState(false)
  const openNewAppModal = () => { 
    setIsDateModalOpen(false),
    setIsNewAppModal(true);
   }
  return (
    <>
      <div>
        <Transition appear show={isDateModalOpen} as={Fragment}>
          <Dialog as="div" className="relative z-[9999]" onClose={setIsDateModalOpen}>
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
                      <button onClick={() => setIsDateModalOpen(false)} className='absolute right-[10px] top-[10px] outline-none'>
                        <IoCloseSharp className='text-[18px]' />
                      </button>
                      <h2 className='text-[28px] leading-[40px] text-center'>Set a date on your calendar</h2>
                      <span className='text-[13px] text-center block' >Schedule a new appointment on your calendar</span>
                    </div>
                    <div className='pb-[20px] px-[30px]'>
                      <div className='flex justify-center md:flex-wrap'>
                        <div className='mr-[20px] md:mr-0 md:mb-[25px] border w-1/2 md:w-auto text-center font-light rounded cursor-pointer px-5 py-[30px] border-solid border-[#DDDDDD] hover:bg-[#1AB394] hover:border-[#1AB394] group' onClick={openNewAppModal}>
                          <div className='mb-[5px]'><Icon path={mdiCalendarCheck} size="48px" className='text-[#1AB394] group-hover:text-white mx-auto' /></div>
                          <div className='text-[14px] mt-[10px] group-hover:text-white'>Schedule an appointment</div>
                          <div className='text-[14px] opacity-[0.6] group-hover:text-white'>Schedule an appointment with one of your clients</div>
                        </div>
                        <div className='ml-[5px] md:ml-0 border w-1/2 md:w-auto text-center font-light rounded cursor-pointer px-5 py-[30px] border-solid border-[#DDDDDD] hover:bg-[#2BA0CC] hover:border-[#2BA0CC] group'>
                          <div className='mb-[5px]'><Icon path={mdiCalendarText} size="48px" className='text-[#2BA0CC] group-hover:text-white mx-auto' /></div>
                          <div className='text-[14px] mt-[10px] group-hover:text-white'>Add an event</div>
                          <div className='text-[14px] opacity-[0.6] group-hover:text-white'>Add an event to block off time in your calendar</div>
                        </div>
                      </div>
                    </div>
                    <div className='p-[0_30px_15px]'></div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
      <Newappointment isNewAppModal={isNewAppModal} setIsNewAppModal={setIsNewAppModal} />
    </>
  )
}

export default SetDateModal