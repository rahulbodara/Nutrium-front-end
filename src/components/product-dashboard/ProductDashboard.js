import React from 'react';


const ProductDashboard = () => {
    const waNavigators = ["Homepage", "Nutritional assessment", "Anthropometry", "Diet assessment", "Meal planning", "Recommendations", "Diet analysis", "Follow-up"]
    const IsHome = true;
    return (
        <div className='w-full'>
            <div>
                <div className=' w-full bg-white rounded-[25px] overflow-hidden h-[645px]'>
                    <div className="wa-top-frame flex flex-col justify-center h-[60px] bg-[#f4d2c8]">
                        <div className="wa-top-buttons flex">
                            <div className='bg-[#ea9f77] ml-[35px] rounded-full w-[20px] h-[20px]'></div>
                            <div className='bg-[#eeeeee] ml-[15px] rounded-full w-[20px] h-[20px]'></div>
                            <div className='bg-[#1ab394] ml-[15px] rounded-full w-[20px] h-[20px]'></div>
                        </div>
                    </div>
                    <div className="wa-page-container flex overflow-hidden h-[555px]">
                        <div className={`wa-sidebar ${IsHome === true ? 'w-[120px]' : 'w-[60px]' }  flex flex-col bg-[#1AB394] h-full transition-[width] duration-1000 ease-[ease] delay-[0s]`}>
                            <div className={`wa-sidebar-logo-container ${IsHome === true ? 'p-[30px]' : 'p-0 m-[20px_10px]'}`}>
                                <div className="wa-sidebar-logo bg-light-heart bg-center bg-no-repeat bg-contain cursor-pointer h-[30px]">
                                </div>
                            </div>
                            <div className="wa-sidebar-items">
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className='wa-pages-navigator-container mt-[3%]'>
                    <div className="flex flex-wrap justify-center">
                    {
                        waNavigators.map((item,index) => (
                            <div className='bg-[#E0FAF1] hover:text-[#ea9f77] hover:bg-[#fae8e4] hover:cursor-pointer text-[15px] p-[10px] m-[5px_8px] rounded-[5px] tracking-[0.5px] text-center select-none text-[#1ab394]'>
                                {item}
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDashboard;
