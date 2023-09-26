import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import Modal from '../../common/Modal';
import Icon from '@mdi/react';
import { mdiPaperclip } from '@mdi/js';

const AddFile = (props) => {
    const [startDate, setStartDate] = useState(new Date());
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        // You can perform any additional actions with the selected file here.
    };

    return (
        <div>
            <Modal
                title={props?.title}
                subtitle={props?.subtitle}
                isOpen={props.isOpen}
                className={props?.className}
                closeIcon={props?.closeIcon}
                setIsOpen={props.setIsOpen}>
                <div className="px-[30px] pt-[0] py-[20px]">
                    <div class="flex items-center">
                        <div className="basis-[100px] text-[1.1em] flex items-center min-h-[38px]  h-full border border-[#EEEEEE] min-w-[100px] py-[5px] px-[10px] bg-[#FAFAFB]">File</div>
                        <div className="flex flex-1 ml-[-1px] h-[38px] items-center border border-[#EEEEEE]">
                            <input className="relative bg-white mb-[20px] mr-[20px] hidden" type="file"
                                id="file-input"
                                onChange={handleFileChange}
                                name="document[file]" />
                            <label htmlFor="file-input" className=" p-[10px] h-[38px] flex-1 ">{selectedFile && selectedFile.name}</label>
                            <label htmlFor="file-input" className="text-[#1AB394] active:shadow-insetbtn h-[38px] p-[8px] border-l bg-[#FAFAFB] border border-[#EEEEEE]">
                                <Icon path={mdiPaperclip} size={0.8} />
                            </label>
                        </div>
                    </div>
                    <div class="flex mt-[7px] items-center">
                        <div className="basis-[100px]  text-[1.1em] flex items-center min-h-[38px]  h-full border border-[#EEEEEE] min-w-[100px] py-[5px] px-[10px] bg-[#FAFAFB]">Name</div>
                        <input className="relative flex-1 ring-0 focus:outline-none focus:ring-0 focus:border-[#EEEEEE] bg-white ml-[-1px] h-[38px] items-center border border-[#EEEEEE]" type="text" />
                    </div>
                    <div class="flex mt-[7px]">
                        <div className="basis-[100px] text-[1.1em] flex items-center border border-[#EEEEEE] min-w-[100px] py-[5px] px-[10px] bg-[#FAFAFB]">Description</div>
                        <textarea className="relative flex-1 ring-0 focus:outline-none focus:ring-0 focus:border-[#EEEEEE] bg-white ml-[-1px] min-h-[56px] items-center border border-[#EEEEEE]" type="text" />
                    </div>
                    <div className="flex mt-[7px]">
                        <div className="basis-[100px] text-[1.1em] flex items-center min-h-[38px]  h-full border border-[#EEEEEE] min-w-[100px] py-[5px] px-[10px] bg-[#FAFAFB]">
                            Date
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
                    <div class="flex mt-[7px] items-center">
                        <div className="basis-[100px]  text-[1.1em] flex items-center min-h-[38px]  h-full border border-[#EEEEEE] min-w-[100px] py-[5px] px-[10px] bg-[#FAFAFB]">Name</div>

                        <select className="relative flex-1 ring-0 text-[13px] focus:outline-none focus:ring-0 focus:border-[#EEEEEE] bg-white ml-[-1px] h-[38px] items-center border border-[#EEEEEE]" required="required" aria-required="true" name="document[document_category_id]" id="document_document_category_id" aria-invalid="false"><option value="0">Photo</option>
                            <option value="1">Meal plan</option>
                            <option value="2">Biochemistry</option>
                            <option value="4">Privacy/Consent</option>
                            <option value="5">Patient informations</option>
                            <option selected="selected" value="3">Other</option></select>
                        
                    </div>
                    <div className="text-end mt-[20px] ">
                        <button onClick={() => props.setIsOpen(false)} className="bg-white  border rounded-[3px] text-[14px] px-[12px] py-[6px]">Cancel</button>
                        <button className="bg-[#1AB394] ml-[5px] text-[#FFFFFF] rounded-[3px] text-[14px] px-[12px] py-[6px]">Save</button>
                    </div>
                </div>
            </Modal >
        </div >
    )
}

export default AddFile
