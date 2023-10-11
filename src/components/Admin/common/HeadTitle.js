import React from 'react'

const HeadTitle = (props) => {
    return (
        <div className="widget-header p-[20px_20px_15px_20px]">
            <h4 className="text-[20px] leading-[1.1]">
               {props?.title}
            </h4>
            <div className="text-[12px] text-[#888888] opacity-[0.6]">
                {props?.subTitle}
            </div>
        </div>
    )
}

export default HeadTitle
