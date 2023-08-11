import MainLayout from '@/components/Admin/MainLayout'
import { userData } from '@/redux/action/auth'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export default function Home() {
  const dispatch = useDispatch()

  console.log("testetst");

  useEffect(()=>{
    const fetch = async () => {
      await dispatch(userData())
    }
    fetch()
  },[dispatch])

  return (
    <>
      <MainLayout head={"Professional home page"} text={"Check your next appointments and your activity"}>
          {/* <Dropdown /> */}
          Home page
      </MainLayout>
    </>
  )
}
