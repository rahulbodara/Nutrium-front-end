import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import ClosableSelect from '../common/ClosableSelect';
import EditableInput from '../common/EditableInput';
import Icon from '@mdi/react';
import { mdiCamera } from '@mdi/js';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '@/redux/action/auth';

function ProfessionalInformation({ formData, setFormData }) {
  console.log(formData,"formDataformData");
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
  const handleProfessionChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      profession: value,
    })); 
  };
  
  const handleProfessionCardNumberChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      professionCardNumber: value,
    }));
  };

  const handleCountryChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      country: value,
    }));
  };

  const handleEmailChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      email: value,
    }));
  };

  const handleSubmit = () => {
    console.log('submit button clicked!!!');
    dispatch(updateProfile(formData));
  };

  const handleCancel = () => {
    setFormData({ ...userData });
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
                <h2 className="cursor-pointer min-h-[unset] border-b-[1px] border-dashed border-[#DDDDDD] overflow-hidden mt-[15px] mb-[5px] text-ellipsis opacity-[0.6] flex items-center justify-center text-center leading-[1.4] text-xl">
                  <span className="self-center cursor-pointer">
                    {userData?.fullName}
                  </span>
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
                  value={formData?.profession || ""}
                  initialValue={userData?.profession || ''}
                  setFormData={setFormData}
                  onChange={handleProfessionChange}
                />
                <EditableInput
                  labelWidth="basis-[240px] min-w-[240px]"
                  label="Professional card number"
                  value={formData?.professionCardNumber}
                  initialValue={formData?.professionCardNumber}
                  onInputChange={handleProfessionCardNumberChange}
                  handleSubmit={handleSubmit}
                  handleCancel={handleCancel}
                />
                <ClosableSelect
                  labelWidth="basis-[240px] min-w-[240px]"
                  option={professionOptions}
                  searchOption={true}
                  value={formData?.country}
                  closable={false}
                  className="mt-[7px]"
                  label="Country of residence"
                  initialValue={userData?.country || ''}
                  onChange={handleCountryChange}
                />
                <EditableInput
                  labelWidth="basis-[240px] min-w-[240px]"
                  label="Email"
                  value={formData?.email}
                  initialValue={userData?.email || ''}
                  onInputChange={handleEmailChange}
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
