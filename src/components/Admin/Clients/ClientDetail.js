import React, { useState } from 'react'
import Icon from '@mdi/react'
import { mdiAccount, mdiCakeVariant, mdiCamera, mdiChevronDown, mdiPhone } from '@mdi/js'
import EditableInput from '../common/EditableInput'
import ClosableSelect from '../common/ClosableSelect'
import countries from "countries.json"
import EditableTextarea from '../common/EditableTextarea'
import DateInput from '../common/DateInput'
import TagSelect from '../common/TagSelect'

const ClientDetail = () => {
    const [collapse, setCollapse] = useState(false)
    console.log("🚀 ~ file: ClientDetail.js:13 ~ ClientDetail ~ collapse:", collapse)

    const professionOptions = [
        {
            id: 1,
            option: 'Male',
            value: 'Male'
        },
        {
            id: 2,
            option: 'Female',
            value: 'Female'
        },
        {
            id: 3,
            option: 'Other',
            value: 'Other'
        },

    ]
    const workplace = [
        {
            id: 1,
            name: 'All workplaces',
            value: 'All workplaces'
        },
        {
            id: 2,
            namex: 'online',
            value: 'online'
        },
    ]
    return (
        <div>
            <div className=' mx-[-15px] bg-[#FFFFFF] shadow-box1'>
                <div className='p-[24px]  '>
                    <div className='md:block flex items-center'>
                        <div className='flex justify-between items-center'>
                            <div className='min-w-[80px] h-[80px] group overflow-hidden mr-[24px] relative rounded-full'>
                                <img src="/image/male_thumb.png" className='min-w-[80px] h-[80px] rounded-full' />
                                <button className='text-[35px] text-white absolute bg-black/[30%] group-hover:flex hidden transition duration-300 items-center justify-center inset-0'>
                                    <Icon path={mdiCamera} size={1.5} />
                                </button>
                            </div>
                            <button className='mb-[16px] hidden md:block'>
                                <Icon className='text-[#AAAAAA] text-[16px]' path={mdiAccount} size={1} />
                            </button>
                        </div>
                        <div className='w-full md:mt-[24px] mt-0'>
                            <div className='flex justify-between w-full items-center'>
                                <h2 className='mb-2 text-[20px]'>Maulik Kanani</h2>
                                <button className='mb-[16px] md:hidden block'>
                                    <Icon className='text-[#AAAAAA] text-[16px]' path={mdiAccount} size={1} />
                                </button>
                            </div>
                            <div className='2lg:block flex justify-between items-center'>
                                <div className='md:block flex gap-[24px]'>
                                    <div className='flex items-center w-auto 2lg:w-1/2 md:w-full'>
                                        <Icon className='text-[#1AB394] mr-[8px]' path={mdiPhone} size={0.7} />
                                        <span className='text-[#888888] font-[300] text-[14px]'>094 275 99 609</span>
                                    </div>
                                    <div className='flex items-center w-auto 2lg:w-1/2 md:w-full'>
                                        <Icon className='text-[#1AB394] mr-[8px]' path={mdiCakeVariant} size={0.8} />
                                        <span className='text-[#888888] text-[14px]'>01/30/2018 (5 years)</span>
                                    </div>
                                </div>
                                <div className='2lg:hidden flex items-center justify-end'>
                                    <button className='text-[#1AB394] border border-[#1AB394] hover:text-white rounded-[3px] px-[10px] py-[5px] trnasition duration-200 hover:bg-[#1AB394]'>
                                        Send message
                                    </button>
                                    <button className=' border border-[#1AB394] text-white rounded-[3px] ml-2 px-[10px] py-[5px] hover:bg-[#18a689] hover:border-[#18a689] trnasition duration-200 bg-[#1AB394]'>
                                        Schedule appointment
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='hidden 2lg:flex items-center w-full mt-[24px]'>
                        <button className='text-[#1AB394] border border-[#1AB394] hover:text-white rounded-[3px] px-[10px] py-[5px] trnasition duration-200 hover:bg-[#1AB394] w-full'>
                            Send message
                        </button>
                        <button className=' border border-[#1AB394] text-white rounded-[3px] ml-2 px-[10px] py-[5px] hover:bg-[#18a689] hover:border-[#18a689] trnasition duration-200 bg-[#1AB394] w-full'>
                            Schedule appointment
                        </button>
                    </div>
                </div>
                <div className={`${collapse ? "h-full lg:block grid" : "h-0 hidden"} transition-all duration-300 grid pb-[24px] px-[24px] grid-cols-2 gap-[30px]`}>
                    <div>
                        <div>
                            <EditableInput labelWidth="basis-[180px] mr-[-1px] min-w-[180px]" label="Full name" />
                        </div>
                        <div>
                            <EditableInput labelWidth="basis-[180px] mr-[-1px] min-w-[180px]" label="Occupation" />
                        </div>
                        <div>
                            <ClosableSelect labelWidth="basis-[180px] mr-[-1px] min-w-[180px]" option={professionOptions} searchOption={false} closable={false} className="mt-[7px]" label="Gender" />
                        </div>
                        <div>
                            <ClosableSelect labelWidth="basis-[180px] mr-[-1px] min-w-[180px]" option={countries} searchOption={true} closable={false} className="mt-[7px]" label="Residence" />
                        </div>
                        <div>
                            <EditableTextarea labelWidth="basis-[180px] mr-[-1px] min-w-[180px]" label="Address" />
                        </div>

                        <div>
                            <EditableInput labelWidth="basis-[180px] mr-[-1px] min-w-[180px]" label="Zip code" />
                        </div>
                        <div>
                            <EditableInput labelWidth="basis-[180px] mr-[-1px] min-w-[180px]" label="Mobile phone" />
                        </div>
                        <div>
                            <EditableInput labelWidth="basis-[180px] mr-[-1px] min-w-[180px]" label="Email" />
                        </div>
                    </div>
                    <div>
                        <div className='mt-[7px]'>
                            <TagSelect labelWidth="basis-[180px] mr-[-1px] min-w-[180px]"  searchOption={false} closable={false} className="mt-[7px]" label="Tags" />
                        </div>
                        <div>
                            <ClosableSelect labelWidth="basis-[180px] mr-[-1px] min-w-[180px]" option={workplace} searchOption={false} closable={false} className="mt-[7px]" label="Workplace" />
                        </div>
                        <div className='mt-[7px]'>
                            <DateInput label="Birthdate" labelWidth="basis-[180px] mr-[-1px] min-w-[180px]" closable={false} />
                        </div>
                        <div>
                            <div className="flex select-none admin-select-field mt-[7px]">
                                <div
                                    className="basis-[180px] mr-[-1px] min-w-[180px] md:basis-[140px] md:min-w-[140px]   flex border bg-[#FAFAFB] text-[1.1em] items-center z-[1] px-2.5 py-[5px] border-solid border-[#EEEEEE]"
                                >
                                    Created at
                                </div>
                                <div className="grow-[3] border-[1px_solid_#EEEEEE] border-l-0 flex select-none">
                                    <div className="select-field flex-grow border-[#EEEEEE] relative border-[1px]">
                                        <span className='w-full block h-full border-none outline-none pr-[24px] min-h-[38px] p-[10px] focus:ring-0'>07/14/2023 09:48 AM</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <EditableInput labelWidth="basis-[180px] mr-[-1px] min-w-[180px]" label="Process number" />
                        </div>
                        <div>
                            <EditableInput labelWidth="basis-[180px] mr-[-1px] min-w-[180px]" label="National number" />
                        </div>
                        <div>
                            <EditableInput labelWidth="basis-[180px] mr-[-1px] min-w-[180px]" label="Health number" />
                        </div>
                        <div>
                            <EditableInput labelWidth="basis-[180px] mr-[-1px] min-w-[180px]" label="VAT number" />
                        </div>
                    </div>
                    <div className='lg:mt-[24px] mt-0 col-span-2'>
                        <button className='text-[#DB4965] text-[12px] py-[5px] px-[10px] rounded hover:bg-[#DB4965] hover:text-white transition duration-500 border border-[#DB4965]'>
                            Delete client
                        </button>
                    </div>
                </div>


                <div onClick={() => setCollapse(!collapse)} className='bg-[#FAFAFB] hover:bg-[#f2f2f4] text-[13px] cursor-pointer text-[#717171] flex items-center justify-center gap-1 h-[40px] border border-[#EEEEEE] py-[11px] px-[24px]'>
                    <span> {collapse ?  "Less Details" : "More Details" }</span> <Icon className={collapse ? "rotate-180 origin-center" : ""} path={mdiChevronDown} size={0.8} />
                </div>
            </div>
        </div>
    )
}

export default ClientDetail
