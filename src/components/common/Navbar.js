import Image from 'next/image'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import logo from '../../../public/image/light-logo.svg'
import greenLogo from '../../../public/image/green-logo.svg'
import {FiMenu} from 'react-icons/fi'
import Link from 'next/link';


const Navbar = () => {
    const router = useRouter();
    const [isToggle, setIsToggle] = useState(false);
    const [isFixed, setIsFixed] = useState(false);

    const handleToggle = () => { 
        setIsToggle(!isToggle)
     };

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
    <div className={`${isFixed?' bg-white border-b border-[#eeeeee]':'bg-transparent'} z-[9999]  fixed top-0 left-0 right-0 transition-[background-color] duration-[0.2s] ease-linear`}>
        <div className={`mx-auto w-[1040px] xl:w-[900px] lg:w-[700px] md:w-full md:px-[20px]`}>
            <div className='flex items-center'>
                <div className='my-[20px] md:my-[15px]'>
                    <a>
                        {
                            isFixed ? 
                            <Image src={greenLogo} width={100} onClick={() => router.push('/')} className="h-[30px] md:h-[25px] w-full cursor-pointer max-w-full"/>
                            :<Image src={logo} width={100} onClick={() => router.push('/')} className="h-[30px] md:h-[25px] w-full cursor-pointer max-w-full"/>

                        }
                    </a>
                </div>
                <div className='flex items-center grow justify-center md:hidden'>
                    <div className='p-[23px] xl:p-[23px_15px] lg:p-[23px_10px] tracking-[1px]'>
                        <a href="/product" className={`${isFixed?"text-[#1ab394] hover:text-[#12896d]":"text-[#e0faf1] hover:text-white"} ${router.pathname === '/product' ? 'font-[700]' : ''} text-[1rem] lg:text-[14px] tracking-[1px] capitalize`}>product</a>
                    </div>
                    <div className='p-[23px] xl:p-[23px_15px] lg:p-[23px_10px] tracking-[1px]'>
                        <a href="/" className={`${isFixed?"text-[#1ab394] hover:text-[#12896d]":"text-[#e0faf1] hover:text-white"} text-[1rem] lg:text-[14px] capitalize`}>pricing</a>
                    </div>
                    <div className='p-[23px] xl:p-[23px_15px] lg:p-[23px_10px] tracking-[1px]'>
                        <a href="/" className={`${isFixed?"text-[#1ab394] hover:text-[#12896d]":"text-[#e0faf1] hover:text-white"} text-[1rem] lg:text-[14px] capitalize`}>blog</a>
                    </div>
                    <div className='p-[23px] xl:p-[23px_15px] lg:p-[23px_10px] tracking-[1px]'>
                        <a href="/" className={`${isFixed?"text-[#1ab394] hover:text-[#12896d]":"text-[#e0faf1] hover:text-white"} whitespace-pre text-[1rem] lg:text-[14px]`}>Nutrium for Companies</a>
                    </div>
                </div>
                <div className='md:hidden shadow-[0px_4px_10px_-4px_#717171]'>
                    <Link href='/accounts/signUp' className='bg-[#ea9f77] border-[#ea9f77] py-[6px] px-[12px] rounded-[4px] whitespace-pre line-clamp-[1.42857143] select-none text-white hover:bg-[#e8966a] text-[14px] hover:border-[#e8966a]'>Get started</Link>
                </div>
                <div className='md:hidden'>
                    <Link href="/accounts/signIn" className={`${isFixed?"!text-[#1ab394]":"text-[#e0faf1]"} hover:text-white whitespace-pre text-[1rem] xl:text-[15px] lg:text-[14px] p-[23px] pr-0 flex items-center font-[400] tracking-[1px]`}>
                        Sign in
                        <div className={`${isFixed? "bg-right-green-arrow" : "bg-right-arrow"} bg-right-arrow bg-center bg-no-repeat ml-[10px] w-[14px] h-[14px]`}></div>
                    </Link>
                </div>
                <div className={`hidden md:block grow text-right ${isFixed ? 'clr-grn':'text-white'} py-[15px]`}>
                    <FiMenu className='inline-block text-[23px]' onClick={handleToggle}/>
                </div>
            </div>
            <div className={`hidden ${isToggle ? 'visible' :'invisible'} md:block opacity-100  ${isFixed ? 'm-0 rounded-none mt-[-1px]' : 'mx-[20px] rounded-[5px]' } shadow-[0px_4px_10px_-4px_#717171] absolute bg-white transition-opacity  delay-[400ms]  my-0  inset-x-0`}>
                <div className={`${isFixed ? 'p-[10px_30px]' : 'p-[10px]'}`}>
                    <Link href="#" className='clr-grn text-[14px]'>Product</Link>
                </div>
                <div className={`${isFixed ? 'p-[10px_30px]' : 'p-[10px]'}`}>
                    <Link href="#" className='clr-grn text-[14px]'>Pricing</Link>
                </div>
                <div className={`${isFixed ? 'p-[10px_30px]' : 'p-[10px]'}`}>
                    <Link href="#" className='clr-grn text-[14px]'>Blog</Link>
                </div>
                <div className={`${isFixed ? 'p-[10px_30px]' : 'p-[10px]'}`}>
                    <Link href="#" className='clr-grn text-[14px]'>Nutrium for Companies</Link>
                </div>
                <div className={`${isFixed ? 'p-[10px_30px]' : 'p-[10px]'}`}>
                    <Link href="/accounts/signIn" className='clr-grn text-[14px]'>Sign in</Link>
                </div>
                <div className={`${isFixed ? 'p-[10px_30px]' : 'p-[10px]'}`}>
                    <Link href="/accounts/signUp" className='clr-grn text-[14px] !text-[#ea9f77]'>Get started</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar