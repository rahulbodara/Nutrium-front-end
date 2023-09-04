import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { FaUser, FaUserPlus } from "react-icons/fa";
import { IoMdCalendar } from "react-icons/io";
import { IoCloseSharp, IoPersonAdd } from "react-icons/io5";
import { MdLocationOn, MdLocationPin } from "react-icons/md";
import SelectMenu from "../common/SelectMenu";
import clientPro from "../../../../public/image/clientprof.png";
import Icon from "@mdi/react";
import {
  mdiAccount,
  mdiAccountPlus,
  mdiCalendarToday,
  mdiVideo,
} from "@mdi/js";
import { BsFillCalendar2EventFill } from "react-icons/bs";
import SelectField from "../common/SelectField";
import { useSelector } from "react-redux";
import AddNewClient from "../Clients/AddNewClient";
import DatePicker from "react-datepicker";
const Newappointment = ({ isNewAppModal, setIsNewAppModal }) => {
  const [open, setOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [itemsdata, setitems] = useState();
  const [section, setsection] = useState(false);
  const [sectionclient, setsectionclient] = useState(false);
  const [filterClient, setFilterClient] = useState("All clients");
  const [searchQuery, setSearchQuery] = useState("");
  const clientsData = useSelector((state) => state?.auth?.clientData);
  const workSpaceData = useSelector((state) => state.Workplace?.workplaceData);
  const clients = Array.isArray(clientsData) ? clientsData : [];
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
  const options1 = [
    {
      id: 1,
      option: "Confirmed",
      name: "Confirmed",
    },
    {
      id: 2,
      option: "NotConfirmed",
      name: "NotConfirmed",
    },
  ];
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
  const handleSelectClientClick = (text) => {
    if (text === "Client") {
      setsectionclient(true);
      setsection(false);
    } else {
      setsectionclient(false);
    }
  };

  const handleConfirmClick = (text) => {
    if (text === "Confirm") {
      setsection(true);
      setsectionclient(false);
    } else {
      setsection(false);
    }
  };
  const handleConfirmation = (e) => { 
    setConfirmationStatus(e.target.value)
 }
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
                    <span className="pt-2 text-[13px] text-center block">
                      Information for scheduling a new appointment
                    </span>
                  </div>
                  <div className="pb-[20px] px-[30px] relative">
                    <div>
                      <div>
                        <div>
                          <div className="pb-[20px]">
                            <div className="row -mx-[15px]">
                              <div
                                className="w-1/2 float-left px-[15px]"
                                onClick={() => {
                                  handleSelectClientClick("Client");
                                }}
                              >
                                <div
                                  className={`${
                                    sectionclient === true
                                      ? "bg-[#1AB394] text-white"
                                      : "bg-[#ffffff] text-black"
                                  } text-center overflow-hidden text-ellipsis p-[0.7em] block border box-border whitespace-nowrap rounded-[5px] border-solid border-[#EEEEEE]`}
                                >
                                  <div className="text-[1.1em] align-middle">
                                    1. Select client
                                  </div>
                                </div>
                              </div>
                              <div
                                className="w-1/2 float-left px-[15px]"
                                onClick={() => {
                                  handleConfirmClick("Confirm");
                                }}
                              >
                                <div
                                  className={`${
                                    section === true
                                      ? "bg-[#1AB394] text-white"
                                      : "bg-[#ffffff] text-black"
                                  } text-center overflow-hidden text-ellipsis p-[0.7em] block border box-border whitespace-nowrap rounded-[5px] border-solid border-[#EEEEEE]`}
                                >
                                  <div className="text-[1.1em] align-middle">
                                    2. Confirm scheduling information
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hidden">
                          <div className="flex mb-[15px]">
                            <div className="mr-[10px] flex-grow">
                              <input
                                type="text"
                                className="h-[34px] text-ellipsis input-transition bg-[white] bg-none border text-inherit block w-full px-3 py-1.5 rounded-[1px] border-solid border-[#e5e6e7] focus:border-[#1AB394] focus:ring-0 placeholder:text-[13px] placeholder:opacity-[0.6]"
                                placeholder="Search clients by name, occupation, identification number or contact..."
                              />
                            </div>
                            <SelectMenu option={options} />
                          </div>
                          <div className="flex flex-col">
                            <div className="my-[5px]">
                              <div className="flex border group cursor-pointer rounded-[1px] border-solid border-[#eeeeee] hover:border-[#1AB394] p-[10px]">
                                <div className="relative">
                                  <Image
                                    src={clientPro}
                                    className="rounded-full max-h-[80px] max-w-[80px]"
                                  />
                                </div>
                                <div className="flex flex-col flex-1 pl-3">
                                  <h1 className="text-[16px] text-[#676a6c] group-hover:text-[#1AB394]">
                                    Example client
                                  </h1>
                                  <span className="text-[13px] opacity-[0.8] text-[#676a6c]">
                                    Occupation example
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
                            <div
                              onClick={() => setOpen(true)}
                              className="border rounded-[1px] cursor-pointer border-solid border-[#eeeeee] group hover:border-[#1AB394] flex p-5 gap-6 text-center items-center "
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
                        </div>
                        {section === false ? (
                          <div>
                            <form className="new-appointment">
                              <div className="row -mx-[15px]">
                                <div className="px-[15px] float-left  w-[100%]">
                                  {/* <label className='inline-block max-w-full mb-[5px] font-[700]'>Client</label> */}
                                  <div className="mb-[15px] flex items-end gap-[10px]">
                                    <div className="w-[100%]">
                                      <input
                                        type="text"
                                        className="w-[100%] border-[1px] focus:border-[#1AB394] focus:shadow-[#1AB394] border-[#e5e6e7] h-[34px] text-[14px] placeholder:text-[#ccc]"
                                        placeholder="Search clients by name, occupation, identification number or contact..."
                                        value={searchQuery}
                                        onChange={(e) =>
                                          setSearchQuery(e.target.value)
                                        }
                                      />
                                    </div>
                                    <div>
                                      <SelectField
                                        searchOption={true}
                                        option={options}
                                        label="Search"
                                        className="mt-[7px]"
                                        onChange={HandleValue}
                                        // value={formData?.typeOfClients || ""}
                                        // setFormData={setFormData}
                                        //   onChange={handleTypeOfClientsChange}
                                      />
                                    </div>
                                  </div>
                                  {Array.isArray(filteredClients) &&
                                    filteredClients.map((items, key) => (
                                      <div
                                        className="group hover:border-[#1AB394] p-[13px] 
                                    my-[5px] border-[1px] border-[#eeeeee] flex"
                                        onClick={() => {
                                          handleConfirmClick("Confirm");
                                          setitems(items);
                                        }}
                                      >
                                        <div className=" mr-[15px] relative">
                                          <Image
                                            src={clientPro}
                                            className="rounded-full w-[80px] border-[1px] border-[#eeeeee] align-middle"
                                          />
                                        </div>
                                        <div className="align-middle relative flex flex-col flex-grow min-w-0">
                                          <div className="flex gap-[8px]">
                                            <h3 className="group-hover:text-[#1AB394] pr-[25px] break-words text-[16px]">
                                              {items?.fullName}
                                            </h3>
                                          </div>
                                          <Icon
                                            path={mdiAccount}
                                            color="#aaaaaa"
                                            size="18px"
                                            className="absolute top-0 right-0"
                                          />
                                          <div className="h-[18px] overflow-hidden whitespace-nowrap text-ellipsis font-[300]">
                                            {items?.occupation}
                                          </div>
                                          <div className="py-[4px] flex items-center gap-[6px]">
                                            <p className=" rounded-full flex items-center justify-center w-[18px] h-[18px] bg-[#E0FAF1] text-[#1AB394]">
                                              <MdLocationPin className="m-auto flex items-center text-[#1AB394]" />
                                            </p>
                                            <p className="text-[12px]">
                                              {items?.workplace}
                                            </p>
                                          </div>
                                          <div className="py-[2px] flex items-center gap-[6px]">
                                            <p className=" rounded-full flex items-center justify-center w-[18px] h-[18px] bg-[#E0FAF1] text-[#1AB394">
                                              <BsFillCalendar2EventFill className="m-auto text-[10px] flex items-center text-[#1AB394]" />
                                            </p>
                                            <p className="text-[12px]">
                                              No appointments yet
                                            </p>
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
                                    ))}
                                  <div
                                    className="group  hover:border-[#1AB394] hover:text-[#1AB394] p-[13px] mb-[15px] border-[1px] border-[#eeeeee] flex"
                                    onClick={() => setOpen(true)}
                                  >
                                    <div className="flex items-center gap-[24px]">
                                      <IoPersonAdd className="text-[75px]" />
                                      <p className="group-hover:text-[#1AB394] text-[#888888] text-[16px]">
                                        Add new client
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                            <div className="flex justify-start">
                              <button
                                className="px-3 hover:bg-[#FAFAFB] trnasition duration-200 border rounded-[3px] text-[14px] py-[6px]"
                                onClick={() => setIsNewAppModal(false)}
                              >
                                Back
                              </button>
                            </div>
                          </div>
                        ) : (
                          <>
                            <div>
                              <div className="flex gap-[30px]">
                                <div className="w-[50%]">
                                  <p className="text-[#676A6C] text-[13px] font-[700] pb-[5px]">
                                    Client
                                  </p>
                                  <div className="p-[13px] flex items-start justify-between border-[1px] border-[#EEEEEE]">
                                    <div className="flex items-center gap-3">
                                      <Image
                                        src={clientPro}
                                        className="rounded-full w-[45px] border-[1px] border-[#eeeeee] align-middle"
                                      />
                                      <div>
                                        <p>{itemsdata?.fullName}</p>
                                        <p>{itemsdata?.occupation}</p>
                                      </div>
                                    </div>
                                    <div>
                                      <Icon
                                        path={mdiAccount}
                                        color="#aaaaaa"
                                        size="18px"
                                        className=""
                                      />
                                    </div>
                                  </div>
                                  <div className="mt-[15px]">
                                    <lable className="text-[#676A6C] text-[13px] font-[700] pb-[5px]">
                                      {" "}
                                      Start of appointment
                                    </lable>
                                    <div class="form-group row">
                                      <div class="mt-3 col-lg-4 col-md-9 col-sm-12 time-datepicker flex w-[100%] items-center">
                                        <div className="w-[34px] flex h-[34px] border-[1px] border-[#e5e6e7] items-center justify-center border-r-0">
                                          <BsFillCalendar2EventFill />
                                        </div>
                                        <DatePicker
                                          selected={startDate}
                                          onChange={(date) =>
                                            setStartDate(date)
                                          }
                                          showTimeSelect
                                          dateFormat="MMMM d, yyyy h:mm aa"
                                          timePickerArrows={true}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="mt-[15px] appointment-select">
                                    <lable className="text-[#676A6C] text-[13px] font-[700] pb-[5px]">
                                      {" "}
                                      Start of appointment
                                    </lable>
                                    <div className="flex w-[100%] items-end">
                                      <div className="w-[34px] flex h-[34px] border-[1px] border-[#e5e6e7] items-center justify-center border-r-0">
                                        <BsFillCalendar2EventFill />
                                      </div>
                                      <SelectField
                                        className="mt-2 w-[100%]"
                                        searchOption={false}
                                        option={options1}
                                        // onChange={HandleValue}
                                        // label="Type of service"
                                        // id="typeofservice"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="w-[50%] Video-consultation">
                                  <div>
                                    <p className="text-[#676A6C] text-[13px] font-[700] pb-[5px]">
                                      Video consultation
                                    </p>
                                  </div>
                                  <div>
                                    <div className="flex items-end">
                                      <div className="w-[34px] flex h-[34px] border-[1px] border-[#e5e6e7] items-center justify-center border-r-0">
                                        <BsFillCalendar2EventFill />
                                      </div>
                                      <SelectField
                                        className=" w-[100%]"
                                        searchOption={false}
                                        option={options1}
                                        // onChange={HandleValue}
                                        // label="Type of service"
                                        // id="typeofservice"
                                      />
                                    </div>
                                  </div>
                                  <div className="mt-[6px]">
                                    <div className="flex items-end">
                                      <div className="w-[34px] flex h-[34px] border-[1px] border-[#e5e6e7] items-center justify-center border-r-0">
                                        <BsFillCalendar2EventFill />
                                      </div>
                                      <input
                                        type="text"
                                        className="w-[100%] h-[34px] border-[1px] border-[#e5e6e7]"
                                        disabled={true}
                                        value="Not available in this options"
                                      />
                                    </div>
                                  </div>
                                  <div className="mt-[15px]">
                                    <lable className="text-[#676A6C] text-[13px] font-[700] pb-[5px]">
                                      {" "}
                                      End of appointment
                                    </lable>
                                    <div class="form-group row">
                                      <div class="mt-3 col-lg-4 col-md-9 col-sm-12 time-datepicker flex w-[100%] items-center">
                                        <div className="w-[34px] flex h-[34px] border-[1px] border-[#e5e6e7] items-center justify-center border-r-0">
                                          <BsFillCalendar2EventFill />
                                        </div>
                                        <DatePicker
                                          selected={startDate}
                                          onChange={(date) =>
                                            setStartDate(date)
                                          }
                                          showTimeSelect
                                          dateFormat="MMMM d, yyyy h:mm aa"
                                          timePickerArrows={true}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="mt-[15px]">
                                    <lable className="text-[#676A6C] text-[13px] font-[700] pb-[5px]">
                                      {" "}
                                      Workplace
                                    </lable>
                                    <div class="form-group row">
                                      <div class="mt-3 col-lg-4 col-md-9 col-sm-12 time-datepicker flex w-[100%] items-center">
                                        <div className="w-[34px] flex h-[34px] border-[1px] border-[#e5e6e7] items-center justify-center border-r-0">
                                          <BsFillCalendar2EventFill />
                                        </div>
                                        <input
                                          type="text"
                                          className="w-[100%] h-[34px] border-[1px] border-[#e5e6e7]"
                                          disabled={true}
                                          value={itemsdata?.workplace}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <AddNewClient isOpen={open} setIsOpen={setOpen} />
    </div>
  );
};

export default Newappointment;
