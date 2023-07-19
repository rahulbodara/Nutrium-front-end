import SignupBody from '@/components/common/signupBody'
import React from 'react'

const MoreInfo = () => {
  return (
    <>
    <SignupBody>
        <div className='max-w-[760px] my-[80px] mx-auto rounded-5 bg-white'>
            <div className="flex">
                <form>
                    <section className='p-[80px] w-full'>
                        <div className='mb-[40px]'>
                            <h1 className=' text-3xl text-[#1AB394] tracking-[0.5px] text-center'>Hi, nna! We need some information so we can improve your experience</h1>
                        </div>
                        <div>
                            <label className='inline-block max-w-full text-[13px] mb-[5px]'>Gender</label>
                            <div className='mb-[15px]'>
                                <select name="gender" id="gender" className='w-full border-[1px] rounded-[3px] border-[#aaaaaa] focus:border-[#1AB394] focus-visible:!outline-none focus:border-[1px] focus:bg-transparent p-[8px]' >
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            {/* <div className='mb-[15px]'>
                                <select name="gender" id="gender" className='w-full border-[1px] rounded-[3px] border-[#aaaaaa] focus:border-[#1AB394] focus-visible:!outline-none focus:border-[1px] focus:bg-transparent p-[8px]'>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div> */}
                        </div>
                        <div>
                            <label className='inline-block max-w-full text-[13px] mb-[5px]'>Country</label>
                            <div className='mb-[15px]'>
                                <select name="gender" id="gender" className='w-full border-[1px] rounded-[3px] border-[#aaaaaa] focus:border-[#1AB394] focus-visible:!outline-none focus:border-[1px] focus:bg-transparent p-[8px]' >
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="" className='inline-block max-w-full text-[13px] mb-[5px]'>Date of Birth</label>
                            <div className='mb-[15px]'>
                                <input placeholder='MM/DD/YYYY' inputMode='text'  className='w-full border-[1px] rounded-[3px] border-[#aaaaaa] focus:border-[#1AB394] focus-visible:!outline-none focus:border-[1px] focus:bg-transparent p-[8px] ' />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="" className='inline-block max-w-full text-[13px] mb-[5px]'>Mobile Phone</label>
                            <div className='mb-[15px] flex'>
                            <div className='w-24 border-[1px]  rounded-l-[3px] rounded-r-[0px] border-[#aaaaaa] focus:border-[#1AB394] focus-visible:!outline-none focus:border-[1px] focus:bg-transparent p-[8px] '></div>
                                <input placeholder='mobile number' inputMode='text'  className='w-full border-[1px] rounded-l-[0px] rounded-r-[3px] border-[#aaaaaa] focus:border-[#1AB394] focus-visible:!outline-none focus:border-[1px] focus:bg-transparent p-[8px] ' />
                            </div>
                        </div>
                        <div>
                            <label className='inline-block max-w-full text-[13px] mb-[5px]'>Profession</label>
                            <div className='mb-[15px]'>
                                <select name="gender" id="gender" className='w-full border-[1px] rounded-[3px] border-[#aaaaaa] focus:border-[#1AB394] focus-visible:!outline-none focus:border-[1px] focus:bg-transparent p-[8px]' >
                                    <option value="nutritionist">Nutritionist</option>
                                </select>
                            </div>
                        </div>
                        <button className='w-full border-[1px] rounded-[3px] text-[#fff] text-[14px] bg-[#EA9F77] py-[6px] px-[12px] mt-[24px]' name='button' type='submit'>Continue</button>
                    </section>
                </form>
            </div>
        </div>
    </SignupBody>
    </>
  )
}

export default MoreInfo