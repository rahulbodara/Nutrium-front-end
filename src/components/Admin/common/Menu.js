import { Transition } from '@headlessui/react'
import Link from 'next/link'
import React, { Fragment, useEffect, useRef } from 'react'

const Menu = (props) => {
    const menuRef = useRef(null);

    const handleOutsideClick = (event) => {
        if (menuRef?.current && !menuRef?.current.contains(event.target)) {
            props?.setIsOpen(false);
            console.log("outside click")
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);
    return (
        <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
            show={props?.isOpen}            

        >
            <div className={`absolute z-[11111] mt-[2px] max-w-[277px] w-100 origin-top-right divide-y divide-gray-100 rounded-[3px] bg-white shadow-[0_0_3px_rgba(86,96,117,0.7)] ring-1 ring-black ring-opacity-5 focus:outline-none ${props?.className}`} ref={menuRef}>
                {
                    props?.options && props.options.map((item, index) => (
                        <Link href={'#'} className='flex items-center p-[3px_20px]  hover:text-black cursor-pointer text-[14px] rounded-[3px] leading-[25px] m-[4px] text-left whitespace-nowrap' key={index}>
                            {item.label}
                        </Link>
                    ))
                }
            </div>
        </Transition>
    )
}

export default Menu