import "./App.css";
import { Suspense, useState } from "react";
import HeroSection from "./components/heroSection/HeroSection";
import Navbar from "./components/navbar/Navbar";
import Table from "./components/table/Table";
import Toast from "./components/toast/Toast";
import FavoriteItems from "./components/FavoriteItems/FavoriteItems";

function App() {
  const auctionData = fetch("auctionData.json").then((res) => res.json());
  const [favorite,setFavorite]  = useState([]);
  const handleFavorite = (favoriteItem)=>{
    setFavorite([...favorite,favoriteItem])
  }
  console.log(favorite);

  return (
    <>
      <Suspense>
        <Navbar auctions={auctionData}></Navbar>
      </Suspense>
      <HeroSection></HeroSection>

      <div className="table-container max-w-[1536px] px-5 md:px-10 space-y-8 py-20 bg-[#EBF0F5]">
        <div className="space-y-5">
          <h1 className="font-sora font-medium text-3xl text-[#0E2954]">
            Active Auctions
          </h1>
          <p className="font-sora font-normal text-lg">
            Discover and bid on extraordinary items
          </p>
        </div>
        <div className="table-content grid lg:grid-cols-3 gap-6">
        <div className="table col-span-2">
          <Suspense>
            <Table handleFavorite={handleFavorite} auctionData={auctionData}></Table>
          </Suspense>
        </div>
        <div className="favorite-items">
          <FavoriteItems favorite={favorite}></FavoriteItems>
        </div>
        </div>
        
      </div>
    </>
  );
}

export default App;
