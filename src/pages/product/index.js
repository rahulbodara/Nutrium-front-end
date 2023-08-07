import Button from '@/components/common/Button'
import Input from '@/components/common/input'
import Navbar from '@/components/common/Navbar'
import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'
import smallArrOrg from '../../../public/icon/right-arrow-org.svg'
import infoImg1 from '../../../public/image/adaptation-img1.png'
import infoImg2 from '../../../public/image/adaptation-img2.png'
import infoImg3 from '../../../public/image/adaptation-img3.png'
import checkMark from '../../../public/icon/checkmark-green.svg'

import { FaPlay } from 'react-icons/fa'
import Footer from '@/components/common/Footer'
import SliderComponent from '@/components/common/Slider'
import { Product_info_slider1, Product_info_slider2 } from '@/components/slider-data/data'
import Accordion from '@/components/common/Accordion'
import { Product_accordion_data } from '@/components/accordion-data/data'
import ProductDashboard from '@/components/product-dashboard/ProductDashboard'


const Product_page = () => {

  const items = [
    {
      title: 'Accordion Item 1',
      content: 'Content for Accordion Item 1',
    },
    {
      title: 'Accordion Item 2',
      content: 'Content for Accordion Item 2',
    },
    {
      title: 'Accordion Item 3',
      content: 'Content for Accordion Item 3',
    },
  ];

  var adaptations_slide = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          fade: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false
        }
      },
    ]
  };
  return (
    <>
      <header>
        <Navbar />
      </header>
      <section>
        <div className='bg-header-pattern bg-no-repeat w-full h-[700px] xl:h-[600px] lg:h-[580px] md:h-[500px] sm:h-[550px] bg-cover bg-bottom'>
          <div className='pt-[150px] md:pt-[100px] w-[1040px] xl:w-[900px] lg:w-[700px] md:w-full mx-auto flex items-center flex-col md:px-[20px]'>
            <h1 className='text-center text-[32px] tracking-[1px] md:tracking-[0.5px] md:text-[30px] md:leading-[35px] md:text-left mb-[10px] text-white'>Nutrition software for professionals & mobile app for clients</h1>
            <div className='text-[17px] w-[60%] md:w-full md:mt-[10px] md:text-left md:mb-[20px] mx-auto tracking-[0.5px] text-center mt-[20px] mb-[40px] text-white opacity-[0.8] font-[300]'>For private practices, nutrition clinics, hospitals, online consulting, wellness centres and gyms. Support your clients, anywhere at any time.</div>
            <div className='w-[60%] md:w-full md:h-[35px] mx-auto h-[50px] flex items-center relative'>
              <form className='h-full flex md:justify-normal  w-full md:flex-col justify-center'>
                <Input className="mr-[30px] placeholder:text-[16px] text-[1rem] !py-[8px] md:min-h-full md:mr-0 w-1/2 md:w-full " placeholder="Your email" id="email" />
                <Button className="bg-[#EA9F77] md:text-[1rem] !py-[5px] shadow-[0px_4px_10px_-4px_#717171] min-w-[30%] border-[#EA9F77] text-[1rem] md:mt-[10px]">Get started</Button>
              </form>
            </div>
          </div>
        </div>

      </section>
      <section className='mt-[-240px]'>
        <div className="mx-auto w-[1040px] xl:w-[900px] lg:w-[700px] md:w-full md:px-[20px]">
          <ProductDashboard />
        </div>
      </section>
      <section className='info-card mt-[150px] md:mt-[100px] more-feature relative z-10'>
        <div className="mx-auto w-[1040px] xl:w-[900px] lg:w-[700px] md:w-full md:px-[20px]">
          <h2 className='clr-grn text-center text-[30px] md:text-[26px] md:text-left mb-[2%] tracking-[0.5px]'>See what else Nutrium can do for you...</h2>
          <div className="text-[17px] md:text-[16px] text-center text-[#6E7C91] tracking-[0.2px] md:text-left leading-[30px] md:leading-[26px] whitespace-pre-line w-[60%] md:w-full mx-auto">
            You can also create recipes; invite your secretary to join; add different workplaces and your logo; create templates and see all your clients' activities.
          </div>
          <div className='mt-[5%]'>
            {/* <Slider {...settings}>
              <div className='!flex'>
                <div className='relative max-w-[125px] min-w-[125px]'>
                  <Image src={slide1} className='absolute -left-[125px] h-full max-w-[200%]' />
                </div>
                <div className='flex flex-col justify-between p-[30px] h-auto'>
                  <div className='text-[18px] clr-grn'>Recipes</div>
                  <div className='flex items-center text-[16px] m-[10px_0] tracking-[0.2px] leading-[1.5] whitespace-pre-line'>
                    With Nutrium you can create and analyse the nutritional information of your recipes, add them to meal plans or send it out to clients.
                  </div>
                  <a href="#" target="_blank" className='text-[18px] inline-flex items-center text-[#ea9f77] group hover:text-[#e78f61]'>
                    <span className='cursor-pointer'>Learn more</span>
                    <Image src={smallArrOrg} className="pl-[10px] h-[14px] group-hover:translate-x-[5px] transition-cstm" alt="arrow" />
                  </a>
                </div>
              </div>
              <div className='!flex'>
                <div className='relative max-w-[125px] min-w-[125px]'>
                  <Image src={slide1} className='absolute -left-[125px] h-full max-w-[200%]' />
                </div>
                <div className='flex flex-col justify-between p-[30px] h-auto'>
                  <div className='text-[18px] clr-grn'>Recipes</div>
                  <div className='flex items-center text-[16px] m-[10px_0] tracking-[0.2px] leading-[1.5] whitespace-pre-line'>
                    With Nutrium you can create and analyse the nutritional information of your recipes, add them to meal plans or send it out to clients.
                  </div>
                  <a href="#" target="_blank" className='text-[18px] inline-flex items-center text-[#ea9f77] group hover:text-[#e78f61]'>
                    <span className='cursor-pointer'>Learn more</span>
                    <Image src={smallArrOrg} className="pl-[10px] h-[14px] group-hover:translate-x-[5px] transition-cstm" alt="arrow" />
                  </a>
                </div>
              </div>
              <div className='!flex'>
                <div className='relative max-w-[125px] min-w-[125px]'>
                  <Image src={slide1} className='absolute -left-[125px] h-full max-w-[200%]' />
                </div>
                <div className='flex flex-col justify-between p-[30px] h-auto'>
                  <div className='text-[18px] clr-grn'>Recipes</div>
                  <div className='flex items-center text-[16px] m-[10px_0] tracking-[0.2px] leading-[1.5] whitespace-pre-line'>
                    With Nutrium you can create and analyse the nutritional information of your recipes, add them to meal plans or send it out to clients.
                  </div>
                  <a href="#" target="_blank" className='text-[18px] inline-flex items-center text-[#ea9f77] group hover:text-[#e78f61]'>
                    <span className='cursor-pointer'>Learn more</span>
                    <Image src={smallArrOrg} className="pl-[10px] h-[14px] group-hover:translate-x-[5px] transition-cstm" alt="arrow" />
                  </a>
                </div>
              </div>

            </Slider> */}
            <SliderComponent data={Product_info_slider1} />
          </div>
        </div>
      </section>
      <section className='bg-video-pattern relative mt-[-250px] h-[800px] bg-cover bg-no-repeat bg-bottom'>
        <div className="mx-auto w-[1040px] pt-[400px] xl:w-[900px] lg:w-[700px] md:w-full md:px-[20px]">
          <h2 className='text-center text-[32px] md:text-[30px] md:leading-[35px] md:text-left mb-[10px] clr-grn'>Start improving your business now</h2>
          <div className='text-[17px] w-[60%] md:w-full md:mt-[10px] md:text-left md:mb-[20px] mx-auto tracking-[0.5px] text-center mt-[20px] mb-[40px] text-[#6e7c91] '>
            For private practices, nutrition clinics, hospitals, online consulting, wellness centres and gyms. Support your clients, anywhere at any time.
          </div>
          <div className='flex md:flex-col justify-center mt-[50px]'>
            <Button className="leading-[34px] text-[17px] ">Start 14-day FREE trial</Button>
            <a href="#" className='clr-grn text-[17px] flex md:m-auto md:pt-[30px] items-center group hover:text-[#12896d] ml-[50px]'>
              <div className='bg-[#1ab394] group-hover:bg-[#12896d] p-[17px] mr-[10px] rounded-full'><FaPlay className='text-white text-[17px] relative left-[2px]' /></div>
              <div className='leading-[48px]'>See Nutrium in action</div>
            </a>
          </div>
        </div>
      </section>
      <section className='bg-testimonial-pattern h-[1100px] mt-[-150px] z-10 relative bg-no-repeat bg-bottom bg-cover'>
        <div className="mx-auto w-[1040px] xl:w-[900px] lg:w-[700px] md:w-full md:px-[20px] absolute translate-y-[-60%] top-[62%] inset-x-0">
          <h2 className='text-center text-[32px] md:text-[30px] md:leading-[35px] md:text-left mb-[10px] text-white'>Give a Free Mobile App to your Clients</h2>
          <div className='text-[17px] w-[60%] md:w-full md:mt-[10px] md:text-left md:mb-[20px] mx-auto tracking-[0.5px] text-center mt-[20px] mb-[40px] text-white'>
            Your clients can set up their Nutrium mobile app before or after the appointment. With the mobile app, communicating and updating your clients' needs has never been so easy.
          </div>
          <div className='flex mt-[50px]'>

          </div>
        </div>
      </section>
      <section className='mt-[150px]'>
        <div className='w-[1040px] xl:w-[900] lg:w-[700] md:w-full px-[20px] mx-auto benefits-container'>
        <h2 className='text-center text-[32px] md:text-[26px]  md:leading-[35px] md:text-left mb-[2%] clr-grn'>Work with clients with specific requirements?</h2>
          <div className='text-[17px] md:text-[16px] md:leading-[26px] md:mt-0 md:mb-0 max-w-[75%] md:w-full md:max-w-full md:text-left   mx-auto tracking-[0.5px] text-center mt-[20px] mb-[40px] text-[#6e7c91] '>
          Our nutrition analysis software is adapted for nutritionists and dietitians who work with clients with specific needs and requirements.
          </div>
          <Slider {...adaptations_slide}>
            <div>
              <div className='p-[15px]'>
                <div>
                  <Image src={infoImg1} className="max-w-full h-auto md:mx-auto" />
                </div>
                <h3 className='mt-5 text-[24px] clr-grn'>Prenatal nutrition</h3>
                <div className='w-[90%] text-[#6e7c91] text-[15px]'>Adaptation of anthropometry, predictive calculations and evaluation graphics.</div>
                <div className='mt-[20px]'>
                  <div className='text-[#1ab394a6] font-[300] text-[17px] leading-[34px] w-[95%]'>
                    <Image src={checkMark} width={100} className="max-w-[1.2rem] mr-[3%] !inline-block" />
                    Pregnancy history assessment;
                  </div>
                  <div className='text-[#1ab394a6] font-[300] text-[17px] leading-[34px] w-[95%]'>
                    <Image src={checkMark} width={100} className="max-w-[1.2rem] mr-[3%] !inline-block" />
                    Weight gain according to IOM;
                  </div>
                  <div className='text-[#1ab394a6] font-[300] text-[17px] leading-[34px] w-[95%]'>
                    <Image src={checkMark} width={100} className="max-w-[1.2rem] mr-[3%] !inline-block" />
                    Additional energy requirements.
                  </div>
                </div>

                <a href="#" target="_blank" className='text-[18px] mt-[20px] inline-flex items-center text-[#ea9f77] group hover:text-[#e78f61]'>
                  <span className='cursor-pointer'>Learn more</span>
                  <Image src={smallArrOrg} className="pl-[10px] h-[14px] group-hover:translate-x-[5px] transition-cstm" alt="arrow" />
                </a>
              </div>
            </div>
            <div>
              <div className='p-[15px]'>
                <div>
                  <Image src={infoImg2} className="max-w-full h-auto md:mx-auto" />
                </div>
                <h3 className='mt-5 text-[20px] clr-grn'>Paediatric nutrition</h3>
                <div className='w-[90%] text-[#6e7c91] text-[15px]'>New clinical information fields and growth standards provided by the WHO.</div>
                <div className='mt-[20px]'>
                  <div className='text-[#1ab394a6] font-[300] text-[17px] leading-[34px] w-[95%]'>
                    <Image src={checkMark} width={100} className="max-w-[1.2rem] mr-[3%] !inline-block" />
                    Food diversification assessment;
                  </div>
                  <div className='text-[#1ab394a6] font-[300] text-[17px] leading-[34px] w-[95%]'>
                    <Image src={checkMark} width={100} className="max-w-[1.2rem] mr-[3%] !inline-block" />
                    WHO Growth Standards;
                  </div>
                  <div className='text-[#1ab394a6] font-[300] text-[17px] leading-[34px] w-[95%]'>
                    <Image src={checkMark} width={100} className="max-w-[1.2rem] mr-[3%] !inline-block" />
                    Adapted recommendations.
                  </div>
                </div>
                <a href="#" target="_blank" className='text-[18px] mt-[20px] inline-flex items-center text-[#ea9f77] group hover:text-[#e78f61]'>
                  <span className='cursor-pointer'>Learn more</span>
                  <Image src={smallArrOrg} className="pl-[10px] h-[14px] group-hover:translate-x-[5px] transition-cstm" alt="arrow" />
                </a>
              </div>
            </div>
            <div>
              <div className='p-[15px]'>
                <div>
                  <Image src={infoImg3} className="max-w-full h-auto md:mx-auto" />
                </div>
                <h3 className='mt-5 text-[20px] clr-grn'>Sports nutrition</h3>
                <div className='w-[90%] text-[#6e7c91] text-[15px]'>Physical activity, nutritional requirements, macronutrient and goal setting.</div>
                <div className='mt-[20px]'>
                  <div className='text-[#1ab394a6] font-[300] text-[17px] leading-[34px] w-[95%]'>
                    <Image src={checkMark} width={100} className="max-w-[1.2rem] mr-[3%] !inline-block" />
                    Metabolic Equivalents Table;
                  </div>
                  <div className='text-[#1ab394a6] font-[300] text-[17px] leading-[34px] w-[95%]'>
                    <Image src={checkMark} width={100} className="max-w-[1.2rem] mr-[3%] !inline-block" />
                    Katch McCardle equation;
                  </div>
                  <div className='text-[#1ab394a6] font-[300] text-[17px] leading-[34px] w-[95%]'>
                    <Image src={checkMark} width={100} className="max-w-[1.2rem] mr-[3%] !inline-block" />
                    Water intake tracking.
                  </div>
                </div>
                <a href="#" target="_blank" className='text-[18px] mt-[20px] inline-flex items-center text-[#ea9f77] group hover:text-[#e78f61]'>
                  <span className='cursor-pointer'>Learn more</span>
                  <Image src={smallArrOrg} className="pl-[10px] h-[14px] group-hover:translate-x-[5px] transition-cstm" alt="arrow" />
                </a>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      <section className='bg-slider-pattern-1 bg-bottom bg-no-repeat bg-cover h-[800px] info-card top-[150px] more-feature relative z-10'>
        <div className="mx-auto w-[1040px] xl:w-[900px] lg:w-[700px] md:w-full md:px-[20px]">
          <div>
            <SliderComponent data={Product_info_slider2} />
            <div className='text-center w-3/5 mt-[150px] mx-auto md:my-[60px] md:w-full'>
              <h2 className="text-[30px] md:text-[26px] md:text-left tracking-[0.5px] mt-0 mb-[2%] clr-grn">Stop using different apps for your business. Get everything in one place.</h2>
              <div className="text-[17px] text-[#6E7C91] md:text-left tracking-[0.2px] leading-[30px] whitespace-pre-line">
                Admin tasks. Nutritional information. Client engagement. And 100% FREE to get started. Our team is on standby to help you.
              </div>
              <div className='relative flex items-center h-[50px] my-[10%]  md:mx-[20px]'>
                <form className='h-full flex  w-full md:flex-col'>
                  <Input className="mr-[30px] w-1/2 md:min-h-full md:w-full md:mr-0" placeholder="Your email" id="email" />
                  <Button className="bg-[#EA9F77] min-w-[30%] text-[1rem] tracking-[0.5px] shadow-[0px_4px_10px_-4px_#717171] border-[#EA9F77] md:mt-[10px]">Get started</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='mt-[275px]'>
        <div className='mx-auto w-[1040px] xl:w-[900px] lg:w-[700px] md:w-full md:px-[20px] mb-[70px]'>
            <h2 className='clr-grn tracking-[0.5px] mb-[50px] md:mb-[20px] md:text-left text-center'>Frequently Asked Questions</h2>
            <div className="">
              <Accordion items={Product_accordion_data} />
            </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Product_page