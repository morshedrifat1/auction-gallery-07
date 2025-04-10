import { use } from "react";
import TableRow from "./TableRow";

const Table = ({auctionData,handleFavorite,favorite}) => {

  const tableData = use(auctionData);
  
  return (
    <div className="max-w-[1536px]">
      <div className="overflow-x-auto  rounded-3xl border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="border-b border-[#DCE5F3]">
              <th className="font-sora font-normal text-black text-lg py-6">Items</th>
              <th className="font-sora font-normal text-black text-lg text-center">Current Bid</th>
              <th className="font-sora font-normal text-black text-lg text-center">Time Left</th>
              <th className="font-sora font-normal text-black text-lg text-center" >Bid Now</th>
            </tr>
          </thead>
          <tbody>
            {
              tableData.map(data=><TableRow favorite={favorite} handleFavorite={handleFavorite} data={data}></TableRow>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
