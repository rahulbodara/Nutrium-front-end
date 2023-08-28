import { mdiPlus, mdiPlusBox } from "@mdi/js";
import Icon from "@mdi/react";
import React, { useEffect, useState } from "react";
import AddNewService from "../Profile/AddNewService";
import { GetAllServices } from "@/redux/action/auth";
import { useDispatch, useSelector } from "react-redux";
import EditService from "../Profile/EditService";

const Services = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesData, setservicesData] = useState();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [dataId, setdataId] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    const fetch = async () => {
      const response = await dispatch(GetAllServices());
      setservicesData(response.data);
    };
    fetch();
  }, [dispatch]);
  return (
    <>
      <div className="bg-white my-[25px] card-shadow rounded-[5px]">
        <div className="p-[20px_20px_15px_20px] flex items-center">
          <div className="flex-grow">
            <h4 className="text-[20px] leading-[1.1]">Services</h4>
            <div className="text-[12px] text-[#888888] opacity-[0.6]">
              Set your services and pricing here
            </div>
          </div>
          <div
            className="flex items-center group cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <a>
              <Icon path={mdiPlus} size="24px" />
            </a>
            <div className="ml-[5px] text-[1.1em] text-[#888888] opacity-[0.7] hidden group-hover:block">
              Add workplace
            </div>
          </div>
        </div>
        <div className="p-[20px] pt-0 lg:gap-[8px] gap-[30px] grid lg:grid-cols-1 grid-cols-2">
          {servicesData?.map((item) => {
            return (
              <div className="border border-[#EEEEEE] p-[-1px] hover:border-[#1ab394]" onClick={() => {setIsEditModalOpen(true);setdataId(item._id)}}>
                <div className="flex select-none admin-select-field">
                  <div className="basis-[180px] mr-[-1px] min-w-[180px] md:basis-[140px] md:min-w-[140px]   flex border bg-[#FAFAFB] text-[1.1em] items-center z-[1] px-2.5 py-[5px] border-solid border-[#EEEEEE]">
                    Type of service
                  </div>
                  <div className="grow-[3] border-[1px_solid_#EEEEEE] border-l-0 flex select-none">
                    <div className="select-field flex-grow border-[#EEEEEE] relative border-[1px]">
                      <span className="w-full block h-full border-none outline-none pr-[24px] min-h-[38px] p-[10px] focus:ring-0">
                        {item.typeOfService}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex select-none admin-select-field ">
                  <div className="basis-[180px] mr-[-1px] min-w-[180px] md:basis-[140px] md:min-w-[140px]   flex border bg-[#FAFAFB] text-[1.1em] items-center z-[1] px-2.5 py-[5px] border-solid border-[#EEEEEE]">
                    Type of Clients
                  </div>
                  <div className="grow-[3] border-[1px_solid_#EEEEEE] border-l-0 flex select-none">
                    <div className="select-field flex-grow border-[#EEEEEE] relative border-[1px]">
                      <span className="w-full block h-full border-none outline-none pr-[24px] min-h-[38px] p-[10px] focus:ring-0">
                        {item.typeOfClients}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex select-none admin-select-field">
                  <div className="basis-[180px] mr-[-1px] min-w-[180px] md:basis-[140px] md:min-w-[140px]   flex border bg-[#FAFAFB] text-[1.1em] items-center z-[1] px-2.5 py-[5px] border-solid border-[#EEEEEE]">
                    Name of the Service
                  </div>
                  <div className="grow-[3] border-[1px_solid_#EEEEEE] border-l-0 flex select-none">
                    <div className="select-field flex-grow border-[#EEEEEE] relative border-[1px]">
                      <span className="w-full block h-full border-none outline-none pr-[24px] min-h-[38px] p-[10px] focus:ring-0">
                        {item.nameOfService}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex select-none admin-select-field ">
                  <div className="basis-[180px] mr-[-1px] min-w-[180px] md:basis-[140px] md:min-w-[140px]   flex border bg-[#FAFAFB] text-[1.1em] items-center z-[1] px-2.5 py-[5px] border-solid border-[#EEEEEE]">
                    Duration
                  </div>
                  <div className="grow-[3] border-[1px_solid_#EEEEEE] border-l-0 flex select-none">
                    <div className="select-field flex-grow border-[#EEEEEE] relative border-[1px]">
                      <span className="w-full block h-full border-none outline-none pr-[24px] min-h-[38px] p-[10px] focus:ring-0">
                        {item.duration}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex select-none admin-select-field">
                  <div className="basis-[180px] mr-[-1px] min-w-[180px] md:basis-[140px] md:min-w-[140px]   flex border bg-[#FAFAFB] text-[1.1em] items-center z-[1] px-2.5 py-[5px] border-solid border-[#EEEEEE]">
                    Pricing
                  </div>
                  <div className="grow-[3] border-[1px_solid_#EEEEEE] border-l-0 flex select-none">
                    <div className="select-field flex-grow border-[#EEEEEE] relative border-[1px]">
                      <span className="w-full block h-full border-none outline-none pr-[24px] min-h-[38px] p-[10px] focus:ring-0">
                        {item.pricing}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex select-none admin-select-field">
                  <div className="basis-[180px] mr-[-1px] min-w-[180px] md:basis-[140px] md:min-w-[140px]   flex border bg-[#FAFAFB] text-[1.1em] items-center z-[1] px-2.5 py-[5px] border-solid border-[#EEEEEE]">
                    Workplaces
                  </div>
                  <div className="grow-[3] border-[1px_solid_#EEEEEE] border-l-0 flex select-none">
                    <div className="select-field flex-grow border-[#EEEEEE] relative border-[1px]">
                      <span className="w-full block h-full border-none outline-none pr-[24px] min-h-[38px] p-[10px] focus:ring-0">
                        {item.workplace}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div
            className="group flex p-[20px] items-center lg:h-[235px] h-auto text-[#888888] border border-[#EEEEEE] hover:border-[#1ab394] cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <span className="w-[70px]">
              <Icon
                path={mdiPlusBox}
                className="text-[#888888] group-hover:text-[#1ab394] mx-auto"
                size={"36px"}
              />
            </span>
            <span>
              <h3 className="text-[16px] group-hover:text-[#1ab394]">
                Add a new service
              </h3>
            </span>
          </div>
        </div>
      </div>
      <AddNewService isOpen={isOpen} setIsOpen={setIsOpen} />
      <EditService
        isEditModalOpen={isEditModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
        id={dataId}
      />
    </>
  );
};

export default Services;
