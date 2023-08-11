import { mdiPlus, mdiPlusBox } from '@mdi/js'
import Icon from '@mdi/react'
import React from 'react'

const Services = () => {
    return (
        <div className='bg-white my-[25px] card-shadow rounded-[5px]'>
            <div className='p-[20px_20px_15px_20px] flex items-center'>
                <div className="flex-grow">
                    <h4 className='text-[20px] leading-[1.1]'>Services
                    </h4>
                    <div className='text-[12px] text-[#888888] opacity-[0.6]'>Set your services and pricing here</div>
                </div>
                <div className='flex'>
                    <a>
                        <Icon path={mdiPlus} size="24px" />
                    </a>
                </div>
            </div>
            <div className='p-[20px] pt-0'>
                <div>
                    <div className='-mx-[15px] flex'>
                        <div className='w-1/3 relative px-[15px] lg:flex-wrap lg:w-full'>
                            <div className='h-[92px] group flex p-[20px] items-center my-[5px] text-[#888888] border border-[#EEEEEE] hover:border-[#1ab394] cursor-pointer'>
                                <span className='w-[70px]'>
                                    <Icon path={mdiPlusBox} className="text-[#888888] group-hover:text-[#1ab394] mx-auto" size={"36px"} />
                                </span>
                                <span>
                                    <h3 className='text-[16px] group-hover:text-[#1ab394]'>Add a new service</h3>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services