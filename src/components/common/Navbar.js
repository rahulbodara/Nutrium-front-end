import Image from 'next/image'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import logo from '../../../public/image/light-logo.svg'
import greenLogo from '../../../public/image/green-logo.svg'


const Navbar = () => {
    const router = useRouter();
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        setIsFixed(scrollY >= 5);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
  return (
    <div className={`${isFixed?'fixed top-0 left-0 right-0 bg-white z-10':''} transition-[background-color] duration-[0.2s] ease-linear`}>
        <div className={`max-w-[1040px] max-xl:max-w-[900px] mx-auto`} >
            <div className='flex items-center'>
                <div className='my-[20px]'>
                    <a>
                        {
                            isFixed ? 
                            <Image src={greenLogo} width={100} className="h-[30px] w-full max-w-full"/>
                            :<Image src={logo} width={100} className="h-[30px] w-full max-w-full"/>

                        }
                    </a>
                </div>
                <div className='flex items-center grow justify-center'>
                    <div className='p-[23px]'>
                        <a href="/" className={`${isFixed?"text-[#1ab394]":"text-[#e0faf1]"} tracking-[1px] capitalize`}>product</a>
                    </div>
                    <div className='p-[23px]'>
                        <a href="/" className={`${isFixed?"text-[#1ab394]":"text-[#e0faf1]"} capitalize`}>price</a>
                    </div>
                    <div className='p-[23px]'>
                        <a href="/" className={`${isFixed?"text-[#1ab394]":"text-[#e0faf1]"} capitalize`}>blog</a>
                    </div>
                    <div className='p-[23px]'>
                        <a href="/" className={`${isFixed?"text-[#1ab394]":"text-[#e0faf1]"}`}>Nutrium for Companies</a>
                    </div>
                </div>
                <div>
                    <a href='/' className='bg-[#ea9f77] border-[#ea9f77] shadow-xl py-[6px] px-[12px] rounded-[4px] line-clamp-[1.42857143] select-none text-white hover:bg-[#e8966a] text-[14px] hover:border-[#e8966a]' onClick={() => router.push("/accounts/sign_up")}>Get started</a>
                </div>
                <div>
                    <a href="/" className={`${isFixed?"!text-[#1ab394]":"text-[#e0faf1]"} p-[23px] pr-0 flex items-center text-white font-[400] tracking-[1px]`}>
                        Sign in
                        <div className={`${isFixed? "bg-right-green-arrow" : "bg-right-arrow"} bg-right-arrow bg-center bg-no-repeat ml-[10px] w-[14px] h-[14px]`}></div>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar