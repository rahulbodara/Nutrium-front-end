import MainLayout from '@/components/Admin/MainLayout'
import React, { useState } from 'react'
import Icon from '@mdi/react'
import ClosableSelect from '@/components/Admin/common/ClosableSelect';
import { mdiDatabasePlus, mdiMagnify, mdiOpenInNew, mdiPlus, mdiSortDescending } from '@mdi/js';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Dialog } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

// import { useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import ReactPaginate from 'react-paginate';

// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// function Items({ currentItems }) {
//   return (
//     <>
//       {currentItems &&
//         currentItems.map((item) => (
//           <div>
//             <h3>Item #{item}</h3>
//           </div>
//         ))}
//     </>
//   );
// }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Recipes() {
  const [isNutriumChecked, setIsNutriumChecked] = useState(true);
  const [isCommunitychecked, setIsCommunitychecked] = useState(true);
  const [isMyRecipesChecked, setIsMyRecipesChecked] = useState(true);
  const [open, setOpen] = useState(false)


  const handleNutrimChange = (event, id) => {
    if (id === "1") {
      setIsNutriumChecked(event.target.checked)
    }
    else if (id === "2") {
      setIsCommunitychecked(event.target.checked)
    }
    else if (id === "3") {
      setIsMyRecipesChecked(event.target.checked)
    }
  }

  // function PaginatedItems({ itemsPerPage }) {
  //   // Here we use item offsets; we could also use page offsets
  //   // following the API or data you're working with.
  //   const [itemOffset, setItemOffset] = useState(0);

  //   // Simulate fetching items from another resources.
  //   // (This could be items from props; or items loaded in a local state
  //   // from an API endpoint with useEffect and useState)
  //   const endOffset = itemOffset + itemsPerPage;
  //   console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  //   const currentItems = items.slice(itemOffset, endOffset);
  //   const pageCount = Math.ceil(items.length / itemsPerPage);

  //   // Invoke when user click to request another page.
  //   const handlePageClick = (event) => {
  //     const newOffset = (event.selected * itemsPerPage) % items.length;
  //     console.log(
  //       `User requested page number ${event.selected}, which is offset ${newOffset}`
  //     );
  //     setItemOffset(newOffset);
  //   };

  const professionOptions = [
    {
      id: 1,
      name: 'Sort by Nutrient',
      value: 'Sort by Nutrient'
    },
    {
      id: 2,
      name: 'Energy',
      value: 'Energy'
    },
    {
      id: 3,
      name: 'Fat',
      value: 'Fat'
    },
    {
      id: 4,
      name: 'Protein',
      value: 'Protein'
    },
    {
      id: 5,
      name: 'Cholesterol',
      value: 'Cholesterol'
    },
    {
      id: 6,
      name: 'Fiber',
      value: 'Fiber'
    },
    {
      id: 7,
      name: 'Sodium',
      value: 'Sodium'
    },
    {
      id: 8,
      name: 'Water',
      value: 'Water'
    },
    {
      id: 9,
      name: 'Vitamin A',
      value: 'Vitamin A'
    },
    // {
    //   id: 10,
    //   name: 'Vitamin B-6',
    //   value: 'Vitamin B-6'
    // },
    // {
    //   id: 11,
    //   name: 'Vitamin B-12',
    //   value: 'Vitamin B-12'
    // },
    // {
    //   id: 12,
    //   name: 'Vitamin C',
    //   value: 'Vitamin C'
    // },
    // {
    //   id: 13,
    //   name: 'Vitamin D (D2 + D3)',
    //   value: 'Vitamin D (D2 + D3)'
    // },
    // {
    //   id: 14,
    //   name: 'Vitamin E',
    //   value: 'Vitamin E'
    // },
    // {
    //   id: 15,
    //   name: 'Vitamin K',
    //   value: 'Vitamin K'
    // },
    // {
    //   id: 16,
    //   name: 'Starch',
    //   value: 'Starch'
    // },
    // {
    //   id: 17,
    //   name: 'Lactose',
    //   value: 'Lactose'
    // },
    // {
    //   id: 18,
    //   name: 'Alcohol',
    //   value: 'Alcohol'
    // }
    // ,
    // {
    //   id: 19,
    //   name: 'Caffeine',
    //   value: 'Caffeine'
    // }
    // ,
    // {
    //   id: 20,
    //   name: 'Sugars',
    //   value: 'Sugars'
    // }

  ]

  return (
    <>

      <MainLayout head={"Food databases"} text={"Create, check and update foods that you can use on meal plans"}>
        {/* <Dropdown /> */}
        <div className=' border-1 pb-[125px]'>
          <div className='border p-6 mt-6 card-shadow mb-6 rounded-md bg-white'>
            <div className='flex items-center'>
              <div className='flex-grow'>
                <h4 className='text-[20px] leading-[1.1]'>Foods</h4>
                <div className='text-[12px] text-[#888888] opacity-[0.6]'>Search, consult and add new foods to the system</div>
              </div>
              <div className='flex items-center group cursor-pointer'>
                <a className=''>
                  <Icon path={mdiPlus} size="24px" />
                </a>
                <span className='hidden group-hover:block text-[#888888] text-[1.1em] ml-[5px]'>Create food</span>
              </div>
              <div>
              </div>
            </div>
            <div className='xl:flex-wrap flex mt-3 justify-between gap-2'>
              <div className='mb-[15px] xl:w-full w-4/6 sm:mb-0'>
                <input
                  type="text"
                  name="fullName"
                  className="block focus:ring-0 border-[1px] border-[#e5e6e7] py-[6px] w-full px-[12px] input-transition focus:border-[#1ab394] text-[13px] text-[#676a6c] focus:outline-none"
                  placeholder="Search food"
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
                  <Menu.Items className="absolute right-[-55px] sm:right-0 sm:w-full z-10 w-[17rem] origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>

                        <div className='flex border-b border-b-[#EEEEEE] justify-between'>
                          <input type='text' className='border-none focus:ring-transparent h-[24px]' />,
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
                            Energy
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
                  <Menu.Items className="absolute right-0 z-10 w-[15.8rem] sm:w-full origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
                            Community Recipes
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
                            Favorite Recipes
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
                            My Foods
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
            <div>
              <div onClick={() => setOpen(true)} className='mb-[10px] border border-[#EEEEEE] bg-[#FFF] flex group hover:border-[#1AB394] sm:mt-[10px]'>
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
                          <Dialog.Panel className="relative sm:rounded-none transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-[900px] lg:w-[600px]">
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
                                  Food information
                                </Dialog.Title>
                                <div className="mt-2 sm:text-center">
                                  <p className="text-sm text-gray-500">
                                    Check and update the information about the food
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="pb-5 px-[30px] lg:flex-wrap">
                              <div className='mx-[-15px]'>
                                <div className='w-[58.33%] float-left px-[15px] sm:float-none lg:w-full relative mb-2'>
                                  <div className='flex p-0 '>
                                    <div className='flex border border-[#EEEEEE] bg-[#FAFAFA] pt-[5px] pr-[10px] pb-[5px] pl-[10px] text-[1.1em] items-center z-[1] min-w-[145px]'>
                                      <label className='m-0 font-[400] inline-block max-w-full'>Name</label>
                                    </div>
                                    <div className='flex grow'>
                                      <div className='grow border-l-0 bg-[#EEEEEE] border border-[#EEEEEE] '>
                                        <div className='h-full self-center min-h-[38px] grow overflow-hidden text-ellipsis p-0'>
                                          <div className='m-0 h-full'>
                                            <input value="Butter, whipped, with salt" type='text' className='border-0 h-full bg-[#eee] opacity-100 rounded-[1px] block py-[6px] px-3 w-full' />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='w-[41.66%] float-left sm:float-none lg:w-full px-[15px] relative'>
                                  <div className='flex p-0 '>
                                    <div className='flex border border-[#EEEEEE] bg-[#FAFAFA] pt-[5px] pr-[10px] pb-[5px] pl-[10px] text-[1.1em] items-center z-[1] min-w-[145px]'>
                                      <label className='m-0 font-[400] inline-block max-w-full'>Source</label>
                                    </div>
                                    <div className='flex grow'>
                                      <div className='grow border-l-0 bg-[#EEEEEE] border border-[#EEEEEE] '>
                                        <div className='h-full self-center min-h-[38px] grow overflow-hidden text-ellipsis p-0'>
                                          <div className='m-0 h-full'>
                                            <input value="USDA, 2018" type='text' className='border-0 h-full bg-[#eee] opacity-100 rounded-[1px] block py-[6px] px-3 w-full' />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className='mx-[-15px]'>
                                <div className='w-[58.33%] float-left sm:float-none lg:w-full px-[15px] relative mb-2'>
                                  <div className='flex p-0 '>
                                    <div className='flex border border-[#EEEEEE] bg-[#FAFAFA] pt-[5px] pr-[10px] pb-[5px] pl-[10px] text-[1.1em] items-center z-[1] min-w-[145px]'>
                                      <label className='m-0 font-[400] inline-block max-w-full'>Group</label>
                                    </div>
                                    <div className='flex grow'>
                                      <div className='grow border-l-0 bg-[#EEEEEE] border border-[#EEEEEE] '>
                                        <div className='h-full self-center min-h-[38px] grow overflow-hidden text-ellipsis p-0'>
                                          <div className='m-0 h-full'>
                                            <input value="Dairy and Egg Products" type='text' className='border-0 h-full bg-[#eee] opacity-100 rounded-[1px] block py-[6px] px-3 w-full' />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='w-[41.66%] float-left sm:float-none lg:w-full px-[15px] relative'>
                                  <div className='flex p-0 '>
                                    <div className='flex border border-[#EEEEEE] bg-[#FAFAFA] pt-[5px] pr-[10px] pb-[5px] pl-[10px] text-[1.1em] items-center z-[1] min-w-[145px]'>
                                      <label className='m-0 font-[400] inline-block max-w-full'>Quantity</label>
                                    </div>
                                    <div className='flex grow'>
                                      <div className='grow border-l-0 bg-[#EEEEEE] border border-[#EEEEEE] '>
                                        <div className='border-l-0 grow-[3] ml-[-1px] flex p-0 min-w-0'>
                                          <div className='grow border-l-0 bg-[#EEEEEE] border border-[#EEEEEE]'>
                                            <input value="100" type='text' className='border-0 h-full bg-[#fff] opacity-100 rounded-[1px] block py-[6px] px-3 w-full' />
                                          </div>
                                          <div className='w-[150px] ml-0 border-l-0 grow-[3] items-center'>
                                            <Menu as="div" className="relative inline-block text-left">
                                              <div>
                                                <Menu.Button className="inline-flex w-full font-[300] justify-between text-[#555555] gap-x-[1.375rem] bg-white px-3 py-[9px] text-sm hover:bg-gray-50">
                                                  grams
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
                                                <Menu.Items className="absolute right-0 z-10 w-[15.8rem] sm:w-full origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
                                                          Community Recipes
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
                                                          Favorite Recipes
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
                                                          My Foods
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
                                    </div>
                                  </div>
                                </div>
                                <ul className='flex mt-[25px] w-full border-b-0'>
                                  <li className='grow-[5] ml-[15px] mt-[25px] bg-none border-0 table-cell w-[1%] float-none mb-[-1px] relative'>
                                    <a href='' className='text-[#1AB394] border-b-[#fff] border border-[#ddd] rounded-[4px_4px_0_0] mr-0 mb-0 text-center overflow-hidden whitespace-nowrap text-ellipsis font-[600] p-[10px_20px_10px_25px] relative block'>Nutritional value per 100 g</a>
                                  </li>
                                  <li className='grow-[5] mr-[15px] mt-[25px] bg-none border-0 table-cell w-[1%] float-none mb-[-1px] relative'>
                                    <a className='text-[#676A6C] border-b border-b-[#ddd] rounded-[4px_4px_0_0] mr-0 mb-0 text-center overflow-hidden whitespace-nowrap text-ellipsis font-[600] p-[10px_20px_10px_25px] leading-[1.42857143] border border-transparent relative block hover:border-[#eee]'>Common measures</a>
                                  </li>
                                </ul>
                                <div>
                                  <div className='block'>
                                    <div className='mb-[15px] mt-[25px] font-[100] text-center text-[1.6em]'>Macronutrients</div>
                                    <div className='mt-[-7px] flex gap-[15px] mb-2 mx-[15px] lg:flex-wrap lg:gap-0'>
                                      <div className='w-[50%] lg:w-full'>
                                        <div className='min-h-[52px] mt-[7px] flex p-0 min-w-0'>
                                          <div className='flex border border-[#EEEEEE] bg-[#FAFAFB] p-[5px_10px_5px_10px] text-[1.1em] items-center z-[1] min-w-[145px] max-w-[145px]'>Energy</div>
                                          <div className='flex grow'>
                                            <div className='grow border-l-0 bg-[#EEEEEE] border border-[#EEEEEE] relative flex p-0 min-w-0'>
                                              <div className='border-0 h-[100%] self-center min-h-[38px] grow overflow-hidden text-ellipsis !p-0'>
                                                <input value="5" type='hidden' className='text-[100%] m-0 p-0' />
                                                <div className='m-0 h-[100%]'>
                                                  <input value='731.0' type='number' className='border-0 h-[100%] bg-[#eee] opacity-[1] w-full' />
                                                </div>
                                              </div>
                                            </div>
                                            <div className='flex items-center p-[8px_5px] bg-[#FAFAFB] border border-[#EEEEEE] border-l-0'>
                                              <div className='min-w-[23px] text-center'>kcal</div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className='w-[50%] lg:w-full'>
                                        <div className='min-h-[52px] mt-[7px] flex p-0 min-w-0'>
                                          <div className='flex border border-[#EEEEEE] bg-[#FAFAFB] p-[5px_10px_5px_10px] text-[1.1em] items-center z-[1] min-w-[145px] max-w-[145px]'>Fat</div>
                                          <div className='flex grow'>
                                            <div className='grow border-l-0 bg-[#EEEEEE] border border-[#EEEEEE] relative flex p-0 min-w-0'>
                                              <div className='border-0 h-[100%] self-center min-h-[38px] grow overflow-hidden text-ellipsis !p-0'>
                                                <input value="5" type='hidden' className='text-[100%] m-0 p-0' />
                                                <div className='m-0 h-[100%]'>
                                                  <input value='78.3' type='number' className='border-0 h-[100%] bg-[#eee] opacity-[1] w-full' />
                                                </div>
                                              </div>
                                            </div>
                                            <div className='flex items-center p-[8px_5px] bg-[#FAFAFB] border border-[#EEEEEE] border-l-0'>
                                              <div className='min-w-[23px] text-center'>g</div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className='mt-[-7px] flex gap-[15px] mx-[15px] lg:flex-wrap lg:gap-0'>
                                      <div className='w-[50%] lg:w-full'>
                                        <div className='min-h-[52px] mt-[7px] flex p-0 min-w-0'>
                                          <div className='flex border border-[#EEEEEE] bg-[#FAFAFB] p-[5px_10px_5px_10px] text-[1.1em] items-center z-[1] min-w-[145px] max-w-[145px]'>Carbohydrate</div>
                                          <div className='flex grow'>
                                            <div className='grow border-l-0 bg-[#EEEEEE] border border-[#EEEEEE] relative flex p-0 min-w-0'>
                                              <div className='border-0 h-[100%] self-center min-h-[38px] grow overflow-hidden text-ellipsis !p-0'>
                                                <input value="5" type='hidden' className='text-[100%] m-0 p-0' />
                                                <div className='m-0 h-[100%]'>
                                                  <input value='0.06' type='number' className='border-0 h-[100%] bg-[#eee] opacity-[1] w-full' />
                                                </div>
                                              </div>
                                            </div>
                                            <div className='flex items-center p-[8px_5px] bg-[#FAFAFB] border border-[#EEEEEE] border-l-0'>
                                              <div className='min-w-[23px] text-center'>g</div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className='w-[50%] lg:w-full'>
                                        <div className='min-h-[52px] mt-[7px] flex p-0 min-w-0'>
                                          <div className='flex border border-[#EEEEEE] bg-[#FAFAFB] p-[5px_10px_5px_10px] text-[1.1em] items-center z-[1] min-w-[145px] max-w-[145px]'>Protein</div>
                                          <div className='flex grow'>
                                            <div className='grow border-l-0 bg-[#EEEEEE] border border-[#EEEEEE] relative flex p-0 min-w-0'>
                                              <div className='border-0 h-[100%] self-center min-h-[38px] grow overflow-hidden text-ellipsis !p-0'>
                                                <input value="5" type='hidden' className='text-[100%] m-0 p-0' />
                                                <div className='m-0 h-[100%]'>
                                                  <input value='0.49' type='number' className='border-0 h-[100%] bg-[#eee] opacity-[1] w-full' />
                                                </div>
                                              </div>
                                            </div>
                                            <div className='flex items-center p-[8px_5px] bg-[#FAFAFB] border border-[#EEEEEE] border-l-0'>
                                              <div className='min-w-[23px] text-center'>g</div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className='mb-[15px] mt-[25px] font-[100] text-center text-[1.6em]'>Micronutrients</div>
                                    <div className='mt-[-7px] flex gap-[15px] lg:gap-0 mx-[15px] mb-2 lg:flex-wrap'>
                                      <div className='w-[33.33%] lg:w-full'>
                                        <div className='min-h-[52px] mt-[7px] flex p-0 min-w-0'>
                                          <div className='flex border border-[#EEEEEE] bg-[#FAFAFB] p-[5px_10px_5px_10px] text-[1.1em] items-center z-[1] min-w-[145px] max-w-[145px]'>Cholesterol</div>
                                          <div className='flex grow'>
                                            <div className='grow border-l-0bg-[#EEEEEE] border border-[#EEEEEE] relative flex p-0 min-w-0'>
                                              <div className='border-0 h-full self-center min-h-[38px] grow overflow-hidden text-ellipsis !p-0'>
                                                <input value='89' type='hidden' className='text-[100%] m-0 p-0' />
                                                <div className='m-0 h-[100%]'>
                                                  <input value='225.0' type='number' className='border-0 h-full bg-[#eee] opacity-[1] w-full' />
                                                </div>
                                              </div>
                                            </div>
                                            <div className='flex items-center p-[8px_5px] bg-[#FAFAFB] border border-[#EEEEEE] border-l-0'>
                                              <div className='min-w-[23px] text-center'>mg</div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className='w-[33.33%] lg:w-full'>
                                        <div className='min-h-[52px] mt-[7px] flex p-0 min-w-0'>
                                          <div className='flex border border-[#EEEEEE] bg-[#FAFAFB] p-[5px_10px_5px_10px] text-[1.1em] items-center z-[1] min-w-[145px] max-w-[145px]'>Fiber</div>
                                          <div className='flex grow'>
                                            <div className='grow border-l-0bg-[#EEEEEE] border border-[#EEEEEE] relative flex p-0 min-w-0'>
                                              <div className='border-0 h-full self-center min-h-[38px] grow overflow-hidden text-ellipsis !p-0'>
                                                <input value='89' type='hidden' className='text-[100%] m-0 p-0' />
                                                <div className='m-0 h-[100%]'>
                                                  <input value='0.0' type='number' className='border-0 h-full bg-[#eee] opacity-[1] w-full' />
                                                </div>
                                              </div>
                                            </div>
                                            <div className='flex items-center p-[8px_5px] bg-[#FAFAFB] border border-[#EEEEEE] border-l-0'>
                                              <div className='min-w-[23px] text-center'>g</div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className='w-[33.33%] lg:w-full'>
                                        <div className='min-h-[52px] mt-[7px] flex p-0 min-w-0'>
                                          <div className='flex border border-[#EEEEEE] bg-[#FAFAFB] p-[5px_10px_5px_10px] text-[1.1em] items-center z-[1] min-w-[145px] max-w-[145px]'>Sodium</div>
                                          <div className='flex grow'>
                                            <div className='grow border-l-0bg-[#EEEEEE] border border-[#EEEEEE] relative flex p-0 min-w-0'>
                                              <div className='border-0 h-full self-center min-h-[38px] grow overflow-hidden text-ellipsis !p-0'>
                                                <input value='89' type='hidden' className='text-[100%] m-0 p-0' />
                                                <div className='m-0 h-[100%]'>
                                                  <input value='583.0' type='number' className='border-0 h-full bg-[#eee] opacity-[1] w-full' />
                                                </div>
                                              </div>
                                            </div>
                                            <div className='flex items-center p-[8px_5px] bg-[#FAFAFB] border border-[#EEEEEE] border-l-0'>
                                              <div className='min-w-[23px] text-center'>mg</div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className='mt-[-7px] flex gap-[15px] lg:gap-0 mx-[15px] mb-2 lg:flex-wrap'>
                                      <div className='w-[33.33%] lg:w-full'>
                                        <div className='min-h-[52px] mt-[7px] flex p-0 min-w-0'>
                                          <div className='flex border border-[#EEEEEE] bg-[#FAFAFB] p-[5px_10px_5px_10px] text-[1.1em] items-center z-[1] min-w-[145px] max-w-[145px]'>Water</div>
                                          <div className='flex grow'>
                                            <div className='grow border-l-0bg-[#EEEEEE] border border-[#EEEEEE] relative flex p-0 min-w-0'>
                                              <div className='border-0 h-full self-center min-h-[38px] grow overflow-hidden text-ellipsis !p-0'>
                                                <input value='89' type='hidden' className='text-[100%] m-0 p-0' />
                                                <div className='m-0 h-[100%]'>
                                                  <input value='16.72' type='number' className='border-0 h-full bg-[#eee] opacity-[1] w-full' />
                                                </div>
                                              </div>
                                            </div>
                                            <div className='flex items-center p-[8px_5px] bg-[#FAFAFB] border border-[#EEEEEE] border-l-0'>
                                              <div className='min-w-[23px] text-center'>g</div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className='w-[33.33%] lg:w-full'>
                                        <div className='min-h-[52px] mt-[7px] flex p-0 min-w-0'>
                                          <div className='flex border border-[#EEEEEE] bg-[#FAFAFB] p-[5px_10px_5px_10px] text-[1.1em] items-center z-[1] min-w-[145px] max-w-[145px]'>Vitamin A</div>
                                          <div className='flex grow'>
                                            <div className='grow border-l-0bg-[#EEEEEE] border border-[#EEEEEE] relative flex p-0 min-w-0'>
                                              <div className='border-0 h-full self-center min-h-[38px] grow overflow-hidden text-ellipsis !p-0'>
                                                <input value='89' type='hidden' className='text-[100%] m-0 p-0' />
                                                <div className='m-0 h-[100%]'>
                                                  <input value='683.0' type='number' className='border-0 h-full bg-[#eee] opacity-[1] w-full' />
                                                </div>
                                              </div>
                                            </div>
                                            <div className='flex items-center p-[8px_5px] bg-[#FAFAFB] border border-[#EEEEEE] border-l-0'>
                                              <div className='min-w-[23px] text-center'>ug</div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className='w-[33.33%] lg:w-full'>
                                        <div className='min-h-[52px] mt-[7px] flex p-0 min-w-0'>
                                          <div className='flex border border-[#EEEEEE] bg-[#FAFAFB] p-[5px_10px_5px_10px] text-[1.1em] items-center z-[1] min-w-[145px] max-w-[145px]'>Vitamin B-6</div>
                                          <div className='flex grow'>
                                            <div className='grow border-l-0bg-[#EEEEEE] border border-[#EEEEEE] relative flex p-0 min-w-0'>
                                              <div className='border-0 h-full self-center min-h-[38px] grow overflow-hidden text-ellipsis !p-0'>
                                                <input value='89' type='hidden' className='text-[100%] m-0 p-0' />
                                                <div className='m-0 h-[100%]'>
                                                  <input value='0.008' type='number' className='border-0 h-full bg-[#eee] opacity-[1] w-full' />
                                                </div>
                                              </div>
                                            </div>
                                            <div className='flex items-center p-[8px_5px] bg-[#FAFAFB] border border-[#EEEEEE] border-l-0'>
                                              <div className='min-w-[23px] text-center'>mg</div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className='mt-[-7px] flex gap-[15px] lg:gap-0 mx-[15px] mb-2 lg:flex-wrap'>
                                      <div className='w-[33.33%] lg:w-full'>
                                        <div className='min-h-[52px] mt-[7px] flex p-0 min-w-0'>
                                          <div className='flex border border-[#EEEEEE] bg-[#FAFAFB] p-[5px_10px_5px_10px] text-[1.1em] items-center z-[1] min-w-[145px] max-w-[145px]'>Vitamin B-12</div>
                                          <div className='flex grow'>
                                            <div className='grow border-l-0bg-[#EEEEEE] border border-[#EEEEEE] relative flex p-0 min-w-0'>
                                              <div className='border-0 h-full self-center min-h-[38px] grow overflow-hidden text-ellipsis !p-0'>
                                                <input value='89' type='hidden' className='text-[100%] m-0 p-0' />
                                                <div className='m-0 h-[100%]'>
                                                  <input value='0.07' type='number' className='border-0 h-full bg-[#eee] opacity-[1] w-full' />
                                                </div>
                                              </div>
                                            </div>
                                            <div className='flex items-center p-[8px_5px] bg-[#FAFAFB] border border-[#EEEEEE] border-l-0'>
                                              <div className='min-w-[23px] text-center'>ug</div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className='w-[33.33%] lg:w-full'>
                                        <div className='min-h-[52px] mt-[7px] flex p-0 min-w-0'>
                                          <div className='flex border border-[#EEEEEE] bg-[#FAFAFB] p-[5px_10px_5px_10px] text-[1.1em] items-center z-[1] min-w-[145px] max-w-[145px]'>Vitamin C</div>
                                          <div className='flex grow'>
                                            <div className='grow border-l-0bg-[#EEEEEE] border border-[#EEEEEE] relative flex p-0 min-w-0'>
                                              <div className='border-0 h-full self-center min-h-[38px] grow overflow-hidden text-ellipsis !p-0'>
                                                <input value='89' type='hidden' className='text-[100%] m-0 p-0' />
                                                <div className='m-0 h-[100%]'>
                                                  <input value='0.0' type='number' className='border-0 h-full bg-[#eee] opacity-[1] w-full' />
                                                </div>
                                              </div>
                                            </div>
                                            <div className='flex items-center p-[8px_5px] bg-[#FAFAFB] border border-[#EEEEEE] border-l-0'>
                                              <div className='min-w-[23px] text-center'>mg</div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className='w-[33.33%] lg:w-full'>
                                        <div className='min-h-[52px] mt-[7px] flex p-0 min-w-0'>
                                          <div className='flex border border-[#EEEEEE] bg-[#FAFAFB] p-[5px_10px_5px_10px] text-[1.1em] items-center z-[1] min-w-[145px] max-w-[145px]'>Vitamin D (D2 + D3)</div>
                                          <div className='flex grow'>
                                            <div className='grow border-l-0bg-[#EEEEEE] border border-[#EEEEEE] relative flex p-0 min-w-0'>
                                              <div className='border-0 h-full self-center min-h-[38px] grow overflow-hidden text-ellipsis !p-0'>
                                                <input value='89' type='hidden' className='text-[100%] m-0 p-0' />
                                                <div className='m-0 h-[100%]'>
                                                  <input value='0.0' type='number' className='border-0 h-full bg-[#eee] opacity-[1] w-full' />
                                                </div>
                                              </div>
                                            </div>
                                            <div className='flex items-center p-[8px_5px] bg-[#FAFAFB] border border-[#EEEEEE] border-l-0'>
                                              <div className='min-w-[23px] text-center'>ug</div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className='mt-[-7px] flex gap-[15px] lg:gap-0 mx-[15px] mb-2 lg:flex-wrap'>
                                      <div className='w-[33.33%] lg:w-full'>
                                        <div className='min-h-[52px] mt-[7px] flex p-0 min-w-0'>
                                          <div className='flex border border-[#EEEEEE] bg-[#FAFAFB] p-[5px_10px_5px_10px] text-[1.1em] items-center z-[1] min-w-[145px] max-w-[145px]'>Cholesterol</div>
                                          <div className='flex grow'>
                                            <div className='grow border-l-0bg-[#EEEEEE] border border-[#EEEEEE] relative flex p-0 min-w-0'>
                                              <div className='border-0 h-full self-center min-h-[38px] grow overflow-hidden text-ellipsis !p-0'>
                                                <input value='89' type='hidden' className='text-[100%] m-0 p-0' />
                                                <div className='m-0 h-[100%]'>
                                                  <input value='225.0' type='number' className='border-0 h-full bg-[#eee] opacity-[1] w-full' />
                                                </div>
                                              </div>
                                            </div>
                                            <div className='flex items-center p-[8px_5px] bg-[#FAFAFB] border border-[#EEEEEE] border-l-0'>
                                              <div className='min-w-[23px] text-center'>mg</div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className='w-[33.33%] lg:w-full'>
                                        <div className='min-h-[52px] mt-[7px] flex p-0 min-w-0'>
                                          <div className='flex border border-[#EEEEEE] bg-[#FAFAFB] p-[5px_10px_5px_10px] text-[1.1em] items-center z-[1] min-w-[145px] max-w-[145px]'>Cholesterol</div>
                                          <div className='flex grow'>
                                            <div className='grow border-l-0bg-[#EEEEEE] border border-[#EEEEEE] relative flex p-0 min-w-0'>
                                              <div className='border-0 h-full self-center min-h-[38px] grow overflow-hidden text-ellipsis !p-0'>
                                                <input value='89' type='hidden' className='text-[100%] m-0 p-0' />
                                                <div className='m-0 h-[100%]'>
                                                  <input value='225.0' type='number' className='border-0 h-full bg-[#eee] opacity-[1] w-full' />
                                                </div>
                                              </div>
                                            </div>
                                            <div className='flex items-center p-[8px_5px] bg-[#FAFAFB] border border-[#EEEEEE] border-l-0'>
                                              <div className='min-w-[23px] text-center'>mg</div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className='w-[33.33%] lg:w-full'>
                                        <div className='min-h-[52px] mt-[7px] flex p-0 min-w-0'>
                                          <div className='flex border border-[#EEEEEE] bg-[#FAFAFB] p-[5px_10px_5px_10px] text-[1.1em] items-center z-[1] min-w-[145px] max-w-[145px]'>Cholesterol</div>
                                          <div className='flex grow'>
                                            <div className='grow border-l-0bg-[#EEEEEE] border border-[#EEEEEE] relative flex p-0 min-w-0'>
                                              <div className='border-0 h-full self-center min-h-[38px] grow overflow-hidden text-ellipsis !p-0'>
                                                <input value='89' type='hidden' className='text-[100%] m-0 p-0' />
                                                <div className='m-0 h-[100%]'>
                                                  <input value='225.0' type='number' className='border-0 h-full bg-[#eee] opacity-[1] w-full' />
                                                </div>
                                              </div>
                                            </div>
                                            <div className='flex items-center p-[8px_5px] bg-[#FAFAFB] border border-[#EEEEEE] border-l-0'>
                                              <div className='min-w-[23px] text-center'>mg</div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className='mt-[-7px] flex gap-[15px] lg:gap-0 mx-[15px] mb-2 lg:flex-wrap'>
                                      <div className='w-[33.33%] lg:w-full'>
                                        <div className='min-h-[52px] mt-[7px] flex p-0 min-w-0'>
                                          <div className='flex border border-[#EEEEEE] bg-[#FAFAFB] p-[5px_10px_5px_10px] text-[1.1em] items-center z-[1] min-w-[145px] max-w-[145px]'>Cholesterol</div>
                                          <div className='flex grow'>
                                            <div className='grow border-l-0bg-[#EEEEEE] border border-[#EEEEEE] relative flex p-0 min-w-0'>
                                              <div className='border-0 h-full self-center min-h-[38px] grow overflow-hidden text-ellipsis !p-0'>
                                                <input value='89' type='hidden' className='text-[100%] m-0 p-0' />
                                                <div className='m-0 h-[100%]'>
                                                  <input value='225.0' type='number' className='border-0 h-full bg-[#eee] opacity-[1] w-full' />
                                                </div>
                                              </div>
                                            </div>
                                            <div className='flex items-center p-[8px_5px] bg-[#FAFAFB] border border-[#EEEEEE] border-l-0'>
                                              <div className='min-w-[23px] text-center'>mg</div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className='w-[33.33%] lg:w-full'>
                                        <div className='min-h-[52px] mt-[7px] flex p-0 min-w-0'>
                                          <div className='flex border border-[#EEEEEE] bg-[#FAFAFB] p-[5px_10px_5px_10px] text-[1.1em] items-center z-[1] min-w-[145px] max-w-[145px]'>Cholesterol</div>
                                          <div className='flex grow'>
                                            <div className='grow border-l-0bg-[#EEEEEE] border border-[#EEEEEE] relative flex p-0 min-w-0'>
                                              <div className='border-0 h-full self-center min-h-[38px] grow overflow-hidden text-ellipsis !p-0'>
                                                <input value='89' type='hidden' className='text-[100%] m-0 p-0' />
                                                <div className='m-0 h-[100%]'>
                                                  <input value='225.0' type='number' className='border-0 h-full bg-[#eee] opacity-[1] w-full' />
                                                </div>
                                              </div>
                                            </div>
                                            <div className='flex items-center p-[8px_5px] bg-[#FAFAFB] border border-[#EEEEEE] border-l-0'>
                                              <div className='min-w-[23px] text-center'>mg</div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className='w-[33.33%] lg:w-full'>
                                        <div className='min-h-[52px] mt-[7px] flex p-0 min-w-0'>
                                          <div className='flex border border-[#EEEEEE] bg-[#FAFAFB] p-[5px_10px_5px_10px] text-[1.1em] items-center z-[1] min-w-[145px] max-w-[145px]'>Cholesterol</div>
                                          <div className='flex grow'>
                                            <div className='grow border-l-0bg-[#EEEEEE] border border-[#EEEEEE] relative flex p-0 min-w-0'>
                                              <div className='border-0 h-full self-center min-h-[38px] grow overflow-hidden text-ellipsis !p-0'>
                                                <input value='89' type='hidden' className='text-[100%] m-0 p-0' />
                                                <div className='m-0 h-[100%]'>
                                                  <input value='225.0' type='number' className='border-0 h-full bg-[#eee] opacity-[1] w-full' />
                                                </div>
                                              </div>
                                            </div>
                                            <div className='flex items-center p-[8px_5px] bg-[#FAFAFB] border border-[#EEEEEE] border-l-0'>
                                              <div className='min-w-[23px] text-center'>mg</div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className='mt-[-7px] flex gap-[15px] lg:gap-0 mx-[15px] mb-2 lg:flex-wrap'>
                                      <div className='w-[33.33%] lg:w-full'>
                                        <div className='min-h-[52px] mt-[7px] flex p-0 min-w-0'>
                                          <div className='flex border border-[#EEEEEE] bg-[#FAFAFB] p-[5px_10px_5px_10px] text-[1.1em] items-center z-[1] min-w-[145px] max-w-[145px]'>Cholesterol</div>
                                          <div className='flex grow'>
                                            <div className='grow border-l-0bg-[#EEEEEE] border border-[#EEEEEE] relative flex p-0 min-w-0'>
                                              <div className='border-0 h-full self-center min-h-[38px] grow overflow-hidden text-ellipsis !p-0'>
                                                <input value='89' type='hidden' className='text-[100%] m-0 p-0' />
                                                <div className='m-0 h-[100%]'>
                                                  <input value='225.0' type='number' className='border-0 h-full bg-[#eee] opacity-[1] w-full' />
                                                </div>
                                              </div>
                                            </div>
                                            <div className='flex items-center p-[8px_5px] bg-[#FAFAFB] border border-[#EEEEEE] border-l-0'>
                                              <div className='min-w-[23px] text-center'>mg</div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className='w-[33.33%] lg:w-full'>
                                        <div className='min-h-[52px] mt-[7px] flex p-0 min-w-0'>
                                          <div className='flex border border-[#EEEEEE] bg-[#FAFAFB] p-[5px_10px_5px_10px] text-[1.1em] items-center z-[1] min-w-[145px] max-w-[145px]'>Cholesterol</div>
                                          <div className='flex grow'>
                                            <div className='grow border-l-0bg-[#EEEEEE] border border-[#EEEEEE] relative flex p-0 min-w-0'>
                                              <div className='border-0 h-full self-center min-h-[38px] grow overflow-hidden text-ellipsis !p-0'>
                                                <input value='89' type='hidden' className='text-[100%] m-0 p-0' />
                                                <div className='m-0 h-[100%]'>
                                                  <input value='225.0' type='number' className='border-0 h-full bg-[#eee] opacity-[1] w-full' />
                                                </div>
                                              </div>
                                            </div>
                                            <div className='flex items-center p-[8px_5px] bg-[#FAFAFB] border border-[#EEEEEE] border-l-0'>
                                              <div className='min-w-[23px] text-center'>mg</div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className='w-[33.33%] lg:w-full'>
                                        <div className='min-h-[52px] mt-[7px] flex p-0 min-w-0'>
                                          <div className='flex border border-[#EEEEEE] bg-[#FAFAFB] p-[5px_10px_5px_10px] text-[1.1em] items-center z-[1] min-w-[145px] max-w-[145px]'>Cholesterol</div>
                                          <div className='flex grow'>
                                            <div className='grow border-l-0bg-[#EEEEEE] border border-[#EEEEEE] relative flex p-0 min-w-0'>
                                              <div className='border-0 h-full self-center min-h-[38px] grow overflow-hidden text-ellipsis !p-0'>
                                                <input value='89' type='hidden' className='text-[100%] m-0 p-0' />
                                                <div className='m-0 h-[100%]'>
                                                  <input value='225.0' type='number' className='border-0 h-full bg-[#eee] opacity-[1] w-full' />
                                                </div>
                                              </div>
                                            </div>
                                            <div className='flex items-center p-[8px_5px] bg-[#FAFAFB] border border-[#EEEEEE] border-l-0'>
                                              <div className='min-w-[23px] text-center'>mg</div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='mx-[15px] hidden lg:block'>
                                  <div>
                                    <div className='flex gap-[15px] lg:gap-0 lg:flex-wrap'>
                                      <div className='w-[50%] lg:w-full'>
                                        <input value='3200' type='hidden' className='text-[100%] m-0 p-0' />
                                        <div className='mt-[25px] flex p-0 min-w-0'>
                                          <div className='grow'>
                                            <div className='flex p-0 min-w-0'>
                                              <div className='min-w-[160px] flex border border-[#EEEEEE] bg-[#FAFAFB] p-[5px_10px_5px_10px] text-[1.1em] items-center z-[1]'>
                                                <label className='m-0 font-[400] inline-block mac-w-full'>Singular name</label>
                                              </div>
                                              <div className='border-l-0 grow-[3] bg-[#EEEEEE] border border-[#EEEEEE] relative flex p-0 min-w-0'>
                                                <div className='border-0 h-full self-center min-h-[38px] grow overflow-hidden text-ellipsis !p-0'>
                                                  <div className='m-0 h-full'>
                                                    <input value='pat (1&quot; sq, 1/3&quot; high)' type='text' className='border-0 h-full bg-[#eee] opacity-[1]' />
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className='flex p-0 min-w-0'>
                                              <div className='min-w-[160px] flex border border-[#EEEEEE] bg-[#FAFAFB] p-[5px_10px_5px_10px] text-[1.1em] items-center z-[1]'>
                                                <label className='m-0 font-[400] inline-block mac-w-full'>Plural name</label>
                                              </div>
                                              <div className='border-l-0 grow-[3] bg-[#EEEEEE] border border-[#EEEEEE] relative flex p-0 min-w-0'>
                                                <div className='border-0 h-full self-center min-h-[38px] grow overflow-hidden text-ellipsis !p-0'>
                                                  <div className='m-0 h-full'>
                                                    <input value='pat (1&quot; sq, 1/3&quot; high)' type='text' className='border-0 h-full bg-[#eee] opacity-[1]' />
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className='flex p-0 min-w-0'>
                                              <div className='min-w-[160px] flex border border-[#EEEEEE] bg-[#FAFAFB] p-[5px_10px_5px_10px] text-[1.1em] items-center z-[1]'>
                                                <label className='m-0 font-[400] inline-block mac-w-full'>Quantity</label>
                                              </div>
                                              <div className='border-l-0 grow-[3] bg-[#EEEEEE] border border-[#EEEEEE] relative flex p-0 min-w-0'>
                                                <div className='border-0 h-full self-center min-h-[38px] grow overflow-hidden text-ellipsis !p-0'>
                                                  <div className='m-0 h-full'>
                                                    <input value='1.0' type='text' className='border-0 h-full bg-[#eee] opacity-[1]' />
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className='flex p-0 min-w-0'>
                                              <div className='min-w-[160px] flex border border-[#EEEEEE] bg-[#FAFAFB] p-[5px_10px_5px_10px] text-[1.1em] items-center z-[1]'>
                                                <label className='m-0 font-[400] inline-block mac-w-full'>Total grams</label>
                                              </div>
                                              <div className='border-l-0 grow-[3] bg-[#EEEEEE] border border-[#EEEEEE] relative flex p-0 min-w-0'>
                                                <div className='border-0 h-full self-center min-h-[38px] grow overflow-hidden text-ellipsis !p-0'>
                                                  <div className='m-0 h-full'>
                                                    <input value='3.8' type='text' className='border-0 h-full bg-[#eee] opacity-[1]' />
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className='flex p-0 min-w-0'>
                                              <div className='min-w-[160px] flex border border-[#EEEEEE] bg-[#FAFAFB] p-[5px_10px_5px_10px] text-[1.1em] items-center z-[1]'>
                                                <label className='m-0 font-[400] inline-block mac-w-full'>Edible portion (%)</label>
                                              </div>
                                              <div className='border-l-0 grow-[3] bg-[#EEEEEE] border border-[#EEEEEE] relative flex p-0 min-w-0'>
                                                <div className='border-0 h-full self-center min-h-[38px] grow overflow-hidden text-ellipsis !p-0'>
                                                  <div className='m-0 h-full'>
                                                    <input value='' type='text' className='border-0 h-full bg-[#eee] opacity-[1]' />
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className='w-[50%] lg:w-full'>
                                        <input value='3200' type='hidden' className='text-[100%] m-0 p-0' />
                                        <div className='mt-[25px] flex p-0 min-w-0'>
                                          <div className='grow'>
                                            <div className='flex p-0 min-w-0'>
                                              <div className='min-w-[160px] flex border border-[#EEEEEE] bg-[#FAFAFB] p-[5px_10px_5px_10px] text-[1.1em] items-center z-[1]'>
                                                <label className='m-0 font-[400] inline-block mac-w-full'>Singular name</label>
                                              </div>
                                              <div className='border-l-0 grow-[3] bg-[#EEEEEE] border border-[#EEEEEE] relative flex p-0 min-w-0'>
                                                <div className='border-0 h-full self-center min-h-[38px] grow overflow-hidden text-ellipsis !p-0'>
                                                  <div className='m-0 h-full'>
                                                    <input value='pat (1&quot; sq, 1/3&quot; high)' type='text' className='border-0 h-full bg-[#eee] opacity-[1]' />
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className='flex p-0 min-w-0'>
                                              <div className='min-w-[160px] flex border border-[#EEEEEE] bg-[#FAFAFB] p-[5px_10px_5px_10px] text-[1.1em] items-center z-[1]'>
                                                <label className='m-0 font-[400] inline-block mac-w-full'>Plural name</label>
                                              </div>
                                              <div className='border-l-0 grow-[3] bg-[#EEEEEE] border border-[#EEEEEE] relative flex p-0 min-w-0'>
                                                <div className='border-0 h-full self-center min-h-[38px] grow overflow-hidden text-ellipsis !p-0'>
                                                  <div className='m-0 h-full'>
                                                    <input value='pat (1&quot; sq, 1/3&quot; high)' type='text' className='border-0 h-full bg-[#eee] opacity-[1]' />
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className='flex p-0 min-w-0'>
                                              <div className='min-w-[160px] flex border border-[#EEEEEE] bg-[#FAFAFB] p-[5px_10px_5px_10px] text-[1.1em] items-center z-[1]'>
                                                <label className='m-0 font-[400] inline-block mac-w-full'>Quantity</label>
                                              </div>
                                              <div className='border-l-0 grow-[3] bg-[#EEEEEE] border border-[#EEEEEE] relative flex p-0 min-w-0'>
                                                <div className='border-0 h-full self-center min-h-[38px] grow overflow-hidden text-ellipsis !p-0'>
                                                  <div className='m-0 h-full'>
                                                    <input value='1.0' type='text' className='border-0 h-full bg-[#eee] opacity-[1]' />
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className='flex p-0 min-w-0'>
                                              <div className='min-w-[160px] flex border border-[#EEEEEE] bg-[#FAFAFB] p-[5px_10px_5px_10px] text-[1.1em] items-center z-[1]'>
                                                <label className='m-0 font-[400] inline-block mac-w-full'>Total grams</label>
                                              </div>
                                              <div className='border-l-0 grow-[3] bg-[#EEEEEE] border border-[#EEEEEE] relative flex p-0 min-w-0'>
                                                <div className='border-0 h-full self-center min-h-[38px] grow overflow-hidden text-ellipsis !p-0'>
                                                  <div className='m-0 h-full'>
                                                    <input value='3.8' type='text' className='border-0 h-full bg-[#eee] opacity-[1]' />
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className='flex p-0 min-w-0'>
                                              <div className='min-w-[160px] flex border border-[#EEEEEE] bg-[#FAFAFB] p-[5px_10px_5px_10px] text-[1.1em] items-center z-[1]'>
                                                <label className='m-0 font-[400] inline-block mac-w-full'>Edible portion (%)</label>
                                              </div>
                                              <div className='border-l-0 grow-[3] bg-[#EEEEEE] border border-[#EEEEEE] relative flex p-0 min-w-0'>
                                                <div className='border-0 h-full self-center min-h-[38px] grow overflow-hidden text-ellipsis !p-0'>
                                                  <div className='m-0 h-full'>
                                                    <input value='' type='text' className='border-0 h-full bg-[#eee] opacity-[1]' />
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
                              </div>
                            </div>
                            <div className='p-[0_30px_15px] border-0 mt-0 text-center flex justify-between'>
                              <button type='button' className='bg-[#FFFFFF] border border-[#EEEEEE] rounded-[3px] inline-block mb-0 font-[400] text-center whitespace-nowrap align-middle p-[6px_12px] text-[14px] leading-[1.42857143] '>Duplicate to edit</button>
                              <button type='button' className='ml-[5px] bg-[#FFFFFF] border border-[#EEEEEE] rounded-[3px] inline-block mb-0 font-[400] text-center whitespace-nowrap align-middle p-[6px_12px] text-[14px] leading-[1.42857143]'>Cancel</button>
                            </div>
                          </Dialog.Panel>
                        </Transition.Child>
                      </div>
                    </div>
                  </Dialog>
                </Transition.Root>
                <div className='flex grow pr-[10px] items-center'>
                  <div className='shrink grow-[2] flex-col flex items-start overflow-hidden p-[10px] sm:basis-0'>
                    <div className='text-[14px]'>Butter, whipped, with salt</div>
                    <div className='font-[300] text-[1em] max-w-[100%] overflow-hidden text-ellipsis whitespace-nowrap'>USDA, 2018</div>
                  </div>
                  <div className='p-0 grow flex items-center basis-[135px] sm:flex-wrap '>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px] lg:flex'>
                          731
                          <div className='inline-flex text-[1em] ml-[3px]'>kcal</div>
                        </div>
                      </div>
                      <div className='font-[300] text-[1em]'>Energy</div>
                    </div>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px] lg:flex'>
                          78
                          <div className='inline-flex text-[1em] ml-[3px]'>g</div>
                        </div>
                      </div>
                      <div className='font-[300] text-[1em]'>Fat</div>
                    </div>
                    <div className='grow text-center p-[5px] '>
                      <div>
                        <div className='text-[14px] lg:flex lg:justify-center'>
                          0
                          <div className='inline-flex text-[1em] ml-[3px]'>g</div>
                        </div>
                      </div>
                      <div className='font-[300] text-[1em]'>Carbohydrate</div>
                    </div>
                    <div className='grow text-center p-[5px] '>
                      <div>
                        <div className='text-[14px] lg:flex lg:justify-center'>
                          0
                          <div className='inline-flex text-[1em] ml-[3px]'>g</div>
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
              <div className='mb-[10px] border border-[#EEEEEE] bg-[#FFF] flex group hover:border-[#1AB394]'>
                <div className='flex grow pr-[10px] items-center'>
                  <div className='shrink grow-[2] flex-col items-start flex overflow-hidden p-[10px] sm:basis-0'>
                    <div className='text-[14px]'>Butter, whipped, with salt</div>
                    <div className='font-[300] text-[1em] max-w-[100%] overflow-hidden text-ellipsis whitespace-nowrap'>USDA, 2018</div>
                  </div>
                  <div className='p-0 grow flex items-center basis-[135px] sm:flex-wrap'>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px] lg:flex'>
                          731
                          <div className='inline-flex text-[1em] ml-[3px]'>kcal</div>
                        </div>
                      </div>
                      <div className='font-[300] text-[1em]'>Energy</div>
                    </div>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px] lg:flex'>
                          78
                          <div className='inline-flex text-[1em] ml-[3px]'>g</div>
                        </div>
                      </div>
                      <div className='font-[300] text-[1em] '>Fat</div>
                    </div>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px] lg:flex lg:justify-center'>
                          0
                          <div className='inline-flex text-[1em] ml-[3px]'>g</div>
                        </div>
                      </div>
                      <div className='font-[300] text-[1em] '>Carbohydrate</div>
                    </div>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px] lg:flex lg:justify-center'>
                          0
                          <div className='inline-flex text-[1em] ml-[3px] '>g</div>
                        </div>
                      </div>
                      <div className='font-[300] text-[1em] '>Protein</div>
                    </div>
                  </div>
                </div>
                <div className='min-w-[38px] bg-[#ffffff00] p-[10px] items-center flex grow-0 group-hover:text-[#1AB394]'>
                  <Icon path={mdiOpenInNew} className='hidden text-[18px] group-hover:flex' />
                </div>
              </div>
              <div className='mb-[10px] border border-[#EEEEEE] bg-[#FFF] flex group hover:border-[#1AB394]'>
                <div className='flex grow pr-[10px] items-center'>
                  <div className='shrink grow-[2] flex-col items-start flex overflow-hidden p-[10px] sm:basis-0'>
                    <div className='text-[14px]'>Butter, whipped, with salt</div>
                    <div className='font-[300] text-[1em] max-w-[100%] overflow-hidden text-ellipsis whitespace-nowrap'>USDA, 2018</div>
                  </div>
                  <div className='p-0 grow flex items-center basis-[135px] sm:flex-wrap'>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px] lg:flex'>
                          731
                          <div className='inline-flex text-[1em] ml-[3px] '>kcal</div>
                        </div>
                      </div>
                      <div className='font-[300] text-[1em] '>Energy</div>
                    </div>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px] lg:flex'>
                          78
                          <div className='inline-flex text-[1em] ml-[3px] '>g</div>
                        </div>
                      </div>
                      <div className='font-[300] text-[1em] '>Fat</div>
                    </div>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px] lg:flex lg:justify-center'>
                          0
                          <div className='inline-flex text-[1em] ml-[3px]'>g</div>
                        </div>
                      </div>
                      <div className='font-[300] text-[1em]'>Carbohydrate</div>
                    </div>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px] lg:flex lg:justify-center'>
                          0
                          <div className='inline-flex text-[1em] ml-[3px]'>g</div>
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
              <div className='mb-[10px] border border-[#EEEEEE] bg-[#FFF] flex group hover:border-[#1AB394]'>
                <div className='flex grow pr-[10px] items-center'>
                  <div className='shrink grow-[2] flex-col items-start flex overflow-hidden p-[10px] sm:basis-0'>
                    <div className='text-[14px]'>Butter, whipped, with salt</div>
                    <div className='font-[300] text-[1em] max-w-[100%] overflow-hidden text-ellipsis whitespace-nowrap'>USDA, 2018</div>
                  </div>
                  <div className='p-0 grow flex items-center basis-[135px] sm:flex-wrap'>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px] lg:flex'>
                          731
                          <div className='inline-flex text-[1em] ml-[3px]'>kcal</div>
                        </div>
                      </div>
                      <div className='font-[300] text-[1em]'>Energy</div>
                    </div>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px] lg:flex'>
                          78
                          <div className='inline-flex text-[1em] ml-[3px]'>g</div>
                        </div>
                      </div>
                      <div className='font-[300] text-[1em]'>Fat</div>
                    </div>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px] lg:flex lg:justify-center'>
                          0
                          <div className='inline-flex text-[1em] ml-[3px]'>g</div>
                        </div>
                      </div>
                      <div className='font-[300] text-[1em]'>Carbohydrate</div>
                    </div>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px] lg:flex lg:justify-center'>
                          0
                          <div className='inline-flex text-[1em] ml-[3px]'>g</div>
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
              <div className='mb-[10px] border border-[#EEEEEE] bg-[#FFF] flex group hover:border-[#1AB394]'>
                <div className='flex grow pr-[10px] items-center'>
                  <div className='shrink grow-[2] flex-col items-start flex overflow-hidden p-[10px] sm:basis-0'>
                    <div className='text-[14px]'>Butter, whipped, with salt</div>
                    <div className='font-[300] text-[1em] max-w-[100%] overflow-hidden text-ellipsis whitespace-nowrap'>USDA, 2018</div>
                  </div>
                  <div className='p-0 grow flex items-center basis-[135px] sm:flex-wrap'>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px] lg:flex'>
                          731
                          <div className='inline-flex text-[1em] ml-[3px]'>kcal</div>
                        </div>
                      </div>
                      <div className='font-[300] text-[1em]'>Energy</div>
                    </div>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px] lg:flex'>
                          78
                          <div className='inline-flex text-[1em] ml-[3px]'>g</div>
                        </div>
                      </div>
                      <div className='font-[300] text-[1em]'>Fat</div>
                    </div>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px] lg:flex lg:justify-center'>
                          0
                          <div className='inline-flex text-[1em] ml-[3px]'>g</div>
                        </div>
                      </div>
                      <div className='font-[300] text-[1em]'>Carbohydrate</div>
                    </div>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px] lg:flex lg:justify-center'>
                          0
                          <div className='inline-flex text-[1em] ml-[3px]'>g</div>
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
              <div className='mb-[10px] border border-[#EEEEEE] bg-[#FFF] flex group hover:border-[#1AB394]'>
                <div className='flex grow pr-[10px] items-center'>
                  <div className='shrink grow-[2] flex-col items-start flex overflow-hidden p-[10px] sm:basis-0'>
                    <div className='text-[14px]'>Butter, whipped, with salt</div>
                    <div className='font-[300] text-[1em] max-w-[100%] overflow-hidden text-ellipsis whitespace-nowrap'>USDA, 2018</div>
                  </div>
                  <div className='p-0 grow flex items-center basis-[135px] sm:flex-wrap'>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px] lg:flex'>
                          731
                          <div className='inline-flex text-[1em] ml-[3px]'>kcal</div>
                        </div>
                      </div>
                      <div className='font-[300] text-[1em]'>Energy</div>
                    </div>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px] lg:flex'>
                          78
                          <div className='inline-flex text-[1em] ml-[3px]'>g</div>
                        </div>
                      </div>
                      <div className='font-[300] text-[1em]'>Fat</div>
                    </div>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px] lg:flex lg:justify-center'>
                          0
                          <div className='inline-flex text-[1em] ml-[3px]'>g</div>
                        </div>
                      </div>
                      <div className='font-[300] text-[1em]'>Carbohydrate</div>
                    </div>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px] lg:flex lg:justify-center'>
                          0
                          <div className='inline-flex text-[1em] ml-[3px]'>g</div>
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
              <div className='mb-[10px] border border-[#EEEEEE] bg-[#FFF] flex group hover:border-[#1AB394]'>
                <div className='flex grow pr-[10px] items-center'>
                  <div className='shrink grow-[2] flex-col items-start flex overflow-hidden p-[10px] sm:basis-0'>
                    <div className='text-[14px]'>Butter, whipped, with salt</div>
                    <div className='font-[300] text-[1em] max-w-[100%] overflow-hidden text-ellipsis whitespace-nowrap'>USDA, 2018</div>
                  </div>
                  <div className='p-0 grow flex items-center basis-[135px] sm:flex-wrap'>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px] lg:flex'>
                          731
                          <div className='inline-flex text-[1em] ml-[3px]'>kcal</div>
                        </div>
                      </div>
                      <div className='font-[300] text-[1em]'>Energy</div>
                    </div>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px] lg:flex'>
                          78
                          <div className='inline-flex text-[1em] ml-[3px]'>g</div>
                        </div>
                      </div>
                      <div className='font-[300] text-[1em]'>Fat</div>
                    </div>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px] lg:flex lg:justify-center'>
                          0
                          <div className='inline-flex text-[1em] ml-[3px]'>g</div>
                        </div>
                      </div>
                      <div className='font-[300] text-[1em]'>Carbohydrate</div>
                    </div>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px] lg:flex lg:justify-center'>
                          0
                          <div className='inline-flex text-[1em] ml-[3px]'>g</div>
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
              <div className='mb-[10px] border border-[#EEEEEE] bg-[#FFF] flex group hover:border-[#1AB394]'>
                <div className='flex grow pr-[10px] items-center'>
                  <div className='shrink grow-[2] flex-col items-start flex overflow-hidden p-[10px] sm:basis-0'>
                    <div className='text-[14px]'>Butter, whipped, with salt</div>
                    <div className='font-[300] text-[1em] max-w-[100%] overflow-hidden text-ellipsis whitespace-nowrap'>USDA, 2018</div>
                  </div>
                  <div className='p-0 grow flex items-center basis-[135px] sm:flex-wrap'>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px] lg:flex'>
                          731
                          <div className='inline-flex text-[1em] ml-[3px]'>kcal</div>
                        </div>
                      </div>
                      <div className='font-[300] text-[1em]'>Energy</div>
                    </div>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px] lg:flex'>
                          78
                          <div className='inline-flex text-[1em] ml-[3px]'>g</div>
                        </div>
                      </div>
                      <div className='font-[300] text-[1em]'>Fat</div>
                    </div>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px] lg:flex lg:justify-center'>
                          0
                          <div className='inline-flex text-[1em] ml-[3px]'>g</div>
                        </div>
                      </div>
                      <div className='font-[300] text-[1em]'>Carbohydrate</div>
                    </div>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px] lg:flex lg:justify-center'>
                          0
                          <div className='inline-flex text-[1em] ml-[3px]'>g</div>
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
              <div className='min-h-[54px] flex items-center p-[10px] bg-[#fff] border border-[#EEEEEE] text-[#888888] group hover:border-[#1AB394]'>
                <span className='w-[30px] text-center mr-[15px]'>
                  <Icon path={mdiDatabasePlus} className='inline-block align-middle leading-none group-hover:text-[#1AB394]' />
                </span>
                <span>
                  <h4 className='font-[400] m-0 text-[14px] leading-[1.1] group-hover:text-[#1AB394]'>Create food</h4>
                </span>
              </div>
              <div>

                {/* <Items currentItems={currentItems} />
                  <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                  /> */}

              </div>
            </div>
          </div>
          <div className='border p-6 mt-6 card-shadow mb-6 rounded-md bg-white'>
            <div className='flex items-center'>
              <div className='flex-grow'>
                <h4 className='text-[20px] leading-[1.1]'>Dietary supplements</h4>
                <div className='text-[12px] text-[#888888] opacity-[0.6]'>Search, check and add new dietary supplements to the system</div>
              </div>
              <div className='flex items-center group cursor-pointer'>
                <a className=''>
                  <Icon path={mdiPlus} size="24px" />
                </a>
                <span className='hidden group-hover:block text-[#888888] text-[1.1em] ml-[5px]'>Create dietary supplement</span>
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
                  placeholder="Search dietary supplement"
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
                            My dietary supplements
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
                  <h4 className='font-[400] m-0 text-[14px] leading-[1.1] group-hover:text-[#1AB394]'>Create dietary supplement</h4>
                </span>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  )
}
