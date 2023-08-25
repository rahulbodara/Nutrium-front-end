import React from 'react'
 import NewClientsChart from "../Clients/NewClientsChart"

const GeneralInfo = () => {
  return (
    <div className='-mx-[15px] row'>
      <div className='w-1/2 px-[15px] float-left'>
        <div>
          <div className='rounded-[5px] bg-white shadow-[0_2px_2px_0_rgba(144,144,144,0.14),0_3px_1px_-2px_transparent,0_1px_5px_0_rgba(145,145,145,0.12)] mt-0 mb-[25px] p-0'>
            <div className='p-[20px] pb-[15px]'>
              <div className='leading-[1.1] text-[20px]'>General information</div>
              <div className='text-[#888888] text-[12px] opacity-[0.8]'>Check information about appointments here</div>
            </div>
            <div className='p-[20px] pt-0'>
                <ul>
                  <li>
                    <h2 className='text-[24px] font-[100] opacity-[0.8]'>2 of 2</h2>
                    <div className='table w-full'>
                      <div className='font-[100] py-[3px] table-cell align-middle text-[0.85em]'>Appointments performed this week</div>
                    </div>
                    <div>
                      <div className='h-[5px] mt-[5px] overflow-hidden bg-[#f5f5f5] rounded-[4px]'>
                        <div className='w-full h-[5px] mb-[5px] bg-[#1ab394] float-left text-xs leading-5 text-white text-center transition-[width] duration-[0.6s] ease-[ease]'></div>
                      </div>
                    </div>
                  </li>
                  <li className='mt-[15px]'>
                    <h2 className='text-[24px] font-[100] opacity-[0.8]'>7.0</h2>
                    <div className='table w-full'>
                      <div className='font-[100] py-[3px] table-cell align-middle text-[0.85em]'>Average appointments per client</div>
                    </div>
                    
                  </li>
                  <li className='mt-[15px]'>
                    <h2 className='text-[24px] font-[100] opacity-[0.8]'>100%</h2>
                    <div className='table w-full'>
                      <div className='font-[100] py-[3px] table-cell align-middle text-[0.85em]'>Of clients with more than one appointment</div>
                    </div>
                    <div>
                      <div className='h-[5px] mt-[5px] overflow-hidden bg-[#f5f5f5] rounded-[4px]'>
                        <div className='w-full opacity-[0.7] h-[5px] mb-[5px] bg-[#1ab394] float-left text-xs leading-5 text-white text-center transition-[width] duration-[0.6s] ease-[ease]'></div>
                      </div>
                    </div>
                  </li>
                </ul>
            </div>

          </div>
        </div>
      </div>
      <div className='w-1/2 px-[15px] float-left'>
      <div>
          <div className='rounded-[5px] bg-white shadow-[0_2px_2px_0_rgba(144,144,144,0.14),0_3px_1px_-2px_transparent,0_1px_5px_0_rgba(145,145,145,0.12)] mt-0 mb-[25px] p-0'>
            <div className='p-[20px] pb-[15px]'>
              <div className='leading-[1.1] text-[20px]'>Volume of appointments</div>
              <div className='text-[#888888] text-[12px] opacity-[0.8]'>Check volume of appointments over time</div>
            </div>
            <div className='p-[20px] pt-0 h-[216.86px]'>
                <NewClientsChart height={80} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GeneralInfo