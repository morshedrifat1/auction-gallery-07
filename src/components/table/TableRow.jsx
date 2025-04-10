import Toast from "../toast/Toast";

const TableRow = ({data,handleFavorite}) => {


  return (
    <tr className="border-b border-[#DCE5F3]">
      <td>
        <div className="flex items-center gap-3">
          <img
            className="w-15 h-15 object-cover rounded-lg"
            src={data.image}
            alt=""
          />
          <p className="font-sora font-normal text-[#0E2954] text-base">{data.title}</p>
        </div>
      </td>
      <td className="font-sora font-normal text-black text-lg text-center">{data.currentBid}</td>
      <td className="font-sora font-normal text-black text-lg text-center">{data.time}</td>
      <td className="text-center"><Toast data={data} handleFavorite={handleFavorite}></Toast></td>
    </tr>
  );
};

export default TableRow;
