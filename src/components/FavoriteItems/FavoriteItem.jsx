
import { IoClose  } from "react-icons/io5";
import {toast } from 'react-toastify';

const FavoriteItem = ({fav,handleRemoveFavorite}) => {

const notify = () => toast.warn("Item removed From Favourite");
  
    return (
        <div className='flex gap-6 p-6 items-center'>
            <div>
                <img className="w-16 h-16 object-cover rounded-lg" src={fav.image} alt="" />
            </div>
            <div className='flex justify-between gap-5'>
                <div className='space-y-2 w-[290px]'>
                    <h1 className='font-sora font-normal text-base text-[#0E2954]'>{fav.title}</h1>
                    <div className='flex gap-6'>
                        <p className='font-sora font-normal text-base text-[#0E2954]'>${fav.currentBidPrice}</p>
                        <p className='font-sora font-normal text-base text-[#0E2954]'>Bids:{fav.bidsCount}</p>
                    </div>
                </div>
                <div>
                    <button className="cursor-pointer" onClick={()=>{notify();handleRemoveFavorite(fav.id)}}><IoClose size={24} /></button>
                </div>
            </div>
        </div>
    );
};

export default FavoriteItem;