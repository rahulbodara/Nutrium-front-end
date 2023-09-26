
import React, { useState, Fragment, useRef, useEffect } from "react";
import Modal from '../../common/Modal'
import DatePicker from "react-datepicker";
import { mdiDotsVertical } from "@mdi/js";
import Icon from "@mdi/react";
import { Menu, Transition } from '@headlessui/react'
import "select2/dist/css/select2.min.css";
import $ from "jquery";
import "select2";
import SelectMenu from "../../common/SelectMenu";

const option = [
    {
        option: 'das',
        value: 'das'
    },
    {
        option: 'das1',
        value: 'das1'
    },
    {
        option: 'das2',
        value: 'das2'
    },
    {
        option: 'das3',
        value: 'das3'
    },
]

const AddFoodDiary = (props) => {
    const [startDate, setStartDate] = useState(new Date());


    const selectRef = useRef(null);
    useEffect(() => {
        const $select = $(selectRef.current);

        $select.select2({
            minimumResultsForSearch: 0,
        });

        $select.on("change", (e) => {
            const selectedValue = e.target.value;
            if (props?.onChange) {
                props?.onChange(selectedValue);
            }
        });

        return () => {
            $select.off("change");
            $select.select2("destroy");
        };
    }, [props?.searchOption]);
    return (
        <div>
            <Modal
                title={"Food Diary"}
                subtitle={"Log your client's food diary"}
                isOpen={props.isOpen}
                className="max-w-[900px]"
                closeIcon={props?.closeIcon}
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
                        <div className="basis-[215px] justify-between text-[1.1em] flex items-center min-h-[38px] border border-[#EEEEEE] min-w-[215px] py-[5px] px-[10px] bg-[#FAFAFB]">
                            <span>
                                Afternoon snack
                            </span>
                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <Menu.Button className="flex items-center rounded-full focus:outline-none focus:ring-0  focus:ring-offset-0 ">
                                        <Icon path={mdiDotsVertical} size={0.7} />
                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute left-0 z-10 mt-2 w-[160px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1">
                                            <Menu.Item >

                                                <a
                                                    href="#"
                                                    className='hover:bg-[#f5f5f5]  rounded-[3px] m-[4px] leading-[25px] hover:text-[#262626] block px-[20px] py-[3px] text-[12px]'
                                                >
                                                    Rename
                                                </a>

                                            </Menu.Item>
                                            <Menu.Item>

                                                <a
                                                    href="#"
                                                    className='hover:bg-[#f5f5f5] rounded-[3px] m-[4px] leading-[25px] hover:text-[#262626] block px-[20px] py-[3px] text-[12px]'

                                                >
                                                    Remove
                                                </a>

                                            </Menu.Item>

                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>

                        </div>
                        <textarea rows="1" className="flex-1 border ml-[-1px] min-h-[56px] w-full text-[13px] focus:ring-0 focus:outline-none focus:border-[#EEEEEE] min-h-[38px] py-[5px] px-[10px] border-[#EEEEEE]"></textarea>
                    </div>
                    <div className="flex mt-[7px]">

                       <SelectMenu option={option} SelectClass=""  className="text-left custom-drop basis-[215px] justify-between h-full text-[1.1em] flex items-center min-h-[38px] border border-[#EEEEEE] min-w-[215px]  bg-[#FAFAFB] focus:outline-none focus:ring-0  focus:ring-offset-0 " />

                        <div className="flex-1 border ml-[-1px] w-full text-[13px] focus:ring-0 focus:outline-none focus:border-[#EEEEEE] min-h-[38px] py-[5px] px-[10px] border-[#EEEEEE]"></div>
                    </div>
                    <div className="flex mt-[7px]">
                        <div className="basis-[215px] text-[1.1em] flex items-center min-h-[38px] border border-[#EEEEEE] min-w-[215px] py-[5px] px-[10px] bg-[#FAFAFB]">
                            Observations
                        </div>
                        <textarea rows="1" className="flex-1 border ml-[-1px] min-h-[56px] w-full text-[13px] focus:ring-0 focus:outline-none focus:border-[#EEEEEE] min-h-[38px] py-[5px] px-[10px] border-[#EEEEEE]"></textarea>
                    </div>
                    <div className="text-end mt-[20px] ">
                        <button onClick={() => props.setIsOpen(false)} className="bg-white  border rounded-[3px] text-[14px] px-[12px] py-[6px]">Cancel</button>
                        <button className="bg-[#1AB394] ml-[5px] text-[#FFFFFF] rounded-[3px] text-[14px] px-[12px] py-[6px]">Save</button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default AddFoodDiary
