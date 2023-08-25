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
import { BiSolidUser } from 'react-icons/bi';
import { IoCloseSharp } from 'react-icons/io5';
import DatePicker from 'react-datepicker';
import { registerClient, GetAllWorkplace } from '@/redux/action/auth';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { addNewClient } from '@/schema/client';

const AddNewClient = ({ isOpen, setIsOpen }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [formData, setFormData] = useState({});
  console.log(formData,"formDataformdata")
  
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    console.log("🚀 ~ file: AddNewClient.js:32 ~ handleSubmit ~ values:", values)
    try {
      // const formattedDateOfBirth = startDate.toLocaleDateString('en-GB');
      const dateParts = values.dateOfBirth.split('-');
      const formattedDateOfBirth = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
      const updatedFormData = {
        ...values,
        dateOfBirth: formattedDateOfBirth,
      };
      console.log(formattedDateOfBirth,"formattedDateOfBirthformattedDateOfBirth")
 
      const response = await dispatch(registerClient(updatedFormData)).then((res) => {
        toast.error(res?.data?.data?.message);
        return res;
      });
      setIsOpen(false)
      toast.success(response?.data?.message);
      console.log('response---->', response);
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
const workSpaceData = useSelector((state) => state.auth.workplaceData)

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
                    initialValues={{fullName: '', dateOfBirth: '', gender: 'Male', workplace: 'All', occupation: '', country: 'All', zipcode: '', phoneNumber: '', email: ''}}
                    validationSchema={addNewClient}
                    onSubmit={(values) => handleSubmit(values)}
                  >
            <Form>
                  <div className="px-[30px] pb-[20px]">
                    <div className="grid gap-x-[30px] gap-y-[15px] grid-cols-2">
                      <div className="col-span-2">
                        <label className="font-bold text-[13px] flex  mb-[5px] gap-1">
                          <abbr
                            title="required"
                            className="no-underline font-semibold text-[#1ab394]"
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
                          <ErrorMessage
                            name="fullName"
                            component="div"
                            className="text-red-500"
                          />
                        </div>
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
                          <select
                            className="px-3 ml-[-1px] h-[34px] mr-[-1px] bg-transparent rounded-0 focus:border-[#1ab394] focus:outline-none focus:ring-0 outline-none trnasition duration-300 w-full py-[6px] border border-[#e5e6e7] text-[13px]"
                            name="gender"
                          >
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                          </select>
                          <ErrorMessage name="gender" component="div" className="text-red-500" />
                        </div>
                      </div>
                      <div className="">
                        <label className="font-bold text-[13px] flex  mb-[5px] gap-1">
                          Workplace
                        </label>
                        <div className="flex">
                          <div className="border h-[34px] w-[43px] flex items-center justify-center border-[#e5e6e7] px-3 py-[6px]">
                            <Icon path={mdiMapMarkerRadius} size={0.7} />
                          </div>
                          <select
                            className="px-3 ml-[-1px] h-[34px] mr-[-1px] bg-transparent rounded-0 focus:border-[#1ab394] focus:outline-none focus:ring-0 outline-none trnasition duration-300 w-full py-[6px] border border-[#e5e6e7] text-[13px]"
                            name="workplace"
                          >
                          <option>All workplaces</option>
                            {
                              workSpaceData?.map((data) => {
                                return (
                                  <option>{data.name}</option>
                                )
                              })
                            }
                          </select>
                          <div className="border h-[34px] w-[43px] flex items-center justify-center border-l-0 border-[#e5e6e7] px-3 py-[6px]">
                            <Icon path={mdiInformationOutline} size={0.6} />
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <label className="font-bold text-[13px] flex  mb-[5px] gap-1">
                          <abbr
                            title="required"
                            className="no-underline font-semibold text-[#1ab394]"
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
                          <ErrorMessage
                            name="dateOfBirth"
                            component="div"
                            className="text-red-500"
                          />
                          </div>
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
                          <ErrorMessage
                            name="occupation"
                            component="div"
                            className="text-red-500"
                          />
                        </div>
                      </div>
                      <div className="">
                        <label className="font-bold text-[13px] flex  mb-[5px] gap-1">
                          Country of residence
                        </label>
                        <div className="flex">
                          <div className="border h-[34px] w-[43px] flex items-center justify-center border-[#e5e6e7] px-3 py-[6px]">
                            <Icon path={mdiFlagVariant} size={0.7} />
                          </div>
                          <select
                            className="px-3 ml-[-1px] h-[34px] mr-[-1px] bg-transparent rounded-0 focus:border-[#1ab394] focus:outline-none focus:ring-0 outline-none trnasition duration-300 w-full py-[6px] border border-[#e5e6e7] text-[13px]"
                            name="country"
                          >
                            <option>All workplaces</option>
                            <option>Globalia</option>
                            <option>globaliya 11</option>
                          </select>
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
                          <ErrorMessage
                            name="zipcode"
                            component="div"
                            className="text-red-500"
                          />
                        </div>
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
                          <ErrorMessage
                            name="phoneNumber"
                            component="div"
                            className="text-red-500"
                          />
                        </div>
                      </div>
                      <div className="">
                        <label className="font-bold text-[13px] flex  mb-[5px] gap-1">
                          Email
                        </label>
                        <div className="flex">
                          <div className="border h-[34px] w-[43px] flex items-center justify-center border-[#e5e6e7] px-3 py-[6px]">
                            <Icon path={mdiAt} size={0.7} />
                          </div>
                          <input
                            className="px-3 ml-[-1px] h-[34px] mr-[-1px] bg-transparent rounded-0 focus:border-[#1ab394] focus:outline-none focus:ring-0 outline-none trnasition duration-300 w-full py-[6px] border border-[#e5e6e7] text-[13px]"
                            name="email"
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="text-red-500"
                          />

                          <div className="border h-[34px] w-[43px] flex items-center justify-center border-l-0 border-[#e5e6e7] px-3 py-[6px]">
                            <Icon path={mdiInformationOutline} size={0.6} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2  items-center mt-7 mb-2.5">
                      <input
                        id="comments"
                        name="comments"
                        type="checkbox"
                        className="h-4 w-4 rounded-full border-gray-300 text-[#1AB394] focus:ring-0"
                      />
                      <span className="text-[13px]">
                        Send nutrition assessment form via message and email
                      </span>{' '}
                      <Icon path={mdiInformationOutline} size={0.6} />
                    </div>
                  </div>
                  <div className="flex items-center px-[30px] pb-[15px] justify-between">
                    <button className="px-3 hover:bg-[#FAFAFB] trnasition duration-200 border rounded-[3px] text-[14px] py-[6px]">
                      Cancel
                    </button>
                    <button
                    type="submit"
                      className="px-3 rounded-[3px] border hover:bg-[#18a689] border-[#1AB394] bg-[#1AB394] text-[#FFFFFF] text-[14px] py-[6px]"
                      // onClick={handleSubmit}
                    >
                      Register client
                    </button>
                  </div>
                  </Form>
                  </Formik>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default AddNewClient;
