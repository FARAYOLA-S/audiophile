import React from "react";
import logo from "public/logo.svg";

import Image from "next/image";
import Nav from "./Nav";
import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className=" ">
      <div className=" bg-[#fafafa] px-6 md:px-10  lg:px-24 pt-8 lg:flex lg:justify-between ">
        <div className=" lg:order-last ">
          <picture>
            <source media="(min-width:1000px)" srcSet="/images/man3.png" />
            <source media="(min-width:750px)" srcSet="/images/man2.png" />
            <img src="/images/man1.png" alt="man with headset" />
          </picture>
       
        </div>
        <div className="self-center text-center lg:w-2/5 ">
          <h3 className="  text-3xl uppercase text-black font-bold my-6 md:mx-[87px] md:px-6 lg:mx-0 lg:px-0">
            Bringing you the <span className=" text-deepOrange"> best</span>{" "}
            audio gear
          </h3>
          <p className="text-base  opacity-50  md:mx-[60px] lg:mx-0">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>

      <div className="bg-[#101010] mt-10 px-6 md:px-10  lg:px-24 py-11    flex flex-col gap-8  text-center md:text-left  md:block">
        <Image
          src={logo}
          alt="Company logo"
          className="mx-auto md:mx-0 md:mb-10"
        />
        <Nav
          className=" "
          nav=" text-white text-sm font-bold flex flex-col gap-4 md:flex-row  md:mb-10 lg:mt-[-60px] lg:justify-end"
        />
        <p className="font-medium text-base text-white opacity-50 md:mb-12 lg:w-[450px] lg:mx-0">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <p className="font-medium text-base text-white opacity-50  ">
          Copyright 2021. All Rights Reserved
        </p>
        <div className=" text-white text-lg  flex justify-center gap-5  md:justify-end md:mt-[-20px] md:text-xl lg:mt-[-98px] lg:mb-14">
          <FaFacebookSquare className="cursor-pointer   hover:text-deepOrange" />
          <FaTwitter className="cursor-pointer   hover:text-deepOrange" />
          <FaInstagram className="cursor-pointer  hover:text-deepOrange" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
