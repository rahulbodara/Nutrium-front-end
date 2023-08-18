import { Dialog, Transition } from '@headlessui/react'
import { mdiMagnify } from '@mdi/js'
import Icon from '@mdi/react'
import React, { Fragment } from 'react'
import { IoCloseSharp } from 'react-icons/io5'

const ImportClients = ({ setOpenModal, openModal }) => {
    return (
        <div>
            <Transition appear show={openModal} as={Fragment}>
                <Dialog as="div" className="relative z-[9999]" onClose={setOpenModal}>
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
                                        <button onClick={() => setOpenModal(false)} className='absolute right-[10px] top-[10px]'>
                                            <IoCloseSharp className='text-[18px]' />
                                        </button>
                                        <h2 className='text-[28px] leading-[40px] text-center'>Import clients</h2>
                                        <span className='text-[13px] text-center block' >Quickly register new clients by importing your existing files</span>
                                    </div>
                                    <div className='px-[30px] pb-[20px]'>
                                        <div className='grid lg:grid-cols-1 grid-cols-3 lg:gap-[0px] gap-[30px]'>
                                            <div className='bg-[#1AB394] border border-[#1AB394] p-[9px] text-center text-white rounded-[5px] '>
                                                <span className='font-semibold text-[14px]'>

                                                    1. Import file
                                                </span>
                                            </div>
                                            <div className='bg-[#fff] border border-[#EEEEEE] p-[9px] text-center rounded-[5px] '>
                                                <span className='font-normal text-[14px]'>

                                                    2. Map the columns to the data
                                                </span>
                                            </div>
                                            <div className='bg-[#fff] border border-[#EEEEEE] p-[9px] text-center rounded-[5px] '>
                                                <span className='font-normal text-[14px]'>

                                                    3. Check import status
                                                </span>
                                            </div>
                                        </div>
                                        <div className='mt-[26px]'>
                                            <div className='flex mb-[5px]'>
                                                <div className='lg:min-w-[100px] min-w-[200px] border-r-0 px-[9px] py-2.5 text-[14px] bg-[#FAFAFB] border border-[#EEEEEE]'>
                                                    File
                                                </div>
                                                <div className='full flex items-center flex-1'>
                                                    <input id='browse-file' type="file" className='hidden' name="patients_file[file]" />
                                                    <label for="browse-file" className='border text-[#717171] h-full w-full border-[#EEEEEE] py-[4px] flex items-center px-[9px]'>Select a file to import</label>

                                                </div>
                                                <div className='rounded-r-[3px] bg-[#FAFAFB] border border-l-0 text-[#1AB394] border-[#EEEEEE] py-[7px] px-[7.5px]'>
                                                    <Icon path={mdiMagnify} size={1} />
                                                </div>
                                            </div>
                                            <span>You can upload files in the following formats: CSV, TSV and XLS/XLSX (Excel)</span>
                                        </div>
                                        <div className='bg-[#FAFAFB] mb-[13px] mt-[20px] text-[#676A6C] border border-[#EEEEEE] p-[15px] rounded'>
                                            <p>
                                                The file must have, at least, the name, gender, birthdate and email address for each client.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex items-center px-[30px] pb-[15px] justify-between'>
                                        <button className='px-3 hover:bg-[#FAFAFB] trnasition duration-200 border rounded-[3px] text-[14px] py-[6px]'>
                                            Cancel
                                        </button>
                                        <button className='px-3 rounded-[3px] border hover:bg-[#18a689] border-[#1AB394] bg-[#1AB394] text-[#FFFFFF] text-[14px] py-[6px]'>
                                            Continue
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

export default ImportClients
