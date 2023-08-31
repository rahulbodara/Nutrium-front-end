import { mdiEye, mdiPlus, mdiPlusBox } from '@mdi/js'
import Icon from '@mdi/react'
import React, { useEffect, useState } from 'react'
import NewSecretaries from '../Profile/NewSecretaries'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllSecreatries } from '@/redux/action/secretaries'
import { MdVerified } from 'react-icons/md'

const Secretaries = () => {
    const [editData, setEditData] = useState({})
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false)
    const SecretariesData = useSelector((state) => state?.Secreataries?.secreatariesData)
    console.log(SecretariesData, "SecretariesData");

    useEffect(() => {
        dispatch(GetAllSecreatries())
    }, [])
    return (
        <>
            <div className='bg-white my-[25px] card-shadow rounded-[5px]'>
                <div className='p-[20px_20px_15px_20px] flex items-center'>
                    <div className="flex-grow">
                        <h4 className='text-[20px] leading-[1.1]'>Secretaries
                        </h4>
                        <div className='text-[12px] text-[#888888] opacity-[0.6]'>Assign new secretaries with access to your calendar and client list</div>
                    </div>
                    <div className='flex items-center group cursor-pointer' onClick={() => setIsOpen(true)}>
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
                            className="block border-[1px] border-[#e5e6e7] focus:ring-0 py-[6px] w-full px-[12px] input-transition focus:border-[#1ab394] text-[13px] text-[#676a6c] focus:outline-none"
                            placeholder="Search workspaces"
                        />
                    </div>
                    <div className='-mx-[15px] flex flex-wrap'>
                        {SecretariesData &&
                            SecretariesData?.map((data) => {
                                return (
                                    <div className="w-1/3 relative px-[15px] lg:w-full">
                                        <div
                                            className=" group flex p-[20px] items-start my-[5px] border border-[#EEEEEE] hover:border-[#1ab394] cursor-pointer"
                                            onClick={() => {
                                                setIsOpen(true);
                                                setEditData(data)
                                            }}
                                        >
                                            <div className="w-[70px]  m-[0_30px_0_10px]">
                                                <div className="flex relative w-[72px] h-[72px] rounded-full items-center justify-center border border-[#eeeeee]">
                                                    <img
                                                        src="/image/profile.png"
                                                        alt="leaf"
                                                        className="rounded-full max-w-[70px] max-h-[70px] h-auto"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-[1rem] group-hover:text-[#1ab394]">
                                                    {data.name}
                                                </h3>
                                                <div>
                                                    <div className="mt-[5px] overflow-hidden text-ellipsis whitespace-nowrap">
                                                        <Icon
                                                            path={mdiEye}
                                                            size="20px"
                                                            color="#1ab394"
                                                            className="bg-[#e0faf1] inline p-[3px] m-[0_5px_2px_0] leading-[1] rounded-full"
                                                        />
                                                        {data.email}
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="mt-[5px] overflow-hidden text-ellipsis whitespace-nowrap">
                                                        <Icon
                                                            path={mdiEye}
                                                            size="20px"
                                                            color="#1ab394"
                                                            className="bg-[#e0faf1] inline p-[3px] m-[0_5px_2px_0] leading-[1] rounded-full"
                                                        />
                                                        {data.workplace}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                    <div>
                        <div className='-mx-[15px] flex'>
                            <div className='w-1/3 relative px-[15px] lg:flex-wrap lg:w-full'>
                                <div className='h-[92px] group flex p-[20px] items-center my-[5px] text-[#888888] border border-[#EEEEEE] hover:border-[#1ab394] cursor-pointer' onClick={() => setIsOpen(true)}>
                                    <span className='w-[70px]'>
                                        <Icon path={mdiPlusBox} className="text-[#888888] group-hover:text-[#1ab394] mx-auto" size={"36px"} />
                                    </span>
                                    <span>
                                        <h3 className='text-[16px] group-hover:text-[#1ab394]'>
                                            Add secretary
                                        </h3>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <NewSecretaries isOpen={isOpen} setIsOpen={setIsOpen} setEditData={setEditData} editData={editData}/>
        </>
    )
}

export default Secretaries