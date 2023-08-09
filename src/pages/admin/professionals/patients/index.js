import MainLayout from '@/components/Admin/MainLayout'
import React from 'react'
import clientPro from '../../../../../public/image/clientprof.png'
import Image from 'next/image'

const Patients = () => {
    return (
        <div>
    <MainLayout>
        <div className='pt-10 flex flex-row gap-10'>
            <div className='bg-white w-[67%] relative rounded'>
                <div className='p-[20px_20px_15px_20px]'>
                        <h1 className='text-[20px] font-normal text-[#676a6c]'>Your clients</h1>
                    <h1 className='text-[12px] text-[#888888] font-thin block'>Check information about your clients</h1>
                    <div className='w-full pt-3'>
                        <input type='text' className='bg-[white] bg-none border text-inherit block w-full px-3 py-1.5 rounded-[1px] border-solid border-[#e5e6e7]' placeholder="Search clients by name, occupation, identification number or contact..." />
                    </div>
                    <div className="pt-5 grid grid-cols-2 gap-5">
                    <div className='flex border rounded-[1px] border-solid border-[#e5e6e7] p-[10px]'>
                    <div class="relative">
  <div class="bg-[#1AB394] absolute end-0 bottom-0 w-[17px] h-[17px] rounded-full"></div>
  <Image src={clientPro} className="rounded-full max-h-[80px] max-w-[80px]" />
</div>

                    <h1>Example client</h1>
                    <h1>Occupation example</h1>
                    </div>
                    <div className='border rounded-[1px] border-solid border-[#e5e6e7] p-[10px]'>dskdasjdasji</div>
                    </div>
                </div>
            </div>
            <div className='bg-white w-[34%] rounded'>
                <div>hhhhhhhhhhhhhh</div>
            </div>
            
        </div>
    </MainLayout>
</div>
    )
}

export default Patients
