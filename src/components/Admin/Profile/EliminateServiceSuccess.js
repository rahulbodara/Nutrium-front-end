import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'

const EliminateServiceSuccess = ({isOpen,setIsOpen}) => {
  return (
    <div className="modal">
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-[9999]"
                    onClose={setIsOpen}
                >
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
                        <div className="flex min-h-full items-start justify-center sm:p-2 p-10 md:p-3 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-[600px] p-[17px] pb-[25px] mt-[80px] md:max-w-full transform overflow-hidden rounded bg-white  text-left align-middle shadow-xl transition-all">
                                    <div>
                                      <div className='w-20 h-20 relative box-content mx-auto my-5 p-0 rounded-[50%] border-4 border-solid border-[#A5DC86] sa-success'>
                                          <div className='w-[25px] rotate-45 left-3.5 top-[46px] h-[5px] bg-[#A5DC86] block absolute z-[2] rounded-sm animateSuccessTip'></div>
                                          <div className='w-[47px] -rotate-45 right-2 top-[38px] h-[5px] bg-[#A5DC86] block absolute z-[2] rounded-sm animateSuccessLong'></div>
                                          <div className='w-20 h-20 box-content absolute z-[2] rounded-[50%] border-4 border-solid border-[rgba(165,220,134,0.2)] -left-1 -top-1'></div>
                                          <div className='w-[5px] h-[90px] bg-[white] absolute z-[1] -rotate-45 left-7 top-2'></div>
                                      </div>
                                      <h2 className="text-[#575757] text-3xl text-center normal-case relative leading-10 block mx-0 my-[25px] p-0;">
                                          Service successfully eliminated
                                      </h2>
                                      <div className="text-center">
                                                <button className="inline-block bg-[#8cd4f5] hover:bg-[#8cd4f5] text-[17px] font-medium mt-[26px] mb-0 mx-[5px] px-8 py-2.5 text-white" onClick={() => setIsOpen(false)}>Ok</button>
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

export default EliminateServiceSuccess