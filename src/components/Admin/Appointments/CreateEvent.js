import {
  mdiAccount,
  mdiCalendarClock,
  mdiHelpCircleOutline,
  mdiInformationOutline,
  mdiPencil,
} from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";
import Modal from "../common/Modal";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { event } from "@/schema/event";
import { CreateEventData } from "@/redux/action/event";
import { handleApiCall } from "@/util/apiUtils";
import { useDispatch } from "react-redux";

const CreateEvent = (props) => {
  const dispatch = useDispatch()
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
   resolver: yupResolver(event),
    mode: "onBlur"
  });
  const onSubmit = async(data)=>{
    try {
      const updatedFormData = {
        ...data,
      };
      const success = await handleApiCall(
      dispatch,
      CreateEventData(updatedFormData),
      'Event Scheduled successfully'
    );
    if (success) {
      // dispatch(GetAllWorkplace());
      props.setIsOpen(false);
    }
    reset()
   }catch(error){
    console.log(error);
   }
  }
  return (
    <>
      <Modal
        title={"Create an event"}
        subtitle={"Create an event on your calendar"}
        isOpen={props.isOpen}
        className="max-w-[600px]"
        setIsOpen={props.setIsOpen}
      >
        <div className="px-[30px] pb-[20px]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-[15px]">
              <label className="font-bold text-[13px] flex  mb-[5px] gap-1">
                Title
              </label>
              <div className="flex">
                <div className="border h-[34px] w-[43px] flex items-center justify-center border-[#e5e6e7] px-3 py-[6px]">
                  <Icon path={mdiPencil} size={0.7} />
                </div>
                <input
                  type="text"
                  {...register("title")}
                  className="px-3 h-[34px] ml-[-1px] focus:border-[#1ab394] focus:outline-none focus:ring-0 outline-none trnasition duration-300 w-full py-[6px] border border-[#e5e6e7] text-[13px]"
                />
              </div>
              <p className="block mt-[5px] font-bold text-[13px] text-[#cc5965]">
                {errors.title?.message}
              </p>
            </div>
            <div className="mb-[15px]">
              <label className="font-bold text-[13px] flex  mb-[5px] gap-1">
                Start of the event
              </label>
              <div className="flex">
                <div className="border h-[34px] w-[43px] flex items-center justify-center border-[#e5e6e7] px-3 py-[6px]">
                  <Icon path={mdiCalendarClock} size={0.7} />
                </div>
                <input
                  className="px-3 h-[34px] ml-[-1px] focus:border-[#1ab394] focus:outline-none focus:ring-0 outline-none trnasition duration-300 w-full py-[6px] border border-[#e5e6e7] text-[13px]"
                  type={"datetime-local"}
                  {...register("start")}
                />
              </div>
            </div>
            <div className="mb-[15px]">
              <label className="font-bold text-[13px] flex  mb-[5px] gap-1">
                End of the event
              </label>
              <div className="flex">
                <div className="border h-[34px] w-[43px] flex items-center justify-center border-[#e5e6e7] px-3 py-[6px]">
                  <Icon path={mdiCalendarClock} size={0.7} />
                </div>
                <input
                  className="px-3 h-[34px] ml-[-1px] focus:border-[#1ab394] focus:outline-none focus:ring-0 outline-none trnasition duration-300 w-full py-[6px] border border-[#e5e6e7] text-[13px]"
                  type={"datetime-local"}
                  {...register("end")}
                />
              </div>
            </div>
            <div className="flex gap-2  items-center mb-2.5">
              <input
                id="allday"
                name="eventCheck"
                type="checkbox"
                className="h-4 w-4 rounded-full border-gray-300 text-[#1AB394] focus:ring-0"
              />
              <label
                htmlFor="allday"
                className="text-[13px] select-none cursor-pointer"
              >
                All day
              </label>{" "}
            </div>
            <div className="flex gap-2  items-center mb-2.5">
              <input
                id="blockCalendar"
                name="eventCheck"
                type="checkbox"
                className="h-4 w-4 rounded-full border-gray-300 text-[#1AB394] focus:ring-0"
              />
              <label
                htmlFor="blockCalendar"
                className="text-[13px] cursor-pointer select-none"
              >
                Block calendar
              </label>{" "}
              <Icon
                path={mdiHelpCircleOutline}
                size={"18px"}
                data-tooltip-id="blockCalender"
              />
            </div>
            <div className="flex gap-2  items-center mb-2.5">
              <input
                id="Synchronize"
                name="eventCheck"
                type="checkbox"
                className="h-4 w-4 rounded-full border-gray-300 text-[#1AB394] focus:ring-0"
              />
              <label
                htmlFor="Synchronize"
                className="text-[13px] select-none cursor-pointer"
              >
                Synchronize event with Google Calendar
              </label>{" "}
            </div>
            <div className="flex items-center justify-between">
              <button
                className="px-3 hover:bg-[#FAFAFB] trnasition duration-200 border rounded-[3px] text-[14px] py-[6px]"
                onClick={() => {
                  props.setIsOpen(false);
                  props.setDateModal(true);
                }}
              >
                Back
              </button>
              <div>
                <button
                  className="px-3 hover:bg-[#FAFAFB] trnasition duration-200 border rounded-[3px] text-[14px] py-[6px]"
                  onClick={() => {
                    props.setIsOpen(false);
                  }}
                >
                  Cancel
                </button>
                <button
                  className="px-3 ml-[5px] rounded-[3px] border hover:bg-[#18a689] border-[#1AB394] bg-[#1AB394] text-[#FFFFFF] text-[14px] py-[6px]"
                  type="submit"
                >
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>
      </Modal>
      <ReactTooltip
        id="blockCalender"
        place="top"
        content="This option will inform you whenever you try to schedule an appointment at the same time of this event. It will also prevent secretaries from scheduling appointments at this time."
        className="!p-[3px_8px] !bg-[#2f4050] max-w-[200px] opacity-[.9] text-center z-[99999]"
      />
    </>
  );
};

export default CreateEvent;
