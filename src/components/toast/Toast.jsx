import { ToastContainer, toast } from 'react-toastify';
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { useState } from 'react';


function Toast({handleFavorite,data}){
  const notify = () => toast.success("🚀 Item added to the Favourite");
  const [bid,setBid] = useState(false);

  return (
    <div>
      <button disabled={bid} onClick={()=>{notify();setBid(true);handleFavorite(data)}} className="text-center disabled:cursor-not-allowed">{bid?<FaHeart className="text-[#fb2c36]" size={25} />:<FaRegHeart size={25} />}</button>
    </div>
  );
}

export default Toast