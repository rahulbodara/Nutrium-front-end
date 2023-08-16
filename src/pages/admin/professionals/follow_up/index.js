import MainLayout from '@/components/Admin/MainLayout'
import React from 'react'
import ClosableSelect from '@/components/Admin/common/ClosableSelect';
import Icon from '@mdi/react'
import { mdiCheck, mdiClock, mdiClose, mdiEmailOutline, mdiHeartBoxOutline, mdiHeartOutline, mdiHelp, mdiRun, mdiSwapHorizontal } from '@mdi/js'


export default function FollowUp() {

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

      <MainLayout head={"Follow-up"} text={"Follow up on your clients and check their latest progress"}>
        {/* <Dropdown /> */}
        <div className='lg:flex-wrap flex pt-5 gap-7'>
          <div className='w-[50%] lg:w-full bg-[#fff] rounded lg:order-2'>
            <div className='flex items-center px-5 pt-5 pb-4'>
              <div className='flex-grow'>
                <h4 className='text-[20px]'>Activities</h4>
                <div className='text-[12px] text-[#888888] opacity-[0.6]'>Check your clients' updates</div>
              </div>
              <div>
                <ClosableSelect labelWidth="basis-[40px] min-w-[40px] sm:basis-[0px] sm:min-w-[0px] py-0 px-0" searchOption={false} option={professionOptions} className="mt-0 w-full h-[38px]" />
              </div>
            </div>
            <div className='border-b-1 p-5 pt-[5px]'>
              <div className='flex items-center'>
                <div className='relative'>
                  <img src='/image/female_thumb.png' className='w-[45px] h-[45px] rounded-[50%] max-w-full' />
                </div>
                <a className='ml-[10px] text-[15px] flex-1 '>Example client</a>
                <div className='text-[14px]'>July 14</div>
              </div>
              <div className='mt-[10px]'>
                <div className='flex ml-[55px] items-start'>
                  <div className='text-[#fff] inline-block'>
                    <a>
                      <Icon path={mdiRun} className='bg-[#1AB394] p-[5px] leading-[1] rounded-[50%] inline-block w-[25px]' />
                    </a>
                  </div>
                  <div className='ml-[15px] flex-1'>
                    <div className='inline'>Physical activity: running.</div>
                  </div>
                  <div className='flex items-center'>
                    <div className='flex text-[#717171] border rounded px-3 py-1 ml-2 -mr-1'>
                      <a><Icon path={mdiHeartOutline} className='text-[#C2C2C2] mr-2 inline-block leading-[1] w-[20px]' /></a>
                      <div className=''>Like</div>
                    </div>
                    <div className='border rounded ml-2 text-[#1AB394]'>
                      <a><Icon path={mdiEmailOutline} className='w-[37px] py-[4px] px-2 inline-block ' /></a>
                    </div>
                  </div>
                </div>
                <div className='mt-[5px] ml-[55px] mr-[40px] flex  sm:flex-wrap'>
                  <div className='mt-[10px] py-2 px-3 rounded mr-[10px] bg-[#fff] flex border md:grow'>
                    <div className='text-[#fff] inline-block'>
                      <a><Icon path={mdiClock} className='bg-[#1C84CE] p-[5px] leading-[1] rounded-[50%] inline-block w-[28px] ' /></a>
                    </div>
                    <div className='ml-[10px]'>
                      <div className='text-[14px] leading-[14px]'>60 min</div>
                      <div className='text-[11px] leading-[11px]'>Duration</div>
                    </div>
                  </div>
                  <div className='mt-[10px] py-2 px-3 rounded mr-[10px] bg-[#fff] flex border md:grow'>
                    <div className='text-[#fff] inline-block'>
                      <a><Icon path={mdiClock} className='bg-[#EA9F77] p-[5px] leading-[1] rounded-[50%] inline-block w-[28px] ' /></a>
                    </div>
                    <div className='ml-[10px]'>
                      <div className='text-[14px] leading-[14px]'>240 kcal</div>
                      <div className='text-[11px] leading-[11px]'>Energy</div>
                    </div>
                  </div>
                  <div className='mt-[10px] py-2 px-3 rounded mr-[10px] bg-[#fff] flex border md:grow'>
                    <div className='text-[#fff] inline-block'>
                      <a><Icon path={mdiRun} className='bg-[#1AB394] p-[5px] leading-[1] rounded-[50%] inline-block w-[28px] ' /></a>
                    </div>
                    <div className='ml-[10px]'>
                      <div className='text-[14px] leading-[14px]'>2.05 km</div>
                      <div className='text-[11px] leading-[11px]'>Distance</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='border-b-1 bg-[#FAFAFB] p-5'>
              <div className='flex items-center'>
                <div className='relative'>
                  <img src='/image/female_thumb.png' className='w-[45px] h-[45px] rounded-[50%] max-w-full' />
                </div>
                <a className='ml-[10px] text-[15px] flex-1 '>Example client</a>
                <div className='text-[14px]'>July 14</div>
              </div>
              <div className='mt-[10px]'>
                <div className='flex ml-[55px] items-start'>
                  <div className='text-[#fff] inline-block'>
                    <a>
                      <Icon path={mdiCheck} className='bg-[#1AB394] p-[5px] leading-[1] rounded-[50%] inline-block w-[25px]' />
                    </a>
                  </div>
                  <div className='ml-[15px] flex-1'>
                    <div className='inline'>Ate supper on 14 of July at 10:00 PM.</div>
                  </div>
                  <div className='flex items-center'>
                    <div className='flex text-[#717171] border rounded px-3 py-1 ml-2 -mr-1'>
                      <a><Icon path={mdiHeartOutline} className='text-[#C2C2C2] mr-2 inline-block leading-[1] w-[20px]' /></a>
                      <div className=''>Like</div>
                    </div>
                    <div className='border rounded ml-2 text-[#1AB394]'>
                      <a><Icon path={mdiEmailOutline} className='w-[37px] py-[4px] px-2 inline-block ' /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='border-b-1 bg-[#fff] p-5'>
              <div className='flex items-center'>
                <div className='relative'>
                  <img src='/image/female_thumb.png' className='w-[45px] h-[45px] rounded-[50%] max-w-full' />
                </div>
                <a className='ml-[10px] text-[15px] flex-1 '>Example client</a>
                <div className='text-[14px]'>July 14</div>
              </div>
              <div className='mt-[10px]'>
                <div className='flex ml-[55px] items-start'>
                  <div className='text-[#fff] inline-block'>
                    <a>
                      <Icon path={mdiSwapHorizontal} className='bg-[#EA9F77] p-[5px] leading-[1] rounded-[50%] inline-block w-[25px]' />
                    </a>
                  </div>
                  <div className='ml-[15px] flex-1'>
                    <div className='inline'>Made changes at dinner on 14 of July at 07:00 PM.</div>
                  </div>
                  <div className='flex items-center'>
                    <div className='flex text-[#717171] border rounded px-3 py-1 ml-2 -mr-1'>
                      <a><Icon path={mdiHeartOutline} className='text-[#C2C2C2] mr-2 inline-block leading-[1] w-[20px]' /></a>
                      <div className=''>Like</div>
                    </div>
                    <div className='border rounded ml-2 text-[#1AB394]'>
                      <a><Icon path={mdiEmailOutline} className='w-[37px] py-[4px] px-2 inline-block ' /></a>
                    </div>
                  </div>
                </div>
                <div className='mt-[15px] ml-[55px] mr-[40px]'>
                  <div className='flex items-center ml-[33px]'>
                    <a><Icon path={mdiCheck} className='bg-[#E0FAF1] text-[#1AB394] p-[5px] leading-[1] rounded-[50%] inline-block w-[25px]' /></a>
                    <div className='inline-block ml-[10px]'>1 portion of fruit (160 g)</div>
                  </div>
                  <div className='flex items-center ml-[33px] mt-[15px]'>
                    <a><Icon path={mdiCheck} className='bg-[#E0FAF1] text-[#1AB394] p-[5px] leading-[1] rounded-[50%] inline-block w-[25px]' /></a>
                    <div className='inline-block ml-[10px]'>1/2 cup of soup, vegetable (126 g)</div>
                  </div>
                  <div className='flex items-center ml-[33px] mt-[15px]'>
                    <a><Icon path={mdiCheck} className='bg-[#E0FAF1] text-[#1AB394] p-[5px] leading-[1] rounded-[50%] inline-block w-[25px]' /></a>
                    <div className='inline-block ml-[10px]'>120 grams of meat or 120 grams of white fish or 100 grams of oily fish</div>
                  </div>
                  <div className='flex items-center ml-[33px] mt-[15px]'>
                    <a><Icon path={mdiCheck} className='bg-[#E0FAF1] text-[#1AB394] p-[5px] leading-[1] rounded-[50%] inline-block w-[25px]' /></a>
                    <div className='inline-block ml-[10px]'>1 tsp of oil, olive, salad or cooking (5 g)</div>
                  </div>
                  <div className='flex items-center ml-[33px] mt-[15px]'>
                    <a><Icon path={mdiClose} className='bg-[#FBA7AF] text-[#DB4965] p-[5px] leading-[1] rounded-[50%] inline-block w-[25px]' /></a>
                    <div className='inline-block ml-[10px] line-through text-[#AAAAAA]'>50 grams of mixed vegetables</div>
                  </div>
                  <div className='flex items-center ml-[33px] mt-[15px]'>
                    <a><Icon path={mdiClose} className='bg-[#FBA7AF] text-[#DB4965] p-[5px] leading-[1] rounded-[50%] inline-block w-[25px]' /></a>
                    <div className='inline-block ml-[10px] line-through text-[#AAAAAA]'>4 oz of pasta, plain, cooked (114 g) or 1/2 cup of rice, brown, cooked (98 g) or 1/2 cup of quinoa, cooked (93 g)</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='border-b-1 bg-[#FAFAFB] p-5'>
              <div className='flex items-center'>
                <div className='relative'>
                  <img src='/image/female_thumb.png' className='w-[45px] h-[45px] rounded-[50%] max-w-full' />
                </div>
                <a className='ml-[10px] text-[15px] flex-1 '>Example client</a>
                <div className='text-[14px]'>July 14</div>
              </div>
              <div className='mt-[10px]'>
                <div className='flex ml-[55px] items-start'>
                  <div className='text-[#fff] inline-block'>
                    <a>
                      <Icon path={mdiCheck} className='bg-[#1AB394] p-[5px] leading-[1] rounded-[50%] inline-block w-[25px]' />
                    </a>
                  </div>
                  <div className='ml-[15px] flex-1'>
                    <div className='inline'>Ate supper on 14 of July at 10:00 PM.</div>
                  </div>
                  <div className='flex items-center'>
                    <div className='flex text-[#717171] border rounded px-3 py-1 ml-2 -mr-1'>
                      <a><Icon path={mdiHeartOutline} className='text-[#C2C2C2] mr-2 inline-block leading-[1] w-[20px]' /></a>
                      <div className=''>Like</div>
                    </div>
                    <div className='border rounded ml-2 text-[#1AB394]'>
                      <a><Icon path={mdiEmailOutline} className='w-[37px] py-[4px] px-2 inline-block ' /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='border-b-1 bg-[#fff] p-5'>
              <div className='flex items-center'>
                <div className='relative'>
                  <img src='/image/female_thumb.png' className='w-[45px] h-[45px] rounded-[50%] max-w-full' />
                </div>
                <a className='ml-[10px] text-[15px] flex-1 '>Example client</a>
                <div className='text-[14px]'>July 14</div>
              </div>
              <div className='mt-[10px]'>
                <div className='flex ml-[55px] items-start'>
                  <div className='text-[#fff] inline-block'>
                    <a>
                      <Icon path={mdiCheck} className='bg-[#1AB394] p-[5px] leading-[1] rounded-[50%] inline-block w-[25px]' />
                    </a>
                  </div>
                  <div className='ml-[15px] flex-1'>
                    <div className='inline'>Ate supper on 14 of July at 10:00 PM.</div>
                  </div>
                  <div className='flex items-center'>
                    <div className='flex text-[#717171] border rounded px-3 py-1 ml-2 -mr-1'>
                      <a><Icon path={mdiHeartOutline} className='text-[#C2C2C2] mr-2 inline-block leading-[1] w-[20px]' /></a>
                      <div className=''>Like</div>
                    </div>
                    <div className='border rounded ml-2 text-[#1AB394]'>
                      <a><Icon path={mdiEmailOutline} className='w-[37px] py-[4px] px-2 inline-block ' /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='border-b-1 bg-[#FAFAFB] p-5'>
              <div className='flex items-center'>
                <div className='relative'>
                  <img src='/image/female_thumb.png' className='w-[45px] h-[45px] rounded-[50%] max-w-full' />
                </div>
                <a className='ml-[10px] text-[15px] flex-1 '>Example client</a>
                <div className='text-[14px]'>July 14</div>
              </div>
              <div className='mt-[10px]'>
                <div className='flex ml-[55px] items-start'>
                  <div className='text-[#fff] inline-block'>
                    <a>
                      <Icon path={mdiCheck} className='bg-[#1AB394] p-[5px] leading-[1] rounded-[50%] inline-block w-[25px]' />
                    </a>
                  </div>
                  <div className='ml-[15px] flex-1'>
                    <div className='inline'>Ate supper on 14 of July at 10:00 PM.</div>
                  </div>
                  <div className='flex items-center'>
                    <div className='flex text-[#717171] border rounded px-3 py-1 ml-2 -mr-1'>
                      <a><Icon path={mdiHeartOutline} className='text-[#C2C2C2] mr-2 inline-block leading-[1] w-[20px]' /></a>
                      <div className=''>Like</div>
                    </div>
                    <div className='border rounded ml-2 text-[#1AB394]'>
                      <a><Icon path={mdiEmailOutline} className='w-[37px] py-[4px] px-2 inline-block ' /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='border-b-1 bg-[#fff] p-5'>
              <div className='flex items-center'>
                <div className='relative'>
                  <img src='/image/female_thumb.png' className='w-[45px] h-[45px] rounded-[50%] max-w-full' />
                </div>
                <a className='ml-[10px] text-[15px] flex-1 '>Example client</a>
                <div className='text-[14px]'>July 14</div>
              </div>
              <div className='mt-[10px]'>
                <div className='flex ml-[55px] items-start'>
                  <div className='text-[#fff] inline-block'>
                    <a>
                      <Icon path={mdiCheck} className='bg-[#1AB394] p-[5px] leading-[1] rounded-[50%] inline-block w-[25px]' />
                    </a>
                  </div>
                  <div className='ml-[15px] flex-1'>
                    <div className='inline'>Ate supper on 14 of July at 10:00 PM.</div>
                  </div>
                  <div className='flex items-center'>
                    <div className='flex text-[#717171] border rounded px-3 py-1 ml-2 -mr-1'>
                      <a><Icon path={mdiHeartOutline} className='text-[#C2C2C2] mr-2 inline-block leading-[1] w-[20px]' /></a>
                      <div className=''>Like</div>
                    </div>
                    <div className='border rounded ml-2 text-[#1AB394]'>
                      <a><Icon path={mdiEmailOutline} className='w-[37px] py-[4px] px-2 inline-block ' /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='border-b-1 bg-[#FAFAFB] p-5'>
              <div className='flex items-center'>
                <div className='relative'>
                  <img src='/image/female_thumb.png' className='w-[45px] h-[45px] rounded-[50%] max-w-full' />
                </div>
                <a className='ml-[10px] text-[15px] flex-1 '>Example client</a>
                <div className='text-[14px]'>July 14</div>
              </div>
              <div className='mt-[10px]'>
                <div className='flex ml-[55px] items-start'>
                  <div className='text-[#fff] inline-block'>
                    <a>
                      <Icon path={mdiCheck} className='bg-[#1AB394] p-[5px] leading-[1] rounded-[50%] inline-block w-[25px]' />
                    </a>
                  </div>
                  <div className='ml-[15px] flex-1'>
                    <div className='inline'>Ate supper on 14 of July at 10:00 PM.</div>
                  </div>
                  <div className='flex items-center'>
                    <div className='flex text-[#717171] border rounded px-3 py-1 ml-2 -mr-1'>
                      <a><Icon path={mdiHeartOutline} className='text-[#C2C2C2] mr-2 inline-block leading-[1] w-[20px]' /></a>
                      <div className=''>Like</div>
                    </div>
                    <div className='border rounded ml-2 text-[#1AB394]'>
                      <a><Icon path={mdiEmailOutline} className='w-[37px] py-[4px] px-2 inline-block ' /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='border-b-1 bg-[#fff] p-5'>
              <div className='flex items-center'>
                <div className='relative'>
                  <img src='/image/female_thumb.png' className='w-[45px] h-[45px] rounded-[50%] max-w-full' />
                </div>
                <a className='ml-[10px] text-[15px] flex-1 '>Example client</a>
                <div className='text-[14px]'>July 14</div>
              </div>
              <div className='mt-[10px]'>
                <div className='flex ml-[55px] items-start'>
                  <div className='text-[#fff] inline-block'>
                    <a>
                      <Icon path={mdiCheck} className='bg-[#1AB394] p-[5px] leading-[1] rounded-[50%] inline-block w-[25px]' />
                    </a>
                  </div>
                  <div className='ml-[15px] flex-1'>
                    <div className='inline'>Ate supper on 14 of July at 10:00 PM.</div>
                  </div>
                  <div className='flex items-center'>
                    <div className='flex text-[#717171] border rounded px-3 py-1 ml-2 -mr-1'>
                      <a><Icon path={mdiHeartOutline} className='text-[#C2C2C2] mr-2 inline-block leading-[1] w-[20px]' /></a>
                      <div className=''>Like</div>
                    </div>
                    <div className='border rounded ml-2 text-[#1AB394]'>
                      <a><Icon path={mdiEmailOutline} className='w-[37px] py-[4px] px-2 inline-block ' /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[50%] lg:w-full bg-[#fff] rounded lg:order-1'>
            <div className='flex items-center px-5 pt-5 pb-4'>
              <div className='flex-grow'>
                <h4 className='text-[20px]'>Clients' status</h4>
                <div className='text-[12px] text-[#888888] opacity-[0.6]'>Check your clients' current status and progress over the last 7 days</div>
              </div>
            </div>
            <div className='p-5 pt-0'>
              <div className='flex'>
                <div className='flex flex-row w-full gap-[10px] sm:flex-wrap'>
                  <div className='w-1/3 sm:w-full'>
                    <div className='border border-[#EEEEEE] rounded h-full hover:border-[#D2D2D2]'>
                      <div className='px-[10px] pt-[3px] flex items-center leading-[45px]'>
                        <div className='text-[#fff] inline-block'>
                          <a>
                            <Icon path={mdiCheck} className='bg-[#1AB394] p-[5px] leading-[1] rounded-[50%] inline-block w-[25px]' />
                          </a>
                        </div>
                        <div className='text-[14px] ml-[10px] leading-[17px]'>Complying</div>
                      </div>
                      <div className='p-5 text-[40px] text-center pt-[10px] font-bold'>
                        <div>0</div>
                      </div>
                      <div className='border-t border-[#EEEEEE]'>
                        <div className='p-[10px] text-[#1AB394] inline-block w-1/2 text-center'>0</div>
                        <div className='p-[10px] text-[#DB4965] inline-block w-1/2 text-center border-l'>0</div>
                      </div>
                    </div>
                  </div>
                  <div className='w-1/3 sm:w-full'>
                    <div className='border border-[#EEEEEE] rounded h-full hover:border-[#D2D2D2]'>
                      <div className='px-[10px] pt-[3px] flex items-center leading-[45px]'>
                        <div className='text-[#fff] inline-block'>
                          <a>
                            <Icon path={mdiSwapHorizontal} className='bg-[#DB4965] p-[5px] leading-[1] rounded-[50%] inline-block w-[25px]' />
                          </a>
                        </div>
                        <div className='text-[14px] ml-[10px] leading-[17px]'>Struggling</div>
                      </div>
                      <div className='p-5 text-[40px] text-center pt-[10px] font-bold'>
                        <div>0</div>
                      </div>
                      <div className='border-t border-[#EEEEEE]'>
                        <div className='p-[10px] text-[#1AB394] inline-block w-1/2 text-center'>0</div>
                        <div className='p-[10px] text-[#DB4965] inline-block w-1/2 text-center border-l'>0</div>
                      </div>
                    </div>
                  </div>
                  <div className='w-1/3 sm:w-full'>
                    <div className='border border-[#EEEEEE] rounded h-full hover:border-[#D2D2D2]'>
                      <div className='px-[10px] pt-[3px] flex items-center leading-[45px]'>
                        <div className='text-[#fff] inline-block'>
                          <a>
                            <Icon path={mdiHelp} className='bg-[#DDDDDD] p-[5px] leading-[1] rounded-[50%] inline-block w-[25px]' />
                          </a>
                        </div>
                        <div className='text-[14px] ml-[10px] leading-[17px]'>No information</div>
                      </div>
                      <div className='p-5 text-[40px] text-center pt-[10px] font-bold'>
                        <div>1</div>
                      </div>
                      <div className='border-t border-[#EEEEEE]'>
                        <div className='p-[10px] text-[#1AB394] inline-block w-1/2 text-center'>0</div>
                        <div className='p-[10px] text-[#DB4965] inline-block w-1/2 text-center border-l'>0</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-4'>
                <h3 className='mt-[5px] text-[16px] font-[600]'>All clients</h3>
                <div>
                  <div className='flex w-full'>
                    <div className='w-1/2 sm:w-full  '>
                      <div className='mt-[15px] border border-[#EEEEEE] rounded flex-col flex h-full'>
                        <div className='p-[10px] grow items-center flex'>
                          <div className='relative'>
                            <img src='/image/female_thumb.png' className='w-[45px] h-[45px] rounded-[50%] max-w-full' />
                          </div>
                          <div className='ml-[10px] grow'>
                            <a className='font-[600] text-[15px] '>Example client</a>
                            <div className='text-[12px] font-[300]'>No information</div>
                          </div>
                          <div className='border rounded ml-2 text-[#1AB394]'>
                            <a><Icon path={mdiEmailOutline} className='w-[37px] py-[4px] px-2 inline-block ' /></a>
                          </div>
                        </div>
                        <div className='mt-[5px] flex'>
                          <div className='pb-[5px] grow inline-block text-center'>
                            <div>Thu</div>
                            <div className='text-[#fff] inline-block'>
                              <a>
                                <Icon path={mdiHelp} className='bg-[#DDDDDD] p-[5px] leading-[1] rounded-[50%] inline-block w-[20px]' />
                              </a>
                            </div>
                          </div>
                          <div className='pb-[5px] grow inline-block text-center bg-[#FAFAFA]'>
                            <div>Fri</div>
                            <div className='text-[#fff] inline-block'>
                              <a>
                                <Icon path={mdiHelp} className='bg-[#DDDDDD] p-[5px] leading-[1] rounded-[50%] inline-block w-[20px]' />
                              </a>
                            </div>
                          </div>
                          <div className='pb-[5px] grow inline-block text-center'>
                            <div>Sat</div>
                            <div className='text-[#fff] inline-block'>
                              <a>
                                <Icon path={mdiHelp} className='bg-[#DDDDDD] p-[5px] leading-[1] rounded-[50%] inline-block w-[20px]' />
                              </a>
                            </div>
                          </div>
                          <div className='pb-[5px] grow inline-block text-center bg-[#FAFAFA]'>
                            <div>Sun</div>
                            <div className='text-[#fff] inline-block'>
                              <a>
                                <Icon path={mdiHelp} className='bg-[#DDDDDD] p-[5px] leading-[1] rounded-[50%] inline-block w-[20px]' />
                              </a>
                            </div>
                          </div>
                          <div className='pb-[5px] grow inline-block text-center'>
                            <div>Mon</div>
                            <div className='text-[#fff] inline-block'>
                              <a>
                                <Icon path={mdiHelp} className='bg-[#DDDDDD] p-[5px] leading-[1] rounded-[50%] inline-block w-[20px]' />
                              </a>
                            </div>
                          </div>
                          <div className='pb-[5px] grow inline-block text-center bg-[#FAFAFA]'>
                            <div>The</div>
                            <div className='text-[#fff] inline-block'>
                              <a>
                                <Icon path={mdiHelp} className='bg-[#DDDDDD] p-[5px] leading-[1] rounded-[50%] inline-block w-[20px]' />
                              </a>
                            </div>
                          </div>
                          <div className='pb-[5px] grow inline-block text-center'>
                            <div>Wed</div>
                            <div className='text-[#fff] inline-block'>
                              <a>
                                <Icon path={mdiHelp} className='bg-[#DDDDDD] p-[5px] leading-[1] rounded-[50%] inline-block w-[20px]' />
                              </a>
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
      </MainLayout>
    </>
  )
}
