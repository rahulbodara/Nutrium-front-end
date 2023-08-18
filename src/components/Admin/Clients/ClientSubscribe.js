import React from 'react'
import Icon from '@mdi/react'

import { mdiInformationOutline } from '@mdi/js'
const ClientSubscribe = () => {
    return (
        <div className='rounded-[5px] overflow-hidden bg-white flex shadow-box1'>
            <div className='w-[54px] flex items-center justify-center bg-[#EA9F77] p-[15px] text-white'>
                <Icon path={mdiInformationOutline} size={1} />
            </div>
            <div className='px-[35px] flex-1 2lg:block flex items-center justify-between py-[20px]'>
                <div className='basis-[80%]'>
                    <h3 className='text-[20px] leading-[20px] text-[#EA9F77] mb-2.5'>It's not possible to edit the current client's information</h3>
                    <span className='text-[12px] text-[#888888]'>
                        You can't edit any client because your subscription expired.
                    </span>
                </div>
                <button className='text-white basis-[20%] active:shadow-innershdaow py-[6px] px-[12px] hover:bg-[#e8966a] bg-[#EA9F77] text-[14px] border border-[#EA9F77] rounded-[3px] mt-0 2lg:mt-[10px] 2lg:w-full w-auto'>
                    Subscribe now
                </button>
            </div>
        </div>
    )
}

export default ClientSubscribe
