import SignupBody from '@/components/common/signupBody'
import Image from 'next/image'
import React, { useState } from 'react'
import checkMark from '../../../../public/icon/checkmark-green.svg'
import logo from "../../../../public/image/light-logo.svg";
import signUplogo from "../../../../public/image/signup_img.png";
import googleIcon from "../../../../public/icon/google.png";
import microsoftIcon from "../../../../public/icon/microsoft.png";
import smallArrOrg from '../../../../public/icon/right-arrow-org.svg'


import { BiHide, BiShow, BiCircle } from 'react-icons/bi'
import Button from "@/components/common/Button";
import Select from "@/components/common/select";
import MultiSelect from "@/components/common/Multiselect";



const Sign_in = () => {
  const [isShow, setIsShow] = useState(false);
  const [isFreeNewsAwail, setIsFreeNewsAwail] = useState(false);
  const [isTermApply, setIsTermApply] = useState(false);
  const handleFreeService = (e) => { 
    setIsFreeNewsAwail(e.target.checked)
  };
  return (
    <SignupBody>
      <div className={`my-[80px] rounded-[5px] max-w-[900px] max-md:max-w-[100%] mx-auto  max-xl:max-w-[75%] max-xl:my-[50px] max-xl:mx-auto`}>
        <div className="flex">
          <form className="w-full">
            <div className="block w-full overflow-hidden rounded-[5px]">
              <div className="flex">
                <section className={`p-[80px] max-md:p-[40px] bg-white relative flex-shrink-0 w-full`}>
                  <div className="mb-[40px]">
                    <h1 className="clr-grn text-[30px] tracking-[0.5px] text-center">
                    Welcome back!
                    </h1>
                  </div>
                  <div className="flex">
                    <div className="py-[15px] pr-[64px] flex-1">
                      <div className="text-xl text-[#1AB394] tracking-[0.5px] min-h-[48px] w-full overflow-hidden leading-6 max-h-12 mx-0 my-2.5">
                      How to calculate the PAL with METs in Nutrium
                      </div>
                      <div className='text-sm text-[#6E7C91] tracking-[0.2px] min-h-[60px] overflow-hidden leading-5 max-h-[100px] mb-2.5'>
                      Now you can calculate the PAL with Nutrium using metabolic equivalents (METs) of your nutrition clients' daily activities. Ideal for sports nutrition!
                      </div>
                      <a className='text-[#ea9f77] cursor-pointer hover:text-[#e78f61] flex items-center text-[17px]'>
                <span>Learn more</span>
                <Image src={smallArrOrg} width={100} className="h-[14px] w-auto pl-[10px]" />
              </a>
                    </div>
                    <div className="py-[15px] px-[64px] pr-0 border-l-[1px] border-l-[#e0faf1] flex-1 max-lg:pl-[0]">
                      <div className="w-full border-[1px] border-[#aaaaaa] rounded-[5px] inline-block text-center whitespace-nowrap py-[5px] px-[8px]">
                        <Image src={googleIcon} className="inline-block align-middle mr-[20px] w-[24px] h-[24px]" alt="google" />
                        <div className="inline-block align-middle text-[14px] text-[#6e7c91]">Sign up with Google</div>
                      </div>
                      <div className="w-full mt-[15px] border-[1px] border-[#aaaaaa] rounded-[5px] inline-block text-center whitespace-nowrap py-[5px] px-[8px]">
                        <Image src={microsoftIcon} className="inline-block align-middle mr-[20px] w-[20px] h-[20px]" width={1000} alt="microsoft" />
                        <div className="inline-block align-middle text-[14px] text-[#6e7c91]">Sign up with Microsoft</div>
                      </div>
                      <div className="mt-[22px] mb-[20px] border-b-[1px] border-b-[#e0faf1] leading-[0.1em] text-center">
                        <span className="bg-white px-[10px] text-[#AAAAAA] text-[95%] text-center">or</span>
                      </div>
                      <div className="mb-[15px]">
                        <input type="email" className="block border-[1px] border-[#aaaaaa] rounded-[3px] py-[6px] w-full px-[12px] input-transition focus:border-[#1ab394] text-[13px] text-[#676a6c] focus:outline-none placeholder:text-[#676a6c44]" placeholder="Email" />
                      </div>
                      <div className="mb-[15px]">
                        <input type="password" className="block border-[1px] border-[#aaaaaa] rounded-[3px] py-[6px] w-full px-[12px] input-transition focus:border-[#1ab394] text-[13px] text-[#676a6c] focus:outline-none placeholder:text-[#676a6c44]" placeholder="Password" />
                      </div>
                     
                      <Button type='button' className="capitalize w-full mt-[24px]">sign up</Button>
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
  )
}

export default Sign_in