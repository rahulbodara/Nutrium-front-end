import MainLayout from "@/components/Admin/MainLayout";
import SelectField from "@/components/Admin/common/SelectField";
import ActivityLog from "@/components/Admin/professionals/Activities/ActivityLog";
import React, { useEffect } from "react";


const StepperData = [
  {
    type: "scheduled",
    desc: "An appointment was created on July 21, 2023 at 17:02.",
    person: "om davra",
    dateTime: "July 21, 2023 5:31 PM",
    monthAgo: "3 months",
  },
  {
    type: "deleted",
    desc: "The appointment on September 13, 2023 at 10:45 was deleted.",
    person: "om davra",
    dateTime: "July 21, 2023 5:31 PM",
    monthAgo: "3 months",
  },
  {
    type: "scheduled",
    desc: "The appointment on September 13, 2023 at 10:45 was canceled.",
    person: "om davra",
    dateTime: "July 21, 2023 5:31 PM",
    monthAgo: "1 months",
  },
  {
    type: "canceled",
    desc: "The appointment on September 13, 2023 at 10:45 was canceled.",
    person: "om davra",
    dateTime: "July 21, 2023 5:31 PM",
    monthAgo: "1 months",
  },
  {
    type: "Meal plan updated",
    desc: "The appointment on September 13, 2023 at 10:45 was canceled.",
    person: "om davra",
    dateTime: "July 21, 2023 5:31 PM",
    monthAgo: "1 months",
  },
];

const filterActivities = [
  {
    id: 1,
    option: "All activities",
    name: "All activities",
  },
  {
    id: 2,
    option: "Your activities",
    name: "Your activities",
  },
  {
    id: 3,
    option: "Your secretaries' activities",
    name: "Your secretaries' activities",
  },
];


const Activities = () => {

  return (
    <>
      <MainLayout
        head={"Activities"}
        text={"Check information about recent activities"}
      >
        <div className="p-[25px_0_125px]">
          <div className="flex gap-x-[30px]">
            <div className="w-2/3  bg-white rounded-[5px] mb-[25px] card-shadow">
              <div>
                <div className="widget-header p-[20px_20px_15px_20px]">
                  <div className="flex items-center">
                    <div className="flex-grow">
                      <h4 className="text-[20px] font-[400] leading-[1.1]">
                        Activity log
                      </h4>
                    </div>
                  </div>
                  <div className="font-[100] text-[12px] text-[#888888] opacity-[0.6]">
                    Check your and your clients' latest activities
                  </div>
                </div>
              </div>
              <div className="px-5 pb-5">
                <ActivityLog logData={StepperData} />
              </div>
            </div>
            <div className="w-1/3">
              <div className="mb-[25px] bg-white card-shadow rounded-[5px]">
                <div className="widget-header p-[20px_20px_15px_20px]">
                  <div className="flex items-center">
                    <div className="flex-grow">
                      <h4 className="text-[20px] font-[400] leading-[1.1]">
                        Filter activities
                      </h4>
                    </div>
                  </div>
                  <div className="font-[100] text-[12px] text-[#888888] opacity-[0.6]">
                    Filter the listed activities
                  </div>
                </div>
                <div className="px-5 pb-5">
                  <div className="filter-activities service-modal">
                    <SelectField
                      option={filterActivities}
                      searchOption={false}
                    />
                  </div>
                  <div className="filter-activities service-modal mt-2.5">
                    <SelectField
                      option={filterActivities}
                      searchOption={false}
                    />
                  </div>
                </div>
              </div>
              <div className="rounded-[5px] bg-white shadow-[0_2px_2px_0_rgba(144,144,144,0.14),0_3px_1px_-2px_transparent,0_1px_5px_0_rgba(145,145,145,0.12)] mt-0 mb-[25px] p-0">
                <div className="p-[20px] pb-[15px]">
                  <div className="leading-[1.1] text-[20px]">Statistics</div>
                  <div className="text-[#888888] text-[12px] opacity-[0.8]">
                    Statistics on the use of the mobile apps
                  </div>
                </div>
                <div className="p-[20px] pt-0">
                  <ul>
                    <li>
                      <h2 className="text-[24px] font-[100] opacity-[0.8]">
                        0 of 2
                      </h2>
                      <div className="table w-full">
                        <div className="font-[100] py-[3px] table-cell align-middle text-[0.85em]">
                          Clients that installed the mobile app
                        </div>
                      </div>
                      <div>
                        <div className="h-[5px] mt-[5px] overflow-hidden bg-[#f5f5f5] rounded-[4px]">
                          <div className="w-full h-[5px] mb-[5px] bg#f5f5f5] float-left text-xs leading-5 text-white text-center transition-[width] duration-[0.6s] ease-[ease]"></div>
                        </div>
                      </div>
                    </li>
                    <li className="mt-[15px]">
                      <h2 className="text-[24px] font-[100] opacity-[0.8]">
                        0 of 2
                      </h2>
                      <div className="table w-full">
                        <div className="font-[100] py-[3px] table-cell align-middle text-[0.85em]">
                          Clients that logged their weight on the mobile app
                        </div>
                      </div>
                      <div>
                        <div className="h-[5px] mt-[5px] overflow-hidden bg-[#f5f5f5] rounded-[4px]">
                          <div className="w-full h-[5px] mb-[5px] bg#f5f5f5] float-left text-xs leading-5 text-white text-center transition-[width] duration-[0.6s] ease-[ease]"></div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-white mb-[25px] shadow-box1 rounded-[5px]">
                <div className="p-[20px] pb-[15px] 2lg:mt-[25px] mt-0">
                  <h3 className="text-[20px] leading-[24px] ">App downloads</h3>
                  <span className="text-[12px] font-[100] text-[#888888]/[70%]">
                    Number of mobile app downloads in the last 6 weeks
                  </span>
                </div>
                <div className="p-[0_20px_20px]">
                  <div>
                    <h2>Line Chart Example</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Activities;
