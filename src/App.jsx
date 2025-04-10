import { Suspense,useState } from "react";
import "./App.css";
import FavoriteItems from "./components/FavoriteItems/FavoriteItems";
import HeroSection from "./components/heroSection/HeroSection";
import Navbar from "./components/navbar/Navbar";
import Table from "./components/table/Table";
import Footer from "./components/Footer";

// jsondata load 
const auctionData = fetch("auctionData.json").then((res) => res.json());
function App() {


  // Favorite Items add and remove 
  const [favorite,setFavorite]  = useState([]);

  const handleFavorite = (favoriteItem)=>{
    setFavorite([...favorite,favoriteItem])
  }
 
  const handleRemoveFavorite = (id) =>{
    setFavorite(favorite.filter(favoriteItem => favoriteItem.id !== id))
  }

  // Favorite Items sum 
  let bidsAmount = 0;
  for(let i =0; i<favorite.length;i++){
    bidsAmount = bidsAmount + parseInt(favorite[i].currentBidPrice);
  }

  return (
    <>
    {/* navbar section */}
      <Suspense>
        <Navbar auctions={auctionData}></Navbar>
      </Suspense>

    {/* hero section  */}
      <HeroSection></HeroSection>
    {/* table section */}
      <div className="table-container px-5 md:px-10 space-y-8 py-20 bg-[#EBF0F5]">
        <div className="space-y-5">
          <h1 className="font-sora font-medium text-3xl text-[#0E2954]">
            Active Auctions
          </h1>
          <p className="font-sora font-normal text-lg">
            Discover and bid on extraordinary items
          </p>
        </div>
        <div className="table-content grid  lg:grid-cols-3 gap-5 sm:gap-6">
        <div className="table lg:col-span-2">
          <Suspense fallback={<p>loading</p>}>
            <Table favorite={favorite} handleFavorite={handleFavorite} auctionData={auctionData}></Table>
          </Suspense>
        </div>
        <div className="favorite-items">
          <FavoriteItems bidsAmount={bidsAmount} handleRemoveFavorite={handleRemoveFavorite} favorite={favorite}></FavoriteItems>
        </div>
        </div>
      </div>

    {/* footer section  */}
    <Footer></Footer>
    </>
  );
}

export default App;
