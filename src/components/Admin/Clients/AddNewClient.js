import { Dialog, Transition } from '@headlessui/react';
import {
  mdiAccount,
  mdiAt,
  mdiCalendar,
  mdiClipboardAccount,
  mdiFlagVariant,
  mdiHumanMaleFemale,
  mdiInformationOutline,
  mdiMapMarker,
  mdiMapMarkerRadius,
  mdiPhone,
} from '@mdi/js';
import Icon from '@mdi/react';
import React, { Fragment, useState, useEffect } from 'react';
import countries from 'countries.json';
import { BiSolidUser } from 'react-icons/bi';
import { IoCloseSharp } from 'react-icons/io5';
import DatePicker from 'react-datepicker';
import { registerClient } from '@/redux/action/auth';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { addNewClient } from '@/schema/client';
import { GetAllWorkplace } from '@/redux/action/workplace';
import CustomSelect from '../common/CustomSelect';
import { handleApiCall } from '../../../util/apiUtils';
import { clientData } from '@/redux/action/auth';
import { Tooltip as ReactTooltip } from "react-tooltip";


const AddNewClient = ({ isOpen, setIsOpen,setIsNewAppModal }) => {
  const [formData, setFormData] = useState({});
  const userData = useSelector((item) => item?.auth?.userData[0])

const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    try {
      // const formattedDateOfBirth = startDate.toLocaleDateString('en-GB');
      const dateParts = values.dateOfBirth.split('-');
      const formattedDateOfBirth = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
      const updatedFormData = {
        ...values,
        dateOfBirth: formattedDateOfBirth,
      };

      const success =await handleApiCall(
        dispatch,
        registerClient(updatedFormData),
        'Client successfully created'
      );
      if (success) {
        dispatch(GetAllWorkplace());
      }
      setIsOpen(false);
    } catch (error) {
      console.log('error-------------->', error);
    }
  };
  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  useEffect(() => {
    isOpen && dispatch(GetAllWorkplace())
  }, [isOpen]);
