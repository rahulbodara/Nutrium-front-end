import Image from 'next/image';
import React, { useState } from 'react';
import {HiMinus, HiPlus} from 'react-icons/hi';
import accordionImg from '../../../public/image/accordion-img-1.png'

const AccordionItem = ({ title, content,img, isOpen, toggleAccordion }) => {
  return (
    <div className="p-[25px_0_15px] border-b border-b-[#e0faf1] ">
      <div
        className="flex items-start cursor-pointer mb-[10px]"
        onClick={toggleAccordion}
      >
        <h2 className="grow text-[17px] text-[#1AB394] tracking-[0.2px] text-left select-none leading-normal m-0">{title}</h2>
        {
            isOpen ? 
            <HiMinus className='text-[#717171] opacity-[0.6] mt-[4px] text-[22px] ml-[10px] leading-[18px] p-[3px] max-h-[24px]'/>:
            <HiPlus className='text-[#717171] opacity-[0.6] mt-[4px] text-[22px] ml-[10px] leading-[18px] p-[3px] max-h-[24px]' />
        }
      </div>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } text-[#6e7c91]`}
      >
        <div className='mx-[-15px]'>
            <div className="flex items-center">
                <div className="w-[83.33333%] float-left px-[15px] min-h-[1px] relative">
                    <p className='text-[15px] leading-[1.5]'>
                    {content}
                    </p>
                </div>
                <div className='w-[16.66667%] float-left px-[15px] min-h-[1px] relative'>
                    <div>
                        <Image src={img} width={100} height={100} className="max-w-[150px] w-full h-auto pr-[20px]" />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.description}
          img={item.img}
          isOpen={openIndex === index}
          toggleAccordion={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
