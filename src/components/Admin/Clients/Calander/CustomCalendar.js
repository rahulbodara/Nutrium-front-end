import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/en-gb';
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';
import Icon from '@mdi/react';

const localizer = momentLocalizer(moment);

const CustomToolbar = ({ label, date, view, onNavigate, onView }) => {
  const [selectedMonth , setSelectedMonth] = useState(1)
  const handleTodayClick = () => {
    onView('day');
    onNavigate(new Date());
  };
  const handleNavigateBack = () => {
    console.log('Navigate Back');
    const newDate = moment(date).subtract(1, 'month').toDate();
    console.log('New Date:', newDate);
    onNavigate(newDate);
  };
  
  const handleNavigateNext = () => {
    console.log('Navigate Next');
    const newDate = moment(date).add(1, 'month').toDate();
    console.log('New Date:', newDate);
    onNavigate(newDate);
  };
  return (
    <div className="rbc-toolbar-label flex items-center justify-between mb-[19px] custom-toolbar">
      <div className='flex gap-[12px]'>
        <div className='flex'>
        <button className='border px-[7.5px] rounded-l-[0.25em]' onClick={handleNavigateBack}>
            <Icon path={mdiChevronLeft} size={1} />
          </button>
          <button className='border px-[7.5px] ml-[-1px] rounded-r-[0.25em]' onClick={handleNavigateNext}>
            <Icon path={mdiChevronRight} size={1} />
          </button>
        </div>
        <button className=' border px-[7.5px] text-[1em] border-[#e7eaec] rounded-r-[0.25em]' onClick={handleTodayClick}>Today</button>
      </div>
      <div>
        <span className='text-[22.75px] font-[300]'>{label}</span>
      </div>
      <div className='flex'>
        <button  className={`${selectedMonth === 1 ? "bg-[#1AB394] border-[#1AB394] text-white" : ""} border px-[7.5px] rounded-l-[0.25em]`} onClick={() => {onView('month'); setSelectedMonth(1)}}>Month</button>
        <button className={`${selectedMonth === 2 ? "bg-[#1AB394] border-[#1AB394] text-white" : ""} border px-[7.5px] ml-[-1px] rounded-r-[0.25em]`} onClick={() => {onView('week'); setSelectedMonth(2)}}>Week</button>
        {/* <button onClick={() => onView('day')}>Day</button>
        <button onClick={() => onView('agenda')}>Agenda</button> */}
      </div>

    </div>
  );
};

const CustomCalendar = (props) => {
  const [currentView, setCurrentView] = useState('month'); // Initial view
  const [date, setDate] = useState(new Date()); // Initialize with the current date

  const handleNavigate = (newDate) => {
    setDate(newDate);
  };

  const handleViewChange = (newView) => {
    setCurrentView(newView);
  };

  return (
    <div>
      <Calendar
        view={currentView}
        onView={handleViewChange}
        date={date}
        onNavigate={handleNavigate}
        localizer={localizer}
        events={[]}
        startAccessor="start"
        endAccessor="end"
        style={{ height: props?.height }}
        components={{
          toolbar: (props) => (
            <CustomToolbar
              label={props.label}
              onNavigate={props.onNavigate}
              onView={props.onView}
            />
          ),
        }}
      />
    </div>
  );
};

export default CustomCalendar;
