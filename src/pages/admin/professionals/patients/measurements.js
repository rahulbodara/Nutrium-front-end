import ClientDetail from "@/components/Admin/Clients/ClientDetail";
import ClientSubscribe from "@/components/Admin/Clients/ClientSubscribe";
import Steps from "@/components/Admin/Clients/Information/Steps";
import MainLayout from "@/components/Admin/MainLayout";
import { mdiCog, mdiMinus, mdiTrendingDown, mdiCalendarRange } from "@mdi/js";
import Icon from "@mdi/react";
import Link from "next/link";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllMeasurementData,
  addMeasurement,
} from "@/redux/action/measurnment";
import { RESPONSE_LIMIT_DEFAULT } from "next/dist/server/api-utils";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { useRouter } from "next/router";
import moment from "moment";
import { handleApiCall } from "@/util/apiUtils";
import { useEffect } from "react";
import { userData } from "@/redux/action/auth";

const DynamicC3LineChart = dynamic(
  () => import("@/components/Admin/common/C3LineChart"),
  { ssr: false }
);
const anthropometric = [
  {
    name: "Weight",
    value: "70 kg",
  },
  {
    name: "Height",
    value: "167 cm",
  },
  {
    name: "Abdominal skinfold",
    value: "25 mm",
  },
  {
    name: "Chest skinfold",
    value: "10 mm",
  },

  {
    name: "Front thigh skinfold",
    value: "15 mm",
  },
  {
    name: "Hip circumference",
    value: "",
  },
  {
    name: "Midaxillary skinfold",
    value: "12 mm",
  },

  {
    name: "Subscapular skinfold",
    value: "12 mm",
  },
  {
    name: "Suprailiac skinfold",
    value: "14 mm",
  },
  {
    name: "Triceps skinfold",
    value: "12 mm",
  },
  {
    name: "Waist circumference",
    value: "",
  },
];
const myData = [0, 1, 0];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const analytical = [
  {
    name: "Diastolic blood pressure",
    value: "",
  },
  {
    name: "HDL Cholesterol",
    value: "",
  },
  {
    name: "LDL Cholesterol",
    value: "25 mm",
  },
  {
    name: "Systolic blood pressure",
    value: "10 mm",
  },

  {
    name: "Total cholesterol",
    value: "15 mm",
  },
  {
    name: "Triglycerides",
    value: "",
  },
];
const bodycomposition = [
  {
    name: "Body fat percentage",
    value: "29.6 %",
  },
  {
    name: "Fat mass",
    value: "20.7 kg",
  },
  {
    name: "Muscle mass",
    value: "",
  },
  {
    name: "Muscle mass percentage",
    value: "",
  },
];
const Measurements = () => {
  const router = useRouter();
  const { query } = router;
  const [selected, setSelected] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const clientId = useSelector((state) => state.Measurement.clientId);
  const dispatch = useDispatch();

  let datattatta =
    selected !== null ? anthropometric[selected - 1].name.toLowerCase() : "";

  datattatta = datattatta.toLowerCase().replace(/\s+/g, "");
  const _id = useSelector(
    (state) => state?.Measurement?.measurementData?.[0]?.data?.measurement?._id
  );

  // const entryId = useSelector((state) => {
  //   console.log("🚀 ~ file: measurements.js:155 ~ Measurements ~ state:", state)
  //   return
  // })

  const entryId = useSelector((state) => {
    return state?.Measurement?.measurementData?.[0]?.Measurement
      ?.measurements?.[0]?.entries?.[0]?._id;
  });
  useEffect(() => {
    const fetch = async () => {
      await dispatch(GetAllMeasurementData(clientId));
    };
    fetch();
  }, [dispatch]);

  const measurementData = useSelector(
    (state) =>
      state?.Measurement?.measurementData?.[0]?.Measurement?.measurements
  );
  console.log("measurementData:----->", measurementData)
  const initialValues = {
    measurementsDate: startDate,
    measurements: [
      {
        measurementtype: datattatta,
        entries: [
          {
            date: "",
            value: "",
            unit: "",
          },
        ],
      },
    ],
  };
  const [datas, setDatas] = useState([]);
  const details = (values) => {
    const myValue = {
      date: values.measurementsDate,
      value: values.value,
      unit: values.unit,
    };

    // console.log("🚀 ~ file: measurements.js:188 ~ details ~ myValue:", myValue)
    if (!datas.length) {
      setDatas([myValue]);
    } else {
      setDatas([...datas, myValue]);
    }
  };

 
  useEffect(() => {
    if (datas.length > 0) {
      const newmeasureData = {
        measurementsdate: moment(startDate).format("YYYY-MM-DD"),
        measurements: datas,
      };
      
      const register = async () => {
        try {
          const success = await handleApiCall(
            dispatch,
            addMeasurement(newmeasureData, clientId),
            "Measurement successfully created"
            );
            if (success) {
              dispatch(GetAllMeasurementData(clientId));
            }
          } catch (error) {
          console.log("Error--->", error);
        }
      };
      
      register();
      console.log("datas.length:---->", datas.length)
    }
  }, [datas, startDate, clientId, dispatch]);

  const handleRegister = (values) => {
    const measurementType = datattatta;

    const newEntry = {
      date: moment(values.measurementsDate).format("YYYY-MM-DD"),
      value: values.value,
      unit: values.unit,
    };

    // Find the existing measurement or create a new one
    const measurementIndex = datas.findIndex(
      (measurement) => measurement.measurementtype === measurementType
    );
    console.log(
      "🚀 ~ file: measurements.js:225 ~ handleRegister ~ measurementIndex:",
      measurementIndex
    );

    if (measurementIndex !== -1) {
      datas[measurementIndex].entries.push(newEntry);
    } else {
      datas.push({
        measurementtype: measurementType,
        entries: [newEntry],
      });
    }
    setDatas([...datas]);
  };

  return (
    <div>
      <MainLayout
        head={"Client profile"}
        text={"Check and update information about the client"}
      >
        <div className="mt-[-20px]">
          <ClientDetail />
          <div className="pt-[25px] pb-[25px]">
            <ClientSubscribe />
            <div className="mt-[25px]">
              <Steps />
            </div>
          </div>
        </div>
        <div className="2lg:block grid grid-cols-12 gap-[30px]">
          <div className="col-span-4">
            <div className="rounded-[5px] mb-[25px] pb-[10px] bg-white shadow-box1">
              <div className="p-[20px] pb-[15px]">
                <h3 className="text-[20px] leading-[24px] ">
                  Anthropometric measurements
                </h3>
              </div>
              <div className="divide-y divide-[#EEEEEE]">
                {anthropometric.map((item, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => setSelected(index + 1)}
                      className={`${
                        selected === index + 1
                          ? "border-l-[5px] border-[#1AB394]"
                          : "hover:border-l-[5px]  hover:border-[#EEEEEE]"
                      }   cursor-pointer text-[15px] flex items-center  py-[15px] px-[20px]`}
                    >
                      <span className="flex-1">{item.name}</span>
                      <span>
                        {item.value ? (
                          <>{item.value}</>
                        ) : (
                          <Icon path={mdiMinus} size={1} />
                        )}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="rounded-[5px] mb-[25px] pb-[10px] bg-white shadow-box1">
              <div className="p-[20px] pb-[15px]">
                <h3 className="text-[20px] leading-[24px] ">Analytical data</h3>
              </div>
              <div className="divide-y divide-[#EEEEEE]">
                {analytical.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="hover:border-l-[5px] cursor-pointer text-[15px] flex items-cemter  py-[15px] px-[20px] hover:border-[#EEEEEE]"
                    >
                      <span className="flex-1">{item.name}</span>
                      <span>
                        {item.value ? (
                          <>{item.value}</>
                        ) : (
                          <Icon path={mdiMinus} size={1} />
                        )}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="rounded-[5px] mb-[25px] pb-[10px] bg-white shadow-box1">
              <div className="p-[20px] pb-[15px]">
                <h3 className="text-[20px] leading-[24px] ">
                  Body composition
                </h3>
              </div>
              <div className="divide-y divide-[#EEEEEE]">
                {bodycomposition.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="hover:border-l-[5px] cursor-pointer text-[15px] flex items-cemter  py-[15px] px-[20px] hover:border-[#EEEEEE]"
                    >
                      <span className="flex-1">{item.name}</span>
                      <span>
                        {item.value ? (
                          <span className="italic border-b-[2px] border-dashed border-[#EA9F77]">
                            {item.value}
                          </span>
                        ) : (
                          <Icon path={mdiMinus} size={1} />
                        )}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="mb-[25px] py-[15px] shadow-box1  rounded-[5px] px-[20px] bg-[#1AB394]">
              <Link
                href="#"
                className="flex items-center text-white text-[16px]"
              >
                <h3 className="flex-1"> Configure measurement types</h3>
                <Icon path={mdiCog} size={0.9} />
              </Link>
            </div>
          </div>
          <div className="col-span-8">
            <div className="bg-white mb-[25px] shadow-box1 rounded-[5px]">
              <Formik
                initialValues={initialValues}
                onSubmit={(values) => handleRegister(values)}
              >
                <Form>
                  <div className="p-[20px] pb-[15px] 2lg:mt-[25px] mt-0">
                    <h3 className="text-[20px] leading-[24px]">
                      New measurements
                    </h3>
                    <span className="text-[12px] text-[#888888]/[70%]">
                      Register the weight of your client
                    </span>
                    <div className="flex p-0 mt-3">
                      <div className="grow text-ellipsis flex p-0">
                        <div className="border-r max-w-[250px] items-center flex-grow-[4] flex border border-[#EEEEE] relative">
                          <Field name="measurementsDate">
                            {({ field, form }) => (
                              <DatePicker
                                name="date"
                                selected={field.value}
                                onChange={(date) =>
                                  form.setFieldValue(field.name, date)
                                }
                                className="border-0 w-full focus:outline-none focus:ring-transparent"
                              />
                            )}
                          </Field>
                          <Icon
                            path={mdiCalendarRange}
                            size={0.9}
                            className="absolute right-[8px]"
                          />
                        </div>
                        <div className="grow-[4] border border-[#EEEEEE] flex relative">
                          <Field
                            type="text"
                            // name={`${datattatta}.value`}
                            // name={`${datattatta}[0].value`}
                            name="value"
                            placeholder="value"
                            className="border-0 self-center p-[10px] min-h-[38px] w-full"
                          />
                        </div>
                        <div className="items-center">
                          <Field
                            as="select"
                            // name={`${datattatta}.unit`}
                            // name={`${datattatta}[0].unit`}
                            name="unit"
                            className="inline-flex w-full justify-center gap-x-20 bg-white px-3 py-[13px] text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-[#EEEEEE] hover:bg-gray-50"
                          >
                            <option value="kg">Kilogram</option>
                            <option value="Pound">Pound</option>
                            <option value="Stone">Stone</option>
                          </Field>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="px-3.5 py-2.5 text-sm text-[#1AB394] border border-[#EEEEEE] bg-[#FAFAFB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </Form>
              </Formik>
            </div>

            <div className="bg-white mb-[25px] shadow-box1 rounded-[5px]">
              <div className="p-[20px] pb-[15px] 2lg:mt-[25px] mt-0">
                <h3 className="text-[20px] leading-[24px] ">Measurements</h3>
                <span className="text-[12px] text-[#888888]/[70%]">
                  Consult the weight measurements of your client
                </span>
              </div>

              {measurementData?.map((item) => {
                      const selecteditem = datattatta === item.measurementtype;
                return (
                  <div key={item._id} className="p-[0_20px_20px]">
                    {item?.entries?.map((subcategory) => {
                      return (
                        <>
                          {selecteditem && (
                            <div className="flex">
                              <div className="bg-[#fff] border border-[#EEEEEE] text-[17px] flex items-center justify-center mr-[-1px] min-w-[40px]">
                                <i className="fa fa-fw fa-user-doctor"></i>
                              </div>
                              <div className="basis-[210px] text-[1.1em] min-h-[40px] flex items-center  h-full border border-[#EEEEEE] sm:basis-[120px] min-w-[210px] sm:min-w-[120px] py-[5px] px-[10px] bg-[#FAFAFB]">
                                {/* July 13, 2023 */}
                                {subcategory.date}
                              </div>
                              <div className="flex-1 text-[13px] leading-[16px] border min-h-[40px] ml-[-1px]  p-[10px] border-[#EEEEEE]">
                                {/* 70 kg */}
                                {subcategory.value} {subcategory.unit}
                              </div>
                              <div className="min-w-[85px] flex items-center gap-[3px] justify-center border border-[#EEEEEE]  py-[5px] px-[10px] bg-[#FAFAFB]">
                                <Icon path={mdiTrendingDown} size={1} />
                                7%
                              </div>
                            </div>
                          )}
                        </>
                      );
                    })}
                    {/* <div className="flex mt-[7px]">
                      <div className="bg-[#fff] border border-[#EEEEEE] text-[17px] flex items-center justify-center mr-[-1px] min-w-[40px]">
                        <i className="fa fa-fw fa-user-doctor"></i>
                      </div>
                      <div className="basis-[210px] text-[1.1em] min-h-[40px] flex items-center  h-full border border-[#EEEEEE] sm:basis-[120px] min-w-[210px] sm:min-w-[120px] py-[5px] px-[10px] bg-[#FAFAFB]">
                        July 13, 2023
                      </div>
                      <div className="flex-1 text-[13px] leading-[16px] border min-h-[40px] ml-[-1px]  p-[10px] border-[#EEEEEE]">
                        75 kg
                      </div>
                      <div className="min-w-[85px] flex items-center gap-[3px] justify-center border border-[#EEEEEE]  py-[5px] px-[10px] bg-[#FAFAFB]">
                        <Icon path={mdiMinus} size={1} />
                      </div>
                    </div> */}
                  </div>
                );
              })}
            </div>

            <div className="bg-white  mb-[25px] shadow-box1 rounded-[5px]">
              <div className="p-[20px] pb-[15px] 2lg:mt-[25px] mt-0">
                <h3 className="text-[20px] leading-[24px] ">Goals</h3>
                <span className="text-[12px] text-[#888888]/[70%]">
                  Goals the client wants to achieve
                </span>
              </div>
              <div className="p-[0_20px_20px]">
                <p className="text-[#888888] italic text-center">
                  No goals defined yet.
                </p>
              </div>
            </div>
            <div className="bg-white mb-[25px] shadow-box1 rounded-[5px]">
              <div className="p-[20px] pb-[15px] 2lg:mt-[25px] mt-0">
                <h3 className="text-[20px] leading-[24px] ">Progress</h3>
                <span className="text-[12px] font-[100] text-[#888888]/[70%]">
                  Consult your client progress over time
                </span>
              </div>
              <div className="p-[0_20px_20px]">
                <DynamicC3LineChart data={myData} chartId="myChart" />
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default Measurements;
