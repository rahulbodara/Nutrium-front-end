import React from 'react'

const Pagination = (props) => {
    return (

        <ul className={`pagination mt-[20px] flex items-center ${props.className}`}>

            <li className="p-[4px_10px] border leading-[1.42857] ml-[-1px] border-[#dddddd]">
                <i className="fa fa-fast-backward"></i>
            </li>
            <li className="p-[4px_10px] border leading-[1.42857] ml-[-1px] border-[#dddddd]">
                <i className="fa fa-backward"></i>
            </li>
            <li className="p-[4px_10px] border leading-[1.42857] ml-[-1px] border-[#dddddd]">
                1
            </li>

            <li className="p-[4px_10px] border leading-[1.42857] ml-[-1px] border-[#dddddd]">
                2
            </li>

            <li className="p-[4px_10px] border leading-[1.42857] ml-[-1px] border-[#dddddd]">
                3
            </li>

            <li className="p-[4px_10px] border leading-[1.42857] ml-[-1px] border-[#dddddd]">
                <i className="fa fa-forward"></i>
            </li>

            <li className="p-[4px_10px] border leading-[1.42857] ml-[-1px] border-[#dddddd]">
                <i className="fa fa-fast-forward"></i>
            </li>

        </ul>

    )
}

export default Pagination
