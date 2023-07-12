import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";




function ProductPrice(props) {
  let [counter, setCounter] = useState(1)

  return (
    <div className="mb-14 md:flex justify-between">
      <div className=" bg-deepGray rounded-lg p-2 mb-8 md:w-2/6 md:px-8 md:py-[100px] lg:p-[100px]">
        <img src={props.img1} className="mx-auto my-auto"/>
      </div>


      <div className="self-center md:w-3/6">
        <p className="uppercase text-deepOrange font-medium text-base tracking-[10px] mb-4">
          {props.content1}
        </p>
        <p className="uppercase font-bold text-2xl  mb-4 w-[160px] ">{props.content2}</p>
        <p className="font-medium text-base opacity-50 mb-6 ">
          {props.content3}
        </p>
        <p className="mb-5 font-bold text-lg uppercase md:mb-3 lg:mb-5">{props.price}</p>
        <div className="mt-8 md:mt-4">
          <button className="relative bg-deepGray px-16 py-3 text-black text-center mr-[25px]  text-sm">
            <FaMinus className=" absolute top-[15px] left-[20px] opacity-25 text-sm font-bold" onClick={()=>setCounter(counter--)} />
            <FaPlus className="absolute opacity-25 text-sm font-bold top-[14px] right-[20px]" onClick={()=>setCounter(counter++)} />
            {counter}
          </button>
          <button className="bg-deepOrange text-base font-bold text-white py-2 px-4 hover:bg-[#FBAF85]">
            ADD TO CART
          </button>
        
        </div>
      </div>
    </div>
  );
}

export default ProductPrice;
