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



export default function Home() {


  return (
    <>
      <div>
        <header>
          <div className='bg-header-pattern bg-no-repeat w-full h-[700px] bg-cover bg-bottom'>
            <Navbar />
            <div className='pt-[150px] max-w-[1040px] mx-auto flex text-white'>
              <div className='w-1/2'>
                <div className='visible inline-flex transition-cstm cursor-pointer mb-[4%] hover:scale-[1.02] rounded-[5px] p-[0.4rem] w-full items-center bg-gradient-to-r from-[#12896e4d] to-[#1ab3954d]'>
                  <div className='capitalize text-[15px] tracking-[1px] px-[3%] py-[1%] bg-[#ea9f77] rounded-[5px] leading-[15px] whitespace-nowrap'>new</div>
                  <div className='grow ml-[3%]'>How to calculate the PAL with METs in Nutrium</div>
                  <Image src={smallArrow} width={100} className="w-[10px] h-[10px] brightness-0 invert"/>
                </div>
                <h1 className='text-[32px] tracking-[1px]'>All-in-one Nutrition Software for dietitians and nutritionists</h1>
                <h1 className='text-[#E0FAF1] text-[17px] mt-[20px] mb-[40px] tracking-[0.5px]'>
                  Nutrium is the best nutrition software for professionals to manage their business while focusing on their clients' success.
                </h1>
                <div className='relative flex items-center h-[50px]'>
                  <form className='h-full flex  w-full'>
                    <Input className="mr-[30px]" placeholder="Your email" id="email"/>
                    <Button className="bg-[#EA9F77] border-[#EA9F77]" value="Get started" />
                  </form>
                </div>
              </div>
              <div className='w-1/2'>
                <Image width={1000} className="w-full h-auto" src={headerImg}/>
              </div>
            </div>
          </div>
        </header>
        <section className='mt-[150px]'>
          <div className='flex max-w-[1040px] mx-auto '>
            <div className='pr-[7%] w-1/2'>
              <Image src={middleImg} width={1000} className="w-full h-auto" alt="content-img" />
            </div>
            <div className='w-1/2 flex justify-between flex-col'>
              <h2 className="text-[30px] mb-[2%] clr-grn">Nutrition analysis, meal planning, and practice management in one place</h2>
              <div className="text-[17px] text-[#6E7C91] leading-[30px] whitespace-pre-line">Nutrium offers tools for professionals to manage, assess, counsel and monitor clients in less time and with more success.</div>
              <div className='flex'>
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
          <div className='max-w-[1040px] mx-auto'>
            <div className='flex'>
              <div className='px-[15px] w-1/3'>
                <div>
                  <div>
                    <Image src={managePracticeImg} className="w-[10rem] h-auto" />
                  </div>
                  <h3 className='mt-5 text-[20px] clr-grn'>Manage your practice online</h3>
                  <div className='text-[14px] text-[#6E7C91] my-[5%] leading-[25px] whitespace-pre-line'>Work from anywhere and keep all your clients' data safe with our electronic health records and telehealth features.</div>
                    <a className='text-[#ea9f77] cursor-pointer hover:text-[#e78f61] flex items-center text-[17px]'>
                  <span>Learn more</span>
                  <Image src={smallArrOrg} width={100} className="h-[14px] w-auto pl-[10px]" />
                </a>
                </div>
              </div>
              <div className='px-[15px] w-1/3'>
                <div>
                  <div>
                    <Image src={mobileHandImg} className="w-[10rem] h-auto" />
                  </div>
                  <h3 className='mt-5 text-[20px] clr-grn'>Go paperless with our mobile app</h3>
                  <div className='text-[14px] text-[#6E7C91] my-[5%] leading-[25px] whitespace-pre-line'>Offer your clients our mobile app to send all your recommendations and check how your clients are working towards their goals.</div>
                    <a className='text-[#ea9f77] cursor-pointer hover:text-[#e78f61] flex items-center text-[17px]'>
                  <span>Learn more</span>
                  <Image src={smallArrOrg} width={100} className="h-[14px] w-auto pl-[10px]" />
                </a>
                </div>
              </div>
              <div className='px-[15px] w-1/3'>
                <div>
                  <div>
                    <Image src={clockImg} className="w-[10rem] h-auto" />
                  </div>
                  <h3 className='mt-5 text-[20px] clr-grn'>Have time for what's important</h3>
                  <div className='text-[14px] text-[#6E7C91] my-[5%] leading-[25px] whitespace-pre-line'>Nutrium takes care of the nutritional analysis of food diaries and meal plans and calculates clients' nutritional needs.</div>
                    <a className='text-[#ea9f77] cursor-pointer hover:text-[#e78f61] flex items-center text-[17px]'>
                  <span>Learn more</span>
                  <Image src={smallArrOrg} width={100} className="h-[14px] w-auto pl-[10px]" />
                </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='relative h-[700px] bg-bottom bg-cover mt-[150px] bg-video-pattern bg-no-repeat'>
          <div className='max-w-[1040px] mx-auto absolute top-[62%] left-0 right-0 translate-y-[-60%] text-center '>
            <h2 className='clr-green text-[30px] mb-[2%] clr-grn'>See how Nutrium can help you grow your business</h2>
            <div className='text-[17px] text-[#6e7c91] leading-[30px] whitespace-pre-line'>
              Check everything a meal planning software can be for you. Not only a nutrient analysis software, but also allows you to create meal plans and recipes, manage all your appointments and clients and even create your own website.
            </div>
            <div className='hidden'>Learn about Nutrium: dietary assessment, meal planning and nutrient analysis software for nutrition professionals.</div>
            <a className='hover:scale-[1.05] inline-block cursor-pointer p-[35px] mt-[5%] rounded-full border-[4px] border-[#1ab394] transition-cstm'>
              <Image src={playIcon} className="h-[40px] w-[40px] pl-[7px]" />
            </a>
          </div>
        </section>
      </div>
    </>
  )
}
