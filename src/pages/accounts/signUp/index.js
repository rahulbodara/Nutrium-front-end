import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../../../public/image/light-logo.svg";
import signUplogo from "../../../../public/image/signup_img.png";
import checkMark from "../../../../public/icon/checkmark-green.svg";
import googleIcon from "../../../../public/icon/google.png";
import { BiHide, BiShow, BiCircle } from "react-icons/bi";
import SignupBody from "@/components/common/signupBody";
import Button from "@/components/common/Button";
import Select from "@/components/common/select";
import MultiSelect from "@/components/common/Multiselect";
import { signUpSchema } from "@/schema/signup";
import { ErrorMessage, Field, Form, Formik } from "formik";

const Sign_Up = () => {
  const [isShow, setIsShow] = useState(false);
  const [isFreeNewsAwail, setIsFreeNewsAwail] = useState(false);
  const [isTermApply, setIsTermApply] = useState(false);
  const [signupStep, setSignupStep] = useState(1);
  const handleFreeService = (e) => {
    setIsFreeNewsAwail(e.target.checked);
  };

  const handleTerms = (e) => {
    setIsTermApply(e.target.checked);
  };

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [userData, setUserData] = useState();
  console.log(userData, "usususuus");
  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  const handleMultiSelectChange = (values) => {
    setSelectedOptions(values);
    console.log(values);
  };

  const handleClick = () => {
    if (
      userData?.fullName &&
      userData?.email &&
      userData?.password !== "" &&
      isTermApply !== false
    ) {
      setSignupStep(2);
    }
  };
  const handleSubmit = (values, { resetForm }) => {
    try {
      setUserData(values);
      resetForm();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  useEffect(() => {
    setIsFreeNewsAwail(true);
  }, []);
  return (
    <>
      <SignupBody>
        <div
          className={`my-[80px] mx-auto ${
            signupStep === 2 || signupStep === 3
              ? "max-w-[750px] max-md:max-w-[100%]"
              : "max-w-[900px] max-md:max-w-[100%]"
          } rounded  max-xl:max-w-[75%] max-xl:my-[50px] max-xl:mx-auto`}
        >
          <div className="flex">
            <div className="w-full">
              <div className="block w-full overflow-hidden">
                <div className="flex">
                  {/* section: 1 */}

                  <section
                    className={`p-[80px] max-md:p-[40px] bg-white relative flex-shrink-0 w-full ${
                      signupStep === 2
                        ? "-left-[900px] hidden"
                        : signupStep === 3
                        ? "-left-[900px] hidden"
                        : "left-0 block"
                    }`}
                  >
                    <div className="mb-[40px]">
                      <h1 className="clr-grn text-[30px] tracking-[0.5px] text-center">
                        You are 1 minute away from your free Nutrium trial!
                      </h1>
                    </div>
                    <div className="flex">
                      <div className="py-[15px] pr-[64px] flex-1 max-lg:hidden">
                        <div>
                          <Image
                            src={signUplogo}
                            className="max-w-[200px] mb-[25px]"
                            alt="img1"
                          />
                        </div>
                        <div className="mb-[25px] clr-grn leading-[24px] text-[22px]">
                          Grow your nutrition business and improve your
                          relationship with clients. All in one single place.
                        </div>
                        <div className="mb-[25px]">
                          <div className="mb-[10px] text -[#6e7c91] tracking-[0.2px] text-[13px]">
                            <Image
                              src={checkMark}
                              alt="checkmark"
                              className="mr-[10px] w-[16px] h-[16px] inline-block"
                            />
                            Prenatal & paediatric nutrition;
                          </div>
                          <div className="mb-[10px] text-[#6e7c91] tracking-[0.2px] text-[13px]">
                            <Image
                              src={checkMark}
                              alt="checkmark"
                              className="mr-[10px] w-[16px] h-[16px] inline-block"
                            />
                            Automated calculations;
                          </div>
                          <div className="mb-[10px] text-[#6e7c91] tracking-[0.2px] text-[13px]">
                            <Image
                              src={checkMark}
                              alt="checkmark"
                              className="mr-[10px] w-[16px] h-[16px] inline-block"
                            />
                            Meal plans & recipe creation;
                          </div>
                          <div className="mb-[10px] text-[#6e7c91] tracking-[0.2px] text-[13px]">
                            <Image
                              src={checkMark}
                              alt="checkmark"
                              className="mr-[10px] w-[16px] h-[16px] inline-block"
                            />
                            Nutritional assessment;
                          </div>
                          <div className="mb-[10px] text-[#6e7c91] tracking-[0.2px] text-[13px]">
                            <Image
                              src={checkMark}
                              alt="checkmark"
                              className="mr-[10px] w-[16px] h-[16px] inline-block"
                            />
                            Client management & follow-up;
                          </div>
                          <div className="mb-[10px] text-[#6e7c91] tracking-[0.2px] text-[13px]">
                            <Image
                              src={checkMark}
                              alt="checkmark"
                              className="mr-[10px] w-[16px] h-[16px] inline-block"
                            />
                            Progress tracking.
                          </div>
                        </div>
                      </div>
                      <div className="py-[15px] px-[64px] pr-0 border-l-[1px] border-l-[#e0faf1] flex-1 max-lg:pl-[0]">
                        <Formik
                          initialValues={{
                            fullName: "",
                            email: "",
                            password: "",
                            termsAndCondition: false,
                          }}
                          validationSchema={signUpSchema}
                          onSubmit={handleSubmit}
                        >
                          <Form>
                            <div className="w-full border-[1px] border-[#aaaaaa] rounded-[5px] inline-block text-center whitespace-nowrap py-[5px] px-[8px]">
                              <Image
                                src={googleIcon}
                                className="inline-block align-middle mr-[20px] w-[24px] h-[24px]"
                                alt="google"
                              />
                              <div className="inline-block align-middle text-[14px] text-[#6e7c91]">
                                Sign up with Google
                              </div>
                            </div>
                            <div className="mt-[22px] mb-[20px] border-b-[1px] border-b-[#e0faf1] leading-[0.1em] text-center">
                              <span className="bg-white px-[10px] text-[#AAAAAA] text-[95%] text-center">
                                or
                              </span>
                            </div>
                            <div className="mb-[15px]">
                              <label
                                htmlFor="account_professional"
                                className="inline-block mb-[5px] text-[13px] text-[#676a6c] max-w-full"
                              >
                                Full name
                              </label>
                              <Field
                                type="text"
                                name="fullName"
                                className="block border-[1px] border-[#aaaaaa] rounded-[3px] py-[6px] w-full px-[12px] input-transition focus:border-[#1ab394] text-[13px] text-[#676a6c] focus:outline-none placeholder:text-[#676a6c44]"
                                placeholder="E.g. Mary Smith"
                              />
                              <ErrorMessage
                                name="fullName"
                                component="span"
                                className="text-red-500 text-xs"
                              />
                            </div>
                            <div className="mb-[15px]">
                              <label
                                htmlFor="account_professional"
                                className="inline-block mb-[5px] text-[13px] text-[#676a6c] max-w-full"
                              >
                                Email
                              </label>
                              <Field
                                type="email"
                                name="email"
                                className="block border-[1px] border-[#aaaaaa] rounded-[3px] py-[6px] w-full px-[12px] input-transition focus:border-[#1ab394] text-[13px] text-[#676a6c] focus:outline-none placeholder:text-[#676a6c44]"
                                placeholder="E.g. me@example.com"
                              />
                              <ErrorMessage
                                name="email"
                                component="span"
                                className="text-red-500 text-xs"
                              />
                            </div>
                            <div className="mb-[15px] relative">
                              <label
                                htmlFor="account_professional"
                                className="inline-block mb-[5px] text-[13px] text-[#676a6c] max-w-full"
                              >
                                Password
                              </label>
                              <Field
                                type={`${
                                  isShow === true ? "text" : "password"
                                }`}
                                name="password"
                                className="block border-[1px] border-[#aaaaaa] rounded-[3px] py-[6px] w-full px-[12px] input-transition focus:border-[#1ab394] text-[13px] text-[#676a6c] focus:outline-none placeholder:text-[#676a6c44]"
                                placeholder="9+ characters, letters, numbers, symbols"
                              />
                              <span
                                className="absolute top-[1.8em] right-[4px] p-[8px]"
                                onClick={() => setIsShow(!isShow)}
                              >
                                {isShow === true ? (
                                  <BiShow className=" text-[18px] text-[#888888]" />
                                ) : (
                                  <BiHide className=" text-[18px] text-[#888888]" />
                                )}
                              </span>
                              <ErrorMessage
                                name="password"
                                component="span"
                                className="text-red-500 text-xs"
                              />
                            </div>
                            <div className="mt-[24px]">
                              <div className="text-[85%]">
                                <div className="mb-[10px] pl-[20px] relative block">
                                  <div>
                                    <input
                                      type="checkbox"
                                      className="hidden z-10"
                                      id="freeNews"
                                      onChange={handleFreeService}
                                    />
                                    <label
                                      className="inline-block align-middle pl-[5px] min-h-[20px] text-[#676a6c] text-[85%]"
                                      htmlFor="freeNews"
                                    >
                                      Please send me free news and marketing
                                      tips for my nutrition business.
                                      {isFreeNewsAwail === true ? (
                                        <Image
                                          src={checkMark}
                                          alt="checkmark"
                                          className="w-[16px] h-[16px] inline-block absolute left-0 top-0 cursor-pointer"
                                        />
                                      ) : (
                                        <BiCircle className="text-[18px] inline-block absolute left-0 top-0 cursor-pointer text-[#c6c4c4]" />
                                      )}
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="text-[85%]">
                                <div className="mb-[10px] pl-[20px] relative block">
                                  <div>
                                    <Field
                                      name="termsAndCondition"
                                      type="checkbox"
                                      className="hidden z-10"
                                      id="terms"
                                      // onChange={handleTerms}
                                      // checked={isTermApply}
                                    />
                                    <label
                                      className="inline-block align-middle pl-[5px] min-h-[20px] text-[#676a6c] text-[85%]"
                                      htmlFor="terms"
                                    >
                                      I accept the{" "}
                                      <span className="clr-grn cursor-pointer">
                                        Terms and Conditions of Use
                                      </span>{" "}
                                      and the{" "}
                                      <span className="clr-grn cursor-pointer">
                                        Privacy Policy
                                      </span>{" "}
                                      of Nutrium.
                                      {isTermApply === true ? (
                                        <Image
                                          src={checkMark}
                                          alt="checkmark"
                                          className="w-[16px] h-[16px] inline-block absolute left-0 top-0 cursor-pointer"
                                        />
                                      ) : (
                                        <BiCircle
                                          className="text-[18px] inline-block absolute left-0 top-0 cursor-pointer text-[#c6c4c4]"
                                          onClick={() => setIsTermApply(true)}
                                        />
                                      )}
                                      <span>
                                        <ErrorMessage
                                          name="termsAndCondition"
                                          component="span"
                                          className="text-red-500 text-xs"
                                        />
                                      </span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Button
                              type="submit"
                              className="capitalize w-full mt-[24px]"
                              onClick={() => handleClick()}
                            >
                              sign up
                            </Button>
                            <div class="text-[85%] mt-[15px] text-[#676a6c] text-center">
                              Have an account already? Click
                              <a class="clr-grn" href="/">
                                {" "}
                                here
                              </a>{" "}
                              to sign in.
                            </div>
                          </Form>
                        </Formik>
                      </div>
                    </div>
                  </section>

                  {/* section: 2 */}

                  <section
                    className={`p-[80px] max-md:p-[40px] w-full relative bg-white ${
                      signupStep === 2
                        ? "left-[0] block"
                        : "-left-[900px] hidden"
                    } `}
                  >
                    <div className="mb-[40px]">
                      <h1 className=" text-3xl text-[#1AB394] tracking-[0.5px] text-center">
                        Hi, nna! We need some information so we can improve your
                        experience
                      </h1>
                    </div>
                    <div className="mb-[15px]">
                      <Select searchOption={false} label="Gender" />
                    </div>
                    <div className="mb-[15px]">
                      <Select label="Country" />
                    </div>

                    <div>
                      <label
                        htmlFor=""
                        className="inline-block max-w-full text-[13px] mb-[5px] text-[#676a6c]"
                      >
                        Date of Birth
                      </label>
                      <div className="mb-[15px]">
                        <input
                          placeholder="MM/DD/YYYY"
                          inputMode="text"
                          className="w-full h-[34px] placeholder:text-[15px] text-[#676a6c] placeholder:text-[#676a6c42] border-[1px] rounded-[3px] border-[#aaaaaa] focus:placeholder:text-[#676a6c] focus:border-[#1AB394] focus-visible:!outline-none focus:border-[1px] focus:bg-transparent p-[8px] "
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor=""
                        className="inline-block max-w-full text-[#676a6c] text-[13px] mb-[5px]"
                      >
                        Mobile Phone
                      </label>
                      <div className="mb-[15px] flex">
                        <div className="w-24 h-[34px] placeholder:text-[15px] border-[1px] border-r-0 cursor-not-allowed  rounded-l-[3px] rounded-r-[0px] border-[#aaaaaa] focus:border-[#1AB394] focus-visible:!outline-none focus:border-[1px] focus:bg-transparent p-[8px] "></div>
                        <input
                          placeholder="insert your mobile phone number"
                          inputMode="text"
                          className="h-[34px] text-[#676a6c] placeholder:text-[#676a6c42]   w-full border-[1px] rounded-l-[0px] rounded-r-[3px] border-[#aaaaaa] focus:border-[#1AB394] focus-visible:!outline-none focus:border-[1px] focus:bg-transparent p-[8px] "
                        />
                      </div>
                    </div>
                    <div className="">
                      <Select searchOption={false} label="Profession" />
                    </div>
                    <Button
                      type="button"
                      className="capitalize w-full mt-[24px]"
                      onClick={() => setSignupStep(3)}
                    >
                      Continue
                    </Button>
                  </section>

                  {/* section: 3 */}

                  <section
                    className={`p-[80px] max-md:p-[40px] w-full relative bg-white ${
                      signupStep === 3
                        ? "left-[0] block"
                        : "-left-[900px] hidden"
                    } `}
                  >
                    <div className="mb-[40px]">
                      <h1 className=" text-3xl text-[#1AB394] tracking-[0.5px] text-center">
                        Last step to start using Nutrium!
                      </h1>
                    </div>
                    <div className="mb-[15px]">
                      <Select
                        searchOption={false}
                        label="What are you looking for in Nutrium?"
                      />
                    </div>
                    <div className="mb-[15px]">
                      <label
                        htmlFor="workspace"
                        className="text-[#676a6c] text-[13px]"
                      >
                        Workspace
                      </label>
                      <input
                        type="text"
                        className="w-full text-[13px] focus:outline-none border-[1px] border-[#aaa] rounded-[3px] h-[34px] p-[8px] text-[#676a6c] focus:border-[#1AB394] placeholder:text-[#676a6c42]"
                        id="Workspace"
                        placeholder="E.g.Nutrium practice:Online practice"
                      />
                    </div>
                    <div className="mb-[15px]">
                      <MultiSelect
                        options={options}
                        onChange={handleMultiSelectChange}
                        label="Expertise"
                      />
                    </div>

                    <div className="mb-[15px]">
                      <label className="text-[#676a6c] text-[13px]">
                        Average number of clients per month
                      </label>
                      <div className="grid grid-cols-[1fr_1fr_1fr_1fr] max-md:grid-cols-[1fr_1fr] max-md:gap-y-[1em] auto-rows-[1fr] gap-x-[1em]">
                        <span>
                          <label
                            htmlFor="radio1"
                            className="flex justify-center items-center h-full w-full radio-pill"
                          >
                            <input
                              type="radio"
                              id="radio1"
                              name="monthlyclient"
                              className="hidden"
                            />
                            <label
                              className="rounded p-[1em] max-md:p-[0.5em] flex items-center justify-center border border-[#AAAAAA] text-[#AAAAAA] text-[13px] w-full text-center hover:bg-[#EEEEEE] h-full cursor-pointer"
                              htmlFor="radio1"
                            >
                              No clients
                            </label>
                          </label>
                        </span>
                        <span>
                          <label
                            htmlFor="radio2"
                            className="flex justify-center items-center h-full w-full rounded radio-pill"
                          >
                            <input
                              type="radio"
                              id="radio2"
                              name="monthlyclient"
                              className="hidden"
                            />
                            <label
                              className="rounded p-[1em] max-md:p-[0.5em] flex items-center justify-center border border-[#AAAAAA] text-[#AAAAAA] text-[13px] w-full text-center hover:bg-[#EEEEEE] h-full cursor-pointer"
                              htmlFor="radio2"
                            >
                              Up to 10
                            </label>
                          </label>
                        </span>
                        <span>
                          <label
                            htmlFor="radio3"
                            className="flex justify-center items-center h-full w-full rounded radio-pill"
                          >
                            <input
                              type="radio"
                              id="radio3"
                              name="monthlyclient"
                              className="hidden"
                            />
                            <label
                              className="rounded p-[1em] max-md:p-[0.5em] flex items-center justify-center border border-[#AAAAAA] text-[#AAAAAA] text-[13px] w-full text-center hover:bg-[#EEEEEE] h-full cursor-pointer"
                              htmlFor="radio3"
                            >
                              Up to 25
                            </label>
                          </label>
                        </span>
                        <span>
                          <label
                            htmlFor="radio4"
                            className="flex justify-center items-center h-full w-full rounded radio-pill"
                          >
                            <input
                              type="radio"
                              id="radio4"
                              name="monthlyclient"
                              className="hidden"
                            />
                            <label
                              className="rounded p-[1em] max-md:p-[0.5em] flex items-center justify-center border border-[#AAAAAA] text-[#AAAAAA] text-[13px] w-full text-center hover:bg-[#EEEEEE] h-full cursor-pointer"
                              htmlFor="radio4"
                            >
                              More than 25
                            </label>
                          </label>
                        </span>
                      </div>
                    </div>
                    <button
                      className="w-full border-[1px] rounded-[3px] text-[#fff] text-[14px] bg-[#EA9F77] py-[6px] px-[12px] mt-[24px]"
                      name="button"
                      type="button"
                    >
                      Access Nutrium
                    </button>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SignupBody>
    </>
  );
};

export default Sign_Up;
