import React, { useState } from 'react'
import Modal from '../common/Modal'
import Icon from '@mdi/react'
import { mdiCheck } from '@mdi/js'
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const EditablefluidModal = (props) => {

    const handleAddRemoveemail = (item) => {
        if (props.selectedNutrition.includes(item)) {
            const arr = [...props.selectedNutrition];
            const index = arr.indexOf(item);
            if (index > -1) {
                // only splice array when item is found
                arr.splice(index, 1);
                props.setSelectedNutrition([...arr]); // 2nd parameter means remove one item only
            }
        } else {
            props.setSelectedNutrition([...props.selectedNutrition, item]);
        }
    };
    return (
        <Modal
            title={props?.title}
            subtitle={props?.subtitle}
            isOpen={props.isOpen}
            className={props?.className}
            closeIcon={props?.closeIcon}
            setIsOpen={props.setIsOpen}>
            <div className='sm:px-4 px-6 pb-6 grid gap-[7px]'>
                <h5 className='text-[13px]  font-bold text-[#676a6c]'>All clients</h5>
                {props.data.map((item, index) => {
                    return (

                        <div key={index} onClick={() => handleAddRemoveemail(item)}
                            className={classNames(
                                props.selectedNutrition?.includes(item)
                                    ? "border-[#1AB394]"
                                    : "",
                                "p-[10px_30px] cursor-pointer text-[13px] flex items-center relative font-noraml border text-[#676a6c]"
                            )}
                        >
                            {item.dis}
                            <Icon path={mdiCheck} size={0.9}
                                className={classNames(
                                    props.selectedNutrition?.includes(item)
                                        ? "block"
                                        : "hidden",
                                    "text-[#1AB394] absolute right-6"
                                )}

                            />
                        </div>
                    )
                })}
            </div>


            <div className={` sm:px-4 px-6 pb-6 mt-[20px]   ${props.observationData || props.eatingBehaviourData ? 'justify-between flex items-center' : ''}`}>
                {(props.observationData || props.eatingBehaviourData) && <button onClick={handleRemove} className="bg-[#DB4965]  border border-[#DB4965] text-white rounded-[3px] text-[14px] px-[12px] py-[6px]">
                    Remove
                </button>}
                <div className={`${props.observationData || props.eatingBehaviourData ? ' ' : 'flex justify-between w-full'}`}>
                    <button onClick={() => props.setIsOpen(false)} className="bg-white  border rounded-[3px] text-[14px] px-[12px] py-[6px]">
                        Close
                    </button>
                    <button
                        className="bg-[#1AB394] ml-[5px] text-[#FFFFFF] rounded-[3px] text-[14px] px-[12px] py-[6px]"
                        onClick={() => props.setIsOpen(false)}
                    >
                        Update
                    </button>
                </div>
            </div>
        </Modal>
    )
}

export default EditablefluidModal
