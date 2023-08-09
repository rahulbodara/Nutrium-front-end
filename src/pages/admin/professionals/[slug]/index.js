import MainLayout from '@/components/Admin/MainLayout'
import PersonalInformation from '@/components/Admin/professionals/PersonalInformation'
import ProfessionalInformation from '@/components/Admin/professionals/ProfessionalInformation'
import React from 'react'

function ProfessionalProfile() {
    return (
        <MainLayout>
            <div className='pt-[25px] pb-[125px] px-0'>
                <div className='mx-[-15px] w-auto my-0 flex flex-wrap m-0 p-0'>
                    <ProfessionalInformation />
                    <PersonalInformation />
                </div>
            </div>
        </MainLayout>
    )
}

export default ProfessionalProfile
