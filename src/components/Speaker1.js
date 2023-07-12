import Image from "next/image";

import React from "react";
import Button from "./Button";
import { useRouter } from "next/router";

function Speaker1() {
  const router = useRouter()
  return (
    <div className=" my-10 bg-deepOrange pb-10 pt-14 lg:flex lg:justify-between lg:pr-10 ">
      <picture className="mx-auto mb-10 self-end lg:mb-[-40px]">
        <source media="(min-width:1000px)" srcSet="/images/BigSpeaker.png" />
        <img src="/images/speak.png" alt="man with headset" className="mx-auto " />
      </picture>
      <div className="  mt-6 text-center text-white  lg:w-2/5 lg:text-left lg:mt-[40px] ">
        <p className="font-bold text-3xl mx-10 px-10 mb-4 md:mx-[220px] md:text-4xl lg:pl-0 lg:pr-[250px] lg:mx-0">
          ZX9 SPEAKER
        </p>
        <p className=" font-medium text-base  opacity-75 mb-5 px-4 md:mx-[180px] md:px-0 lg:mx-0 lg:px-0">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Button className="bg-lightBlack hover:bg-[#4C4C4C] text-base font-bold text-white py-2 px-4" onClick={()=> router.push('/zx9-speaker')}/>
      </div>
    </div>
  );
}

export default Speaker1;
