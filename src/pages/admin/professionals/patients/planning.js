import ClientDetail from '@/components/Admin/Clients/ClientDetail'
import ClientSubscribe from '@/components/Admin/Clients/ClientSubscribe'
import Steps from '@/components/Admin/Clients/Information/Steps'
import MainLayout from '@/components/Admin/MainLayout'
import { mdiBed, mdiCog, mdiFire, mdiHuman, mdiMinus, mdiPencil, mdiPercent, mdiRun, mdiScaleBathroom, mdiTrendingDown } from '@mdi/js'
import Icon from '@mdi/react'
import Link from 'next/link'
import React from 'react'


const Planning = () => {
    return (
        <div>
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
                <div className='grid gap-[25px]'>
                    <div className=''>
                        <div className='rounded-[5px]  pb-[10px] bg-white shadow-box1'>
                            <div className='p-[20px] pb-[15px]'>
                                <h3 className='text-[20px] leading-[24px] '>Client information</h3>
                                <span className="text-[12px] text-[#888888]/[70%]">
                                    Set weight and BMI goals
                                </span>
                            </div>
                            <div className='divide-y divide-[#EEEEEE] px-[20px] pb-[5px] pt-[0px]'>
                                <div className="2lg:block grid grid-cols-12">
                                    <div className='col-span-4'>

                                    </div>
                                    <div className="col-span-8">
                                        <div className="grid grid-cols-12">
                                            <div className="col-span-3">
                                                <div className="element">
                                                    <h5 className="text-center text-[12px] mt-[3.75px] mb-[6.25px]">Formula</h5>
                                                </div>
                                            </div>
                                            <div className="col-span-3">
                                                <div className="element">
                                                    <h5 className="text-center text-[12px] mt-[3.75px] mb-[6.25px]">Current</h5>
                                                </div>
                                            </div>
                                            <div className="col-span-3">
                                                <div className="element">
                                                    <h5 className="text-center text-[12px] mt-[3.75px] mb-[6.25px]">Goal</h5>
                                                </div>
                                            </div>
                                            <div className="col-span-3">
                                                <div className="element">
                                                    <h5 className="text-center text-[12px] mt-[3.75px] mb-[6.25px]">Reference value</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='py-[15px]'>
                                    <div className="2lg:block grid grid-cols-12">
                                        <div className="col-span-4 gap-[15px] flex ">
                                            <div >

                                                <Icon path={mdiScaleBathroom} size={1.6} />
                                            </div>
                                            <div className="">
                                                <div className="font-semibold text-[1.1em]">Weight</div>
                                                <div className="text-[0.85em]">Set the client weight goal</div>
                                            </div>
                                        </div>

                                        <div className="col-span-8">
                                            <div className="grid grid-cols-12 items-center">
                                                <div className="col-span-3 flex items-center justify-center">
                                                    <Icon path={mdiMinus} size={1} />
                                                </div>
                                                <div className="col-span-3">
                                                    <div className="text-center">
                                                        <div className="text-[1.3em]">
                                                            70.0
                                                            <div className="inline-block text-[0.7em] ml-[2px]">kg</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-3">
                                                    <div className="text-center">
                                                        <div className="text-[1.3em]">
                                                            58.8
                                                            <div className="inline-block text-[0.7em] ml-[2px]">kg</div>
                                                        </div>
                                                        <div className="text-[0.85em]">11.2 kg decrease</div>
                                                    </div>
                                                </div>
                                                <div className="col-span-3">
                                                    <div className="text-center">
                                                        <div className="text-[1.3em]">
                                                            58.8
                                                            <div className="inline-block text-[0.7em] ml-[2px]">kg</div>
                                                        </div>
                                                        <div className="text-[0.85em]">11.2 kg decrease</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='py-[15px]'>
                                    <div className="2lg:block grid grid-cols-12">
                                        <div className="col-span-4 gap-[15px] flex ">
                                            <div >

                                                <Icon path={mdiPercent} size={1.6} />
                                            </div>
                                            <div className="">
                                                <div className="font-semibold text-[1.1em]">
                                                    Body fat percentage</div>
                                                <div className="text-[0.85em]">Set the client body fat percentage goal</div>
                                            </div>
                                        </div>

                                        <div className="col-span-8">
                                            <div className="grid grid-cols-12 items-center">
                                                <div className="col-span-3 flex items-center justify-center">
                                                    Peterson Equation
                                                </div>
                                                <div className="col-span-3">
                                                    <div className="text-center">
                                                        <div className="text-[1.3em]">
                                                            29.56
                                                            <div className="inline-block text-[0.7em] ml-[2px]">%</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-3">
                                                    <div className="text-center">
                                                        <div className="text-[1.3em]">
                                                            Undefined

                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="col-span-3">
                                                    <div className="text-center">
                                                        <div className="text-[1.3em]">
                                                            23 - 38
                                                            <div className="inline-block text-[0.7em] ml-[2px]">%</div>
                                                        </div>
                                                        <div className="text-[0.85em]">11.2 kg decrease</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='py-[15px]'>
                                    <div className="2lg:block grid grid-cols-12">
                                        <div className="col-span-4 gap-[15px] flex ">
                                            <div >
                                                <Icon path={mdiHuman} size={1.6} />
                                                {/* <Icon path={mdiScaleBathroom} size={1.6} /> */}
                                            </div>
                                            <div className="">
                                                <div className="font-semibold text-[1.1em]">
                                                    Body mass index</div>
                                                <div className="text-[0.85em]">Set the client's BMI goal</div>
                                            </div>
                                        </div>

                                        <div className="col-span-8">
                                            <div className="grid grid-cols-12 items-center">
                                                <div className="col-span-3 flex items-center justify-center">
                                                    <Icon path={mdiMinus} size={1} />
                                                </div>
                                                <div className="col-span-3">
                                                    <div className="text-center">
                                                        <div className="text-[1.3em]">
                                                            25.1
                                                            <div className="inline-block text-[0.7em] ml-[2px]">kg/m2</div>
                                                        </div>
                                                        <div className="text-[0.85em]">Overweight</div>
                                                    </div>
                                                </div>
                                                <div className="col-span-3">
                                                    <div className="text-center">
                                                        <div className="text-[1.3em]">
                                                            21.1
                                                            <div className="inline-block text-[0.7em] ml-[2px]">kg/m2</div>
                                                        </div>
                                                        <div className="text-[0.85em]">Normal</div>
                                                    </div>
                                                </div>
                                                <div className="col-span-3">
                                                    <div className="text-center">
                                                        <div className="text-[1.3em]">
                                                            21.1
                                                            <div className="inline-block text-[0.7em] ml-[2px]">kg/m2</div>
                                                        </div>
                                                        <div className="text-[0.85em]">Normal</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='rounded-[5px] cursor-pointer relative group hover:bg-[#FAFAFB] bg-white shadow-box1'>
                            <div className='px-[20px] py-[12px] text-center text-[1.2em]'>
                                <h3 className='text-[1.2em] '>Default planning</h3>

                            </div>
                            <div className='w-[80%] border mx-auto border-[#1AB394]'>

                            </div>
                            <button className='w-[25px] absolute right-[10px] top-[15px] h-[25px] group-hover:opacity-100 opacity-0 group-hover:flex hiddin border border-[#EEEEEE] justify-center rounded-full flex items-center bg-white'>

                                <Icon path={mdiPencil} size={0.6} />
                            </button>
                        </div>
                    </div>
                    <div className=''>
                        <div className="bg-white  shadow-box1 rounded-[5px]">
                            <div className="p-[20px] pb-[15px] 2lg:mt-[25px] mt-0">
                                <h3 className="text-[20px] leading-[24px] ">
                                    Calculations
                                </h3>
                                <span className="text-[12px] text-[#888888]/[70%]">
                                    Set goals for physical activity and DEE
                                </span>
                            </div>
                            <div className='divide-y divide-[#EEEEEE] px-[20px] pb-[5px] pt-[0px]'>
                                <div className="2lg:block grid grid-cols-12">
                                    <div className='col-span-4'>

                                    </div>
                                    <div className="col-span-8">
                                        <div className="grid grid-cols-12">
                                            <div className="col-span-3">
                                                <div className="element">
                                                    <h5 className="text-center text-[12px] mt-[3.75px] mb-[6.25px]">Formula</h5>
                                                </div>
                                            </div>
                                            <div className="col-span-3">
                                                <div className="element">
                                                    <h5 className="text-center text-[12px] mt-[3.75px] mb-[6.25px]">Current</h5>
                                                </div>
                                            </div>
                                            <div className="col-span-3">
                                                <div className="element">
                                                    <h5 className="text-center text-[12px] mt-[3.75px] mb-[6.25px]">Goal</h5>
                                                </div>
                                            </div>
                                            <div className="col-span-3">
                                                <div className="element">
                                                    <h5 className="text-center text-[12px] mt-[3.75px] mb-[6.25px]">Reference value</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='py-[15px]'>
                                    <div className="2lg:block grid grid-cols-12">
                                        <div className="col-span-4 gap-[15px] flex ">
                                            <div >
                                            
                                                <Icon path={mdiRun} size={1.6} />
                                            </div>
                                            <div className="">
                                                <div className="font-semibold text-[1.1em]">Weight</div>
                                                <div className="text-[0.85em]">Set the client weight goal</div>
                                            </div>
                                        </div>

                                        <div className="col-span-8">
                                            <div className="grid grid-cols-12 items-center">
                                                <div className="col-span-3 flex items-center justify-center">
                                                    <Icon path={mdiMinus} size={1} />
                                                </div>
                                                <div className="col-span-3">
                                                    <div className="text-center">
                                                        <div className="text-[1.3em]">
                                                            70.0
                                                            <div className="inline-block text-[0.7em] ml-[2px]">kg</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-3">
                                                    <div className="text-center">
                                                        <div className="text-[1.3em]">
                                                            58.8
                                                            <div className="inline-block text-[0.7em] ml-[2px]">kg</div>
                                                        </div>
                                                        <div className="text-[0.85em]">11.2 kg decrease</div>
                                                    </div>
                                                </div>
                                                <div className="col-span-3">
                                                    <div className="text-center">
                                                        <div className="text-[1.3em]">
                                                            58.8
                                                            <div className="inline-block text-[0.7em] ml-[2px]">kg</div>
                                                        </div>
                                                        <div className="text-[0.85em]">11.2 kg decrease</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='py-[15px]'>
                                    <div className="2lg:block grid grid-cols-12">
                                        <div className="col-span-4 gap-[15px] flex ">
                                            <div >

                                                <Icon path={mdiBed} size={1.6} />
                                            </div>
                                            <div className="">
                                                <div className="font-semibold text-[1.1em]">
                                                    Body fat percentage</div>
                                                <div className="text-[0.85em]">Set the client body fat percentage goal</div>
                                            </div>
                                        </div>

                                        <div className="col-span-8">
                                            <div className="grid grid-cols-12 items-center">
                                                <div className="col-span-3 flex items-center justify-center">
                                                    Peterson Equation
                                                </div>
                                                <div className="col-span-3">
                                                    <div className="text-center">
                                                        <div className="text-[1.3em]">
                                                            29.56
                                                            <div className="inline-block text-[0.7em] ml-[2px]">%</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-3">
                                                    <div className="text-center">
                                                        <div className="text-[1.3em]">
                                                            Undefined

                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="col-span-3">
                                                    <div className="text-center">
                                                        <div className="text-[1.3em]">
                                                            23 - 38
                                                            <div className="inline-block text-[0.7em] ml-[2px]">%</div>
                                                        </div>
                                                        <div className="text-[0.85em]">11.2 kg decrease</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='py-[15px]'>
                                    <div className="2lg:block grid grid-cols-12">
                                        <div className="col-span-4 gap-[15px] flex ">
                                            <div >
                                                <Icon path={mdiFire} size={1.6} />
                                                {/* <Icon path={mdiScaleBathroom} size={1.6} /> */}
                                            </div>
                                            <div className="">
                                                <div className="font-semibold text-[1.1em]">
                                                    Body mass index</div>
                                                <div className="text-[0.85em]">Set the client's BMI goal</div>
                                            </div>
                                        </div>

                                        <div className="col-span-8">
                                            <div className="grid grid-cols-12 items-center">
                                                <div className="col-span-3 flex items-center justify-center">
                                                    <Icon path={mdiMinus} size={1} />
                                                </div>
                                                <div className="col-span-3">
                                                    <div className="text-center">
                                                        <div className="text-[1.3em]">
                                                            25.1
                                                            <div className="inline-block text-[0.7em] ml-[2px]">kg/m2</div>
                                                        </div>
                                                        <div className="text-[0.85em]">Overweight</div>
                                                    </div>
                                                </div>
                                                <div className="col-span-3">
                                                    <div className="text-center">
                                                        <div className="text-[1.3em]">
                                                            21.1
                                                            <div className="inline-block text-[0.7em] ml-[2px]">kg/m2</div>
                                                        </div>
                                                        <div className="text-[0.85em]">Normal</div>
                                                    </div>
                                                </div>
                                                <div className="col-span-3">
                                                    <div className="text-center">
                                                        <div className="text-[1.3em]">
                                                            21.1
                                                            <div className="inline-block text-[0.7em] ml-[2px]">kg/m2</div>
                                                        </div>
                                                        <div className="text-[0.85em]">Normal</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </MainLayout>
        </div>
    )
}

export default Planning
