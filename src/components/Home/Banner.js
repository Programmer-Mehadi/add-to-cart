import React from "react";

const Banner = () => {
  return (
    <>
      <div className="h-[800px] w-[100%]" id="banner_section">
        <div className="w-full h-full flex flex-col justify-center items-start px-6 gap-12 bg-slate-800 bg-opacity-50">
          <h2 className="text-[#ffffff] max-w-[668px] text-[34px] md:text-[64px]  font-bold">
            Exclusive Deals of Furniture Collection
          </h2>
          <p className="text-[#ffffff] max-w-[668px] text-[24px] font-normal">
            Explore different categories. Find the best deals.
          </p>
          <button className=" bg-[#07484A] text-white text-[24px] font-semibold px-[54px] py-[16px] rounded-md cursor-pointer">
            Shop Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner;
