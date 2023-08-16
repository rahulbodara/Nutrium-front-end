import MainLayout from '@/components/Admin/MainLayout'
import React, { useState } from 'react'
import Icon from '@mdi/react'
import { mdiCheck, mdiCheckboxBlankOutline, mdiCheckboxOutline, mdiPlus, mdiSortDescending } from '@mdi/js'
import { mdiSortAscending } from '@mdi/js'
import { AiFillHeart } from "react-icons/ai";
import { MdOutlineDiversity3 } from "react-icons/md";
import { BsPencilSquare } from "react-icons/bs";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import { FiHeart } from "react-icons/fi";
import ClosableSelect from '@/components/Admin/common/ClosableSelect';
import { BiSolidEditAlt } from 'react-icons/bi'


export default function Recipes() {
  const [isNutriumChecked, setIsNutriumChecked] = useState(true);
  const [isCommunitychecked, setIsCommunitychecked] = useState(true);
  const [isMyRecipesChecked, setIsMyRecipesChecked] = useState(true);


  console.log("🚀 ~ file: index.js:16 ~ Recipes ~ isNutriumChecked:", isNutriumChecked)
  const handleNutrimChange = (event,id) => {
    if(id === "1"){
      setIsNutriumChecked(event.target.checked) 
    }
    else if (id === "2") {
      setIsCommunitychecked(event.target.checked)
    }
    else if (id === "3") {
      setIsMyRecipesChecked(event.target.checked)
    }
  }

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

  return (
    <>

      <MainLayout head={"Recipes"} text={"Create, check and update recipes"}>
        {/* <Dropdown /> */}
        <div className='bg-white border-1'>
          <div className='border p-6 mt-6 card-shadow'>
            <div className='flex items-center'>
              <div className='flex-grow'>
                <h4 className='text-[20px] leading-[1.1]'>Recipes</h4>
                <div className='text-[12px] text-[#888888] opacity-[0.6]'>Search, check and create new recipes</div>
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
                  placeholder="Search workspaces"
                />
              </div>
              <div className='xl:flex-wrap xl:w-full flex w-2/12'>
                <ClosableSelect labelWidth="basis-[40px] min-w-[40px] sm:basis-[40px] sm:min-w-[40px]" focusEffect={true} Icon={mdiSortDescending} searchOption={false} option={professionOptions} closable={false} className="mt-0 w-full h-[38px]" />
              </div>
              <div className='xl:flex-wrap xl:w-full flex w-2/12'>
                <ClosableSelect labelWidth="basis-[40px] min-w-[40px] sm:basis-[0px] sm:min-w-[0px] py-0 px-0" focusEffect={true} searchOption={false} option={professionOptions} className="mt-0 w-full h-[38px]" />
              </div>
            </div>
            <div className='flex-wrap flex mt-7 gap-6 items-center'>
              <div className='border rounded-sm py-1 px-3 flex items-center gap-2'>
                <AiFillHeart className='text-[#CC5965] w-[1.2em] h-[1.2em]' />
                <span className=''>Favorites</span>
                <span className='text-[#AAAAAA]'>0</span>
              </div>
              <div className='xl:hidden ml-4'>
                <span>Show recipes:</span>
              </div>
              <div className='flex items-center leading-[0px]'>
                <input type="checkbox" className="outline-none focus:outline-none hidden" defaultChecked={isNutriumChecked} onChange={(e) => handleNutrimChange(e,"1")} id='nutrium-recipes' />
                <label htmlFor='nutrium-recipes' className='inline-flex items-center select-none cursor-pointer'>
                {
                  isNutriumChecked ? <span className='w-[16px] h-[16px] border-[1px] border-[#1AB394]'><Icon path={mdiCheck} color="#1AB394" size="14px" /></span> : <span className='w-[16px] h-[16px] border-[1px] border-[#d2d2d2]'></span>
                }
                  <img src='/image/nutrium.svg' className='w-[16px] mr-2 ml-2' />
                  <span className='text-[#1AB394] font-bold text-[15px]'>Nutrium Recipes</span>
                </label>
              </div>
              <div className='flex items-center leading-[0px]'>
                <input type="checkbox" className="outline-none focus:outline-none hidden" defaultChecked={isCommunitychecked} onChange={(e) => handleNutrimChange(e,"2")} id='community-recipes' />
                <label htmlFor='community-recipes' className='inline-flex items-center select-none cursor-pointer'>
                {
                  isCommunitychecked ? <span className='w-[16px] h-[16px] border-[1px] border-[#ea9f77]'><Icon path={mdiCheck} color="#ea9f77" size="14px" /></span> : <span className='w-[16px] h-[16px] border-[1px] border-[#d2d2d2]'></span>
                }
                <MdOutlineDiversity3 className='text-[#EA9F77] text-[18px] mr-2 ml-2' />
                  <span className='text-[#ea9f77] font-bold text-[15px]'>Community Recipes</span>
                </label>
              </div>
              <div className='flex items-center leading-[0px]'>
              <input type="checkbox" className="outline-none focus:outline-none hidden" defaultChecked={isMyRecipesChecked} onChange={(e) => handleNutrimChange(e,"3")} id='my-recipes' />
                <label htmlFor='my-recipes' className='inline-flex items-center select-none cursor-pointer'>
                {
                  isMyRecipesChecked ? <span className='w-[16px] h-[16px] border-[1px] border-[#2BA0CC]'><Icon path={mdiCheck} color="#2BA0CC" size="14px" /></span> : <span className='w-[16px] h-[16px] border-[1px] border-[#d2d2d2]'></span>
                }
                <BiSolidEditAlt className='text-[#2BA0CC] text-[18px] mr-2 ml-2' />
                  <span className='text-[#2BA0CC] font-bold text-[15px]'>My recipes</span>
                </label>
              </div>
            </div>
            <div className='xl:flex-wrap flex mt-7 gap-6'>
              <div className='w-2/4 relative sm:order-1 xl:w-full sm:mb-4'>
                <a >
                  <div className='border relative sm:flex-wrap flex sm:h-auto h-[220px] hover:border-[#1AB394] rounded'>
                    <div className='flex absolute bg-[#fff] p-2 left-[10px] top-[10px] shadow-[0_1px_3px_#dddddd] rounded-md'>
                      <MdOutlineDiversity3 className='text-[#EA9F77] text-[18px] mr-2 ml-2' />
                      <span className='text-[#EA9F77] font-bold'>Community Recipes</span>
                    </div>
                    <img src='/image/Tomato Sauce.jpg' className='sm:w-full rounded-l' />
                    <div className='w-full  flex flex-col justify-between'>
                      <div className='p-5 w-full gap-5 flex-col flex'>
                        <div className='gap-[10px] flex-col flex'>
                          <div className='text-black font-bold text-[15px]'>Quick Tomato Sauce</div>
                          <div className='flex items-center gap-1 text-[#676A6C]'>
                            <img src='/image/employee.jpeg' className='w-[24px] h-[24px] rounded-[50%]' />
                            <span>Sandra Koen, Ph,D RD</span>
                          </div>
                        </div>
                        <div className='flex gap-1 items-center'>
                          <TbArrowBadgeRightFilled className='text-[18px] text-[#EA9F77]' />
                          <div>Appetizers and side dishes</div>
                        </div>
                      </div>
                      <div className='flex justify-around items-center h-[54px] border '>
                        <div className='flex flex-col text-[11px]'>
                          <div className='text-[#888888]'>by</div>
                          <div className='text-[#888888]'>100g</div>
                        </div>
                        <div className='flex flex-col text-[11px]'>
                          <div className='text-[#888888]'>Energy</div>
                          <div className='text-[#888888]'>88 kcal</div>
                        </div>
                        <div className='flex flex-col text-[11px]'>
                          <div className='text-[#888888]'>Fat</div>
                          <div className='text-[#888888]'>8 g</div>
                        </div>
                        <div className='flex flex-col text-[11px] text-center'>
                          <div className='text-[#888888]'>Carbohydrate</div>
                          <div className='text-[#888888]'>4 g</div>
                        </div>
                        <div className='flex flex-col text-[11px] text-center'>
                          <div className='text-[#888888]'>Protein</div>
                          <div className='text-[#888888]'>1 g</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <div>
                  <div className='absolute right-[10px] top-[10px] hover:border-[#CC5965] w-[60px] h-[28px] py-2 px-2 flex items-center justify-between border rounded-md bg-[#fff] z-10'>
                    <FiHeart className='text-[16px] text-[#AAAAAA]' />
                    <span className='text-[11px] text-center left-4 text-[#AAAAAA] font-semibold'>17</span>
                  </div>
                </div>
              </div>
              <div className='w-2/4 relative sm:order-2 xl:w-full '>
                <a >
                  <div className='border relative sm:flex-wrap flex h-[220px] hover:border-[#1AB394] rounded'>
                    <div className='flex absolute bg-[#fff] p-2 left-[10px] top-[10px] shadow-[0_1px_3px_#dddddd] rounded-md'>
                      <MdOutlineDiversity3 className='text-[#EA9F77] text-[18px] mr-2 ml-2' />
                      <span className='text-[#EA9F77] font-bold'>Community Recipes</span>
                    </div>
                    <img src='/image/Tomato Sauce.jpg' className='sm:w-full rounded-l' />
                    <div className='w-full flex flex-col justify-between'>
                      <div className='p-5 w-full gap-5 flex-col flex'>
                        <div className='gap-[10px] flex-col flex'>
                          <div className='text-black font-bold text-[15px]'>Quick Tomato Sauce</div>
                          <div className='flex items-center gap-1 text-[#676A6C]'>
                            <img src='/image/employee.jpeg' className='w-[24px] h-[24px] rounded-[50%]' />
                            <span>Sandra Koen, Ph,D RD</span>
                          </div>
                        </div>
                        <div className='flex gap-1 items-center'>
                          <TbArrowBadgeRightFilled className='text-[18px] text-[#EA9F77]' />
                          <div>Appetizers and side dishes</div>
                        </div>
                      </div>
                      <div className='flex justify-around items-center h-[54px] border '>
                        <div className='flex flex-col text-[11px]'>
                          <div className='text-[#888888]'>by</div>
                          <div className='text-[#888888]'>100g</div>
                        </div>
                        <div className='flex flex-col text-[11px]'>
                          <div className='text-[#888888]'>Energy</div>
                          <div className='text-[#888888]'>88 kcal</div>
                        </div>
                        <div className='flex flex-col text-[11px]'>
                          <div className='text-[#888888]'>Fat</div>
                          <div className='text-[#888888]'>8 g</div>
                        </div>
                        <div className='flex flex-col text-[11px] text-center'>
                          <div className='text-[#888888]'>Carbohydrate</div>
                          <div className='text-[#888888]'>4 g</div>
                        </div>
                        <div className='flex flex-col text-[11px] text-center'>
                          <div className='text-[#888888]'>Protein</div>
                          <div className='text-[#888888]'>1 g</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <div>
                  <div className='absolute right-[10px] top-[10px] hover:border-[red] w-[60px] h-[28px] py-2 px-2 flex items-center justify-between border rounded-md bg-[#fff] z-10'>
                    <FiHeart className='text-[16px] text-[#AAAAAA]' />
                    <span className='text-[11px] text-center left-4 text-[#AAAAAA] font-semibold'>17</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  )
}
