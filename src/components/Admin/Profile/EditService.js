import { Dialog, Transition } from "@headlessui/react";
import {
  mdiAccount,
  mdiAt,
  mdiCalendar,
  mdiClipboardAccount,
  mdiFlagVariant,
  mdiHumanMaleFemale,
  mdiInformationOutline,
  mdiMapMarker,
  mdiMapMarkerRadius,
  mdiPhone,
} from "@mdi/js";
import Icon from "@mdi/react";
import React, { Fragment, useEffect, useMemo, useRef, useState } from "react";
import { BiSolidUser } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";
import DatePicker from "react-datepicker";
import ClosableSelect from "../common/ClosableSelect";
import SelectField from "../common/SelectField";
import InputField from "../common/InputField";
import PriceField from "../common/PriceField";
import { useDispatch, useSelector } from "react-redux";
import {
  CreateProfileService,
  GetAllServices,
  GetAllWorkplace,
  GetIndividualService,
  RemoveServices,
  ServiceDataEdit,
} from "@/redux/action/profile.services";
import { toast } from "react-toastify";
import { handleApiCall } from "@/util/apiUtils";
import { Formik, Field, ErrorMessage, Form } from "formik";
import { services } from "@/schema/services";
import EliminateService from "./EliminateService";

const serviceType = [
  {
    id: 1,
    name: "Choose a service",
    value: "Choose a service",
  },
  {
    id: 2,
    name: "Face-to-face appointment",
    value: "Face-to-face appointment",
  },
  {
    id: 3,
    name: "Online appointment",
    value: "Online appointment",
  },
  {
    id: 4,
    name: "Home appointment",
    value: "Home appointment",
  },
  {
    id: 5,
    name: "Other",
    value: "Other",
  },
];

const clientType = [
  {
    id: 1,
    name: "Available to all clients",
    value: "Available to all clients",
  },
  {
    id: 2,
    name: "New clients",
    value: "New clients",
  },
  {
    id: 3,
    name: "Recurring clients",
    value: "Recurring clients",
  },
];

