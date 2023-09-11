import MainLayout from '@/components/Admin/MainLayout'
import React, { useState } from 'react'
import Icon from '@mdi/react'
import ClosableSelect from '@/components/Admin/common/ClosableSelect';
import { mdiDatabasePlus, mdiOpenInNew, mdiPlus, mdiSortDescending } from '@mdi/js';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
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


  console.log("🚀 ~ file: index.js:16 ~ Recipes ~ isNutriumChecked:", isNutriumChecked)
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
                <span className='hidden group-hover:block text-[#888888] text-[1.1em] ml-[5px]'>Create new recipe</span>
              </div>
              <div>
              </div>
            </div>
            <div className='xl:flex-wrap flex mt-3 justify-between gap-2'>
              <div className='mb-[15px] xl:w-full w-4/6'>
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
                <div>
                  <Menu.Button className="inline-flex w-full justify-between gap-x-1.5 bg-white text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    <div className='flex'>
                      <Icon path={mdiSortDescending} className='w-[36px] text-[#999999] border-r border-r-[#EEEEEE] px-2 py-[9px]' />
                      <span className='px-3 py-[9px] text-[#999999]'>Sort by nutrient</span>
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
                  <Menu.Items className="absolute right-0 z-10 w-[13.5rem] origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm'
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
                              'block px-4 py-2 text-sm'
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
                              'block px-4 py-2 text-sm'
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
                  <Menu.Button className="inline-flex w-full justify-between text-[#999999] gap-x-1.5 bg-white px-3 py-[9px] text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
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
                  <Menu.Items className="absolute right-0 z-10 w-[15.8rem] origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm'
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
                              'block px-4 py-2 text-sm'
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
                              'block px-4 py-2 text-sm'
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
              <div className='mb-[10px] border border-[#EEEEEE] bg-[#FFF] flex group hover:border-[#1AB394]'>
                <div className='flex grow pr-[10px] items-center'>
                  <div className='shrink grow-[2] flex-col items-start overflow-hidden p-[10px]'>
                    <div className='text-[14px]'>Butter, whipped, with salt</div>
                    <div className='font-[300] text-[1em] max-w-[100%] overflow-hidden text-ellipsis whitespace-nowrap'>USDA, 2018</div>
                  </div>
                  <div className='p-0 grow flex items-center basis-[135px] '>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px]'>
                          731
                          <div className='inline-flex text-[1em] ml-[3px]'>kcal</div>
                        </div>
                      </div>
                      <div className='font-[300] text-[1em]'>Energy</div>
                    </div>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px]'>
                          78
                          <div className='inline-flex text-[1em] ml-[3px]'>g</div>
                        </div>
                      </div>
                      <div className='font-[300] text-[1em]'>Fat</div>
                    </div>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px]'>
                          0
                          <div className='inline-flex text-[1em] ml-[3px]'>g</div>
                        </div>
                      </div>
                      <div className='font-[300] text-[1em]'>Carbohydrate</div>
                    </div>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px]'>
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
                  <div className='shrink grow-[2] flex-col items-start overflow-hidden p-[10px]'>
                    <div className='text-[14px]'>Butter, whipped, with salt</div>
                    <div className='font-[300] text-[1em] max-w-[100%] overflow-hidden text-ellipsis whitespace-nowrap'>USDA, 2018</div>
                  </div>
                  <div className='p-0 grow flex items-center basis-[135px] '>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px]'>
                          731
                          <div className='inline-flex text-[1em] ml-[3px]'>kcal</div>
                        </div>
                      </div>
                      <div className='font-[300] text-[1em]'>Energy</div>
                    </div>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px]'>
                          78
                          <div className='inline-flex text-[1em] ml-[3px]'>g</div>
                        </div>
                      </div>
                      <div className='font-[300] text-[1em]'>Fat</div>
                    </div>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px]'>
                          0
                          <div className='inline-flex text-[1em] ml-[3px]'>g</div>
                        </div>
                      </div>
                      <div className='font-[300] text-[1em]'>Carbohydrate</div>
                    </div>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px]'>
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
                  <div className='shrink grow-[2] flex-col items-start overflow-hidden p-[10px]'>
                    <div className='text-[14px]'>Butter, whipped, with salt</div>
                    <div className='font-[300] text-[1em] max-w-[100%] overflow-hidden text-ellipsis whitespace-nowrap'>USDA, 2018</div>
                  </div>
                  <div className='p-0 grow flex items-center basis-[135px] '>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px]'>
                          731
                          <div className='inline-flex text-[1em] ml-[3px]'>kcal</div>
                        </div>
                      </div>
                      <div className='font-[300] text-[1em]'>Energy</div>
                    </div>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px]'>
                          78
                          <div className='inline-flex text-[1em] ml-[3px]'>g</div>
                        </div>
                      </div>
                      <div className='font-[300] text-[1em]'>Fat</div>
                    </div>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px]'>
                          0
                          <div className='inline-flex text-[1em] ml-[3px]'>g</div>
                        </div>
                      </div>
                      <div className='font-[300] text-[1em]'>Carbohydrate</div>
                    </div>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px]'>
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
                  <div className='shrink grow-[2] flex-col items-start overflow-hidden p-[10px]'>
                    <div className='text-[14px]'>Butter, whipped, with salt</div>
                    <div className='font-[300] text-[1em] max-w-[100%] overflow-hidden text-ellipsis whitespace-nowrap'>USDA, 2018</div>
                  </div>
                  <div className='p-0 grow flex items-center basis-[135px] '>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px]'>
                          731
                          <div className='inline-flex text-[1em] ml-[3px]'>kcal</div>
                        </div>
                      </div>
                      <div className='font-[300] text-[1em]'>Energy</div>
                    </div>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px]'>
                          78
                          <div className='inline-flex text-[1em] ml-[3px]'>g</div>
                        </div>
                      </div>
                      <div className='font-[300] text-[1em]'>Fat</div>
                    </div>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px]'>
                          0
                          <div className='inline-flex text-[1em] ml-[3px]'>g</div>
                        </div>
                      </div>
                      <div className='font-[300] text-[1em]'>Carbohydrate</div>
                    </div>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px]'>
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
                  <div className='shrink grow-[2] flex-col items-start overflow-hidden p-[10px]'>
                    <div className='text-[14px]'>Butter, whipped, with salt</div>
                    <div className='font-[300] text-[1em] max-w-[100%] overflow-hidden text-ellipsis whitespace-nowrap'>USDA, 2018</div>
                  </div>
                  <div className='p-0 grow flex items-center basis-[135px] '>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px]'>
                          731
                          <div className='inline-flex text-[1em] ml-[3px]'>kcal</div>
                        </div>
                      </div>
                      <div className='font-[300] text-[1em]'>Energy</div>
                    </div>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px]'>
                          78
                          <div className='inline-flex text-[1em] ml-[3px]'>g</div>
                        </div>
                      </div>
                      <div className='font-[300] text-[1em]'>Fat</div>
                    </div>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px]'>
                          0
                          <div className='inline-flex text-[1em] ml-[3px]'>g</div>
                        </div>
                      </div>
                      <div className='font-[300] text-[1em]'>Carbohydrate</div>
                    </div>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px]'>
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
                  <div className='shrink grow-[2] flex-col items-start overflow-hidden p-[10px]'>
                    <div className='text-[14px]'>Butter, whipped, with salt</div>
                    <div className='font-[300] text-[1em] max-w-[100%] overflow-hidden text-ellipsis whitespace-nowrap'>USDA, 2018</div>
                  </div>
                  <div className='p-0 grow flex items-center basis-[135px] '>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px]'>
                          731
                          <div className='inline-flex text-[1em] ml-[3px]'>kcal</div>
                        </div>
                      </div>
                      <div className='font-[300] text-[1em]'>Energy</div>
                    </div>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px]'>
                          78
                          <div className='inline-flex text-[1em] ml-[3px]'>g</div>
                        </div>
                      </div>
                      <div className='font-[300] text-[1em]'>Fat</div>
                    </div>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px]'>
                          0
                          <div className='inline-flex text-[1em] ml-[3px]'>g</div>
                        </div>
                      </div>
                      <div className='font-[300] text-[1em]'>Carbohydrate</div>
                    </div>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px]'>
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
                  <div className='shrink grow-[2] flex-col items-start overflow-hidden p-[10px]'>
                    <div className='text-[14px]'>Butter, whipped, with salt</div>
                    <div className='font-[300] text-[1em] max-w-[100%] overflow-hidden text-ellipsis whitespace-nowrap'>USDA, 2018</div>
                  </div>
                  <div className='p-0 grow flex items-center basis-[135px] '>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px]'>
                          731
                          <div className='inline-flex text-[1em] ml-[3px]'>kcal</div>
                        </div>
                      </div>
                      <div className='font-[300] text-[1em]'>Energy</div>
                    </div>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px]'>
                          78
                          <div className='inline-flex text-[1em] ml-[3px]'>g</div>
                        </div>
                      </div>
                      <div className='font-[300] text-[1em]'>Fat</div>
                    </div>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px]'>
                          0
                          <div className='inline-flex text-[1em] ml-[3px]'>g</div>
                        </div>
                      </div>
                      <div className='font-[300] text-[1em]'>Carbohydrate</div>
                    </div>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px]'>
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
                  <div className='shrink grow-[2] flex-col items-start overflow-hidden p-[10px]'>
                    <div className='text-[14px]'>Butter, whipped, with salt</div>
                    <div className='font-[300] text-[1em] max-w-[100%] overflow-hidden text-ellipsis whitespace-nowrap'>USDA, 2018</div>
                  </div>
                  <div className='p-0 grow flex items-center basis-[135px] '>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px]'>
                          731
                          <div className='inline-flex text-[1em] ml-[3px]'>kcal</div>
                        </div>
                      </div>
                      <div className='font-[300] text-[1em]'>Energy</div>
                    </div>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px]'>
                          78
                          <div className='inline-flex text-[1em] ml-[3px]'>g</div>
                        </div>
                      </div>
                      <div className='font-[300] text-[1em]'>Fat</div>
                    </div>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px]'>
                          0
                          <div className='inline-flex text-[1em] ml-[3px]'>g</div>
                        </div>
                      </div>
                      <div className='font-[300] text-[1em]'>Carbohydrate</div>
                    </div>
                    <div className='grow text-center p-[5px]'>
                      <div>
                        <div className='text-[14px]'>
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
                <span className='hidden group-hover:block text-[#888888] text-[1.1em] ml-[5px]'>Create new recipe</span>
              </div>
              <div>
              </div>
            </div>
            <div className='xl:flex-wrap flex mt-3 justify-between gap-2'>
              <div className='mb-[15px] xl:w-full w-4/6'>
                <input
                  type="text"
                  name="fullName"
                  className="block focus:ring-0 border-[1px] border-[#e5e6e7] py-[6px] w-full px-[12px] input-transition focus:border-[#1ab394] text-[13px] text-[#676a6c] focus:outline-none"
                  placeholder="Search dietary supplement"
                />
              </div>
              <div className='xl:flex-wrap xl:w-full flex w-2/12'>
                <ClosableSelect labelWidth="basis-[40px] min-w-[40px] sm:basis-[40px] sm:min-w-[40px]" focusEffect={true} Icon={mdiSortDescending} searchOption={false} option={professionOptions} closable={false} className="mt-0 w-full h-[38px]" />
              </div>
              <div className='xl:flex-wrap xl:w-full flex w-2/12'>
                <ClosableSelect labelWidth="basis-[40px] min-w-[40px] sm:basis-[0px] sm:min-w-[0px] py-0 px-0" focusEffect={true} searchOption={false} option={professionOptions} className="mt-0 w-full h-[38px]" />
              </div>
            </div>
            <div>
              <div className='min-h-[54px] flex items-center p-[10px] bg-[#fff] border border-[#EEEEEE] text-[#888888] group hover:border-[#1AB394]'>
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
