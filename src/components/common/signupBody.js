import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react'
import logo from "../../../public/image/light-logo.svg";
const SignupBody = ({children}) => {
  const router = useRouter();
  return (
    <>
        <div className="bg-sign-up-pattern bg-no-repeat bg-cover h-screen">
        <div className="w-[900px] lg:w-[80%] md:w-full md:p-[20px] mx-auto pt-[20px] flex justify-between items-center">
          <a>
            <Image
              src={logo}
              width={100}
              className="h-[30px] md:h-[25px] w-full max-w-full cursor-pointer"
              onClick={() => router.push('/')}
            />
          </a>
          <a
            href="/"
            className="pr-0 flex items-center text-white text-[14px] font-[400] tracking-[1px]"
          >
            Sign in
            <div className="bg-right-arrow bg-center bg-no-repeat ml-[10px] w-[14px] h-[14px]"></div>
          </a>
        </div>
        {children}
        </div>
    </>
  )
}

export default SignupBody