import React, { useState } from 'react'
import { IoHelpOutline } from 'react-icons/io5'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/en-gb';
import Icon from '@mdi/react'
import { mdiPlus, mdiTimetable } from '@mdi/js'
import { Tooltip as ReactTooltip } from "react-tooltip";
import CustomCalendar from '../Clients/Calander/CustomCalendar';
import SetShedule from './SetShedule';
import SetDateModal from './SetDateModal';


const CalenderSchedule = () => {
    const [isSheduleOpen, setIsSheduleOpen] = useState(false)
    const [isDateModalOpen, setIsDateModalOpen] = useState(false);
    return (
        <>
            <div className='rounded-[5px]  bg-white shadow-box1 mb-[25px]'>
                <div className='p-[20px] pb-[15px] flex items-center'>
                    <div className='flex-grow'>
                        <h3 className='text-[20px] leading-[24px] '>Calendar</h3>
                        <span className='text-[12px] text-[#888888]/[70%]'>
                            Check and manage your calendar
                        </span>
                    </div>
                    <div>
                        <Icon path={mdiTimetable} size="22px" className='outline-none mr-[10px] cursor-pointer inline-block text-[#676A6C] hover:text-[#1AB394]' data-tooltip-id="sheduleTimeTable" onClick={() => setIsSheduleOpen(true)} />
                        <Icon path={mdiPlus} size="22px" className='outline-none inline-block cursor-pointer text-[#676A6C] hover:text-[#1AB394]' data-tooltip-id="AddShedule" onClick={() => setIsDateModalOpen(true)} />
                    </div>
                </div>
                <div className='calender-main p-[0_20px_20px]'>
                    <CustomCalendar height="600px" />
                    <div className='p-[10px_0px_5px] flex-wrap flex gap-[10px] text-[11px] justify-center'>
                        <div className='flex items-center ml-[25px]'><span className='mr-[5px] bg-[#1AB394] w-[22px] h-[11px] block rounded-[3px]' /><p className='text-[#888]'>Confirmed</p></div>
                        <div className='flex items-center ml-[25px]'><span className='mr-[5px] bg-[#EA9F77] w-[22px] h-[11px] block rounded-[3px]' /><p className='text-[#888]'>Not confirmed</p></div>
                        <div className='flex items-center ml-[25px]'><span className='mr-[5px] bg-[#DB4965] w-[22px] h-[11px] block rounded-[3px]' /><p className='text-[#888]'>Canceled</p></div>
                        <div className='flex items-center ml-[25px]'><span className='mr-[5px] bg-[#2BA0CC] w-[22px] h-[11px] block rounded-[3px]' /><p className='text-[#888]'>Event</p></div>
                        <div className='flex items-center ml-[25px]'><span className='mr-[5px] bg-[#717171] w-[22px] h-[11px] block rounded-[3px]' /><p className='text-[#888]'>Appointment request</p></div>
                    </div>
                </div>
            </div>
            <ReactTooltip
                id="sheduleTimeTable"
                place="left"
                content="Set your working schedule"
                className='!p-[3px_8px] !bg-[#2f4050] opacity-[.9]'
            />
            <ReactTooltip
                id="AddShedule"
                place="left"
                content="Set a date on your calendar"
                className='!p-[3px_8px] !bg-[#2f4050] opacity-[.9]'
            />
            <SetShedule isSheduleOpen={isSheduleOpen} setIsSheduleOpen={setIsSheduleOpen} />
            <SetDateModal isDateModalOpen={isDateModalOpen} setIsDateModalOpen={setIsDateModalOpen} />
        </>
    )
}

export default CalenderSchedule