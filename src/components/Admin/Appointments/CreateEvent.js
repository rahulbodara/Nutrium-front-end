import React from 'react'
import Modal from '../common/Modal'

const CreateEvent = (props) => {
  return (
    <Modal
    title={"Food Diary"}
    subtitle={"Log your client's food diary"}
    isOpen={props.isOpen}
    className="max-w-[900px]"

    setIsOpen={props.setIsOpen}></Modal>
  )
}

export default CreateEvent