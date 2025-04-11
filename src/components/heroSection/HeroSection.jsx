import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-[url(/img/hero-banner.jpg)] bg-center bg-cover">
      <div className="max-w-[1536px] h-[500px] sm:h-[730px] px-5 md:px-10 grid justify-start items-center ">
        <div className="space-y-5">
            <h1 className="text-white font-sora font-semibold text-3xl leading-[40px]  sm:text-5xl sm:leading-[60px]">Bid on Unique Items from <br/>Around the World</h1>
            <p className="text-white font-sora text-lg font-light leading-[30px]">Discover rare collectibles, luxury goods, and vintage <br /> treasures in our curated auctions</p>
            <button className="text-black bg-white px-8 py-3 rounded-full font-sora font-medium text-base cursor-pointer">Explore Auctions</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
