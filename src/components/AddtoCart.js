import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import blackset from "/public/images/blackset.png"
import whiteSet from "/public/images/whiteSet.png"
import BigEarphone from "/public/images/BigEarphone.png"
import Image from "next/image";

function AddtoCart() {
  return (
    <div className="fixed w-[100%] h-[100%] left-[0px] top-[0px] bg-black/50 m-0 p-0 {hidden} overflow-y-auto z-10 "> 
      <div className="mt-[93px] mx-6 p-6 md:mx-10 lg:mx-[150px] md:float-right  md:mt-[120px] md:w-[377px] bg-white rounded-lg lg:p-[25px]">
        <div className="flex justify-between mb-[30px] mt-2">
          <p className="uppercase text-lg font-bold ">cart (3)</p>
          <button className="opacity-50 underline underline-offset-1 font-medium text-base">
            Remove all
          </button>
        </div>
        <ul className="">
                {/* this should be a card displayin the items selected for purchase */}
          <li className="flex justify-between mb-[20px] ">
            <div className="flex gap-[5px] md:gap-[10px]">
              <div className="bg-deepGray rounded-lg  w-[64px] h-[64px] pl-[13px] pt-[12px] ">
                <Image src={blackset} alt="image" height={40} width={36} />
              </div>
              <div className="font-bold self-center">
                <p className=" text-base ">XX99 MK II</p>
                <p className="text-[15px] opacity-50">$ 2,999</p>
              </div>
            </div>
            <button className=" self-center relative bg-deepGray w-[120px] h-[40px] text-black text-center  text-sm">
              <FaMinus className=" absolute top-[15px] left-[20px] opacity-25 text-sm font-bold" />
              <FaPlus className="absolute opacity-25 text-sm font-bold top-[14px] right-[20px]" />
             1
            </button> 
          </li>
          <li className="flex justify-between mb-[20px]">
            <div className="flex gap-[10px] ">
              <div className="bg-deepGray rounded-lg  w-[64px] h-[64px] pl-[13px] pt-[12px] ">
                <Image src={whiteSet} alt="image" height={40} width={36} />
              </div>
              <div className="font-bold self-center">
                <p className=" text-base ">XX59</p>
                <p className="text-[15px] opacity-50">$ 899</p>
              </div>
            </div>
            <button className=" self-center relative bg-deepGray w-[120px] h-[40px] text-black text-center  text-sm">
              <FaMinus className=" absolute top-[15px] left-[20px] opacity-25 text-sm font-bold" />
              <FaPlus className="absolute opacity-25 text-sm font-bold top-[14px] right-[20px]" />
             2
            </button> 
          </li>
          <li className="flex justify-between mb-[10px]">
            <div className="flex gap-[10px] ">
              <div className="bg-deepGray rounded-lg  w-[64px] h-[64px] pl-[13px] pt-[12px] ">
                <Image src={BigEarphone} alt="image" height={40} width={36} />
              </div>
              <div className="font-bold self-center">
                <p className=" text-base ">YX1</p>
                <p className="text-[15px] opacity-50">$ 599</p>
              </div>
            </div>
            <button className=" self-center relative bg-deepGray w-[120px] h-[40px] text-black text-center  text-sm">
              <FaMinus className=" absolute top-[15px] left-[20px] opacity-25 text-sm font-bold" />
              <FaPlus className="absolute opacity-25 text-sm font-bold top-[14px] right-[20px]" />
             1
            </button> 
          </li>
        </ul>
        <div className="flex justify-between my-[25px]">
          <p className="opacity-50  font-medium text-base uppercase">Total</p>
          <p className=" text-lg font-bold ">$ 5,446</p>
        </div>
        <button className="font-bold text-white text-sm text-center w-[100%] h-[48px] mb-3 bg-deepOrange hover:bg-[#FBAF85]">
          CHECKOUT
        </button>
      </div>
    </div>
  );
}

export default  AddtoCart;
