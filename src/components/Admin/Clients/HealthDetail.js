import React from 'react'

const HealthDetail = (props) => {
    return (
        <div className="flex flex-wrap">
            <div className="text-center grow">
                <div className="font-[100] text-[13px]">Energy</div>
                <h3 className="text-[15px] mt-[5px] leading-[1.1]">{props?.energy ? props?.energy : 0} <span className="text-[12px]">kcal</span></h3>
            </div>
            <div className="text-center grow">
                <div className="font-[100] text-[13px]">Fat</div>
                <h3 className="text-[15px] mt-[5px] leading-[1.1]">{props?.fat ? props?.fat : 0} <span className="text-[12px]">g</span></h3>
            </div>
            <div className="text-center grow">
                <div className="font-[100] text-[13px]">Carbohydrate</div>
                <h3 className="text-[15px] mt-[5px] leading-[1.1]">{props?.carbohydrate ? props?.carbohydrate  : 0} <span className="text-[12px]">g</span></h3>
            </div>
            <div className="text-center grow">
                <div className="font-[100] text-[13px]">Protein</div>
                <h3 className="text-[15px] mt-[5px] leading-[1.1]">{props?.protein ? props?.protein : 0} <span className="text-[12px]">g</span></h3>
            </div>
            <div className="text-center grow">
                <div className="font-[100] text-[13px]">Fiber</div>
                <h3 className="text-[15px] mt-[5px] leading-[1.1]">{props?.fiber ? props.fiber : 0} <span className="text-[12px]">g</span></h3>
            </div>
        </div>
    )
}

export default HealthDetail
