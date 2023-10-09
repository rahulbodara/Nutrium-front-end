import Icon from '@mdi/react';
import React, { useRef, useState } from 'react';
import { mdiCloseCircleOutline, mdiInformationOutline, mdiPencil } from '@mdi/js';


import 'select2';

const FieldSelect = (props) => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handlefalseClick = () => {
        setIsDropdownOpen(false);
    };



    return (
        <div className={`flex select-none admin-select-field ${props?.className}`}>
            {props?.label ? (
                <div
                    className={`${props?.labelWidth
                        } md:basis-[140px] md:min-w-[140px] flex border bg-[#FAFAFB] text-[1.1em] items-center z-[1] px-2.5 py-[5px] border-solid border-[#EEEEEE] ${isDropdownOpen ? "border-[#1ab394]" : "border-[#EEEEEE]"
                        }`}
                >
                    {props?.label}
                </div>
            ) : (
                ""
            )}
            {props?.Icon ? (
                <div
                    className={`flex border bg-[#FAFAFB] text-[1.1em] items-center z-[1] px-2.5 py-[5px] border-solid ${isDropdownOpen ? "!border-[#1ab394] border-r-0" : "border-[#EEEEEE]"
                        } border-[#EEEEEE]`}
                >
                    <Icon path={props.Icon} size="18px" />
                </div>
            ) : (
                ""
            )}
            <div
                className={`grow-[3] ${isDropdownOpen && props?.focusEffect
                    ? "!border-[1px_solid_#1ab394]"
                    : "border-[1px_solid_#EEEEEE]"
                    } border-[1px_solid_#EEEEEE] border-l-0 flex select-none`}
            >
                <div
                    className={`select-field   flex flex-wrap flex-grow border-[#EEEEEE] border-[1px] -ml-px border-r-0`}
                >
                    {props.data?.map((item, index) => {
                        return (
                            <div className='grow -mt-px p-2.5 border-t border-r' key={index}>
                                {item.name}
                            </div>
                        )
                    })}
                </div>
                {props.closable ? (
                    <>
                        {isDropdownOpen ? (
                            <div
                                className={`clr-grn flex cursor-pointer items-center align-middle ${isDropdownOpen && props?.focusEffect
                                    ? "!border-l-[#1ab394]"
                                    : "border-l-[#EEEEEE]"
                                    } bg-[#FAFAFB] p-2.5 border-[1px]`}
                            >
                                <Icon
                                    path={mdiCloseCircleOutline}
                                    size="18px"
                                    color="#1ab394"
                                    onClick={handlefalseClick}
                                />
                            </div>
                        ) : (
                            <div className="w-[40px] h-[40px] border-l-0 border-[#EEEEEE] border-[1px]"></div>
                        )}
                    </>
                ) : (
                    ""
                )}
                <div className={`clr-grn flex cursor-pointer items-center align-middle`}>
                    {
                        props.isEditable &&
                        <div onClick={props.handleEdit} className=" flex text-[#676A6C] transition hover:text-[#1ab394] h-full  -ml-px cursor-pointer items-center align-middle bg-[#FAFAFB] p-2.5 border-l-[#EEEEEE] border-[1px]">
                            <Icon path={mdiPencil} size={0.7} />
                        </div>
                    }
                    {
                        props.isInfo &&
                        <div className=" flex text-[#676A6C] transition hover:text-[#1ab394] h-full  -ml-px cursor-pointer items-center align-middle bg-[#FAFAFB] p-2.5 border-l-[#EEEEEE] border-[1px]">
                            <Icon path={mdiInformationOutline} size="18px" />
                        </div>
                    }

                </div>
            </div>
        </div>
    );
};


export default FieldSelect
