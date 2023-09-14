import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/en-gb";
import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";
import Icon from "@mdi/react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAppointment } from "@/redux/action/appointment";
import { MdLocationOn } from "react-icons/md";

const localizer = momentLocalizer(moment);

const CustomToolbar = ({ label, date, view, onNavigate, onView }) => {
  const [selectedMonth, setSelectedMonth] = useState(1);
  const handleTodayClick = () => {
    onView("day");
    onNavigate(new Date());
  };
  const handleNavigateBack = () => {
    const newDate = moment(date).subtract(1, "month").toDate();
    onNavigate(newDate);
  };

  const handleNavigateNext = () => {
    const newDate = moment(date).add(1, "month").toDate();
    onNavigate(newDate);
  };
  const handleMonthClick = () => {
    onView("month");
    setSelectedMonth(1);
  };

  const handleWeekClick = () => {
    onView("week");
    setSelectedMonth(2);
  };

  return (
    <div className="rbc-toolbar-label flex items-center justify-between mb-[19px] custom-toolbar">
      <div className="flex sm:flex-col flex-row  gap-[12px]">
        <div className="flex ">
          <button
            className="border px-[7.5px] rounded-l-[0.25em]"
            onClick={handleNavigateBack}
          >
            <Icon path={mdiChevronLeft} size={1} />
          </button>
          <button
            className="border px-[7.5px] ml-[-1px] rounded-r-[0.25em]"
            onClick={handleNavigateNext}
          >
            <Icon path={mdiChevronRight} size={1} />
          </button>
        </div>
        <button
          className=" border px-[7.5px] text-[1em] border-[#e7eaec] rounded-r-[0.25em]"
          onClick={handleTodayClick}
        >
          Today
        </button>
      </div>
      <div>
        <span className="text-[22.75px] font-[300]">{label}</span>
      </div>
      <div className="flex">
        <button
          className={`${
            selectedMonth === 1
              ? "bg-[#1AB394] border-[#1AB394] text-white"
              : ""
          } border px-[7.5px] rounded-l-[0.25em]`}
          onClick={handleMonthClick}
        >
          Month
        </button>
        <button
          className={`${
            selectedMonth === 2
              ? "bg-[#1AB394] border-[#1AB394] text-white"
              : ""
          } border px-[7.5px] ml-[-1px] rounded-r-[0.25em]`}
          onClick={handleWeekClick}
        >
          Week
        </button>
        {/* <button onClick={() => onView('day')}>Day</button>
    <button onClick={() => onView('agenda')}>Agenda</button> */}
      </div>
    </div>
  );
};
const CustomEvent = ({ event }) => {
  return (
    <div
      className={`${
        event.status === "not_confirmed" &&
        `
      border-2 border-t border-solid border-t-[#1AB394] border-r-[#DDDDDD] border-b-[#DDDDDD] border-l-[#DDDDDD]`
      } 
      ${
        event.status === "confirmed" &&
        `border-2 border-t border-solid border-t-[#EA9F77] border-r-[#DDDDDD] border-b-[#DDDDDD] border-l-[#DDDDDD]
    `
      } text-gray-500 h-[100%] text-[11px] rounded-s`}
    >
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
const CustomCalendar = (props) => {
  const [currentView, setCurrentView] = useState("month"); // Initial view
  const [date, setDate] = useState(new Date()); // Initialize with the current date
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAppointment());
  }, [dispatch]);
  const appointmentData = useSelector(
    (state) => state?.Appointment?.appointmentData
  );
  const handleNavigate = (newDate) => {
    const momentDate = moment(newDate);
    setDate(momentDate);
  };

  const handleViewChange = (newView) => {
    setCurrentView(newView);
  };
  return (
    <div>
      <Calendar
        className="calendar-main"
        view={currentView}
        onView={handleViewChange}
        date={date}
        onNavigate={handleNavigate}
        localizer={localizer}
        events={appointmentData?.map((appointment) => ({
          ...appointment,
          // title: appointment.clientName,
          // workplace:appointment.workplace
        }))}
        startAccessor="start"
        endAccessor="end"
        style={{ height: props?.height }}
        components={{
          toolbar: (props) => {
            return (
              <CustomToolbar
                label={props.label}
                onNavigate={props.onNavigate}
                onView={props.onView}
              />
            );
          },
          event: CustomEvent,
        }}
      />
      {/* <Calendar
          className="calendar-main"
          view={currentView}
          onView={handleViewChange}
          date={date}
          onNavigate={handleNavigate}
          localizer={localizer}
          events={
            appointmentData?.map((appointment) => ({
            ...appointment,
            // title: appointment.clientName,
            // workplace:appointment.workplace
          }))
          }
          startAccessor="start"
          endAccessor="end"
          style={{
            height: props.height,
            backgroundColor: "white",
          }}
          components={{
            toolbar: (props) => (
              <CustomToolbar
                label={props.label}
                onNavigate={props.onNavigate}
                onView={props.onView}
              />
            ),
            event: CustomEvent, // Use the custom event component to render events
          }}
        /> */}
    </div>
  );
};

export default CustomCalendar;
