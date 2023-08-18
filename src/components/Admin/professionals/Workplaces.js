import React, { useState } from 'react'
import { mdiEye, mdiPlus, mdiPlusBox } from '@mdi/js'
import Icon from '@mdi/react'
import { MdVerified } from 'react-icons/md'
import AddNewWorkplace from '../Profile/AddNewWorkplace'
import Editworkplace from '../Profile/EditWorkplace'


const Workplaces = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    return (
        <>
            <div className='bg-white my-[25px] card-shadow rounded-[5px]'>
                <div className='p-[20px_20px_15px_20px] flex items-center'>
                    <div className="flex-grow">
                        <h4 className='text-[20px] leading-[1.1]'>Workplaces
                        </h4>
                        <div className='text-[12px] text-[#888888] opacity-[0.6]'>Set your workplaces and customize the appearance of the meal plan</div>
                    </div>
                    <div className='flex items-center group cursor-pointer' onClick={()=> setIsOpen(true)}>
                        <a>
                            <Icon path={mdiPlus} size="24px" />
                        </a>
                        <div className='ml-[5px] text-[1.1em] text-[#888888] opacity-[0.7] hidden group-hover:block'>Add workplace</div>
                    </div>
                </div>
                <div className='p-[20px] pt-0'>
                    <div className='mb-[15px]'>
                        <input
                            type="text"
                            name="fullName"
                            className="block border-[1px] border-[#e5e6e7] placeholder:opacity-[0.6] focus:ring-0 py-[6px] w-full px-[12px] input-transition focus:border-[#1ab394] text-[13px] text-[#676a6c] focus:outline-none"
                            placeholder="Search workspaces"
                        />
                    </div>
                    <div>
                        <div className='-mx-[15px] flex lg:flex-wrap'>
                            <div className='w-1/3 relative px-[15px] lg:w-full'>
                                <div className='h-[140px] group flex p-[20px] items-start my-[5px] border border-[#EEEEEE] hover:border-[#1ab394] cursor-pointer' onClick={()=> setIsEditModalOpen(true)}>
                                    <div className='w-[70px] h-[100px] m-[0_30px_0_10px]'>
                                        <div className='flex relative w-[72px] h-[72px] rounded-full items-center justify-center border border-[#eeeeee]'>
                                            <img src='/image/leaf.png' alt='leaf' className='rounded-full max-w-[70px] max-h-[70px] h-auto' />
                                            <div className='w-[22px] h-[22px] absolute bg-white rounded-[50%] border-2 border-solid border-white right-0 -bottom-0.5'><MdVerified className='text-[18px] clr-grn' /></div>
                                        </div>
                                        <div className='flex w-[72px] mt-[9px] overflow-hidden text-ellipsis whitespace-nowrap'>
                                            <div className='bg-[#1ab394] self-center w-3 h-3 ml-0.5 mr-[5px] rounded-[10px]'></div>
                                            <div>#1ab394</div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className='text-[1rem] group-hover:text-[#1ab394]'>online</h3>
                                        <div>
                                            <div className='mt-[5px] overflow-hidden text-ellipsis whitespace-nowrap'>
                                                <Icon path={mdiEye} size="20px" color="#1ab394" className='bg-[#e0faf1] inline p-[3px] m-[0_5px_2px_0] leading-[1] rounded-full' /> Public
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-1/3 relative px-[15px] lg:w-full'>
                                <div className='h-[140px] group flex p-[20px] items-center my-[5px] text-[#888888] border border-[#EEEEEE] hover:border-[#1ab394] cursor-pointer' onClick={()=> setIsOpen(true)}>
                                    <span className='w-[70px]'>
                                        <Icon path={mdiPlusBox} className="text-[#888888] group-hover:text-[#1ab394] mx-auto" size={"36px"} />
                                    </span>
                                    <span>
                                        <h3 className='text-[16px] group-hover:text-[#1ab394]'>Add workplace</h3>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AddNewWorkplace isOpen={isOpen} setIsOpen={setIsOpen}  />
            <Editworkplace isEditModalOpen={isEditModalOpen} setIsEditModalOpen={setIsEditModalOpen}  />
        </>
    )
}

export default Workplaces
