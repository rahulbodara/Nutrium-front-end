import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import Modal from '../../common/Modal';
import Icon from '@mdi/react';
import { mdiPaperclip } from '@mdi/js';
import { createFileDiery, getFilesData } from '@/redux/action/auth';
import { handleApiCall } from "@/util/apiUtils";
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import moment from 'moment'

const AddFile = (props) => {
    const router = useRouter();
    const { query } = router;
    const dispatch = useDispatch()
    const [formValues, setFormValues] = useState({
        file: null,
        name: '',
        description: '',
        date: new Date(),
        category: 'Others',
    });
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFormValues({
            ...formValues,
            file: file,
        });
    };

    const handleDateChange = (date) => {
        setFormValues({
            ...formValues,
            date: date,
        });
    };

    const handleCategoryChange = (event) => {
        const category = event.target.value;
        setFormValues({
            ...formValues,
            category: category,
        });
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        if (formValues.file) {
            formData.append('file', formValues?.file);
        }
        formData.append('name', formValues.name);
        formData.append('description', formValues.description);
        formData.append('date', moment(formValues.date).format('DD/MM/YYYY'));
        formData.append('category', formValues.category);

        const success = await handleApiCall(
        dispatch,
        createFileDiery(formData, query.id),
        'File diery created successfully.'
        )
        console.log("success", success)
        if(success) {
            dispatch(getFilesData(query.id))
            props.setIsOpen(false)
        }
    };

    return (
        <div>
            <Modal
                title={props?.title}
                subtitle={props?.subtitle}
                isOpen={props.isOpen}
                className={props?.className}
                closeIcon={props?.closeIcon}
                setIsOpen={props.setIsOpen}
            >
                <div className="px-[30px] pt-[0] py-[20px]">
                    <div className="flex items-center">
                        <div className="basis-[100px] text-[1.1em] flex items-center min-h-[38px]  h-full border border-[#EEEEEE] min-w-[100px] py-[5px] px-[10px] bg-[#FAFAFB]">File</div>
                        <div className="flex flex-1 ml-[-1px] h-[38px] items-center border border-[#EEEEEE]">
                            <input
                                className="relative bg-white mb-[20px] mr-[20px] hidden"
                                type="file"
                                id="file-input"
                                onChange={handleFileChange}
                                name="file"
                            />
                            <label htmlFor="file-input" className="p-[10px] h-[38px] flex-1 ">
                                {formValues.file && formValues.file.name}
                            </label>
                            <label
                                htmlFor="file-input"
                                className="text-[#1AB394] active:shadow-insetbtn h-[38px] p-[8px] border-l bg-[#FAFAFB] border border-[#EEEEEE]"
                            >
                                <Icon path={mdiPaperclip} size={0.8} />
                            </label>
                        </div>
                    </div>
                    <div className="flex mt-[7px] items-center">
                        <div className="basis-[100px]  text-[1.1em] flex items-center min-h-[38px]  h-full border border-[#EEEEEE] min-w-[100px] py-[5px] px-[10px] bg-[#FAFAFB]">Name</div>
                        <input
                            className="relative flex-1 ring-0 focus:outline-none focus:ring-0 focus:border-[#EEEEEE] bg-white ml-[-1px] h-[38px] items-center border border-[#EEEEEE]"
                            type="text"
                            name="name"
                            value={formValues.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="flex mt-[7px]">
                        <div className="basis-[100px] text-[1.1em] flex items-center border border-[#EEEEEE] min-w-[100px] py-[5px] px-[10px] bg-[#FAFAFB]">Description</div>
                        <textarea
                            className="relative flex-1 ring-0 focus:outline-none focus:ring-0 focus:border-[#EEEEEE] bg-white ml-[-1px] min-h-[56px] items-center border border-[#EEEEEE]"
                            type="text"
                            name="description"
                            value={formValues.description}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="flex mt-[7px]">
                        <div className="basis-[100px] text-[1.1em] flex items-center min-h-[38px]  h-full border border-[#EEEEEE] min-w-[100px] py-[5px] px-[10px] bg-[#FAFAFB]">
                            Date
                        </div>
                        <DatePicker
                            selected={formValues.date}
                            onChange={handleDateChange}
                            showYearDropdown
                            className="flex-1 border w-full text-[13px] ml-[-1px] focus:ring-0 focus:outline-none focus:border-[#EEEEEE] min-h-[38px] py-[5px] px-[10px] border-[#EEEEEE]"
                            dateFormatCalendar="MMMM"
                            yearDropdownItemNumber={15}
                            scrollableYearDropdown
                        />
                    </div>
                    <div className="flex mt-[7px] items-center">
                        <div className="basis-[100px]  text-[1.1em] flex items-center min-h-[38px]  h-full border border-[#EEEEEE] min-w-[100px] py-[5px] px-[10px] bg-[#FAFAFB]">Category</div>

                        <select
                            className="relative flex-1 ring-0 text-[13px] focus:outline-none focus:ring-0 focus:border-[#EEEEEE] bg-white ml-[-1px] h-[38px] items-center border border-[#EEEEEE]"
                            required="required"
                            aria-required="true"
                            name="category"
                            id="document_document_category_id"
                            aria-invalid="false"
                            value={formValues.category}
                            onChange={handleCategoryChange}
                        >
                            <option value="Photo">Photo</option>
                            <option value="Meal Plan">Meal plan</option>
                            <option value="Biochemistry">Biochemistry</option>
                            <option value="Privacy/Consent">Privacy/Consent</option>
                            <option value="Patient Informations">Patient information</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                    <div className="text-end mt-[20px]">
                        <button onClick={() => props.setIsOpen(false)} className="bg-white  border rounded-[3px] text-[14px] px-[12px] py-[6px]">Cancel</button>
                        <button onClick={handleSubmit} className="bg-[#1AB394] ml-[5px] text-[#FFFFFF] rounded-[3px] text-[14px] px-[12px] py-[6px]">Save</button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default AddFile;
