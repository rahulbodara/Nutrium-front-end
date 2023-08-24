import { Dialog, Transition } from '@headlessui/react'
import { mdiMapMarker, mdiWeb } from '@mdi/js';
import Icon from '@mdi/react';
import React, { Fragment, useState } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import ColorPickerField from '../common/ColorPickerField';
import CountrySelect from '../common/ContrySelect';
import InputField from '../common/InputField';
import SelectInput from '../common/SelectInput';
import Select from '../common/SelectInput';
import Switcher from '../common/Switcher';

const workplaceOption = [
    {
        id: 1,
        name: 'All workplaces',
        value: 'All workplaces'
    },
    {
        id: 2,
        name: 'online',
        value: 'online'
    }
];



const NewSecretaries = ({ isOpen, setIsOpen }) => {
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
                                <Dialog.Panel className="w-full max-w-[600px] md:max-w-full transform overflow-hidden rounded bg-white  text-left align-middle shadow-xl transition-all">
                                    <div className='p-[25px] pb-[48px] relative'>
                                        <button onClick={() => setIsOpen(false)} className='absolute right-[10px] top-[10px]'>
                                            <IoCloseSharp className='text-[18px] opacity-[0.4]' />
                                        </button>
                                        <h2 className='text-[28px] leading-[40px] text-center'>Register new secretary</h2>
                                        <span className='text-[13px] text-center block' >Set the name and email address of your secretary</span>
                                    </div>
                                    <div className='px-[30px] pb-[32px]'>
                                        <form>
                                            <div className='workplace-modal flex'>
                                                <div className='flex flex-col justify-center w-[130px]'>
                                                    <div className='w-[110px] h-[110px] flex items-center justify-center rounded-full  border border-[#eeeeee]'>
                                                        <img src='/image/girl.png' className='rounded-full cursor-pointer object-cover w-full h-full max-w-none max-h-none block align-middle' />
                                                    </div>
                                                </div>
                                                <div className='flex-grow flex-[1] min-w-0'>
                                                    <InputField labelStyle="min-w-[150px] flex-basis-[160px]" className="mt-[7px]" label="Name" />
                                                    <InputField labelStyle="min-w-[150px] flex-basis-[160px]" className="mt-[7px]" label="Email" />
                                                    <SelectInput labelStyle="min-w-[150px] flex-basis-[160px]" className="mt-[7px]" option={workplaceOption} label="workplace" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className='flex items-center px-[30px] pb-[15px] flex-wrap justify-between'>
                                        <div>
                                            <button className='px-3 hover:bg-[#FAFAFB] trnasition duration-200 border rounded-[3px] text-[14px] py-[6px] active:shadow-[0_2px_5px_rgba(0,0,0,0.15)_inset]' onClick={() => setIsOpen(false)}>
                                                Cancel
                                            </button>
                                        </div>
                                        <div>
                                            <button className='px-3 rounded-[3px] border hover:bg-[#18a689] border-[#1AB394] bg-[#1AB394] ml-[5px] text-[#FFFFFF] text-[14px] py-[6px]'>
                                                Save and send instructions
                                            </button>
                                        </div>
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

export default NewSecretaries