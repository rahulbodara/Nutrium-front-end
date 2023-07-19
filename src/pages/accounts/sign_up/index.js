import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../../public/image/light-logo.svg";
import signUplogo from "../../../../public/image/signup_img.png";
import checkMark from "../../../../public/icon/checkmark-green.svg";
import googleIcon from "../../../../public/icon/google.png";
import { BiHide, BiShow, BiCircle } from 'react-icons/bi'
import Button from "@/components/common/Button";
import SignupBody from "@/components/common/signupBody";


const Sign_in = () => {
  const [isShow, setIsShow] = useState(false);
  const [isFreeNewsAwail, setIsFreeNewsAwail] = useState(false);
  const [isTermApply, setIsTermApply] = useState(false);

  const handleFreeService = (e) => { 
    setIsFreeNewsAwail(e.target.checked)
  };

  const handleTerms = (e) => { 
    setIsTermApply(e.target.checked)
   };

  return (
    <>
      <SignupBody>
        <div className="my-[80px] mx-auto max-w-[900px] rounded bg-white max-xl:max-w-[75%] max-xl:my-[50px] max-xl:mx-auto">
          <div className="flex">
            <form className="w-full">
              <div className="block w-full overflow-hidden">
                <div className="flex">
                  <section className="p-[80px] relative flex-shrink-0 w-full">
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
                          <div className="mb-[10px] text-[#6e7c91] tracking-[0.2px] text-[13px]">
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
                        <div className="w-full border-[1px] border-[#aaaaaa] rounded-[5px] inline-block text-center whitespace-nowrap py-[5px] px-[8px]">
                          <Image src={googleIcon} className="inline-block align-middle mr-[20px] w-[24px] h-[24px]" alt="google" />
                          <div className="inline-block align-middle text-[14px] text-[#6e7c91]">Sign up with Google</div>
                        </div>
                        <div className="mt-[22px] mb-[20px] border-b-[1px] border-b-[#e0faf1] leading-[0.1em] text-center">
                          <span className="bg-white px-[10px] text-[#AAAAAA] text-[95%] text-center">or</span>
                        </div>
                        <div className="mb-[15px]">
                          <label htmlFor="account_professional" className="inline-block mb-[5px] text-[13px] text-[#676a6c] max-w-full">Full name</label>
                          <input type="text" className="block border-[1px] border-[#aaaaaa] rounded-[3px] py-[6px] w-full px-[12px] input-transition focus:border-[#1ab394] text-[13px] text-[#676a6c] focus:outline-none placeholder:text-[#676a6c44]" placeholder="E.g. Mary Smith" />
                        </div>
                        <div className="mb-[15px]">
                          <label htmlFor="account_professional" className="inline-block mb-[5px] text-[13px] text-[#676a6c] max-w-full">Email</label>
                          <input type="email" className="block border-[1px] border-[#aaaaaa] rounded-[3px] py-[6px] w-full px-[12px] input-transition focus:border-[#1ab394] text-[13px] text-[#676a6c] focus:outline-none placeholder:text-[#676a6c44]" placeholder="E.g. me@example.com" />
                        </div>
                        <div className="mb-[15px] relative">
                          <label htmlFor="account_professional" className="inline-block mb-[5px] text-[13px] text-[#676a6c] max-w-full">Password</label>
                          <input type={`${isShow === true ? 'text': 'password'}`} className="block border-[1px] border-[#aaaaaa] rounded-[3px] py-[6px] w-full px-[12px] input-transition focus:border-[#1ab394] text-[13px] text-[#676a6c] focus:outline-none placeholder:text-[#676a6c44]" placeholder="9+ characters, letters, numbers, symbols" />
                          <span className="absolute top-[1.8em] right-[4px] p-[8px]" onClick={() => setIsShow(!isShow)}>
                            {
                              isShow === true ?
                              <BiShow className=" text-[18px] text-[#888888]" /> :
                              <BiHide className=" text-[18px] text-[#888888]" /> 
                            }
                          </span>
                        </div>
                        <div className="mt-[24px]">
                            <div className="text-[85%]">
                              <div className="mb-[10px] pl-[20px] relative block">
                                <div>
                                  <input type="checkbox" className="hidden z-10" id="freeNews" onChange={handleFreeService}/>
                                  <label className="inline-block align-middle pl-[5px] min-h-[20px] text-[#676a6c] text-[85%]" htmlFor="freeNews">
                                    Please send me free news and marketing tips for my nutrition business.
                                    {
                                      isFreeNewsAwail === true ? 
                                      <Image 
                                        src={checkMark}
                                        alt="checkmark"
                                        className="w-[16px] h-[16px] inline-block absolute left-0 top-0 cursor-pointer"
                                      />: 
                                      <BiCircle className="text-[18px] inline-block absolute left-0 top-0 cursor-pointer text-[#c6c4c4]"/>
                                    }
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="text-[85%]">
                              <div className="mb-[10px] pl-[20px] relative block">
                                <div>
                                  <input type="checkbox" className="hidden z-10" id="terms" onChange={handleTerms}/>
                                  <label className="inline-block align-middle pl-[5px] min-h-[20px] text-[#676a6c] text-[85%]" htmlFor="terms">
                                  I accept the <span className="clr-grn cursor-pointer">Terms and Conditions of Use</span> and the <span className="clr-grn cursor-pointer">Privacy Policy</span> of Nutrium.
                                    {
                                      isTermApply === true ? 
                                      <Image 
                                        src={checkMark}
                                        alt="checkmark"
                                        className="w-[16px] h-[16px] inline-block absolute left-0 top-0 cursor-pointer"
                                      />: 
                                      <BiCircle className="text-[18px] inline-block absolute left-0 top-0 cursor-pointer text-[#c6c4c4]"/>
                                    }
                                  </label>
                                </div>
                              </div>
                            </div>
                        </div>
                        <Button className="capitalize w-full mt-[24px]">sign up</Button>
                        <div class="text-[85%] mt-[15px] text-[#676a6c] text-center">Have an account already? Click<a class="clr-grn" href="/"> here</a> to sign in.</div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </form>
          </div>
        </div>
      </SignupBody>
    </>
  );
};

export default Sign_in;
