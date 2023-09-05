import { mdiBorderColor, mdiCheck, mdiClose } from "@mdi/js";
import Icon from "@mdi/react";
import React, { useState } from "react";

const TimePicker = (props) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <div>
            <div className={`flex select-none admin-select-field ${props.className}`}>
                <div
                    className={`${props?.labelWidth}  flex border bg-[#FAFAFB] text-[1.1em] items-center z-[1] px-2.5 py-[5px] border-solid border-[#EEEEEE]`}
                >
                    {props?.label}
                </div>
                <div className="flex-grow border-[1px_solid_#EEEEEE] border-l-0 flex select-none">
                    <div className="select-field flex-grow border-[#EEEEEE] relative border-[1px]">
                        <span className={`p-[10px] block ${isFocused ? "" : "hidden"}`}>
                            <select
                                className="border-none text-[14px] focus:outline-none focus:border-none focus:ring-0 focus:shadow-none !py-[0px] !pl-[0] !pr-[25px]"
                                onChange={(e) => props.onChange("hour", e.target.value)}
                                value={props.selectedHour}
                            >
                                <option value="">hour</option>
                                {Array.from({ length: props?.hour ? props?.hour : 24 }).map((_, index) => (
                                    <option key={index} value={index}>{index}</option>
                                ))}
                            </select>
                            &nbsp;
                            <select
                                className="border-none text-[14px] focus:outline-none focus:border-none focus:ring-0 focus:shadow-none !py-[0px] !pl-[0] !pr-[25px]"
                                onChange={(e) => props.onChange("minute", e.target.value)}
                                value={props.selectedMinute}
                            >
                                <option value="">minute</option>
                                {Array.from({ length: props?.min ? props?.min : 60 / (props?.minuteStep || 1) }).map((_, index) => (
                                    <option key={index} value={index * (props?.minuteStep || 1)}>{index * (props?.minuteStep || 1)}</option>
                                ))}
                            </select>
                        </span>
                        <span className={`p-[10px] block ${!isFocused ? "" : "hidden"}`}>
                         {props?.selectedHour ? props?.selectedHour : '00'}:{props?.selectedMinute ? props?.selectedMinute : '00'}
                        </span>
                    </div>
                    {isFocused ? (
                        <>
                            <div className="clr-grn flex cursor-pointer items-center align-middle bg-[#FAFAFB] p-2.5 border-l-[#EEEEEE] border-[1px]">
                                <Icon
                                    path={mdiCheck}
                                    size="18px"
                                    color="#1ab394"
                                    onClick={handleBlur}
                                />
                            </div>
                            <div className="clr-grn flex cursor-pointer items-center align-middle bg-[#FAFAFB] p-2.5 border-l-[#EEEEEE] border-[1px]">
                                <Icon
                                    path={mdiClose}
                                    size="18px"
                                    color={"#DB4965"}
                                    onClick={handleBlur}
                                />
                            </div>
                        </>
                    ) : (
                        <div className="clr-grn flex cursor-pointer items-center align-middle bg-[#FAFAFB] p-2.5 border-l-[#EEEEEE] border-[1px]">
                            <Icon
                                path={mdiBorderColor}
                                size="18px"
                                color={"#1ab394"}
                                onClick={handleFocus}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default TimePicker
