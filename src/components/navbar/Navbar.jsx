import React, { use } from 'react';
import { GrNotification } from "react-icons/gr";


const Navbar = ({auctions}) => {
    const auctionsData = use(auctions)
    return (
        <div className='flex justify-between items-center py-5 max-w-[1536px] px-5 md:px-10'>
            <div className="logo">
                <a href="https://a7-auction-gallery1.surge.sh/"><img className='w-[200px]' src="img/logo.png" alt="" /></a>

            </div>
            <div className="nav-item hidden lg:inline">
                <ul className='flex items-center gap-10'>
                    <li className='font-poppins text-lg cursor-pointer'>Home</li>
                    <li className='font-poppins text-lg cursor-pointer'>Auctions</li>
                    <li className='font-poppins text-lg cursor-pointer'>Categories</li>
                    <li className='font-poppins text-lg cursor-pointer'>How to works</li>
                </ul>
            </div>
            <div className="nav-icon">

                <div className='flex gap-4 items-center'>
                    <div className=' bg-[#ebf0f5]  p-[10px] rounded-full relative cursor-pointer'>
                        <GrNotification className='text-[#0e2954]' size={24}/>
                        <button className='bg-[#0e2954] text-white px-[5px] rounded-full absolute top-1 right-2 text-[10px]'>{auctionsData.length}</button>
                    </div>
                    
                    <img className='cursor-pointer' src="img/user.png" alt="" />
                </div>

            </div>
        </div>
    );
};

export default Navbar;