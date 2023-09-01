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
  const dispatch = useDispatch()
  const [formData, setFormData] = useState()
  console.log(formData, "fofofofofofoo");
  const individualservice = useSelector(
    (state) => state?.Services?.individualService
  );
  const workplaceData = useSelector((state) => state?.Workplace?.workplaceData);
  console.log(formData, "fofofoofoofofofor");
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
  const handleServices = async () => {
    try {
      const updatedFormData = {
        ...formData,
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
    } catch (error) {
      console.log(error);
    }
  }
  const handleDeleteItem = async (id) => {
    try {
      const success = await handleApiCall(
        dispatch,
        RemoveServices(id),
        'Secretaries Deleted Successfully'
      );
      if (success) {
        dispatch(GetAllServices());
        setIsOpen(false);
      }
    } catch (error) {
      console.error("Error deleting secretary:", error);
    }
  }
  const handleWorkplaceChange = (workplaceValue) => {
    setFormData((formData) => ({
      ...formData,
      workplace: workplaceValue,
    }));

  };
  const handleTypeOfServiceChange = (value) => {
    setFormData((formData) => ({
      ...formData,
      typeOfService: value,
    }));
  };

  const handleTypeOfClientsChange = (value) => {
    setFormData((formData) => ({
      ...formData,
      typeOfClients: value,
    }));
  };
  useEffect(() => {
    if (editData) {
      setFormData({
        typeOfService: editData?.typeOfService,
        typeOfClients: editData?.typeOfClients,
        nameOfService: editData?.nameOfService,
        duration: editData?.duration,
        pricing: editData?.pricing,
        workplace: editData?.workplace
      });
    }
  }, [editData]);

  useMemo(() => {
    setFormData({
      ...formData,
      typeOfService: editData?.typeOfService,
      typeOfClients: editData?.typeOfClients,
      nameOfService: editData?.nameOfService,
      duration: editData?.duration,
      pricing: editData?.pricing,
      workplace: editData?.workplace
    })
    if (isOpen === false) {
      setFormData()
      setEditData()
    }
  }, [editData, isOpen])

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
                <Dialog.Panel className="w-full max-w-[600px] md:max-w-full transform overflow-hidden rounded bg-white  text-left align-middle shadow-xl transition-all">
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
                    <form>
                      <div className="service-modal">
                        <SelectField
                          searchOption={false}
                          option={serviceType}
                          onChange={handleTypeOfServiceChange}
                          value={formData?.typeOfService || ""}
                          label="Type of service"
                          setFormData={setFormData}
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
                          searchOption={false}
                          option={clientType}
                          label="Type of clients"
                          className="mt-[7px]"
                          name="typeOfClients"
                          value={formData?.typeOfClients || ""}
                          setFormData={setFormData}
                          onChange={handleTypeOfClientsChange}
                        />

                        <InputField
                          labelStyle="min-w-[160px] flex-basis-[160px]"
                          className="mt-[7px]"
                          label="Name of the Service"
                          name="nameOfService"
                          value={formData?.nameOfService || ""}
                          setFormData={setFormData}
                        />
                        <InputField
                          labelStyle="min-w-[160px] flex-basis-[160px]"
                          className="mt-[7px]"
                          label="Duration"
                          name="duration"
                          value={formData?.duration || ""}
                          setFormData={setFormData}
                        />
                        <PriceField
                          className="mt-[7px]"
                          label="Pricing"
                          placeholder="Add the price"
                          name="pricing"
                          value={formData?.pricing || ""}
                          setFormData={setFormData}
                        />
                        <SelectField
                          searchOption={false}
                          option={workplaceData}
                          value={formData?.workplace}
                          onChange={handleWorkplaceChange}
                          label="Workplace"
                          className="mt-[7px]"
                          default={true}
                          defaultValue="All Workplace"
                        />
                      </div>
                    </form>
                  </div>
                  {editData && (
                    <div className="flex items-center px-[30px] pb-[15px] justify-end">
                      <button
                        onClick={() => handleDeleteItem(editData._id)}
                        className="px-3 hover:bg-[#FAFAFB] trnasition duration-200 border rounded-[3px] text-[14px] py-[6px] active:shadow-[0_2px_5px_rgba(0,0,0,0.15)_inset]"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                  <div className="flex items-center px-[30px] pb-[15px] justify-end">
                    <button
                      className="px-3 hover:bg-[#FAFAFB] trnasition duration-200 border rounded-[3px] text-[14px] py-[6px] active:shadow-[0_2px_5px_rgba(0,0,0,0.15)_inset]"
                      onClick={() => setIsOpen(false)}
                    >
                      Cancel
                    </button>
                    <button
                      className="px-3 
                    rounded-[3px] border hover:bg-[#18a689] 
                    border-[#1AB394] bg-[#1AB394] ml-[5px] text-[#FFFFFF] text-[14px] py-[6px]"
                      onClick={handleServices}
                    >
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
  );
};

export default EditService;
