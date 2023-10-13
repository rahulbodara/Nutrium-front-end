import ClientDetail from '@/components/Admin/Clients/ClientDetail'
import ClientSubscribe from '@/components/Admin/Clients/ClientSubscribe'
import Steps from '@/components/Admin/Clients/Information/Steps'
import MainLayout from '@/components/Admin/MainLayout'
import EditableChoices from '@/components/Admin/common/EditableChoices'
import HeadTitle from '@/components/Admin/common/HeadTitle'
import React from 'react'
const FoodsAvoid =[
  {
    name:'Sweets (sugar; honey; jam)'
  },
  {
    name:' Packaged snacks (pastries; milk chocolates; candy; cakes; cookies; pudding; pies)'
  },
  {
    name:' Sugar-sweetened beverages (soda; fruit drinks; sports drinks; fruit juices; sweet tea)'
  },
  {
    name:' Pre-made foods'
  },
  {
    name:' Fast food'
  },
  {
    name:' Processed foods (fries; salami; high-fat ham; bacon; sausage)'
  },
  {
    name:' Canned foods (except tuna; sardines and salmon)'
  },
  {
    name:' Sauces and gravies'
  },
  {
    name:' Refined grains (white bread; white rice; white pasta)'
  },
  {
    name:'  Alcoholic beverages'
  },
  {
    name:'  Red meat (beef; pork; lamb)'
  },

]
const Recommendations = () => {
  return (
    <div className=''>
      <MainLayout head={"Client profile"} text={"Check and update information about the client"}>
        <div className='mt-[-20px]'>
          <ClientDetail />
          <div className='pt-[25px] pb-[25px]'>
            <ClientSubscribe />
            <div className='mt-[25px]'>
              <Steps />
            </div>
          </div>
        </div>
        <div className='grid gap-[25px] grid-cols-2 md:grid-cols-1'>

          <div className="bg-white  col-span-2 md:col-span-1 shadow-box1 rounded-[5px]">
            <HeadTitle title={'Physical activity'} subTitle={'Select the exercises you want to advise the customer'} />
            <div className='p-[20px] pt-[0]'>
              <div className='border '>
                <span className='text-[#676A6C]/[0.5] block grow p-[10px]'>No physical activity was added</span>
              </div>
            </div>
            <div className='p-[20px] grid grid-cols-2 pt-[0]'>
              <div className='text-center'>
                <span className='block font-[100]'>Daily energy average</span>
                <h6 className='text-[15px] font-[400] mt-[5px]'>0 kcal/day</h6>
              </div>
              <div className='text-center'>
                <span className='block font-[100]'>Average time of daily activity</span>
                <h6 className='text-[15px] font-[400] mt-[5px]'>0 minutes</h6>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white  shadow-box1 rounded-[5px]">
              <HeadTitle title={'Foods to avoid'} subTitle={'Foods that must not be consumed'} />
              <div className='p-[20px] pt-[0]'>
                <div className='border '>
                 <EditableChoices data={FoodsAvoid} />
                </div>
              </div>
             
            </div>
          </div>
          <div>
            <div className="bg-white  shadow-box1 rounded-[5px]">
              <HeadTitle title={'Water intake between meals'} subTitle={'Recommended daily water intake'} />
              <div className='p-[20px] pt-[0]'>
                <div className='border '>
                  <span className='text-[#676A6C] block grow p-[10px]'>Between 1.5 and 2 litres</span>
                </div>
              </div>

            </div>
          </div>
          <div className="bg-white  md:col-span-1 col-span-2 shadow-box1 rounded-[5px]">
            <HeadTitle title={'Other recommendations'} subTitle={'Additional recommendations to give to the client'} />
            <div className='p-[20px] pt-[0]'>
              <div className='border '>
                <div className="border-0 p-2.5 grow min-h-[110px] focus:border-0 focus:outline-none focus:ring-0 w-full text-[13px] resize-none whitespace-pre-line" data-name="recommendations" data-pk="4435095" rows="5" data-url="/remote/editables/professionals/meal_plans/4435095"
                  data-value="Eat slowly and in small portions;
                    Drink water throughout the day;
                    Alternate among different foods and cooking methods (exclude fried foods);
                    Reduce salt intake, replacing it with herbs and spices;
                    Avoid binge-eating;
                    Read carefully the nutrition facts/labelling;
                    Eat meals and snacks on schedule;
                    Choose whole-grain foods (quinoa, oats, barley, whole wheat), whole fruits, nuts, seeds, beans and plant oils (olive oil);
                    Choose low or reduced fat products (yoghurt, milk and cheese) and skinless and lean cuts of meat (chicken and turkey breast, pork tenderloin, beef round, sirloin or tenderloin);
                    Practice regular physical activity (150 minutes per week)."
                  tabIndex="-1">
                  Eat slowly and in small portions;<br />
                  Drink water throughout the day;<br />
                  Alternate among different foods and cooking methods (exclude fried foods);<br />
                  Reduce salt intake, replacing it with herbs and spices;<br />
                  Avoid binge-eating;<br />
                  Read carefully the nutrition facts/labelling;<br />
                  Eat meals and snacks on schedule;<br />
                  Choose whole-grain foods (quinoa, oats, barley, whole wheat), whole fruits, nuts, seeds, beans and plant oils (olive oil);<br />
                  Choose low or reduced fat products (yoghurt, milk and cheese) and skinless and lean cuts of meat (chicken and turkey breast, pork tenderloin, beef round, sirloin or tenderloin);<br />
                  Practice regular physical activity (150 minutes per week).<br />
                </div>
              </div>

            </div>

          </div>
        </div>
      </MainLayout>
    </div>
  )
}

export default Recommendations
