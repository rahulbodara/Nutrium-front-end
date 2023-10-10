import MainLayout from '@/components/Admin/MainLayout'
import ClosableSelect from '@/components/Admin/common/ClosableSelect'
import EditableInput from '@/components/Admin/common/EditableInput'
import React, { useState } from 'react'
import countries from 'countries.json';
import FieldSelect from '@/components/Admin/common/FieldSelect';
import EditablefluidModal from '@/components/Admin/Profile/EditablefluidModal';
import AddTag from '@/components/Admin/Profile/preferences/AddTag';
import EditableTextarea from '@/components/Admin/common/EditableTextarea';
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

const appointmentInfo = [
    {
        name: 'Reason for appointment',
        dis: 'What is your reason for this appointment?'
    },
    {
        name: 'Expectations',
        dis: 'What do you expect from me as a professional and from this appointment?'
    },
    {
        name: 'Clinical goals',
        dis: 'What are your goals?'
    },
    {
        name: 'Other information',
        dis: 'Would you like to share any other observations about the appointment?'
    },
]
const personalhistory = [
    {
        name: 'All Client',
        activity: [

            {
                name: 'Bowel movements',
                dis: 'How are your bowel movements behaving?'
            },
            {
                name: 'Sleep quality',
                dis: 'How many hours do you sleep per day?'
            },
            {
                name: 'Smoker',
                dis: 'Are you a smoker?'
            },
            {
                name: 'Alcohol consumption',
                dis: 'Do you consume alcohol?'
            },
            {
                name: 'Marital status',
                dis: 'What is your marital status?'
            },
            {
                name: 'Physical activity',
                dis: 'How much physical activity do you practice per week?'
            },
            {
                name: 'Race',
                dis: 'What is your race?'
            },
            {
                name: 'Other information',
                dis: 'Any other observations or concerns?'
            },
        ]
    },
    {
        name: 'Pediatric clients',
        activity: [

            {
                name: 'Maternal weight gain',
                dis: 'How much weight did your mother gain during pregnancy?'
            },
            {
                name: 'Maternal behaviors at pregnancy',
                dis: 'Did your mother have any particular behaviors during this time?'
            },
            {
                name: 'Gestational age at birth',
                dis: 'With how many weeks were you born?'
            },
        ]
    }
]
const Preferences = () => {
    const [editModal, setEditModal] = useState(false)
    const handleEdit = () => {
        setEditModal(true)
    }
    const [selectedNutrition, setSelectedNutrition] = useState([]);

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
                                isCheck={true}
                                isDisable={true}
                                isInfo={true}
                                className="mt-0"
                                label="Access to the mobile app"
                                initialValue={''}
                                // onChange={(value) => setSingleValue({ ["profession"]: value })}
                                // handleSubmit={handleSubmit}
                                name={"profession"} />
                            <ClosableSelect
                                labelWidth="basis-[300px] min-w-[300px]"
                                searchOption={false}
                                option={professionOptions}
                                closable={false}
                                isCheck={true}
                                isDisable={true}
                                isInfo={true}
                                className="mt-[7px]"
                                label="Client messages"
                                initialValue={''}
                                // onChange={(value) => setSingleValue({ ["profession"]: value })}
                                // handleSubmit={handleSubmit}
                                name={"profession"} />
                            <ClosableSelect
                                labelWidth="basis-[300px] min-w-[300px]"
                                searchOption={false}
                                option={professionOptions}
                                closable={false}
                                isCheck={true}
                                isDisable={true}
                                isInfo={true}
                                className="mt-[7px]"
                                label="Client weight registration"
                                initialValue={''}
                                // onChange={(value) => setSingleValue({ ["profession"]: value })}
                                // handleSubmit={handleSubmit}
                                name={"profession"} />
                            <ClosableSelect
                                labelWidth="basis-[300px] min-w-[300px]"
                                searchOption={false}
                                option={professionOptions}
                                closable={false}
                                isCheck={true}
                                isDisable={true}
                                isInfo={true}
                                className="mt-[7px]"
                                label="Appointments confirmation"
                                initialValue={''}
                                // onChange={(value) => setSingleValue({ ["profession"]: value })}
                                // handleSubmit={handleSubmit}
                                name={"profession"} />

                            <ClosableSelect
                                labelWidth="basis-[300px] min-w-[300px]"
                                searchOption={false}
                                option={professionOptions}
                                closable={false}
                                isCheck={true}
                                isDisable={true}
                                isInfo={true}
                                className="mt-[7px]"
                                label="Food diary"
                                initialValue={''}
                                // onChange={(value) => setSingleValue({ ["profession"]: value })}
                                // handleSubmit={handleSubmit}
                                name={"profession"} />

                            <ClosableSelect
                                labelWidth="basis-[300px] min-w-[300px]"
                                searchOption={false}
                                option={professionOptions}
                                closable={false}
                                isCheck={true}
                                isDisable={true}
                                isInfo={true}
                                className="mt-[7px]"
                                label="Nutritional information"
                                initialValue={''}
                                // onChange={(value) => setSingleValue({ ["profession"]: value })}
                                // handleSubmit={handleSubmit}
                                name={"profession"} />

                            <ClosableSelect
                                labelWidth="basis-[300px] min-w-[300px]"
                                searchOption={false}
                                option={professionOptions}
                                closable={false}
                                isCheck={true}
                                isDisable={true}
                                isInfo={true}
                                className="mt-[7px]"
                                label="Client reviews"
                                initialValue={''}
                                // onChange={(value) => setSingleValue({ ["profession"]: value })}
                                // handleSubmit={handleSubmit}
                                name={"profession"} />


                        </div>
                    </div>
                    <div className="h-full bg-white card-shadow   rounded-[5px] mb-[25px]">
                        <div className="widget-header p-[20px_20px_15px_20px]">
                            <h4 className="text-[20px] leading-[1.1]">
                                Appointment preferences
                            </h4>
                            <div className="text-[12px] text-[#888888] opacity-[0.6]">
                                Check or update presetsof your appointments
                            </div>
                        </div>
                        <div className="multiple-fields pt-0 p-[20px]">
                            <ClosableSelect
                                labelWidth="basis-[300px] min-w-[300px]"
                                searchOption={false}
                                option={professionOptions}
                                closable={false}
                                isCheck={false}
                                isDisable={false}
                                isInfo={true}
                                className="mt-0"
                                label="Access to the mobile app"
                                initialValue={''}
                                // onChange={(value) => setSingleValue({ ["profession"]: value })}
                                // handleSubmit={handleSubmit}
                                name={"profession"} />

                            <ClosableSelect
                                labelWidth="basis-[300px] min-w-[300px]"
                                searchOption={false}
                                option={professionOptions}
                                closable={false}
                                isCheck={false}
                                isDisable={false}
                                isInfo={true}
                                className="mt-0"
                                label="Appointment notifications"
                                initialValue={''}
                                // onChange={(value) => setSingleValue({ ["profession"]: value })}
                                // handleSubmit={handleSubmit}
                                name={"profession"} />
                        </div>
                    </div>
                    <div className="h-full bg-white card-shadow   rounded-[5px] mb-[25px]">
                        <div className="widget-header p-[20px_20px_15px_20px]">
                            <h4 className="text-[20px] leading-[1.1]">
                                Nutrition assessment form configuration
                            </h4>
                            <div className="text-[12px] text-[#888888] opacity-[0.6]">
                                Check and update the configurations for your clients' nutrition assessment forms
                            </div>
                        </div>
                        <div className="multiple-fields pt-0 p-[20px]">
                            <div>
                                <AddTag
                                    labelWidth="basis-[300px] min-w-[300px]"
                                    isEditable={true}
                                    isCheck={false}
                                    isDisable={false}
                                    isInfo={false}
                                    className="mt-0"
                                    data={selectedNutrition}
                                    handleEdit={handleEdit}
                                    label="Appointment information"
                                    name={"Appointment information"}
                                    setSelectedNutrition={setSelectedNutrition}
                                    mainData={appointmentInfo}

                                />

                            </div>
                            <div className='mt-[7px]'>
                                <AddTag
                                    labelWidth="basis-[300px] min-w-[300px]"
                                    isEditable={true}
                                    isCheck={false}
                                    isDisable={false}
                                    isInfo={false}
                                    className="mt-0"
                                    data={selectedNutrition}
                                    handleEdit={handleEdit}
                                    label="Personal and social history"
                                    name={"Personal and social history"}
                                    setSelectedNutrition={setSelectedNutrition}
                                    mainData={appointmentInfo}

                                />
                            </div>
                            <div className='mt-[7px]'>
                                <AddTag
                                    labelWidth="basis-[300px] min-w-[300px]"
                                    isEditable={true}
                                    isCheck={false}
                                    isDisable={false}
                                    isInfo={false}
                                    className="mt-0"
                                    data={selectedNutrition}
                                    handleEdit={handleEdit}
                                    label="Dietary history"
                                    name={"Dietary history"}
                                    setSelectedNutrition={setSelectedNutrition}
                                    mainData={appointmentInfo}

                                />
                            </div>
                            <div className='mt-[7px]'>
                                <AddTag
                                    labelWidth="basis-[300px] min-w-[300px]"
                                    isEditable={true}
                                    isCheck={false}
                                    isDisable={false}
                                    isInfo={false}
                                    className="mt-0"
                                    data={selectedNutrition}
                                    handleEdit={handleEdit}
                                    label="Medical history"
                                    name={"Medical history"}
                                    setSelectedNutrition={setSelectedNutrition}
                                    mainData={appointmentInfo}

                                />
                            </div>
                            <div className='mt-[7px]'>
                                <AddTag
                                    labelWidth="basis-[300px] min-w-[300px]"
                                    isEditable={true}
                                    isCheck={false}
                                    isDisable={false}
                                    isInfo={false}
                                    className="mt-0"
                                    data={selectedNutrition}
                                    handleEdit={handleEdit}
                                    label="Gestational information"
                                    name={"Gestational information"}
                                    setSelectedNutrition={setSelectedNutrition}
                                    mainData={appointmentInfo}

                                />
                            </div>
                            <div className='mt-[7px]'>
                                <AddTag
                                    labelWidth="basis-[300px] min-w-[300px]"
                                    isEditable={true}
                                    isCheck={false}
                                    isDisable={false}
                                    isInfo={false}
                                    className="mt-0"
                                    data={selectedNutrition}
                                    handleEdit={handleEdit}
                                    label="Final considerations"
                                    name={"Final considerations"}
                                    setSelectedNutrition={setSelectedNutrition}
                                    mainData={appointmentInfo}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="h-full bg-white card-shadow   rounded-[5px] mb-[25px]">
                        <div className="widget-header p-[20px_20px_15px_20px]">
                            <h4 className="text-[20px] leading-[1.1]">
                                Email and printing preferences
                            </h4>
                            <div className="text-[12px] text-[#888888] opacity-[0.6]">
                                Check and change the meal plan email and printing preferences
                            </div>
                        </div>
                        <div className="multiple-fields pt-0 p-[20px]">
                            <div className='mt-[7px]'>
                                <EditableInput
                                     labelWidth="basis-[300px] -mr-px min-w-[300px]"
                                    label="Meal plan email subject"
                                    initialValue={''}
                                    // onInputChange={(value) => setSingleValue({ ["fullName"]: value })}
                                    // handleSubmit={() => handleSubmit(singleValue)}
                                />
                                <EditableTextarea 
                                  labelWidth="basis-[300px] -mr-px min-w-[300px]"
                                  label="Meal plan email body"
                                  initialValue={''}
                                />
                                <AddTag
                                    labelWidth="basis-[300px] min-w-[300px]"
                                    isEditable={true}
                                    isCheck={false}
                                    isDisable={false}
                                    isInfo={false}
                                    className="mt-[7px]"
                                    data={selectedNutrition}
                                    handleEdit={handleEdit}
                                    label="Meal plan sections"
                                    name={"Meal plan sections"}
                                    setSelectedNutrition={setSelectedNutrition}
                                    mainData={appointmentInfo}

                                />
                                <ClosableSelect
                                    labelWidth="basis-[300px] min-w-[300px]"
                                    searchOption={false}
                                    option={professionOptions}
                                    closable={false}
                                    className="mt-[7px]"
                                    label="Printing design"
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
                                    label="Multiple days printing layout"
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
                                    label="Font size of the prints"
                                    initialValue={''}
                                    // onChange={(value) => setSingleValue({ ["profession"]: value })}
                                    // handleSubmit={handleSubmit}
                                    name={"profession"} />
                            </div>
                        </div>
                    </div>
                    <div className="h-full bg-white card-shadow   rounded-[5px] mb-[25px]">
                        <div className="widget-header p-[20px_20px_15px_20px]">
                            <h4 className="text-[20px] leading-[1.1]">
                                Meal plan settings
                            </h4>
                            <div className="text-[12px] text-[#888888] opacity-[0.6]">
                                Check and change the structure of the meal plans
                            </div>
                        </div>
                        <div className="multiple-fields pt-0 p-[20px]">
                            <div>
                                <AddTag
                                    labelWidth="basis-[300px] min-w-[300px]"
                                    isEditable={true}
                                    isCheck={false}
                                    isDisable={false}
                                    isInfo={true}
                                    className="mt-0"
                                    data={selectedNutrition}
                                    handleEdit={handleEdit}
                                    label="Lunch and dinner sections"
                                    name={"Lunch and dinner sections"}
                                    setSelectedNutrition={setSelectedNutrition}
                                    mainData={appointmentInfo}

                                />

                            </div>
                            <div className='mt-[7px]'>
                                <AddTag
                                    labelWidth="basis-[300px] min-w-[300px]"
                                    isEditable={true}
                                    isCheck={false}
                                    isDisable={false}
                                    isInfo={false}
                                    className="mt-0"
                                    data={selectedNutrition}
                                    handleEdit={handleEdit}
                                    label="Food databases"
                                    name={"Food databases"}
                                    setSelectedNutrition={setSelectedNutrition}
                                    mainData={appointmentInfo}

                                />
                            </div>

                        </div>
                    </div>
                    <div className="h-full bg-white card-shadow   rounded-[5px] mb-[25px]">
                        <div className="widget-header p-[20px_20px_15px_20px]">
                            <h4 className="text-[20px] leading-[1.1]">
                                Measurements preferences
                            </h4>
                            <div className="text-[12px] text-[#888888] opacity-[0.6]">
                                Check and change measurements preferences
                            </div>
                        </div>
                        <div className="multiple-fields pt-0 p-[20px]">
                            <ClosableSelect
                                labelWidth="basis-[300px] min-w-[300px]"
                                searchOption={false}
                                option={professionOptions}
                                closable={false}
                                isInfo={true}
                                className="mt-0"
                                label="Deduce measurements"
                                initialValue={''}
                                // onChange={(value) => setSingleValue({ ["profession"]: value })}
                                // handleSubmit={handleSubmit}
                                name={"Deduce measurements"} />
                            <AddTag
                                labelWidth="basis-[300px] min-w-[300px]"
                                isEditable={true}
                                isCheck={false}
                                isDisable={false}
                                isInfo={false}
                                className="mt-[7px]"
                                data={selectedNutrition}
                                handleEdit={handleEdit}
                                label="Anthropometric measurements"
                                name={"Anthropometric measurements"}
                                setSelectedNutrition={setSelectedNutrition}
                                mainData={appointmentInfo}

                            />
                            <AddTag
                                labelWidth="basis-[300px] min-w-[300px]"
                                isEditable={true}
                                isCheck={false}
                                isDisable={false}
                                isInfo={false}
                                className="mt-[7px]"
                                data={selectedNutrition}
                                handleEdit={handleEdit}
                                label="Analytical data"
                                name={"Analytical data"}
                                setSelectedNutrition={setSelectedNutrition}
                                mainData={appointmentInfo}

                            />
                            <AddTag
                                labelWidth="basis-[300px] min-w-[300px]"
                                isEditable={true}
                                isCheck={false}
                                isDisable={false}
                                isInfo={false}
                                className="mt-[7px]"
                                data={selectedNutrition}
                                handleEdit={handleEdit}
                                label="Body composition"
                                name={"Body composition"}
                                setSelectedNutrition={setSelectedNutrition}
                                mainData={appointmentInfo}

                            />
                        </div>
                    </div>
                </div>
            </MainLayout>

        </>


    )
}

export default Preferences
