import Image from 'next/image'
import React, { useEffect } from 'react'
import { BiChevronDown, BiLogoFacebookCircle, BiLogoTwitter } from 'react-icons/bi'
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import messageIcon from '../../../public/icon/message-icon.svg'
import logo from '../../../public/image/short-light-logo.svg'
import competeImg from '../../../public/image/compete.png'
import fcqcImg from '../../../public/image/fcqc.png'
import norteImg from '../../../public/image/norte.png'
import portugalImg from '../../../public/image/portugal.png'
import uniaoImg from '../../../public/image/uniao.png'

const Footer = () => {


    return (
        <footer className='bg-footer-pattern md:bg-center md:bg-[length:400%_200%] relative bg-top bg-no-repeat h-[660px] bg-cover md:h-full md:pt-[200px] md:mt-[100px]'>
            <div className='w-[1040px] md:px-[20px] md:w-full absolute md:static left-0 right-0 bottom-0 xl:w-[900px] lg:w-[700px] mx-auto'>
                <div className='flex text-white justify-between mb-[50px] md:flex-col md:mb-[30px]'>
                    <div className='w-[20%] md:hidden about-page'>
                        <div className='language text-white inline-flex items-center cursor-pointer select-none p-2 rounded-[5px]'>
                            <Image src={messageIcon} className=" brightness-0 invert-[1] w-[20.87px] h-[20px]" />
                            <div className='text-[16px] mx-[15px] whitespace-nowrap'>English</div>
                            <BiChevronDown className='text-white text-[22px] relative right-2 rotate-[180deg]' />
                        </div>
                    </div>
                    <div className='flex md:hidden'>
                        <div className='text-[17px]'>
                            <div className='-mb-[6px] tracking-[1px]'>
                                <a href="##" className='pt-[6px] block text-[#E0FAF1] hover:scale-[1.03] hover:text-white transition-transform duration-[0.3s] ease-[ease-out] no-underline h-7 px-0 py-3'>Product</a>
                            </div>
                            <div className='mt-[6px] tracking-[1px]'>
                                <a href="##" className='block text-[#E0FAF1] hover:scale-[1.03] hover:text-white transition-transform duration-[0.3s] ease-[ease-out] no-underline h-7 px-0 py-3'>Pricing</a>
                            </div>
                            <div className='mt-[6px] tracking-[1px]'>
                                <a href="##" className='block text-[#E0FAF1] hover:scale-[1.03] hover:text-white transition-transform duration-[0.3s] ease-[ease-out] no-underline h-7 px-0 py-3'>Blog</a>
                            </div>
                            <div className='mt-[6px] tracking-[1px]'>
                                <a href="##" className='block text-[#E0FAF1] hover:scale-[1.03] hover:text-white transition-transform duration-[0.3s] ease-[ease-out] no-underline h-7 px-0 py-3'>Nutrium for Companies</a>
                            </div>
                        </div>
                    </div>
                    <div className='flex md:hidden'>
                        <div className='text-[17px]'>
                            <div className='-mb-[6px] tracking-[1px]'>
                                <a href="##" className='pt-[6px] block text-[#E0FAF1] hover:scale-[1.03] hover:text-white transition-transform duration-[0.3s] ease-[ease-out] no-underline h-[28px] px-0 py-3'>Terms and Conditions</a>
                            </div>
                            <div className='mt-[6px] tracking-[1px]'>
                                <a href="##" className='py-[12px] block text-[#E0FAF1] hover:scale-[1.03] hover:text-white transition-transform duration-[0.3s] ease-[ease-out] no-underline h-[28px] px-0 '>Privacy Policy</a>
                            </div>
                            <div className='mt-[6px] tracking-[1px]'>
                                <a href="##" className='py-[12px] block text-[#E0FAF1] hover:scale-[1.03] hover:text-white transition-transform duration-[0.3s] ease-[ease-out] no-underline h-[28px] px-0'>HIPAA Policy</a>
                            </div>
                            <div className='mt-[6px] tracking-[1px]'>
                                <a href="##" className='py-[12px] block text-[#E0FAF1] hover:scale-[1.03] hover:text-white transition-transform duration-[0.3s] ease-[ease-out] no-underline h-[28px] px-0'>Help Center</a>
                            </div>
                            <div className='mt-[6px] tracking-[1px]'>
                                <a href="##" className='block text-[#E0FAF1] hover:scale-[1.03] hover:text-white transition-transform duration-[0.3s] ease-[ease-out] no-underline h-[28px] px-0 py-3'>Careers</a>
                            </div>
                        </div>
                    </div>
                    <div className='w-[20%] md:hidden'>
                        <div className='flex min-w-[20%]'>
                            <div className='mt-[4px] w-[20%] flex justify-center'>
                                <div className=' flex justify-center'>
                                    <a href="#" target="_blank"><span className='inline-block text-base bg-[#E0FAF1] text-[#1AB394] float-right leading-4 max-h-[calc(1rem_+_2_*_4px)] min-w-[calc(1rem_+_2_*_4px)] transition-transform duration-[0.3s] ease-[ease-out] p-1 rounded-[50%] hover:-translate-y-[3px]'><BiLogoFacebookCircle /></span></a>
                                </div>
                            </div>
                            <div className='mt-[4px] w-[20%] flex justify-center'>
                                <div className=' flex justify-center'>
                                    <a href="#" target="_blank"><span className='inline-block text-base bg-[#E0FAF1] text-[#1AB394] float-right leading-4 max-h-[calc(1rem_+_2_*_4px)] min-w-[calc(1rem_+_2_*_4px)] transition-transform duration-[0.3s] ease-[ease-out] p-1 rounded-[50%] hover:-translate-y-[3px]'><FaInstagram /></span></a>
                                </div>
                            </div>
                            <div className='mt-[4px] w-[20%] flex justify-center'>
                                <div className=' flex justify-center'>
                                    <a href="#" target="_blank"><span className='inline-block text-base bg-[#E0FAF1] text-[#1AB394] float-right leading-4 max-h-[calc(1rem_+_2_*_4px)] min-w-[calc(1rem_+_2_*_4px)] transition-transform duration-[0.3s] ease-[ease-out] p-1 rounded-[50%] hover:-translate-y-[3px]'><BiLogoTwitter /></span></a>
                                </div>
                            </div>
                            <div className='mt-[4px] w-[20%] flex justify-center'>
                                <div className=' flex justify-center'>
                                    <a href="#" target="_blank"><span className='inline-block text-base bg-[#E0FAF1] text-[#1AB394] float-right leading-4 max-h-[calc(1rem_+_2_*_4px)] min-w-[calc(1rem_+_2_*_4px)] transition-transform duration-[0.3s] ease-[ease-out] p-1 rounded-[50%] hover:-translate-y-[3px]'><FaLinkedin /></span></a>
                                </div>
                            </div>
                            <div className='mt-[4px] w-[20%] flex justify-center'>
                                <div className=' flex justify-center'>
                                    <a href="#" target="_blank"><span className='inline-block text-base bg-[#E0FAF1] text-[#1AB394] float-right leading-4 max-h-[calc(1rem_+_2_*_4px)] min-w-[calc(1rem_+_2_*_4px)] transition-transform duration-[0.3s] ease-[ease-out] p-1 rounded-[50%] hover:-translate-y-[3px]'><FaYoutube /></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='hidden md:flex md:justify-between md:w-full md:flex-wrap'>
                        <div className='flex md:mb-[40px]'>
                            <div className='text-[17px] md:text-[16px]'>
                                <div className='-mb-[6px] tracking-[1px]'>
                                    <a href="##" className='pt-[6px] block text-[#E0FAF1] hover:scale-[1.03] hover:text-white transition-transform duration-[0.3s] ease-[ease-out] no-underline h-7 px-0 py-3'>Product</a>
                                </div>
                                <div className='mt-[6px] tracking-[1px]'>
                                    <a href="##" className='block text-[#E0FAF1] hover:scale-[1.03] hover:text-white transition-transform duration-[0.3s] ease-[ease-out] no-underline h-7 px-0 py-3'>Pricing</a>
                                </div>
                                <div className='mt-[6px] tracking-[1px]'>
                                    <a href="##" className='block text-[#E0FAF1] hover:scale-[1.03] hover:text-white transition-transform duration-[0.3s] ease-[ease-out] no-underline h-7 px-0 py-3'>Blog</a>
                                </div>
                                <div className='mt-[6px] tracking-[1px]'>
                                    <a href="##" className='block text-[#E0FAF1] hover:scale-[1.03] hover:text-white transition-transform duration-[0.3s] ease-[ease-out] no-underline h-7 px-0 py-3'>Nutrium for Companies</a>
                                </div>
                            </div>
                        </div>
                        <div className='flex md:mb-[40px]'>
                            <div className='text-[17px] md:text-[16px]'>
                                <div className='-mb-[6px] tracking-[1px]'>
                                    <a href="##" className='pt-[6px] block text-[#E0FAF1] hover:scale-[1.03] hover:text-white transition-transform duration-[0.3s] ease-[ease-out] no-underline h-7 px-0 py-3'>Terms and Conditions</a>
                                </div>
                                <div className='mt-[6px] tracking-[1px]'>
                                    <a href="##" className='block text-[#E0FAF1] hover:scale-[1.03] hover:text-white transition-transform duration-[0.3s] ease-[ease-out] no-underline h-7 px-0 py-3'>Privacy Policy</a>
                                </div>
                                <div className='mt-[6px] tracking-[1px]'>
                                    <a href="##" className='block text-[#E0FAF1] hover:scale-[1.03] hover:text-white transition-transform duration-[0.3s] ease-[ease-out] no-underline h-7 px-0 py-3'>HIPAA Policy</a>
                                </div>
                                <div className='mt-[6px] tracking-[1px]'>
                                    <a href="##" className='block text-[#E0FAF1] hover:scale-[1.03] hover:text-white transition-transform duration-[0.3s] ease-[ease-out] no-underline h-7 px-0 py-3'>Help Center</a>
                                </div>
                                <div className='mt-[6px] tracking-[1px]'>
                                    <a href="##" className='block text-[#E0FAF1] hover:scale-[1.03] hover:text-white transition-transform duration-[0.3s] ease-[ease-out] no-underline h-7 px-0 py-3'>Careers</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='hidden md:flex flex-col'>
                        <div className='about-page text-center'>
                            <div className='language text-white inline-flex items-center cursor-pointer select-none p-2 rounded-[5px]'>
                                <Image src={messageIcon} className=" brightness-0 invert-[1] w-[20.87px] h-[20px]" />
                                <div className='text-[16px] mx-[15px] whitespace-nowrap'>English</div>
                            </div>
                        </div>
                        <div className='flex mt-[30px]'>
                            <div className='mt-[4px] w-[20%] justify-center flex'>
                                <div className='w-[20%] flex justify-center'>
                                    <a href="#" target="_blank"><span className='inline-block text-base md:max-h-[calc(1.5rem_+_2_*_4px)] md:text-[1.5rem] md:leading-[1.5rem] bg-[#E0FAF1] text-[#1AB394] float-right leading-4 max-h-[calc(1rem_+_2_*_4px)] min-w-[calc(1rem_+_2_*_4px)] transition-transform duration-[0.3s] ease-[ease-out] p-1 rounded-[50%] hover:-translate-y-[3px]'><BiLogoFacebookCircle className='text-[1.5rem]' /></span></a>
                                </div>
                            </div>
                            <div className='mt-[4px] w-[20%] justify-center flex'>
                                <div className='w-[20%] flex justify-center'>
                                    <a href="#" target="_blank"><span className='inline-block text-base md:max-h-[calc(1.5rem_+_2_*_4px)] md:text-[1.5rem] bg-[#E0FAF1] text-[#1AB394] float-right leading-4 max-h-[calc(1rem_+_2_*_4px)] min-w-[calc(1rem_+_2_*_4px)] transition-transform duration-[0.3s] ease-[ease-out] p-1 rounded-[50%] hover:-translate-y-[3px]'><FaInstagram className='text-[1.5rem]' /></span></a>
                                </div>
                            </div>
                            <div className='mt-[4px] w-[20%] justify-center flex'>
                                <div className='w-[20%] flex justify-center'>
                                    <a href="#" target="_blank"><span className='inline-block text-base md:max-h-[calc(1.5rem_+_2_*_4px)] md:text-[1.5rem] bg-[#E0FAF1] text-[#1AB394] float-right leading-4 max-h-[calc(1rem_+_2_*_4px)] min-w-[calc(1rem_+_2_*_4px)] transition-transform duration-[0.3s] ease-[ease-out] p-1 rounded-[50%] hover:-translate-y-[3px]'><BiLogoTwitter className='text-[1.5rem]' /></span></a>
                                </div>
                            </div>
                            <div className='mt-[4px] w-[20%] justify-center flex'>
                                <div className='w-[20%] flex justify-center'>
                                    <a href="#" target="_blank"><span className='inline-block text-base md:max-h-[calc(1.5rem_+_2_*_4px)] md:text-[1.5rem] bg-[#E0FAF1] text-[#1AB394] float-right leading-4 max-h-[calc(1rem_+_2_*_4px)] min-w-[calc(1rem_+_2_*_4px)] transition-transform duration-[0.3s] ease-[ease-out] p-1 rounded-[50%] hover:-translate-y-[3px]'><FaLinkedin className='text-[1.5rem]' /></span></a>
                                </div>
                            </div>
                            <div className='mt-[4px] w-[20%] justify-center flex'>
                                <div className='w-[20%] flex justify-center'>
                                    <a href="#" target="_blank"><span className='inline-block text-base md:max-h-[calc(1.5rem_+_2_*_4px)] md:text-[1.5rem] bg-[#E0FAF1] text-[#1AB394] float-right leading-4 max-h-[calc(1rem_+_2_*_4px)] min-w-[calc(1rem_+_2_*_4px)] transition-transform duration-[0.3s] ease-[ease-out] p-1 rounded-[50%] hover:-translate-y-[3px]'><FaYoutube className='text-[1.5rem]' /></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='divider_bg h-[1px]'>
                </div>
                <div className=' flex md:flex-col justify-between mx-0 py-[50px]'>
                    <div className='lg:mr-[15px]'>
                        <a href="#">
                            <Image src={logo} width={150} className="h-[35px] md:h-[25px] max-w-full" />
                        </a>
                        <div className=" text-white opacity-[0.8] text-[1rem] tracking-[0.5px] md:text-center md:mt-[5px] mt-[10px]">2023 © All rights reserved</div>
                    </div>
                    <div>
                        <div className=' text-white flex justify-between text-[0.9rem] tracking-[0.5px] mb-2.5'>
                            <span className='opacity-[0.8]'>Co-Financed Project by</span> 
                            <a href="#" target="_blank" className='opacity-[0.8] tracking-[0.5px]'>See approved projects</a>
                        </div>
                        <div className='flex justify-start items-center lg:flex-wrap'>
                            <div className='lg:w-[33%] lg:mb-[15px]'>
                                <a href="#" target='_blank'>
                                    <Image src={competeImg} className="mr-[25px] object-contain w-full max-h-[25px] lg:w-auto lg:max-h-[35px] md:max-h-[25px]" />
                                </a>
                            </div>
                            <div className='lg:w-[33%] lg:mb-[15px]'>
                                <a href="#" target='_blank'>
                                    <Image src={fcqcImg} width="100" className="mx-[25px] object-contain w-full max-h-[25px] lg:w-auto lg:max-h-[35px] md:max-h-[25px]" />
                                </a>
                            </div>
                            <div className='lg:w-[33%] lg:mb-[15px]'>
                                <a href="#" target='_blank'>
                                    <Image src={norteImg} width="100" className="mx-[25px] object-contain w-full max-h-[25px] lg:w-auto lg:max-h-[35px] md:max-h-[25px]" />
                                </a>
                            </div>
                            <div className='lg:w-[33%] lg:mb-[15px]'>
                                <a href="#" target='_blank'>
                                    <Image src={portugalImg} width="100" className="mx-[25px] object-contain w-full max-h-[25px] lg:w-auto lg:max-h-[35px] md:max-h-[25px]" />
                                </a>
                            </div>
                            <div className='lg:w-[33%] lg:mb-[15px]'>
                                <a href="#" target='_blank'>
                                    <Image src={uniaoImg} className="mx-[25px] w-full max-h-[25px] lg:w-auto lg:max-h-[35px] object-contain" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer