import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useMemo, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import InputField from "../common/InputField";
import SelectInput from "../common/SelectInput";
import { useDispatch, useSelector } from "react-redux";
import { CreateSecretaries, GetAllSecreatries, SecreatriesDataEdit } from "@/redux/action/secretaries";
import { handleApiCall } from '../../../util/apiUtils'; // Adjust the path to match your file structure
import SelectField from "../common/SelectField";


const NewSecretaries = ({ isOpen, setIsOpen, editData, setEditData }) => {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState()
    const workSpaceData = useSelector((state) => state.Workplace?.workplaceData)
    console.log(workSpaceData, "formDataformDataformData");
    const handleSecreataries = async () => {
        try {
            const updatedFormData = {
                ...formData,
            };
            if (editData) {
                const success = await handleApiCall(
                    dispatch,
                    SecreatriesDataEdit(updatedFormData, editData._id),
                    'Secretaries Updated Successfully'
                );
                if (success) {
                    dispatch(GetAllSecreatries());
                    setIsOpen(false);
                }
            } else {
                const success = await handleApiCall(
                    dispatch,
                    CreateSecretaries(updatedFormData),
                    'Secretaries successfully created'
                );
                if (success) {
                    dispatch(GetAllSecreatries());
                    setIsOpen(false);
                }
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        if (editData) {
            setFormData({
                name: editData.name,
                email: editData.email,
                workplace: editData.workplace
            });
        }
    }, [editData]);

    useMemo(() => {
        setFormData({ ...formData, name: editData?.name, email: editData?.email, workplace: editData?.workplace })
        if (isOpen === false) {
            setFormData()
            setEditData()
        }
    }, [editData, isOpen])

    function HandleValue(params) {
        setFormData({ ...formData, workplace: params })
    }
    return (
        <div className="modal">
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
                                    <>
                                        <div className="p-[25px] pb-[48px] relative">
                                            <button
                                                onClick={() => setIsOpen(false)}
                                                className="absolute right-[10px] top-[10px] outline-none"
                                            >
                                                <IoCloseSharp className="text-[18px] opacity-[0.4]" />
                                            </button>
                                            <h2 className="text-[28px] leading-[40px] text-center">
                                                Register new secretary
                                            </h2>
                                            <span className="text-[13px] text-center block">
                                                Set the name and email address of your secretary
                                            </span>
                                        </div>
                                        <div className="px-[30px] pb-[32px]">
                                            <form>
                                                <div className="workplace-modal flex">
                                                    <div className="flex flex-col justify-center w-[130px]">
                                                        <div className="w-[110px] h-[110px] flex items-center justify-center rounded-full  border border-[#eeeeee]">
                                                            <img
                                                                src="/image/girl.png"
                                                                className="rounded-full cursor-pointer object-cover w-full h-full max-w-none max-h-none block align-middle"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow flex-[1] min-w-0">
                                                        <InputField
                                                            labelStyle="min-w-[150px] flex-basis-[160px]"
                                                            className="mt-[7px]"
                                                            label="Name"
                                                            name="name"
                                                            value={formData?.name || ""}
                                                            setFormData={setFormData}
                                                        />
                                                        <div>
                                                            {/* <span>{validation && validation.name}</span> */}
                                                            {/* {Boolean(!formData?.name) && <span className={{ style: "bg-red-600" }}>"This Filed Is Required"</span>}
                                                            {/* {formData?.name === "" ? <span className={{ style: "bg-red-600" }}>"This Filed Is Required"</span> : ""} */}
                                                            {/* <ErrorMessage
                                                                    name="name"
                                                                    component="div"
                                                                    className="block mt-[5px] font-bold text-[13px] text-[#cc5965]"
                                                                // /> */}
                                                        </div>
                                                        <InputField
                                                            labelStyle="min-w-[150px] flex-basis-[160px]"
                                                            className="mt-[7px]"
                                                            label="Email"
                                                            name="email"
                                                            value={formData?.email || ""}
                                                            setFormData={setFormData}
                                                        />
                                                        <div>
                                                            {/* <span style={{color:"red"}}>{validation && validation.email}</span> */}
                                                        </div>
                                                        {/* <SelectField
                                                            labelStyle="min-w-[150px] flex-basis-[160px]"
                                                            className="mt-[7px]"
                                                            option={workSpaceData}
                                                            label="workplace"
                                                            name="workplace"
                                                            value={formData?.workplace}
                                                            setFormData={setFormData}
                                                        /> */}
                                                        <SelectField
                                                            searchOption={false}
                                                            option={workSpaceData}
                                                            value={formData?.workplace}
                                                            onChange={HandleValue}
                                                            label="Workplace"
                                                            className="mt-[7px]"
                                                            default={true}
                                                        />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="flex items-center px-[30px] pb-[15px] flex-wrap justify-between">
                                            <div>
                                                <button
                                                    className="px-3 hover:bg-[#FAFAFB] trnasition duration-200 border rounded-[3px] text-[14px] py-[6px] active:shadow-[0_2px_5px_rgba(0,0,0,0.15)_inset]"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                            <div>
                                                <button className="px-3 rounded-[3px] border hover:bg-[#18a689] border-[#1AB394] bg-[#1AB394] ml-[5px] text-[#FFFFFF] text-[14px] py-[6px]" onClick={handleSecreataries}>
                                                    Save and send instructions
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
};

export default NewSecretaries;
