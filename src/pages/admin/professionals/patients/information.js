import React, { Fragment, useState, useEffect } from "react";
import Icon from "@mdi/react";
import { Menu, Transition } from "@headlessui/react";
import {
  mdiBorderColor,
  mdiCheck,
  mdiClose,
  mdiCloseCircle,
  mdiContentSave,
  mdiInformationOutline,
  mdiPlus,
  mdiPrinter,
} from "@mdi/js";
import { BsFilter } from "react-icons/bs";
import {
  MdDelete,
  MdDownload,
  MdModeEdit,
  MdOutlineDelete,
} from "react-icons/md";
import { GrDocumentText } from "react-icons/gr";
import Steps from "@/components/Admin/Clients/Information/Steps";
import MainLayout from "@/components/Admin/MainLayout";
import ClientDetail from "@/components/Admin/Clients/ClientDetail";
import ClientSubscribe from "@/components/Admin/Clients/ClientSubscribe";
import { useRouter } from "next/router";
import EditableTextarea from "@/components/Admin/common/EditableTextarea";
import EditableInput from "@/components/Admin/common/EditableInput";
import CustomSelect from "@/components/Admin/common/CustomSelect";
import TagSelect from "@/components/Admin/common/TagSelect";
import SelectField from "@/components/Admin/common/SelectField";
import ClosableSelect from "@/components/Admin/common/ClosableSelect";
import TimePicker from "@/components/Admin/common/TimePicker";
import AddLogClient from "@/components/Admin/Clients/Information/AddObservations";
import AddGoals from "@/components/Admin/Clients/Information/AddGoals";
import AddFile from "@/components/Admin/Clients/Information/AddFile";
import moment from "moment";
import Pagination from "@/components/Admin/common/Pagination";
import AddFoodDiary from "@/components/Admin/Clients/Information/AddFoodDiary";
import {
  getClientById,
  updateAppointment,
  updateDietaryHistory,
  updateMedicalHistory,
  getObservationData,
  getEatingBehaviourData,
  getFilesData,
} from "@/redux/action/auth";
import { useDispatch, useSelector } from "react-redux";
import { handleApiCall } from "@/util/apiUtils";
import { GetAllGoalData, RemoveGoals } from "@/redux/action/goal";

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
  const dispatch = useDispatch();
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (query.id) {
      dispatch(getClientById(query.id));
      dispatch(getObservationData(query.id));
      dispatch(getEatingBehaviourData(query.id));
      dispatch(getFilesData(query.id));
    }
  }, [dispatch, query.id]);

  function HandleValue(value) { }
  const DietaryhistoryData = useSelector((state) => {
    if (state?.auth?.clientData?.length > 0) {
      if (state?.auth?.clientData?.length > 0) {
        return state?.auth?.clientData[0]?.Dietaryhistory?.[0];
      }
      return null;
    }
  });

  const [selectedHour1, setSelectedHour1] = useState(
    DietaryhistoryData?.wakeupTime?.split(":")[0]
  );
  const [selectedMinute1, setSelectedMinute1] = useState(
    DietaryhistoryData?.wakeupTime?.split(":")[1]
  );
  const [selectedHour2, setSelectedHour2] = useState(
    DietaryhistoryData?.bedTime?.split(":")[0]
  );
  const [selectedMinute2, setSelectedMinute2] = useState(
    DietaryhistoryData?.bedTime?.split(":")[1]
  );
  const [observationId, setObservationId] = useState();
  const [eatingId, setEatingId] = useState();

  const [goalId, setGoalId] = useState();
  const [singleValue, setSingleValue] = useState();
  const [medicalValue, setMedicalValue] = useState();
  const [dietaryValue, setDietaryValue] = useState();
  const [eating, setEating] = useState(false);
  const [editFood, setEditFood] = useState();
  const [goals, setGoals] = useState(false);
  const [addFile, setAddFile] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const appointmentData = useSelector((state) => {
    if (state?.auth?.clientData?.length > 0) {
      return state?.auth?.clientData[0]?.appointmentInformation?.[0];
    }
    return null;
  });
  const openAddFoodDiaryModal = () => {
    setEditFood(null);
    setFoodDiaries(true);
  };

  const openEditFoodDiaryModal = (foodDiaryItem) => {
    setEditFood(foodDiaryItem);
    setFoodDiaries(true);
  };
  const medicalData = useSelector((state) => {
    if (state?.auth?.clientData?.length > 0) {
      if (state?.auth?.clientData?.length > 0) {
        return state?.auth?.clientData[0]?.Medicalhistory?.[0];
      }
      return null;
    }
  });
  const { id } = router.query;
  const observationData = useSelector(
    (state) => state?.auth?.observationBehaviour?.data?.observation
  );
  const eatingBehaviourData = useSelector(
    (state) => state?.auth?.eatingBehaviour?.data?.behaviours
  );
  const fileData = useSelector((state) => state?.auth?.fileData?.data?.files);
  const foodDiariesData = useSelector(
    (state) => state.FoodDiaries.foodDiariesData
  );
  useEffect(() => {
    dispatch(GetAllFoods(id));
  }, [])
  console.log("foodDiariesData", foodDiariesData);
  const [openObservations, setOpenObservations] = useState(false);
  const [foodDiaries, setFoodDiaries] = useState(false);

  const goalData = useSelector((state) => state?.goal?.goalData?.goals);

  const handleTimeChange = (type, value) => {
    // Use the "type" parameter to distinguish between hour and minute changes
    if (type === "hour") {
      setSelectedHour1(value);
    } else if (type === "minute") {
      setSelectedMinute1(value);
    }
    const timeValue = `${selectedHour1}:${selectedMinute1}`;
    setDietaryValue({ wakeupTime: timeValue });
  };
  const handleBedTimeChange = (type, value) => {
    if (type === "hour") {
      setSelectedHour2(value);
    } else if (type === "minute") {
      setSelectedMinute2(value);
    }
    const timeValue = `${selectedHour2}:${selectedMinute2}`;
    setDietaryValue({ bedTime: timeValue });
  };

  const handleAppointmentSubmit = async (newValue) => {
    try {
      const success = await handleApiCall(
        dispatch,
        updateAppointment(newValue, query.id),
        "Appointnment info. Updated Successfully"
      );
      if (success) {
        if (success) {
          dispatch(getClientById(query.id));
        }
      }
    } catch (err) {
      console.log("Error -->", err);
    }
  }

  const handleMedicalHistorySubmit = async (newValue) => {
    try {
      const success = await handleApiCall(
        dispatch,
        updateMedicalHistory(newValue, query.id),
        "Medical history Updated Successfully"
      );
      if (success) {
        if (success) {
          dispatch(getClientById(query.id));
        }
      }
    } catch (err) {

    }
  };
  const handleDietarySubmit = async (newValue) => {
    try {
      const success = await handleApiCall(
        dispatch,
        updateDietaryHistory(newValue, query.id),
        "Dietary history data updated successfully."
      );
      if (success) {
        dispatch(getClientById(query.id));
      }
    } catch (err) {
      console.log("Error -->", err);
    }
  };

  const handleCancel = async (goalId, _id, clientId, userId) => {
    try {
      const success = await handleApiCall(
        dispatch,
        RemoveGoals(goalId, _id, clientId, userId),
        "Goal successfully removed"
      );
      if (success) {
        dispatch(GetAllGoalData(query.id));
        setIsOpen(false);
      }
    } catch (error) {
      console.log("Error--", error);
    }
  };

  return (
    <div>
      <MainLayout
        head={"Client profile"}
        text={"Check and update information about the client"}
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
                              className={`${active ? "bg-[#f5f5f5] text-[#1AB394]" : ""
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
                      initialValue={appointmentData?.appointmentReason || ""}
                      onInputChange={(value) =>
                        setSingleValue({ ["appointmentReason"]: value })
                      }
                      handleSubmit={() => handleAppointmentSubmit(singleValue)}
                    />
                    <div className=" mt-[7px]">
                      <EditableInput
                        labelWidth="basis-[210px] mr-[-1px] min-w-[180px]"
                        label=" Expectations"
                        initialValue={appointmentData?.expectations || ""}
                        onInputChange={(value) =>
                          setSingleValue({ ["expectations"]: value })
                        }
                        handleSubmit={() =>
                          handleAppointmentSubmit(singleValue)
                        }
                      />
                    </div>
                    <div className="flex mt-[7px]">
                      <div className="basis-[210px] text-[1.1em] flex items-center border border-[#EEEEEE] min-w-[210px] py-[5px] px-[10px] bg-[#FAFAFB]">
                        Clinical goals
                      </div>
                      <div className="w-full ">
                        <TagSelect
                          className="select-main-without-border min-h-[42px]"
                          searchOption={false}
                          closable={false}
                        />
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
                        initialValue={appointmentData?.otherInfo || ""}
                        onInputChange={(value) =>
                          setSingleValue({ ["otherInfo"]: value })
                        }
                        handleSubmit={() =>
                          handleAppointmentSubmit(singleValue)
                        }
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
                      <div className="flex flex-1 ">
                        <ClosableSelect
                          className="select-main-without-border  grow min-w-[100px] basis-[200px]"
                          searchOption={false}
                          option={clientType}
                          onChange={HandleValue}
                        />
                        <EditableInput
                          mainClass="!mt-0 grow-[3] basis-[200px]"
                          labelWidth="!hidden"
                          label=""
                        />
                      </div>
                    </div>
                    <div className="flex mt-[7px]">
                      <div className="basis-[210px] text-[1.1em] flex items-center  border border-[#EEEEEE] min-w-[210px] py-[5px] px-[10px] bg-[#FAFAFB]">
                        Sleep quality
                      </div>
                      <div className="flex flex-1 ">
                        <ClosableSelect
                          className="select-main-without-border  grow min-w-[100px] basis-[200px]"
                          searchOption={false}
                          option={clientType}
                          onChange={HandleValue}
                        />

                        <EditableInput
                          mainClass="!mt-0 grow-[3] basis-[200px]"
                          labelWidth="!hidden"
                          label=""
                        />
                      </div>
                    </div>
                    <div className="flex mt-[7px]">
                      <div className="basis-[210px] text-[1.1em] flex items-center  border border-[#EEEEEE] min-w-[210px] py-[5px] px-[10px] bg-[#FAFAFB]">
                        Smoker
                      </div>
                      <div className="flex flex-1 ">
                        <ClosableSelect
                          className="select-main-without-border  grow min-w-[100px] basis-[200px]"
                          searchOption={false}
                          option={clientType}
                          onChange={HandleValue}
                        />
                        <EditableInput
                          mainClass="!mt-0 grow-[3] basis-[200px]"
                          labelWidth="!hidden"
                          label=""
                        />
                      </div>
                    </div>
                    <div className="flex mt-[7px]">
                      <div className="basis-[210px] text-[1.1em] flex items-center  border border-[#EEEEEE] min-w-[210px] py-[5px] px-[10px] bg-[#FAFAFB]">
                        Alcohol consumption
                      </div>
                      <div className="flex flex-1 ">
                        <ClosableSelect
                          className="select-main-without-border  grow min-w-[100px] basis-[200px]"
                          searchOption={false}
                          option={clientType}
                          onChange={HandleValue}
                        />
                        <EditableInput
                          mainClass="!mt-0 grow-[3] basis-[200px]"
                          labelWidth="!hidden"
                          label=""
                        />
                      </div>
                    </div>
                    <div className="flex mt-[7px]">
                      <div className="basis-[210px] text-[1.1em] flex items-center  border border-[#EEEEEE] min-w-[210px] py-[5px] px-[10px] bg-[#FAFAFB]">
                        Marital status
                      </div>
                      <div className="flex flex-1 ">
                        <ClosableSelect
                          className="select-main-without-border  grow min-w-[100px] basis-[200px]"
                          searchOption={false}
                          option={clientType}
                          onChange={HandleValue}
                        />
                        <EditableInput
                          mainClass="!mt-0 grow-[3] basis-[200px]"
                          labelWidth="!hidden"
                          label=""
                        />
                      </div>
                    </div>
                    <div className=" mt-[7px]">
                      <EditableInput
                        labelWidth="basis-[210px] mr-[-1px] min-w-[180px]"
                        label="Physical activity"
                      />
                    </div>
                    <div className="flex mt-[7px]">
                      <ClosableSelect
                        label="  Race"
                        labelWidth="basis-[210px] "
                        className="select-main-without-border  grow min-w-[100px] basis-[200px]"
                        searchOption={false}
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
                        onChange={(type, value) =>
                          handleTimeChange(type, value)
                        }
                        handleSubmit={() => handleDietarySubmit(dietaryValue)}
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
                        onChange={(type, value) =>
                          handleBedTimeChange(type, value)
                        }
                        handleSubmit={() => handleDietarySubmit(dietaryValue)}
                      />
                    </div>
                    <div className="flex mt-[7px]">
                      <div className="basis-[210px] text-[1.1em] flex items-center border border-[#EEEEEE] min-w-[210px] py-[5px] px-[10px] bg-[#FAFAFB]">
                        Types of diet
                      </div>
                      <div className="w-full ">
                        <TagSelect
                          className="select-main-without-border min-h-[42px]"
                          searchOption={false}
                          closable={false}
                        />
                        <EditableInput
                          mainClass="!mt-0"
                          labelWidth="!hidden"
                          label=""
                        />
                      </div>
                    </div>
                    <div className=" mt-[7px]">
                      <EditableTextarea
                        labelWidth="basis-[210px] mr-[-1px] min-w-[180px]"
                        label="Favorite food"
                        initialValue={DietaryhistoryData?.favoriteFood || ""}
                        onInputChange={(value) =>
                          setDietaryValue({ ["favoriteFood"]: value })
                        }
                        handleSubmit={() => handleDietarySubmit(dietaryValue)}
                      />
                    </div>
                    <div className=" mt-[7px]">
                      <EditableTextarea
                        labelWidth="basis-[210px] mr-[-1px] min-w-[180px]"
                        label="Disliked food"
                        initialValue={DietaryhistoryData?.dislikeFood || ""}
                        onInputChange={(value) =>
                          setDietaryValue({ ["dislikeFood"]: value })
                        }
                        handleSubmit={() => handleDietarySubmit(dietaryValue)}
                      />
                    </div>
                    <div className="flex mt-[7px]">
                      <div className="basis-[210px] text-[1.1em] flex items-center border border-[#EEEEEE] min-w-[210px] py-[5px] px-[10px] bg-[#FAFAFB]">
                        Allergies
                      </div>
                      <div className="w-full ">
                        <TagSelect
                          className="select-main-without-border min-h-[42px]"
                          searchOption={false}
                          closable={false}
                        />
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
                        <TagSelect
                          className="select-main-without-border min-h-[42px]"
                          searchOption={true}
                          closable={false}
                        />
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
                        <TagSelect
                          className="select-main-without-border min-h-[42px]"
                          searchOption={false}
                          closable={false}
                        />
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
                      <ClosableSelect
                        label="Water intake"
                        labelWidth="basis-[210px] "
                        className="select-main-without-border  grow min-w-[100px] basis-[200px]"
                        searchOption={false}
                        option={clientType}
                        onChange={HandleValue}
                      />
                    </div>
                    <div className=" mt-[7px]">
                      <EditableTextarea
                        labelWidth="basis-[210px] mr-[-1px] min-w-[180px]"
                        label="Other information"
                        initialValue={DietaryhistoryData?.otherInfo || ""}
                        onInputChange={(value) =>
                          setDietaryValue({ ["otherInfo"]: value })
                        }
                        handleSubmit={() => handleDietarySubmit(dietaryValue)}
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
                    <button
                      onClick={() => {
                        setOpenObservations(true);
                        setObservationId();
                      }}
                    >
                      <Icon path={mdiPlus} size={1} />
                    </button>
                  </div>
                  <AddLogClient
                    observationData={observationId}
                    closeIcon={true}
                    className="max-w-[600px]"
                    title="Observations"
                    subtitle="Log your client's observations"
                    isOpen={openObservations}
                    setIsOpen={setOpenObservations}
                  />
                  <div className="p-[0_20px_20px]">
                    {Array.isArray(observationData) &&
                      observationData.map((data) => {
                        return (
                          <div
                            onClick={() => {
                              setOpenObservations(true);
                              setObservationId(data);
                            }}
                            className="h-[130px] bg-white cursor-pointer hover:bg-[#FAFAFB] p-[10px] border border-[#EEEEEE] rounded-[5px]"
                          >
                            {data?.observation}
                            <div className="h-[95px] break-all"></div>
                            <div className="text-[10px] pt-[2px] text-[#1AB394] float-right">
                              {data?.registrationDate}
                            </div>
                          </div>
                        );
                      })}
                    <div className="flex items-center justify-end">
                      <Pagination />
                    </div>
                    {observationData?.length === 0 && (
                      <p className="text-[#888888] italic text-center">
                        You haven't logged any observations
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-span-5">
                <div className="bg-white shadow-box1 rounded-[5px]">
                  <div className="p-[20px] pb-[15px] flex items-center justify-between 2lg:mt-[25px] mt-0">
                    <div>
                      <h3 className="text-[20px] leadin g-[24px] ">
                        Food Diaries
                      </h3>
                      <span className="text-[12px] text-[#888888]/[70%]">
                        Log your client's food diaries
                      </span>
                    </div>
                    <button onClick={openAddFoodDiaryModal}>
                      <Icon path={mdiPlus} size={1} />
                    </button>
                  </div>
                  <AddFoodDiary
                    closeIcon={true}
                    isOpen={foodDiaries}
                    setIsOpen={setFoodDiaries}
                    editfood={editFood}
                  />
                  <div className="p-[0_20px_20px]">
                    <div>
                      {foodDiariesData?.length > 0 &&
                        foodDiariesData?.map((item) => {
                          return (
                            <div
                              className="flex"
                              onClick={() => openEditFoodDiaryModal(item)}
                              key={item.id}
                            >
                              <div className="flex-1 h-[130px] p-[10px] mb-0 rounded-[5px] border border-[#EEEEEE]">
                                <div className="w-full h-[95px] text-[12px] overflow-hidden text-[#676A6C] relative">
                                  <div className="font-[300]">
                                    {item.addMeal.map((item) => {
                                      return (
                                        <>
                                          <strong> {item.mealType}: </strong>
                                          {item.value}
                                          <br />
                                        </>
                                      );
                                    })}
                                    <strong> {item.observation}</strong>
                                    <br />
                                  </div>
                                  <div className="absolute left-0 bottom-0 w-full h-[45px] text-[#f36e6e00]"></div>
                                </div>
                                <div className="float-right text-[10px] font-[400] pt-[2px] text-[#1AB394]">
                                  {item.registrationDate}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
                <div className="bg-white shadow-box1 mt-[25px] rounded-[5px]">
                  <div className="p-[20px] pb-[15px] flex items-center justify-between 2lg:mt-[25px] mt-0">
                    <div>
                      <h3 className="text-[20px] leading-[24px] ">
                        Eating behaviour
                      </h3>
                      <span className="text-[12px] text-[#888888]/[70%]">
                        Log your client's eating behaviour
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        setEating(true);
                        setEatingId();
                      }}
                    >
                      <Icon path={mdiPlus} size={1} />
                    </button>
                  </div>
                  <AddLogClient
                    active={true}
                    eatingBehaviourData={eatingId}
                    closeIcon={true}
                    className="max-w-[900px]"
                    title="Eating behaviour"
                    subtitle="Log your client's eating behaviour"
                    isOpen={eating}
                    setIsOpen={setEating}
                  />
                  <div className="p-[0_20px_20px]">
                    {Array.isArray(eatingBehaviourData) &&
                      eatingBehaviourData.map((data) => {
                        return (
                          <div
                            onClick={() => {
                              setEating(true);
                              setEatingId(data);
                            }}
                            className="h-[130px] bg-white cursor-pointer hover:bg-[#FAFAFB] p-[10px] border border-[#EEEEEE] rounded-[5px]"
                          >
                            {data?.behaviour}
                            <div className="h-[95px] break-all"></div>
                            <div className="text-[10px] pt-[2px] text-[#1AB394] float-right">
                              {data?.date}
                            </div>
                          </div>
                        );
                      })}
                    <div className="flex items-center justify-end">
                      <Pagination />
                    </div>
                    {eatingBehaviourData?.length === 0 && (
                      <p className="text-[#888888] italic text-center">
                        You haven't logged any observations
                      </p>
                    )}
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
                        <TagSelect
                          className="select-main-without-border min-h-[42px]"
                          searchOption={false}
                          closable={false}
                          // option={medicalValue?.diseases.map((disease, index) => ({ value: index, option: disease }))}
                        />
                        <EditableInput
                          mainClass="!mt-0"
                          labelWidth="!hidden"
                          label=""
                          initialValue={medicalData?.diseases.join(",")}
                          onInputChange={(value) =>
                            setMedicalValue({ ["diseases"]: value })
                          }
                          handleSubmit={() =>
                            handleMedicalHistorySubmit(medicalValue)
                          }
                        />
                      </div>
                    </div>
                    <div className=" mt-[7px]">
                      <EditableTextarea
                        labelWidth="basis-[120px] mr-[-1px] min-w-[120px]"
                        label="  Medication"
                        initialValue={medicalData?.medication || ""}
                        onInputChange={(value) =>
                          setMedicalValue({ ["medication"]: value })
                        }
                        handleSubmit={() =>
                          handleMedicalHistorySubmit(medicalValue)
                        }
                      />
                    </div>
                    <div className=" mt-[7px]">
                      <EditableTextarea
                        labelWidth="basis-[120px] mr-[-1px] min-w-[120px]"
                        label="Personal history"
                        initialValue={medicalData?.pesonalhistory || ""}
                        onInputChange={(value) =>
                          setMedicalValue({ ["pesonalhistory"]: value })
                        }
                        handleSubmit={() =>
                          handleMedicalHistorySubmit(medicalValue)
                        }
                      />
                    </div>
                    <div className=" mt-[7px]">
                      <EditableTextarea
                        labelWidth="basis-[120px] mr-[-1px] min-w-[120px]"
                        label="Family history"
                        initialValue={medicalData?.familyHistory || ""}
                        onInputChange={(value) =>
                          setMedicalValue({ ["familyHistory"]: value })
                        }
                        handleSubmit={() =>
                          handleMedicalHistorySubmit(medicalValue)
                        }
                      />
                    </div>
                    <div className=" mt-[7px]">
                      <EditableTextarea
                        labelWidth="basis-[120px] mr-[-1px] min-w-[120px]"
                        label="Other information"
                        initialValue={medicalData?.otherInfo || ""}
                        onInputChange={(value) =>
                          setMedicalValue({ ["otherInfo"]: value })
                        }
                        handleSubmit={() =>
                          handleMedicalHistorySubmit(medicalValue)
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-white shadow-box1 rounded-[5px] mt-[25px]">
                  <div className="p-[20px] pb-[15px] flex items-center justify-between 2lg:mt-[25px] mt-0">
                    <div>
                      <h3 className="text-[20px] leading-[24px] ">Goals</h3>
                      <span className="text-[12px] text-[#888888]/[70%]">
                        Goals the client wants to achieve
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        setGoals(true);
                        setGoalId();
                      }}
                    >
                      <Icon path={mdiPlus} size={1} />
                    </button>
                  </div>
                  <AddGoals
                    active={true}
                    goalData={goalId}
                    closeIcon={true}
                    className="max-w-[600px]"
                    title="Set a new goal"
                    subtitle="It's a good way to keep your client motivated"
                    isOpen={goals}
                    setIsOpen={setGoals}
                  />

                  <div className="p-[0_20px_20px]">
                    {goalData?.length > 0 ? (
                      goalData?.map((item) => {
                        console.log(item, "item----=");

                        const [day, month, year] = item.deadline.split("/");
                        const deadlineDate = new Date(
                          `${year}-${month}-${day}T00:00:00.000Z`
                        );
                        // Format date as "28 of Sep"
                        const formattedDate = `${day} of ${deadlineDate.toLocaleString(
                          "default",
                          { month: "short" }
                        )}`;
                        return (
                          <div
                            className={` flex select-none admin-select-field mt-[7px] p-[0_20px_20px]`}
                          >
                            <div
                              className={` md:basis-[140px] md:min-w-[140px] flex border bg-[#FAFAFB] text-[1.1em] items-center z-[1] px-2.5 py-[5px] border-solid border-[#EEEEEE]`}
                            >
                              {/* {item.deadline} */}

                              {formattedDate}
                            </div>
                            <div className="grow-[3] border-[1px_solid_#EEEEEE] border-l-0 flex select-none">
                              {item.goalType ==
                              "Generic (Sports and food routines, among others)" ? (
                                <div className="select-field flex-grow border-[#EEEEEE] relative border-[1px]">
                                  <div className="w-full group h-full border-none outline-none pr-[24px] min-h-[38px] p-[10px] focus:ring-0">
                                    {item.description}

                                    <div className="absolute group-hover:block left-0 top-0 bottom-0 h-full mt-auto mb-auto bg-[#eeeeee26] hidden w-full min-h-[38px]">
                                      <MdOutlineDelete
                                        className="relative ml-[50%] whitespace-nowrap inline-block align-middle bg-[#fff] border border-[#EEEEEE] rounded-[50%] w-[27px] text-[27px] p-1 m-[7px]"
                                        onClick={() =>
                                          handleCancel(
                                            item.goalId,
                                            item._id,
                                            item.clientId,
                                            item.userId
                                          )
                                        }
                                      />
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <div className="select-field flex-grow border-[#EEEEEE] relative border-[1px]">
                                  <div className="w-full group h-full border-none outline-none pr-[24px] min-h-[38px] p-[10px] focus:ring-0">
                                    {item.measurementType}{item.value} {item.unit}

                                    <div className="absolute group-hover:block left-0 top-0 bottom-0 h-full mt-auto mb-auto bg-[#eeeeee26] hidden w-full min-h-[38px]">
                                      <MdOutlineDelete
                                        className="relative ml-[50%] whitespace-nowrap inline-block align-middle bg-[#fff] border border-[#EEEEEE] rounded-[50%] w-[27px] text-[27px] p-1 m-[7px]"
                                        onClick={() =>
                                          handleCancel(
                                            item.goalId,
                                            item._id,
                                            item.clientId,
                                            item.userId
                                          )
                                        }
                                      />
                                    </div>
                                  </div>
                                </div>
                              )}
                              {/* {isFocused ? ( */}
                              <>
                                <button
                                  type="button"
                                  onClick={() => {
                                    setIsDisabled(true);
                                  }}
                                  className={` clr-grn flex cursor-pointer items-center align-middle bg-[#FAFAFB] p-2.5 border-l-[#EEEEEE] border-[1px]`}
                                  disabled={isDisabled}
                                >
                                  <Icon
                                    path={mdiCheck}
                                    size="18px"
                                    color="#1ab394"
                                  />
                                </button>
                                <div
                                  className={` clr-grn flex cursor-pointer items-center align-middle bg-[#FAFAFB] p-2.5 border-l-[#EEEEEE] border-[1px]`}
                                  disabled={isDisabled}
                                >
                                  <Icon
                                    path={mdiClose}
                                    size="18px"
                                    color={"#DB4965"}
                                    // onClick={() =>
                                    //   handleCancel(
                                    //     item.goalId,
                                    //     item._id,
                                    //     item.clientId,
                                    //     item.userId
                                    //   )
                                    // }
                                  />
                                </div>
                              </>
                              {/* ) : ( */}
                              {/* <button
                                type="button"
                                className={` clr-grn flex cursor-pointer items-center align-middle bg-[#FAFAFB] p-2.5 border-l-[#EEEEEE] border-[1px]`}
                              >
                                <Icon
                                  path={mdiBorderColor}
                                  size="18px"
                                  color={"#1ab394"}
                                />
                              </button> */}
                              {/* )} */}
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <p className="text-[#888888] italic text-center">
                        No goals defined yet.
                      </p>
                    )}
                  </div>
                </div>
                <div className="bg-white shadow-box1 rounded-[5px] mt-[25px]">
                  <div className="p-[20px] pb-[15px] flex items-center justify-between 2lg:mt-[25px] mt-0">
                    <div>
                      <h3 className="text-[20px] leading-[24px] ">Files</h3>
                      <span className="text-[12px] text-[#888888]/[70%]">
                        Files attached to this client
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BsFilter className="text-[24px]" />
                      <button onClick={() => setAddFile(true)}>
                        <Icon path={mdiPlus} size={1} />
                      </button>
                    </div>
                  </div>
                  <AddFile
                    closeIcon={true}
                    className="max-w-[600px]"
                    title="Add file"
                    subtitle="Attach a file to this client's profile"
                    isOpen={addFile}
                    setIsOpen={setAddFile}
                  />
                  {/* <div className="p-2">
                        <GrDocumentText />
                      </div> */}
                  <div className="px-4 py-2">
                    <div
                      className={`h-[150px] bg-white cursor-pointer border border-[#EEEEEE] ${
                        isHovering ? "bg-[#888888]/[10%]" : ""
                      } rounded-[5px] flex flex-col justify-between`}
                      onMouseOver={() => setIsHovering(true)}
                      onMouseOut={() => setIsHovering(false)}
                    >
                      {isHovering ? (
                        fileData?.map((data) => {
                          return (
                            <>
                              <div className="float-left pt-2 pb-6 pl-2">
                                <div className="text-[13px] font-medium text-[#1AB394] ">
                                  <span>{data?.name}</span>
                                </div>
                                <div className="flex flex-col mt-[5px]">
                                  <span className="pt-1 font-medium">
                                    {data?.description}
                                  </span>
                                  <span className="pt-1">{data?.date}</span>
                                </div>
                              </div>
                              <div className="float-left px-2 flex justify-between">
                                <div>DOCX</div>
                                <div className="flex">
                                  <MdDelete className="w-[17px] h-[17px] mr-2" />
                                  <MdDownload className="w-[17px] h-[17px] mr-2" />
                                  <MdModeEdit className="w-[17px] h-[17px]" />
                                </div>
                              </div>
                            </>
                          );
                        })
                      ) : (
                        <>
                          <div className="ml-[40%] p-2">
                            <GrDocumentText className="w-[80px] h-[80px]" />
                          </div>
                          <hr />
                          <div className="text-[13px] font-medium text-[#1AB394] float-left py-2 pl-2">
                            {fileData?.map((data) => {
                              return <span>{data?.name}</span>;
                            })}
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* <div className="p-[0_20px_20px]">
                    <p className="text-[#888888] italic text-center">
                      There aren't any files associated to this filter
                    </p>
                  </div> */}
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
