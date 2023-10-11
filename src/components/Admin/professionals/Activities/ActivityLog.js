import React from "react";
import Pagination from "../../common/Pagination";
import Link from "next/link";
import Icon from "@mdi/react";
import { mdiCalendar } from "@mdi/js";

const ActivityLog = (props) => {
  const { logData } = props;
  return (
    <>
      <div className="relative verticle-stepper ">
        {logData?.map((item, index) => {
          return (
            <div
              className={`${
                index === 0
                  ? "mt-0"
                  : index === logData.length - 1
                  ? "mb-0"
                  : ""
              } my-[4em] relative`}
              key={index}
            >
              <Link
                href={"#"}
                className={`flex ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`timeline-content ${
                    index % 2 === 0
                      ? "timeline-content-right"
                      : "timeline-content-left float-right"
                  } text-[#676A6C] hover:bg-[#EEEEEE] w-[45%] relative ml-0 pt-3 pb-2.5 p-[1.6em] rounded-[0.25em] bg-[#f5f5f5]`}
                >
                  <h2 className="text-base">{item.type}</h2>
                  <div className="font-thin text-[0.85em] text-[#676A6C] mt-[5px]">
                    <span>{item.desc}</span>
                  </div>
                  <div className="flex items-center text-[0.85em] pt-[3px]">
                    <div className="text-[#888888] flex-grow">
                      {item.person}
                    </div>
                    <img
                      src="/image/male_thumb.png"
                      className="h-5 rounded-full"
                    />
                  </div>
                  <span
                    className={`absolute w-full ${
                      index % 2 === 0
                        ? "left-[122%] float-left"
                        : "left-auto right-[122%] text-right"
                    }  top-0.5 text-sm font-medium`}
                  >
                    <div>{item.dateTime}</div>
                    <small className="text-[#1ab394] font-normal text-[80%]">
                      <div>{item.monthAgo} ago</div>
                    </small>
                  </span>
                </div>
                <div className="w-[50px] absolute  top-0 h-[50px] text-sm bg-[#1ab394] text-white text-center border-[3px] rounded-full border-[#f1f1f1] left-[50%] ml-[-25px]">
                  <Icon
                    path={mdiCalendar}
                    size={"24px"}
                    className="m-auto absolute inset-0"
                  />
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <div>
        <Pagination className="justify-end" />
      </div>
    </>
  );
};

export default ActivityLog;
