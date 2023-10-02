import { Transition } from "@headlessui/react";
import {
  mdiCalendarToday,
  mdiChevronDown,
  mdiDotsVertical,
  mdiLogout,
} from "@mdi/js";
import Icon from "@mdi/react";
import Link from "next/link";
import React, { Fragment, useEffect, useRef, useState } from "react";
import Menu from "../common/Menu";
import { useDispatch, useSelector } from "react-redux";
import { getAllAppointment } from "@/redux/action/appointment";
import moment from "moment";
import { useRouter } from "next/router";

const moreOption = [
  {
    id: "1",
    label: "Mark as completed",
  },
  {
    id: "2",
    label: "Check profile",
  },
  {
    id: "3",
    label: "Edit appointment date",
  },
  {
    id: "4",
    label: "Cancel appointment",
  },
];

const SheduleAppointment = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [appointmentStatus, setAppointmentStatus] = useState("Start");
  const dispatch = useDispatch();
  const router = useRouter()
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  useEffect(() => {
    if (router.pathname === "/admin/professionals/patients/information") {
        setAppointmentStatus("Finish Appointment");
        latestclient = null;
      } else {
        dispatch(getAllAppointment());
      }
  }, [dispatch]);
  const appointmentData = useSelector(
    (state) => state?.Appointment?.appointmentData
  );
  let latestclient, timing;
  if (Array.isArray(appointmentData) && appointmentData.length > 0) {
    latestclient = appointmentData.reduce((a, b) => (a.date > b.date ? a : b));
    const startMoment = moment(latestclient.start);
    timing = startMoment.format("h:mm A");
  } else {
    latestclient = null;
  }
  // const handleStartFinishClick = () => {
  //   if (appointmentStatus === "Start") {
  //     router.push({
  //       pathname: "/admin/professionals/patients/information",
  //       query: { id: latestclient?.clientId },
  //     });
  //   } else if (appointmentStatus === "Finish Appointment") {
    
  //   }
  // };

  return (
    <div className="card-shadow bg-white mt-0 mb-[25px] relative p-0">
      <div className="flex items-center p-[20px_20px_15px_20px] relative">
        <div className="flex-grow">
          <h4 className="text-xl font-normal leading-[1.1] m-0 flex">
            Next appointment{" "}
            <small className="text-[#DB4965] leading-[1] text-[0.6em] font-light ml-[5px] mr-0 mt-auto mb-0.5">
              &#40;Delayed&#41;
            </small>
          </h4>
          <div className="font-[100] text-[12px] text-[#888888] opacity-[0.7]">
            Your appointment should have started 2 hours ago
          </div>
        </div>
        <div className="text-[1.1em] font-[300] md:hidden">
          Today{" "}
          <span>
            at{" "}
            <span className="text-[1.2em] font-[400]">
              {timing ? timing : "4:04 PM"}
            </span>
          </span>
        </div>
        <div className="hidden md:block relative">
          <div
            className="px-[10px] -mx-[10px] cursor-pointer"
            onClick={toggleMenu}
          >
            <Icon path={mdiDotsVertical} size={"24px"} />
          </div>
        </div>
        <Menu
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          options={moreOption}
          className="right-0 hidden md:block top-0"
        />
      </div>
      <div className="pt-[5px] p-[20px]">
        <div className="flex md:flex-col md:relative">
          <div className="-mx-[20px] float-left mr-[20px] pl-[18px] border-l-[2px] md:border-l-[4px] border-[#1AB394] w-3/4 md:w-full relative ">
            <div className="flex">
              <div className="mr-[15px] relative">
                <Link href={"#"}>
                  <img
                    src="/image/clientprof.png"
                    className="max-w-[80px] min-h-[80px] rounded-full border-[1px] border-[#EEEEEE] h-auto"
                  />
                </Link>
              </div>
              <div className="flex flex-col flex-[1] flex-grow">
                <div
                  className="flex gap-[8px]"
                  onClick={() => {
                    router.push({
                      pathname: "/admin/professionals/patients/information",
                      query: { id: latestclient?.clientId },
                    });
                    
                  }}
                >
                  <h3 className="break-words text-[16px]">
                    <Link
                      href={""}
                      className="text-[#676a6c] hover:text-[#1AB394]"
                    >
                      {latestclient?.clientName
                        ? latestclient?.clientName
                        : "Example Client"}
                    </Link>
                  </h3>
                </div>
                <div className="h-[18px] overflow-hidden whitespace-nowrap text-ellipsis font-[300] opacity-[0.6]">
                  {latestclient?.workplace
                    ? latestclient?.workplace
                    : "Om-Workplace"}
                </div>
                <div className="mt-[4px] font-[300] ">
                  <div className="overflow-hidden whitespace-nowrap text-ellipsis text-[85%]">
                    <div className="flex gap-[4px] items-center">
                      <Icon
                        path={mdiCalendarToday}
                        color="#12896D"
                        size={"11px"}
                        className="w-[16px] h-[16px] rounded-full bg-[#E0FAF1] mr-[3px] align-middle justify-center"
                      />
                      <span className="opacity-[0.6]">No appointments yet</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/4 md:mt-[20px] float-left md:w-full pl-[15px] md:p-0  relative md:static">
            <Link
              href="#"
              className={`mt-[5px] bg-[#1AB394] hover:bg-[#18a689] md:bg-[#d3f8eb] hover:border-[#18a689] text-white md:text-[#1AB394] md:mt-[5px] border-[#1AB394] rounded-[3px] block w-full text-xs leading-normal px-2.5 py-[5px] md:font-[600] md:uppercase md:p-[8px_10px] md:border-none text-center font-normal whitespace-nowrap align-middle touch-manipulation bg-none border select-none mb-0 border-solid border-transparent`}
              onClick={()=>{
                router.push({
                   pathname: "/admin/professionals/patients/information",
                   query: { id: latestclient?.clientId },
                 });
              }}
            >
              {appointmentStatus}
            </Link>
            <div className="relative md:hidden">
              <button
                className={`mt-[5px] rounded-[3px] w-full cursor-pointer bg-white border-[1px] text-[12px] border-[#d2d2d2] hover:border-[#eeeeee] leading-[1.5] p-[5px_10px] ${
                  isOpen ? "focus:border-[#d2d2d2]" : ""
                }`}
                onClick={toggleMenu}
              >
                More options{" "}
                <Icon size={"12px"} className="inline" path={mdiChevronDown} />
              </button>
              <Menu
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                options={moreOption}
                className="left-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SheduleAppointment;
