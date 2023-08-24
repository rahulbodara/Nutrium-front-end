import React, { useEffect, useState } from 'react';
import Icon from '@mdi/react';
import {
  mdiAccount,
  mdiCakeVariant,
  mdiCamera,
  mdiChevronDown,
  mdiPhone,
} from '@mdi/js';
import EditableInput from '../common/EditableInput';
import ClosableSelect from '../common/ClosableSelect';
import countries from 'countries.json';
import EditableTextarea from '../common/EditableTextarea';
import DateInput from '../common/DateInput';
import TagSelect from '../common/TagSelect';
import { useDispatch, useSelector } from 'react-redux';
import { deleteClient, getClientById } from '@/redux/action/auth';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const ClientDetail = ({ clientId }) => {
  const [collapse, setCollapse] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const clientData = useSelector((state) => state?.auth?.clientData[0]);
  const error = useSelector((state) => state?.auth?.error);

  const birthDate = clientData?.dateOfBirth || '';
  const calculateAge = (birthDate) => {
    const birthYear = new Date(birthDate).getFullYear();
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
  };

  useEffect(() => {
    if (clientId) {
      dispatch(getClientById(clientId));
    }
  }, [dispatch, clientId]);

  const handleDelete = async (clientId) => {
    try {
      await dispatch(deleteClient(clientId)).then((res) => {
        toast.error(error);
      });
      toast.success('Client Deleted Successfully!!!');
      router.push('/admin/professionals/patients');
    } catch (error) {
      console.log('error---------->', error);
    }
  };

  const professionOptions = [
    {
      id: 1,
      option: 'Male',
      value: 'Male',
    },
    {
      id: 2,
      option: 'Female',
      value: 'Female',
    },
    {
      id: 3,
      option: 'Other',
      value: 'Other',
    },
  ];
  const workplace = [
    {
      id: 1,
      option: 'All workplaces',
      value: 'All workplaces',
    },
    {
      id: 2,
      option: 'online',
      value: 'online',
    },
  ];
  return (
    <div>
      <div className=" mx-[-15px] bg-[#FFFFFF] shadow-box1">
        <div className="p-[24px]  ">
          <div className="md:block flex items-center">
            <div className="flex justify-between items-center">
              <div className="min-w-[80px] h-[80px] group overflow-hidden mr-[24px] relative rounded-full">
                <img
                  src="/image/male_thumb.png"
                  className="min-w-[80px] h-[80px] rounded-full"
                />
                <button className="text-[35px] text-white absolute bg-black/[30%] group-hover:flex hidden transition duration-300 items-center justify-center inset-0">
                  <Icon path={mdiCamera} size={1.5} />
                </button>
              </div>
              <button className="mb-[16px] hidden md:block">
                <Icon
                  className="text-[#AAAAAA] text-[16px]"
                  path={mdiAccount}
                  size={1}
                />
              </button>
            </div>
            <div className="w-full md:mt-[24px] mt-0">
              <div className="flex justify-between w-full items-center">
                <h2 className="mb-2 text-[20px]">{clientData?.fullName}</h2>
                <button className="mb-[16px] md:hidden block">
                  <Icon
                    className="text-[#AAAAAA] text-[16px]"
                    path={mdiAccount}
                    size={1}
                  />
                </button>
              </div>
              <div className="2lg:block flex justify-between items-center">
                <div className="md:block flex gap-[24px]">
                  <div className="flex items-center w-auto 2lg:w-1/2 md:w-full">
                    <Icon
                      className="text-[#1AB394] mr-[8px]"
                      path={mdiPhone}
                      size={0.7}
                    />
                    <span className="text-[#888888] font-[300] text-[14px]">
                      {clientData?.phoneNumber}
                    </span>
                  </div>
                  <div className="flex items-center w-auto 2lg:w-1/2 md:w-full">
                    <Icon
                      className="text-[#1AB394] mr-[8px]"
                      path={mdiCakeVariant}
                      size={0.8}
                    />
                    <span className="text-[#888888] text-[14px]">
                      {birthDate
                        ? `${birthDate} (${calculateAge(birthDate)} years)`
                        : ''}
                    </span>
                  </div>
                </div>
                <div className="2lg:hidden flex items-center justify-end">
                  <button className="text-[#1AB394] border border-[#1AB394] hover:text-white rounded-[3px] px-[10px] py-[5px] trnasition duration-200 hover:bg-[#1AB394]">
                    Send message
                  </button>
                  <button className=" border border-[#1AB394] text-white rounded-[3px] ml-2 px-[10px] py-[5px] hover:bg-[#18a689] hover:border-[#18a689] trnasition duration-200 bg-[#1AB394]">
                    Schedule appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden 2lg:flex items-center w-full mt-[24px]">
            <button className="text-[#1AB394] border border-[#1AB394] hover:text-white rounded-[3px] px-[10px] py-[5px] trnasition duration-200 hover:bg-[#1AB394] w-full">
              Send message
            </button>
            <button className=" border border-[#1AB394] text-white rounded-[3px] ml-2 px-[10px] py-[5px] hover:bg-[#18a689] hover:border-[#18a689] trnasition duration-200 bg-[#1AB394] w-full">
              Schedule appointment
            </button>
          </div>
        </div>
        <div
          className={`${
            collapse ? 'h-full lg:block grid' : 'h-0 hidden'
          } transition-all duration-300 grid pb-[24px] px-[24px] grid-cols-2 gap-[30px]`}
        >
          <div>
            <div>
              <EditableInput
                labelWidth="basis-[180px] mr-[-1px] min-w-[180px]"
                label="Full name"
                initialValue={clientData?.fullName || ''}
              />
            </div>
            <div>
              <EditableInput
                labelWidth="basis-[180px] mr-[-1px] min-w-[180px]"
                label="Occupation"
                initialValue={clientData?.occupation || ''}
              />
            </div>
            <div>
              <ClosableSelect
                labelWidth="basis-[180px] mr-[-1px] min-w-[180px]"
                option={professionOptions}
                searchOption={false}
                closable={false}
                className="mt-[7px]"
                label="Gender"
                initialValue={clientData?.gender || ''}
              />
            </div>
            <div>
              <ClosableSelect
                labelWidth="basis-[180px] mr-[-1px] min-w-[180px]"
                option={countries}
                searchOption={true}
                closable={false}
                className="mt-[7px]"
                label="Residence"
                initialValue={clientData?.country || ''}        

              />
            </div>
            <div>
              <EditableTextarea
                labelWidth="basis-[180px] mr-[-1px] min-w-[180px]"
                label="Address"
                initialValue={clientData?.address || ''}
              />
            </div>

            <div>
              <EditableInput
                labelWidth="basis-[180px] mr-[-1px] min-w-[180px]"
                label="Zip code"
                initialValue={clientData?.zipcode || ''}
              />
            </div>
            <div>
              <EditableInput
                labelWidth="basis-[180px] mr-[-1px] min-w-[180px]"
                label="Mobile phone"
                initialValue={clientData?.phoneNumber || ''}
              />
            </div>
            <div>
              <EditableInput
                labelWidth="basis-[180px] mr-[-1px] min-w-[180px]"
                label="Email"
                initialValue={clientData?.email || ''}
              />
            </div>
          </div>
          <div>
            <div className="mt-[7px]">
              <TagSelect
                labelWidth="basis-[180px] mr-[-1px] min-w-[180px]"
                searchOption={false}
                closable={false}
                className="mt-[7px]"
                label="Tags"
                initialValue={clientData?.tags || ''}
              />
            </div>
            <div>
              <ClosableSelect
                labelWidth="basis-[180px] mr-[-1px] min-w-[180px]"
                option={workplace}
                searchOption={false}
                closable={false}
                className="mt-[7px]"
                label="Workplace"
                initialValue={clientData?.workplace || ''}
              />
            </div>
            <div className="mt-[7px]">
              <DateInput
                label="Birthdate"
                labelWidth="basis-[180px] mr-[-1px] min-w-[180px]"
                closable={false}
                clientData={clientData}
              />
            </div>
            <div>
              <div className="flex select-none admin-select-field mt-[7px]">
                <div className="basis-[180px] mr-[-1px] min-w-[180px] md:basis-[140px] md:min-w-[140px]   flex border bg-[#FAFAFB] text-[1.1em] items-center z-[1] px-2.5 py-[5px] border-solid border-[#EEEEEE]">
                  Created at
                </div>
                <div className="grow-[3] border-[1px_solid_#EEEEEE] border-l-0 flex select-none">
                  <div className="select-field flex-grow border-[#EEEEEE] relative border-[1px]">
                    <span className="w-full block h-full border-none outline-none pr-[24px] min-h-[38px] p-[10px] focus:ring-0">
                      07/14/2023 09:48 AM
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <EditableInput
                labelWidth="basis-[180px] mr-[-1px] min-w-[180px]"
                label="Process number"
                initialValue={clientData?.processNumber || ''}
              />
            </div>
            <div>
              <EditableInput
                labelWidth="basis-[180px] mr-[-1px] min-w-[180px]"
                label="National number"
                initialValue={clientData?.nationalNumber || ''}
              />
            </div>
            <div>
              <EditableInput
                labelWidth="basis-[180px] mr-[-1px] min-w-[180px]"
                label="Health number"
                initialValue={clientData?.healthNumber || ''}
              />
            </div>
            <div>
              <EditableInput
                labelWidth="basis-[180px] mr-[-1px] min-w-[180px]"
                label="VAT number"
                initialValue={clientData?.vatNumber || ''}        
              />
            </div>
          </div>
          <div className="lg:mt-[24px] mt-0 col-span-2">
            <button
              className="text-[#DB4965] text-[12px] py-[5px] px-[10px] rounded hover:bg-[#DB4965] hover:text-white transition duration-500 border border-[#DB4965]"
              onClick={() => handleDelete(clientId)}
            >
              Delete client
            </button>
          </div>
        </div>

        <div
          onClick={() => setCollapse(!collapse)}
          className="bg-[#FAFAFB] hover:bg-[#f2f2f4] text-[13px] cursor-pointer text-[#717171] flex items-center justify-center gap-1 h-[40px] border border-[#EEEEEE] py-[11px] px-[24px]"
        >
          <span> {collapse ? 'Less Details' : 'More Details'}</span>{' '}
          <Icon
            className={collapse ? 'rotate-180 origin-center' : ''}
            path={mdiChevronDown}
            size={0.8}
          />
        </div>
      </div>
    </div>
  );
};

export default ClientDetail;
