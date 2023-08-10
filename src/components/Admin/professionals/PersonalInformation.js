import { mdiDotsVertical } from '@mdi/js';
import Icon from '@mdi/react';
import React from 'react';
import DateInput from '../common/DateInput';
import ClosableSelect from '../common/ClosableSelect';
import EditableInput from '../common/EditableInput';
import MobileInput from '../common/MobileInput';

function PersonalInformation() {
    const genderOption = [
        {
            id:1,
            option:'Male',
            value:'Male'
        },
        {
            id:2,
            option:'Female',
            value:'Female'
        },
        {
            id:3,
            option:'Other',
            value:'Other'
        },
    ];
    return (
        <div className='w-1/3 px-[15px]'>
            <div className='bg-white card-shadow h-full'>
                <div className="widget-header p-[20px_20px_15px_20px]">
                    <div className="flex items-center">
                        <div className='flex-grow'>
                            <h4 className='text-[20px] font-[400] leading-[1.1]'>Personal information</h4>
                        </div>
                        <div>
                            <div className='relative inline-block align-middle'>
                                <Icon path={mdiDotsVertical} size="24px" className='hover:border border-[#eeeeee] flex cursor-pointer rounded-[5px] items-center whitespace-nowrap' />
                            </div>
                        </div>
                    </div>
                    <div className='font-[100] text-[12px] text-[#888888] opacity-[0.6]'>View or change your personal information</div>
                </div>
                <div className='p-[20px] pt-0'>
                    <div>
                        <DateInput  label="Birthdate" labelWidth = "basis-[160px] min-w-[160px]"  closable={false} />
                    </div>
                    <div>
                    <ClosableSelect labelWidth = "basis-[160px] min-w-[160px]"  searchOption={false} option={genderOption} closable={false} className="mt-[7px]" label="Gender" />
                    </div>
                    <div>
                    <EditableInput labelWidth = "basis-[160px] min-w-[160px]"  label="Zip code" />
                    </div>
                    <div>
                        <MobileInput labelWidth = "basis-[160px] min-w-[160px]"  label="Mobile phone" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonalInformation;
