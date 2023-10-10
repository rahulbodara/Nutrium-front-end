import React, { useState } from 'react'
import FieldSelect from '../../common/FieldSelect'
import EditablefluidModal from '../EditablefluidModal'

const AddTag = (props) => {
    const [editModal, setEditModal] = useState(false)
    const handleEdit = () => {
        setEditModal(true)
    }
    return (
        <div>
            <FieldSelect
                labelWidth={props.labelWidth}
                isEditable={props.isEditable}
                isCheck={props.isCheck}
                isDisable={props.isDisable}
                isInfo={props.isInfo}
                className={props.className}
                data={props.data}
                handleEdit={handleEdit}
                label={props.label}
                name={props.name}
            />
            <EditablefluidModal
                className="max-w-[900px]"
                isOpen={editModal}
                setIsOpen={setEditModal}
                title="Appointment information"
                subtitle="Define what questions do you want to appear in this section of the form"
                setSelectedNutrition={props.setSelectedNutrition}
                selectedNutrition={props.data}
                closeIcon={true}
                data={props.mainData}
            />
        </div>
    )
}

export default AddTag
