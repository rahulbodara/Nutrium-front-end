import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { handleApiCall } from "@/util/apiUtils";
import {
    GetAllServices,
    RemoveServices,
  } from "@/redux/action/profile.services";
import { useDispatch } from "react-redux";
import EliminateServiceSuccess from "./EliminateServiceSuccess";

const EliminateService = ({ eliminateModal, setEliminateModal, deleteId}) => {
const dispatch = useDispatch()
const [isOpen, setIsOpen] = useState(false)
const handleDeleteItem = async (id) => {
    // debugger;
    if(id){
      try {
        const success = await handleApiCall(
          dispatch,
          RemoveServices(id),
          'Secretaries Deleted Successfully'
        );
        if (success) {
          dispatch(GetAllServices());
          setEliminateModal(false);
          setIsOpen(!isOpen)
        }
      } catch (error) {
        console.error("Error deleting secretary:", error);
      }
    }
  }
  return (
    <>
        <div className="modal">
            <Transition appear show={eliminateModal} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-[9999]"
                    onClose={setEliminateModal}
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
                                <Dialog.Panel className="w-full max-w-[600px] mt-[80px] md:max-w-full transform overflow-hidden rounded bg-white  text-left align-middle shadow-xl transition-all">
                                    <div>
                                        <div className="p-[17px] pb-[25px] relative">
                                            <button
                                                onClick={() => setEliminateModal(false)}
                                                className="absolute right-[10px] top-[10px]"
                                            >
                                                <IoCloseSharp className="text-[18px] opacity-[0.4]" />
                                            </button>
                                            <h2 className="text-[#575757] text-3xl text-center normal-case relative leading-10 block mx-0 my-[25px] p-0;">

                                                Do you want to eliminate the service?
                                            </h2>
                                            <p className="text-[#797979] text-base text-center font-light relative float-none leading-[normal] m-0 p-0">
                                                This action cannot be undone and the service will be eliminated
                                            </p>
                                            <div className="text-center">
                                                <button className="inline-block bg-[#C1C1C1] text-[17px] font-medium mt-[26px] mb-0 mx-[5px] px-8 py-2.5 text-white" onClick={() => setEliminateModal(!eliminateModal)}>Cancel</button>
                                                <button className="inline-block text-[17px] font-medium mt-[26px] mb-0 mx-[5px] px-8 py-2.5 text-white hover:bg-[#d83c5a] bg-[#db4965] shadow-[rgba(219,73,101,0.8)_0px_0px_2px,rgba(0,0,0,0.05)_0px_0px_0px_1px_inset]"
                                                    onClick={(e) => {
                                                        e.preventDefault()
                                                        handleDeleteItem(deleteId)
                                                        setEliminateModal(false)
                                                    }}>Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
        <EliminateServiceSuccess isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default EliminateService;
