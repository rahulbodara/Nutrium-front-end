import MainLayout from '@/components/Admin/MainLayout'
import { mdiCamera } from '@mdi/js'
import Icon from '@mdi/react'
import React from 'react'

const Information = () => {
  return (
    <div>
        <MainLayout head={"Client profile"} text={"Check and update information about the client"}>
            <div>
                <div className='w-[80px] h-[80px] rounded-full'>
                    <img src="/image/male_thumb.png" className='w-[80px] h-[80px] rounded-full' />
                    <div className=''>

                    </div>
                    <button className='absolute'>
                    <Icon path={mdiCamera} size={1} />
                    </button>
                </div>
            </div>
        </MainLayout>
    </div>
  )
}

export default Information
