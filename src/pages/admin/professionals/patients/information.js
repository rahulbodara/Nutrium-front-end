import React, { Fragment, useState, useEffect } from 'react';
import Icon from '@mdi/react';
import { Menu, Transition } from '@headlessui/react';
import { mdiContentSave, mdiInformationOutline, mdiPlus, mdiPrinter } from '@mdi/js';
import { BsFilter } from 'react-icons/bs';
import Steps from '@/components/Admin/Clients/Information/Steps';
import MainLayout from '@/components/Admin/MainLayout';
import ClientDetail from '@/components/Admin/Clients/ClientDetail';
import ClientSubscribe from '@/components/Admin/Clients/ClientSubscribe';
import { useRouter } from 'next/router';
import EditableTextarea from '@/components/Admin/common/EditableTextarea';
import EditableInput from '@/components/Admin/common/EditableInput';
import CustomSelect from '@/components/Admin/common/CustomSelect';
import TagSelect from '@/components/Admin/common/TagSelect';
import SelectField from '@/components/Admin/common/SelectField';
import ClosableSelect from '@/components/Admin/common/ClosableSelect';
import TimePicker from '@/components/Admin/common/TimePicker';
import AddObservations from '@/components/Admin/Clients/Information/AddObservations';
import Pagination from '@/components/Admin/common/Pagination';
import AddFoodDiary from '@/components/Admin/Clients/Information/AddFoodDiary';
import { getClientById, updateAppointment, updateMedicalHistory } from '@/redux/action/auth';
import { useDispatch, useSelector } from 'react-redux';
import { handleApiCall } from "@/util/apiUtils";

