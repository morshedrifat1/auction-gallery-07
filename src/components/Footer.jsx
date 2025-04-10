import React from 'react';

const Footer = () => {
    return (
        <div className='grid justify-center items-center justify-items-center py-[100px]'>
            <img src="img/logo.png" alt="" />
            <ul className='flex flex-wrap gap-4 justify-center mt-4'>
                <li className='font-sora font-normal text-xl'>Bid.</li>
                <li className='font-sora font-normal text-xl'>Win.</li>
                <li className='font-sora font-normal text-xl'>Own.</li>
            </ul>

            <ul className='flex flex-wrap gap-5 justify-center items-center sm:gap-10 mt-6'>
                    <li className='font-poppins font-normal text-lg cursor-pointer'>Home</li>
                    <li className='font-poppins font-normal text-lg cursor-pointer'>Auctions</li>
                    <li className='font-poppins font-normal text-lg cursor-pointer'>Categories</li>
                    <li className='font-poppins font-normal text-lg cursor-pointer'>How to works</li>
            </ul>
            <p className='font-sora text-lg font-normal mt-6 text-center'>© 2025 AuctionHub. All rights reserved.</p>
        </div>
    );
};

export default Footer;