import React from 'react'

const EditableChoices = (props) => {
    return (
        <div className='flex flex-wrap editable-choices'>
            {
                props?.data.map((items, index) => {
                    return (
                        <div key={index} className="flex border box-border  field-choice grow items-center">
                            <div className="bg-[#FAFAFB] conjunction flex box-border items-center h-full min-w-[41px] p-[10px]">and</div>
                            <div className="p-[10px] grow">
                                <div className="field-value ">{items.name}</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default EditableChoices
