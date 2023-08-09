import MainLayout from '@/components/Admin/MainLayout'
import React from 'react'
import clientPro from '../../../../../public/image/clientprof.png'
import Image from 'next/image'
import { FaUser } from 'react-icons/fa'

const Patients = () => {
    return (
        <div>
            <MainLayout head={"Your clients"} text={"Check information about your clients"}>
                <div className='pt-[25px] flex flex-row gap-9'>
                    <div className='bg-white w-[67%] relative rounded'>
                        <div className='p-[20px_20px_15px_20px]'>
                            <h1 className='text-[20px] font-normal text-[#676a6c]'>Your clients</h1>
                            <h1 className='text-[12px] text-[#888888] font-thin block'>Check information about your clients</h1>
                            <div className='w-full pt-3'>
                                <input type='text' className='bg-[white] bg-none border text-inherit block w-full px-3 py-1.5 rounded-[1px] border-solid border-[#e5e6e7]' placeholder="Search clients by name, occupation, identification number or contact..." />
                            </div>
                            <div className="pt-5 grid grid-cols-2 gap-7">
                                <div className='flex border rounded-[1px] border-solid border-[#e5e6e7] p-[10px]'>
                                    <div class="relative">
                                        <div class="bg-[#1AB394] absolute end-0 bottom-0 w-[17px] h-[17px] rounded-full"></div>
                                        <Image src={clientPro} className="rounded-full max-h-[80px] max-w-[80px]" />
                                    </div>
                                    <div className='flex flex-col pl-3'>
                                        <h1>Example client</h1>
                                        <h1>Occupation example</h1>
                                        <h1 className='text-[10px]'>No appointments yet</h1>
                                    </div>
                                    <div className=''><FaUser /></div>
                                </div>
                                <div className='border rounded-[1px] border-solid border-[#e5e6e7] flex justify-center text-center items-center text-[20px] font-normal'>Add new client</div>
                            </div>
                        </div>
                    </div>
                    <div  className='grid grid-rows-2 gap-5 w-[34%]'>
                        <div className='bg-white  rounded h-[130px] p-[20px]'>
                            <div>
                                <h1 className='text-[14px]'>Filter clients</h1>
                                <h1 className='text-[12px] mb-5'>Filter which clients you want to see</h1>
                                <div>
                                    <select
                                        className="border border-solid border-[#e5e6e7] block w-full h-[30px]"
                                        defaultValue="All clients"
                                    >
                                        <option>All clients</option>
                                        <option>Active clients this month</option>
                                    </select></div>
                            </div>
                        </div>
                        <div className='bg-white rounded h-[130px] p-[20px]'>
                            <div>
                                <h1 className='text-[14px]'>General information</h1>
                                <h1 className='text-[12px] mb-5'>Check statistics on new and active clients</h1>
                                <h2 className='font-normal text-[24px]'>0 of 1</h2>
                                <h1 className='text-[14px]'>Active clients compared to total number</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </div>
    )
}

export default Patients