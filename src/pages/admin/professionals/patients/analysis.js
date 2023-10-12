import ClientDetail from '@/components/Admin/Clients/ClientDetail'
import ClientSubscribe from '@/components/Admin/Clients/ClientSubscribe'
import Steps from '@/components/Admin/Clients/Information/Steps'
import MainLayout from '@/components/Admin/MainLayout'
import { mdiPrinter } from '@mdi/js'
import Icon from '@mdi/react'
import React from 'react'
import HeadTitle from '@/components/Admin/common/HeadTitle'
import dynamic from 'next/dynamic'



const DynamicPieChart = dynamic(() => import('@/components/Admin/common/C3PieChart'), { ssr: false });

const macronutrients = [
    ['Fat', 20.5],
    ['Carbohydrate', 52.4],
    ['Protein', 27.1],
]
const fats = [
    ['Trans', 0],
    ['Fat', 20.5],
    ['Carbohydrate', 52.4],
    ['Protein', 27.1],
]
const carbohydrates = [
    ['Carbohydrate', 59.6],
    ['Protein', 40.4],
]
const energy = [
    ['Breakfast', 17.2],
    ['Morning snack', 16.2],
    ['Lunch', 33.9],
    ['Afternoon snack', 6.0],
    ['Dinner', 26.8],
    ['Supper', 0],


]
const protein = [
    ['Breakfast', 17.2],
    ['Morning snack', 16.2],
    ['Lunch', 33.9],
    ['Afternoon snack', 6.0],
    ['Dinner', 26.8],
    ['Supper', 0],

]
const Analysis = () => {
    return (
        <div className=''>
            <MainLayout head={"Client profile"} text={"Check and update information about the client"}>
                <div className='mt-[-20px]'>
                    <ClientDetail />
                    <div className='pt-[25px] pb-[25px]'>
                        <ClientSubscribe />
                        <div className='mt-[25px]'>
                            <Steps />
                        </div>
                    </div>
                </div>
                <div className='flex gap-[8px] '>
                    <div className='rounded-[5px] flex-1 cursor-pointer relative group  bg-white shadow-box1'>
                        <div className='px-[20px] py-[12px] text-center text-[1.2em]'>
                            <h3 className='text-[1.2em] '>Default planning</h3>
                        </div>
                        <div className='w-[80%] border mx-auto border-[#1AB394]'>
                        </div>
                    </div>
                    <button className='bg-white min-w-[53px] flex items-center justify-center shadow-box1 rounded-[5px]'>
                        <Icon path={mdiPrinter} size={0.8} />
                    </button>
                </div>
                <div className="bg-white   shadow-box1 rounded-[5px]">
                    <HeadTitle title={'Global analysis'} subTitle={'General analysis of macronutrients and dietary fiber distribution'} />
                    <div className='flex gap-[20px]   px-[20px] flex-wrap'>
                        <div className='basis-[150px] grow'>
                            <div className="flex items-center mb-[5px] justify-center">

                                <div className="flex items-end">
                                    <span className="text-[1.8em] leading-7 font-bold text-[#12896D] mr-[3px]">2127</span>
                                    <div className="flex items-end"><span className="text-[15px] mr-1">/2281</span>
                                        <span className="text-[11px] text-[#888888]">kcal</span>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="bg-[#EEEEEE] w-full h-[5px] overflow-hidden rounded-[10px]">
                                    <div className="bg-[#12896D] h-full" style={{ width: '86%' }}></div>
                                </div>
                            </div>
                            <div className=" text-center mb-[5px] ">
                                <span className='text-[15px] block'>Energy</span>
                            </div>
                        </div>
                        <div className='basis-[150px] grow'>
                            <div className="flex items-center mb-[5px] justify-center">

                                <div className="flex items-end">
                                    <span className="text-[1.8em] leading-7 font-bold text-[rgb(219_73_101)] mr-[3px]">65.7</span>
                                    <div className="flex items-end"><span className="text-[15px] mr-1">/76  </span>
                                        <span className="text-[11px] text-[#888888]"> g</span>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="bg-[#EEEEEE] w-full h-[5px] overflow-hidden rounded-[10px]">
                                    <div className="bg-[rgb(219_73_101)] h-full" style={{ width: '86%' }}></div>
                                </div>
                            </div>
                            <div className=" text-center mb-[5px] ">
                                <span className='text-[15px] block'>Energy</span>
                            </div>
                        </div>
                        <div className='basis-[150px] grow'>
                            <div className="flex items-center mb-[5px] justify-center">

                                <div className="flex items-end">
                                    <span className="text-[1.8em] leading-7 font-bold text-[#EA9F77] mr-[3px]">287</span>
                                    <div className="flex items-end"><span className="text-[15px] mr-1">/285  </span>
                                        <span className="text-[11px] text-[#888888]"> g</span>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="bg-[#EEEEEE] w-full h-[5px] overflow-hidden rounded-[10px]">
                                    <div className="bg-[#EA9F77] h-full" style={{ width: '86%' }}></div>
                                </div>
                            </div>
                            <div className=" text-center mb-[5px] ">
                                <span className='text-[15px] block'>Carbohydrate</span>
                            </div>
                        </div>
                        <div className='basis-[150px] grow'>
                            <div className="flex items-center mb-[5px] justify-center">

                                <div className="flex items-end">
                                    <span className="text-[1.8em] leading-7 font-bold text-[#1AB394] mr-[3px]">112</span>
                                    <div className="flex items-end"><span className="text-[15px] mr-1">/114  </span>
                                        <span className="text-[11px] text-[#888888]"> g</span>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="bg-[#EEEEEE] w-full h-[5px] overflow-hidden rounded-[10px]">
                                    <div className="bg-[#1AB394] h-full" style={{ width: '86%' }}></div>
                                </div>
                            </div>
                            <div className=" text-center mb-[5px] ">
                                <span className='text-[15px] block'>Protein</span>
                            </div>
                        </div>
                        <div className='basis-[150px] grow'>
                            <div className="flex items-center mb-[5px] justify-center">

                                <div className="flex items-end">
                                    <span className="text-[1.8em] leading-7 font-bold text-[#6A7D93] mr-[3px]">112</span>
                                    <div className="flex items-end"><span className="text-[15px] mr-1">/114  </span>
                                        <span className="text-[11px] text-[#888888]"> g</span>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="bg-[#EEEEEE] w-full h-[5px] overflow-hidden rounded-[10px]">
                                    <div className="bg-[#6A7D93] h-full" style={{ width: '86%' }}></div>
                                </div>
                            </div>
                            <div className=" text-center mb-[5px] ">
                                <span className='text-[15px] block'>Protein</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-3 mt-[25px] gap-[30px]'>
                    <div className="bg-white   shadow-box1 rounded-[5px]">
                        <HeadTitle title={'Macronutrients distribution'} subTitle={'Energy distribution of macronutrients'} />
                        <div className='px-[20px] pb-[15px]'>
                            <DynamicPieChart chartId={'energy-chart'} data={macronutrients} />
                        </div>

                    </div>
                    <div className="bg-white   shadow-box1 rounded-[5px]">
                        <HeadTitle title={'Fats distribution'} subTitle={'See the fats distribution of the meal plan'} />
                        <div className='px-[20px] pb-[15px]'>
                            <DynamicPieChart chartId={'fats-distribution'} data={fats} />
                        </div>

                    </div>
                    <div className="bg-white   shadow-box1 rounded-[5px]">
                        <HeadTitle title={'Carbohydrates distribution'} subTitle={'See the carbohydrates distribution of the meal plan'} />
                        <div className='px-[20px] pb-[15px]'>
                            <DynamicPieChart chartId={'carbohydrates-distribution'} data={carbohydrates} />
                        </div>

                    </div>
                    <div className="bg-white   shadow-box1 rounded-[5px]">
                        <HeadTitle title={'Energy distribution'} subTitle={'Energetic value of each meal'} />
                        <div className='px-[20px] pb-[15px]'>
                            <DynamicPieChart chartId={'energy-distribution'} data={energy} />
                        </div>

                    </div>
                    <div className="bg-white   shadow-box1 rounded-[5px]">
                        <HeadTitle title={'Protein distribution'} subTitle={'Protein distribution'} />
                        <div className='px-[20px] pb-[15px]'>
                            <DynamicPieChart chartId={'protein-distribution'} data={protein} />
                        </div>

                    </div>
                </div>
            </MainLayout>
        </div>
    )
}

export default Analysis
