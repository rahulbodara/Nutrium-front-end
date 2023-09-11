import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useMemo, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import InputField from "../common/InputField";
import SelectInput from "../common/SelectInput";
import { useDispatch, useSelector } from "react-redux";
import { CreateSecretaries, GetAllSecreatries, RemoveSecretaries, SecreatriesDataEdit } from "@/redux/action/secretaries";
import { handleApiCall } from '../../../util/apiUtils';
import SelectField from "../common/SelectField";
import { Formik, ErrorMessage, Form } from "formik";
import { secretaries } from "@/schema/secretaries";


const NewSecretaries = ({ isOpen, setIsOpen, editData, setEditData }) => {
    const dispatch = useDispatch()
    // const [formData, setFormData] = useState()
    // const [validation, setValidation] = useState({});
    const workSpaceData = useSelector((state) => state.Workplace?.workplaceData)
    const initialValues = {
        name: editData?.name || "",
        email: editData?.email || "",
        workplace: editData?.workplace || "",
    };
    const handleSubmit = async (values) => {
        // const error = { ...validation };
        // if (!formData?.name) {
        //     error.name = "This Field Is Required";
        // }
        // if (!formData?.email) {
        //     error.email = "This Field Is Required";
        // } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        //     error.email = 'Email is invalid.';
        // }
        // setValidation(error)
        try {
            const updatedFormData = {
                ...values,
            };
            if (editData) {
                const success = await handleApiCall(
                    dispatch,
                    SecreatriesDataEdit(updatedFormData, editData._id),
                    'Secretaries Updated Successfully'
                );
                console.log(success, "sucesssucesss");
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
    const handleDeleteItem = async (id) => {
        console.log(id,"idid");
        try {
            const success = await handleApiCall(
                dispatch,
                RemoveSecretaries(id),
                'Secretaries Deleted Successfully'
            );
            if (success) {
                dispatch(GetAllSecreatries());
                setIsOpen(false);
            }
        } catch (error) {
            console.error("Error deleting secretary:", error);
        }
    }
    useEffect(() => {
        if (editData) {
            initialValues.name = editData.name;
            initialValues.email = editData.email;
            initialValues.workplace = editData.workplace;
        }
    }, [editData]);
    useMemo(() => {
        initialValues.name = editData?.name;
        initialValues.email = editData?.email;
        initialValues.workplace = editData?.workplace;
        if (isOpen === false) {
            initialValues.name = "";
            initialValues.email = "";
            initialValues.workplace = "";
            setEditData();
        }
    }, [editData, isOpen])

    // useEffect(() => {
    //     if (formData?.name !== "") {
    //         setValidation({ ...validation, name: "" });
    //     }
    //     if (formData?.email !== "") {
    //         setValidation({ ...validation, email: "" });
    //     }
    // }, [formData]);

    const HandleValue = (workplaceValue) => {
        setFormData((formData) => ({
            ...formData,
            workplace: workplaceValue,
        }));
    };
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
                                    <Formik
                                        initialValues={initialValues}
                                        validationSchema={secretaries}
                                        onSubmit={handleSubmit}
                                    >
                                        <Form>
                                            <div className="p-[25px] pb-[48px] relative">
                                                <button
                                                    onClick={() => setIsOpen(false)}
                                                    className="absolute right-[10px] top-[10px] outline-none"
                                                >
                                                    <IoCloseSharp className="text-[18px] opacity-[0.4]" />
                                                </button>
                                                <h2 className="text-[28px] leading-[40px] text-center">
                                                    {editData ? "Edit secretary's personal information" :
                                                        "Register new secretary"}
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
                                                                formik={false}
                                                            // value={formData?.name || ""}
                                                            // setFormData={setFormData}
                                                            />
                                                            <ErrorMessage
                                                                name="name"
                                                                component="div"
                                                                className="text-red-500 text-sm"
                                                            />
                                                            {/* <div className="text-red-500 text-sm">
                                                            <span style={{ color: "red" }}>{validation.name}</span>
                                                        </div> */}
                                                            <InputField
                                                                labelStyle="min-w-[150px] flex-basis-[160px]"
                                                                className="mt-[7px]"
                                                                label="Email"
                                                                name="email"
                                                                formik={false}
                                                            // value={formData?.email || ""}
                                                            // setFormData={setFormData}
                                                            />
                                                            <ErrorMessage
                                                                name="email"
                                                                component="div"
                                                                className="text-red-500 text-sm"
                                                            />
                                                            {/* <div className="text-red-500 text-sm">
                                                                <span style={{ color: "red" }}>{validation.email}</span>
                                                            </div> */}
                                                            <SelectField
                                                                labelStyle="min-w-[150px] flex-basis-[160px]"
                                                                // searchOption={false}
                                                                option={workSpaceData}
                                                                // value={formData?.workplace}
                                                                // onChange={HandleValue}
                                                                label="Workplace"
                                                                name="workplace"
                                                                className="mt-[7px]"
                                                                // value={editData?.workplace} 
                                                                default={true}
                                                                formik={false}
                                                                defaultValue="All Workplace"
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
                                                    {editData && (
                                                        <button
                                                            className="px-3 hover:bg-[#FAFAFB] trnasition duration-200 border rounded-[3px] text-[14px] py-[6px] active:shadow-[0_2px_5px_rgba(0,0,0,0.15)_inset]"
                                                            onClick={() => handleDeleteItem(editData._id)}
                                                        >
                                                            Remove
                                                        </button>)}
                                                </div>
                                                <div>
                                                    <button className="px-3 rounded-[3px] border hover:bg-[#18a689] border-[#1AB394] bg-[#1AB394] ml-[5px] text-[#FFFFFF] text-[14px] py-[6px]"
                                                    // onClick={handleSecreataries}
                                                    >
                                                        Save and send instructions
                                                    </button>
                                                    {editData && (
                                                        <button className="px-3 rounded-[3px] border hover:bg-[#18a689] border-[#1AB394] bg-[#1AB394] ml-[5px] text-[#FFFFFF] text-[14px] py-[6px]">
                                                            Save
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        </Form>
                                    </Formik>
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