const clientType = [
  {
    id: 1,
    name: "Available to all clients",
    value: "Available to all clients",
  },
  {
    id: 2,
    name: "New clients",
    value: "New clients",
  },
  {
    id: 3,
    name: "Recurring clients",
    value: "Recurring clients",
  },
];
const Information = () => {
  const router = useRouter();
  const { query } = router;
  const dispatch = useDispatch()

  useEffect(() => {
    if (query.id) {
      dispatch(getClientById(query.id));
    }
  }, [dispatch, query.id]);

  function HandleValue(value) {
    console.log("🚀 ~ file: AddNewService.js:70 ~ HandleValue ~ value:", value);
  }
  const [selectedHour1, setSelectedHour1] = useState("");
  const [selectedMinute1, setSelectedMinute1] = useState("");
  const [selectedHour2, setSelectedHour2] = useState("");
  const [selectedMinute2, setSelectedMinute2] = useState("");
  const [singleValue, setSingleValue] = useState()
  const [medicalValue, setMedicalValue] = useState()
  const appointmentData = useSelector((state) => {
    if (state?.auth?.clientData?.length > 0) {
      return state?.auth?.clientData[0]?.appointmentInformation?.[0];
    }
    return null;
  });
  const medicalData = useSelector((state) => {
    if(state?.auth?.clientData?.length > 0) {
      return state?.auth?.clientData[0]?.Medicalhistory?.[0];
    }
    return null;
  });

  const [openObservations, setOpenObservations] = useState(false)

  const handleTimeChange = (type, value) => {
    // Use the "type" parameter to distinguish between hour and minute changes
    if (type === "hour") {
      setSelectedHour1(value);
    } else if (type === "minute") {
      setSelectedMinute1(value);
    }
    // You can do the same for the second TimePicker
  };

  const handleAppointmentSubmit = async (newValue) => {
    console.log(newValue, "newValue")
    try {
      const success = await handleApiCall(
        dispatch,
        updateAppointment(newValue, query.id),
        'Appointnment info. Updated Successfully'
      );
      if(success) {
        dispatch(getClientById(query.id));
      }
    } catch(err) {
      console.log("Error -->", err)
    }
  };
  const handleMedicalHistorySubmit = async (newValue) => {
    console.log(newValue, "newValue")
    try {
      const success = await handleApiCall(
        dispatch,
        updateMedicalHistory(newValue, query.id),
        'Medical history Updated Successfully'
      );
      if(success) {
        dispatch(getClientById(query.id));
      }
    } catch(err) {
      console.log("Error -->", err)
    }
  };

  return (
    <div>
      <MainLayout
        head={'Client profile'}
        text={'Check and update information about the client'}
      >
        <div className="mt-[-20px]">
          <ClientDetail clientId={query.id} />
          <div className="pt-[25px] pb-[125px]">
            <ClientSubscribe />
            <div className="mt-[25px]">
              <Steps />
            </div>
            <div className="md:block flex mt-[25px] gap-[25px]">
              <div className="rounded-[5px]  flex-1 overflow-hidden bg-white flex shadow-box1">
                <div className="px-[20px] flex-1 md:block flex items-center justify-between py-[16px]">
                  <div className="">
                    <h3 className="text-[20px] leading-[24px] ">
                      Nutrition assessment form
                    </h3>
                    <span className="text-[12px] text-[#888888]/[70%]">
                      Send the survey to your client to have the information
                      automatically added to their profile
                    </span>
                  </div>
                  <button className="text-white active:shadow-innershdaow py-[8px] px-[24px] md:px-[6px] cursor-not-allowed bg-[#DDDDDD] text-[16px] border opacity-80 rounded-[3px] md:mt-[10px] mt-0">
                    Send nutrition assessment form
                  </button>
                </div>
                <div className=" flex items-center hover:text-[#1AB394] justify-center border-l bg-[#FAFAFB] p-[20px] ">
                  <Icon path={mdiInformationOutline} size={0.7} />
                </div>
              </div>
              <div className="flex gap-[8px] mt-0 md:mt-[10px]">
                <Menu
                  as="div"
                  className="relative h-full inline-block text-left"
                >
                  <Menu.Button className="bg-[#FAFAFB] flex h-full items-center hover:text-[#1AB394] p-[20px] border hover:bg-[#FAFAFB] cursor-pointer border-[#EEEEEE] rounded-[5px]">
                    <Icon path={mdiContentSave} size={0.8} />
                  </Menu.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 w-[160px] origin-top-right  rounded bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="px-1 py-1 ">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${active ? 'bg-[#f5f5f5] text-[#1AB394]' : ''
                                } group flex w-full items-center rounded p-[10px] text-[1.1em]`}
                            >
                              Save as client's file
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
                <div className="bg-[#FAFAFB] flex items-center hover:text-[#1AB394] p-[20px] border hover:bg-[#FAFAFB] cursor-pointer border-[#EEEEEE] rounded-[5px]">
                  <Icon path={mdiPrinter} size={0.8} />
                </div>
              </div>
            </div>
            <div className="2lg:block grid grid-cols-12 mt-[25px] gap-[30px]">
              <div className="col-span-7">
                <div className="bg-white shadow-box1 rounded-[5px]">
                  <div className="p-[20px] pb-[15px]">
                    <h3 className="text-[20px] leading-[24px] ">
                      Appointment information
                    </h3>
                    <span className="text-[12px] text-[#888888]/[70%]">
                      Motivation and expectations for the follow up
                    </span>
                  </div>
                  <div className="p-[0_20px_20px]">

                    <EditableTextarea
                      labelWidth="basis-[210px] mr-[-1px] min-w-[180px]"
                      label="Reason of appointment"
                      initialValue={appointmentData?.appointmentReason || ''}
                      onInputChange={(value) => setSingleValue({ ["appointmentReason"]: value })}
                      handleSubmit={() => handleAppointmentSubmit(singleValue)} 
                    />
                    <div className=" mt-[7px]">

                      <EditableInput
                        labelWidth="basis-[210px] mr-[-1px] min-w-[180px]"
                        label=" Expectations"
                        initialValue={appointmentData?.expectations || ''}
                        onInputChange={(value) => setSingleValue({["expectations"]:value})}
                        handleSubmit={() => handleAppointmentSubmit(singleValue)}
                        />
                    </div>
                    <div className="flex mt-[7px]">
                      <div className="basis-[210px] text-[1.1em] flex items-center border border-[#EEEEEE] min-w-[210px] py-[5px] px-[10px] bg-[#FAFAFB]">
                        Clinical goals
                      </div>
                      <div className="w-full ">

                        <TagSelect className="select-main-without-border min-h-[42px]" searchOption={false} closable={false} />
                        <EditableInput
                          mainClass="!mt-0"
                          labelWidth="!hidden"
                          label=""
                          // initialValue={clientData?.zipcode || ''}
                          // onInputChange={(value) => setSingleValue({["zipcode"]:value})}
                          // handleSubmit={() => handleAppointmentSubmit(singleValue)}
                          />

                      </div>
                    </div>
                    <div className="mt-[7px]">
                      <EditableTextarea
                        labelWidth="basis-[210px] mr-[-1px] min-w-[180px]"
                        label="Other information"
                        initialValue={appointmentData?.otherInfo || ''}
                        onInputChange={(value) => setSingleValue({ ["otherInfo"]: value })}
                        handleSubmit={() => handleAppointmentSubmit(singleValue)} 
                      />


                    </div>
                  </div>
                </div>
                <div className="bg-white shadow-box1 rounded-[5px] mt-[25px]">
                  <div className="p-[20px] pb-[15px]">
                    <h3 className="text-[20px] leading-[24px] ">
                      Personal and social history
                    </h3>
                    <span className="text-[12px] text-[#888888]/[70%]">
                      Information and physiological and social habits of the
                      client
                    </span>
                  </div>
                  <div className="p-[0_20px_20px]">
                    <div className="flex">
                      <div className="basis-[210px] text-[1.1em] flex items-center  border border-[#EEEEEE] min-w-[210px] py-[5px] px-[10px] bg-[#FAFAFB]">
                        Bowel movements
                      </div>
                      <div className='flex flex-1 '>

                        <ClosableSelect className="select-main-without-border  grow min-w-[100px] basis-[200px]" searchOption={false}
                          option={clientType}
                          onChange={HandleValue}
                        />
                        <EditableInput
                          mainClass="!mt-0 grow-[3] basis-[200px]"
                          labelWidth="!hidden"
                          label="" />
                      </div>

                    </div>
                    <div className="flex mt-[7px]">
                      <div className="basis-[210px] text-[1.1em] flex items-center  border border-[#EEEEEE] min-w-[210px] py-[5px] px-[10px] bg-[#FAFAFB]">
                        Sleep quality
                      </div>
                      <div className='flex flex-1 '>
                        <ClosableSelect className="select-main-without-border  grow min-w-[100px] basis-[200px]" searchOption={false}
                          option={clientType}
                          onChange={HandleValue}
                        />

                        <EditableInput
                          mainClass="!mt-0 grow-[3] basis-[200px]"
                          labelWidth="!hidden"
                          label="" />
                      </div>
                    </div>
                    <div className="flex mt-[7px]">
                      <div className="basis-[210px] text-[1.1em] flex items-center  border border-[#EEEEEE] min-w-[210px] py-[5px] px-[10px] bg-[#FAFAFB]">
                        Smoker
                      </div>
                      <div className='flex flex-1 '>
                        <ClosableSelect className="select-main-without-border  grow min-w-[100px] basis-[200px]" searchOption={false}
                          option={clientType}
                          onChange={HandleValue}
                        />
                        <EditableInput
                          mainClass="!mt-0 grow-[3] basis-[200px]"
                          labelWidth="!hidden"
                          label="" />
                      </div>
                    </div>
                    <div className="flex mt-[7px]">
                      <div className="basis-[210px] text-[1.1em] flex items-center  border border-[#EEEEEE] min-w-[210px] py-[5px] px-[10px] bg-[#FAFAFB]">
                        Alcohol consumption
                      </div>
                      <div className='flex flex-1 '>
                        <ClosableSelect className="select-main-without-border  grow min-w-[100px] basis-[200px]" searchOption={false}
                          option={clientType}
                          onChange={HandleValue}
                        />
                        <EditableInput
                          mainClass="!mt-0 grow-[3] basis-[200px]"
                          labelWidth="!hidden"
                          label="" />
                      </div>
                    </div>
                    <div className="flex mt-[7px]">
                      <div className="basis-[210px] text-[1.1em] flex items-center  border border-[#EEEEEE] min-w-[210px] py-[5px] px-[10px] bg-[#FAFAFB]">
                        Marital status
                      </div>
                      <div className='flex flex-1 '>
                        <ClosableSelect className="select-main-without-border  grow min-w-[100px] basis-[200px]" searchOption={false}
                          option={clientType}
                          onChange={HandleValue}
                        />
                        <EditableInput
                          mainClass="!mt-0 grow-[3] basis-[200px]"
                          labelWidth="!hidden"
                          label="" />
                      </div>
                    </div>
                    <div className=" mt-[7px]">

                      <EditableInput
                        labelWidth="basis-[210px] mr-[-1px] min-w-[180px]"
                        label="Physical activity" />

                    </div>
                    <div className="flex mt-[7px]">
                      <ClosableSelect label="  Race" labelWidth="basis-[210px] " className="select-main-without-border  grow min-w-[100px] basis-[200px]" searchOption={false}
                        option={clientType}
                        onChange={HandleValue}
                      />


                    </div>
                    <div className="mt-[7px]">
                      <EditableTextarea
                        labelWidth="basis-[210px] mr-[-1px] min-w-[180px]"
                        label="Other information"
                      // initialValue={clientData?.address || ''}
                      // onInputChange={(value) => setSingleValue({ ["address"]: value })}
                      // handleSubmit={() => handleAppointmentSubmit(singleValue)} 
                      />

                    </div>
                  </div>
                </div>
                <div className="bg-white shadow-box1 rounded-[5px] mt-[25px]">
                  <div className="p-[20px] pb-[15px]">
                    <h3 className="text-[20px] leading-[24px] ">
                      Dietary history
                    </h3>
                    <span className="text-[12px] text-[#888888]/[70%]">
                      Habits and food preferences of the client
                    </span>
                  </div>
                  <div className="p-[0_20px_20px]">
                    <div className="">
                      <TimePicker
                        labelWidth="basis-[210px] mr-[-1px] min-w-[180px]"
                        label={"Usual wake up time 1"}
                        minuteStep={1}
                        hour={24}
                        selectedHour={selectedHour1}
                        selectedMinute={selectedMinute1}
                        onChange={(type, value) => handleTimeChange(type, value)}
                      />

                    </div>
                    <div className=" mt-[7px]">
                      <TimePicker
                        labelWidth="basis-[210px] mr-[-1px] min-w-[180px]"
                        label={" Usual bedtime"}
                        minuteStep={1}
                        hour={24}
                        selectedHour={selectedHour2}
                        selectedMinute={selectedMinute2}
                        onChange={(type, value) => handleTimeChange(type, value)}
                      />


                    </div>
                    <div className="flex mt-[7px]">
                      <div className="basis-[210px] text-[1.1em] flex items-center border border-[#EEEEEE] min-w-[210px] py-[5px] px-[10px] bg-[#FAFAFB]">
                        Types of diet
                      </div>
                      <div className="w-full ">

                        <TagSelect className="select-main-without-border min-h-[42px]" searchOption={false} closable={false} />
                        <EditableInput
                          mainClass="!mt-0"
                          labelWidth="!hidden"
                          label="" />

                      </div>
                    </div>
                    <div className=" mt-[7px]">
                      <EditableTextarea
                        labelWidth="basis-[210px] mr-[-1px] min-w-[180px]"
                        label="Favorite food"
                      // initialValue={clientData?.address || ''}
                      // onInputChange={(value) => setSingleValue({ ["address"]: value })}
                      // handleSubmit={() => handleSubmit(singleValue)} 
                      />


                    </div>
                    <div className=" mt-[7px]">
                      <EditableTextarea
                        labelWidth="basis-[210px] mr-[-1px] min-w-[180px]"
                        label="Disliked food"

                      // initialValue={clientData?.address || ''}
                      // onInputChange={(value) => setSingleValue({ ["address"]: value })}
                      // handleSubmit={() => handleSubmit(singleValue)} 
                      />


                    </div>
                    <div className="flex mt-[7px]">
                      <div className="basis-[210px] text-[1.1em] flex items-center border border-[#EEEEEE] min-w-[210px] py-[5px] px-[10px] bg-[#FAFAFB]">
                        Allergies
                      </div>
                      <div className="w-full ">

                        <TagSelect className="select-main-without-border min-h-[42px]" searchOption={false} closable={false} />
                        <EditableTextarea

                          className="!mt-[-1px]"
                          labelWidth="!hidden"
                          textAreaClass="!min-h-[33px] text-[14px] h-full"
                        // initialValue={clientData?.address || ''}
                        // onInputChange={(value) => setSingleValue({ ["address"]: value })}
                        // handleSubmit={() => handleSubmit(singleValue)} 
                        />

                      </div>
                    </div>

                    <div className="flex mt-[7px]">
                      <div className="basis-[210px] text-[1.1em] flex items-center border border-[#EEEEEE] min-w-[210px] py-[5px] px-[10px] bg-[#FAFAFB]">
                        Food intolerances
                      </div>
                      <div className="w-full ">

                        <TagSelect className="select-main-without-border min-h-[42px]" searchOption={true} closable={false} />
                        <EditableTextarea

                          className="!mt-[-1px]"
                          labelWidth="!hidden"
                          textAreaClass="!min-h-[33px] text-[14px] h-full"
                        // initialValue={clientData?.address || ''}
                        // onInputChange={(value) => setSingleValue({ ["address"]: value })}
                        // handleSubmit={() => handleSubmit(singleValue)} 
                        />

                      </div>
                    </div>
                    <div className="flex mt-[7px]">
                      <div className="basis-[210px] text-[1.1em] flex items-center border border-[#EEEEEE] min-w-[210px] py-[5px] px-[10px] bg-[#FAFAFB]">
                        Nutritional deficiencies
                      </div>
                      <div className="w-full ">

                        <TagSelect className="select-main-without-border min-h-[42px]" searchOption={false} closable={false} />
                        <EditableTextarea

                          className="!mt-[-1px]"
                          labelWidth="!hidden"
                          textAreaClass="!min-h-[33px] text-[14px] h-full"
                        // initialValue={clientData?.address || ''}
                        // onInputChange={(value) => setSingleValue({ ["address"]: value })}
                        // handleSubmit={() => handleSubmit(singleValue)} 
                        />

                      </div>
                    </div>
                    <div className=" mt-[7px]">
                      <ClosableSelect label="Water intake" labelWidth="basis-[210px] " className="select-main-without-border  grow min-w-[100px] basis-[200px]" searchOption={false}
                        option={clientType}
                        onChange={HandleValue}
                      />

                    </div>
                    <div className=" mt-[7px]">
                      <EditableTextarea
                        labelWidth="basis-[210px] mr-[-1px] min-w-[180px]"
                        label="Other information"
                      // initialValue={clientData?.address || ''}
                      // onInputChange={(value) => setSingleValue({ ["address"]: value })}
                      // handleSubmit={() => handleSubmit(singleValue)} 
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-white shadow-box1 rounded-[5px] mt-[25px]">
                  <div className="p-[20px] pb-[15px]">
                    <h3 className="text-[20px] leading-[24px] ">
                      Pregnancy history
                    </h3>
                    <span className="text-[12px] text-[#888888]/[70%]">
                      Client's pregnancy and lactation records
                    </span>
                  </div>
                  <div className="p-[0_20px_20px]">
                    <p className="text-[#888888] italic text-center">
                      You haven't logged any pregnancy history record
                    </p>
                  </div>
                </div>
                <div className="bg-white shadow-box1 rounded-[5px] mt-[25px]">
                  <div className="p-[20px] flex items-center justify-between pb-[15px]">
                    <div>
                      <h3 className="text-[20px] leading-[24px] ">
                        Observations
                      </h3>
                      <span className="text-[12px] text-[#888888]/[70%]">
                        Other relevant information about the client
                      </span>

                    </div>
                    <button onClick={() => setOpenObservations(true)}>
                      <Icon path={mdiPlus} size={1} />
                    </button>
                  </div>
                  {/* <AddObservations isOpen={openObservations} setIsOpen={setOpenObservations} /> */}
                  <div className="p-[0_20px_20px]">
                    <div onClick={() => setOpenObservations(true)} className='h-[130px] bg-white cursor-pointer hover:bg-[#FAFAFB] p-[10px] border border-[#EEEEEE] rounded-[5px]'>
                      <div className='h-[95px] break-all'></div>
                      <div className='text-[10px] pt-[2px] text-[#1AB394] float-right'>2023-09-04</div>
                    </div>
                    <div className='flex items-center justify-end'>
                      <Pagination />
                    </div>
                    <p className="text-[#888888] italic text-center">
                      You haven't logged any observations
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-5">
                <div className="bg-white shadow-box1 rounded-[5px]">
                  <div className="p-[20px] pb-[15px] flex items-center justify-between 2lg:mt-[25px] mt-0">
                    <div>
                      <h3 className="text-[20px] leading-[24px] ">
                        Food Diaries
                      </h3>
                      <span className="text-[12px] text-[#888888]/[70%]">
                        Log your client's food diaries
                      </span>
                    </div>
                    <button onClick={() => setOpenObservations(true)}>
                      <Icon path={mdiPlus} size={1} />
                    </button>
                  </div>
                  <AddFoodDiary isOpen={openObservations} setIsOpen={setOpenObservations} />
                  <div className="p-[0_20px_20px]">
                    <p className="text-[#888888] italic text-center">
                      You haven't logged any food diary
                    </p>
                  </div>
                </div>
                <div className="bg-white shadow-box1 rounded-[5px] mt-[25px]">
                  <div className="p-[20px] pb-[15px]">
                    <h3 className="text-[20px] leading-[24px] ">
                      Eating behaviour
                    </h3>
                    <span className="text-[12px] text-[#888888]/[70%]">
                      Log your client's eating behaviour
                    </span>
                  </div>
                  <div className="p-[0_20px_20px]">
                    <p className="text-[#888888] italic text-center">
                      You haven't logged any eating behaviour
                    </p>
                  </div>
                </div>
                <div className="bg-white shadow-box1 rounded-[5px] mt-[25px]">
                  <div className="p-[20px] pb-[15px]">
                    <h3 className="text-[20px] leading-[24px] ">
                      Medical history
                    </h3>
                    <span className="text-[12px] text-[#888888]/[70%]">
                      Pathologies, medication and personal and family history
                    </span>
                  </div>
                  <div className="p-[0_20px_20px]">
                    <div className="flex">
                      <div className="basis-[120px] text-[1.1em] flex items-center border border-[#EEEEEE] min-w-[120px] py-[5px] px-[10px] bg-[#FAFAFB]">
                        Diseases
                      </div>

                      <div className="w-full ">

                        <TagSelect className="select-main-without-border min-h-[42px]" searchOption={false} closable={false} />
                        <EditableInput
                          mainClass="!mt-0"
                          labelWidth="!hidden"
                          label="" />

                      </div>

                    </div>
                    <div className=" mt-[7px]">

                      <EditableTextarea
                        labelWidth="basis-[120px] mr-[-1px] min-w-[120px]"
                        label="  Medication"
                        initialValue={medicalData?.medication || ''}
                        onInputChange={(value) => setMedicalValue({ ["medication"]: value })}
                        handleSubmit={() => handleMedicalHistorySubmit(medicalValue)} 
                      />

                    </div>
                    <div className=" mt-[7px]">
                      <EditableTextarea
                        labelWidth="basis-[120px] mr-[-1px] min-w-[120px]"
                        label="Personal history"
                        initialValue={medicalData?.personalHistory || ''}
                        onInputChange={(value) => setMedicalValue({ ["personalHistory"]: value })}
                        handleSubmit={() => handleMedicalHistorySubmit(medicalValue)} 
                      />

                    </div>
                    <div className=" mt-[7px]">
                      <EditableTextarea
                        labelWidth="basis-[120px] mr-[-1px] min-w-[120px]"
                        label="Family history"
                        initialValue={medicalData?.familyHistory || ''}
                        onInputChange={(value) => setMedicalValue({ ["familyHistory"]: value })}
                        handleSubmit={() => handleMedicalHistorySubmit(medicalValue)} 
                      />

                    </div>
                    <div className=" mt-[7px]">
                      <EditableTextarea
                        labelWidth="basis-[120px] mr-[-1px] min-w-[120px]"
                        label="Other information"
                        initialValue={medicalData?.otherInfo || ''}
                        onInputChange={(value) => setMedicalValue({ ["otherInfo"]: value })}
                        handleSubmit={() => handleMedicalHistorySubmit(medicalValue)} 
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-white shadow-box1 rounded-[5px] mt-[25px]">
                  <div className="p-[20px] pb-[15px]">
                    <h3 className="text-[20px] leading-[24px] ">Goals</h3>
                    <span className="text-[12px] text-[#888888]/[70%]">
                      Goals the client wants to achieve
                    </span>
                  </div>
                  <div className="p-[0_20px_20px]">
                    <p className="text-[#888888] italic text-center">
                      No goals defined yet.
                    </p>
                  </div>
                </div>
                <div className="bg-white shadow-box1 rounded-[5px] mt-[25px]">
                  <div className="flex justify-between items-center p-[20px] pb-[15px]">
                    <div>
                      <h3 className="text-[20px] leading-[24px] ">Files</h3>
                      <span className="text-[12px] text-[#888888]/[70%]">
                        Files attached to this client
                      </span>
                    </div>
                    <BsFilter className="text-[24px]" />
                  </div>
                  <div className="p-[0_20px_20px]">
                    <p className="text-[#888888] italic text-center">
                      There aren't any files associated to this filter
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default Information;
