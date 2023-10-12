import React, { useState } from 'react'
import { mdiCheckboxMarkedCircleOutline, mdiChevronDown, mdiChevronRight, mdiLightbulbOutline } from '@mdi/js'
import Icon from '@mdi/react'
import SetShedule from './SetShedule'

const AppointmentSystem = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isSheduleOpen, setIsSheduleOpen] = useState(false)
    return (
        <div className='bg-white mb-[25px] rounded-[5px] card-shadow'>
            <div className={`${isOpen ? "hidden" : "flex"} cursor-pointer`} onClick={() => setIsOpen(true)}>
                <div className='flex bg-[#FAFAFB] rounded-l-[5px] items-center'><span className='px-[15px]'><Icon path={mdiLightbulbOutline} size="24px" color='#1AB394' /></span></div>
                <div className='px-[20px] pt-[20px] pb-[15px] flex-grow flex items-center'>
                    <div className='flex-grow'>
                        <div className='leading-[1.1] '>Set up the appointment system</div>
                        <div className='text-[#888888] text-[12px] opacity-[0.8]'>So that you can share a link with which your clients will be able to book appointments with you automatically, please complete the missing information</div>
                    </div>
                    <div>
                        <div className='cursor-pointer p-[4px_12px] border border-[#DDDDDD] leading-[1] rounded-[3px]' onClick={() => setIsOpen(true)}>
                            <Icon path={mdiChevronDown} size="18px" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${isOpen ? "block" : "hidden"}`}>
                <div className='px-[20px] pt-[20px] pb-[15px] flex-grow flex items-center'>
                    <div className='flex-grow'>
                        <div className='leading-[1.1] text-[20px]'>Set up the appointment system</div>
                        <div className='text-[#888888] text-[12px] opacity-[0.8]'>So that you can share a link with which your clients will be able to book appointments with you automatically, please complete the missing information</div>
                    </div>
                    <div>
                        <div className='cursor-pointer p-[4px_12px] border border-[#DDDDDD] leading-[1] rounded-[3px]' onClick={() => setIsOpen(false)}>
                            <Icon path={mdiChevronDown} size="18px" />
                        </div>
                    </div>
                </div>
                <div className='p-[20px] pt-0'>
                    <div className='relative'>
                        <div className='flex w-auto flex-wrap -mx-[15px]'>
                            <div className='px-[15px] flex flex-col w-1/3 lg:w-full'>
                                <div className='border border-[#DDDDDD] rounded-[3px] h-full flex flex-col'>
                                    <div className='flex flex-grow items-center p-[20px] xl:flex-col xl:text-center lg:flex-row lg:text-left'>
                                        <div>
                                            <img src='/image/wortkplaces-vector.png' className='h-[80px] max-w-none' />
                                        </div>
                                        <div className='ml-[25px] xl:ml-0 lg:ml-[25px]'>
                                            <div className='text-[17px]'>Workplaces</div>
                                            <div className='text-[12px] text-[#888888]'>You must add at least one valid workplace, whether you offer face-to-face or online services.</div>
                                        </div>
                                    </div>
                                    <div className='text-[#1AB394] text-center p-[7px] border-t-[1px] border-[#dddddd]'>
                                        <span className='mr-[5px]'>Good! You have defined your workplace!</span>
                                        <Icon path={mdiCheckboxMarkedCircleOutline} color="#1AB394" className='inline' size="13px" />
                                    </div>
                                </div>
                            </div>
                            <div className='px-[15px] flex flex-col w-1/3 lg:w-full'>
                                <div className='border border-[#DDDDDD] rounded-[3px] h-full flex flex-col'>
                                    <div className='flex flex-grow items-center p-[20px] xl:flex-col xl:text-center lg:flex-row lg:text-left'>
                                        <div>
                                            <img src='/image/calender-shedule.png' className='h-[80px] max-w-none' />
                                        </div>
                                        <div className='ml-[25px] xl:ml-0 lg:ml-[25px]'>
                                            <div className='text-[17px]'>Working schedule</div>
                                            <div className='text-[12px] text-[#888888]'>You need to set your working hours so that appointments can be scheduled.</div>
                                        </div>
                                    </div>
                                    <div className='text-[#EA9F77] text-center p-[7px] border-t-[1px] border-[#dddddd] cursor-pointer' onClick={() => setIsSheduleOpen(true)}>
                                        <span className='mr-[5px]'>Set your working hours</span>
                                        <Icon path={mdiChevronRight} color="#EA9F77" className='inline' size="13px" />
                                    </div>
                                </div>
                            </div>
                            <div className='px-[15px] flex flex-col w-1/3 lg:w-full'>
                                <div className='border border-[#DDDDDD] rounded-[3px] h-full flex flex-col'>
                                    <div className='flex flex-grow items-center p-[20px] xl:flex-col xl:text-center lg:flex-row lg:text-left'>
                                        <div>
                                            <img src='/image/service-list.png' className='h-[80px] max-w-none' />
                                        </div>
                                        <div className='ml-[25px] xl:ml-0 lg:ml-[25px]'>
                                            <div className='text-[17px]'>Your services</div>
                                            <div className='text-[12px] text-[#888888]'>Define the nutrition services you offer to your clients.</div>
                                        </div>
                                    </div>
                                    <div className='text-[#EA9F77] text-center p-[7px] border-t-[1px] border-[#dddddd] cursor-pointer'>
                                        <span className='mr-[5px]'>Define my services</span>
                                        <Icon path={mdiChevronRight} color="#EA9F77" className='inline' size="13px" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SetShedule isSheduleOpen={isSheduleOpen} setIsSheduleOpen={setIsSheduleOpen} />
        </div>
    )
}

export default AppointmentSystem