import { mdiFaceMan, mdiCellphone, mdiViewDashboard, mdiRun, mdiHeart, mdiTune, mdiSilverware, mdiStarCircle } from '@mdi/js'
import Icon from '@mdi/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import StraightenIcon from './StraightenIcon'

const setpdDetail = [
    {
        id: 1,
        name: 'Information',
        detail: "Client's information and habits",
        icon: mdiFaceMan,
        href: '/admin/professionals/patients/information',
    },
    {
        id: 2,
        name: 'Follow-up',
        detail: "Progress since the last appointment",
        icon: mdiHeart,
        href: '/admin/professionals/patients/followup',

    },
    {
        id: 3,
        name: 'Measurements',
        detail: "Measurements and progress",
        icon: mdiFaceMan,
        href: '/admin/professionals/patients/measurements',
    },
    {
        id: 4,
        name: 'Planning',
        detail: "Planning of client's meal plan",
        icon: mdiTune,
        href: '/admin/professionals/patients/planning',
    },
    {
        id: 5,
        name: 'Meal Plan',
        detail: "Defining meals of the meal plan",
        icon: mdiSilverware,
        href: '#',
    },
    {
        id: 6,
        name: 'Recommendations',
        detail: "Exercise and other recommendations",
        icon: mdiRun,
        href: '#',
    },
    {
        id: 7,
        name: 'Analysis',
        detail: "Analysis of the client's meal plan",
        icon: mdiViewDashboard,
        href: '#',
    },
    {
        id: 8,
        name: 'Deliverables',
        detail: "Deliverables and appointments",
        icon: mdiCellphone,
        href: '#',
    },
]

const Steps = () => {
    const [selectedStep, setSelectedStep] = useState(1)
    const router = useRouter()
    return (
        <div className='grid gap-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-cols-4'>
            {
                setpdDetail.map((item, index) => {
                    return (
                        <Link href={item.href} key={item.id} className={`${router.pathname === item.href ? " bg-[#1AB394] text-white" : "bg-white"}  px-[15px] shadow-box2 rounded-[5px]  flex py-[10px]`}>
                            <div className='flex-1'>
                                <h2 className='text-[1.3em] leading-[24px] '>
                                    {item.id}. {item.name}
                                </h2>
                                <span className={`${router.pathname === item.href ? "text-white" : "text-[#888888]/[70%]"}   font-[300] lg:text-[9px] text-[calc(9px_+_3_*_((100vw_-_1200px)_/_400))]`}>
                                    {item.detail}
                                </span>
                            </div>
                            <div className='mt-2 relative'>
                                {
                                    item.id === 3 ?
                                        <>
                                            <StraightenIcon size={24} />
                                        </>
                                        :
                                        <>
                                            <Icon path={item?.icon} size={1} />
                                            {
                                                item.id === 2 ?
                                                    <div className=' absolute top-[8px] text-[#F7C029] bg-white rounded-full  right-[-2px]'>
                                                        <Icon path={mdiStarCircle} size={0.5} />
                                                    </div>
                                                    :
                                                    <></>
                                            }
                                        </>
                                }
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default Steps
