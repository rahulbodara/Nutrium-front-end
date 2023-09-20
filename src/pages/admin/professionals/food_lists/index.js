import React, { useState } from 'react'
import Icon from '@mdi/react'
import { Fragment } from 'react'
import MainLayout from '@/components/Admin/MainLayout'
import { mdiDatabasePlus, mdiInformationOutline, mdiMagnify, mdiOpenInNew, mdiPlus, mdiSortDescending } from '@mdi/js';
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Tooltip as ReactTooltip } from "react-tooltip";
import { Dialog } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Equivalents() {

  const [open, setOpen] = useState(false)

  return (
    <>
      <MainLayout head={"Equivalents"} text={"Create, check and update food lists to use in your meal plans."}>
        {/* <Dropdown /> */}
        <div className='border p-6 mt-6 card-shadow mb-6 rounded-md bg-white'>
          <div className='flex items-center'>
            <div className='flex-grow'>
              <h4 className='text-[20px] leading-[1.1]'>List of equivalents</h4>
              <div className='text-[12px] text-[#888888] opacity-[0.6]'>Search, check and add new lists of equivalents</div>
            </div>
            <div className='flex items-center group cursor-pointer'>
              <div className='text-[#676A6C] ml-[5px] inline-block' data-tooltip-id="my-tooltip-1" onClick={() => setOpen(true)}>
                <Icon path={mdiInformationOutline} size="24px" />
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
                      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 sm:m-[10px]">
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                          enterTo="opacity-100 translate-y-0 sm:scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                          <Dialog.Panel className="relative sm:rounded-none transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-[900px] sm:w-[300px] lg:w-[600px]">
                            <div className="absolute right-0 top-0 pr-2 pt-2 sm:block">
                              <button
                                type="button"
                                className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none"
                                onClick={() => setOpen(false)}
                              >
                                <span className="sr-only">Close</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                              </button>
                            </div>
                            <div className="sm:flex sm:items-start">
                              <div className="p-[25px] text-center sm:mt-0 sm:text-left">
                                <Dialog.Title as="h3" className="text-[26px] sm:text-[31px] font-[300] leading-6 text-[#676A6C] sm:text-center">
                                  Food lists
                                </Dialog.Title>
                                <div className="mt-2 sm:text-center">
                                  <p className="text-sm text-gray-500">
                                    Differences between lists of equivalents and food groups
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="p-[20px_30px] pt-0 lg:flex-wrap sm:pr-0">
                              <div>
                                <div className='text-[14px] mt-[10px] flex sm:flex-wrap'>
                                  <div className='w-[50%] px-[15px] sm:w-full sm:pl-0'>
                                    <div className='px-[30px] sm:px-0'>
                                      <p className='m-0'>
                                        <strong className='text-[16px] font-[600]'>Food groups</strong>
                                      </p>
                                      <p className='m-0'>
                                        Foods with shared nutritional and biological properties among them. They may present similar ways of being produced and cooked. Different common measures can be associated with these food groups, for example, 1 tablespoon or 1/4 of a plate.
                                      </p>
                                      <p className='m-0'>“Bread” group:</p>
                                      <ul className='list-none m-0 p-0'>
                                        <li>Brown bread</li>
                                        <li>Multigrain bread</li>
                                        <li>Whole wheat bread</li>
                                        <li>Oatmeal bread</li>
                                      </ul>
                                      <p className='m-0'>
                                        When adding the group "Bread" in the meal plan, the client will only see that same description. Even though, you can click on the ungroup icon to see all the components included in the food group.
                                      </p>
                                    </div>
                                  </div>
                                  <div className='w-[50%] px-[15px] sm:w-full sm:pl-0 sm:mt-2'>
                                    <div className='px-[30px] sm:px-0'>
                                      <p className='m-0'>
                                        <strong className='text-[16px] font-[600]'>List of equivalents</strong>
                                      </p>
                                      <p className='m-0'>
                                        Different foods with similar nutritional characteristics in which consumption can be switched or replaced. Each list is associated to a portion. When added to the meal plan, this portion is converted into the quantities or serving size of each component.
                                      </p>
                                      <p className='m-0'>
                                        List of equivalents "Cereal and substitutes":
                                      </p>
                                      <ul className='list-none m-0 p-0'>
                                        <li>Bread</li>
                                        <li>Breakfast Cereals</li>
                                        <li>Porridge Oats</li>
                                        <li>Crackers</li>
                                      </ul>
                                      <p className='m-0'>
                                        When adding 1 portion of "Cereal and substitutes" in the meal plan the system will automatically show the components of that group:
                                      </p>
                                      <p className='m-0'>
                                        1 slice of bread or toast or 3 tablespoons of breakfast cereals or 3 tablespoons of porridge oats or 3 small crackers.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='p-[0_30px_15px] border-0 mt-0 text-center flex justify-end'>
                              <button type='button' className='ml-[5px] bg-[#FFFFFF] border border-[#EEEEEE] rounded-[3px] inline-block mb-0 font-[400] text-center whitespace-nowrap align-middle p-[6px_12px] text-[14px] leading-[1.42857143]' onClick={() => setOpen(false)}>Close</button>
                            </div>
                          </Dialog.Panel>
                        </Transition.Child>
                      </div>
                    </div>
                  </Dialog>
                </Transition.Root>
              </div>
              <a className='' data-tooltip-id="my-tooltip-2">
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
                placeholder="Search list of equivalents"
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
                          All databases
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
                          My list of equivalents
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
          <div>
            <div className='min-h-[54px] lg:mt-3 sm:mt-3 flex items-center p-[10px] bg-[#fff] border border-[#EEEEEE] text-[#888888] group hover:border-[#1AB394]'>
              <span className='w-[30px] text-center mr-[15px]'>
                <Icon path={mdiDatabasePlus} className='inline-block align-middle leading-none group-hover:text-[#1AB394]' />
              </span>
              <span>
                <h4 className='font-[400] m-0 text-[14px] leading-[1.1] group-hover:text-[#1AB394]'>Create new list of equivalents</h4>
              </span>
            </div>
          </div>
        </div>
        <div className='border p-6 mt-6 card-shadow mb-6 rounded-md bg-white'>
          <div className='flex items-center'>
            <div className='flex-grow'>
              <h4 className='text-[20px] leading-[1.1]'>Food groups</h4>
              <div className='text-[12px] text-[#888888] opacity-[0.6]'>Search, check and add new food groups</div>
            </div>
            <div className='flex items-center group cursor-pointer'>
              <div className='text-[#676A6C] ml-[5px] inline-block' data-tooltip-id="my-tooltip-3" onClick={() => setOpen(true)}>
                <Icon path={mdiInformationOutline} size="24px" />
              </div>
              <a className='' data-tooltip-id="my-tooltip-4">
                <Icon path={mdiPlus} size="24px" />
              </a>
            </div>
            <div>
            </div>
          </div>
          <div className='xl:flex-wrap flex mt-3 justify-between gap-2'>
            <div className='mb-[15px] w-4/6 sm:mb-0 xl:w-[53%] lg:w-full'>
              <input
                type="text"
                name="fullName"
                className="block focus:ring-0 border-[1px] border-[#e5e6e7] py-[6px] w-full px-[12px] input-transition focus:border-[#1ab394] text-[13px] text-[#676a6c] focus:outline-none"
                placeholder="Search for food groups"
              />
            </div>
            {/* <div className='xl:flex-wrap xl:w-full flex w-2/12'>
                <ClosableSelect labelWidth="basis-[40px] min-w-[40px] sm:basis-[40px] sm:min-w-[40px]" focusEffect={true} Icon={mdiSortDescending} searchOption={false} option={professionOptions} closable={false} className="mt-0 w-full h-[38px]" />
              </div> */}
            <Menu as="div" className="relative inline-block text-left xl:flex-wrap xl:w-full w-2/12">
              <div className='h-[38px]'>
                <Menu.Button className="inline-flex w-full justify-between gap-x-1.5 bg-white text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  <div className='flex'>
                    <Icon path={mdiSortDescending} className='w-[36px] text-[#555555] border-r border-r-[#EEEEEE] px-2 py-[9px]' />
                    <span className='px-3 py-[9px] text-[#999999] font-[300]'>Sort by nutrient</span>
                  </div>
                  <ChevronDownIcon className="-mr-1 h-[2.25rem] w-[2.25rem] text-gray-400 px-2 py-[9px]" aria-hidden="true" />
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
                <Menu.Items className="absolute right-[-55px] lg:right-0 sm:w-[14.5rem] lg:w-[16.3rem] z-10 w-[17rem] origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>

                      <div className='flex border-b border-b-[#EEEEEE] justify-between'>
                        <input type='text' className='border-none focus:ring-transparent h-[24px] lg:px-2' />,
                        <Icon path={mdiMagnify} className='w-[25px] text-right pr-1' />
                      </div>

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
                          Energy
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
                          Fat
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
                          Carbohydrate
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
                          Protein
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
                          Cholesterol
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
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
                          All databases
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
                          My food groups
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
          <div>
            <div className='min-h-[54px] lg:mt-3 sm:mt-3 flex items-center p-[10px] bg-[#fff] border border-[#EEEEEE] text-[#888888] group hover:border-[#1AB394]'>
              <span className='w-[30px] text-center mr-[15px]'>
                <Icon path={mdiDatabasePlus} className='inline-block align-middle leading-none group-hover:text-[#1AB394]' />
              </span>
              <span>
                <h4 className='font-[400] m-0 text-[14px] leading-[1.1] group-hover:text-[#1AB394]'>Create a new food group</h4>
              </span>
            </div>
          </div>
        </div>
      </MainLayout>
      <ReactTooltip
        id="my-tooltip-1"
        place="top"
        content="How to use food lists"
        className='!p-[3px_8px] !bg-[#2f4050] opacity-[.9]'
      />
      <ReactTooltip
        id="my-tooltip-2"
        place="top"
        content="Create new list of equivalents"
        className='!p-[3px_12px] !bg-[#2f4050] opacity-[.9] !w-32 text-center !text-xs'
      />
      <ReactTooltip
        id="my-tooltip-3"
        place="top"
        content="How to use food lists"
        className='!p-[3px_8px] !bg-[#2f4050] opacity-[.9] !w-32 text-center !text-xs'
      />
      <ReactTooltip
        id="my-tooltip-4"
        place="top"
        content="Create a new food group"
        className='!p-[3px_8px] !bg-[#2f4050] opacity-[.9] !w-32 text-center !text-xs'
      />
    </>
  )
}
