import Image from 'next/image'
import React from 'react'


const Testimonial = (props) => {
    const {data} = props;

  return (
      <>
          <div className=' w-full relative bg-white overflow-hidden h-[400px] xl:h-[360px] lg:h-[284px] rounded-[5px] md:min-h-[420px] md:h-auto'>
              <div className='mob-testimonial-bg hidden md:block md:bg-no-repeat md:w-full md:h-[200px] md:!bg-cover'  style={{background:`url(${data.img})`}}></div>
              <div className='info absolute text-left md:w-full md:static md:transform-none md:p-[10px_20px] md:text-left w-2/5 -translate-y-2/4 z-[3] left-[7%] top-2/4'>
                  <div className='text-[#1AB394] text-[40px] xl:text-[36px] lg:text-[30px] md:text-[30px]'>{data.title}</div>
                  <div className='text-[#EA9F77] text-[18px] xl:text-[16px] lg:text-[14px] md:text-[16px]'>{data.subtitle}</div>
                  <div className='text-base italic text-[#6E7C91] text-[16px] lg:text-[14px] lg:leading-[1.5] leading-[1.7] mt-[5%] md:mt-[3%]
                  '>{data.description}</div>
              </div>
              <div className=' absolute w-[600px] xl:w-[540px] lg:w-[426px] z-[1] right-0 inset-y-0 md:hidden'>
                  <div className='triangle absolute w-0 h-0 border-r-[300px] border-r-[rgba(255,255,255,0)] border-b-[400px] border-b-white border-solid'></div>
                  <Image src={data.img} width={1000} height={100} className='w-full h-full' />
              </div>
          </div>
      </>
  )
}

export default Testimonial