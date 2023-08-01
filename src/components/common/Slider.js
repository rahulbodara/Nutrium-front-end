import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'
import slide1 from '../../../public/image/slideImg1.png'
import smallArrOrg from '../../../public/icon/right-arrow-org.svg'


const SliderComponent = (props) => {
  const { data } = props
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false
        }
      }
    ]
  };

  return (
    <div>
      <Slider {...settings}>
        {
          data && data.length > 0 && data.map((item, index) => {            
            return (
              <div className='!flex' key={index}>
                <div className='relative max-w-[125px] min-w-[125px] lg:max-w-[100px] lg:min-w-[100px]'>
                  <Image src={item.img} width={1000} height={100} className='absolute -left-[125px] lg:-left-[100px] h-full object-contain max-w-[200%]' />
                </div>
                <div className='flex flex-col w-full flex-1 justify-between p-[30px] lg:p-[20px] h-auto'>
                  <div className='text-[18px] clr-grn font-[600] title-elips'>{item.title}</div>
                  <div className='flex items-center text-[16px] text-ellips m-[10px_0] tracking-[0.2px] leading-[1.5]'>
                    {item.description}
                  </div>
                  <a href="#" target="_blank" className='text-[18px] inline-flex items-center text-[#ea9f77] group hover:text-[#e78f61]'>
                    <span className='cursor-pointer'>Learn more</span>
                    <Image src={smallArrOrg} className="pl-[10px] h-[14px] group-hover:translate-x-[5px] transition-cstm" alt="arrow" />
                  </a>
                </div>
              </div>
            )
          })
        }

      </Slider>
    </div>
  )
}

export default SliderComponent