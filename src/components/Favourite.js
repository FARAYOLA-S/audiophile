import React from "react";
import ProductDescription from "./ProductDescription";
import { useRouter } from "next/router";

function Favourite() {
  const router = useRouter()
  return (
    <div className=" mt-[80px] ">
      <h3 className="font-bold text-2xl mb-7 text-center">
        YOU MAY ALSO LIKE
      </h3>
      <div className=" lg:flex gap-4">
        <ProductDescription
          className1="mb-16 lg:mb-0 "
          className2=" px-7 py-3 rounded-lg bg-deepGray  "
          className3="text-center text-[26px] uppercase font-bold  mt-6   " 
          src="/images/goldHeadset.png"
          productName="XX99 MARK I"
          onClick={()=>router.push('/product2')}
        />
        <ProductDescription
          className1="mb-16 lg:mb-0 "
          className2=" rounded-lg bg-deepGray    "
          className3="text-center text-[26px]  uppercase font-bold  mt-6 "
          className4=" "
          src="/images/whiteSet.png"
          productName="XX59 "
          onClick={()=>router.push('/product3')}
        />
        <ProductDescription
          className1="mb-16 lg:mb-0 "
          className2=" rounded-lg bg-deepGray   "
          className3="text-center text-[26px]  uppercase font-bold  mt-6  "
          src="/images/BigSpeaker.png"
          productName="ZX9 SPEAKER"
          onClick={()=>router.push('/product4')}
        />
      </div>
    </div>
  );
}

export default Favourite;
