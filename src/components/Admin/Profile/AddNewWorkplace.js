import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import Switcher from '../common/Switcher';


const AddNewWorkplace = ({ isOpen, setIsOpen }) => {
  return (
    <div className='modal'>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-[9999]" onClose={setIsOpen}>
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
                                <Dialog.Panel className="w-full max-w-[900px] md:max-w-full transform overflow-hidden rounded bg-white  text-left align-middle shadow-xl transition-all">
                                    <div className='p-[25px] pb-[48px] relative'>
                                        <button onClick={() => setIsOpen(false)} className='absolute right-[10px] top-[10px]'>
                                            <IoCloseSharp className='text-[18px] opacity-[0.4]' />
                                        </button>
                                        <h2 className='text-[28px] leading-[40px] text-center'>New workplace</h2>
                                        <span className='text-[13px] text-center block' >Set a name, location, phone number, color and logo of your workplace</span>
                                    </div>
                                    <div className='px-[30px] pb-[20px]'>
                                        <form>
                                            <div className='workplace-modal flex'>
                                                <div className='flex flex-col items-center justify-center mr-[24px]'>
                                                    <div className='w-[136px] h-[136px] flex rounded-full self-center items-center justify-center border border-[#eeeeee]'>
                                                        <img src='/image/leaf.png' className='rounded-full cursor-pointer object-cover w-full h-full max-w-none max-h-none block align-middle' />
                                                    </div>
                                                    <div className='switcher'>
                                                        <Switcher />
                                                    </div>
                                                </div>
                                                <div></div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className='flex items-center px-[30px] pb-[15px] justify-end'>
                                        <button className='px-3 hover:bg-[#FAFAFB] trnasition duration-200 border rounded-[3px] text-[14px] py-[6px] active:shadow-[0_2px_5px_rgba(0,0,0,0.15)_inset]' onClick={() => setIsOpen(false)}>
                                            Cancel
                                        </button>
                                        <button className='px-3 rounded-[3px] border hover:bg-[#18a689] border-[#1AB394] bg-[#1AB394] ml-[5px] text-[#FFFFFF] text-[14px] py-[6px]'>
                                            Add
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

export default AddNewWorkplace