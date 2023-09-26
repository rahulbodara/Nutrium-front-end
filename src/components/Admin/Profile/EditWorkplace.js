import { Dialog, Transition } from "@headlessui/react";
import { mdiMapMarker, mdiWeb } from "@mdi/js";
import Icon from "@mdi/react";
import React, { Fragment, useEffect, useMemo, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import ColorPickerField from "../common/ColorPickerField";
import CountrySelect from "../common/ContrySelect";
import InputField from "../common/InputField";
import Switcher from "../common/Switcher";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, ErrorMessage, Form } from "formik";
import {
  GetAllWorkplace,
  GetIndividualWorkplace,
  RemoveWorkplace,
  WorkplaceDataCreation,
  WorkplaceDataEdit,
} from "@/redux/action/workplace";
import { toast } from "react-toastify";
import { handleApiCall } from "@/util/apiUtils";
import { workplace } from "@/schema/workplace";

const Editworkplace = ({ isOpen, setIsOpen, editData, setEditData }) => {
  const [associateAddress, setAssociateAddress] = useState(2);
  const dispatch = useDispatch();
  const [formErrors, setFormErrors] = useState()
  // const [formData, setFormData] = useState();
  const initialValues = {
    name: editData?.name || '',
    country: editData?.country || '',
    phoneNumber: editData?.phoneNumber || '',
    color: editData?.color || '',
    associateAddress: editData?.associateAddress || '',
    address: {
      street: editData?.address?.street || '',
      city: editData?.address?.city || '',
      zipCode: editData?.address?.zipCode || ''
    }
  };
  const handleSubmit = async (values) => {
    try {

      const updatedFormData = {
        ...values,
        associateAddress: associateAddress === 1 ? true : false
        // setAssociate(associateAddress = val === 1 ? true : false)
      };
      if (editData) {
        const success = await handleApiCall(
          dispatch,
          WorkplaceDataEdit(updatedFormData, editData._id),
          'Workplace Updated Successfully'
        );
        if (success) {
          dispatch(GetAllWorkplace());
          setIsOpen(false);
        }
      } else {
        const success = await handleApiCall(
          dispatch,
          WorkplaceDataCreation(updatedFormData),
          'Workplace successfully created'
        );
        if (success) {
          dispatch(GetAllWorkplace());
          setIsOpen(false);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteItem = async (id) => {
    try {
      const success = await handleApiCall(
        dispatch,
        RemoveWorkplace(id),
        'Workplace Deleted Successfully'
      );
      if (success) {
        dispatch(GetAllWorkplace());
        setIsOpen(false);
      }
    } catch (error) {
      console.error("Error deleting secretary:", error);
    }
  }

  useEffect(() => {
    if (editData) {
      initialValues.name = editData?.name || '',
        initialValues.country = editData?.country || '',
        initialValues.phoneNumber = editData?.phoneNumber || '',
        initialValues.color = editData?.color || '',
        initialValues.associateAddress = editData?.associateAddress || '',
        initialValues.address.street = editData?.address?.street || '',
        initialValues.address.city = editData?.address?.city || '',
        initialValues.address.zipCode = editData?.address?.zipCode || ''
    }
  }, [editData]);


  useMemo(() => {
    initialValues.name = editData?.name || '',
      initialValues.country = editData?.country || '',
      initialValues.phoneNumber = editData?.phoneNumber || '',
      initialValues.color = editData?.color || '',
      initialValues.associateAddress = editData?.associateAddress || '',
      initialValues.address.street = editData?.address?.street || '',
      initialValues.address.city = editData?.address?.city || '',
      initialValues.address.zipCode = editData?.address?.zipCode || ''
    if (isOpen === false) {
      initialValues.name = '',
        initialValues.country = '',
        initialValues.phoneNumber = '',
        initialValues.color = '',
        initialValues.associateAddress = '',
        initialValues.address.street = '',
        initialValues.address.city = '',
        initialValues.address.zipCode = ''
      setEditData()
    }
  }, [editData, isOpen])

  const handleAssociateAdd = (val) => {
    // const updatedInitialValues = {
    //   ...initialValues,
    //   associateAddress: val === 1 ? true : false,
    // };
    setAssociateAddress(val);
  };

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
            <div className="flex min-h-full items-start justify-center sm:p-5 p-10 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterTo="opacity-100 scale-100"
                enterFrom="opacity-0 scale-95"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[900px] md:max-w-full transform overflow-hidden rounded bg-white  text-left align-middle shadow-xl transition-all">
                  <Formik
                    initialValues={initialValues}
                    validationSchema={workplace}
                    validate={(values) => {
                      const errors = {};

                      if (associateAddress === 1) {
                        if (!values.address || !values.address.street || !values.address.city || !values.address.zipCode) {
                          errors.address = "You must fill in all address fields to validate the workplace, otherwise it will not be available in your services.";
                        }
                      }

                      setFormErrors(errors);
                      return errors;
                    }}
                    onSubmit={handleSubmit}
                  >
                    <Form>
                      <div className="p-[25px] pb-[48px] relative">
                        <button
                          onClick={() => setIsOpen(false)}
                          className="absolute right-[10px] top-[10px]"
                        >
                          <IoCloseSharp className="text-[18px] opacity-[0.4]" />
                        </button>
                        <h2 className="text-[28px] leading-[40px] text-center">
                          {editData ? "Edit workplace" : "New workplace"}
                        </h2>
                        <span className="text-[13px] text-center block">
                          Set a name, location, phone number, color and logo of your
                          workplace
                        </span>
                      </div>
                      <div className="px-[30px] pb-[20px]">
                        <form>
                          <div className="workplace-modal flex">
                            <div className="flex flex-col items-center justify-center mr-[24px]">
                              <div className="w-[136px] h-[136px] flex rounded-full self-center items-center justify-center border border-[#eeeeee]">
                                <img
                                  src="/image/leaf.png"
                                  className="rounded-full cursor-pointer object-cover w-full h-full max-w-none max-h-none block align-middle"
                                />
                              </div>
                              <div className="switcher">
                                <Switcher
                                  label1="Private"
                                  label2="Public"
                                  isChecked={true}
                                />
                              </div>
                            </div>
                            <div className="flex-grow flex-[1] min-w-0">
                              <InputField
                                labelStyle="min-w-[160px] flex-basis-[160px]"
                                className="mt-[7px] h-[40px]"
                                label="Name"
                                name="name"
                                formik={false}
                              />
                              <ErrorMessage
                                name="name"
                                component="div"
                                className="text-red-500 text-sm"
                              />
                              <CountrySelect
                                className="mt-[7px] h-[40px]"
                                label="Country"
                                name="country"
                                formik={false}
                              // value={formData?.country || ""}
                              // setFormData={setFormData}
                              />
                              <InputField
                                labelStyle="min-w-[160px] flex-basis-[160px]"
                                className="mt-[7px] h-[40px]"
                                label="Phone number"
                                mobile="mobile"
                                name="phoneNumber"
                                formik={false}
                              />
                              <ColorPickerField
                                className="mt-[7px] h-[40px]"
                                label="Color"
                                color="color"
                                name="color"
                                formik={false}
                              // value={formData?.color || ""}
                              // setFormData={setFormData}
                              />
                            </div>
                          </div>
                          <div className="mt-[32px] flex items-center ">
                            <div
                              className={`w-6/12 rounded px-3 py-[9px] ${associateAddress === 1
                                ? "text-[#1AB394] border-[#1AB394] "
                                : "text-[#676a6c] border-[#dddddd]"
                                }  bg-[rgba(255,255,255,0)] transition-all  duration-[0.5s] font-normal text-center whitespace-nowrap align-middle touch-manipulation cursor-pointer bg-none border text-sm leading-[1.42857143] select-none mb-0 border-solid`}
                              onClick={() => handleAssociateAdd(1)}
                            >
                              <Icon
                                path={mdiMapMarker}
                                color={`${associateAddress === 1 ? "#1AB394" : "#888888"
                                  }`}
                                size="18px"
                                className="inline align-middle m-[-4px_10px_0_0]"
                              />
                              <span>Associate address</span>
                            </div>
                            <div
                              className={`w-6/12 rounded px-3 py-[9px] ml-[4px] ${associateAddress === 2
                                ? "text-[#1AB394] border-[#1AB394] "
                                : "text-[#676a6c] border-[#dddddd]"
                                }  bg-[rgba(255,255,255,0)] transition-all  duration-[0.5s] font-normal text-center whitespace-nowrap align-middle touch-manipulation cursor-pointer bg-none border text-sm leading-[1.42857143] select-none mb-0 border-solid`}
                              onClick={() => handleAssociateAdd(2)}
                            >
                              <Icon
                                path={mdiWeb}
                                color={`${associateAddress === 2 ? "#1AB394" : "#888888"
                                  }`}
                                size="18px"
                                className="inline align-middle m-[-4px_10px_0_0]"
                              />
                              <span>
                                Do not associate address (Online appointments only)
                              </span>
                            </div>
                          </div>
                          {associateAddress === 1 ? (
                            <div className="mt-[24px]">
                              <InputField
                                labelStyle="min-w-[160px] flex-basis-[160px]"
                                className="mt-[7px] h-[40px]"
                                label="Address"
                                name="address.street"
                                formik={false}
                              />
                              <InputField
                                labelStyle="min-w-[160px] flex-basis-[160px]"
                                className="mt-[7px] h-[40px]"
                                label="City"
                                name="address.city"
                                formik={false}
                              />
                              <InputField
                                labelStyle="min-w-[160px] flex-basis-[160px]"
                                className="mt-[7px] h-[40px]"
                                label="Zip code"
                                name="address.zipCode"
                                formik={false}
                              />
                              {formErrors?.address && (
                                <div className="text-red-500 text-sm">{formErrors.address}</div>
                              )}
                            </div>
                          ) : (
                            ""
                          )}
                        </form>
                      </div>
                      <div className="flex items-center px-[30px] pb-[15px] justify-between">
                        {editData && (
                          <div>
                            <button
                              onClick={(e) => {
                                e.preventDefault()
                                handleDeleteItem(editData._id)
                              }}
                              className="px-3 hover:bg-[#FAFAFB] trnasition duration-200 border rounded-[3px] text-[14px] py-[6px] active:shadow-[0_2px_5px_rgba(0,0,0,0.15)_inset]"
                            >
                              Remove
                            </button>
                            {/* <button  className="px-3 cursor-not-allowed rounded-[3px] border opacity-[.65] border-[#de5a73] bg-[#de5a73] ml-[5px] text-[#FFFFFF] text-[14px] py-[6px]">
                        Remove
                      </button> */}
                          </div>
                        )}
                        <div>
                          <button
                            className="px-3 hover:bg-[#FAFAFB] trnasition duration-200 border rounded-[3px] text-[14px] py-[6px] active:shadow-[0_2px_5px_rgba(0,0,0,0.15)_inset]"
                            onClick={() => setIsOpen(false)}
                          >
                            Cancel
                          </button>
                          <button
                            className="px-3 rounded-[3px] border hover:bg-[#18a689] border-[#1AB394] bg-[#1AB394] ml-[5px] text-[#FFFFFF] text-[14px] py-[6px]"
                            onClick={handleSubmit}
                          >
                            Save
                          </button>
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

export default Editworkplace;