const workSpaceData = useSelector((state) => state.Workplace?.workplaceData)
  const gender = [
    {
      id: 1,
      name: 'Male'
    },
    {
      id: 2,
      name: 'Female'
    },
    {
      id: 3,
      name: 'Other'
    },
  ]
  return (
    <div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[9999]" onClose={setIsOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-start justify-center sm:p-5 p-10 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[896px] transform overflow-hidden rounded bg-white  text-left align-middle shadow-xl transition-all">
                  <div className="p-[25px] relative">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="absolute right-[10px] top-[10px] outline-none"
                    >
                      <IoCloseSharp className="text-[18px]" />
                    </button>
                    <h2 className="text-[28px] leading-[40px] text-center">
                      Register client
                    </h2>
                    <span className="text-[13px] text-center block">
                      Register your client and continue scheduling the
                      appointment
                    </span>
                  </div>
                  <Formik
                    initialValues={{ fullName: '', dateOfBirth: '', gender: 'Male', workplace: userData?.workplace, occupation: '', country: userData?.country, zipcode: '', phoneNumber: '', email: '' }}
                    validationSchema={addNewClient}
                    onSubmit={(values) => handleSubmit(values)}
                  >
                  {
                    (fromikProps) => (
                      <Form onSubmit={fromikProps.handleSubmit}>
                      <div>
                        <div className="px-[30px] pb-[20px]">
                          <div className="grid gap-x-[30px] gap-y-[15px] grid-cols-2">
                            <div className="col-span-2">
                              <label className="font-bold text-[13px] flex  mb-[5px] gap-1">
                                <abbr
                                  title="required"
                                  className="no-underline font-semibold text-[#1ab394] cursor-help"
                                >
                                  *
                                </abbr>{' '}
                                Full name
                              </label>
                              <div className="flex">
                                <div className="border h-[34px] w-[43px] flex items-center justify-center border-[#e5e6e7] px-3 py-[6px]">
                                  <Icon path={mdiAccount} size={0.7} />
                                </div>
                                <Field
                                  className="px-3 h-[34px] ml-[-1px] focus:border-[#1ab394] focus:outline-none focus:ring-0 outline-none trnasition duration-300 w-full py-[6px] border border-[#e5e6e7] text-[13px]"
                                  name="fullName"
                                />
                              </div>
                              <ErrorMessage
                                name="fullName"
                                component="div"
                                className="block mt-[5px] font-bold text-[13px] text-[#cc5965]"
                              />
                            </div>
                            <div className="">
                              <label className="font-bold text-[13px] flex  mb-[5px] gap-1">
                                <abbr
                                  title="required"
                                  className="no-underline  font-semibold text-[#1ab394]"
                                >
                                  *
                                </abbr>{' '}
                                Gender
                              </label>
                              <div className="flex">
                                <div className="border h-[34px] w-[43px] flex items-center justify-center border-[#e5e6e7] px-3 py-[6px]">
                                  <Icon path={mdiHumanMaleFemale} size={0.7} />
                                </div>
                                <div className='w-full -ml-px select-clinet border-select '>
                                 <CustomSelect 
                                   option={gender} 
                                   className="h-[34px]" 
                                   SelectClassName="focus:border-[#1ab394] border" 
                                   searchOption={false}
                                   onSelectChange={(value) => {
                                     fromikProps.setFieldValue('gender', value);
                                   }} />
                                </div>
                              </div>
                              <ErrorMessage name="gender" component="div" className="block mt-[5px] font-bold text-[13px] text-[#cc5965]" />
                            </div>
                            <div className="">
                              <label className="font-bold text-[13px] flex  mb-[5px] gap-1">
                                Workplace
                              </label>
                              <div className="flex">
                                <div className="border h-[34px] w-[43px] flex items-center justify-center border-[#e5e6e7] px-3 py-[6px]">
                                  <Icon path={mdiMapMarkerRadius} size={0.7} />
                                </div>
                                <div className='w-full  -ml-px select-clinet border-select '>
                                  <CustomSelect 
                                  defaultOptions={userData && userData?.workplace ? userData?.workplace : "All Workplace"} 
                                  option={workSpaceData} 
                                  className="h-[34px]" 
                                  SelectClassName="focus:border-[#1ab394] border" 
                                  searchOption={false}
                                  onSelectChange={(value) => {
                                    fromikProps.setFieldValue('workplace', value);
                                  }} />
                                </div>
                          
                                <div className="border h-[34px] w-[43px] flex items-center justify-center border-l-0 border-[#e5e6e7] px-3 py-[6px]" data-tooltip-id='workplace'>
                                  <Icon path={mdiInformationOutline} size={0.6} />
                                </div>
                              </div>
                            </div>
                            <div className="">
                              <label className="font-bold text-[13px] flex  mb-[5px] gap-1">
                                <abbr
                                  title="required"
                                  className="no-underline font-semibold text-[#1ab394] cursor-help"
                                >
                                  *
                                </abbr>{' '}
                                Birthdate
                              </label>
                              <div className="flex">
                                <div className="border h-[34px] w-[43px] flex items-center justify-center border-[#e5e6e7] px-3 py-[6px]">
                                  <Icon path={mdiCalendar} size={0.7} />
                                </div>
                                <Field type="date" name="dateOfBirth" className="px-3 h-[34px] text-[13px] ml-[-1px] focus:border-[#1ab394] focus:outline-none focus:ring-0 outline-none trnasition duration-300 w-full py-[6px] border border-[#e5e6e7]" />
                              </div>
                              <ErrorMessage
                                name="dateOfBirth"
                                component="div"
                                className="block mt-[5px] font-bold text-[13px] text-[#cc5965]"
                              />
                            </div>
                            <div className="">
                              <label className="font-bold text-[13px] flex  mb-[5px] gap-1">
                                Occupation
                              </label>
                              <div className="flex">
                                <div className="border h-[34px] w-[43px] flex items-center justify-center border-[#e5e6e7] px-3 py-[6px]">
                                  <Icon path={mdiClipboardAccount} size={0.7} />
                                </div>
                                <Field
                                  className="px-3 h-[34px] ml-[-1px] focus:border-[#1ab394] focus:outline-none focus:ring-0 outline-none trnasition duration-300 w-full py-[6px] border border-[#e5e6e7] text-[13px]"
                                  name="occupation"
                                />
                              </div>
                              <ErrorMessage
                                name="occupation"
                                component="div"
                                className="block mt-[5px] font-bold text-[13px] text-[#cc5965]"
                              />
                            </div>
                            <div className="">
                              <label className="font-bold text-[13px] flex  mb-[5px] gap-1">
                                Country of residence
                              </label>
                              <div className="flex">
                                <div className="border h-[34px] w-[43px] flex items-center justify-center border-[#e5e6e7] px-3 py-[6px]">
                                  <Icon path={mdiFlagVariant} size={0.7} />
                                </div>
                                <div className='w-full  -ml-px select-clinet border-select '>
                                  <CustomSelect 
                                  defaultOptions={userData && userData?.country ? userData?.country : "All Workplace"}
                                  option={countries} 
                                  className="h-[34px]" 
                                  SelectClassName="focus:border-[#1ab394] border" 
                                  searchOption={false}
                                  onSelectChange={(value) => {
                                    fromikProps.setFieldValue('country', value);
                                  }}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="">
                              <label className="font-bold text-[13px] flex  mb-[5px] gap-1">
                                Zip code
                              </label>
                              <div className="flex">
                                <div className="border h-[34px] w-[43px] flex items-center justify-center border-[#e5e6e7] px-3 py-[6px]">
                                  <Icon path={mdiMapMarker} size={0.7} />
                                </div>
                                <Field
                                  className="px-3 h-[34px] ml-[-1px] focus:border-[#1ab394] focus:outline-none focus:ring-0 outline-none trnasition duration-300 w-full py-[6px] border border-[#e5e6e7] text-[13px]"
                                  name="zipcode"
                                />
                              </div>
                              <ErrorMessage
                                name="zipcode"
                                component="div"
                                className="block mt-[5px] font-bold text-[13px] text-[#cc5965]"
                              />
                            </div>
                            <div className="">
                              <label className="font-bold text-[13px] flex  mb-[5px] gap-1">
                                Mobile phone number
                              </label>
                              <div className="flex">
                                <div className="border h-[34px] w-[43px] flex items-center justify-center border-[#e5e6e7] px-3 py-[6px]">
                                  <Icon path={mdiPhone} size={0.7} />
                                </div>
                                <div className="border h-[34px] w-[43px] ml-[-1px] flex items-center justify-center border-[#e5e6e7] px-3 py-[6px]">
                                  <span>+91</span>
                                </div>
                                <Field
                                  className="px-3 h-[34px] ml-[-1px] focus:border-[#1ab394] focus:outline-none focus:ring-0 outline-none trnasition duration-300 w-full py-[6px] border border-[#e5e6e7] text-[13px]"
                                  name="phoneNumber"
                                />
                              </div>
                              <ErrorMessage
                                name="phoneNumber"
                                component="div"
                                className="block mt-[5px] font-bold text-[13px] text-[#cc5965]"
                              />
                            </div>
                            <div className="">
                              <label className="font-bold text-[13px] flex  mb-[5px] gap-1">
                                Email
                              </label>
                              <div className="flex">
                                <div className="border h-[34px] w-[43px] flex items-center justify-center border-[#e5e6e7] px-3 py-[6px]">
                                  <Icon path={mdiAt} size={0.7} />
                                </div>
                                <Field
                                  className="px-3 ml-[-1px] h-[34px] mr-[-1px] bg-transparent rounded-0 focus:border-[#1ab394] focus:outline-none focus:ring-0 outline-none trnasition duration-300 w-full py-[6px] border border-[#e5e6e7] text-[13px]"
                                  name="email"
                                />
  
                                <div className="border h-[34px] w-[43px] flex items-center justify-center border-l-0 border-[#e5e6e7] px-3 py-[6px]" data-tooltip-id='email'>
                                  <Icon path={mdiInformationOutline} size={0.6} />
                                </div>
                              </div>
                              <ErrorMessage
                                name="email"
                                component="div"
                                className="block mt-[5px] font-bold text-[13px] text-[#cc5965]"
                              />
                            </div>
                          </div>
                          <div className="flex gap-2  items-center mt-7 mb-2.5">
                            <input
                              id="comments"
                              name="comments"
                              type="checkbox"
                              className="h-4 w-4 rounded-full border-gray-300 text-[#1AB394] focus:ring-0"
                            />
                            <span className="text-[13px] cursor-not-allowed" data-tooltip-id='checkfield'>
                              Send nutrition assessment form via message and email
                            </span>{' '}
                            <Icon path={mdiInformationOutline} size={0.6} className="hover:text-[#1AB394] cursor-pointer" data-tooltip-id="checkfieldMoreInfo" />
                          </div>
                        </div>
                        <div className="flex items-center px-[30px] pb-[15px] justify-between">
                          <button className="px-3 hover:bg-[#FAFAFB] trnasition duration-200 border rounded-[3px] text-[14px] py-[6px]" onClick={() => { setIsOpen(false);}}>
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="px-3 rounded-[3px] border hover:bg-[#18a689] border-[#1AB394] bg-[#1AB394] text-[#FFFFFF] text-[14px] py-[6px]"
                          >
                            Register client
                          </button>
                        </div>
                      </div>
                      </Form>
                    )
                  }  
                  </Formik>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <ReactTooltip
        id="checkfield"
        place="top"
        content="The email is invalid"
        className='!p-[3px_8px] !bg-[#2f4050] opacity-[.9] z-[99999]'
      />
      <ReactTooltip
        id="checkfieldMoreInfo"
        place="top"
        content="The nutrition assessment form allows the client to automatically fill in some of their information. Click here to learn more."
        className='!p-[3px_8px] !bg-[#2f4050] max-w-[200px] text-center opacity-[.9] z-[99999]'
      />
      <ReactTooltip
        id="workplace"
        place="top-end"
        content="Choose if you want this client to be associated to one or all workplaces"
        className='!p-[3px_8px] !bg-[#2f4050] max-w-[120px] opacity-[.9] text-center z-[99999]'
      />
      <ReactTooltip
        id="email"
        place="top-end"
        content="If no email is provided, an email from the system will be generated"
        className='!p-[3px_8px] !bg-[#2f4050] max-w-[120px] opacity-[.9] text-center z-[99999]'
      />
    </div>
  );
};

export default AddNewClient;
