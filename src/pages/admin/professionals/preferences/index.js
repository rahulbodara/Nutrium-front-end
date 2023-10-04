import MainLayout from '@/components/Admin/MainLayout'
import ClosableSelect from '@/components/Admin/common/ClosableSelect'
import EditableInput from '@/components/Admin/common/EditableInput'
import React from 'react'
import countries from 'countries.json';
const professionOptions = [
    {
        id: 1,
        name: 'Nutritionist',
        value: 'Nutritionist',
    },
    {
        id: 2,
        name: 'Dietitian',
        value: 'Dietitian',
    },
    {
        id: 3,
        name: 'Nutritional Therapist',
        value: 'Nutritional Therapist',
    },
    {
        id: 4,
        name: 'Health Coach',
        value: 'Health Coach',
    },
    {
        id: 5,
        name: 'Student',
        value: 'Student',
    },
    {
        id: 6,
        name: 'India',
        value: 'India',
    },
];
const Preferences = () => {
    return (


        <>
            <MainLayout head={"Professional's preferences"} text={"Check and update your preferences"} >
                <div className='pt-[25px]'>

                <div className="h-full bg-white card-shadow   rounded-[5px] mb-[25px]">
                    <div className="widget-header p-[20px_20px_15px_20px]">
                        <h4 className="text-[20px] leading-[1.1]">
                        System Preferences
                        </h4>
                        <div className="text-[12px] text-[#888888] opacity-[0.6]">
                        Configure the system according to your preferences
                        </div>
                    </div>
                    <div className="multiple-fields pt-0 p-[20px]">
                        <ClosableSelect
                            labelWidth="basis-[300px] min-w-[300px]"
                            searchOption={false}
                            option={professionOptions}
                            closable={false}
                            className="mt-0"
                            label="Time zone"
                            initialValue={''}
                            // onChange={(value) => setSingleValue({ ["profession"]: value })}
                            // handleSubmit={handleSubmit}
                            name={"profession"} />
                         <ClosableSelect
                            labelWidth="basis-[300px] min-w-[300px]"
                            searchOption={false}
                            option={professionOptions}
                            closable={false}
                            className="mt-[7px]"
                            label="Language"
                            initialValue={''}
                            // onChange={(value) => setSingleValue({ ["profession"]: value })}
                            // handleSubmit={handleSubmit}
                            name={"profession"} />
                         <ClosableSelect
                            labelWidth="basis-[300px] min-w-[300px]"
                            searchOption={false}
                            option={professionOptions}
                            closable={false}
                            className="mt-[7px]"
                            label="Weight unit"
                            initialValue={''}
                            // onChange={(value) => setSingleValue({ ["profession"]: value })}
                            // handleSubmit={handleSubmit}
                            name={"profession"} />
                         <ClosableSelect
                            labelWidth="basis-[300px] min-w-[300px]"
                            searchOption={false}
                            option={professionOptions}
                            closable={false}
                            className="mt-[7px]"
                            label="Length unit"
                            initialValue={''}
                            // onChange={(value) => setSingleValue({ ["profession"]: value })}
                            // handleSubmit={handleSubmit}
                            name={"profession"} />
                         <ClosableSelect
                            labelWidth="basis-[300px] min-w-[300px]"
                            searchOption={false}
                            option={professionOptions}
                            closable={false}
                            className="mt-[7px]"
                            label="Energy unit"
                            initialValue={''}
                            // onChange={(value) => setSingleValue({ ["profession"]: value })}
                            // handleSubmit={handleSubmit}
                            name={"profession"} />
                             <ClosableSelect
                            labelWidth="basis-[300px] min-w-[300px]"
                            searchOption={false}
                            option={professionOptions}
                            closable={false}
                            className="mt-[7px]"
                            label="Volume unit"
                            initialValue={''}
                            // onChange={(value) => setSingleValue({ ["profession"]: value })}
                            // handleSubmit={handleSubmit}
                            name={"profession"} />
                             <ClosableSelect
                            labelWidth="basis-[300px] min-w-[300px]"
                            searchOption={false}
                            option={professionOptions}
                            closable={false}
                            className="mt-[7px]"
                            label="Distance unit"
                            initialValue={''}
                            // onChange={(value) => setSingleValue({ ["profession"]: value })}
                            // handleSubmit={handleSubmit}
                            name={"profession"} />
                             <ClosableSelect
                            labelWidth="basis-[300px] min-w-[300px]"
                            searchOption={false}
                            option={professionOptions}
                            closable={false}
                            className="mt-[7px]"
                            label="Statistic measure"
                            initialValue={''}
                            // onChange={(value) => setSingleValue({ ["profession"]: value })}
                            // handleSubmit={handleSubmit}
                            name={"profession"} />
                        
                    </div>
                </div>
                <div className="h-full bg-white card-shadow   rounded-[5px] mb-[25px]">
                    <div className="widget-header p-[20px_20px_15px_20px]">
                        <h4 className="text-[20px] leading-[1.1]">
                        Calendar settings
                        </h4>
                        <div className="text-[12px] text-[#888888] opacity-[0.6]">
                        Check and change your calendar settings
                        </div>
                    </div>
                    <div className="multiple-fields pt-0 p-[20px]">
                        <ClosableSelect
                            labelWidth="basis-[300px] min-w-[300px]"
                            searchOption={false}
                            option={professionOptions}
                            closable={false}
                            className="mt-0"
                            label="Birthday System"
                            initialValue={''}
                            // onChange={(value) => setSingleValue({ ["profession"]: value })}
                            // handleSubmit={handleSubmit}
                            name={"profession"} />
                         <ClosableSelect
                            labelWidth="basis-[300px] min-w-[300px]"
                            searchOption={false}
                            option={professionOptions}
                            closable={false}
                            className="mt-[7px]"
                            label="Appointment request system"
                            initialValue={''}
                            // onChange={(value) => setSingleValue({ ["profession"]: value })}
                            // handleSubmit={handleSubmit}
                            name={"profession"} />
                        
                        
                    </div>
                </div>
                <div className="h-full bg-white card-shadow   rounded-[5px] mb-[25px]">
                    <div className="widget-header p-[20px_20px_15px_20px]">
                        <h4 className="text-[20px] leading-[1.1]">
                        Presets
                        </h4>
                        <div className="text-[12px] text-[#888888] opacity-[0.6]">
                        Check and update the presets about your clients's preferences
                        </div>
                    </div>
                    <div className="multiple-fields pt-0 p-[20px]">
                        <ClosableSelect
                            labelWidth="basis-[300px] min-w-[300px]"
                            searchOption={false}
                            option={professionOptions}
                            closable={false}
                            className="mt-0"
                            label="Birthday System"
                            initialValue={''}
                            // onChange={(value) => setSingleValue({ ["profession"]: value })}
                            // handleSubmit={handleSubmit}
                            name={"profession"} />
                         <ClosableSelect
                            labelWidth="basis-[300px] min-w-[300px]"
                            searchOption={false}
                            option={professionOptions}
                            closable={false}
                            className="mt-[7px]"
                            label="Appointment request system"
                            initialValue={''}
                            // onChange={(value) => setSingleValue({ ["profession"]: value })}
                            // handleSubmit={handleSubmit}
                            name={"profession"} />
                        
                        
                    </div>
                </div>
                </div>
            </MainLayout>
        </>


    )
}

export default Preferences
