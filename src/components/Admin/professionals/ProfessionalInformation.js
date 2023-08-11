import Image from 'next/image'
import React from 'react'
import ClosableSelect from '../common/ClosableSelect'
import EditableInput from '../common/EditableInput'
import Icon from '@mdi/react'
import { mdiCamera } from '@mdi/js'

function ProfessionalInformation() {

    const professionOptions = [
        {
            id: 1,
            option: 'Nutritionist',
            value: 'Nutritionist'
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
        <div className='px-[15px] py-0  p-0 w-2/3 2lg:w-full relative min-h-[1px]'>
            <div className='h-full bg-white card-shadow  rounded-[5px] mb-[25px]'>
                <div className="widget-header p-[20px_20px_15px_20px]">
                    <h4 className='text-[20px] leading-[1.1]'>Professional information</h4>
                    <div className='text-[12px] text-[#888888] opacity-[0.6]'>Check or change your professional information</div>
                </div>
                <div className="widget-content p-[0_20px_20px] flex flex-col">
                    <div className="-mx-[15px] flex flex-wrap">
                        <div className='w-1/3 pl-[15px] pr-[5px] lg:w-full lg:mb-[30px]'>
                            <div className='flex justify-center h-[130px] relative'>
                                <img src="/image/user.png" className='w-[130px] h-[130px] rounded-full' alt="" />
                                <div className='overlay hover:opacity-100 hover:cursor-pointer w-[130px] absolute h-[130px] bg-[rgba(0,0,0,0.3)] text-center flex items-center justify-center opacity-0 rounded-[50%]'>
                                    <Icon path={mdiCamera} color='#ffffff' size="50px" />
                                </div>
                            </div>
                            <div className='mt-[20px]'>
                                <h2 className='cursor-pointer min-h-[unset] border-b-[1px] border-dashed border-[#DDDDDD] overflow-hidden mt-[15px] mb-[5px] text-ellipsis opacity-[0.6] flex items-center justify-center text-center leading-[1.4] text-xl'>
                                    <span className='self-center cursor-pointer'>Brijesh Anghan</span>
                                </h2>
                            </div>
                        </div>
                        <div className='w-2/3 px-[15px] lg:w-full'>
                            <div className='multiple-fields'>
                                <ClosableSelect labelWidth="basis-[240px] min-w-[240px]" searchOption={false} option={professionOptions} closable={false} className="mt-0" label="Profession" />
                                <EditableInput labelWidth="basis-[240px] min-w-[240px]" label="Professional card number" />
                                <ClosableSelect labelWidth="basis-[240px] min-w-[240px]" option={professionOptions} searchOption={true} closable={false} className="mt-[7px]" label="Country of residence" />
                                <EditableInput labelWidth="basis-[240px] min-w-[240px]" label="Email" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfessionalInformation
