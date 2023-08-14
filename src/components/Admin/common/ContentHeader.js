import { mdiBellOff, mdiHelpCircle, mdiMenu, mdiWalletGiftcard } from '@mdi/js'
import Icon from '@mdi/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiCaretDown } from 'react-icons/bi'
import userIcon from '../../../../public/image/admin-user-icon.png'
import { useSelector } from 'react-redux'

const ContentHeader = (props) => {
    const {isCollapsed, setIsCollapsed, head, text} = props;
    const userData = useSelector((item) => item?.auth?.userData[0])

  return (
    <>
        <div className='border-b-[1px] -mx-[15px] border-[#eeeeee]'>
            <nav className='relative bg-white flex min-h-[75px] items-center mb-0 rounded-none'>
                <div>
                    <button className='p-[3px_10px] text-[0px] ml-[20px] bg-[#1AB394] rounded-[3px] text-white' onClick={() => setIsCollapsed(!isCollapsed)}>
                        <Icon path={mdiMenu} size="25px" className='inline-block leading-[1] align-middle' />
                    </button>
                </div>
                <div className='flex justify-start flex-wrap m-auto'>
                    <div>
                        <button className='p-[3px_10px] bg-white border text-[#676A6C] flex items-center border-solid border-[#EEEEEE]'>
                            <Icon path={mdiBellOff} size="24px" color='#db4965' />
                        </button>
                    </div>
                    <div className='ml-[10px] flex justify-center'>
                        <div className='bg-white text-[#676a6c] flex items-center whitespace-nowrap cursor-pointer overflow-hidden'>
                            <div className="flex border-[1px] border-[#eeeeee]">
                                <Link href="#" className="text-[#db4965] font-[500] p-[6px_15px]">Trial period expired</Link>
                            </div>
                            <Link href={""} className="bg-[#db4965] inline lg:hidden hover:bg-[#d83c5a] p-[6px_15px] text-white border-[1px] border-[#db4965]">Subscribe</Link>
                            <div className='ml-[10px] block 2lg:hidden'>
                                <button className='p-[3px_10px] bg-white border text-[#676A6C] flex items-center border-solid border-[#EEEEEE]'>
                                    <Icon path={mdiHelpCircle} size="24px" color='#1ab394' />
                                </button>
                            </div>
                            <div className='ml-[10px] block 2lg:hidden'>
                                <button className='p-[3px_10px] bg-white border text-[#676A6C] flex items-center border-solid border-[#EEEEEE]'>
                                    <Icon path={mdiWalletGiftcard} size="24px" color='#1ab394' />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='topbar-menu'>
                    <ul className='pl-0 mb-0 list-none '>
                        <li className='mr-[20px]'>
                            <Link href={""} className="relative py-[20px] pl-[10px] flex items-center justify-end text-[14px] min-h-[50px] text-[#a7b1c2] font-[600]">
                                <Image src={userIcon} width={100} className='block 2lg:hidden h-[35px] w-[35px] mr-[10px] rounded-full' alt="user-icon" />
                                <span className='text-[#888888] font-normal text-[1.1em] text-ellipsis overflow-hidden whitespace-nowrap'>{userData?.fullName}</span>
                                <BiCaretDown />
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        <div className='breadcrumb bg-white mx-[-15px] my-0 p-5 card-shadow'>
            <div className='flex'>
                <div className="w-1/2 relative min-h-[1px] h-auto px-[15px]">
                    <h2 className='mb-[5px] text-[24px] font-[100] leading-[1.1]'>{head}</h2>
                    <div className='font-[100] text-[#888888]'>
                        <p>{text}</p>
                    </div>
                </div>
                <div className="w-1/2  relative min-h-[1px] h-auto px-[15px]">
                    <div className='text-right flex justify-end items-center'>
                        <div className='inline-block font-[100] mr-[5px] text-[18px]'>Currently at</div>
                        <div className='inline-block font-[400]'>
                            <div className='max-w-[300px] text-[20px] whitespace-nowrap text-ellipsis'>online</div>
                        </div>
                    </div>
                    <div className='font-[100px] text-[#888888]'>
                        <p className='text-right'>Friday, August 4, 2023 5:23 PM</p>
                    </div>
                </div>
            </div>
        </div>
        {/* {children} */}
    </>
  )
}

export default ContentHeader