
import React, { useState, useEffect } from "react";
import Modal from '../../common/Modal'
import DatePicker from "react-datepicker";
import moment from 'moment'
import { eatingBehaviour,observationBehaviour, getObservationData, deleteObservation, updateObservation } from '@/redux/action/auth';
import { handleApiCall } from "@/util/apiUtils";
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

const AddLogClient = (props) => {
    const router = useRouter();
    const { query } = router;
    const dispatch = useDispatch()
    const [eatingData, setEatingData] = useState({
        date: new Date(),
        observations: '',
    });
    useEffect(() => {
        if (props.observationData) {
          const registrationDate = new Date(props?.observationData?.registrationDate);
          if (!isNaN(registrationDate)) {
            setEatingData({
              date: registrationDate,
              observations: props?.observationData?.observation || '',
            });
          } else {
            setEatingData({
              date: new Date(),
              observations: '',
            });
          }
        } else {
          setEatingData({
            date: new Date(),
            observations: '',
          });
        }
      }, [props.isOpen, props.observationData])  

  const handleDateChange = (date) => {
    setEatingData({ ...eatingData, date: date }); 
  };

  const handleObservationsChange = (event) => {
    setEatingData({ ...eatingData, observations: event.target.value });
  };

  const handleEatingBehaviour = async () => {
   try {
    if(props.active) {
        const success = await handleApiCall(
            dispatch,
            eatingBehaviour({date: moment(eatingData.date).format('DD/MM/YYYY'), behaviour: eatingData.observations}, query.id),
            'Eating behaviour created successfully.'
          )
           if(success) {
            props.setIsOpen(false)
           }
    } else {
        if(props?.observationData) {
            const success = await handleApiCall(
                dispatch,
                updateObservation({registrationDate: moment(eatingData.date).format('DD/MM/YYYY'), observation: eatingData.observations}, props.observationData._id),
                'Observation updated successfully.'
            )
            if(success) {
                dispatch(getObservationData(query.id));
                props.setIsOpen(false)
            }
        } else {
            const success = await handleApiCall(
                dispatch,
                observationBehaviour({clientId: query.id, registrationDate: moment(eatingData.date).format('DD/MM/YYYY'), observation: eatingData.observations}),
                'Observation behaviour created successfully.'
            )
            if(success) {
                dispatch(getObservationData(query.id));
                props.setIsOpen(false)
            }
        }
    }
      
    } catch (err) {
      console.log("Error -->", err)
    }
  };

  const handleRemove = async () => {
    try {
        const success = await handleApiCall(
            dispatch,
            deleteObservation(props.observationData._id),
            'Observation deleted successfully.'
        )
        if(success) {
            dispatch(getObservationData(query.id));
            props.setIsOpen(false)
        }
    } catch (err) {
        console.log('Error -->', err)
    }
  }

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
                    <div className="flex">
                        <div className="basis-[215px] text-[1.1em] flex items-center min-h-[38px]  h-full border border-[#EEEEEE] min-w-[215px] py-[5px] px-[10px] bg-[#FAFAFB]">
                            Registration date
                        </div>
                        <DatePicker
                            selected={eatingData?.date}
                            onChange={handleDateChange}
                            showYearDropdown
                            className="flex-1 border w-full text-[13px] ml-[-1px] focus:ring-0 focus:outline-none focus:border-[#EEEEEE] min-h-[38px] py-[5px] px-[10px] border-[#EEEEEE]"
                            dateFormatCalendar="MMMM"
                            yearDropdownItemNumber={15}
                            scrollableYearDropdown
                        />
                    </div>
                    <div className="flex mt-[7px]">
                        <div className="basis-[215px] text-[1.1em] flex items-center min-h-[38px] border border-[#EEEEEE] min-w-[215px] py-[5px] px-[10px] bg-[#FAFAFB]">
                            {props.active ? 'Eating behaviour' : 'Observations'} 
                        </div>
            <textarea
              rows="1"
              value={eatingData.observations || props?.observationData?.observation || ''}
              onChange={handleObservationsChange}
              className="flex-1 border ml-[-1px] min-h-[56px] w-full text-[13px] focus:ring-0 focus:outline-none focus:border-[#EEEEEE]  py-[5px] px-[10px] border-[#EEEEEE]"
            ></textarea>
          </div>
          <div className="text-end mt-[20px] flex items-center justify-between">
            <button onClick={handleRemove} className="bg-[#DB4965]  border border-[#DB4965] text-white rounded-[3px] text-[14px] px-[12px] py-[6px]">
                Remove
            </button>
            <div>
              <button onClick={() => props.setIsOpen(false)} className="bg-white  border rounded-[3px] text-[14px] px-[12px] py-[6px]">
                Cancel
              </button>
              <button
                className="bg-[#1AB394] ml-[5px] text-[#FFFFFF] rounded-[3px] text-[14px] px-[12px] py-[6px]"
                onClick={handleEatingBehaviour}
              >
                Save
              </button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default AddLogClient;
