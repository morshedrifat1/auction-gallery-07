import React from 'react';
import { FaRegHeart } from 'react-icons/fa6';

const FavoriteItems = ({favorite}) => {

    return (
        <div className='bg-white rounded-3xl pb-8'>
            <div className=' pt-8 pb-4 px-6'>
               <h1 className='flex gap-3 justify-center items-center'><FaRegHeart className='text-[#0E2954]' size={25}/><span className='font-sora font-medium text-xl text-[#0E2954]'>Favorite Items</span></h1> 
            </div>
            
        <div className="border-b border-[#DCE5F3]"></div>

        <div>
            {
                favorite.length>0?favorite.map(fav=><p>{fav.title}</p>):<div className='px-20 text-center py-12 space-y-6'><h3 className='font-sora font-medium text-xl'>No favorites yet</h3><p className='font-sora text-base font-normal'>Click the heart icon on any item to add it to your favorites</p></div>
            }
        </div>

        <div className="border-b border-[#DCE5F3]"></div>

            
        </div>
    );
};

export default FavoriteItems;