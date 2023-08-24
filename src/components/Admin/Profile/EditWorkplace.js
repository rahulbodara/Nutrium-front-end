import { Dialog, Transition } from "@headlessui/react";
import { mdiMapMarker, mdiWeb } from "@mdi/js";
import Icon from "@mdi/react";
import React, { Fragment, useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import ColorPickerField from "../common/ColorPickerField";
import CountrySelect from "../common/ContrySelect";
import InputField from "../common/InputField";
import Switcher from "../common/Switcher";
import { useDispatch, useSelector } from "react-redux";
import { GetIndividualWorkplace, WorkplaceDataEdit } from "@/redux/action/auth";
import { toast } from "react-toastify";

const Editworkplace = ({ isEditModalOpen, setIsEditModalOpen, id }) => {
  const [associateAddress, setAssociateAddress] = useState(2);
  const individualWorkplace = useSelector(
    (state) => state?.auth?.individualWorkplace
  );
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    phoneNumber: "",
    color: "",
    associateAddress: true,
    address: {
      street: "",
      city: "",
      zipCode: "",
    },
  });
  useEffect(() => {
    if (isEditModalOpen && id) {
      dispatch(GetIndividualWorkplace(id));
    }
  }, [isEditModalOpen, id, dispatch]);
  useEffect(() => {
    if (individualWorkplace) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        name: individualWorkplace.name,
        country: individualWorkplace.country,
        phoneNumber: individualWorkplace.phoneNumber,
        color: individualWorkplace.color,
        associateAddress: individualWorkplace.isActive === 1 ? true : false,
        address: {
          street: individualWorkplace.address?.street,
          city: individualWorkplace.address.city,
          zipCode: individualWorkplace.address.zipCode,
        },
      }));
    }
  }, [individualWorkplace]);
  const handleSubmit = async () => {
    try {
      const updatedFormData = {
        ...formData,
      };
      console.log("updatedFormData:---->", updatedFormData);
        const response = await dispatch(
          WorkplaceDataEdit(updatedFormData,id)
        ).then((res) => {
          toast.error(res?.data?.data?.message);
          return res;
        });
        setIsEditModalOpen(false);
        if (response) {
          toast.success("Workplace successfully Edited");
          if (individualWorkplace) {
            setFormData((prevFormData) => ({
              ...prevFormData,
              name: individualWorkplace.name,
              country: individualWorkplace.country,
              phoneNumber: individualWorkplace.phoneNumber,
              color: individualWorkplace.color,
              associateAddress: individualWorkplace.isActive === 1 ? true : false,
              address: {
                street: individualWorkplace.address.street,
                city: individualWorkplace.address.city,
                zipCode: individualWorkplace.address.zipCode,
              },
            }));
          }
        }
        console.log("response---->", response);
    } catch (error) {
      console.log("error-------------->", error);
    }
  };

  const handleAssociateAdd = (val) => {
    setAssociateAddress(val);
  };

  return (
    <div className="modal">
      <Transition appear show={isEditModalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-[9999]"
          onClose={setIsEditModalOpen}
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
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[900px] md:max-w-full transform overflow-hidden rounded bg-white  text-left align-middle shadow-xl transition-all">
                  <div className="p-[25px] pb-[48px] relative">
                    <button
                      onClick={() => setIsEditModalOpen(false)}
                      className="absolute right-[10px] top-[10px]"
                    >
                      <IoCloseSharp className="text-[18px] opacity-[0.4]" />
                    </button>
                    <h2 className="text-[28px] leading-[40px] text-center">
                      Edit workplace
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
                            value={formData.name || ""}
                            setFormData={setFormData}
                          />
                          <CountrySelect
                            className="mt-[7px] h-[40px]"
                            label="Country"
                            name="country"
                            value={formData.country || ""}
                            setFormData={setFormData}
                          />
                          <InputField
                            labelStyle="min-w-[160px] flex-basis-[160px]"
                            className="mt-[7px] h-[40px]"
                            label="Phone number"
                            mobile="mobile"
                            name="phoneNumber"
                            value={formData.phoneNumber || ""}
                            setFormData={setFormData}
                          />
                          <ColorPickerField
                            className="mt-[7px] h-[40px]"
                            label="Color"
                            color="color"
                            name="color"
                            value={formData.color || ""}
                            setFormData={setFormData}
                          />
                        </div>
                      </div>
                      <div className="mt-[32px] flex items-center ">
                        <div
                          className={`w-6/12 rounded px-3 py-[9px] ${
                            associateAddress === 1
                              ? "text-[#1AB394] border-[#1AB394] "
                              : "text-[#676a6c] border-[#dddddd]"
                          }  bg-[rgba(255,255,255,0)] transition-all  duration-[0.5s] font-normal text-center whitespace-nowrap align-middle touch-manipulation cursor-pointer bg-none border text-sm leading-[1.42857143] select-none mb-0 border-solid`}
                          onClick={() => handleAssociateAdd(1)}
                        >
                          <Icon
                            path={mdiMapMarker}
                            color={`${
                              associateAddress === 1 ? "#1AB394" : "#888888"
                            }`}
                            size="18px"
                            className="inline align-middle m-[-4px_10px_0_0]"
                          />
                          <span>Associate address</span>
                        </div>
                        <div
                          className={`w-6/12 rounded px-3 py-[9px] ml-[4px] ${
                            associateAddress === 2
                              ? "text-[#1AB394] border-[#1AB394] "
                              : "text-[#676a6c] border-[#dddddd]"
                          }  bg-[rgba(255,255,255,0)] transition-all  duration-[0.5s] font-normal text-center whitespace-nowrap align-middle touch-manipulation cursor-pointer bg-none border text-sm leading-[1.42857143] select-none mb-0 border-solid`}
                          onClick={() => handleAssociateAdd(2)}
                        >
                          <Icon
                            path={mdiWeb}
                            color={`${
                              associateAddress === 2 ? "#1AB394" : "#888888"
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
                            value={formData.address.street || ""}
                            setFormData={setFormData}
                          />
                          <InputField
                            labelStyle="min-w-[160px] flex-basis-[160px]"
                            className="mt-[7px] h-[40px]"
                            label="City"
                            name="address.city"
                            value={formData.address.city || ""}
                            setFormData={setFormData}
                          />
                          <InputField
                            labelStyle="min-w-[160px] flex-basis-[160px]"
                            className="mt-[7px] h-[40px]"
                            label="Zip code"
                            name="address.zipCode"
                            value={formData.address.zipCode || ""}
                            setFormData={setFormData}
                          />
                        </div>
                      ) : (
                        ""
                      )}
                    </form>
                  </div>
                  <div className="flex items-center px-[30px] pb-[15px] justify-between">
                    <div>
                      <button className="px-3 cursor-not-allowed rounded-[3px] border opacity-[.65] border-[#de5a73] bg-[#de5a73] ml-[5px] text-[#FFFFFF] text-[14px] py-[6px]">
                        Remove
                      </button>
                    </div>
                    <div>
                      <button
                        className="px-3 hover:bg-[#FAFAFB] trnasition duration-200 border rounded-[3px] text-[14px] py-[6px] active:shadow-[0_2px_5px_rgba(0,0,0,0.15)_inset]"
                        onClick={() => setIsEditModalOpen(false)}
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
