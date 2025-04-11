import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { toast } from "react-toastify";


const TableRow = ({ data, handleFavorite,favorite }) => {
  const notify = () => toast.success("🚀 Item added to the Favourite");
  const [bid, setBid] = useState(false);

  useEffect(() => {
    if (favorite.includes(data)) {
      setBid(true);
    } else {
      setBid(false);
    }
  }, [favorite,data]);
  

  return (
    <tr className="border-b border-[#DCE5F3]">
      <td>
        <div className="flex items-center gap-3">
          <img
            className="w-15 h-15 object-cover rounded-lg"
            src={data.image}
          />
          <p className="font-sora font-normal text-[#0E2954] text-base">
            {data.title}
          </p>
        </div>
      </td>
      <td className="font-sora font-normal text-[#0E2954] text-lg text-center">
        ${data.currentBidPrice}
      </td>
      <td className="font-sora font-normal text-[#0E2954] text-lg text-center">
        {data.timeLeft}
      </td>
      <td className="text-center">
        <button
          disabled={bid}
          onClick={() => {
            notify();
            handleFavorite(data);
          }}
          className="text-center disabled:cursor-not-allowed cursor-pointer"
        >
          {favorite.includes(data) ? (
            <FaHeart className="text-[#fb2c36]" size={25} />
          ): (
            <FaRegHeart size={25} />
          )}
        </button>
      </td>
    </tr>
  );
};
export default TableRow;
