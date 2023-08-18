import React, { Fragment } from 'react'
import Icon from '@mdi/react'
import { Menu, Transition } from '@headlessui/react'
import { mdiContentSave, mdiInformationOutline, mdiPrinter } from '@mdi/js'
import { BsFilter } from 'react-icons/bs'
import Steps from '@/components/Admin/Clients/Information/Steps'
import MainLayout from '@/components/Admin/MainLayout'
import ClientDetail from '@/components/Admin/Clients/ClientDetail'
import ClientSubscribe from '@/components/Admin/Clients/ClientSubscribe'

const Information = () => {
    return (
        <div>
            <MainLayout head={"Client profile"} text={"Check and update information about the client"}>
                <div className='mt-[-20px]'>
                    <ClientDetail />
                    <div className='pt-[25px] pb-[125px]'>
                        <ClientSubscribe />
                        <div className='mt-[25px]'>
                            <Steps />
                        </div>
                        <div className='md:block flex mt-[25px] gap-[25px]'>
                            <div className='rounded-[5px]  flex-1 overflow-hidden bg-white flex shadow-box1'>
                                <div className='px-[20px] flex-1 md:block flex items-center justify-between py-[16px]'>
                                    <div className=''>
                                        <h3 className='text-[20px] leading-[24px] '>Nutrition assessment form</h3>
                                        <span className='text-[12px] text-[#888888]/[70%]'>
                                            Send the survey to your client to have the information automatically added to their profile
                                        </span>
                                    </div>
                                    <button className='text-white active:shadow-innershdaow py-[8px] px-[24px] md:px-[6px] cursor-not-allowed bg-[#DDDDDD] text-[16px] border opacity-80 rounded-[3px] md:mt-[10px] mt-0'>
                                        Send nutrition assessment form
                                    </button>
                                </div>
                                <div className=' flex items-center hover:text-[#1AB394] justify-center border-l bg-[#FAFAFB] p-[20px] '>
                                    <Icon path={mdiInformationOutline} size={0.7} />
                                </div>
                            </div>
                            <div className='flex gap-[8px] mt-0 md:mt-[10px]'>

                                <Menu as="div" className="relative h-full inline-block text-left">

                                    <Menu.Button className="bg-[#FAFAFB] flex h-full items-center hover:text-[#1AB394] p-[20px] border hover:bg-[#FAFAFB] cursor-pointer border-[#EEEEEE] rounded-[5px]">
                                        <Icon path={mdiContentSave} size={0.8} />
                                    </Menu.Button>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 w-[160px] origin-top-right  rounded bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className="px-1 py-1 ">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <button
                                                            className={`${active ? 'bg-[#f5f5f5] text-[#1AB394]' : ''
                                                                } group flex w-full items-center rounded p-[10px] text-[1.1em]`}
                                                        >
                                                            Save as client's file
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                                <div className='bg-[#FAFAFB] flex items-center hover:text-[#1AB394] p-[20px] border hover:bg-[#FAFAFB] cursor-pointer border-[#EEEEEE] rounded-[5px]'>
                                    <Icon path={mdiPrinter} size={0.8} />
                                </div>
                            </div>
                        </div>
                        <div className='2lg:block grid grid-cols-12 mt-[25px] gap-[30px]'>
                            <div className='col-span-7'>
                                <div className='bg-white shadow-box1 rounded-[5px]'>
                                    <div className='p-[20px] pb-[15px]'>

                                        <h3 className='text-[20px] leading-[24px] '>Appointment information</h3>
                                        <span className='text-[12px] text-[#888888]/[70%]'>
                                            Motivation and expectations for the follow up

                                        </span>
                                    </div>
                                    <div className='p-[0_20px_20px]'>
                                        <div className='flex'>
                                            <div className='basis-[210px] text-[1.1em] flex items-center min-h-[56px]  h-full border border-[#EEEEEE] min-w-[210px] py-[5px] px-[10px] bg-[#FAFAFB]'>
                                                Reason for appointment
                                            </div>
                                            <div className='flex-1 border min-h-[56px] py-[5px] px-[10px] border-[#EEEEEE]'>

                                            </div>
                                        </div>
                                        <div className='flex mt-[7px]'>
                                            <div className='basis-[210px] text-[1.1em] flex items-center min-h-[38px]  h-full border border-[#EEEEEE] min-w-[210px] py-[5px] px-[10px] bg-[#FAFAFB]'>
                                                Expectations
                                            </div>
                                            <div className='flex-1 border min-h-[38px] py-[5px] px-[10px] border-[#EEEEEE]'>

                                            </div>
                                        </div>
                                        <div className='flex mt-[7px]'>
                                            <div className='basis-[210px] text-[1.1em] flex items-center border border-[#EEEEEE] min-w-[210px] py-[5px] px-[10px] bg-[#FAFAFB]'>
                                                Clinical goals
                                            </div>
                                            <div className='w-full'>
                                                <div className='w-full border min-h-[38px] py-[5px] px-[10px] border-[#EEEEEE]'>
                                                    None
                                                </div>
                                                <div className='w-full border min-h-[38px] py-[5px] px-[10px] border-[#EEEEEE] border-t-0'>

                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex mt-[7px]'>
                                            <div className='basis-[210px] text-[1.1em] flex items-center min-h-[58px]  h-full border border-[#EEEEEE] min-w-[210px] py-[5px] px-[10px] bg-[#FAFAFB]'>
                                                Other information
                                            </div>
                                            <div className='flex-1 border min-h-[58px] py-[5px] px-[10px] border-[#EEEEEE]'>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='bg-white shadow-box1 rounded-[5px] mt-[25px]'>
                                    <div className='p-[20px] pb-[15px]'>
                                        <h3 className='text-[20px] leading-[24px] '>Personal and social history</h3>
                                        <span className='text-[12px] text-[#888888]/[70%]'>
                                            Information and physiological and social habits of the client
                                        </span>
                                    </div>
                                    <div className='p-[0_20px_20px]'>
                                        <div className='flex'>
                                            <div className='basis-[210px] text-[1.1em] flex items-center min-h-[38px]  h-full border border-[#EEEEEE] min-w-[210px] py-[5px] px-[10px] bg-[#FAFAFB]'>
                                                Bowel movements
                                            </div>
                                            <div className='flex-1 border min-h-[38px] py-[5px] px-[10px] border-[#EEEEEE] border-l-0' />
                                            <div className='flex-1 border min-h-[38px] py-[5px] px-[10px] border-[#EEEEEE] border-l-0' />
                                        </div>
                                        <div className='flex mt-[7px]'>
                                            <div className='basis-[210px] text-[1.1em] flex items-center min-h-[38px]  h-full border border-[#EEEEEE] min-w-[210px] py-[5px] px-[10px] bg-[#FAFAFB]'>
                                                Sleep quality
                                            </div>
                                            <div className='flex-1 border min-h-[38px] py-[5px] px-[10px] border-[#EEEEEE] border-l-0' />
                                            <div className='flex-1 border min-h-[38px] py-[5px] px-[10px] border-[#EEEEEE] border-l-0' />
                                        </div>
                                        <div className='flex mt-[7px]'>
                                            <div className='basis-[210px] text-[1.1em] flex items-center min-h-[38px]  h-full border border-[#EEEEEE] min-w-[210px] py-[5px] px-[10px] bg-[#FAFAFB]'>
                                                Smoker
                                            </div>
                                            <div className='flex-1 border min-h-[38px] py-[5px] px-[10px] border-[#EEEEEE] border-l-0' />
                                            <div className='flex-1 border min-h-[38px] py-[5px] px-[10px] border-[#EEEEEE] border-l-0' />
                                        </div>
                                        <div className='flex mt-[7px]'>
                                            <div className='basis-[210px] text-[1.1em] flex items-center min-h-[38px]  h-full border border-[#EEEEEE] min-w-[210px] py-[5px] px-[10px] bg-[#FAFAFB]'>
                                                Alcohol consumption
                                            </div>
                                            <div className='flex-1 border min-h-[38px] py-[5px] px-[10px] border-[#EEEEEE] border-l-0' />
                                            <div className='flex-1 border min-h-[38px] py-[5px] px-[10px] border-[#EEEEEE] border-l-0' />
                                        </div>
                                        <div className='flex mt-[7px]'>
                                            <div className='basis-[210px] text-[1.1em] flex items-center min-h-[38px]  h-full border border-[#EEEEEE] min-w-[210px] py-[5px] px-[10px] bg-[#FAFAFB]'>
                                                Marital status
                                            </div>
                                            <div className='flex-1 border min-h-[38px] py-[5px] px-[10px] border-[#EEEEEE] border-l-0' />
                                            <div className='flex-1 border min-h-[38px] py-[5px] px-[10px] border-[#EEEEEE] border-l-0' />
                                        </div>
                                        <div className='flex mt-[7px]'>
                                            <div className='basis-[210px] text-[1.1em] flex items-center min-h-[38px]  h-full border border-[#EEEEEE] min-w-[210px] py-[5px] px-[10px] bg-[#FAFAFB]'>
                                                Physical activity
                                            </div>
                                            <div className='flex-1 border min-h-[38px] py-[5px] px-[10px] border-[#EEEEEE] border-l-0' />
                                        </div>
                                        <div className='flex mt-[7px]'>
                                            <div className='basis-[210px] text-[1.1em] flex items-center min-h-[38px]  h-full border border-[#EEEEEE] min-w-[210px] py-[5px] px-[10px] bg-[#FAFAFB]'>
                                                Race
                                            </div>
                                            <div className='flex-1 border min-h-[38px] py-[5px] px-[10px] border-[#EEEEEE] border-l-0' />
                                        </div>
                                        <div className='flex mt-[7px]'>
                                            <div className='basis-[210px] text-[1.1em] flex items-center min-h-[58px]  h-full border border-[#EEEEEE] min-w-[210px] py-[5px] px-[10px] bg-[#FAFAFB]'>
                                                Other information
                                            </div>
                                            <div className='flex-1 border min-h-[58px] py-[5px] px-[10px] border-[#EEEEEE] border-l-0' />
                                        </div>
                                    </div>
                                </div>
                                <div className='bg-white shadow-box1 rounded-[5px] mt-[25px]'>
                                    <div className='p-[20px] pb-[15px]'>
                                        <h3 className='text-[20px] leading-[24px] '>Dietary history</h3>
                                        <span className='text-[12px] text-[#888888]/[70%]'>
                                            Habits and food preferences of the client
                                        </span>
                                    </div>
                                    <div className='p-[0_20px_20px]'>
                                        <div className='flex'>
                                            <div className='basis-[210px] text-[1.1em] flex items-center min-h-[38px]  h-full border border-[#EEEEEE] min-w-[210px] py-[5px] px-[10px] bg-[#FAFAFB]'>
                                                Usual wake up time
                                            </div>
                                            <div className='flex-1 border min-h-[38px] py-[5px] px-[10px] border-[#EEEEEE] border-l-0' />
                                        </div>
                                        <div className='flex mt-[7px]'>
                                            <div className='basis-[210px] text-[1.1em] flex items-center min-h-[38px]  h-full border border-[#EEEEEE] min-w-[210px] py-[5px] px-[10px] bg-[#FAFAFB]'>
                                                Usual bedtime
                                            </div>
                                            <div className='flex-1 border min-h-[38px] py-[5px] px-[10px] border-[#EEEEEE] border-l-0' />
                                        </div>
                                        <div className='flex mt-[7px]'>
                                            <div className='basis-[210px] text-[1.1em] flex items-center border border-[#EEEEEE] min-w-[210px] py-[5px] px-[10px] bg-[#FAFAFB]'>
                                                Types of diet
                                            </div>
                                            <div className='w-full'>
                                                <div className='w-full border min-h-[38px] py-[5px] px-[10px] border-[#EEEEEE]'>
                                                    None
                                                </div>
                                                <div className='w-full border min-h-[38px] py-[5px] px-[10px] border-[#EEEEEE] border-t-0'>

                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex mt-[7px]'>
                                            <div className='basis-[210px] text-[1.1em] flex items-center min-h-[58px]  h-full border border-[#EEEEEE] min-w-[210px] py-[5px] px-[10px] bg-[#FAFAFB]'>
                                                Favorite food
                                            </div>
                                            <div className='flex-1 border min-h-[58px] py-[5px] px-[10px] border-[#EEEEEE] border-l-0' />
                                        </div>
                                        <div className='flex mt-[7px]'>
                                            <div className='basis-[210px] text-[1.1em] flex items-center min-h-[58px]  h-full border border-[#EEEEEE] min-w-[210px] py-[5px] px-[10px] bg-[#FAFAFB]'>
                                                Disliked food
                                            </div>
                                            <div className='flex-1 border min-h-[58px] py-[5px] px-[10px] border-[#EEEEEE] border-l-0' />
                                        </div>
                                        <div className='flex mt-[7px]'>
                                            <div className='basis-[210px] text-[1.1em] flex items-center border border-[#EEEEEE] min-w-[210px] py-[5px] px-[10px] bg-[#FAFAFB]'>
                                                Allergies
                                            </div>
                                            <div className='w-full'>
                                                <div className='w-full border min-h-[38px] py-[5px] px-[10px] border-[#EEEEEE]'>
                                                    None
                                                </div>
                                                <div className='w-full border min-h-[38px] py-[5px] px-[10px] border-[#EEEEEE] border-t-0'>

                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex mt-[7px]'>
                                            <div className='basis-[210px] text-[1.1em] flex items-center border border-[#EEEEEE] min-w-[210px] py-[5px] px-[10px] bg-[#FAFAFB]'>
                                                Food intolerances
                                            </div>
                                            <div className='w-full'>
                                                <div className='w-full border min-h-[38px] py-[5px] px-[10px] border-[#EEEEEE]'>
                                                    None
                                                </div>
                                                <div className='w-full border min-h-[38px] py-[5px] px-[10px] border-[#EEEEEE] border-t-0'>

                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex mt-[7px]'>
                                            <div className='basis-[210px] text-[1.1em] flex items-center border border-[#EEEEEE] min-w-[210px] py-[5px] px-[10px] bg-[#FAFAFB]'>
                                                Nutritional deficiencies
                                            </div>
                                            <div className='w-full'>
                                                <div className='w-full border min-h-[38px] py-[5px] px-[10px] border-[#EEEEEE]'>
                                                    None
                                                </div>
                                                <div className='w-full border min-h-[38px] py-[5px] px-[10px] border-[#EEEEEE] border-t-0'>

                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex mt-[7px]'>
                                            <div className='basis-[210px] text-[1.1em] flex items-center min-h-[38px]  h-full border border-[#EEEEEE] min-w-[210px] py-[5px] px-[10px] bg-[#FAFAFB]'>
                                                Water intake
                                            </div>
                                            <div className='flex-1 border min-h-[38px] py-[5px] px-[10px] border-[#EEEEEE] border-l-0' />
                                        </div>
                                        <div className='flex mt-[7px]'>
                                            <div className='basis-[210px] text-[1.1em] flex items-center min-h-[58px]  h-full border border-[#EEEEEE] min-w-[210px] py-[5px] px-[10px] bg-[#FAFAFB]'>
                                                Other information
                                            </div>
                                            <div className='flex-1 border min-h-[58px] py-[5px] px-[10px] border-[#EEEEEE] border-l-0' />
                                        </div>
                                    </div>
                                </div>
                                <div className='bg-white shadow-box1 rounded-[5px] mt-[25px]'>
                                    <div className='p-[20px] pb-[15px]'>
                                        <h3 className='text-[20px] leading-[24px] '>Pregnancy history</h3>
                                        <span className='text-[12px] text-[#888888]/[70%]'>
                                            Client's pregnancy and lactation records
                                        </span>
                                    </div>
                                    <div className='p-[0_20px_20px]'>
                                        <p className='text-[#888888] italic text-center'>You haven't logged any pregnancy history record</p>
                                    </div>
                                </div>
                                <div className='bg-white shadow-box1 rounded-[5px] mt-[25px]'>
                                    <div className='p-[20px] pb-[15px]'>
                                        <h3 className='text-[20px] leading-[24px] '>Observations</h3>
                                        <span className='text-[12px] text-[#888888]/[70%]'>
                                            Other relevant information about the client
                                        </span>
                                    </div>
                                    <div className='p-[0_20px_20px]'>
                                        <p className='text-[#888888] italic text-center'>You haven't logged any observations
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-5'>
                                <div className='bg-white shadow-box1 rounded-[5px]'>
                                    <div className='p-[20px] pb-[15px] 2lg:mt-[25px] mt-0'>
                                        <h3 className='text-[20px] leading-[24px] '>Food Diaries</h3>
                                        <span className='text-[12px] text-[#888888]/[70%]'>
                                            Log your client's food diaries
                                        </span>
                                    </div>
                                    <div className='p-[0_20px_20px]'>
                                        <p className='text-[#888888] italic text-center'>You haven't logged any food diary
                                        </p>
                                    </div>
                                </div>
                                <div className='bg-white shadow-box1 rounded-[5px] mt-[25px]'>
                                    <div className='p-[20px] pb-[15px]'>
                                        <h3 className='text-[20px] leading-[24px] '>Eating behaviour
                                        </h3>
                                        <span className='text-[12px] text-[#888888]/[70%]'>
                                            Log your client's eating behaviour
                                        </span>
                                    </div>
                                    <div className='p-[0_20px_20px]'>
                                        <p className='text-[#888888] italic text-center'>You haven't logged any eating behaviour

                                        </p>
                                    </div>
                                </div>
                                <div className='bg-white shadow-box1 rounded-[5px] mt-[25px]'>
                                    <div className='p-[20px] pb-[15px]'>
                                        <h3 className='text-[20px] leading-[24px] '>Medical history
                                        </h3>
                                        <span className='text-[12px] text-[#888888]/[70%]'>
                                            Pathologies, medication and personal and family history
                                        </span>
                                    </div>
                                    <div className='p-[0_20px_20px]'>
                                        <div className='flex'>
                                            <div className='basis-[120px] text-[1.1em] flex items-center border border-[#EEEEEE] min-w-[120px] py-[5px] px-[10px] bg-[#FAFAFB]'>
                                                Diseases
                                            </div>
                                            <div className='w-full'>
                                                <div className='w-full border min-h-[38px] py-[5px] px-[10px] border-[#EEEEEE]'>
                                                    None
                                                </div>
                                                <div className='w-full border min-h-[38px] py-[5px] px-[10px] border-[#EEEEEE] border-t-0'>

                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex mt-[7px]'>
                                            <div className='basis-[120px] text-[1.1em] flex items-center min-h-[58px]  h-full border border-[#EEEEEE] min-w-[120px] py-[5px] px-[10px] bg-[#FAFAFB]'>
                                                Medication
                                            </div>
                                            <div className='flex-1 border min-h-[58px] py-[5px] px-[10px] border-[#EEEEEE] border-l-0' />
                                        </div>
                                        <div className='flex mt-[7px]'>
                                            <div className='basis-[120px] text-[1.1em] flex items-center min-h-[58px]  h-full border border-[#EEEEEE] min-w-[120px] py-[5px] px-[10px] bg-[#FAFAFB]'>
                                                Personal history
                                            </div>
                                            <div className='flex-1 border min-h-[58px] py-[5px] px-[10px] border-[#EEEEEE] border-l-0' />
                                        </div>
                                        <div className='flex mt-[7px]'>
                                            <div className='basis-[120px] text-[1.1em] flex items-center min-h-[58px]  h-full border border-[#EEEEEE] min-w-[120px] py-[5px] px-[10px] bg-[#FAFAFB]'>
                                                Family history
                                            </div>
                                            <div className='flex-1 border min-h-[58px] py-[5px] px-[10px] border-[#EEEEEE] border-l-0' />
                                        </div>
                                        <div className='flex mt-[7px]'>
                                            <div className='basis-[120px] text-[1.1em] flex items-center min-h-[58px]  h-full border border-[#EEEEEE] min-w-[120px] py-[5px] px-[10px] bg-[#FAFAFB]'>
                                                Other information
                                            </div>
                                            <div className='flex-1 border min-h-[58px] py-[5px] px-[10px] border-[#EEEEEE] border-l-0' />
                                        </div>
                                    </div>
                                </div>
                                <div className='bg-white shadow-box1 rounded-[5px] mt-[25px]'>
                                    <div className='p-[20px] pb-[15px]'>
                                        <h3 className='text-[20px] leading-[24px] '>Goals</h3>
                                        <span className='text-[12px] text-[#888888]/[70%]'>
                                            Goals the client wants to achieve
                                        </span>
                                    </div>
                                    <div className='p-[0_20px_20px]'>
                                        <p className='text-[#888888] italic text-center'>No goals defined yet.</p>
                                    </div>
                                </div>
                                <div className='bg-white shadow-box1 rounded-[5px] mt-[25px]'>
                                    <div className='flex justify-between items-center p-[20px] pb-[15px]'>
                                        <div>
                                            <h3 className='text-[20px] leading-[24px] '>Files</h3>
                                            <span className='text-[12px] text-[#888888]/[70%]'>
                                                Files attached to this client
                                            </span>
                                        </div>
                                        <BsFilter className='text-[24px]' />
                                    </div>
                                    <div className='p-[0_20px_20px]'>
                                        <p className='text-[#888888] italic text-center'>There aren't any files associated to this filter
                                        </p>
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

export default Information
