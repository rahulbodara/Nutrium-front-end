import ClientDetail from '@/components/Admin/Clients/ClientDetail'
import ClientSubscribe from '@/components/Admin/Clients/ClientSubscribe'
import Steps from '@/components/Admin/Clients/Information/Steps'
import MainLayout from '@/components/Admin/MainLayout'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { mdiAndroid, mdiApple, mdiBlockHelper, mdiCheck, mdiCheckAll, mdiClose, mdiCloseCircleOutline, mdiEmail, mdiInformationBoxOutline, mdiInformationOutline, mdiPencil, mdiRefresh } from '@mdi/js'
import Icon from '@mdi/react'
import React, { Fragment } from 'react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Deliverables() {
  return (
    <div>
      <MainLayout head={"Invite a friend"} text={"Invite your friends and get discounts on your subscription"}>
        <div className="mt-[-20px]">
          <ClientDetail />
          <div className="pt-[25px] pb-[25px]">
            <ClientSubscribe />
            <div className="mt-[25px]">
              <Steps />
            </div>
          </div>
        </div>
        <div className='2lg:block grid grid-cols-12 mt-[25px] gap-[30px]'>
          <div className='col-span-5'>
            <div className='bg-[#FFFFFF] mb-[25px] mt-0 p-0 shadow-[(0_2px_2px_0_rgba(144_144_144_0.14))_(0_3px_1px_-2px_transparent)_(0_1px_5px_0-rgba(145_145_145_0.12))] rounded-[5px]'>
              <div className='p-[20px_20px_15px_20px]'>
                <h4 className='m-0 text-[20px] font-[400] leading-[1.1]'>Mobile app for your client</h4>
                <div className='font-[100] text-[12px] text-[#888888]'>Invite your client to join the mobile app through an email or text</div>
              </div>
              <div className='p-5 pt-0'>
                <div className='flex text-center'>
                  <a href='' className='whitespace-normal grow p-[10px] border border-[#FFFFFF] rounded-[3px] inline-block mb-0 font-[400] text-center align-middle text-[14px] leading-[1.42857143] hover:border-[#EEEEEE]'>
                    <Icon path={mdiAndroid} size={1.8} className='leading-[42px] text-[#888888] mb-[5px] inline-block align-middle text-[42px]' />
                    <h3 className='font-[400] mb-[5px] mt-[5px]'>Android</h3>
                    <small className='m-auto block font-[100] max-w-[173px] text-[80%] text-[#676A6C]'>Available for free on Google Play</small>
                  </a>
                  <a href='' className='whitespace-normal grow p-[10px] border border-[#FFFFFF] rounded-[3px] inline-block mb-0 font-[400] text-center align-middle text-[14px] leading-[1.42857143] hover:border-[#EEEEEE]'>
                    <Icon path={mdiApple} size={1.8} className='leading-[42px] text-[#888888] mb-[5px] inline-block align-middle text-[42px]' />
                    <h3 className='font-[400] mb-[5px] mt-[5px]'>iOS</h3>
                    <small className='m-auto block font-[100] max-w-[173px] text-[80%] text-[#676A6C]'>Available for free on App Store</small>
                  </a>
                </div>
                <div className='mt-5'>
                  <div className='flex p-0 min-w-0'>
                    <div className='min-w-[160px] max-w-[160px] basis-[160px] flex border border-[#EEEEEE] bg-[#FAFAFB] p-[5px_10px_5px_10px] text-[1.1em] items-center z-[1]'>Email</div>
                    <div className='border-l-0 grow-[3] border border-[#EEEEEE] relative flex p-0 min-w-0 '>
                      {/* <input placeholder='e1766604@patients.nutrium.com' className='border-0 h-full self-center p-[10px] min-h-[38px] grow overflow-hidden text-ellipsis' /> */}
                      <span className='grow self-center inline-block align-middle w-auto'>
                        <div></div>
                        <form className='mb-0'>
                          <div className='w-full m-0 h-full whitespace-nowrap leading-5 inline-block align-middle'>
                            <div>
                              <div className='relative w-full align-middle inline-block whitespace-normal'>
                                <input placeholder='e1766604@patients.nutrium.com' className='pr-[24px] text-[14px] border-0 h-full w-full min-h-[38px] p-[10px] inline-block align-middle bg-[#FFFFFF] rounded-[1px]' />
                                <span className='absolute w-[13px] h-[13px] opacity-[0.6] z-[100] top-[43%] right-[12px] mt-[-6px] hidden'>
                                  <Icon path={mdiCloseCircleOutline} size={0.7} />
                                </span>
                              </div>
                            </div>
                          </div>
                        </form>
                      </span>
                      <div className='text-[#1AB394] flex p-[10px] items-center align-middle bg-[#FAFAFB] border-l border-[#EEEEEE]'>
                        <Icon path={mdiPencil} size={0.8} />
                      </div>
                      <div className='text-[#1AB394] hidden flex p-[10px] items-center align-middle bg-[#FAFAFB] border-l border-[#EEEEEE]'>
                        <Icon path={mdiCheck} size={0.8} />
                      </div>
                      <div className='text-[#DB4965] hidden flex p-[10px] items-center align-middle bg-[#FAFAFB] border-l border-[#EEEEEE]'>
                        <Icon path={mdiClose} size={0.8} />
                      </div>
                    </div>
                  </div>
                  <div className='flex p-0 min-w-0 mt-[7px]'>
                    <div className='min-w-[160px] max-w-[160px] basis-[160px] flex border border-[#EEEEEE] bg-[#FAFAFB] p-[5px_10px_5px_10px] text-[1.1em] items-center z-[1]'>Password</div>
                    <div className='border-l-0 grow-[3] border border-[#EEEEEE] relative flex p-0 min-w-0 '>
                      {/* <input placeholder='e1766604@patients.nutrium.com' className='border-0 h-full self-center p-[10px] min-h-[38px] grow overflow-hidden text-ellipsis' /> */}
                      <span className='grow self-center inline-block align-middle w-auto'>
                        <form className='mb-0'>
                          <div className='w-full m-0 h-full whitespace-nowrap leading-5 inline-block align-middle'>
                            <div>
                              <div className='relative w-full align-middle inline-block whitespace-normal'>
                                <input placeholder='Generate a password' className='pr-[24px] text-[14px] border-0 h-full w-full min-h-[38px] p-[10px] opacity-[0.5] inline-block align-middle bg-[#FFFFFF] rounded-[1px]' />
                              </div>
                            </div>
                          </div>
                        </form>
                      </span>
                      <div className='text-[#1AB394] flex p-[10px] items-center align-middle bg-[#FAFAFB] border-l border-[#EEEEEE]'>
                        <Icon path={mdiRefresh} size={0.8} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mt-5 w-full m-[0] relative inline-block'>
                  <a className=' '>
                    <Menu as="div" className="relative inline-block text-left w-full">
                      <div>
                        <Menu.Button className="inline-flex w-full justify-between gap-x-1.5 bg-white px-3 py-2 text-sm text-[#1AB394] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                          <div></div>
                          Send access instructions to your client
                          <ChevronDownIcon className="-mr-1 h-5 w-5 text-[#1AB394]" aria-hidden="true" />
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
                          <div className="p-[0_0_0_4px] m-[4px_4px_4px_0] overflow-hidden">
                            <div className='p-[5px] bg-[#FFFFFF]'>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active ? 'bg-gray-100 text-[#D2D2D2]' : 'text-[#D2D2D2]',
                                      'p-[5px_7px] text-sm flex items-center m-0'
                                    )}
                                  >
                                    <Icon path={mdiEmail} size={0.8} className='mr-[10px] inline-block align-middle leading-[1]' />
                                    Send by email
                                  </a>
                                )}
                              </Menu.Item>
                            </div>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </a>
                </div>
              </div>
            </div>
            <div className='bg-[#FFFFFF] mb-[25px] mt-0 p-0 shadow-[(0_2px_2px_0_rgba(144_144_144_0.14))_(0_3px_1px_-2px_transparent)_(0_1px_5px_0-rgba(145_145_145_0.12))] rounded-[5px]'>
              <div className='p-[20px_20px_15px_20px]'>
                <h4 className='m-0 text-[20px] font-[400] leading-[1.1]'>Client's mobile app preferences</h4>
                <div className='font-[100] text-[12px] text-[#888888]'>Manage your clients' mobile app preferences</div>
              </div>
              <div className='p-5 pt-0'>
                <div className=''>
                  <div className='col-span-12'>
                    <div className='flex p-0 min-w-0'>
                      <div className='min-w-[270px] basis-[270px] flex border border-[#EEEEEE] bg-[#FAFAFB] p-[5px_10px_5px_10px] text-[1.1em] items-center z-[1]'>Access to the mobile app</div>
                      <div className='border-l-0 grow-[3] border border-[#EEEEEE] flex p-0 min-w-0'>
                        {/* <div className='m-[0_-1px_-1px] p-[9px_10px_12px_11px] border-0 h-full self-center min-h-[38px] flex items-center'>Enabled</div> */}
                        <div className='text-[#1AB394] min-w-[213px]'>
                          <Menu as="div" className="relative inline-block text-left w-full">
                            <div>
                              <Menu.Button className="inline-flex min-h-[39px] w-full justify-between gap-x-1.5 bg-white px-3 py-2 text-sm text-[#676A6C] shadow-sm ring-1 ring-gray-300 hover:bg-gray-50">
                                Enabled
                                <ChevronDownIcon className="-mr-1 h-5 w-5 text-[#1AB394]" aria-hidden="true" />
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
                                <div className="p-[0_0_0_4px] m-[4px_4px_4px_0] overflow-hidden">
                                  <div className='bg-[#FFFFFF]'>
                                    <Menu.Item>
                                      {({ active }) => (
                                        <a
                                          href="#"
                                          className={classNames(
                                            active ? 'bg-gray-100 text-[#676A6C]' : 'text-[#676A6C]',
                                            'p-[5px_7px] text-sm flex items-center m-0'
                                          )}
                                        >
                                          {/* <Icon path={mdiEmail} size={0.8} className='mr-[10px] inline-block align-middle leading-[1]' /> */}
                                          Enabled
                                        </a>
                                      )}
                                    </Menu.Item>
                                    <Menu.Item>
                                      {({ active }) => (
                                        <a
                                          href="#"
                                          className={classNames(
                                            active ? 'bg-gray-100 text-[#676A6C]' : 'text-[#676A6C]',
                                            'p-[5px_7px] text-sm flex items-center m-0'
                                          )}
                                        >
                                          {/* <Icon path={mdiEmail} size={0.8} className='mr-[10px] inline-block align-middle leading-[1]' /> */}
                                          Disabled
                                        </a>
                                      )}
                                    </Menu.Item>
                                  </div>
                                </div>
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        </div>
                        <div className='text-[#676A6C] flex p-[10px] items-center align-middle bg-[#FAFAFB] border-l border-[#EEEEEE]'>
                          <Icon path={mdiCheckAll} size={0.8} />
                        </div>
                        <div className='text-[#676A6C] flex p-[10px] items-center align-middle bg-[#FAFAFB] border-l border-[#EEEEEE]'>
                          <Icon path={mdiBlockHelper} size={0.7} />
                        </div>
                        <div className='text-[#676A6C] flex p-[10px] items-center align-middle bg-[#FAFAFB] border-l border-[#EEEEEE]'>
                          <Icon path={mdiInformationOutline} size={0.8} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-7'>dd</div>
        </div>
      </MainLayout>
    </div>
  )
}

export default Deliverables
