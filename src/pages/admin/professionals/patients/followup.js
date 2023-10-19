import React, { Fragment, useEffect, useRef, useState } from 'react'
import Steps from '@/components/Admin/Clients/Information/Steps'
import MainLayout from '@/components/Admin/MainLayout';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/en-gb';
import { IoHelpOutline } from 'react-icons/io5';
import { Dialog, Transition } from '@headlessui/react'
import ClientDetail from '@/components/Admin/Clients/ClientDetail';
import ClientSubscribe from '@/components/Admin/Clients/ClientSubscribe';
import CustomCalendar from '@/components/Admin/Clients/Calander/CustomCalendar';
import Icon from '@mdi/react';
import { mdiClockOutline, mdiClose, mdiCloseThick, mdiHeart, mdiLaunch, mdiMessageReplyText, mdiPackageDown } from '@mdi/js';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import { mdiCheck, mdiClock, mdiEmailOutline, mdiHeartBoxOutline, mdiHeartOutline, mdiHelp, mdiRun, mdiSwapHorizontal } from '@mdi/js'
import 'select2/dist/css/select2.min.css';
import $ from 'jquery';
import 'select2';

import dynamic from 'next/dynamic';

const DynamicC3Chart = dynamic(() => import('@/components/Admin/Clients/C3Chart'), { ssr: false });