const EditService = ({ isOpen, setIsOpen, editData, setEditData }) => {
  const [eliminateModal, setEliminateModal] = useState(false);
  const [EliminateId, setEliminateId] = useState();
  console.log("🚀 ~ file: EditService.js:87 ~ EditService ~ EliminateId:", EliminateId)
  const dispatch = useDispatch()
  // const [formData, setFormData] = useState()
  // const individualservice = useSelector(
  //   (state) => state?.Services?.individualService
  // );
  const workplaceData = useSelector((state) => state?.Workplace?.workplaceData);
  const initialValues = {
    typeOfService: editData?.typeOfService || '',
    typeOfClients: editData?.typeOfClients || '',
    nameOfService: editData?.nameOfService || '',
    duration: editData?.duration || '',
    pricing: editData?.pricing || '',
    workplace: editData?.workplace || ''
  };
  // console.log(formData, "fofofoofoofofofor");
  // useEffect(() => {
  //   if (isEditModalOpen && id) {
  //     dispatch(GetIndividualService(id));
  //   }
  // }, [isEditModalOpen, dispatch]);
  // useEffect(() => {
  //   if (individualservice) {
  //     setFormData((prevFormData) => ({
  //       ...prevFormData,
  //       typeOfService: individualservice.typeOfService,
  //       typeOfClients: individualservice.typeOfClients,
  //       nameOfService: individualservice.nameOfService,
  //       duration: individualservice.duration,
  //       pricing: individualservice.pricing,
  //       workplace: individualservice.workplace,
  //     }));
  //   }
  // }, [individualservice]);
  const handleSubmit = async (values) => {
    try {
      // if (!values) {
        const updatedFormData = {
          ...values,
        };
        if (editData) {
          const success = await handleApiCall(
            dispatch,
            ServiceDataEdit(updatedFormData, editData._id),
            'Services Updated Successfully'
          );
          if (success) {
            dispatch(GetAllServices());
            setIsOpen(false);
          }
        } else {
          const success = await handleApiCall(
            dispatch,
            CreateProfileService(updatedFormData),
            'Services successfully created'
          );
          if (success) {
            dispatch(GetAllServices());
            setIsOpen(false);
          }
        }
      // }
    } catch (error) {
      console.log(error);
    }
  }
  // const handleDeleteItem = async (id) => {
  //   // debugger;
  //   if(id){
  //     try {
  //       const success = await handleApiCall(
  //         dispatch,
  //         RemoveServices(id),
  //         'Secretaries Deleted Successfully'
  //       );
  //       if (success) {
  //         dispatch(GetAllServices());
  //         setIsOpen(false);
  //       }
  //     } catch (error) {
  //       console.error("Error deleting secretary:", error);
  //     }
  //   }
  // }
  // const handleWorkplaceChange = (workplaceValue) => {
  //   setFormData((formData) => ({
  //     ...formData,
  //     workplace: workplaceValue,
  //   }));

  // };
  // const handleTypeOfServiceChange = (value) => {
  //   setFormData((formData) => ({
  //     ...formData,
  //     typeOfService: value,
  //   }));
  // };

  // const handleTypeOfClientsChange = (value) => {
  //   setFormData((formData) => ({
  //     ...formData,
  //     typeOfClients: value,
  //   }));
  // };
  useEffect(() => {
    if (editData) {
      initialValues.typeOfService = editData?.typeOfService,
        initialValues.typeOfClients = editData?.typeOfClients,
        initialValues.nameOfService = editData?.nameOfService,
        initialValues.duration = editData?.duration,
        initialValues.pricing = editData?.pricing,
        initialValues.workplace = editData?.workplace
    }
  }, [editData]);

  useMemo(() => {
    initialValues.typeOfService = editData?.typeOfService,
      initialValues.typeOfClients = editData?.typeOfClients,
      initialValues.nameOfService = editData?.nameOfService,
      initialValues.duration = editData?.duration,
      initialValues.pricing = editData?.pricing,
      initialValues.workplace = editData?.workplace
    if (isOpen === false) {
      initialValues.typeOfService = "",
        initialValues.typeOfClients = "",
        initialValues.nameOfService = "",
        initialValues.duration = "",
        initialValues.pricing = "",
        initialValues.workplace = "",
        setEditData()
    }
  }, [editData, isOpen])

  return (
    <>
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
                  <Dialog.Panel className="w-full max-w-[600px] md:max-w-full transform overflow-hidden rounded bg-white  text-left align-middle shadow-xl transition-all">
                    <Formik
                      initialValues={initialValues}
                      validationSchema={services}
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
                            {editData ? "Edit service" : "New service"}
                          </h2>
                          <span className="text-[13px] text-center block">
                            Add the relevant information about the services you want
                            to offer
                          </span>
                        </div>
                        <div className="px-[30px] pb-[20px]">
                          <div className="service-modal">
                            <SelectField
                              // labelStyle="min-w-[150px] flex-basis-[160px]"
                              // searchOption={false}
                              option={serviceType}
                              className="mt-[7px]"
                              value={editData?.typeOfService}
                              // onChange={handleTypeOfServiceChange}
                              // value={formData?.typeOfService || ""}
                              label="Type of service"
                              name="typeOfService"
                              formik={false}
                            // setFormData={setFormData}
                            />
                            <ErrorMessage
                              name="typeOfService"
                              component="div"
                              className="text-red-500 text-sm"
                            />
                            {/* <SelectField
                            searchOption={false}
                            option={serviceType}
                            label="Type of service"
                            name="typeOfService"
                            onChange={HandleValue}
                            value={formData.typeOfService || ""}
                            setFormData={setFormData}
                          /> */}
                            <SelectField
                              // searchOption={false}
                              option={clientType}
                              value={editData?.typeOfClients}
                              label="Type of clients"
                              className="mt-[7px]"
                              name="typeOfClients"
                              formik={false}

                            // value={formData?.typeOfClients || ""}
                            // setFormData={setFormData}
                            // onChange={handleTypeOfClientsChange}
                            />

                            <InputField
                              labelStyle="min-w-[160px] flex-basis-[160px]"
                              className="mt-[7px]"
                              label="Name of the Service"
                              name="nameOfService"
                              formik={false}
                            // value={formData?.nameOfService || ""}
                            // setFormData={setFormData}
                            />
                            <ErrorMessage
                              name="nameOfService"
                              component="div"
                              className="text-red-500 text-sm"
                            />
                            <InputField
                              labelStyle="min-w-[160px] flex-basis-[160px]"
                              className="mt-[7px]"
                              label="Duration"
                              name="duration"
                              formik={false}
                            // value={formData?.duration || ""}
                            // setFormData={setFormData}
                            />
                            <PriceField
                              className="mt-[7px]"
                              label="Pricing"
                              placeholder="Add the price"
                              name="pricing"
                              formik={false}
                            // value={formData?.pricing || ""}
                            // setFormData={setFormData}
                            />
                            <ErrorMessage
                              name="pricing"
                              component="div"
                              className="text-red-500 text-sm"
                            />
                            <SelectField
                              // searchOption={false}
                              option={workplaceData}
                              // value={formData?.workplace}
                              // onChange={handleWorkplaceChange}
                              label="Workplace"
                              name="workplace"
                              className="mt-[7px]"
                              formik={false}
                              default={true}
                              defaultValue="All Workplace"
                            />
                          </div>
                        </div>
                        <div className="flex justify-between">
                          {/* {editData && ( */}
                            <div className="flex items-center px-[30px] pb-[15px] justify-end">
                              <button
                                // onClick={(e) => {
                                //   e.preventDefault()
                                //   handleDeleteItem(editData._id)}}
                                type="button"
                                onClick={() => {setEliminateModal(!eliminateModal),setEliminateId(editData._id),setIsOpen(false)}}
                                className="px-3 hover:bg-[#d83c5a] bg-[#DB4965] text-white trnasition duration-200 border rounded-[3px] text-[14px] py-[6px] active:shadow-[0_2px_5px_rgba(0,0,0,0.15)_inset]"
                              >
                                Remove  
                              </button>
                            </div>
                          {/* )} */}
                          <div className="flex items-center px-[30px] pb-[15px] justify-end">
                            <button
                              className="px-3 hover:bg-[#FAFAFB] trnasition duration-200 border rounded-[3px] text-[14px] py-[6px] active:shadow-[0_2px_5px_rgba(0,0,0,0.15)_inset]"
                              onClick={() => setIsOpen(false)}
                              type="button"
                            >
                              Cancel
                            </button>
                            <button
                              className="px-3 
                        rounded-[3px] border hover:bg-[#18a689] 
                        border-[#1AB394] bg-[#1AB394] ml-[5px] text-[#FFFFFF] text-[14px] py-[6px]"
                            // onClick={handleServices}
                            >
                              Add
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
      <EliminateService eliminateModal={eliminateModal} deleteId={EliminateId} setEliminateModal={setEliminateModal} />
    </>
  );
};

export default EditService;
