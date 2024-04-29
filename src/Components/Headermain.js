import React from "react";
import { BiSearch, BiUser } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Headermain = () => {
  return (
    <div className="border-b border-gray-200">
      <div className="container py-4 hidden sm:flex justify-between items-center">
        <div className="font-bold text-4xl text-center pb-4 sm:pb-0 text-blakish">
          HuluShop
        </div>

        {/* headermain search bar */}
        <div className="w-full sm:w-[300px] md:w-[70%] relative">
          <input
            className="border border-gray-200 rounded-lg w-full p-2 px-4"
            type="text"
            placeholder="search what u need"
          />
          <BiSearch className="absolute top-0 right-0 text-gray-300 mr-3 mt-3" />
        </div>

        {/* headermain icons */}
        <div className="hidden lg:flex text-[30px] text-gray-500 gap-4">
          <BiUser />

          <div className="relative">
            <FiHeart />
            <div className="absolute bg-red-600 rounded-full top-0 right-0 text-white text-[12px] w-[18px] h-[18px] grid place-items-center translate-x-1 -translate-y-1">
              3
            </div>
          </div>

          <div className="relative">
            <HiOutlineShoppingBag />
            <div className="absolute bg-red-600 rounded-full top-0 right-0 text-white text-[12px] w-[18px] h-[18px] grid place-items-center translate-x-1 -translate-y-1">
              3
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headermain;
