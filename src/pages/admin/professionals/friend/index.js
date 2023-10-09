import MainLayout from '@/components/Admin/MainLayout'
import { mdiFacebook, mdiFacebookMessenger, mdiFacebookWorkplace, mdiInformationOutline, mdiShareVariant, mdiThumbUpOutline, mdiTwitter, mdiWalletGiftcard } from '@mdi/js';
import React from 'react'
import { Tooltip as ReactTooltip } from "react-tooltip";
import Icon from '@mdi/react'
import Image from 'next/image'
import thumbIcon from '../../../../../public/image/thumb_300.png'



const Friend = () => {
    return (
        <div>
            <>
                <MainLayout head={"Invite a friend"} text={"Invite your friends and get discounts on your subscription"}>
                    <div className='p-[25px_0_125px]'>
                        <div className='-mx-[15px] flex xl:flex-wrap'>
                            <div className='w-[66.66%] px-[15px] xl:w-full'>
                                <div className='bg-[#FFF] mb-[25px] mt-0 p-0 shadow-[(0_2px_2px_0_rgba(144,144,144,0.14))_(0_3px_1px_-2px_transparent)_(0_1px_5px_0_rgba(145,145,145,0.12))] rounded-[5px]'>
                                    <div className='p-5'>
                                        <a href='' className='text-[#888888] !float-right' data-tooltip-id="my-tooltip-1">
                                            <Icon path={mdiInformationOutline} size="24px" />
                                        </a>
                                        <div>
                                            <h1 className='font-[400] text-[24px] mt-[10px] text-[#1AB394] text-center mb-[0.625rem] leading-[1.1]'>
                                                Invite and get up to
                                                <strong> 100% OFF</strong>
                                            </h1>
                                            <h4 className='font-[300] leading-[1.4] text-center mt-[5px] text-[14px]'>
                                                Invite your friends and win discounts when they subscribe.
                                                <br />
                                                When 5 of your friends subscribe your
                                                <strong> subscription is free!</strong>
                                            </h4>
                                            <div className='mt-[35px] flex justify-between'>
                                                <div className='w-full max-w-[270px] text-center'>
                                                    <div className='bg-[#E0FAF1] text-[#1AB394] max-h-[56px] inline-flex rounded-[50%] items-center justify-center'>
                                                        <Icon path={mdiShareVariant} size="56px" className='p-[10px] max-w-[56px] text-[36px] leading-9' />
                                                    </div>
                                                    <div className='text-center mt-[15px] font-[400] p-[0_5px] text-[13px]'>
                                                        <strong>Share the link</strong>
                                                        with your friends
                                                        <br />
                                                        and offer them 20% OFF.
                                                    </div>
                                                </div>
                                                <div className='w-full max-w-[270px] text-center'>
                                                    <div className='bg-[#E0FAF1] text-[#1AB394] max-h-[56px] inline-flex rounded-[50%] items-center justify-center'>
                                                        <Icon path={mdiThumbUpOutline} size="56px" className='p-[10px] max-w-[56px] text-[36px] leading-9' />
                                                    </div>
                                                    <div className='text-center mt-[15px] font-[400] p-[0_5px] text-[13px]'>
                                                        When 5 friends register you
                                                        <strong>
                                                            <br />
                                                            get 1 month for free.
                                                        </strong>
                                                    </div>
                                                </div>
                                                <div className='w-full max-w-[270px] text-center'>
                                                    <div className='bg-[#E0FAF1] text-[#1AB394] max-h-[56px] inline-flex rounded-[50%] items-center justify-center'>
                                                        <Icon path={mdiWalletGiftcard} size="56px" className='p-[10px] max-w-[56px] text-[36px] leading-9' />
                                                    </div>
                                                    <div className='text-center mt-[15px] font-[400] p-[0_5px] text-[13px]'>
                                                        Everytime a friend subscribes,
                                                        <br />
                                                        you get
                                                        <strong>
                                                            20% OFF.
                                                        </strong>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className='border-t border-[#DDDDDD] m-[35px_0] h-0' />
                                        <div>
                                            <div className='bg-[#FFF] flex items-center'>
                                                <div className='pl-[10px] border-r-0 h-[36px] border border-[#DDDDDD] bg-[#ffffff00] grow m-0 relative inline-block'>
                                                    <ul className='flex items-center border-0 h-full bg-[#ffffff00]'>
                                                        <li className='max-w-[30px] m-0 p-0 whitespace-nowrap'>
                                                            <label className='!w-[1px] !h-[1px] !absolute'></label>
                                                            <input placeholder='Enter the email addresses' className='p-0 m-0 border-none w-[595px] sm:w-[65px] lg:w-[255px] 2xl:w-[415px] xl:w-[520px] sm:text-[13px]' />
                                                        </li>
                                                    </ul>
                                                </div>
                                                <button className='bg-[#EA9F77] text-[#FFFFFF] w-[200px] rounded-none justify-center text-center h-[36px] text-[13px] font-[400] flex items-center'>Send invites</button>
                                            </div>
                                        </div>
                                        <div className='flex items-center text-[#DDDDDD] m-[24px_0] before:content-[""] before:mr-2 before:grow before:bg-[#DDDDDD] before:h-[1px] before:leading-[0] after:content-[""] after:ml-2 after:grow after:bg-[#DDDDDD] after:h-[1px] after:leading-[0]'>
                                            or
                                        </div>
                                        <div>
                                            <div className='flex'>
                                                <div className='text-[#1AB394] mt-[10px] mr-[10px] whitespace-nowrap'>Share your link</div>
                                                <div className='grow overflow-hidden'>
                                                    <div className='overflow-hidden border border-[#DDDDDD] bg-[#FFF] flex items-center'>
                                                        <div className='text-[#6E7C91] pl-[10px] whitespace-nowrap'>https://nutrium.com/r/</div>
                                                        <div className='overflow-hidden text-[#EA9F77] border-0 self-center grow'>nna</div>
                                                        <button className='bg-[#FAFAFB] text-[#1AB394] border-0 border-l border-l-[#DDDDDD] min-w-[200px] w-[200px] rounded-none justify-center text-center h-[36px] text-[13px] font-[400] items-center flex'>Copy link</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='mt-[35px]'>
                                                <div className='-mx-[15px] flex lg:flex-wrap'>
                                                    <div className='w-[33.33%] pl-[15px] lg:w-full'>
                                                        <button className='justify-center text-center h-[36px] w-full text-[13px] font-[400] bg-[#1AB394] border-[#1AB394] text-[#FFF] flex items-center rounded-[3px]'>
                                                            <div className='bg-[#FFFFFF] text-[#1AB394] max-h-[20px] inline-flex rounded-[50%] items-center justify-center'>
                                                                <Icon path={mdiFacebookMessenger} size={0.8} className='p-[3px] inline-block align-middle leading-[1]' />
                                                            </div>
                                                            <div className='ml-[10px] overflow-hidden text-ellipsis'>Share on Messenger</div>
                                                        </button>
                                                    </div>
                                                    <div className='w-[33.33%] px-[15px] lg:w-full'>
                                                        <button className='justify-center text-center h-[36px] w-full text-[13px] font-[400] bg-[#1AB394] border-[#1AB394] text-[#FFF] flex items-center rounded-[3px]'>
                                                            <div className='bg-[#FFFFFF] text-[#1AB394] max-h-[20px] inline-flex rounded-[50%] items-center justify-center'>
                                                                <Icon path={mdiFacebook} size={0.8} className='p-[3px] inline-block align-middle leading-[1]' />
                                                            </div>
                                                            <div className='ml-[10px] overflow-hidden text-ellipsis'>Share on Facebook</div>
                                                        </button>
                                                    </div>
                                                    <div className='w-[33.33%] pr-[15px] lg:w-full'>
                                                        <button className='justify-center text-center h-[36px] w-full text-[13px] font-[400] bg-[#1AB394] border-[#1AB394] text-[#FFF] flex items-center rounded-[3px]'>
                                                            <div className='bg-[#FFFFFF] text-[#1AB394] max-h-[20px] inline-flex rounded-[50%] items-center justify-center'>
                                                                <Icon path={mdiTwitter} size={0.8} className='p-[3px] inline-block align-middle leading-[1]' />
                                                            </div>
                                                            <div className='ml-[10px] overflow-hidden text-ellipsis'>Share on Twitter</div>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[33.33%] px-[15px] xl:w-full'>
                                <div className='bg-[#FFFFFF] mb-[25px] mt-0 p-0 shadow-[(0_2px_2px_0_rgba(144,144,144,0.14))_(0_3px_1px_-2px_transparent)_(0_1px_5px_0_rgba(145,145,145,0.12))] rounded-[5px]'>
                                    <div className='p-[20px_20px_15px_20px]'>
                                        <h4 className='m-0 text-[20px] font-[400] leading-[1.1]'>Friends who have subscribed</h4>
                                        <div className='font-[100] text-[12px] text-[#888888]'>Get 20% OFF for each friend that subscribes</div>
                                    </div>
                                    <div className='p-[0_0_20px] w-full'>
                                        <div className='h-full mt-0 px-5 flex items-center'>
                                            <Image src={thumbIcon} width={120} className='rounded-[50%] w-[120px] h-[120px] min-w-[120px] z-[400] block align-middle' alt="thumb-icon" />
                                            <div className='bg-[#E0FAF1] rounded relative h-[80px] w-full z-[399] -ml-[20px] flex items-center before:content-[""] before:absolute before:border-solid before:border-t-[40px] before:border-r-[13.3333333333px] before:border-b-[40px] before:border-l-[0px] before:border-[#E0FAF1_#FFFFFF] before:rounded before:right-0'>
                                                <div className='text-[14px] text-[#1AB394] font-[600] mr-[40px] ml-[45px]'>None of your friends has subscribed</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='bg-[#FFFFFF] mb-[25px] mt-0 p-0 shadow-[(0_2px_2px_0_rgba(144,144,144,0.14))_(0_3px_1px_-2px_transparent)_(0_1px_5px_0_rgba(145,145,145,0.12))] rounded-[5px]'>
                                    <div className='p-[20px_20px_15px_20px]'>
                                        <h4 className='m-0 text-[20px] font-[400] leading-[1.1]'>Friends who have registered</h4>
                                        <div className='font-[100] text-[12px] text-[#888888]'>Win a month for free when 5 friends register</div>
                                    </div>
                                    <div className='p-[0_0_20px] w-full'>
                                        <div className='h-full mt-0 px-5 flex items-center'>
                                            <Image src={thumbIcon} width={120} className='rounded-[50%] w-[120px] h-[120px] min-w-[120px] z-[400] block align-middle' alt="thumb-icon" />
                                            <div className='bg-[#E0FAF1] rounded relative h-[80px] w-full z-[399] -ml-[20px] flex items-center before:content-[""] before:absolute before:border-solid before:border-t-[40px] before:border-r-[13.3333333333px] before:border-b-[40px] before:border-l-[0px] before:border-[#E0FAF1_#FFFFFF] before:rounded before:right-0'>
                                                <div className='text-[14px] text-[#1AB394] font-[600] mr-[40px] ml-[45px]'>None of your friends has registered</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </MainLayout>
                <ReactTooltip
                    id="my-tooltip-1"
                    place="top"
                    content="Read the program items"
                    className='!p-[3px_5px] !bg-[#2f4050] opacity-[.9] !w-32 text-center !text-xs'
                />
            </>
        </div>
    )
}

export default Friend
