
import React, { useState } from "react";
import Modal from '../../common/Modal'
import DatePicker from "react-datepicker";


const AddObservations = (props) => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div>
            <Modal
                title={"Food Diary"}
                subtitle={"Log your client's food diary"}
                isOpen={props.isOpen}
                className="max-w-[900px]"

                setIsOpen={props.setIsOpen}>
                <div className="px-[30px] pt-[0] py-[20px]">
                    <div className="flex">
                        <div className="basis-[215px] text-[1.1em] flex items-center min-h-[38px]  h-full border border-[#EEEEEE] min-w-[215px] py-[5px] px-[10px] bg-[#FAFAFB]">
                            Reason for appointment
                        </div>
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            showYearDropdown
                            className="flex-1 border w-full text-[13px] ml-[-1px] focus:ring-0 focus:outline-none focus:border-[#EEEEEE] min-h-[38px] py-[5px] px-[10px] border-[#EEEEEE]"
                            dateFormatCalendar="MMMM"
                            yearDropdownItemNumber={15}
                            scrollableYearDropdown
                        />
                    </div>
                    <div className="flex mt-[7px]">
                        <div className="basis-[215px] text-[1.1em] flex items-center min-h-[38px] border border-[#EEEEEE] min-w-[215px] py-[5px] px-[10px] bg-[#FAFAFB]">
                            Observations
                        </div>
                        <textarea rows="1" className="flex-1 border ml-[-1px] min-h-[56px] w-full text-[13px] focus:ring-0 focus:outline-none focus:border-[#EEEEEE] min-h-[38px] py-[5px] px-[10px] border-[#EEEEEE]"></textarea>
                    </div>
                    <div className="text-end mt-[20px] ">
                        <button className="bg-white  border rounded-[3px] text-[14px] px-[12px] py-[6px]">Cancel</button>
                        <button className="bg-[#1AB394] ml-[5px] text-[#FFFFFF] rounded-[3px] text-[14px] px-[12px] py-[6px]">Save</button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default AddObservations
