import Image from 'next/image'
import Navbar from '@/components/common/Navbar'
import headerImg from '../../public/image/home-header-img.png'
import smallArrow from '../../public/icon/sm-right-arrow.svg'
import Input from '@/components/common/input'
import Button from '@/components/common/Button'
import middleImg from '../../public/image/header-middle-img.png'
import checkMark from '../../public/icon/checkmark-green.svg'
import smallArrOrg from '../../public/icon/right-arrow-org.svg'
import managePracticeImg from '../../public/image/manage-practice.png'
import mobileHandImg from '../../public/image/mobile-hand.png'
import clockImg from '../../public/image/clock.png'
import playIcon from '../../public/icon/play-icon.svg'
import googlePlay from '../../public/image/google-play-en.svg';
import appStore from '../../public/image/app-store-en.svg';
import mobileVector from '../../public/image/mobile-vector.svg';
import {Testimonial_data} from '../components/testimonial/data'

import Slider from 'react-slick';
import Testimonial from '@/components/testimonial/testimonial'



export default function Home() {

  var settings = {
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
          fade:true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
    ]
  };



  return (
    <>
      <div>
        <header>
          <div className='bg-header-pattern bg-no-repeat w-full h-[700px] bg-cover bg-bottom'>
            <Navbar />
            <div className='pt-[150px] max-w-[1040px] xl:max-w-[900px] lg:max-w-[700px] md:max-w-[100%] md:flex-col w-full mx-auto flex text-white'>
              <div className='w-1/2 md:w-full'>
                <div className='visible inline-flex transition-cstm cursor-pointer mb-[4%] hover:scale-[1.02] rounded-[5px] p-[0.4rem] w-full items-center bg-gradient-to-r from-[#12896e4d] to-[#1ab3954d]'>
                  <div className='capitalize text-[15px] tracking-[1px] px-[3%] py-[1%] bg-[#ea9f77] rounded-[5px] leading-[15px] whitespace-nowrap'>new</div>
                  <div className='grow ml-[3%]'>How to calculate the PAL with METs in Nutrium</div>
                  <Image src={smallArrow} width={100} className="w-[10px] h-[10px] brightness-0 invert"/>
                </div>
                <h1 className='text-[29px] tracking-[1px] md:mx-[20px]'>All-in-one Nutrition Software for dietitians and nutritionists</h1>
                <h1 className='text-[#E0FAF1] text-[17px] mt-[20px] mb-[40px] tracking-[0.5px]  md:mx-[20px]'>
                  Nutrium is the best nutrition software for professionals to manage their business while focusing on their clients' success.
                </h1>
                <div className='relative flex items-center h-[50px]  md:mx-[20px]'>
                  <form className='h-full flex  w-full md:flex-col'>
                    <Input className="mr-[30px] md:min-h-full md:mr-0" placeholder="Your email" id="email"/>
                    <Button className="bg-[#EA9F77] border-[#EA9F77] md:mt-[10px]">Get started</Button>
                  </form>
                </div>
              </div>
              <div className='w-1/2 md:hidden'>
                <Image width={1000} className="w-full h-auto" src={headerImg}/>
              </div>
            </div>
          </div>
        </header>
        <section className='mt-[150px] md:px-[20px]'>
          <div className='flex max-w-[1040px] mx-auto md:flex-col'>
            <div className='pr-[7%] w-1/2 md:w-full md:pr-0 md:pb-[50px]'>
              <Image src={middleImg} width={1000} className="w-full h-auto" alt="content-img" />
            </div>
            <div className='w-1/2 flex justify-between flex-col md:w-full'>
              <h2 className="text-[30px] mb-[2%] clr-grn">Nutrition analysis, meal planning, and practice management in one place</h2>
              <div className="text-[17px] text-[#6E7C91] leading-[30px] whitespace-pre-line">Nutrium offers tools for professionals to manage, assess, counsel and monitor clients in less time and with more success.</div>
              <div className='flex md:flex-col md:my-[4%]'>
                <div className='w-1/2'>
                  <div className='clr-grn font-[300] leading-[28px]'>
                    <Image src={checkMark} width={100} className="max-w-[1.2rem] mr-[3%] inline-block" />
                      Client health records;
                  </div>
                  <div className='clr-grn font-[300] leading-[28px]'>
                    <Image src={checkMark} width={100} className="max-w-[1.2rem] mr-[3%] inline-block" />
                    Meal planning & recipes;

                  </div>
                  <div className='clr-grn font-[300] leading-[28px]'>
                    <Image src={checkMark} width={100} className="max-w-[1.2rem] mr-[3%] inline-block" />
                    Nutritional analysis;
                  </div>
                </div>
                <div className='w-1/2'>
                  <div className='clr-grn font-[300] leading-[28px]'>
                    <Image src={checkMark} width={100} className="max-w-[1.2rem] mr-[3%] inline-block" />
                    Online appointment bookings;
                  </div>
                  <div className='clr-grn font-[300] leading-[28px]'>
                    <Image src={checkMark} width={100} className="max-w-[1.2rem] mr-[3%] inline-block" />
                    Telehealth integration;
                  </div>
                  <div className='clr-grn font-[300] leading-[28px]'>
                    <Image src={checkMark} width={100} className="max-w-[1.2rem] mr-[3%] inline-block" />
                    Client mobile app.
                  </div>
                </div>
              </div>
              <a className='text-[#ea9f77] cursor-pointer hover:text-[#e78f61] flex items-center text-[17px]'>
                <span>Learn more about Nutrium</span>
                <Image src={smallArrOrg} width={100} className="h-[14px] w-auto pl-[10px]" />
              </a>
            </div>
          </div>
        </section>
        <section className='mt-[150px] relative'>
          <div className='max-w-[1040px] mx-auto benefits-container'>
              <Slider {...settings}>
                <div>
                  <div className='p-[15px]'>
                    <div>
                      <Image src={managePracticeImg} className="w-[10rem] h-auto md:mx-auto" />
                    </div>
                    <h3 className='mt-5 text-[20px] clr-grn'>Manage your practice online</h3>
                    <div className='text-[14px] text-[#6E7C91] my-[5%] leading-[25px] whitespace-pre-line pr-[10%] md:pr-0'>Work from anywhere and keep all your clients' data safe with our electronic health records and telehealth features.</div>
                    <a className='text-[#ea9f77] cursor-pointer hover:text-[#e78f61] flex items-center text-[17px]'>
                      <span>Learn more</span>
                      <Image src={smallArrOrg} width={100} className="h-[14px] w-auto pl-[10px]" />
                    </a>
                  </div>
                </div>
                <div>
                  <div className='p-[15px]'>
                    <div>
                      <Image src={mobileHandImg} className="w-[10rem] h-auto md:mx-auto" />
                    </div>
                    <h3 className='mt-5 text-[20px] clr-grn'>Go paperless with our mobile app</h3>
                    <div className='text-[14px] text-[#6E7C91] my-[5%] leading-[25px] whitespace-pre-line pr-[10%] md:pr-0'>Offer your clients our mobile app to send all your recommendations and check how your clients are working towards their goals.</div>
                    <a className='text-[#ea9f77] cursor-pointer hover:text-[#e78f61] flex items-center text-[17px]'>
                      <span>Learn more</span>
                      <Image src={smallArrOrg} width={100} className="h-[14px] w-auto pl-[10px]" />
                    </a>
                  </div>
                </div>
                <div>
                  <div className='p-[15px]'>
                    <div>
                      <Image src={clockImg} className="w-[10rem] h-auto md:mx-auto" />
                    </div>
                    <h3 className='mt-5 text-[20px] clr-grn'>Have time for what's important</h3>
                    <div className='text-[14px] text-[#6E7C91] my-[5%] leading-[25px] whitespace-pre-line pr-[10%] md:pr-0'>Nutrium takes care of the nutritional analysis of food diaries and meal plans and calculates clients' nutritional needs.</div>
                    <a className='text-[#ea9f77] cursor-pointer hover:text-[#e78f61] flex items-center text-[17px]'>
                      <span>Learn more</span>
                      <Image src={smallArrOrg} width={100} className="h-[14px] w-auto pl-[10px]" />
                    </a>
                  </div>
                </div>
              </Slider>
          </div>
        </section>
        <section className='relative h-[700px] md:h-[500px] bg-bottom bg-cover mt-[150px] bg-video-pattern bg-no-repeat'>
          <div className='max-w-[1040px] mx-auto absolute top-[62%] left-0 right-0 translate-y-[-60%] text-center md:px-[20px] '>
            <h2 className='clr-green text-[30px] mb-[2%] clr-grn md:text-left md:text-[26px]'>See how Nutrium can help you grow your business</h2>
            <div className='text-[17px] text-[#6e7c91] leading-[30px] whitespace-pre-line md:hidden'>
              Check everything a meal planning software can be for you. Not only a nutrient analysis software, but also allows you to create meal plans and recipes, manage all your appointments and clients and even create your own website.
            </div>
            <div className='hidden md:block text-left text-[#6E7C91] tracking-[0.2px] leading-[26px] whitespace-pre-line'>Learn about Nutrium: dietary assessment, meal planning and nutrient analysis software for nutrition professionals.</div>
            <a className='hover:scale-[1.05] inline-block cursor-pointer p-[35px] mt-[5%] rounded-full border-[4px] border-[#1ab394] transition-cstm md:hidden'>
              <Image src={playIcon} className="h-[40px] w-[40px] pl-[7px]" />
            </a>
            <a href="#" className='w-full mt-[20px] text-white bg-[#EA9F77] border border-[#EA9F77] py-[6px] px-[12px] hidden md:block'>Watch the video</a>
          </div>
        </section>
        <section className='mt-[150px]'>
        <div className='flex px-[20px] max-w-[1040px] xl:max-w-[900px] lg:max-w-[700px] md:max-w-[100%] md:flex-col-reverse w-full mx-auto'>
          <div className='h-[700px] lg:h-[600px] flex w-1/2 md:w-full'>
            <div className='self-center'>
              <h2 className='text-[30px] mt-0 mb-[2%] tracking-[0.5px] text-[#1AB394]'>Say bye to paper records and set your clients up with a mobile app</h2>
              <div className='text-[17px] text-[#6E7C91] tracking-[0.2px] leading-[30px] whitespace-pre-line'>
              Send all your clients their recommendations and meal plans, communicate safely with them and improve results together.
              </div>
              <div className='mt-[20px] text-[17px] text-[#6E7C91] tracking-[0.2px] '>Here's what you will be able to do with Nutrium:</div>
              <div className='mt-[20px]'>
                <div className='clr-grn font-[300] text-[16px] leading-[28px]'>
                  <Image src={checkMark} width={100} className="max-w-[1.2rem] mr-[3%] inline-block" />
                    Update their recommendations on the spot;
                </div>
                <div className='clr-grn font-[300] text-[16px] leading-[28px]'>
                  <Image src={checkMark} width={100} className="max-w-[1.2rem] mr-[3%] inline-block" />
                  Stay up to date with their progress;

                </div>
                <div className='clr-grn font-[300] text-[16px] leading-[28px]'>
                  <Image src={checkMark} width={100} className="max-w-[1.2rem] mr-[3%] inline-block" />
                  Reduce no-shows with reminders;
                </div>
                <div className='clr-grn font-[300] text-[16px] leading-[28px]'>
                  <Image src={checkMark} width={100} className="max-w-[1.2rem] mr-[3%] inline-block" />
                  Understand their daily struggles.
                </div>
              </div>
              <div className='mt-[40px] flex items-center justify-center'>
                <a href="#" target="_blank" className='mr-[10%] w-[35%] cursor-pointer'>
                  <Image src={googlePlay} width={1000} className='max-h-[50px] w-full'/>
                </a>
                <a href="#" target="_blank" className=' w-[35%] cursor-pointer'>
                  <Image src={appStore} width={1000} className='max-h-[50px] w-full' />
                </a>
              </div>
            </div>
          </div>
          <div className='h-[700px] lg:h-[600px]  w-1/2  md:w-full'>
          <Image src={mobileVector} alt="mobile" className='w-full h-full' style={{ filter:'drop-shadow(0 0 10px #ddd)' }} />
          </div>
        </div>
        </section>
        <section className='mt-[150px]'>
          <div className='bg-testimonial-pattern h-[800px] bg-no-repeat bg-bottom bg-cover'></div>
          <div className='-mt-[530px] items-center max-w-[1040px] w-full mx-auto'>
            <h2 className='text-white text-center text-[30px] mb-[2%] tracking-[0.5px]'>See what the fuss is all about</h2>
            <div className='text-white px-[15%] text-[17px] leading-[30px] whitespace-pre-line text-center'>From the UK to the US, thousands of nutritionists and dietitians, in more than 120 countries count on Nutrium to get their businesses up and running.</div>
            <div className='mt-[70px]'>
              {/* <Slider {...settings}> */}
                {/* <div className=' relative bg-white overflow-hidden h-[400px] rounded-[5px]'>
                  <div className='mob-testimonial-bg'></div>
                  <div className='info absolute text-left w-2/5 -translate-y-2/4 z-[3] left-[7%] top-2/4'>
                    <div className='text-[#1AB394] text-[40px]'>Jayme Limbaugh</div>
                    <div className='text-[#EA9F77] text-[18px]'>Nutritionist @ Crystal Coast Wellness</div>
                    <div className='text-base italic text-[#6E7C91] leading-[1.7] mt-[5%]'>"I wanted the flexibility to create my own and a program that gives more attention to helping me be a better nutritionist rather than doing it for me. Nutrium is very easy to use and it is straightforward..."</div>
                  </div>
                  <div className=' absolute w-[600px] z-[1] right-0 inset-y-0'>
                    <div className='triangle absolute w-0 h-0 border-r-[300px] border-r-[rgba(255,255,255,0)] border-b-[400px] border-b-white border-solid'></div>
                    <Image src={testimonialImg1} className='w-full h-full' />
                  </div>
                </div> */}
                <Slider>
                    {
                      Testimonial_data.map(item => (
                        <Testimonial data={item} />
                      ))
                    }
                </Slider>
              {/* </Slider> */}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