const status = [
    {
        color: '#1AB394',
        title: 'Compliant',
        description: 'No significant changes were made to the meal plan'
    },
    {
        color: '#EA9F77',
        title: 'Struggling',
        description: 'Some significant changes were made to the meal plan'
    },
    {
        color: '#DB4965',
        title: 'Not compliant',
        description: 'A high number of significant changes were made to the meal plan'
    },
    {
        color: '#DDDDDD',
        title: 'Insufficient data',
        description: 'The client did not register enough information'
    },
]
const Followup = () => {
    const chartData = ['data1', 30, 20, 110, 40, 15, 25, 30, 20, 100, 30, 20, 110,]
    const chartData1 = ['data1', 30, 20, 110, 40, 15, 25, 30, 20, 100, 30, 20, 110,]

    const [open, setOpen] = useState(false)
    const selectRef = useRef(null);
    useEffect(() => {
        const $select = $(selectRef.current);

        $('.select2-container--default .select2-results__option--selected').css('background-color', 'red !important');


        $select.select2(
            {
                minimumResultsForSearch: Infinity,
            }
        );

        return () => {
            $select.off('select2:open');
            $select.off('select2:close');
            $select.select2('destroy');
        };
    });

    const professionOptions = [
        {
            id: 1,
            option: 'Sort by Nutrient',
            value: 'Sort by Nutrient'
        },
        {
            id: 2,
            option: 'Dietitian',
            value: 'Dietitian'
        },
        {
            id: 3,
            option: 'Nutritional Therapist',
            value: 'Nutritional Therapist'
        },
        {
            id: 4,
            option: 'Health Coach',
            value: 'Health Coach'
        }
    ]

    const [liked, setLiked] = useState(false);

    const handleLikeClick = () => {
        setLiked(!liked);
    };

    return (
        <div>
            <MainLayout head={"Follow-up"} text={"Check your clients' progress"}>
                <div className='mt-[-20px]'>
                    <ClientDetail />
                    <div className='pt-[25px] pb-[25px]'>
                        <ClientSubscribe />
                        <div className='mt-[25px]'>
                            <Steps />
                        </div>
                    </div>
                </div>
                <div className='2lg:block grid grid-cols-2 gap-[30px]'>
                    <div className='rounded-[5px]  bg-white shadow-box1'>
                        <div className='p-[20px] pb-[15px]'>
                            <h3 className='text-[20px] leading-[24px] '>Follow-up</h3>
                            <span className='text-[12px] text-[#888888]/[70%]'>
                                Check your clients' daily progress
                            </span>
                        </div>
                        <div className='calender-main p-[0_20px_20px]'>
                            <CustomCalendar height={800} />
                            <div className='p-[10px_0px_5px]  flex-wrap flex gap-[10px] text-[11px]'>
                                <div className='flex items-center gap-[5px]'><span className='bg-[#1AB394] w-[22px] h-[11px] block rounded-[3px]' /><p className='text-[#888] uppercase'>COMPLIANT</p></div>
                                <div className='flex items-center gap-[5px]'><span className='bg-[#EA9F77] w-[22px] h-[11px] block rounded-[3px]' /><p className='text-[#888] uppercase'>Struggling</p></div>
                                <div className='flex items-center gap-[5px]'><span className='bg-[#DB4965] w-[22px] h-[11px] block rounded-[3px]' /><p className='text-[#888] uppercase'>Not compliant</p></div>
                                <div className='flex items-center gap-[5px]'><span className='bg-[#DDDDDD] w-[22px] h-[11px] block rounded-[3px]' /><p className='text-[#888] uppercase'>Insufficient data</p></div>
                                <button onClick={() => setOpen(true)} className='bg-[#DDDDDD] w-[18px] h-[18px] rounded-full flex justify-center items-center text-[#676a6c]'><IoHelpOutline /></button>
                            </div>
                            <div className=''>
                                <h3 className='my-[20px] text-[20px] font-[300] text-center'>Jul 14, 2023</h3>
                                <h3 className='mt-[20px] mb-[15px] text-[17px] font-[300] text-left'>Food diary</h3>
                                <div className='grid grid-cols-2 gap-x-[30px] gap-y-[12px]'>
                                    <div className='text-[16px] rounded-[5px] py-[10px] px-[15px] flex items-center border-t-[5px] border border-[#EEEEEE] border-t-[#1AB394] text-[#888888]'>
                                        <div className='mr-[5px]'>

                                            <Icon path={mdiClockOutline} size={0.7} className='text-[16px]  text-[#888888]' />
                                        </div>
                                        <div className='flex truncate'>
                                            <span className='text-[16px]  text-[#888888]'>07h00</span>
                                            <span className='text-[16px] truncate ml-[5px] text-[#888888]'>- Breakfast</span>
                                        </div>
                                    </div>
                                    <div className='text-[16px] rounded-[5px] py-[10px] px-[15px] flex items-center border-t-[5px] border border-[#EEEEEE] border-t-[#1AB394] text-[#888888]'>
                                        <div className='mr-[5px]'>

                                            <Icon path={mdiClockOutline} size={0.7} className='text-[16px]  text-[#888888]' />
                                        </div>
                                        <div className='flex truncate'>
                                            <span className='text-[16px]  text-[#888888]'>16h00</span>
                                            <p className='text-[16px] truncate ml-[5px] text-[#888888]'>- Afternoon snack</p>
                                        </div>
                                    </div>
                                    <div className='text-[16px] rounded-[5px] py-[10px] px-[15px] flex items-center border-t-[5px] border border-[#EEEEEE] border-t-[#1AB394] text-[#888888]'>
                                        <div className='mr-[5px]'>

                                            <Icon path={mdiClockOutline} size={0.7} className='text-[16px]  text-[#888888]' />
                                        </div>
                                        <div className='truncate flex'>
                                            <span className='text-[16px]  text-[#888888]'>10h00</span>
                                            <span className='text-[16px] truncate ml-[5px] text-[#888888]'>- Morning snack</span>
                                        </div>
                                    </div>
                                    <div className='text-[16px] rounded-[5px] py-[10px] px-[15px] flex items-center border-t-[5px] border border-[#EEEEEE] border-t-[#DB4965] text-[#888888]'>
                                        <div className='mr-[5px]'>

                                            <Icon path={mdiClockOutline} size={0.7} className='text-[16px]  text-[#888888]' />
                                        </div>
                                        <div className='truncate flex'>
                                            <span className='text-[16px]  text-[#888888]'>19h00</span>
                                            <span className='text-[16px] truncate ml-[5px] text-[#888888]'>- Dinner</span>
                                        </div>
                                    </div>
                                    <div className='text-[16px] rounded-[5px] py-[10px] px-[15px] flex items-center border-t-[5px] border border-[#EEEEEE] border-t-[#1AB394] text-[#888888]'>
                                        <div className='mr-[5px]'>

                                            <Icon path={mdiClockOutline} size={0.7} className='text-[16px]  text-[#888888]' />
                                        </div>
                                        <div className='truncate flex'>
                                            <span className='text-[16px]  text-[#888888]'>12h00</span>
                                            <span className='text-[16px] truncate ml-[5px] text-[#888888]'>- Lunch</span>
                                        </div>
                                    </div>
                                    <div className='text-[16px] rounded-[5px] py-[10px] px-[15px] flex items-center border-t-[5px] border border-[#EEEEEE] border-t-[#1AB394] text-[#888888]'>
                                        <div className='mr-[5px]'>

                                            <Icon path={mdiClockOutline} size={0.7} className='text-[16px]  text-[#888888]' />
                                        </div>
                                        <div className='truncate flex'>
                                            <span className='text-[16px]  text-[#888888]'>22h00</span>
                                            <span className='text-[16px] truncate ml-[5px] text-[#888888]'>- Supper</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-end'>
                                    <h3 className='mt-[20px] flex-1 mb-[15px] text-[17px] font-[300] text-left'>Water intake</h3>
                                    <span className='text-[#AAAAAA] text-[16px]'>1.79/2 L</span>
                                </div>
                                <div className='h-[20px] bg-[#f5f5f5] overflow-hidden rounded w-full'>
                                    <div style={{ width: '89.5%' }} className='custom-progress-bar h-full'>

                                    </div>
                                </div>
                                <h3 className='mt-[20px] mb-[15px] text-[17px] font-[300] text-left'>Global daily analysis</h3>
                                <div className='grid grid-cols-5'>
                                    <div className='relative w-full h-full max-w-[105px] max-h-[105px]'>
                                        <CircularProgressbar value={12} styles={buildStyles({ pathColor: '#12896d', trailColor: '#d6d6d6', backgroundColor: '#f3f3f4', })} />
                                        <div className='absolute flex items-center justify-center inset-0' >
                                            <div className='text-center'>
                                                <span className='text-[13px] text-[#676a6c] font-semibold'>1915 kcal</span>
                                                <div className='border border-[#D2D2D2]/[50%] w-[40px] mx-auto my-[3xp]'>

                                                </div>
                                                <span className='text-[#12896d] text-[11px] '>2127 kcal</span>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='relative w-full h-full max-w-[105px] max-h-[105px]'>
                                        <CircularProgressbar value={12} styles={buildStyles({ pathColor: '#db4965', trailColor: '#d6d6d6', backgroundColor: '#f3f3f4', })} />
                                        <div className='absolute flex items-center justify-center inset-0' >
                                            <div className='text-center'>
                                                <span className='text-[13px] text-[#ea9f77]  font-semibold'>1915 kcal</span>
                                                <div className='border border-[#D2D2D2]/[50%] w-[40px] mx-auto my-[3xp]'>

                                                </div>
                                                <span className='text-[#12896d] text-[11px] '>2127 kcal</span>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='relative w-full h-full max-w-[105px] max-h-[105px]'>
                                        <CircularProgressbar value={12} styles={buildStyles({ pathColor: '#ea9f77', trailColor: '#d6d6d6', backgroundColor: '#f3f3f4', })} />
                                        <div className='absolute flex items-center justify-center inset-0' >
                                            <div className='text-center'>
                                                <span className='text-[13px] font-semibold'>1915 kcal</span>
                                                <div className='border border-[#D2D2D2]/[50%] w-[40px] mx-auto my-[3xp]'>

                                                </div>
                                                <span className='text-[#12896d] text-[11px] '>2127 kcal</span>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='relative w-full h-full max-w-[105px] max-h-[105px]'>
                                        <CircularProgressbar value={12} styles={buildStyles({ pathColor: '#1ab394', trailColor: '#d6d6d6', backgroundColor: '#f3f3f4', })} />
                                        <div className='absolute flex items-center justify-center inset-0' >
                                            <div className='text-center'>
                                                <span className='text-[13px] font-semibold'>1915 kcal</span>
                                                <div className='border border-[#D2D2D2]/[50%] w-[40px] mx-auto my-[3xp]'>

                                                </div>
                                                <span className='text-[#12896d] text-[11px] '>2127 kcal</span>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='relative w-full h-full max-w-[105px] max-h-[105px]'>
                                        <CircularProgressbar value={12} styles={buildStyles({ pathColor: '#6a7d93', trailColor: '#d6d6d6', backgroundColor: '#f3f3f4', })} />
                                        <div className='absolute flex items-center justify-center inset-0' >
                                            <div className='text-center'>
                                                <span className='text-[13px] font-semibold'>1915 kcal</span>
                                                <div className='border border-[#D2D2D2]/[50%] w-[40px] mx-auto my-[3xp]'>

                                                </div>
                                                <span className='text-[#12896d] text-[11px] '>2127 kcal</span>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className='mt-[24px]'>
                                    <div className='grid barchart grid-cols-2'>
                                        <div>
                                            <DynamicC3Chart data={chartData} chartId="chart1" />
                                        </div>
                                        <div>
                                            <DynamicC3Chart data={chartData1} chartId="chart2" />
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-center'>
                                        <div className='w-[10px] h-[10px] mr-[3px] bg-[#1AB394] inline-block'>
                                        </div>
                                        <span className='text-[#676A6C] text-[12px]'>Percentage calculated from the meal plan targets</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div className=' bg-[#fff] mb-[25px] rounded lg:order-2 sm:-mx-[15px]'>
                            <div className='flex items-center px-5 pt-5 pb-4'>
                                <div className='flex-1'>
                                    <h4 className='text-[20px]'>Activities</h4>
                                    <div className='text-[12px] text-[#888888] opacity-[0.6]'>Check your clients' updates</div>
                                </div>
                                <div className=''>
                                    <div className='flex '>
                                        <div className='relative flex-1 select-none border-[#EEEEEE]'>
                                            <select
                                                ref={selectRef}
                                                className="w-full mt-2 p-[10px] text-[#6e7c91] rounded-md"
                                            >
                                                <option>All activities</option>
                                                <option>Appointments</option>
                                                <option>Food diary</option>
                                                <option>Physical activity</option>
                                                <option>Weight log</option>
                                                <option>Mobile app</option>

                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='max-h-[700px] overflow-auto'>

                                <div className='border-b-1 p-5 pt-[5px]'>

                                    <div className='mt-[10px]'>
                                        <div className='flex  items-start'>
                                            <div className='text-[#fff] inline-block'>
                                                <a>
                                                    <Icon path={mdiRun} className='bg-[#1AB394] p-[5px] leading-[1] rounded-[50%] inline-block w-[25px]' />
                                                </a>
                                            </div>
                                            <div className='ml-[15px] flex-1'>
                                                <div className='inline'>Physical activity: running.</div>
                                            </div>
                                            <div className='flex gap-[18px] items-center'>
                                                <button className='flex text-[#717171] hover:border-[#e8e8e8] group hover:bg-[#f7f7f7] border rounded px-3 py-[2px] ml-2 ' onClick={handleLikeClick}>
                                                    <a><Icon path={liked ? mdiHeart : mdiHeartOutline} className={`text-${liked ? "[#1AB394]" : "[#C2C2C2]"} group-hover:text-[#1AB394]  mr-2 inline-block leading-[1] w-[20px]`} /></a>
                                                    <div className=''>{liked ? "Liked" : "Like"}</div>
                                                </button>
                                                <div >
                                                    <span>14 July</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='mt-[5px] mr-[40px] flex  sm:flex-wrap'>
                                            <div className='mt-[10px] py-2 px-3 rounded mr-[10px] bg-[#fff] flex border md:grow'>
                                                <div className='text-[#fff] inline-block'>
                                                    <a><Icon path={mdiClock} className='bg-[#1C84CE] p-[5px] leading-[1] rounded-[50%] inline-block w-[28px] ' /></a>
                                                </div>
                                                <div className='ml-[10px]'>
                                                    <div className='text-[14px] leading-[14px] font-[600] text-[#676A6C]'>60 min</div>
                                                    <div className='text-[11px] leading-[11px] font-[300] text-[#676A6C] opacity-[0.6]'>Duration</div>
                                                </div>
                                            </div>
                                            <div className='mt-[10px] py-2 px-3 rounded mr-[10px] bg-[#fff] flex border md:grow'>
                                                <div className='text-[#fff] inline-block'>
                                                    <a><Icon path={mdiClock} className='bg-[#EA9F77] p-[5px] leading-[1] rounded-[50%] inline-block w-[28px] ' /></a>
                                                </div>
                                                <div className='ml-[10px]'>
                                                    <div className='text-[14px] leading-[14px] font-[600] text-[#676A6C]'>240 kcal</div>
                                                    <div className='text-[11px] leading-[11px] font-[300] text-[#676A6C] opacity-[0.6]'>Energy</div>
                                                </div>
                                            </div>
                                            <div className='mt-[10px] py-2 px-3 rounded mr-[10px] bg-[#fff] flex border md:grow'>
                                                <div className='text-[#fff] inline-block'>
                                                    <a><Icon path={mdiRun} className='bg-[#1AB394] p-[5px] leading-[1] rounded-[50%] inline-block w-[28px] ' /></a>
                                                </div>
                                                <div className='ml-[10px]'>
                                                    <div className='text-[14px] leading-[14px] font-[600] text-[#676A6C]'>2.05 km</div>
                                                    <div className='text-[11px] leading-[11px] font-[300] text-[#676A6C] opacity-[0.6]'>Distance</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='border-b-1 bg-[#FAFAFB] p-5'>

                                    <div className='mt-[10px]'>
                                        <div className='flex items-start'>
                                            <div className='text-[#fff] inline-block'>
                                                <a>
                                                    <Icon path={mdiCheck} className='bg-[#1AB394] p-[5px] leading-[1] rounded-[50%] inline-block w-[25px]' />
                                                </a>
                                            </div>
                                            <div className='ml-[15px] flex-1'>
                                                <div className='inline'>Ate supper on 14 of July at 10:00 PM.</div>
                                            </div>
                                            <div className='flex gap-[18px] items-center'>
                                                <button className='flex text-[#717171] hover:border-[#e8e8e8] group hover:bg-[#f7f7f7] border rounded px-3 py-[2px] ml-2 ' onClick={handleLikeClick}>
                                                    <a><Icon path={liked ? mdiHeart : mdiHeartOutline} className={`text-${liked ? "[#1AB394]" : "[#C2C2C2]"} group-hover:text-[#1AB394]  mr-2 inline-block leading-[1] w-[20px]`} /></a>
                                                    <div className=''>{liked ? "Liked" : "Like"}</div>
                                                </button>
                                                <div >
                                                    <span>14 July</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='border-b-1 bg-[#fff] p-5'>

                                    <div className='mt-[10px]'>
                                        <div className='flex  items-start'>
                                            <div className='text-[#fff] inline-block'>
                                                <a>
                                                    <Icon path={mdiSwapHorizontal} className='bg-[#EA9F77] p-[5px] leading-[1] rounded-[50%] inline-block w-[25px]' />
                                                </a>
                                            </div>
                                            <div className='ml-[15px] flex-1'>
                                                <div className='inline'>Made changes at dinner on 14 of July at 07:00 PM.</div>
                                            </div>
                                            <div className='flex gap-[18px] items-center'>
                                                <button className='flex text-[#717171] hover:border-[#e8e8e8] group hover:bg-[#f7f7f7] border rounded px-3 py-[2px] ml-2 ' onClick={handleLikeClick}>
                                                    <a><Icon path={liked ? mdiHeart : mdiHeartOutline} className={`text-${liked ? "[#1AB394]" : "[#C2C2C2]"} group-hover:text-[#1AB394]  mr-2 inline-block leading-[1] w-[20px]`} /></a>
                                                    <div className=''>{liked ? "Liked" : "Like"}</div>
                                                </button>
                                                <div >
                                                    <span>14 July</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='mt-[15px]  mr-[40px]'>
                                            <div className='flex items-center ml-[33px]'>
                                                <a><Icon path={mdiCheck} className='bg-[#E0FAF1] text-[#1AB394] p-[5px] leading-[1] rounded-[50%] inline-block w-[25px]' /></a>
                                                <div className='inline-block ml-[10px]'>1 portion of fruit (160 g)</div>
                                            </div>
                                            <div className='flex items-center ml-[33px] mt-[15px]'>
                                                <a><Icon path={mdiCheck} className='bg-[#E0FAF1] text-[#1AB394] p-[5px] leading-[1] rounded-[50%] inline-block w-[25px]' /></a>
                                                <div className='inline-block ml-[10px]'>1/2 cup of soup, vegetable (126 g)</div>
                                            </div>
                                            <div className='flex items-center ml-[33px] mt-[15px]'>
                                                <a><Icon path={mdiCheck} className='bg-[#E0FAF1] text-[#1AB394] p-[5px] leading-[1] rounded-[50%] inline-block w-[25px]' /></a>
                                                <div className='inline-block ml-[10px]'>120 grams of meat or 120 grams of white fish or 100 grams of oily fish</div>
                                            </div>
                                            <div className='flex items-center ml-[33px] mt-[15px]'>
                                                <a><Icon path={mdiCheck} className='bg-[#E0FAF1] text-[#1AB394] p-[5px] leading-[1] rounded-[50%] inline-block w-[25px]' /></a>
                                                <div className='inline-block ml-[10px]'>1 tsp of oil, olive, salad or cooking (5 g)</div>
                                            </div>
                                            <div className='flex items-center ml-[33px] mt-[15px]'>
                                                <a><Icon path={mdiClose} className='bg-[#FBA7AF] text-[#DB4965] p-[5px] leading-[1] rounded-[50%] inline-block w-[25px]' /></a>
                                                <div className='inline-block ml-[10px] line-through text-[#AAAAAA]'>50 grams of mixed vegetables</div>
                                            </div>
                                            <div className='flex items-center ml-[33px] mt-[15px]'>
                                                <a><Icon path={mdiClose} className='bg-[#FBA7AF] text-[#DB4965] p-[5px] leading-[1] rounded-[50%] inline-block w-[25px]' /></a>
                                                <div className='inline-block ml-[10px] line-through text-[#AAAAAA]'>4 oz of pasta, plain, cooked (114 g) or 1/2 cup of rice, brown, cooked (98 g) or 1/2 cup of quinoa, cooked (93 g)</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='border-b-1 bg-[#FAFAFB] p-5'>

                                    <div className='mt-[10px]'>
                                        <div className='flex items-start'>
                                            <div className='text-[#fff] inline-block'>
                                                <a>
                                                    <Icon path={mdiCheck} className='bg-[#1AB394] p-[5px] leading-[1] rounded-[50%] inline-block w-[25px]' />
                                                </a>
                                            </div>
                                            <div className='ml-[15px] flex-1'>
                                                <div className='inline'>Ate supper on 14 of July at 10:00 PM.</div>
                                            </div>
                                            <div className='flex gap-[18px] items-center'>
                                                <button className='flex text-[#717171] hover:border-[#e8e8e8] group hover:bg-[#f7f7f7] border rounded px-3 py-[2px] ml-2 ' onClick={handleLikeClick}>
                                                    <a><Icon path={liked ? mdiHeart : mdiHeartOutline} className={`text-${liked ? "[#1AB394]" : "[#C2C2C2]"} group-hover:text-[#1AB394]  mr-2 inline-block leading-[1] w-[20px]`} /></a>
                                                    <div className=''>{liked ? "Liked" : "Like"}</div>
                                                </button>
                                                <div >
                                                    <span>14 July</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='border-b-1 bg-[#fff] p-5'>

                                    <div className='mt-[10px]'>
                                        <div className='flex items-start'>
                                            <div className='text-[#fff] inline-block'>
                                                <a>
                                                    <Icon path={mdiCheck} className='bg-[#1AB394] p-[5px] leading-[1] rounded-[50%] inline-block w-[25px]' />
                                                </a>
                                            </div>
                                            <div className='ml-[15px] flex-1'>
                                                <div className='inline'>Ate supper on 14 of July at 10:00 PM.</div>
                                            </div>
                                            <div className='flex gap-[18px] items-center'>
                                                <button className='flex text-[#717171] hover:border-[#e8e8e8] group hover:bg-[#f7f7f7] border rounded px-3 py-[2px] ml-2 ' onClick={handleLikeClick}>
                                                    <a><Icon path={liked ? mdiHeart : mdiHeartOutline} className={`text-${liked ? "[#1AB394]" : "[#C2C2C2]"} group-hover:text-[#1AB394]  mr-2 inline-block leading-[1] w-[20px]`} /></a>
                                                    <div className=''>{liked ? "Liked" : "Like"}</div>
                                                </button>
                                                <div >
                                                    <span>14 July</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='border-b-1 bg-[#FAFAFB] p-5'>

                                    <div className='mt-[10px]'>
                                        <div className='flex items-start'>
                                            <div className='text-[#fff] inline-block'>
                                                <a>
                                                    <Icon path={mdiCheck} className='bg-[#1AB394] p-[5px] leading-[1] rounded-[50%] inline-block w-[25px]' />
                                                </a>
                                            </div>
                                            <div className='ml-[15px] flex-1'>
                                                <div className='inline'>Ate supper on 14 of July at 10:00 PM.</div>
                                            </div>
                                            <div className='flex gap-[18px] items-center'>
                                                <button className='flex text-[#717171] hover:border-[#e8e8e8] group hover:bg-[#f7f7f7] border rounded px-3 py-[2px] ml-2 ' onClick={handleLikeClick}>
                                                    <a><Icon path={liked ? mdiHeart : mdiHeartOutline} className={`text-${liked ? "[#1AB394]" : "[#C2C2C2]"} group-hover:text-[#1AB394]  mr-2 inline-block leading-[1] w-[20px]`} /></a>
                                                    <div className=''>{liked ? "Liked" : "Like"}</div>
                                                </button>
                                                <div >
                                                    <span>14 July</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='border-b-1 bg-[#fff] p-5'>

                                    <div className='mt-[10px]'>
                                        <div className='flex items-start'>
                                            <div className='text-[#fff] inline-block'>
                                                <a>
                                                    <Icon path={mdiCheck} className='bg-[#1AB394] p-[5px] leading-[1] rounded-[50%] inline-block w-[25px]' />
                                                </a>
                                            </div>
                                            <div className='ml-[15px] flex-1'>
                                                <div className='inline'>Ate supper on 14 of July at 10:00 PM.</div>
                                            </div>
                                            <div className='flex gap-[18px] items-center'>
                                                <button className='flex text-[#717171] hover:border-[#e8e8e8] group hover:bg-[#f7f7f7] border rounded px-3 py-[2px] ml-2 ' onClick={handleLikeClick}>
                                                    <a><Icon path={liked ? mdiHeart : mdiHeartOutline} className={`text-${liked ? "[#1AB394]" : "[#C2C2C2]"} group-hover:text-[#1AB394]  mr-2 inline-block leading-[1] w-[20px]`} /></a>
                                                    <div className=''>{liked ? "Liked" : "Like"}</div>
                                                </button>
                                                <div >
                                                    <span>14 July</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='border-b-1 bg-[#FAFAFB] p-5'>

                                    <div className='mt-[10px]'>
                                        <div className='flex items-start'>
                                            <div className='text-[#fff] inline-block'>
                                                <a>
                                                    <Icon path={mdiCheck} className='bg-[#1AB394] p-[5px] leading-[1] rounded-[50%] inline-block w-[25px]' />
                                                </a>
                                            </div>
                                            <div className='ml-[15px] flex-1'>
                                                <div className='inline'>Ate supper on 14 of July at 10:00 PM.</div>
                                            </div>
                                            <div className='flex gap-[18px] items-center'>
                                                <button className='flex text-[#717171] hover:border-[#e8e8e8] group hover:bg-[#f7f7f7] border rounded px-3 py-[2px] ml-2 ' onClick={handleLikeClick}>
                                                    <a><Icon path={liked ? mdiHeart : mdiHeartOutline} className={`text-${liked ? "[#1AB394]" : "[#C2C2C2]"} group-hover:text-[#1AB394]  mr-2 inline-block leading-[1] w-[20px]`} /></a>
                                                    <div className=''>{liked ? "Liked" : "Like"}</div>
                                                </button>
                                                <div >
                                                    <span>14 July</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='border-b-1 bg-[#fff] p-5'>

                                    <div className='mt-[10px]'>
                                        <div className='flex items-start'>
                                            <div className='text-[#fff] inline-block'>
                                                <a>
                                                    <Icon path={mdiCheck} className='bg-[#1AB394] p-[5px] leading-[1] rounded-[50%] inline-block w-[25px]' />
                                                </a>
                                            </div>
                                            <div className='ml-[15px] flex-1'>
                                                <div className='inline'>Ate supper on 14 of July at 10:00 PM.</div>
                                            </div>
                                            <div className='flex gap-[18px] items-center'>
                                                <button className='flex text-[#717171] hover:border-[#e8e8e8] group hover:bg-[#f7f7f7] border rounded px-3 py-[2px] ml-2 ' onClick={handleLikeClick}>
                                                    <a><Icon path={liked ? mdiHeart : mdiHeartOutline} className={`text-${liked ? "[#1AB394]" : "[#C2C2C2]"} group-hover:text-[#1AB394]  mr-2 inline-block leading-[1] w-[20px]`} /></a>
                                                    <div className=''>{liked ? "Liked" : "Like"}</div>
                                                </button>
                                                <div >
                                                    <span>14 July</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' bg-[#fff]  mb-[25px] rounded lg:order-2 sm:-mx-[15px]'>
                            <div className='flex-grow px-5 pt-5 pb-[15px]'>
                                <h4 className='text-[20px]'>Activities</h4>
                                <div className='text-[12px] text-[#888888] opacity-[0.6]'>Check your clients' updates</div>
                            </div>

                            <div className='p-5 flex items-center pt-0'>
                                <div className='flex-1'>
                                    <span className='text-[14px] font-[300] '>
                                        Example conversation

                                    </span>
                                    <h2 className='font-[600]'>Hi Nna! You can check here all the messages sent by your clients between appointments.</h2>
                                    <div className='text-[14px]'>July 14</div>
                                </div>
                                <div className='flex items-center gap-[15px]'>
                                    <button className='hover:text-white text-[#6E7C91] bg-[#EEEEEE] w-[30px] h-[30px] hover:bg-[#1AB394] transition-all flex items-center justify-center rounded-full'>
                                        <Icon path={mdiMessageReplyText} size={0.8} />

                                    </button>
                                    <button className='hover:text-white text-[#6E7C91] bg-[#EEEEEE] w-[30px] h-[30px] hover:bg-[#1AB394] transition-all flex items-center justify-center rounded-full'>

                                        <Icon path={mdiPackageDown} size={0.8} />
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </MainLayout>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-[10000]" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full justify-center py-[30px] text-center items-start">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded bg-white  text-left shadow-modal transition-all  w-full max-w-[600px] ">
                                    <button onClick={() => setOpen(false)} className='absolute top-[10px] right-[10px]'>
                                        <Icon path={mdiCloseThick} size={0.6} className='opacity-[40%]' />
                                    </button>
                                    <div className='p-[25px] text-center'>
                                        <h1 className='text-[28.5px]'>Food diary status</h1>
                                        <span className='text-[13px] '>How to read the food diary status</span>
                                    </div>
                                    <div className='pb-[4px] px-[30px]'>
                                        {status.map((item, index) => {
                                            return (
                                                <div key={index} className='flex mb-[16px] items-center gap-[10px]'>
                                                    <div style={{ backgroundColor: `${item.color}` }} className='w-[85px] h-[40px] rounded '>

                                                    </div>
                                                    <div>
                                                        <h5 className='text-[13px] font-semibold'>{item.title}</h5>
                                                        <span className='text-[13px] font-[300]'>{item.description}</span>
                                                    </div>
                                                </div>
                                            )
                                        })
                                        }
                                    </div>

                                    <div className="px-[30px] pb-[15px] text-end">
                                        <button
                                            type="button"
                                            className=" border border-[#EEEEEE]  rounded bg-[#FFFFFF] px-3 py-1.5 text-sm hover:bg-[#FAFAFB] focus-visible:outline-0 focus-visible:outline-offset-0"
                                            onClick={() => setOpen(false)}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    )
}

export default Followup
