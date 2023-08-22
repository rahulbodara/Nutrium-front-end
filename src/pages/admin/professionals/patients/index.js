import MainLayout from '@/components/Admin/MainLayout';
import React, { useEffect, useState } from 'react';
import clientPro from '../../../../../public/image/clientprof.png';
import Image from 'next/image';
import { FaUser, FaUserPlus } from 'react-icons/fa';
import { LuImport } from 'react-icons/lu';
import { AiOutlinePlus } from 'react-icons/ai';
import { IoMdCalendar } from 'react-icons/io';
import { MdLocationOn } from 'react-icons/md';
import { BiTrendingDown } from 'react-icons/bi';
import NewClientsChart from '@/components/Admin/Clients/NewClientsChart';
import AgeChart from '@/components/Admin/Clients/AgeChart';
import AddNewClient from '@/components/Admin/Clients/AddNewClient';
import ImportClients from '@/components/Admin/Clients/ImportClients';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { clientData } from '@/redux/action/auth';
const Patients = () => {
  let [isOpen, setIsOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetch = async () => {
      await dispatch(clientData());
    };
    fetch();
  }, [dispatch]);
  const clients = useSelector((state) => state?.auth?.clientData);
  return (
    <div>
      <MainLayout
        head={'Your clients'}
        text={'Check information about your clients'}
      >
        <div className="pt-[25px] grid grid-cols-3 2lg:grid-cols-1  flex-row gap-9">
          <div className="2lg:col-span-1 col-span-2">
            <div className="bg-white shadow-box1 relative rounded">
              <div className="p-[20px_20px_15px_20px]">
                <div className="flex items-center">
                  <div className="flex-1">
                    <h1 className="text-[20px] font-normal text-[#676a6c]">
                      Your clients
                    </h1>
                    <span className="text-[12px] text-[#888888] font-thin block">
                      Check information about your clients
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => setOpenModal(true)}>
                      <LuImport className="text-[19px] text-[#676a6c]" />
                    </button>
                    <button onClick={() => setIsOpen(true)}>
                      <AiOutlinePlus className="text-[19px] text-[#676a6c]" />
                    </button>
                  </div>
                </div>
                <div className="w-full pt-3">
                  <input
                    type="text"
                    className="block border-[1px] border-[#e5e6e7] rounded-[3px] py-[6px] w-full px-[12px] input-transition focus:border-[#1ab394] text-[13px] text-[#676a6c] focus:outline-none placeholder:text-[#676a6c44]"
                    placeholder="Search clients by name, occupation, identification number or contact..."
                  />
                </div>
                <div className="pt-5 grid grid-cols-2 gap-7">
                  <Link href="/admin/professionals/patients/information">
                    <div className="flex border rounded-[1px] border-solid border-[#e5e6e7] hover:border-[#1AB394] p-[10px]">
                      <div className="relative">
                        <div className="bg-[#1AB394] absolute end-0 bottom-0 w-[17px] h-[17px] rounded-full"></div>
                        <Image
                          src={clientPro}
                          className="rounded-full max-h-[80px] max-w-[80px]"
                        />
                      </div>
                      <div className="flex flex-col flex-1 pl-3">
                        <h1 className="text-[16px] text-[#676a6c]">
                          Example client
                        </h1>
                        <span className="text-[13px] text-[#676a6c]">
                          Occupation example
                        </span>
                        <div className="flex gap-1 mb-1">
                          <div className="bg-[#E0FAF1] flex items-center justify-center w-4 h-4 rounded-full">
                            <MdLocationOn className="text-[#12896D]" />
                          </div>
                          <span className="text-[11px] text-[#676a6c]">
                            Globalia
                          </span>
                        </div>
                        <div className="flex gap-1">
                          <div className="bg-[#E0FAF1] flex items-center justify-center w-4 h-4 rounded-full">
                            <IoMdCalendar className="text-[#12896D] scale-x-[-1]" />
                          </div>
                          <span className="text-[11px] text-[#676a6c]">
                            No appointments yet
                          </span>
                        </div>
                      </div>
                      <div className="">
                        <FaUser className="text-[#AAAAAA]" />
                      </div>
                    </div>
                  </Link>

                  {Array.isArray(clients) &&
                    clients.map((items, key) => (
                      <Link href="/admin/professionals/patients/information">
                        <div className="flex border rounded-[1px] border-solid border-[#e5e6e7] hover:border-[#1AB394] p-[10px]">
                          <div className="relative">
                            <div className="bg-[#1AB394] absolute end-0 bottom-0 w-[17px] h-[17px] rounded-full"></div>
                            <Image
                              src={clientPro}
                              className="rounded-full max-h-[80px] max-w-[80px]"
                            />
                          </div>
                          <div className="flex flex-col flex-1 pl-3">
                            <h1 className="text-[16px] text-[#676a6c]">
                              {items?.fullName}
                            </h1>
                            <span className="text-[13px] text-[#676a6c]">
                              {items?.occupation}
                            </span>
                            <div className="flex gap-1 mb-1">
                              <div className="bg-[#E0FAF1] flex items-center justify-center w-4 h-4 rounded-full">
                                <MdLocationOn className="text-[#12896D]" />
                              </div>
                              <span className="text-[11px] text-[#676a6c]">
                                {items?.workplace}
                              </span>
                            </div>
                            <div className="flex gap-1">
                              <div className="bg-[#E0FAF1] flex items-center justify-center w-4 h-4 rounded-full">
                                <IoMdCalendar className="text-[#12896D] scale-x-[-1]" />
                              </div>
                              <span className="text-[11px] text-[#676a6c]">
                                No appointments yet
                              </span>
                            </div>
                          </div>
                          <div className="">
                            <FaUser className="text-[#AAAAAA]" />
                          </div>
                        </div>
                      </Link>
                    ))}

                  <div
                    onClick={() => setIsOpen(true)}
                    className="border rounded-[1px] border-solid border-[#e5e6e7] group hover:border-[#1AB394] flex p-5 gap-6 text-center items-center "
                  >
                    <FaUserPlus className="scale-x-[-1] text-[#888888] group-hover:text-[#1AB394] text-[48px]" />{' '}
                    <span className="text-[16px] group-hover:text-[#1AB394] text-[#888888] font-normal">
                      Add new client
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col  gap-5">
            <div className="bg-white shadow-box1 rounded p-[20px]">
              <div>
                <h1 className="text-[20px] text-[#676a6c] ">Filter clients</h1>
                <span className="text-[12px] text-[#888888] mb-5 block">
                  Filter which clients you want to see
                </span>
                <div>
                  <select
                    className="border border-solid mb-2 p-1.5 h-[34px] focus:outline-none border-[#e5e6e7] bg-transparent block w-full "
                    defaultValue="All clients"
                  >
                    <option>All clients</option>
                    <option>Active clients this month</option>
                  </select>
                  <select
                    className="border border-solid p-1.5 h-[34px] focus:outline-none border-[#e5e6e7] bg-transparent block w-full "
                    defaultValue="All clients"
                  >
                    <option>All workplaces</option>
                    <option>Active clients this month</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-box1 rounded p-[20px]">
              <div>
                <h1 className=" text-[20px] text-[#676a6c] ">
                  General information
                </h1>
                <span className="text-[12px] text-[#888888] mb-5 block">
                  Check statistics on new and active clients
                </span>
                <h2 className="font-[400] text-[#676a6c] text-[24px]">
                  0 of 1
                </h2>
                <div className="flex mb-2 mt-1">
                  <span className="text-[12px] text-[#888888]  flex-1">
                    Active clients compared to total number
                  </span>
                  <span className="text-[12px] text-[#888888] block">0%</span>
                </div>
                <div className="bg-[#f5f5f5] transition rounded-full overflow-hidden w-full h-[5px]">
                  <div
                    className="bg-[#1ab394] h-[5px]"
                    style={{ width: '0%' }}
                  ></div>
                </div>
                <h2 className="font-[400] text-[#676a6c] mt-[15px] text-[24px]">
                  0
                </h2>
                <div className="flex mb-2 mt-1">
                  <span className="text-[12px] text-[#888888]  flex-1">
                    New clients this month
                  </span>
                  <span className="text-[12px] flex items-center  text-[#888888] gap-1">
                    <BiTrendingDown className="text-[18px]" /> 100.0%
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-box1 rounded p-[20px]">
              <h1 className=" text-[20px] text-[#676a6c] ">New clients</h1>
              <span className="text-[12px] text-[#888888] mb-5 block">
                Clients added in the last 6 weeks
              </span>
              <div>
                <NewClientsChart />
              </div>
            </div>
            <div className="bg-white shadow-box1 rounded p-[20px]">
              <h1 className=" text-[20px] text-[#676a6c] ">Age distribution</h1>
              <span className="text-[12px] text-[#888888] mb-5 block">
                Check the age distribution of your active clients
              </span>
              <div>
                <AgeChart />
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
      <AddNewClient isOpen={isOpen} setIsOpen={setIsOpen} />
      <ImportClients setOpenModal={setOpenModal} openModal={openModal} />
    </div>
  );
};

export default Patients;
