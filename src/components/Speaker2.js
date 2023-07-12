import React from "react";
import Button from "./Button";
import { useRouter } from "next/router";

function Speaker2() {
  const router = useRouter()
  return (
   
    <div className="my-12 blur-md:my-16  relative">
      <picture>
      <source media="(min-width:700px)" srcSet="/images/speaker.png"/>
        <img src="/images/Small.png" alt="man with headset" className="" />
       
      </picture>

      <div className=" absolute top-[80px] left-[19px] md:top-[50px] md:left-[40px] lg:top-[120px] lg:left-[80px]">
        <p className=" font-bold text-[28px]  md:text-3xl mb-[20px]">ZX7 SPEAKER</p>
        <Button className="  border-lightBlack border py-2 px-4 font-bold text-base hover:bg-black hover:text-white" onClick={()=> router.push('/zx7-speaker')} />
      </div>
    </div>
  );
}

export default Speaker2;
