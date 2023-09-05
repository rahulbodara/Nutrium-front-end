import AppointmentSystem from '@/components/Admin/Appointments/AppointmentSystem'
import SheduleAppointment from '@/components/Admin/Appointments/SheduleAppointment'
import MainLayout from '@/components/Admin/MainLayout'
import React, { useState } from 'react'

import CalenderSchedule from '@/components/Admin/Appointments/CalenderSchedule'
import GeneralInfo from '@/components/Admin/Appointments/GeneralInfo'




export default function Appointments() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <MainLayout head={"Your calendar"} text={"Check information about your calendar"}>
        <div className='p-[25px_0_125px]'>
          <AppointmentSystem />
          <div>
            <SheduleAppointment />
          </div>
          <div>
            <CalenderSchedule />
          </div>
          <div className='md:hidden'>
            <GeneralInfo />
          </div>
        </div>
      </MainLayout>

    </>
  )
}
