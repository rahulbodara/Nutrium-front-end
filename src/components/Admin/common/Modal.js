import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import { IoCloseSharp } from 'react-icons/io5'

const Modal = (props) => {
    return (
        <div>
            <Transition appear show={props.isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-[9999]" onClose={props.setIsOpen}>
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
                                <Dialog.Panel className={`w-full ${props?.className} transform rounded bg-white  text-left align-middle shadow-xl transition-all`}>
                                    <div className="p-[25px] relative">
                                        <button
                                            onClick={() => props.setIsOpen(false)}
                                            className="absolute right-[10px] top-[10px] outline-none"
                                        >
                                            <IoCloseSharp className="text-[18px]" />
                                        </button>
                                        <h2 className="text-[28px] leading-[40px] text-center">
                                            {props.title}
                                        </h2>
                                        <span className="text-[13px] text-center block">
                                            {props.subtitle}
                                        </span>
                                    </div>
                                    {props.children}

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    )
}

export default Modal
