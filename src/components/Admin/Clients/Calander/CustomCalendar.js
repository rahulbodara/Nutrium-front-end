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

const CustomToolbar = ({ label, date, view, onNavigate, onView, selectedMonth, setSelectedMonth }) => {
  console.log(label, "labelbalenalernhm")
  // const [selectedMonth, setSelectedMonth] = useState('');
  console.log(selectedMonth, 'selectedMonth')

  const [currentView, setCurrentView] = useState("month");
  const [setDate] = useState(new Date());

  const handleTodayClick = () => {
    onView("month");
    onNavigate(new Date());
  };

  const handleNavigateBack = () => {
    const newDate = moment(date).subtract(1, "month").toDate();
    console.log("Current date:", date);
    console.log("New date:", newDate);
    onNavigate(newDate);
  };

  const handleNavigateNext = () => {
    const newDate = moment(date).add(1, "month").toDate();
    console.log("Current date:", date);
    console.log("New date:", newDate);
    onNavigate(newDate);
  };

  const handleCalender = (val) => {
    console.log('___________function______', val)
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
        <span className="text-[22.75px] font-[300] sm:text-[15.75px]">{label}</span>
      </div>
      <div className="flex">
        <button
          className={`${selectedMonth === 'month'
            ? "bg-[#1AB394] border-[#1AB394] text-white"
            : ""
            } border px-[7.5px] rounded-l-[0.25em] sm:text-[15px]`}
          onClick={() => handleCalender('month')}
        >
          Month
        </button>
        <button
          className={`${selectedMonth === 'week'
            ? "bg-[#1AB394] border-[#1AB394] text-white"
            : ""
            } border px-[7.5px] rounded-r-[0.25em] sm:text-[15px]`}
          onClick={() => handleCalender('week')}
        >
          Week
        </button>
        <button className={`${selectedMonth === 'day'
          ? "bg-[#1AB394] border-[#1AB394] text-white"
          : ""
          } border px-[7.5px] rounded-r-[0.25em] sm:text-[15px]`} onClick={() => handleCalender('day')}>Day</button>
        <button className={`${selectedMonth === 'list'
          ? "bg-[#1AB394] border-[#1AB394] text-white"
          : ""
          } border px-[7.5px] rounded-r-[0.25em] sm:text-[15px]`} onClick={() => handleCalender('list')}>List</button>
      </div>
    </div>
  );
};
const CustomEvent = ({ event }) => {
  return (
    <div
      className={`${event.status === "not_confirmed" &&
        `
      border-2 border-t border-solid border-t-[#1AB394] border-r-[#DDDDDD] border-b-[#DDDDDD] border-l-[#DDDDDD]`
        } 
      ${event.status === "confirmed" &&
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
  console.log(props, "propsorpsdo")
  const [currentView, setCurrentView] = useState("month");
  const [date, setDate] = useState(new Date());
  const [selectedMonth, setSelectedMonth] = useState('month');
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
                selectedMonth={selectedMonth}
                setSelectedMonth={setSelectedMonth}
                date={date}
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
