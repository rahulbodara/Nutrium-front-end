import MainLayout from '@/components/Admin/MainLayout'
import React, { useState } from 'react'
import Icon from '@mdi/react'
import { Fragment } from 'react'
import { mdiDatabasePlus, mdiInformationOutline, mdiOpenInNew, mdiPlus } from '@mdi/js'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Tooltip as ReactTooltip } from "react-tooltip";
import { Dialog } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/24/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Templates() {

  const [open, setOpen] = useState(false)
  const [open1, setOpen1] = useState(false)

  return (
    <>

      <MainLayout head={"Templates"} text={"Create, check and update your templates so you can improve your appointment time"}>
        {/* <Dropdown /> */}
        <div className='border p-6 mt-6 card-shadow mb-6 rounded-md bg-white'>
          <div className='flex items-center'>
            <div className='flex-grow'>
              <h4 className='text-[20px] leading-[1.1]'>Meal plan templates</h4>
              <div className='text-[12px] text-[#888888] opacity-[0.6]'>Search, check and create meal plan templates</div>
            </div>
            <div className='flex items-center group cursor-pointer'>

              <a className='' data-tooltip-id="my-tooltip-1">
                <Icon path={mdiPlus} size="24px" />
              </a>
            </div>
            <div>
            </div>
          </div>
          <div className='xl:flex-wrap flex mt-3 justify-between gap-2'>
            <div className='mb-[15px] w-5/6 sm:mb-0 xl:w-[53%] lg:w-full'>
              <input
                type="text"
                name="fullName"
                className="block focus:ring-0 border-[1px] border-[#e5e6e7] py-[6px] w-full px-[12px] input-transition focus:border-[#1ab394] text-[13px] text-[#676a6c] focus:outline-none"
                placeholder="Search meal plan template"
              />
            </div>
            {/* <div className='xl:flex-wrap xl:w-full flex w-2/12'>
                <ClosableSelect labelWidth="basis-[40px] min-w-[40px] sm:basis-[40px] sm:min-w-[40px]" focusEffect={true} Icon={mdiSortDescending} searchOption={false} option={professionOptions} closable={false} className="mt-0 w-full h-[38px]" />
              </div> */}
            {/* <div className='xl:flex-wrap xl:w-full flex w-2/12'>
                <ClosableSelect labelWidth="basis-[40px] min-w-[40px] sm:basis-[0px] sm:min-w-[0px] py-0 px-0" focusEffect={true} searchOption={false} option={professionOptions} className="mt-0 w-full h-[38px]" />
              </div> */}
            <Menu as="div" className="relative inline-block text-left xl:flex-wrap xl:w-full w-2/12">
              <div>
                <Menu.Button className="inline-flex w-full font-[300] justify-between text-[#555555] gap-x-1.5 bg-white px-3 py-[9px] text-sm shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  All databases
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
                <Menu.Items className="absolute right-0 z-10 w-[15.8rem] sm:w-[16.8rem] lg:w-[18.5rem] origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm mx-1 my-1'
                          )}
                        >
                          All templates
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm mx-1 my-1'
                          )}
                        >
                          System templates
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm mx-1 my-1'
                          )}
                        >
                          My templates
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
          <div>
            <a href='' className='text-[#676A6C]'>
              <div className='mb-[10px] border border-[#EEEEEE] bg-[#FFF] flex group hover:border-[#1AB394] sm:mt-[10px]'>

                <div className='flex grow pr-[10px] items-center'>
                  <div className='shrink grow-[2] flex-col flex items-start overflow-hidden p-[10px] sm:basis-0'>
                    <div className='text-[14px]'>1200 kcal Ketogenic meal plan</div>
                    <div className='font-[300] text-[1em] max-w-[100%] overflow-hidden text-ellipsis whitespace-nowrap'>System templates</div>
                  </div>
                  <div className='p-0 grow flex items-center basis-[135px] sm:flex-wrap '>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px] lg:flex'>
                          1262
                          <div className='inline-flex text-[1em] ml-[3px]'>kcal</div>
                        </div>
                      </div>
                      <div className='font-[300] text-[1em]'>Energy</div>
                    </div>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px] lg:flex'>
                          62
                          <div className='inline-flex text-[1em] ml-[3px]'>%</div>
                        </div>
                      </div>
                      <div className='font-[300] text-[1em]'>Fat</div>
                    </div>
                    <div className='grow text-center p-[5px] '>
                      <div>
                        <div className='text-[14px] lg:flex lg:justify-center'>
                          13
                          <div className='inline-flex text-[1em] ml-[3px]'>%</div>
                        </div>
                      </div>
                      <div className='font-[300] text-[1em]'>Carbohydrate</div>
                    </div>
                    <div className='grow text-center p-[5px] '>
                      <div>
                        <div className='text-[14px] lg:flex lg:justify-center'>
                          25
                          <div className='inline-flex text-[1em] ml-[3px]'>%</div>
                        </div>
                      </div>
                      <div className='font-[300] text-[1em]'>Protein</div>
                    </div>
                  </div>
                </div>
                <div className='min-w-[38px] bg-[#ffffff00] p-[10px] items-center flex grow-0 group-hover:text-[#1AB394]'>
                  <Icon path={mdiOpenInNew} className='hidden text-[18px] group-hover:flex' />
                </div>
              </div>
              {/* <div className='mb-[10px] border border-[#EEEEEE] bg-[#fff] flex'>
                <div className='grow flex pr-[10px] items-center overflow-auto'>
                  <div className='shrink grow-[2] flex-col items-start overflow-hidden flex p-[10px] basis-0'>
                    <div>1200 kcal Ketogenic meal plan</div>
                    <div className='font-[300] text-[0.9em] max-w-full overflow-hidden whitespace-nowrap text-ellipsis'>System templates</div>
                  </div>
                  <div className=''></div>
                </div>
              </div> */}
            </a>
          </div>
          <div>
            <div className='min-h-[54px] lg:mt-3 sm:mt-3 flex items-center p-[10px] bg-[#fff] border border-[#EEEEEE] text-[#888888] group hover:border-[#1AB394]'>
              <span className='w-[30px] text-center mr-[15px]'>
                <Icon path={mdiDatabasePlus} className='inline-block align-middle leading-none group-hover:text-[#1AB394]' />
              </span>
              <span>
                <h4 className='font-[400] m-0 text-[14px] leading-[1.1] group-hover:text-[#1AB394]'>Create meal plan template</h4>
              </span>
            </div>
          </div>
        </div>
        <div className='flex sm:flex-wrap'>
          <div className='w-[50%] px-[15px] sm:w-full sm:px-0'>
            <div className='bg-[#fff] mb-[25px] mt-0 p-0 card-shadow rounded-md'>
              <div className='p-[20px_20px_15px_20px] flex items-center'>
                <div className='grow'>
                  <h4 className='m-0 text-[20px] font-[400] leading-[1.1]'>Foods to avoid templates</h4>
                  <div className='font-[100] text-[12px] text-[#888888]'>Search, check and create foods to avoid templates</div>
                </div>
                <div>
                  <div className='text-[#676A6C]'>
                    <a className='' data-tooltip-id="my-tooltip-1">
                      <Icon path={mdiPlus} size="24px" onClick={() => setOpen(true)} />
                    </a>
                  </div>

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
                            <Dialog.Panel className="relative transform overflow-hidden rounded-[4px] bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 w-[900px]">
                              <div className="absolute right-0 top-0 pr-4 pt-4 sm:block">
                                <button
                                  type="button"
                                  className="rounded-md bg-white text-gray-400"
                                  onClick={() => setOpen(false)}
                                >
                                  <span className="sr-only">Close</span>
                                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                              </div>
                              <div className='flex flex-col border-0 p-[25px] text-center'>
                                <div className='text-center text-[26px] m-0 leading-[1.42857143]'>
                                  <div className='text-[1.1em]'>Create foods to avoid template</div>
                                  <div className='text-[1.1em] hidden'>Edit foods to avoid template</div>
                                </div>
                                <div>
                                  <div className='text-[1em]'>Create a new template of foods to avoid</div>
                                  <div className='text-[1em] hidden'>Edit the data of foods to avoid template</div>
                                </div>
                              </div>
                              <div className='p-[20px_30px] pt-0 bg-none relative'>
                                <form>
                                  <div>
                                    <div className='flex p-0 min-w-0'>
                                      <div className='flex border border-[#EEEEEE] bg-[#FAFAFB] p-[5px_10px_5px_10px] text-[1.1em] items-center z-[1] min-w-[160px]'>
                                        <label className='m-0 font-[400] inline-block max-w-full'>Template name</label>
                                      </div>
                                      <div className='border-l-0 grow-[3] border border-[#EEEEEE] relative flex p-0 min-w-0'>
                                        <input type='text' className='border-0 h-full self-center p-[10px] min-h-[38px] grow overflow-hidden text-ellipsis bg-[#fff] rounded-[1px] block w-full leading-[1.42857143] focus:outline-transparent focus:ring-transparent focus:border-[#EEEEEE]' />
                                      </div>
                                    </div>
                                    <div className='flex p-0 min-w-0 mt-[7px]'>
                                      <div className='flex border border-[#EEEEEE] bg-[#FAFAFB] p-[5px_10px_5px_10px] text-[1.1em] items-center z-[1] min-w-[160px]'>
                                        <label className='m-0 font-[400] inline-block max-w-full'>Foods to avoid</label>
                                      </div>
                                      <div className='border-l-0 grow-[3] border border-[#EEEEEE] relative flex p-0 min-w-0'>
                                        <input type='text' className='border-0 h-full self-center p-[10px] min-h-[38px] grow overflow-hidden text-ellipsis bg-[#fff] rounded-[1px] block w-full leading-[1.42857143] focus:outline-transparent focus:ring-transparent focus:border-[#EEEEEE]' />
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                              <div className='p-[0px_30px_15px] border-0 mt-0 text-right'>
                                <button className='bg-[#DB4965] border-[#DB4965] text-[#fff] rounded-[3px] hidden mb-0 font-[400] text-center whitespace-nowrap align-middle border p-[6px_12px] text-[14px] leading-[1.42857143]'>Remove</button>
                                <button className='ml-0 bg-[#fff] border-[#EEEEEE] rounded-[3px] hidden mb-0 font-[400] text-center whitespace-nowrap align-middle border p-[6px_12px] text-[14px] leading-[1.42857143]'>Duplicate</button>
                                <button onClick={() => setOpen(false)} className='ml-[5px] bg-[#fff] border-[#EEEEEE] rounded-[3px] inline-block mb-0 font-[400] text-center whitespace-nowrap align-middle border p-[6px_12px] text-[14px] leading-[1.42857143]'>Cancel</button>
                                <button className='ml-[5px] bg-[#1AB394] border-[#1AB394] text-[#fff] rounded-[3px] inline-block mb-0 font-[400] text-center whitespace-nowrap align-middle border p-[6px_12px] text-[14px] leading-[1.42857143]'>Save template</button>
                              </div>
                            </Dialog.Panel>
                          </Transition.Child>
                        </div>
                      </div>
                    </Dialog>
                  </Transition.Root>

                </div>
              </div>
              <div className='p-5 pt-0'>
                <div>
                  <div className='xl:flex-wrap flex mt-3 justify-between gap-2'>
                    <div className='mb-[15px] w-4/5 sm:mb-0 xl:w-[53%] lg:w-full'>
                      <input
                        type="text"
                        name="fullName"
                        className="block focus:ring-0 border-[1px] border-[#e5e6e7] py-[6px] w-full px-[12px] input-transition focus:border-[#1ab394] text-[13px] text-[#676a6c] focus:outline-none"
                        placeholder="Search foods to avoid template"
                      />
                    </div>
                    <Menu as="div" className="relative inline-block text-left xl:flex-wrap xl:w-full w-1/5">
                      <div>
                        <Menu.Button className="inline-flex w-full font-[300] justify-between text-[#555555] gap-x-1.5 bg-white px-3 py-[9px] text-sm shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                          All databases
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
                        <Menu.Items className="absolute right-0 z-10 w-[15.8rem] sm:w-[16.8rem] lg:w-[18.5rem] origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block px-4 py-2 text-sm mx-1 my-1'
                                  )}
                                >
                                  All templates
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block px-4 py-2 text-sm mx-1 my-1'
                                  )}
                                >
                                  System templates
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block px-4 py-2 text-sm mx-1 my-1'
                                  )}
                                >
                                  My templates
                                </a>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
                <div>
                  <div className='mb-[10px] border border-[#EEEEEE] bg-[#fff] flex group hover:border-[#1AB394] sm:mt-3'>
                    <div className='grow flex pr-[10px] items-center overflow-auto'>
                      <div className='shrink grow-[2] flex-col items-start overflow-hidden flex p-[10px] basis-0'>
                        <div className=''>Diabetes</div>
                        <div className='font-[300] text-[0.9em] max-w-full overflow-hidden whitespace-nowrap text-ellipsis'>System templates</div>
                      </div>
                    </div>
                    <div className='min-w-[38px] bg-[#ffffff00] text-[#fff] p-[10px] items-center flex grow-0 group-hover:text-[#1AB394]'>
                      <Icon path={mdiOpenInNew} className='hidden text-[18px] group-hover:flex' />
                    </div>
                  </div>
                </div>
                <div>
                  <div className='min-h-[54px] lg:mt-3 sm:mt-3 flex items-center p-[10px] bg-[#fff] border border-[#EEEEEE] text-[#888888] group hover:border-[#1AB394]'>
                    <span className='w-[30px] text-center mr-[15px]'>
                      <Icon path={mdiDatabasePlus} className='inline-block align-middle leading-none group-hover:text-[#1AB394]' />
                    </span>
                    <span>
                      <h4 className='font-[400] m-0 text-[14px] leading-[1.1] group-hover:text-[#1AB394]'>Create foods to avoid template</h4>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[50%] px-[15px] sm:w-full sm:px-0'>
            <div className='bg-[#fff] mb-[25px] mt-0 p-0 card-shadow rounded-md'>
              <div className='p-[20px_20px_15px_20px] flex items-center'>
                <div className='grow'>
                  <h4 className='m-0 text-[20px] font-[400] leading-[1.1]'>Recommendations templates</h4>
                  <div className='font-[100] text-[12px] text-[#888888] sm:text-[11px]'>Search, check and create recommendations templates</div>
                </div>
                <div>
                  <div className='text-[#676A6C]'>
                    <a className='' data-tooltip-id="my-tooltip-1">
                      <Icon path={mdiPlus} size="24px" onClick={() => setOpen1(true)} />
                    </a>
                  </div>

                  <Transition.Root show={open1} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={setOpen1}>
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
                            <Dialog.Panel className="relative transform overflow-hidden rounded-[4px] bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 w-[900px] lg:w-[600px] xl:w-[820px]">
                              <div className="absolute right-0 top-0 pr-4 pt-4 sm:block">
                                <button
                                  type="button"
                                  className="rounded-md bg-white text-gray-400"
                                  onClick={() => setOpen1(false)}
                                >
                                  <span className="sr-only">Close</span>
                                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                              </div>
                              <div className='flex flex-col border-0 p-[25px] text-center'>
                                <div className='text-center text-[26px] m-0 leading-[1.42857143]'>
                                  <div className='text-[1.1em]'>Create recommendations template</div>
                                  <div className='text-[1.1em] hidden'>Edit foods to avoid template</div>
                                </div>
                                <div>
                                  <div className='text-[1em]'>Create a new template of recommendations</div>
                                  <div className='text-[1em] hidden'>Edit the data of foods to avoid template</div>
                                </div>
                              </div>
                              <div className='p-[20px_30px] pt-0 bg-none relative sm:px-0'>
                                <form>
                                  <div>
                                    <div className='flex p-0 min-w-0'>
                                      <div className='flex border border-[#EEEEEE] bg-[#FAFAFB] p-[5px_10px_5px_10px] text-[1.1em] items-center z-[1] min-w-[160px]'>
                                        <label className='m-0 font-[400] inline-block max-w-full'>Template name</label>
                                      </div>
                                      <div className='border-l-0 grow-[3] border border-[#EEEEEE] relative flex p-0 min-w-0'>
                                        <input type='text' className='border-0 h-full self-center p-[10px] min-h-[38px] grow overflow-hidden text-ellipsis bg-[#fff] rounded-[1px] block w-full leading-[1.42857143] focus:outline-transparent focus:ring-transparent focus:border-[#EEEEEE]' />
                                      </div>
                                    </div>
                                    <div className='flex p-0 min-w-0 mt-[7px]'>
                                      <div className='flex border border-[#EEEEEE] bg-[#FAFAFB] p-[5px_10px_5px_10px] text-[1.1em] items-center z-[1] min-w-[160px]'>
                                        <label className='m-0 font-[400] inline-block max-w-full'>Recommendations</label>
                                      </div>
                                      <div className='border-l-0 grow-[3] border border-[#EEEEEE] relative flex p-0 min-w-0'>
                                        {/* <input type='text' className='border-0 h-full self-center p-[10px] min-h-[38px] grow overflow-hidden text-ellipsis bg-[#fff] rounded-[1px] block w-full leading-[1.42857143] focus:outline-transparent focus:ring-transparent focus:border-[#EEEEEE]' /> */}
                                        <textarea rows='7' className='border-0 h-full self-center p-[10px] min-h-[38px] grow overflow-hidden text-ellipsis bg-[#fff] rounded-[1px] block w-full leading-[1.42857143] focus:outline-transparent focus:ring-transparent focus:border-[#EEEEEE]'></textarea>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                              <div className='p-[0px_30px_15px] border-0 mt-0 text-right'>
                                <button className='bg-[#DB4965] border-[#DB4965] text-[#fff] rounded-[3px] hidden mb-0 font-[400] text-center whitespace-nowrap align-middle border p-[6px_12px] text-[14px] leading-[1.42857143]'>Remove</button>
                                <button className='ml-0 bg-[#fff] border-[#EEEEEE] rounded-[3px] hidden mb-0 font-[400] text-center whitespace-nowrap align-middle border p-[6px_12px] text-[14px] leading-[1.42857143]'>Duplicate</button>
                                <button onClick={() => setOpen1(false)} className='ml-[5px] bg-[#fff] border-[#EEEEEE] rounded-[3px] inline-block mb-0 font-[400] text-center whitespace-nowrap align-middle border p-[6px_12px] text-[14px] leading-[1.42857143]'>Cancel</button>
                                <button className='ml-[5px] bg-[#1AB394] border-[#1AB394] text-[#fff] rounded-[3px] inline-block mb-0 font-[400] text-center whitespace-nowrap align-middle border p-[6px_12px] text-[14px] leading-[1.42857143]'>Save template</button>
                              </div>
                            </Dialog.Panel>
                          </Transition.Child>
                        </div>
                      </div>
                    </Dialog>
                  </Transition.Root>

                </div>
              </div>
              <div className='p-5 pt-0'>
                <div>
                  <div className='xl:flex-wrap flex mt-3 justify-between gap-2'>
                    <div className='mb-[15px] w-4/5 sm:mb-0 xl:w-[53%] lg:w-full'>
                      <input
                        type="text"
                        name="fullName"
                        className="block focus:ring-0 border-[1px] border-[#e5e6e7] py-[6px] w-full px-[12px] input-transition focus:border-[#1ab394] text-[13px] text-[#676a6c] focus:outline-none"
                        placeholder="Search recommendations template"
                      />
                    </div>
                    <Menu as="div" className="relative inline-block text-left xl:flex-wrap xl:w-full w-1/5">
                      <div>
                        <Menu.Button className="inline-flex w-full font-[300] justify-between text-[#555555] gap-x-1.5 bg-white px-3 py-[9px] text-sm shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                          All databases
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
                        <Menu.Items className="absolute right-0 z-10 w-[15.8rem] sm:w-[16.8rem] lg:w-[18.5rem] origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block px-4 py-2 text-sm mx-1 my-1'
                                  )}
                                >
                                  All templates
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block px-4 py-2 text-sm mx-1 my-1'
                                  )}
                                >
                                  System templates
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block px-4 py-2 text-sm mx-1 my-1'
                                  )}
                                >
                                  My templates
                                </a>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
                <div>
                  <div className='mb-[10px] border border-[#EEEEEE] bg-[#fff] flex group hover:border-[#1AB394] sm:mt-3'>
                    <div className='grow flex pr-[10px] items-center overflow-auto'>
                      <div className='shrink grow-[2] flex-col items-start overflow-hidden flex p-[10px] basis-0'>
                        <div className=''>Diabetes</div>
                        <div className='font-[300] text-[0.9em] max-w-full overflow-hidden whitespace-nowrap text-ellipsis'>System templates</div>
                      </div>
                    </div>
                    <div className='min-w-[38px] bg-[#ffffff00] text-[#fff] p-[10px] items-center flex grow-0 group-hover:text-[#1AB394]'>
                      <Icon path={mdiOpenInNew} className='hidden text-[18px] group-hover:flex' />
                    </div>
                  </div>
                </div>
                <div>
                  <div className='min-h-[54px] lg:mt-3 sm:mt-3 flex items-center p-[10px] bg-[#fff] border border-[#EEEEEE] text-[#888888] group hover:border-[#1AB394]'>
                    <span className='w-[30px] text-center mr-[15px]'>
                      <Icon path={mdiDatabasePlus} className='inline-block align-middle leading-none group-hover:text-[#1AB394]' />
                    </span>
                    <span>
                      <h4 className='font-[400] m-0 text-[14px] leading-[1.1] group-hover:text-[#1AB394]'>Create recommendations template</h4>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
      <ReactTooltip
        id="my-tooltip-1"
        place="left"
        content="Create template"
        className='!p-[3px_12px] !bg-[#2f4050] opacity-[.9] !w-25 text-center !text-xs'
      />
    </>
  )
}
