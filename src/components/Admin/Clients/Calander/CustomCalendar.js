import React, { Fragment, useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/en-gb";
import {
  mdiAccount,
  mdiCalendarCheck,
  mdiCalendarClock,
  mdiCalendarText,
  mdiCalendarToday,
  mdiChevronLeft,
  mdiChevronRight,
  mdiCircleOutline,
  mdiClose,
  mdiHelpCircleOutline,
  mdiInformationOutline,
  mdiLinkOff,
  mdiMapMarkerRadius,
  mdiPencil,
  mdiPlus,
  mdiVideo,
} from "@mdi/js";
import Icon from "@mdi/react";
import { useDispatch, useSelector } from "react-redux";
import {
  EditAppointment,
  RemoveAppointment,
  getAllAppointment,
} from "@/redux/action/appointment";
import { MdLocationOn } from "react-icons/md";
import clientPro from "../../../../../public/image/clientprof.png";
import SelectField from "../../common/SelectField";
import { Dialog, Transition } from "@headlessui/react";
import { IoCloseSharp } from "react-icons/io5";
import { handleApiCall } from "@/util/apiUtils";
import { EditEvent, GetAllEventData } from "@/redux/action/event";
import Modal from "../../common/Modal";
const localizer = momentLocalizer(moment);
const CustomToolbar = ({
  label,
  date,
  view,
  onNavigate,
  onView,
  selectedMonth,
  setSelectedMonth,
  updateCalendarDate,
}) => {
  console.log(label, "labelbalenalernhm");
  console.log(selectedMonth, "selectedMonth");
  const handleTodayClick = () => {
    onView("month");
    onNavigate(new Date());
  };

  const handleNavigateBack = () => {
    console.log("Navigate Back");
    const newDate = moment(date).subtract(1, "month").toDate();
    console.log("Current date:", date);
    console.log("New date:", newDate);
    onNavigate(newDate);
    updateCalendarDate(newDate);
  };

  const handleNavigateNext = () => {
    console.log("Navigate Next");
    const newDate = moment(date).add(1, "month").toDate();
    console.log("Current date:", date);
    console.log("New date:", newDate);
    onNavigate(newDate);
    updateCalendarDate(newDate);
  };

  const handleCalender = (val) => {
    console.log("___________function______", val);
    onView(val);
    setSelectedMonth(val);
  };

  // const handleWeekClick = () => {
  //   onView("week");
  //   setSelectedMonth(2);
  // };
  // const handleDayClick = () => {
  //   onView("day");
  //   setSelectedMonth(3);
  // }
  // const handleListClick = () => {
  //   onView("list");
  //   setSelectedMonth(4);
  // }

  return (
    <div className="rbc-toolbar-label flex items-center justify-between mb-[19px] custom-toolbar sm:flex-wrap sm:justify-center">
      <div className="flex sm:flex-col flex-row  gap-[12px] sm:w-full">
        <div className="flex ">
          <button
            className="border px-[7.5px] rounded-l-[0.25em] sm:w-1/2"
            onClick={handleNavigateBack}
          >
            <Icon path={mdiChevronLeft} size={1} className="m-auto" />
          </button>
          <button
            className="border px-[7.5px] ml-[-1px] rounded-r-[0.25em] sm:w-1/2"
            onClick={handleNavigateNext}
          >
            <Icon path={mdiChevronRight} size={1} className="m-auto" />
          </button>
        </div>
        {/* <button
          className=" border px-[7.5px] text-[1em] border-[#e7eaec] rounded-r-[0.25em]"
          onClick={handleTodayClick}
        >
          Today
        </button> */}
      </div>

      <div>
        <span className="text-[22.75px] font-[300] sm:text-[15.75px]">
          {label}
        </span>
      </div>
      <div className="flex">
        <button
          className={`${selectedMonth === "month"
              ? "bg-[#1AB394] border-[#1AB394] text-white"
              : ""
            } border px-[7.5px] rounded-l-[0.25em] sm:text-[15px]`}
          onClick={() => handleCalender("month")}
        >
          Month
        </button>
        <button
          className={`${selectedMonth === "week"
              ? "bg-[#1AB394] border-[#1AB394] text-white"
              : ""
            } border px-[7.5px] rounded-r-[0.25em] sm:text-[15px]`}
          onClick={() => handleCalender("week")}
        >
          Week
        </button>
        <button
          className={`${selectedMonth === "day"
              ? "bg-[#1AB394] border-[#1AB394] text-white"
              : ""
            } border px-[7.5px] rounded-r-[0.25em] sm:text-[15px]`}
          onClick={() => handleCalender("day")}
        >
          Day
        </button>
        <button
          className={`${selectedMonth === "list"
              ? "bg-[#1AB394] border-[#1AB394] text-white"
              : ""
            } border px-[7.5px] rounded-r-[0.25em] sm:text-[15px]`}
          onClick={() => handleCalender("list")}
        >
          List
        </button>
      </div>
    </div>
  );
};

const CustomEvent = ({ event }) => {
  const [item, setItem] = useState();
  const [addSheduleNotes, setAddSheduleNotes] = useState(false);
  const [appWithGoogleCalender, setAppWithGoogleCalender] = useState(false);
  const [open, setIsopen] = useState(false);
  const [eventopen, seteventIsopen] = useState(false);
  const [formData, setFormData] = useState();
  const [eventformData, seteventformData] = useState();
  const [eventitem, seteventitem] = useState();
  const dispatch = useDispatch();
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
  useEffect(() => {
    if (item) {
      setFormData({
        ...formData,
        newStartTime: moment(item.start).format("YYYY-MM-DDTHH:mm"),
        newEndTime: moment(item.end).format("YYYY-MM-DDTHH:mm"),
        schedulingNotes: item.schedulingNote || "",
        status: item.status,
        videoConsultation: item.videoConsultation,
        workplace: item.workplace,
      });
    }
  }, [item]);
  useEffect(() => {
    if (eventitem) {
      seteventformData({
        ...eventformData,
        title: eventitem.title,
        start: moment(eventitem.start).format("YYYY-MM-DDTHH:mm"),
        end: moment(eventitem.end).format("YYYY-MM-DDTHH:mm"),
      });
    }
  }, [eventitem]);
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
  const handleChangeFormData = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };
  const handleChangeeventFormData = (e) => {
    const { name, value } = e.target;
    seteventformData((eventformData) => ({
      ...eventformData,
      [name]: value,
    }));
  };
  const handleSubmit = async () => {
    try {
      const updatedFormData = {
        ...formData,
      };

      const success = await handleApiCall(
        dispatch,
        EditAppointment(updatedFormData, item._id),
        "Appointment Scheduled Edited Successfully."
      );
      await dispatch(getAllAppointment());
      if (success) {
        setIsopen(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleEventSubmit = async () => {
    try {
      const updatedFormData = {
        ...eventformData,
      };

      const success = await handleApiCall(
        dispatch,
        EditEvent(updatedFormData, eventitem.id),
        "Event Edited Successfully."
      );
      await dispatch(GetAllEventData());
      if (success) {
        setIsopen(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteItem = async (id) => {
    // debugger;
    if (id) {
      try {
        const success = await handleApiCall(
          dispatch,
          RemoveAppointment(id),
          "Appointment Deleted Successfully"
        );
        console.log("Success", success);
        if (success) {
          dispatch(getAllAppointment());
          setIsopen(false);
        }
      } catch (error) {
        console.error("Error deleting secretary:", error);
      }
    }
  };
  const renderEventDetails = () => {
    return (
      <div>
        <div className="flex gap-1">
          <div className="font-bold text-[#676a6c]">
            {moment(event.start).format("h:mm A")}
          </div>
          <div>{event.clientName}</div>
        </div>
        <div className="flex">
          <MdLocationOn className="text-[#676a6c]" /> {event.workplace}
        </div>
      </div>
    );
  };
  const renderEventDataDetails = () => {
    return (
      <div>
        <div className="flex gap-1">
          <div className="font-bold text-[#676a6c]">{event.title}</div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div
        className={`${event.status === "not_confirmed"
            ? "border-2 border-t border-solid border-t-[#1AB394] border-r-[#DDDDDD] border-b-[#DDDDDD] border-l-[#DDDDDD]"
            : ""
          } ${event.status === "confirmed"
            ? "border-2 border-t border-solid border-t-[#EA9F77] border-r-[#DDDDDD] border-b-[#DDDDDD] border-l-[#DDDDDD]"
            : ""
          } text-gray-500 h-[100%] text-[11px] rounded-s`}
        onClick={() => {
          setItem(event);
          setIsopen(true);
        }}
      >
        {renderEventDetails()}
      </div>
      {event.resource === "events" && (
        <div
          className={`border-2 border-t mt-1 border-solid border-t-[#2BA0CC] border-r-[#DDDDDD] border-b-[#DDDDDD] border-l-[#DDDDDD] text-gray-500 h-[100%] text-[11px] rounded-s`}
          onClick={() => {
            seteventitem(event);
            seteventIsopen(true);
            console.log("eVENT",event.source)
          }}
        >
          {renderEventDataDetails()}
        </div>
      )}
      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-[9999]" onClose={setIsopen}>
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
                <Dialog.Panel className="w-full max-w-[780px] transform overflow-hidden rounded bg-white  text-left align-middle shadow-xl transition-all">
                  <div className="p-[25px] relative">
                    <button
                      onClick={() => setIsopen(false)}
                      className="absolute right-[10px] top-[10px] outline-none"
                    >
                      <IoCloseSharp className="text-[18px]" />
                    </button>
                    <h2 className="text-[28px] leading-[40px] text-center">
                      Edit scheduled appointment
                    </h2>
                    <span className="text-[13px] text-center block">
                      Update scheduling details
                    </span>
                  </div>
                  <div>
                    <div className="px-[30px] pb-[20px]">
                      <div className="row -mx-[15px]">
                        <div className="px-[15px] float-left w-1/2">
                          <label className="inline-block max-w-full mb-[5px] font-[700]">
                            Client
                          </label>
                          <div className="h-[74px] p-[13px] mb-[15px] border-[1px] border-[#eeeeee] flex">
                            <div className="h-[45px] mr-[15px] relative">
                              <img
                                src={"/image/clientprof.png"}
                                className="rounded-full max-h-[45px] max-w-[45px] border-[1px] border-[#eeeeee] align-middle"
                              />
                            </div>
                            <div className="align-middle relative flex flex-col flex-grow min-w-0">
                              <div className="flex gap-[8px]">
                                <h3 className="pr-[25px] break-words text-[16px]">
                                  {item?.clientName}
                                </h3>
                              </div>
                              <Icon
                                path={mdiAccount}
                                color="#aaaaaa"
                                size="18px"
                                className="absolute top-0 right-0"
                              />{" "}
                              <div className="h-[18px] overflow-hidden whitespace-nowrap text-ellipsis font-[300]">
                                {item?.workplace}
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
                                  onChange={HandleVideoCallConsultationValue}
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
                                name="newStartTime"
                                value={formData?.newStartTime || ""}
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
                                name="newEndTime"
                                value={formData?.newEndTime}
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
                                    path={mdiCalendarCheck}
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
                                value={item?.workplace}
                                className="h-[34px] text-[13px] focus:ring-0 leading-[1.43] input-transition focus:border-inherit table-cell relative z-[2] float-left w-full border text-inherit px-3 py-1.5 rounded-[1px] border-solid border-[#e5e6e7] cursor-not-allowed"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row -mx-[15px] mb-[10px]">
                        <div
                          className={`px-[15px] float-left w-full  justify-between ${!addSheduleNotes ? "flex" : "hidden"
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
                          className={`px-[15px] float-left w-full flex justify-between ${addSheduleNotes ? "flex" : "hidden"
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
                        <div
                          className={`row -mx-[15px] mb-[10px] ${addSheduleNotes ? "block" : "hidden"
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
                                // onChange={handleGoogleCalender}
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
                        <div className="flex items-center justify-between pt-[20px] px-[1px] pb-[15px]">
                          <div className="flex gap-2">
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                handleDeleteItem(event._id);
                              }}
                              className="px-3 hover:bg-[#FAFAFB] trnasition duration-200 border rounded-[3px] text-[14px] py-[6px] active:shadow-[0_2px_5px_rgba(0,0,0,0.15)_inset]"
                            >
                              Remove
                            </button>
                            <button
                              className="px-3 hover:bg-[#FAFAFB] trnasition duration-200 border rounded-[3px] text-[14px] py-[6px]"
                              onClick={() => setIsopen(false)}
                            >
                              Cancel
                            </button>
                          </div>
                          <div>
                            <button
                              className="px-3 ml-[5px] transition-all duration-[0.5s] rounded-[3px] border border-[#1AB394] bg-white hover:bg-[#1AB394] text-[#1AB394] hover:text-white text-[14px] py-[6px]"
                              onClick={handleSubmit}
                            >
                              Save
                            </button>
                            <button
                              className="px-3 ml-[5px] rounded-[3px] border hover:bg-[#18a689] border-[#1AB394] bg-[#1AB394] text-[#FFFFFF] text-[14px] py-[6px]"
                              onClick={handleSubmit}
                            >
                              Save and close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <Modal
        title={"Edit an event"}
        subtitle={"Edit an event on your calendar"}
        isOpen={eventopen}
        className="max-w-[600px]"
        setIsOpen={seteventIsopen}
      >
        <div className="px-[30px] pb-[20px]">
          {/* <form 
          // onSubmit={handleSubmit(onSubmit)}
          > */}
          <div className="mb-[15px]">
            <label className="font-bold text-[13px] flex  mb-[5px] gap-1">
              Title
            </label>
            <div className="flex">
              <div className="border h-[34px] w-[43px] flex items-center justify-center border-[#e5e6e7] px-3 py-[6px]">
                <Icon path={mdiPencil} size={0.7} />
              </div>
              <input
                type="text"
                name="title"
                value={eventformData?.title || ""}
                className="px-3 h-[34px] ml-[-1px] focus:border-[#1ab394] focus:outline-none focus:ring-0 outline-none trnasition duration-300 w-full py-[6px] border border-[#e5e6e7] text-[13px]"
                onChange={handleChangeeventFormData}
              />
            </div>
          </div>
          <div className="mb-[15px]">
            <label className="font-bold text-[13px] flex  mb-[5px] gap-1">
              Start of the event
            </label>
            <div className="flex">
              <div className="border h-[34px] w-[43px] flex items-center justify-center border-[#e5e6e7] px-3 py-[6px]">
                <Icon path={mdiCalendarClock} size={0.7} />
              </div>
              <input
                className="px-3 h-[34px] ml-[-1px] focus:border-[#1ab394] focus:outline-none focus:ring-0 outline-none trnasition duration-300 w-full py-[6px] border border-[#e5e6e7] text-[13px]"
                type={"datetime-local"}
                name="start"
                value={eventformData?.start || ""}
                onChange={handleChangeeventFormData}
              />
            </div>
          </div>
          <div className="mb-[15px]">
            <label className="font-bold text-[13px] flex  mb-[5px] gap-1">
              End of the event
            </label>
            <div className="flex">
              <div className="border h-[34px] w-[43px] flex items-center justify-center border-[#e5e6e7] px-3 py-[6px]">
                <Icon path={mdiCalendarClock} size={0.7} />
              </div>
              <input
                className="px-3 h-[34px] ml-[-1px] focus:border-[#1ab394] focus:outline-none focus:ring-0 outline-none trnasition duration-300 w-full py-[6px] border border-[#e5e6e7] text-[13px]"
                type={"datetime-local"}
                name="end"
                value={eventformData?.end || ""}
                onChange={handleChangeFormData}
              />
            </div>
          </div>
          <div className="flex gap-2  items-center mb-2.5">
            <input
              id="allday"
              name="eventCheck"
              type="checkbox"
              className="h-4 w-4 rounded-full border-gray-300 text-[#1AB394] focus:ring-0"
            />
            <label
              htmlFor="allday"
              className="text-[13px] select-none cursor-pointer"
            >
              All day
            </label>{" "}
          </div>
          <div className="flex gap-2  items-center mb-2.5">
            <input
              id="blockCalendar"
              name="eventCheck"
              type="checkbox"
              className="h-4 w-4 rounded-full border-gray-300 text-[#1AB394] focus:ring-0"
            />
            <label
              htmlFor="blockCalendar"
              className="text-[13px] cursor-pointer select-none"
            >
              Block calendar
            </label>{" "}
            <Icon
              path={mdiHelpCircleOutline}
              size={"18px"}
              data-tooltip-id="blockCalender"
            />
          </div>
          <div className="flex gap-2  items-center mb-2.5">
            <input
              id="Synchronize"
              name="eventCheck"
              type="checkbox"
              className="h-4 w-4 rounded-full border-gray-300 text-[#1AB394] focus:ring-0"
            />
            <label
              htmlFor="Synchronize"
              className="text-[13px] select-none cursor-pointer"
            >
              Synchronize event with Google Calendar
            </label>{" "}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="px-3 hover:bg-[#FAFAFB] trnasition duration-200 border rounded-[3px] text-[14px] py-[6px]"
              onClick={() => {
                seteventIsopen(false);
              }}
            >
              Back
            </button>
            <div>
              <button
                className="px-3 hover:bg-[#FAFAFB] trnasition duration-200 border rounded-[3px] text-[14px] py-[6px]"
                onClick={() => {
                  seteventIsopen(false);
                }}
              >
                Cancel
              </button>
              <button
                className="px-3 ml-[5px] rounded-[3px] border hover:bg-[#18a689] border-[#1AB394] bg-[#1AB394] text-[#FFFFFF] text-[14px] py-[6px]"
                onClick={handleEventSubmit}
              >
                Create
              </button>
            </div>
          </div>
          {/* </form> */}
        </div>
      </Modal>
    </>
  );
};

const CustomCalendar = (props) => {
  const [currentView, setCurrentView] = useState("month");
  const [date, setDate] = useState(new Date());
  const [selectedMonth, setSelectedMonth] = useState("month");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAppointment());
  }, [dispatch]);
  const appointmentData = useSelector(
    (state) => state?.Appointment?.appointmentData
  );
  useEffect(() => {
    dispatch(GetAllEventData());
  }, [dispatch]);
  const eventData = useSelector((state) => state?.Event?.eventData);
  const handleNavigate = (newDate) => {
    const momentDate = moment(newDate);
    setDate(momentDate);
  };

  const handleViewChange = (newView) => {
    console.log("newView --->>", newView);
    setCurrentView(newView);
  };

  const events = [
    ...appointmentData?.map((appointment) => ({
      ...appointment,
      id: appointment._id,
      title: appointment.workplace,
      start: new Date(appointment.start),
      end: new Date(appointment.end),
      resource: "appointment",
    })),
    ...eventData.map((events) => ({
      ...events,
      id: events._id,
      title: events.title,
      start: new Date(events.start),
      end: new Date(events.end),
      resource: "events",
    })),
  ];

  return (
    <div>
      <Calendar
        className="calendar-main"
        view={currentView}
        onView={handleViewChange}
        date={date}
        onNavigate={handleNavigate}
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: props?.height }}
        components={{
          toolbar: (props) => {
            console.log("Props---->", props);
            return (
              <CustomToolbar
                label={props.label}
                onNavigate={props.onNavigate}
                onView={props.onView}
                selectedMonth={selectedMonth}
                setSelectedMonth={setSelectedMonth}
                date={date}
                updateCalendarDate={setDate}
              />
            );
          },
          event: (eventProps) => <CustomEvent {...eventProps} />,
        }}
      />
    </div>
  );
};

export default CustomCalendar;
