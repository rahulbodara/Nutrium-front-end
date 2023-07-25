import Image from 'next/image'
import React from 'react'
import testimonialImg1 from '../../../public/image/testimonial-img1.jpg';




const Testimonial = (props) => {
    const {data} = props;
    const divStyle = {
        background:`url(${data.img})`
    }
    console.log("🚀 ~ file: testimonial.js:10 ~ Testimonial ~ data:", data)
  return (
      <>
          <div className=' relative bg-white overflow-hidden h-[400px] rounded-[5px]'>
              <div className='mob-testimonial-bg' style={divStyle}></div>
              <div className='info absolute text-left w-2/5 -translate-y-2/4 z-[3] left-[7%] top-2/4'>
                  <div className='text-[#1AB394] text-[40px]'>{data.title}</div>
                  <div className='text-[#EA9F77] text-[18px]'>{data.subtitle}</div>
                  <div className='text-base italic text-[#6E7C91] leading-[1.7] mt-[5%]'>{data.description}</div>
              </div>
              <div className=' absolute w-[600px] z-[1] right-0 inset-y-0'>
                  <div className='triangle absolute w-0 h-0 border-r-[300px] border-r-[rgba(255,255,255,0)] border-b-[400px] border-b-white border-solid'></div>
                  <Image src={data.img} className='w-full h-full' />
              </div>
          </div>
      </>
  )
}

export default Testimonial