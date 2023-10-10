import MainLayout from '@/components/Admin/MainLayout'
import { mdiAccountOutline, mdiAttachment, mdiCarSearch, mdiChevronDown, mdiDotsHorizontal, mdiLabelOutline, mdiMessageText, mdiPackageDown, mdiPaperclip, mdiSearchWeb, mdiSend } from '@mdi/js'
import Icon from '@mdi/react'
import React from 'react'
import { Tooltip as ReactTooltip } from "react-tooltip";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { ExclamationTriangleIcon, XMarkIcon } from '@heroicons/react/24/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Conversations() {

  const [open, setOpen] = useState(true)

  return (
    <>
      <MainLayout head={"Messages"} text={"Send, read and reply to messages from your clients."}>
        {/* <Dropdown /> */}
        <div className='p-[25px_0_125px]'>
          <div className='-mx-[15px] flex'>
            <div className='w-[66.66%] px-[15px]'>
              <div>
                <div className='bg-[#FFFFFF] mb-[25px] mt-0 p-0 shadow-[(0_2px_2px_0_rgba(144,144,144,0.14))_(0_3px_1px_-2px_transparent)_(0_1px_5px_0_rgba(145,145,145,0.12))] rounded-[5px]'>
                  <div className='p-[20px_20px_15px_20px] flex items-center'>
                    <div className='grow '>
                      <div className='flex'>
                        <div className='w-[50px]'>
                          <div className='w-[40px] h-[40px] flex mr-[7px] overflow-hidden'>
                            <a href=''>
                              <img src='/image/female_thumb.png' className='w-[40px] h-[40px] border-none rounded-[50%] max-w-[70px] max-h-[70px]' />
                            </a>
                          </div>
                        </div>
                        <div className='flex-[1] grow min-w-0'>
                          <h3 className='m-0 text-[20px] font-[400] leading-[1.1]'>Example conversation</h3>
                          <div className='h-[18px] font-[100] text-[12px] text-[#888888] overflow-hidden whitespace-nowrap text-ellipsis flex items-center'>
                            <a href='' className='text-[#676A6C] flex font-[100]'>
                              <Icon path={mdiAccountOutline} size={0.65} className='text-[15px] mr-[3px]' />
                              Example client
                            </a>
                            <Icon path={mdiLabelOutline} size={0.65} className='text-[15px] mr-[3px] ml-[5px]' />
                            Follow Up
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='flex items-center'>
                      <Icon path={mdiPackageDown} size={1} className='ml-[10px] inline-block align-middle leading-[1] hover:text-[#1AB394]' data-tooltip-id="my-tooltip-1" />
                      <Icon path={mdiChevronDown} size={1} className='ml-[10px] inline-block align-middle leading-[1] hover:text-[#23C6C8]' data-tooltip-id="my-tooltip-2" />
                    </div>
                  </div>
                  <div className='pb-[15px] p-[0]'>
                    <div className='h-full p-[10px_0] bg-[#FAFAFB] border-t border-t-[#EEEEEE] border-b border-b-[#EEEEEE]'>
                      <div className='opacity-[0.3] text-center'>
                        <Icon path={mdiDotsHorizontal} size={1} className='inline-block' />
                      </div>
                      <div className='m-[5px_0_3px] text-[#888888] text-center'>July 14, 2023</div>
                      <div className='max-w-[51%] m-[5px_20px] relative'>
                        <div className='p-[7px_10px] bg-[#fff] border border-[#e7eaec] text-left block relative rounded'>
                          <div className='leading-[0]'>
                            <div className='whitespace-pre-wrap overflow-hidden leading-[1.35em] max-h-[6.75em]'>
                              Hi Nna! You can check here all the messages sent by your clients between appointments.
                            </div>
                          </div>
                        </div>
                        <div className='mt-[3px] text-[0.7em] text-[#888888] flex items-center'>
                          <div className='grow'></div>
                          <div className=''>09:48 AM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className='pb-[15px] p-5 pt-0'>
                    <form>
                      <div className='mb-[15px]'>
                        <textarea placeholder='Write a message' className='border-[0] p-[10px_0] h-auto bg-[#fff] rounded-[1px] block !w-full !max-w-full'></textarea>
                      </div>
                      <div className='items-start flex'>
                        <input className='border border-[#e7eaec] p-0 bg-[#fff] relative mb-5 mr-5 hidden' type='file' />
                        <div></div>
                        <div className='whitespace-nowrap'>
                          <Icon path={mdiAttachment} size={1} className='text-[#DDDDDD] ml-[5px] text-[24px] rotate-90 inline-block whitespace-nowrap ' />
                          <Icon path={mdiSend} size={2.4} className='ml-[5px] inline-block whitespace-nowrap h-[45px] max-h-[300px] mb-0 w-full !text-[14px] text-[rgb(255_255_255)] bg-[rgb(36_40_50)] border border-[rgba(255_255_255_0)] p-[10px_20px] rounded-[10px]' />
                        </div>
                      </div>
                    </form>
                  </div> */}
                </div>
              </div>
            </div>
            <div className='w-[33.33%] px-[15px]'>
              <div className='bg-[#FFFFFF] mb-[25px] mt-0 p-0 shadow-[(0_2px_2px_0_rgba(144_144_144_0.14))_(0_3px_1px_-2px_transparent)_(0_1px_5px_0_rgba(145_145_145_0.12))] rounded-[5px]'>
                <div className='rounded-[5px] bg-[#1AB394] border-[0] text-[#FFFFFF] p-[15px_20px] flex items-center'>
                  <h3 className='m-0 text-[20px] font-[400] leading-[1.1] grow cursor-pointer' onClick={() => setOpen(true)}>Send message</h3>
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
                            <Dialog.Panel className="relative transform overflow-hidden bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                              <div className="absolute right-0 top-0 pr-4 pt-4 flex flex-col border-[0] p-[25px] text-center ">
                                <button
                                  type="button"
                                  className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                  onClick={() => setOpen(false)}
                                >
                                  <span className="sr-only">Close</span>
                                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                              </div>
                              <div></div>
                              <div className="sm:flex sm:items-start">
                                <div className="text-center sm:ml-4 sm:mt-0 sm:text-left p-[25px]">
                                  <div className='text-center text-[26px] m-0 leading-[1.42857143]'>
                                    <div className='text-[1.1em]'>Send message</div>
                                  </div>
                                  <div>
                                    <div className='text-[1em]'>Send a message to one of your clients or to a group of clients</div>
                                  </div>
                                </div>
                                <div className='p-[20px_30px] pt-0 relative'>
                                  <div className='flex'>
                                    <div className='w-[50%] px-[15px]'>
                                      <div className='mb-[15px]'>
                                        <label className='inline-block max-w-[100%] mb-[5px] font-[700]'>Send to</label>
                                        <div className="relative table border-separate">
                                          <div className="flex flex-1 ml-[-1px] h-[38px] items-center border border-[#EEEEEE]">
                                            <div className="p-[0_8px] min-w-[43px] border-r-[0]">
                                              <img src='/image/female_thumb.png' className='max-w-[26px] max-h-[26px] rounded-[100px] h-auto' />
                                            </div>
                                          </div>
                                          
                                        </div>
                                      </div>
                                    </div>
                                    <div className='w-[50%] px-[15px]'>
                                      <div className='mb-[15px]'>
                                        <label className='inline-block max-w-[100%] mb-[5px] font-[700]'>Send to</label>
                                        <div className="relative table border-separate">
                                          <div className="flex flex-1 ml-[-1px] h-[38px] items-center border border-[#EEEEEE]">
                                            <input
                                              className="relative bg-white mb-[20px] mr-[20px] hidden"
                                              type="file"
                                              id="file-input"

                                              name="file"
                                            />
                                            <div className="p-[0_8px] min-w-[43px] border-r-[0]">
                                              <img src='/image/female_thumb.png' className='max-w-[26px] max-h-[26px] rounded-[100px] h-auto' />
                                            </div>
                                          </div>
                                          {/* <label
                                              htmlFor="file-input"
                                              className="text-[#1AB394] active:shadow-insetbtn h-[38px] p-[8px] border-l bg-[#FAFAFB] border border-[#EEEEEE]"
                                            >
                                              <Icon path={mdiPaperclip} size={0.8} />
                                            </label> */}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="">
                                    {/* <div className="relative table border-separate">
                                            <div className="flex flex-1 ml-[-1px] h-[38px] items-center border border-[#EEEEEE]">
                                              <input
                                                className="relative bg-white mb-[20px] mr-[20px] hidden"
                                                type="file"
                                                id="file-input"
                                                
                                                name="file"
                                              />
                                              <div className="p-[0_8px] min-w-[43px] border-r-[0]">
                                                <img src='/image/female_thumb.png' className='max-w-[26px] max-h-[26px] rounded-[100px] h-auto' />
                                                </div>    
                                              <label
                                                htmlFor="file-input"
                                                className="text-[#1AB394] active:shadow-insetbtn h-[38px] p-[8px] border-l bg-[#FAFAFB] border border-[#EEEEEE]"
                                              >
                                                <Icon path={mdiPaperclip} size={0.8} />
                                              </label>
                                            </div>
                                          </div> */}
                                    <div className="flex mt-[7px] items-center w-[50%]">
                                      <div className="basis-[100px]  text-[1.1em] flex items-center min-h-[38px]  h-full border border-[#EEEEEE] min-w-[100px] py-[5px] px-[10px] bg-[#FAFAFB]">Name</div>
                                      <input
                                        className="relative flex-1 ring-0 focus:outline-none focus:ring-0 focus:border-[#EEEEEE] bg-white ml-[-1px] h-[38px] items-center border border-[#EEEEEE]"
                                        type="text"
                                        name="name"


                                      />
                                    </div>
                                    <div className="flex mt-[7px]">
                                      <div className="basis-[100px] text-[1.1em] flex items-center border border-[#EEEEEE] min-w-[100px] py-[5px] px-[10px] bg-[#FAFAFB]">Description</div>
                                      <textarea
                                        className="relative flex-1 ring-0 focus:outline-none focus:ring-0 focus:border-[#EEEEEE] bg-white ml-[-1px] min-h-[56px] items-center border border-[#EEEEEE]"
                                        type="text"
                                        name="description"

                                      />
                                    </div>
                                    <div className="flex mt-[7px]">
                                      <div className="basis-[100px] text-[1.1em] flex items-center min-h-[38px]  h-full border border-[#EEEEEE] min-w-[100px] py-[5px] px-[10px] bg-[#FAFAFB]">
                                        Date
                                      </div>
                                      {/* <DatePicker
                                              selected={formValues.date}
                                              onChange={handleDateChange}
                                              showYearDropdown
                                              className="flex-1 border w-full text-[13px] ml-[-1px] focus:ring-0 focus:outline-none focus:border-[#EEEEEE] min-h-[38px] py-[5px] px-[10px] border-[#EEEEEE]"
                                              dateFormatCalendar="MMMM"
                                              yearDropdownItemNumber={15}
                                              scrollableYearDropdown
                                            /> */}
                                    </div>
                                    <div className="flex mt-[7px] items-center">
                                      <div className="basis-[100px]  text-[1.1em] flex items-center min-h-[38px]  h-full border border-[#EEEEEE] min-w-[100px] py-[5px] px-[10px] bg-[#FAFAFB]">Category</div>

                                      <select
                                        className="relative flex-1 ring-0 text-[13px] focus:outline-none focus:ring-0 focus:border-[#EEEEEE] bg-white ml-[-1px] h-[38px] items-center border border-[#EEEEEE]"
                                        required="required"
                                        aria-required="true"
                                        name="category"
                                        id="document_document_category_id"
                                        aria-invalid="false"

                                      >
                                        <option value="Photo">Photo</option>
                                        <option value="Meal Plan">Meal plan</option>
                                        <option value="Biochemistry">Biochemistry</option>
                                        <option value="Privacy/Consent">Privacy/Consent</option>
                                        <option value="Patient Informations">Patient information</option>
                                        <option value="Others">Others</option>
                                      </select>
                                    </div>
                                    <div className="text-end mt-[20px]">
                                      <button onClick={() => props.setIsOpen(false)} className="bg-white  border rounded-[3px] text-[14px] px-[12px] py-[6px]">Cancel</button>
                                      <button className="bg-[#1AB394] ml-[5px] text-[#FFFFFF] rounded-[3px] text-[14px] px-[12px] py-[6px]">Save</button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                        
                       
                     
                      {/* <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                                <button
                                  type="button"
                                  className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                  onClick={() => setOpen(false)}
                                >
                                  Deactivate
                                </button>
                                <button
                                  type="button"
                                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                  onClick={() => setOpen(false)}
                                >
                                  Cancel
                                </button>
                              </div> */}
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition.Root>
          <div>
            <div>
              <Icon path={mdiMessageText} size={0.8} className='inline-block align-middle leading-[1]' />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='w-full float-left'>
          <div className='bg-[#FFFFFF] mb-[25px] mt-0 p-[0] shadow-[(0_2px_2px_0_rgba(144_144_144_0.14))_(0_3px_1px_-2px_transparent)_(0_1px_5px_0_rgba(145_145_145_0.12))] rounded-[5px]'>
            <div className='p-[20px_20px_15px_20px]'>
              <h4 className='m-0 text-[20px] font-[400] leading-[1.1]'>Filters</h4>
              <div className='font-[100] text-[12px] text-[#888888]'>Choose what conversations you want to see</div>
            </div>
            <div className='pb-[10px] p-5 pt-0'>
              <div>
                <Menu as="div" className="relative inline-block text-left w-full mb-[10px]">
                  <div>
                    <Menu.Button className="inline-flex w-full justify-between gap-x-1.5 bg-white px-3 py-2 text-sm text-[#676A6C] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                      All conversations
                      <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute w-full mt-0 right-0 z-10 origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 text-sm'
                              )}
                            >
                              Open conversations
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 text-sm'
                              )}
                            >
                              Archived conversations
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
                <Menu as="div" className="relative inline-block text-left w-full mb-[10px]">
                  <div>
                    <Menu.Button className="inline-flex w-full justify-between gap-x-1.5 bg-white px-3 py-2 text-sm text-[#676A6C] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                      All conversations
                      <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute w-full mt-0 right-0 z-10 origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 text-sm'
                              )}
                            >
                              Conversations created automatically
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 text-sm'
                              )}
                            >
                              Conversations created manually
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
                <Menu as="div" className="relative inline-block text-left w-full mb-[10px]">
                  <div>
                    <Menu.Button className="inline-flex w-full justify-between gap-x-1.5 bg-white px-3 py-2 text-sm text-[#676A6C] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                      All categories
                      <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute w-full mt-0 right-0 z-10 origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 text-sm'
                              )}
                            >
                              Appointment
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 text-sm'
                              )}
                            >
                              Birthday
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Follow Up
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 text-sm'
                              )}
                            >
                              Food diary
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 text-sm'
                              )}
                            >
                              Meal plan
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 text-sm'
                              )}
                            >
                              Question
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
                <Menu as="div" className="relative inline-block text-left w-full mb-[10px]">
                  <div>
                    <Menu.Button className="inline-flex w-full justify-between gap-x-1.5 bg-white px-3 py-2 text-sm text-[#676A6C] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                      All conversations
                      <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute w-full mt-0 right-0 z-10 origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className='border-b border-[#EEEEEE] inline-block w-full min-h-[26px] m-0 pl-1 pr-1 relative z-[10000] whitespace-nowrap'>
                        {/* <input /> */}
                      </div>
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 text-sm'
                              )}
                            >
                              Open conversations
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 text-sm'
                              )}
                            >
                              Archived conversations
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          <div className='bg-[#FFFFFF] mb-[25px] mt-0 p-[0] shadow-[(0_2px_2px_0_rgba(144_144_144_0.14))_(0_3px_1px_-2px_transparent)_(0_1px_5px_0_rgba(145_145_145_0.12))] rounded-[5px]'>
            <div className='p-[20px_20px_15px_20px]'>
              <h4 className='m-0 text-[20px] font-[400] leading-[1.1]'>Month information</h4>
              <div className='font-[100] text-[12px] text-[#888888]'>Check the general statistics about manual messages in the current month</div>
            </div>
            <div className='p-5 pt-0'>
              <ul className='p-0 m-0'>
                <li className='mt-0'>
                  <h2 className='mt-0 mb-0 text-[24px] font-[100] m-0 '>0</h2>
                  <div className='table w-full'>
                    <div className='font-[100] p-[3px_0] table-cell align-middle text-[0.85em]'>Clients with messages</div>
                    <div className='text-right table-cell align-middle text-[0.85em]'>0%</div>
                  </div>
                  <div>
                    <div className='h-[5px] mb-0 mt-[5px] overflow-hidden bg-[#f5f5f5] rounded'>
                      <div className='w-0 h-[5px] mb-0 bg-[#1ab394] float-left text-[12px] leading-5 text-[#fff] text-center transition-[w_.6s_ease]'></div>
                    </div>
                  </div>
                </li>
                <li className='mt-[15px]'>
                  <h2 className='mt-0 mb-0 text-[24px] font-[100] m-0'>0</h2>
                  <div className='table w-full'>
                    <div className='font-[100] p-[3px_0] table-cell align-middle text-[0.85em] '>Average messages per active client</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className='bg-[#FFFFFF] mb-[25px] mt-0 p-[0] shadow-[(0_2px_2px_0_rgba(144_144_144_0.14))_(0_3px_1px_-2px_transparent)_(0_1px_5px_0_rgba(145_145_145_0.12))] rounded-[5px]'>
            <div className='p-[20px_20px_15px_20px]'>
              <h4 className='m-0 text-[20px] font-[400] leading-[1.1]'>Number of messages</h4>
              <div className='font-[100] text-[12px] text-[#888888]'>Check the number of manual messages sent and received by category</div>
            </div>
            <div className='p-5 pt-0'>
              chart
            </div>
          </div>
          <div className='bg-[#FFFFFF] mb-[25px] mt-0 p-[0] shadow-[(0_2px_2px_0_rgba(144_144_144_0.14))_(0_3px_1px_-2px_transparent)_(0_1px_5px_0_rgba(145_145_145_0.12))] rounded-[5px]'>
            <div className='p-[20px_20px_15px_20px]'>
              <h4 className='m-0 text-[20px] font-[400] leading-[1.1]'>Top clients</h4>
              <div className='font-[100] text-[12px] text-[#888888]'>Check the clients with most manual messages in the current month</div>
            </div>
            <div className='p-5 pt-0'>
              <ul className='p-0 m-0'>
                <li className='mt-0 flex items-center'>
                  <img src='/image/female_thumb.png' className='w-[30px] h-[30px] border-none rounded-full mr-[10px] max-w-full block align-middle' />
                  <div className='grow'>
                    <div className='flex items-center'>
                      <span className='text-[14px] font-[100] grow'>Example client</span>
                      <span className='mt-0 text-[11px]'>0</span>
                    </div>
                    <div>
                      <div className='h-[5px] mb-0 mt-[5px] overflow-hidden bg-[#f5f5f5] rounded'>
                        <div className='w-0 h-[5px] mb-0 bg-[#1ab394]'></div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div >
          </div >
        </div >
      </MainLayout >
      <ReactTooltip
        id="my-tooltip-1"
        place="top"
        content="Archive"
        className='!p-[3px_5px] !bg-[#2f4050] opacity-[.9] text-center !text-xs'
      />
      <ReactTooltip
        id="my-tooltip-2"
        place="top"
        content="Expand conversation"
        className='!p-[3px_4px] !bg-[#2f4050] opacity-[.9] !w-28 text-center !text-xs'
      />
    </>
  )
}
