import MainLayout from '@/components/Admin/MainLayout'
import PersonalInformation from '@/components/Admin/professionals/PersonalInformation'
import ProfessionalInformation from '@/components/Admin/professionals/ProfessionalInformation'
import Secretaries from '@/components/Admin/professionals/Secretaries'
import Services from '@/components/Admin/professionals/Services'
import Workplaces from '@/components/Admin/professionals/Workplaces'
import React, { useState } from 'react'

function ProfessionalProfile() {
    const [formData, setFormData] = useState({
        fullName: '',
        dateOfBirth: '',
        gender: '',
        zipcode: '',
        phoneNumber: '',
        profession: '',
        professionCardNumber: '',
        country: '',
        email: '',
        image: ''
    });
    return (
        <MainLayout>
            <div className='pt-[25px] pb-[125px] px-0'>
                <div className='mx-[-15px] w-auto my-0 flex flex-wrap m-0 p-0'>
                    <ProfessionalInformation formData={formData}
                        setFormData={setFormData} />
                    <PersonalInformation formData={formData}
                        setFormData={setFormData} />
                </div>
                <div>
                    <Workplaces />
                </div>
                <div>
                    <Services />
                </div>
                <div>
                    <Secretaries />
                </div>

            </div>
        </MainLayout>
    )
}

export default ProfessionalProfile
