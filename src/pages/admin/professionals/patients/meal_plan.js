import ClientDetail from '@/components/Admin/Clients/ClientDetail'
import ClientSubscribe from '@/components/Admin/Clients/ClientSubscribe'
import Steps from '@/components/Admin/Clients/Information/Steps'
import MainLayout from '@/components/Admin/MainLayout'
import { mdiCog, mdiMenuRight, mdiMinus, mdiTrendingDown } from '@mdi/js'
import Icon from '@mdi/react'
import Link from 'next/link'
import React, { useState } from 'react'
import dynamic from 'next/dynamic';
import HealthDetail from '@/components/Admin/Clients/HealthDetail'
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon, XMarkIcon } from '@heroicons/react/24/outline'

const DynamicC3LineChart = dynamic(() => import('@/components/Admin/common/C3LineChart'), { ssr: false });

const DonutChart = dynamic(() => import('@/components/Admin/Clients/C3Test'), { ssr: false });



const MealPlan = () => {

    const [open, setOpen] = useState(true)

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
                <div className='2lg:block grid grid-cols-12 gap-[30px]'>

                    <div className='col-span-8'>
                        <div className="bg-white mb-[25px] shadow-box1 rounded-[5px]">
                            <div className="p-[20px] flex  justify-between pb-[15px] 2lg:mt-[25px] mt-0">
                                <span className="text-[20px] border-b-[2px] border-dashed leading-[24px] ">
                                    Breakfast
                                </span>
                                <span className='text-[20px] font-[100] text-[#585858]'>7:00 AM</span>
                            </div>
                            <div className="p-[20px] grid gap-[16px] pt-[0]">
                                <div onClick={() => setOpen(true)} className='p-2.5 border border-[#EEEEEE] bg-white hover:bg-[#fafafb]'>
                                    <span className='text-[13px] font-[600] text-[#585858]'>1 portion of fruit (160 g) ceeee</span>
                                    <Transition.Root show={open} as={Fragment}>
                                        <Dialog as="div" className="relative z-10" onClose={setOpen}>
                                            <Transition.Child
                                                as={Fragment}
                                                enter="ease-out duration-300"
                                                enterFrom="opacity-0"
                                                enterTo="opacity-100"
                                                leave="ease-in duration-200"
                                                leaveFrom="opacity-100"
                                                leaveTo="opacity-0"
                                            >
                                                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                                            </Transition.Child>

                                            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                                                <div className="flex items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                                    <Transition.Child
                                                        as={Fragment}
                                                        enter="ease-out duration-300"
                                                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                                                        leave="ease-in duration-200"
                                                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                                    >
                                                        <Dialog.Panel className="w-[900px] relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-lg">
                                                            <div className="absolute right-0 top-0 pr-4 pt-4 sm:block">
                                                                <button
                                                                    type="button"
                                                                    className="rounded-md bg-white text-gray-400 hover:text-gray-500"
                                                                    onClick={() => setOpen(false)}
                                                                >
                                                                    <span className="sr-only">Close</span>
                                                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                                </button>
                                                            </div>
                                                            <div className="sm:flex sm:items-start p-[25px]">
                                                                <div className="text-center sm:text-left">
                                                                    <Dialog.Title as="h3" className="text-base font-semibold text-[1.1em] leading-6 text-[#676A6C]">
                                                                        Fruit
                                                                    </Dialog.Title>
                                                                    <div className="mt-2">
                                                                        <p className="text-[1em] text-[#676A6C]">
                                                                            1 portion (160 grams)
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="pt-0 pb-0 p-[20px_30px]">
                                                                <div>
                                                                    <div className='mb-[15px] flex'>
                                                                        <div className='text-center grow'>
                                                                            <div className='font-[100]'>Energy</div>
                                                                            <h3 className='text-[15px] font-[400] mt-[5px]'>
                                                                                89
                                                                                <small className='text-[0.8em] font-[400] leading-[1] text-[#777] ml-1'>kcal</small>
                                                                            </h3>
                                                                        </div>
                                                                        <div className='text-center grow'>
                                                                            <div className='font-[100]'>Fat</div>
                                                                            <h3 className='text-[15px] font-[400] mt-[5px]'>
                                                                                0
                                                                                <small className='text-[0.8em] font-[400] leading-[1] text-[#777] ml-1'>g</small>
                                                                            </h3>
                                                                        </div>
                                                                        <div className='text-center grow'>
                                                                            <div className='font-[100]'>Carbohydrate</div>
                                                                            <h3 className='text-[15px] font-[400] mt-[5px]'>
                                                                                23
                                                                                <small className='text-[0.8em] font-[400] leading-[1] text-[#777] ml-1'>g</small>
                                                                            </h3>
                                                                        </div>
                                                                        <div className='text-center grow'>
                                                                            <div className='font-[100]'>Protein</div>
                                                                            <h3 className='text-[15px] font-[400] mt-[5px]'>
                                                                                1
                                                                                <small className='text-[0.8em] font-[400] leading-[1] text-[#777] ml-1'>g</small>
                                                                            </h3>
                                                                        </div>
                                                                    </div>
                                                                    <div className='mb-[10px] mt-[20px] font-[100] text-center text-[1.5em]'>Micronutrients</div>
                                                                    <div className='mt-[-7px] mb-[15px] mx-[-15px]'>
                                                                        <div className='w-1/2 float-left px-[15px] leading-[1] relative mb-5'>
                                                                            <table className='m-0 w-full max-w-full border-collapse border-inherit indent-0'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th className='leading-[1.42857] p-2 align-top border-b border-b-[#DDDDDD]'>Nutrient</th>
                                                                                        <th className='leading-[1.42857] p-2 align-top border-b border-b-[#DDDDDD]'>Value</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                    <tr className='bg-[#f9f9f9]'>
                                                                                        <td className='border-t border-t-[#e7eaec] leading-[1.42857] p-2 align-top'>Cholesterol</td>
                                                                                        <td className='border-t border-t-[#e7eaec] leading-[1.42857] p-2 align-top'>
                                                                                            <span>0.0
                                                                                                <span> mg</span>
                                                                                            </span>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr className=''>
                                                                                        <td className='border-t border-t-[#e7eaec] leading-[1.42857] p-2 align-top'>Cholesterol</td>
                                                                                        <td className='border-t border-t-[#e7eaec] leading-[1.42857] p-2 align-top'>
                                                                                            <span>0.0
                                                                                                <span> mg</span>
                                                                                            </span>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr className='bg-[#f9f9f9]'>
                                                                                        <td className='border-t border-t-[#e7eaec] leading-[1.42857] p-2 align-top'>Cholesterol</td>
                                                                                        <td className='border-t border-t-[#e7eaec] leading-[1.42857] p-2 align-top'>
                                                                                            <span>0.0
                                                                                                <span> mg</span>
                                                                                            </span>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr className=''>
                                                                                        <td className='border-t border-t-[#e7eaec] leading-[1.42857] p-2 align-top'>Cholesterol</td>
                                                                                        <td className='border-t border-t-[#e7eaec] leading-[1.42857] p-2 align-top'>
                                                                                            <span>0.0
                                                                                                <span> mg</span>
                                                                                            </span>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr className='bg-[#f9f9f9]'>
                                                                                        <td className='border-t border-t-[#e7eaec] leading-[1.42857] p-2 align-top'>Cholesterol</td>
                                                                                        <td className='border-t border-t-[#e7eaec] leading-[1.42857] p-2 align-top'>
                                                                                            <span>0.0
                                                                                                <span> mg</span>
                                                                                            </span>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                        <div className='w-1/2 float-right px-[15px] leading-[1] relative mb-5'>
                                                                            <table className='m-0 w-full max-w-full border-collapse border-inherit indent-0'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th className='leading-[1.42857] p-2 align-top border-b border-b-[#DDDDDD]'>Nutrient</th>
                                                                                        <th className='leading-[1.42857] p-2 align-top border-b border-b-[#DDDDDD]'>Value</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                    <tr className='bg-[#f9f9f9]'>
                                                                                        <td className='border-t border-t-[#e7eaec] leading-[1.42857] p-2 align-top'>Cholesterol</td>
                                                                                        <td className='border-t border-t-[#e7eaec] leading-[1.42857] p-2 align-top'>
                                                                                            <span>0.0
                                                                                                <span> mg</span>
                                                                                            </span>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr className=''>
                                                                                        <td className='border-t border-t-[#e7eaec] leading-[1.42857] p-2 align-top'>Cholesterol</td>
                                                                                        <td className='border-t border-t-[#e7eaec] leading-[1.42857] p-2 align-top'>
                                                                                            <span>0.0
                                                                                                <span> mg</span>
                                                                                            </span>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr className='bg-[#f9f9f9]'>
                                                                                        <td className='border-t border-t-[#e7eaec] leading-[1.42857] p-2 align-top'>Cholesterol</td>
                                                                                        <td className='border-t border-t-[#e7eaec] leading-[1.42857] p-2 align-top'>
                                                                                            <span>0.0
                                                                                                <span> mg</span>
                                                                                            </span>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr className=''>
                                                                                        <td className='border-t border-t-[#e7eaec] leading-[1.42857] p-2 align-top'>Cholesterol</td>
                                                                                        <td className='border-t border-t-[#e7eaec] leading-[1.42857] p-2 align-top'>
                                                                                            <span>0.0
                                                                                                <span> mg</span>
                                                                                            </span>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr className='bg-[#f9f9f9]'>
                                                                                        <td className='border-t border-t-[#e7eaec] leading-[1.42857] p-2 align-top'>Cholesterol</td>
                                                                                        <td className='border-t border-t-[#e7eaec] leading-[1.42857] p-2 align-top'>
                                                                                            <span>0.0
                                                                                                <span> mg</span>
                                                                                            </span>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                    <div className='mb-[10px] font-[100] text-center text-[1.5em]'>Aminogram</div>
                                                                    <div className='mt-[-7px] mb-[15px] mx-[-15px]'>
                                                                        <div className='w-1/2 float-left px-[15px] leading-[1] relative mb-5'>
                                                                            <table className='m-0 w-full max-w-full border-collapse border-inherit indent-0'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th className='leading-[1.42857] p-2 align-top border-b border-b-[#DDDDDD]'>Nutrient</th>
                                                                                        <th className='leading-[1.42857] p-2 align-top border-b border-b-[#DDDDDD]'>Value</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                    <tr className='bg-[#f9f9f9]'>
                                                                                        <td className='border-t border-t-[#e7eaec] leading-[1.42857] p-2 align-top'>Cholesterol</td>
                                                                                        <td className='border-t border-t-[#e7eaec] leading-[1.42857] p-2 align-top'>
                                                                                            <span>0.0
                                                                                                <span> mg</span>
                                                                                            </span>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr className=''>
                                                                                        <td className='border-t border-t-[#e7eaec] leading-[1.42857] p-2 align-top'>Cholesterol</td>
                                                                                        <td className='border-t border-t-[#e7eaec] leading-[1.42857] p-2 align-top'>
                                                                                            <span>0.0
                                                                                                <span> mg</span>
                                                                                            </span>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr className='bg-[#f9f9f9]'>
                                                                                        <td className='border-t border-t-[#e7eaec] leading-[1.42857] p-2 align-top'>Cholesterol</td>
                                                                                        <td className='border-t border-t-[#e7eaec] leading-[1.42857] p-2 align-top'>
                                                                                            <span>0.0
                                                                                                <span> mg</span>
                                                                                            </span>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr className=''>
                                                                                        <td className='border-t border-t-[#e7eaec] leading-[1.42857] p-2 align-top'>Cholesterol</td>
                                                                                        <td className='border-t border-t-[#e7eaec] leading-[1.42857] p-2 align-top'>
                                                                                            <span>0.0
                                                                                                <span> mg</span>
                                                                                            </span>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr className='bg-[#f9f9f9]'>
                                                                                        <td className='border-t border-t-[#e7eaec] leading-[1.42857] p-2 align-top'>Cholesterol</td>
                                                                                        <td className='border-t border-t-[#e7eaec] leading-[1.42857] p-2 align-top'>
                                                                                            <span>0.0
                                                                                                <span> mg</span>
                                                                                            </span>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                        <div className='w-1/2 float-right px-[15px] leading-[1] relative mb-5'>
                                                                            <table className='m-0 w-full max-w-full border-collapse border-inherit indent-0'>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th className='leading-[1.42857] p-2 align-top border-b border-b-[#DDDDDD]'>Nutrient</th>
                                                                                        <th className='leading-[1.42857] p-2 align-top border-b border-b-[#DDDDDD]'>Value</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                    <tr className='bg-[#f9f9f9]'>
                                                                                        <td className='border-t border-t-[#e7eaec] leading-[1.42857] p-2 align-top'>Cholesterol</td>
                                                                                        <td className='border-t border-t-[#e7eaec] leading-[1.42857] p-2 align-top'>
                                                                                            <span>0.0
                                                                                                <span> mg</span>
                                                                                            </span>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr className=''>
                                                                                        <td className='border-t border-t-[#e7eaec] leading-[1.42857] p-2 align-top'>Cholesterol</td>
                                                                                        <td className='border-t border-t-[#e7eaec] leading-[1.42857] p-2 align-top'>
                                                                                            <span>0.0
                                                                                                <span> mg</span>
                                                                                            </span>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr className='bg-[#f9f9f9]'>
                                                                                        <td className='border-t border-t-[#e7eaec] leading-[1.42857] p-2 align-top'>Cholesterol</td>
                                                                                        <td className='border-t border-t-[#e7eaec] leading-[1.42857] p-2 align-top'>
                                                                                            <span>0.0
                                                                                                <span> mg</span>
                                                                                            </span>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr className=''>
                                                                                        <td className='border-t border-t-[#e7eaec] leading-[1.42857] p-2 align-top'>Cholesterol</td>
                                                                                        <td className='border-t border-t-[#e7eaec] leading-[1.42857] p-2 align-top'>
                                                                                            <span>0.0
                                                                                                <span> mg</span>
                                                                                            </span>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr className='bg-[#f9f9f9]'>
                                                                                        <td className='border-t border-t-[#e7eaec] leading-[1.42857] p-2 align-top'>Cholesterol</td>
                                                                                        <td className='border-t border-t-[#e7eaec] leading-[1.42857] p-2 align-top'>
                                                                                            <span>0.0
                                                                                                <span> mg</span>
                                                                                            </span>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                    <div className='text-[0.8em]'>Source: Foods of the system</div>
                                                                </div>
                                                            </div>
                                                            <div className='pt-[5px] pr-[30px] border-0 p-[0_30px_15px] mt-0 text-right'>
                                                                <button onClick={() => setOpen(false)} className='bg-[#FFFFFF] border border-[#EEEEEE] rounded-[3px] inline-block mb-0 font-[400] text-center whitespace-nowrap align-middle p-[6px_12px] text-[14px] leading-[1.42857143]'>Close</button>
                                                            </div>
                                                        </Dialog.Panel>
                                                    </Transition.Child>
                                                </div>
                                            </div>
                                        </Dialog>
                                    </Transition.Root>
                                </div>
                                <div className='p-2.5 relative border border-[#EEEEEE] bg-white hover:bg-[#fafafb]'>
                                    <span className='text-[13px] font-[600] text-[#585858]'>1 cup of milk, 1% milkfat (244 g)</span>
                                    <div className='text-[#EA9F77]  after:content-[""] after:block after:border-t-[#EA9F77] after:border-l-[7px] after:border-t-[7px] after:border-l-transparent absolute top-0 right-0'></div>
                                </div>
                                <div>

                                    <div className='p-2.5 border border-[#EEEEEE] bg-white hover:bg-[#fafafb]'>
                                        <span className='text-[13px] font-[600] text-[#585858]'>2 slices of bread, whole-wheat, commercially prepared (64 g)</span>
                                    </div>
                                    <div className='flex -mt-px'>
                                        <div className='border relative flex-[50%] flex border-[#EEEEEE] bg-white hover:bg-[#fafafb]'>
                                            <div className='bg-[#FAFAFB] text-[13px] text-[#888888] flex items-center justify-center min-w-[38px] p-2.5'>
                                                or
                                            </div>
                                            <div className='p-2.5 '>
                                                <span className='text-[13px] font-[600] text-[#585858]'>2 tbsp of cereals, oats, cooked with water (29 g)</span>
                                            </div>
                                            <div className='text-[#EA9F77]  after:content-[""] after:block after:border-t-[#EA9F77] after:border-l-[7px] after:border-t-[7px] after:border-l-transparent absolute top-0 right-0'></div>
                                        </div>
                                        <div className='border relative  flex-[50%] -ml-px flex border-[#EEEEEE] bg-white hover:bg-[#fafafb]'>
                                            <div className='bg-[#FAFAFB] text-[13px] text-[#888888] flex items-center justify-center min-w-[38px] p-2.5'>
                                                or
                                            </div>
                                            <div className='p-2.5 '>
                                                <span className='text-[13px] font-[600] text-[#585858]'>1/2 cup of Corn Flakes (14 g)</span>
                                            </div>
                                            <div className='text-[#EA9F77]  after:content-[""] after:block after:border-t-[#EA9F77] after:border-l-[7px] after:border-t-[7px] after:border-l-transparent absolute top-0 right-0'></div>

                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='p-2.5 relative border border-[#EEEEEE] bg-white hover:bg-[#fafafb]'>
                                        <span className='text-[13px] font-[600] text-[#585858]'>1/2 Avocado (68 g)</span>
                                        <div className='text-[#EA9F77]  after:content-[""] after:block after:border-t-[#EA9F77] after:border-l-[7px] after:border-t-[7px] after:border-l-transparent absolute top-0 right-0'></div>

                                    </div>
                                    <div className=' -mt-px'>

                                        <div className='border relative    flex border-[#EEEEEE] bg-white hover:bg-[#fafafb]'>
                                            <div className='bg-[#FAFAFB] text-[13px] text-[#888888] flex items-center justify-center min-w-[38px] p-2.5'>
                                                or
                                            </div>
                                            <div className='p-2.5 '>
                                                <span className='text-[13px] font-[600] text-[#585858]'>1/2 cup of Corn Flakes (14 g)</span>
                                            </div>
                                            <div className='text-[#EA9F77]  after:content-[""] after:block after:border-t-[#EA9F77] after:border-l-[7px] after:border-t-[7px] after:border-l-transparent absolute top-0 right-0'></div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white mb-[25px] shadow-box1 rounded-[5px]">
                            <div className="p-[20px] flex  justify-between pb-[15px] 2lg:mt-[25px] mt-0">
                                <span className="text-[20px] border-b-[2px] border-dashed leading-[24px] ">
                                    Morning snack
                                </span>
                                <span className='text-[20px] font-[100] text-[#585858]'>10:00 AM</span>
                            </div>
                            <div className="p-[20px] grid gap-[16px] pt-[0]">

                                <div className='p-2.5 relative border border-[#EEEEEE] bg-white hover:bg-[#fafafb]'>
                                    <span className='text-[13px] font-[600] text-[#585858]'>2 tbsp of peanut butter (32 g)</span>
                                    <div className='text-[#EA9F77]  after:content-[""] after:block after:border-t-[#EA9F77] after:border-l-[7px] after:border-t-[7px] after:border-l-transparent absolute top-0 right-0'></div>
                                </div>
                                <div className='p-2.5 border border-[#EEEEEE] bg-white hover:bg-[#fafafb]'>
                                    <span className='text-[13px] font-[600] text-[#585858]'>1 portion of fruit (160 g)</span>
                                </div>

                                <div className='p-2.5 relative border border-[#EEEEEE] bg-white hover:bg-[#fafafb]'>
                                    <span className='text-[13px] font-[600] text-[#585858]'>1 thin slice of bread, rye (25 g)</span>
                                    <div className='text-[#EA9F77]  after:content-[""] after:block after:border-t-[#EA9F77] after:border-l-[7px] after:border-t-[7px] after:border-l-transparent absolute top-0 right-0'></div>
                                </div>
                                <HealthDetail energy={365} fat={12} carbohydrate={52} protein={16} fiber={8} />
                            </div>
                        </div>
                        <div className="bg-white mb-[25px] shadow-box1 rounded-[5px]">
                            <div className="p-[20px] flex  justify-between pb-[15px] 2lg:mt-[25px] mt-0">
                                <span className="text-[20px] border-b-[2px] border-dashed leading-[24px] ">
                                    Lunch
                                </span>
                                <span className='text-[20px] font-[100] text-[#585858]'>12:00 AM</span>
                            </div>
                            <div className="p-[20px] grid gap-[16px] pt-[0]">
                                <div>
                                    <span className='text-[14.95px] font-[100] block mb-2.5 mt-[5px]'>Appetizer</span>
                                    <div className='p-2.5 relative border border-[#EEEEEE] bg-white hover:bg-[#fafafb]'>
                                        <span className='text-[13px] font-[600] text-[#585858]'>1 cup of soup, vegetable (252 g)</span>
                                        <div className='text-[#EA9F77]  after:content-[""] after:block after:border-t-[#EA9F77] after:border-l-[7px] after:border-t-[7px] after:border-l-transparent absolute top-0 right-0'></div>
                                    </div>
                                </div>
                                <div>
                                    <span className='text-[14.95px] font-[100] block mb-2.5 mt-[5px]'>Dish</span>
                                    <div className='p-2.5 relative border border-[#EEEEEE] bg-white hover:bg-[#fafafb]'>
                                        <span className='text-[13px] font-[600] text-[#585858]'>50 grams of mixed vegetables</span>
                                        <div className='text-[#EA9F77]  after:content-[""] after:block after:border-t-[#EA9F77] after:border-l-[7px] after:border-t-[7px] after:border-l-transparent absolute top-0 right-0'></div>
                                    </div>
                                </div>
                                <div>
                                    <div className='p-2.5 border border-[#EEEEEE] bg-white hover:bg-[#fafafb]'>
                                        <span className='text-[13px] font-[600] text-[#585858]'>4 oz of pasta, plain, cooked (114 g)</span>
                                    </div>
                                    <div className='flex -mt-px'>
                                        <div className='border relative flex-[50%] flex border-[#EEEEEE] bg-white hover:bg-[#fafafb]'>
                                            <div className='bg-[#FAFAFB] text-[13px] text-[#888888] flex items-center justify-center min-w-[38px] p-2.5'>
                                                or
                                            </div>
                                            <div className='p-2.5 '>
                                                <span className='text-[13px] font-[600] text-[#585858]'>1/2 cup of rice, brown, cooked (98 g)</span>
                                            </div>
                                            <div className='text-[#EA9F77]  after:content-[""] after:block after:border-t-[#EA9F77] after:border-l-[7px] after:border-t-[7px] after:border-l-transparent absolute top-0 right-0'></div>
                                        </div>
                                        <div className='border relative  flex-[50%] -ml-px flex border-[#EEEEEE] bg-white hover:bg-[#fafafb]'>
                                            <div className='bg-[#FAFAFB] text-[13px] text-[#888888] flex items-center justify-center min-w-[38px] p-2.5'>
                                                or
                                            </div>
                                            <div className='p-2.5 '>
                                                <span className='text-[13px] font-[600] text-[#585858]'>1/2 cup of quinoa, cooked (93 g)</span>
                                            </div>
                                            <div className='text-[#EA9F77]  after:content-[""] after:block after:border-t-[#EA9F77] after:border-l-[7px] after:border-t-[7px] after:border-l-transparent absolute top-0 right-0'></div>

                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='p-2.5 border border-[#EEEEEE] bg-white hover:bg-[#fafafb]'>
                                        <span className='text-[13px] font-[600] text-[#585858]'>120 grams of meat</span>
                                    </div>
                                    <div className='flex -mt-px'>
                                        <div className='border relative flex-[50%] flex border-[#EEEEEE] bg-white hover:bg-[#fafafb]'>
                                            <div className='bg-[#FAFAFB] text-[13px] text-[#888888] flex items-center justify-center min-w-[38px] p-2.5'>
                                                or
                                            </div>
                                            <div className='p-2.5 '>
                                                <span className='text-[13px] font-[600] text-[#585858]'>120 grams of white fish</span>
                                            </div>
                                            <div className='text-[#EA9F77]  after:content-[""] after:block after:border-t-[#EA9F77] after:border-l-[7px] after:border-t-[7px] after:border-l-transparent absolute top-0 right-0'></div>
                                        </div>
                                        <div className='border relative  flex-[50%] -ml-px flex border-[#EEEEEE] bg-white hover:bg-[#fafafb]'>
                                            <div className='bg-[#FAFAFB] text-[13px] text-[#888888] flex items-center justify-center min-w-[38px] p-2.5'>
                                                or
                                            </div>
                                            <div className='p-2.5 '>
                                                <span className='text-[13px] font-[600] text-[#585858]'>100 grams of oily fish</span>
                                            </div>
                                            <div className='text-[#EA9F77]  after:content-[""] after:block after:border-t-[#EA9F77] after:border-l-[7px] after:border-t-[7px] after:border-l-transparent absolute top-0 right-0'></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='p-2.5 border border-[#EEEEEE] bg-white hover:bg-[#fafafb]'>
                                    <span className='text-[13px] font-[600] text-[#585858]'>1 tsp of oil, olive, salad or cooking (5 g)</span>

                                </div>
                                <div>
                                    <span className='text-[14.95px] font-[100] block mb-2.5 mt-[5px]'>Dessert</span>
                                    <div className='p-2.5 relative border border-[#EEEEEE] bg-white hover:bg-[#fafafb]'>
                                        <span className='text-[13px] font-[600] text-[#585858]'>1 portion of fruit (160 g)</span>
                                        <div className='text-[#EA9F77]  after:content-[""] after:block after:border-t-[#EA9F77] after:border-l-[7px] after:border-t-[7px] after:border-l-transparent absolute top-0 right-0'></div>
                                    </div>
                                </div>
                                <div>
                                    <span className='text-[14.95px] font-[100] block mb-2.5 mt-[5px]'>Beverage</span>
                                    <div className='p-2.5 relative border border-[#EEEEEE] bg-white hover:bg-[#fafafb]'>
                                        <span className='text-[13px] font-[300] text-[#585858]/[0.5]'>No food was added</span>
                                    </div>
                                </div>
                                <HealthDetail energy={365} fat={12} carbohydrate={52} protein={16} fiber={8} />
                            </div>
                        </div>
                        <div className="bg-white mb-[25px] shadow-box1 rounded-[5px]">
                            <div className="p-[20px] flex  justify-between pb-[15px] 2lg:mt-[25px] mt-0">
                                <span className="text-[20px] border-b-[2px] border-dashed leading-[24px] ">
                                    Supper
                                </span>
                                <span className='text-[20px] font-[100] text-[#585858]'>12:00 AM</span>
                            </div>
                            <div className="p-[20px] grid gap-[16px] pt-[0]">
                                <div className='p-2.5 border relative border-[#EEEEEE] bg-white hover:bg-[#fafafb]'>
                                    <span className='text-[13px] font-[600] text-[#585858]'>1/2 cup (8 fl oz) of tea, herb (119 g)</span>
                                    <div className='text-[#EA9F77]  after:content-[""] after:block after:border-t-[#EA9F77] after:border-l-[7px] after:border-t-[7px] after:border-l-transparent absolute top-0 right-0'></div>

                                </div>

                                <HealthDetail energy={1} fat={0} carbohydrate={0} protein={0} fiber={0} />
                            </div>
                        </div>
                    </div>
                    <div className='col-span-4'>
                        <div className='rounded-[5px] mb-[25px] pb-[10px] bg-white shadow-box1'>
                            <div className='p-[20px] pb-[15px]'>
                                <h3 className='text-[20px] leading-[24px] '>Global analysis</h3>

                            </div>
                            <div className='divide-y divide-[#EEEEEE] p-5 pt-0 gap-[16px] flex-col min-h-[227px] flex'>
                                <div className="gap-[16px] flex-col flex">
                                    <div>
                                        <div className="flex items-center mb-[5px] justify-between">
                                            <div className='gap-[0.25rem] flex'>
                                                <div className="grow ">Energy</div>
                                                <div className='hidden gap-[0.25rem] items-center'>-154</div>
                                            </div>
                                            <div>
                                                <div className="inline-block font-[600] text-[13px] leading-4 mr-0">2127</div>
                                                <div className="inline-block font-[300] text-[#888888] text-[13px] leading-4">
                                                    <span className="inline-block text-[13px] leading-4">/2281 </span>
                                                    <span className="inline-block text-[11px] font-[300] text-[]">kcal</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="bg-[#12896e4d] w-full h-[10px] overflow-hidden rounded-[10px]">
                                                <div className="bg-[#1AB394] h-full" style={{ width: '68%' }} ></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex justify-items-center gap-2'>
                                        <div className='w-[150px] h-[150px]'>
                                            <DonutChart className='absolute' />
                                        </div>
                                        <div className='w-[80%]'>
                                            <div>
                                                <div className="flex items-center mb-[5px] justify-between">
                                                    <div className='gap-[0.25rem] flex'>
                                                        <div className="grow ">Fat</div>
                                                        <div className='hidden gap-[0.25rem] items-center'>-154</div>
                                                    </div>
                                                    <div>
                                                        <div className="inline-block font-[600] text-[13px] leading-4 mr-0">65.7</div>
                                                        <div className="inline-block font-[300] text-[#888888] text-[13px] leading-4">
                                                            <span className="inline-block text-[13px] leading-4">/76  </span>
                                                            <span className="inline-block text-[11px] font-[300] text-[]">g</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="">
                                                    <div className="bg-[#F4C8D1] w-full h-[10px] overflow-hidden rounded-[10px]">
                                                        <div className="bg-[#DB4965] h-full" style={{ width: '68%' }} ></div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <div className="flex items-center mb-[5px] justify-between">
                                                    <div className='gap-[0.25rem] flex'>
                                                        <div className="grow ">Carbohydrate</div>
                                                        <div className='hidden gap-[0.25rem] items-center'>-154</div>
                                                    </div>
                                                    <div>
                                                        <div className="inline-block font-[600] text-[13px] leading-4 mr-0">286.6</div>
                                                        <div className="inline-block font-[300] text-[#888888] text-[13px] leading-4">
                                                            <span className="inline-block text-[13px] leading-4">/285  </span>
                                                            <span className="inline-block text-[11px] font-[300] text-[]">g</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="">
                                                    <div className="bg-[#EA9F77] w-full h-[10px] overflow-hidden rounded-[10px]">
                                                        <div className="bg-[#EA9F77] h-full" style={{ width: '68%' }} ></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex items-center mb-[5px] justify-between">
                                                    <div className='gap-[0.25rem] flex'>
                                                        <div className="grow ">Protein</div>
                                                        <div className='hidden gap-[0.25rem] items-center'>-154</div>
                                                    </div>
                                                    <div>
                                                        <div className="inline-block font-[600] text-[13px] leading-4 mr-0">112.2</div>
                                                        <div className="inline-block font-[300] text-[#888888] text-[13px] leading-4">
                                                            <span className="inline-block text-[13px] leading-4">/114 </span>
                                                            <span className="inline-block text-[11px] font-[300] text-[]">g</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="">
                                                    <div className="bg-[#1AB3954D] w-full h-[10px] overflow-hidden rounded-[10px]">
                                                        <div className="bg-[#1AB394] h-full" style={{ width: '68%' }} ></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex items-center mb-[5px] justify-between">
                                                    <div className='gap-[0.25rem] flex'>
                                                        <div className="grow ">Dietary fiber</div>
                                                        <div className='hidden gap-[0.25rem] items-center'>-154</div>
                                                    </div>
                                                    <div>
                                                        <div className="inline-block font-[600] text-[13px] leading-4 mr-0">41.7</div>
                                                        <div className="inline-block font-[300] text-[#888888] text-[13px] leading-4">
                                                            <span className="inline-block text-[13px] leading-4">/32  </span>
                                                            <span className="inline-block text-[11px] font-[300] text-[]">g</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="">
                                                    <div className="bg-[#6A7D93] w-full h-[10px] overflow-hidden rounded-[10px]">
                                                        <div className="bg-[#6A7D93] h-full" style={{ width: '68%' }} ></div>
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

export default MealPlan
