import React from 'react'

const SheduleAppointment = () => {
    return (
        <div className='card-shadow bg-white mt-0 mb-[25px] p-0'>
            <div className='flex items-center p-[20px_20px_15px_20px]'>
                <div className='flex-grow'>
                    <h4 className='text-xl font-normal leading-[1.1] m-0 flex'>Next appointment <small className='text-[#DB4965] leading-[1] text-[0.6em] font-light ml-[5px] mr-0 mt-auto mb-0.5'>&#40;Delayed&#41;</small></h4>
                    <div className='font-[100] text-[12px] text-[#888888] opacity-[0.7]'>Your appointment should have started 2 hours ago</div>
                </div>
                <div className='text-[1.1em] font-[300]'>Today <span>at <span className='text-[1.2em] font-[400]'>4:04 PM</span></span></div>
            </div>
            <div className='pt-[5px] p-[20px]'></div>
        </div>
    )
}

export default SheduleAppointment