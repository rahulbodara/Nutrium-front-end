import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import ClosableSelect from '../common/ClosableSelect';
import EditableInput from '../common/EditableInput';
import Icon from '@mdi/react';
import { mdiCamera } from '@mdi/js';
import { useDispatch, useSelector } from 'react-redux';
import { clientData, updateProfile } from '@/redux/action/auth';
import { handleApiCall } from '@/util/apiUtils';
import countries from 'countries.json';
import OutsideClickHandler from '../common/OutsideClickHandler';

function ProfessionalInformation() {
  const [singleValue, setSingleValue] = useState()
  const professionOptions = [
    {
      id: 1,
      name: 'Nutritionist',
      value: 'Nutritionist',
    },
    {
      id: 2,
      name: 'Dietitian',
      value: 'Dietitian',
    },
    {
      id: 3,
      name: 'Nutritional Therapist',
      value: 'Nutritional Therapist',
    },
    {
      id: 4,
      name: 'Health Coach',
      value: 'Health Coach',
    },
    {
      id: 5,
      name: 'Student',
      value: 'Student',
    },
    {
      id: 6,
      name: 'India',
      value: 'India',
    },
  ];
  const userData = useSelector((item) => item?.auth?.userData[0]);
  const dispatch = useDispatch();

  const handleSubmit = async (newValue) => {
    try {
      await handleApiCall(
        dispatch,
        updateProfile(newValue),
        'Professional Updated Successfully'
      );
    } catch (err) {
      console.log("Error -->", err)
    }
  };

  
  const [formData, setFormData] = useState(userData);
  const formRef = useRef(null);
 
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (formRef.current && !formRef.current.contains(e.target)) {
        handleSubmitForm(formData);
    
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmitForm = (data) => {
    console.log('Form submitted with data:', data);
  };
  const [anchor, setAnchor] = useState(null);

  const closeTooltip = () => {
    setAnchor(null);
  };

  const handleClick = (event) => {
    const target = event.target;
    setAnchor((prevAnchor) => (prevAnchor ? null : target));
  };
  return (
    <div className="px-[15px] py-0  p-0 w-2/3 2lg:w-full relative min-h-[1px]">
      <div className="h-full bg-white card-shadow  rounded-[5px] mb-[25px]">
        <div className="widget-header p-[20px_20px_15px_20px]">
          <h4 className="text-[20px] leading-[1.1]">
            Professional information
          </h4>
          <div className="text-[12px] text-[#888888] opacity-[0.6]">
            Check or change your professional information
          </div>
        </div>
        <div className="widget-content p-[0_20px_20px] flex flex-col">
          <div className="-mx-[15px] flex flex-wrap">
            <div className="w-1/3 pl-[15px] pr-[5px] lg:w-full lg:mb-[30px]">
              <div className="flex justify-center h-[130px] relative">
                <img
                  src="/image/user.png"
                  className="w-[130px] h-[130px] rounded-full"
                  alt="user Image"
                />
                <div className="overlay hover:opacity-100 hover:cursor-pointer w-[130px] absolute h-[130px] bg-[rgba(0,0,0,0.3)] text-center flex items-center justify-center opacity-0 rounded-[50%]">
                  <Icon path={mdiCamera} color="#ffffff" size="50px" />
                </div>
              </div>
              <div className="mt-[20px]">
                <h2 className="cursor-pointer min-h-[unset] min-w-[100px] overflow-hidden mt-[15px] mb-[5px] text-ellipsis opacity-[0.6] flex items-center justify-center text-center leading-[1.4] text-xl">
                  {/* {
                    isEditing ?
                      <form>
                        <input type='text' onChange={handleInputChange} defaultValue={userData?.fullName} />
                      </form>
                      : <span onDoubleClick={() => setIsEditing(true)} className="self-center border-b-[1px] border-dashed border-[#DDDDDD] cursor-pointer">{userData?.fullName}</span>
                  } */}
                  <OutsideClickHandler
                    onClickOutside={closeTooltip}
                    onFocusOutside={closeTooltip}
                  >

                    {anchor ? (
                      <form className='w-full text-center'>
                        <input
                          type="text"
                          name="fullName"
                          className="block border-b !ring-transparent border-dashed !border-[#DDDDDD]  focus:outline-none outline-none shadow-none right-0  focus:shadow-none focus:right-0 border-0 text-center  "
                          value={formData.fullName || ''}
                          onChange={handleInputChange}
                        />
                      </form>
                    ) :
                      <button
                        onClick={handleClick}
                        className="self-center min-w-[100px] border-b-[1px] border-dashed border-[#DDDDDD] cursor-pointer"
                      >
                        {formData.fullName || ''}
                      </button>
                    }
                  </OutsideClickHandler>
                  {/* {isEditing ? (
                    <form >
                      <input
                        type="text"
                        name="fullName"
                        className={isEditing ? "block" : 'hidden'}
                        value={formData.fullName || ''}
                        onChange={handleInputChange}
                      />
                    </form>
                  ) : (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="self-center border-b-[1px] border-dashed border-[#DDDDDD] cursor-pointer"
                    >
                      {formData.fullName || ''}
                    </button>
                  )} */}
                  {/* <span onDoubleClick ={()=> setIsEditing(true)} className="self-center border-b-[1px] border-dashed border-[#DDDDDD] cursor-pointer">
                    {userData?.fullName}
                  </span> */}
                </h2>
              </div>
            </div>
            <div className="w-2/3 px-[15px] lg:w-full">
              <div className="multiple-fields">
                <ClosableSelect
                  labelWidth="basis-[240px] min-w-[240px]"
                  searchOption={false}
                  option={professionOptions}
                  closable={false}
                  className="mt-0"
                  label="Profession"
                  initialValue={userData?.profession || ''}
                  onChange={(value) => setSingleValue({ ["profession"]: value })}
                  handleSubmit={handleSubmit}
                  name={"profession"} />
                <EditableInput
                  labelWidth="basis-[240px] min-w-[240px]"
                  label="Professional card number"
                  initialValue={userData?.professionCardNumber || ""}
                  onInputChange={(value) => setSingleValue({ ["professionalCardNumber"]: value })}
                  handleSubmit={() => handleSubmit(singleValue)}
                />
                <ClosableSelect
                  labelWidth="basis-[240px] min-w-[240px]"
                  option={countries}
                  searchOption={true}
                  closable={false}
                  className="mt-[7px]"
                  label="Country of residence"
                  initialValue={userData?.country || ''}
                  onChange={(value) => setSingleValue({ ["country"]: value })}
                  handleSubmit={handleSubmit}
                  name={"country"}
                />
                <EditableInput
                  labelWidth="basis-[240px] min-w-[240px]"
                  label="Email"
                  initialValue={userData?.email || ''}
                  onInputChange={(value) => setSingleValue({ ["email"]: value })}
                  handleSubmit={() => handleSubmit(singleValue)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfessionalInformation;
