import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { FaUser, FaUserPlus } from "react-icons/fa";
import { IoMdCalendar } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import SelectMenu from "../common/SelectMenu";
import clientPro from "../../../../public/image/clientprof.png";
import Icon from "@mdi/react";
import {
  mdiAccount,
  mdiAccountPlus,
  mdiCalendarBlank,
  mdiCalendarCheck,
  mdiCalendarClock,
  mdiCalendarToday,
  mdiCheckCircle,
  mdiCircleOutline,
  mdiClock,
  mdiClose,
  mdiInformationOutline,
  mdiLinkOff,
  mdiMapMarkerRadius,
  mdiPlus,
  mdiRoundedCorner,
  mdiVideo,
} from "@mdi/js";
import Modal from "../common/Modal";
import AddNewClient from "../Clients/AddNewClient";
import { useDispatch, useSelector } from "react-redux";
import { clientData } from "@/redux/action/auth";
import SelectField from "../common/SelectField";
import { handleApiCall } from "@/util/apiUtils";
import { ScheduleAppointment } from "@/redux/action/appointment";

const Newappointment = ({ isNewAppModal, setIsNewAppModal }) => {
  const [filterClient, setFilterClient] = useState("All clients");
  const [confirmationStatus, setConfirmationStatus] = useState("1");
  const [searchQuery, setSearchQuery] = useState("");
  const [addSheduleNotes, setAddSheduleNotes] = useState(false);
  const [appWithGoogleCalender, setAppWithGoogleCalender] = useState(false);
  const [regClientModal, setRegClientModal] = useState(false);
  const [itemsdata, setitems] = useState();
  const [formData, setFormData] = useState();
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(clientData());
  }, [dispatch]);

  const clientsData = useSelector((state) => state?.auth?.clientData);
  const clients = Array.isArray(clientsData) ? clientsData : [];
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentMonthData = clients.filter((item) => {
    const createdAtDate = new Date(item.createdAt);
    const createdAtMonth = createdAtDate.getMonth();
    return createdAtMonth === currentMonth;
  });
  const HandleValue = (value) => {
    setFilterClient(value);
  };
  const dataToMap =
    filterClient === "Active clients this month" ? currentMonthData : clients;

  const filteredClients = dataToMap.filter(
    (client) =>
      client.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.occupation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.workplace.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const activeClients = clients.filter((client) => client.isActive === 1);
  const totalClients = clients.length;
  const activeClientsCount = activeClients.length;
  const activeClientsPercentage = (activeClientsCount / totalClients) * 100;
  const handleGoogleCalender = (e) => {
    setAppWithGoogleCalender(e.target.checked);
  };

  const options = [
    {
      id: 1,
      option: "ALL",
      name: "ALL",
    },
    {
      id: 2,
      option: "Active clients this month",
      name: "Active clients this month",
    },
    {
      id: 3,
      option: "sdf",
      name: "sdf",
    },
  ];
  const VConsultation = [
    {
      id: 1,
      option: "without_video_call",
      name: "without_video_call",
    },
    {
      id: 2,
      option: "google_meet",
      name: "google_meet",
    },
    {
      id: 3,
      option: "zoom",
      name: "zoom",
    },
    {
      id: 4,
      option: "other_service",
      name: "other_service",
    },
  ];
  const options1 = [
    {
      id: 1,
      option: "confirmed",
      name: "confirmed",
    },
    {
      id: 2,
      option: "not_confirmed",
      name: "not_confirmed",
    },
  ];
 
  function handleConfirmation(value) {
    setFormData((formData) => ({
      ...formData,
      status: value,
    }));
  }
  function HandleVideoCallConsultationValue(value) {
    setFormData((formData) => ({
      ...formData,
      videoConsultation: value,
    }));
  }

  useEffect(() => {
    if (itemsdata) {
      setFormData({
        ...formData,
        clientId: itemsdata._id,
        workplace: itemsdata.workplace,
        clientName: itemsdata.fullName,
        schedulingNotes: "",
      });
    }
  }, [itemsdata]);
  const handleChangeFormData = (e)=>{
    const {name,value} = e.target;
    setFormData((formData)=>({
      ...formData,
      [name]:value
    })) 
  }
  const handleSubmit = async () => {
    try {
      const updatedFormData = {
        ...formData,
      };

      console.log("updatedFormData:---->", updatedFormData);
      const success = await handleApiCall(
        dispatch,
        ScheduleAppointment(updatedFormData),
        "Appointment Scheduled Successfully."
      );
      if (success) {
        setIsNewAppModal(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log("FormData", formData);
  return (
    <div>
      <Transition appear show={isNewAppModal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-[9999]"
          onClose={setIsNewAppModal}
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
            <div className="flex min-h-full items-start justify-center sm:p-5 p-10 md:p-[10px] text-center">
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
                  <div className="p-[25px] relative">
                    <button
                      onClick={() => setIsNewAppModal(false)}
                      className="absolute right-[10px] top-[10px] outline-none"
                    >
                      <IoCloseSharp className="text-[18px]" />
                    </button>
                    <h2 className="text-[28px] leading-[40px] text-center">
                      Schedule new appointment
                    </h2>
                    <span className="text-[13px] text-center block">
                      Information for scheduling a new appointment
                    </span>
                  </div>
                  <div className="pb-[20px] px-[30px] relative">
                    <div>
                      <div>
                        <div>
                          <div className="pb-[20px]">
                            <div className="row -mx-[15px]">
                              <div className="w-1/2 float-left px-[15px]">
                                <div
                                  className={`cursor-pointer text-center overflow-hidden text-ellipsis p-[0.7em] block border box-border whitespace-nowrap rounded-[5px] border-solid border-[#EEEEEE] ${
                                    confirmationStatus === "1"
                                      ? "bg-[#1AB394] text-white"
                                      : "bg-white"
                                  }`}
                                  onClick={() => {
                                    setConfirmationStatus("1");
                                  }}
                                >
                                  <div className="text-[1.1em]  align-middle">
                                    1. Select client
                                  </div>
                                </div>
                              </div>
                              <div className="w-1/2 float-left px-[15px]">
                                <div
                                  className={`cursor-pointer text-center overflow-hidden text-ellipsis p-[0.7em] block border box-border whitespace-nowrap rounded-[5px] border-solid border-[#EEEEEE] ${
                                    confirmationStatus === "2"
                                      ? "bg-[#1AB394] text-white"
                                      : "bg-white"
                                  }`}
                                  onClick={() => {
                                    setConfirmationStatus("2");
                                  }}
                                >
                                  <div className="text-[1.1em] align-middle">
                                    2. Confirm scheduling information
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className={`${
                            confirmationStatus === "1" ? "block" : "hidden"
                          }`}
                        >
                          <div className="flex mb-[15px]">
                            <div className="mr-[10px] flex-grow">
                              <input
                                type="text"
                                className="h-[34px] text-ellipsis input-transition bg-[white] bg-none border text-inherit block w-full px-3 py-1.5 rounded-[1px] border-solid border-[#e5e6e7] focus:border-[#1AB394] focus:ring-0 placeholder:text-[13px] placeholder:opacity-[0.6]"
                                placeholder="Search clients by name, occupation, identification number or contact..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                              />
                            </div>
                            <SelectField
                              searchOption={true}
                              option={options}
                              // label="Search"
                              className="mt-[7px]"
                              onChange={HandleValue}
                            />
                          </div>
                          {Array.isArray(filteredClients) &&
                            filteredClients.map((items, key) => (
                              <div className="flex flex-col">
                                <div className="my-[5px]">
                                  <div
                                    className="flex border group cursor-pointer rounded-[1px] border-solid border-[#eeeeee] hover:border-[#1AB394] p-[10px]"
                                    onClick={() => {
                                      setConfirmationStatus("2");
                                      setitems(items)
                                    }}
                                  >
                                    <div className="relative">
                                      <Image
                                        src={clientPro}
                                        className="rounded-full max-h-[80px] max-w-[80px]"
                                      />
                                    </div>
                                    <div className="flex flex-col flex-1 pl-3">
                                      <h1 className="text-[16px] text-[#676a6c] group-hover:text-[#1AB394]">
                                        {items?.fullName}
                                      </h1>
                                      <span className="text-[13px] opacity-[0.8] text-[#676a6c]">
                                        {items?.occupation}
                                      </span>
                                      <div className="flex gap-1">
                                        <div className="bg-[#E0FAF1] flex items-center justify-center w-4 h-4 rounded-full">
                                          <IoMdCalendar className="text-[#12896D] scale-x-[-1]" />
                                        </div>
                                        <span className="text-[11px] opacity-[0.8] text-[#676a6c]">
                                          No appointments yet
                                        </span>
                                      </div>
                                    </div>
                                    <div className="">
                                      <Icon
                                        path={mdiAccount}
                                        size="18px"
                                        className="text-[#AAAAAA]"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          <div
                            className="border rounded-[1px] cursor-pointer border-solid border-[#eeeeee] group hover:border-[#1AB394] flex p-5 gap-6 text-center items-center "
                            onClick={() => {
                              setRegClientModal(true);
                              setIsNewAppModal(false);
                            }}
                          >
                            <Icon
                              path={mdiAccountPlus}
                              size="48px"
                              className="text-[#888888] group-hover:text-[#1AB394]"
                            />
                            <span className="text-[16px] group-hover:text-[#1AB394] text-[#888888] font-normal">
                              Add new client
                            </span>
                          </div>
                        </div>

                        <div
                          className={`${
                            confirmationStatus === "2" ? "block" : "hidden"
                          }`}
                        >
                          <form>
                            <div className="row -mx-[15px]">
                              <div className="px-[15px] float-left w-1/2">
                                <label className="inline-block max-w-full mb-[5px] font-[700]">
                                  Client
                                </label>
                                <div className="h-[74px] p-[13px] mb-[15px] border-[1px] border-[#eeeeee] flex">
                                  <div className="h-[45px] mr-[15px] relative">
                                    <Image
                                      src={clientPro}
                                      className="rounded-full max-h-[45px] max-w-[45px] border-[1px] border-[#eeeeee] align-middle"
                                    />
                                  </div>
                                  <div className="align-middle relative flex flex-col flex-grow min-w-0">
                                    <div className="flex gap-[8px]">
                                      <h3 className="pr-[25px] break-words text-[16px]">
                                      {itemsdata?.fullName}
                                      </h3>
                                    </div>
                                    <Icon
                                      path={mdiAccount}
                                      color="#aaaaaa"
                                      size="18px"
                                      className="absolute top-0 right-0"
                                    />
                                    <div className="h-[18px] overflow-hidden whitespace-nowrap text-ellipsis font-[300]">
                                    {itemsdata?.occupation}
                                    </div>
                                    <div className="hidden mt-[4px] font-[300]">
                                      <div className="overflow-hidden whitespace-nowrap text-ellipsis text-[85%]">
                                        <div className="flex gap-[4px]">
                                          <Icon
                                            path={mdiCalendarToday}
                                            size="16px"
                                            className="bg-[#E0FAF1] text-[#12896D] align-middle mr-[3px] rounded-[50%]"
                                          />
                                          No appointments yet
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="px-[15px] float-left w-1/2">
                                <div>
                                  <label className="inline-block max-w-full mb-[5px] font-[700]">
                                    Video consultation
                                  </label>
                                </div>
                                <div className="mb-[15px]">
                                  <div className="mb-[6px]">
                                    <div className="relative table border-separate w-full mb-[6px]">
                                      <div className="bg-[white] w-[43px] table-cell border text-inherit text-sm font-normal leading-none text-center px-3 py-1.5 rounded-[1px] border-solid border-[#e5e6e7] whitespace-nowrap align-middle">
                                        <Icon
                                          path={mdiVideo}
                                          size="18px"
                                          color="#676a6c"
                                        />
                                      </div>
                                      <SelectField
                                        searchOption={false}
                                        option={VConsultation}
                                        value={formData?.videoConsultation}
                                        onChange={
                                          HandleVideoCallConsultationValue
                                        }
                                        className=" w-[100%]"
                                        default={true}
                                        defaultValue="All"
                                      />
                                    </div>
                                    <div className="relative table border-separate w-full">
                                      <div className="bg-[white] w-[43px] table-cell border text-inherit text-sm font-normal leading-none text-center px-3 py-1.5 rounded-[1px] border-solid border-[#e5e6e7] whitespace-nowrap align-middle">
                                        <Icon
                                          path={mdiLinkOff}
                                          size="18px"
                                          color="#676a6c"
                                        />
                                      </div>
                                      <input
                                        className="h-[34px] text-[13px] focus:ring-0 leading-[1.43] input-transition focus:border-inherit table-cell relative z-[2] float-left w-full border text-inherit px-3 py-1.5 rounded-[1px] border-solid border-[#e5e6e7] cursor-not-allowed"
                                        placeholder="Not available in this option"
                                        readOnly
                                      />

                                      <div className="bg-[white] w-[43px] table-cell border text-inherit text-sm font-normal leading-none text-center px-3 py-1.5 rounded-[1px] border-solid border-[#e5e6e7] whitespace-nowrap align-middle">
                                        <Icon
                                          path={mdiInformationOutline}
                                          size="18px"
                                          color="#676a6c"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row -mx-[15px]">
                              <div className="px-[15px] float-left w-1/2">
                                <div className="mb-[15px]">
                                  <label className="inline-block max-w-full mb-[5px] font-[700]">
                                    {" "}
                                    Start of appointment
                                  </label>
                                  <div className="relative table border-separate w-full mb-[6px]">
                                    <div className="bg-[white] w-[43px] table-cell border text-inherit text-sm font-normal leading-none text-center px-3 py-1.5 rounded-[1px] border-solid border-[#e5e6e7] whitespace-nowrap align-middle">
                                      <Icon
                                        path={mdiCalendarClock}
                                        size="18px"
                                        color="#676a6c"
                                      />
                                    </div>
                                    <input
                                      type="datetime-local"
                                      className="h-[34px] text-[13px] focus:ring-0 leading-[1.43] input-transition focus:border-[#1ab394] table-cell relative z-[2] float-left w-full border text-inherit px-3 py-1.5 rounded-[1px] border-solid border-[#e5e6e7]"
                                      name="startTime"
                                      value={formData?.startTime}
                                      onChange={handleChangeFormData}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="px-[15px] float-left w-1/2">
                                <div className="mb-[15px]">
                                  <label className="inline-block max-w-full mb-[5px] font-[700]">
                                    End of appointment
                                  </label>
                                  <div className="relative table border-separate w-full mb-[6px]">
                                    <div className="bg-[white] w-[43px] table-cell border text-inherit text-sm font-normal leading-none text-center px-3 py-1.5 rounded-[1px] border-solid border-[#e5e6e7] whitespace-nowrap align-middle">
                                      <Icon
                                        path={mdiCalendarClock}
                                        size="18px"
                                        color="#676a6c"
                                      />
                                    </div>
                                    <input
                                      type="datetime-local"
                                      className="h-[34px] text-[13px] focus:ring-0 leading-[1.43] input-transition focus:border-[#1ab394] table-cell relative z-[2] float-left w-full border text-inherit px-3 py-1.5 rounded-[1px] border-solid border-[#e5e6e7]"
                                      name="endTime"
                                      value={formData?.endTime}
                                      onChange={handleChangeFormData}

                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row -mx-[15px]">
                              <div className="px-[15px] float-left w-1/2">
                                <div>
                                  <label className="inline-block max-w-full mb-[5px] font-[700]">
                                    Appointment status
                                  </label>
                                </div>
                                <div className="mb-[15px]">
                                  <div className="mb-[6px]">
                                    <div className="relative table border-separate w-full mb-[6px]">
                                      <div className="bg-[white] w-[43px] table-cell border text-inherit text-sm font-normal leading-none text-center px-3 py-1.5 rounded-[1px] border-solid border-[#e5e6e7] whitespace-nowrap align-middle">
                                        <Icon
                                          path={
                                            confirmationStatus === "0"
                                              ? mdiCalendarCheck
                                              : mdiCalendarBlank
                                          }
                                          size="18px"
                                          color="#676a6c"
                                        />
                                      </div>
                                      <SelectField
                                          searchOption={false}
                                          option={options1}
                                          value={formData?.status}
                                          onChange={handleConfirmation}
                                          // label="Status"
                                          className=" w-[100%]"
                                          default={true}
                                          defaultValue="All Status"
                                        />
                                    
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="px-[15px] float-left w-1/2">
                                <div className="mb-[15px]">
                                  <label className="inline-block max-w-full mb-[5px] font-[700]">
                                    Workplace
                                  </label>
                                  <div className="relative table border-separate w-full mb-[6px]">
                                    <div className="bg-[white] w-[43px] table-cell border text-inherit text-sm font-normal leading-none text-center px-3 py-1.5 rounded-[1px] border-solid border-[#e5e6e7] whitespace-nowrap align-middle">
                                      <Icon
                                        path={mdiMapMarkerRadius}
                                        size="18px"
                                        color="#676a6c"
                                      />
                                    </div>
                                    <input
                                      type="text"
                                      readOnly
                                      placeholder="sdf"
                                      value={itemsdata?.workplace}
                                      className="h-[34px] text-[13px] focus:ring-0 leading-[1.43] input-transition focus:border-inherit table-cell relative z-[2] float-left w-full border text-inherit px-3 py-1.5 rounded-[1px] border-solid border-[#e5e6e7] cursor-not-allowed"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row -mx-[15px] mb-[10px]">
                              <div
                                className={`px-[15px] float-left w-full  justify-between ${
                                  !addSheduleNotes ? "flex" : "hidden"
                                }`}
                              >
                                <div className="mb-[5px] font-[700] cursor-pointer hover:text-[#1AB394]">
                                  Add scheduling notes
                                </div>
                                <div className="flex">
                                  <Icon
                                    path={mdiPlus}
                                    size="18px"
                                    className="text-[#676a6c] hover:text-[#1AB394] cursor-pointer"
                                    onClick={() => {
                                      setAddSheduleNotes(true);
                                    }}
                                  />
                                </div>
                              </div>
                              <div
                                className={`px-[15px] float-left w-full flex justify-between ${
                                  addSheduleNotes ? "flex" : "hidden"
                                }`}
                              >
                                <div className="mb-[5px] font-[700] cursor-pointer hover:text-[#1AB394]">
                                  Scheduling notes
                                </div>
                                <div
                                  className="flex mb-[5px] cursor-pointer text-[#CC5965] group"
                                  onClick={() => {
                                    setAddSheduleNotes(false);
                                  }}
                                >
                                  <div className="text-[#CC5965] hidden group-hover:block">
                                    Remove
                                  </div>
                                  <Icon
                                    path={mdiClose}
                                    size="18px"
                                    className="text-[#676a6c] group-hover:text-[#CC5965]"
                                  />
                                </div>
                              </div>
                            </div>
                            <div
                              className={`row -mx-[15px] mb-[10px] ${
                                addSheduleNotes ? "block" : "hidden"
                              }`}
                            >
                              <div className="mb-[5px] px-[15px] float-left w-full">
                                <textarea
                                  className="text-[13px] focus:ring-0 leading-[1.43] input-transition focus:border-[#1ab394] table-cell relative z-[2] float-left w-full border text-inherit px-3 py-1.5 rounded-[1px] border-solid border-[#e5e6e7]"
                                  rows="2"
                                  cols="2"
                                  name="schedulingNotes"
                                  value={formData?.schedulingNotes}
                                  onChange={handleChangeFormData}
                                ></textarea>
                              </div>
                            </div>
                            <div className="row -mx-[15px]">
                              <div className=" px-[15px] float-left w-full">
                                <div className="inline-block relative cursor-pointer pl-[20px] mt-[10px]">
                                  <input
                                    type="checkbox"
                                    checked={appWithGoogleCalender}
                                    onChange={handleGoogleCalender}
                                    id="appWithGoogleCalender"
                                    className="hidden"
                                  />
                                  {appWithGoogleCalender ? (
                                    <Icon
                                      path={mdiCheckCircle}
                                      color="#1ab394"
                                      size={"20px"}
                                      className="inline-block align-middle absolute left-0"
                                    />
                                  ) : (
                                    <Icon
                                      path={mdiCircleOutline}
                                      color="#cccccc"
                                      size={"20px"}
                                      className="inline-block align-middle absolute left-0"
                                    />
                                  )}
                                  <label
                                    className="pl-[5px] cursor-pointer"
                                    htmlFor="appWithGoogleCalender"
                                  >
                                    Synchronize appointment with Google Calendar
                                  </label>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  {confirmationStatus === "1" ? (
                    <div className="flex items-center px-[30px] pb-[15px]">
                      <button
                        className="px-3 hover:bg-[#FAFAFB] trnasition duration-200 border rounded-[3px] text-[14px] py-[6px]"
                        onClick={() => setIsNewAppModal(false)}
                      >
                        Back
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between px-[30px] pb-[15px]">
                      <button
                        className="px-3 hover:bg-[#FAFAFB] trnasition duration-200 border rounded-[3px] text-[14px] py-[6px]"
                        onClick={() => setIsNewAppModal(false)}
                      >
                        Cancel
                      </button>
                      <div>
                        <button className="px-3 ml-[5px] transition-all duration-[0.5s] rounded-[3px] border border-[#1AB394] bg-white hover:bg-[#1AB394] text-[#1AB394] hover:text-white text-[14px] py-[6px]" onClick={handleSubmit}>
                          Save
                        </button>
                        <button className="px-3 ml-[5px] rounded-[3px] border hover:bg-[#18a689] border-[#1AB394] bg-[#1AB394] text-[#FFFFFF] text-[14px] py-[6px]">
                          Save and close
                        </button>
                      </div>
                    </div>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <AddNewClient isOpen={regClientModal} setIsOpen={setRegClientModal} />
    </div>
  );
};

export default Newappointment;
