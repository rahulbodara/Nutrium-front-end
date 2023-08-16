import AppointmentSystem from '@/components/Admin/Appointments/AppointmentSystem'
import MainLayout from '@/components/Admin/MainLayout'
import React from 'react'

export default function Appointments() {
  return (
    <>

      <MainLayout head={"Your calendar"} text={"Check information about your calendar"}>
        <div className='p-[25px_0_125px]'>
         <AppointmentSystem />
        </div>
      </MainLayout>
    </>
  )
}
