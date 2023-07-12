import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineShoppingCart } from "react-icons/md";
import logo from "public/logo.svg";
import Image from "next/image";
import Nav from "./Nav";
// import Categories from "./Categories";
{
  /* onClick={() => setShowMobileMenu(!showMobileMenu)} */
}

function Header() {
  // const [menu, setMenu] = useState(false);

  // const showMenu = () => {
  //  setMenu(true)
  
  // };
  return (
    <div className="bg-[#101010] py-4 px-6 md:px-10 md:py-6  lg:px-24  lg:py-8 text-white flex justify-between ">
      <GiHamburgerMenu
        className="cursor-pointer self-center md:text-xl hover:text-deepOrange lg:hidden"
        // onClick={showMenu}
      />
      <Image src={logo} alt="Company logo" />
      <Nav
        className="hidden lg:block lg:w-1/2"
        nav="text-white text-sm font-bold flex justify-between align-middle"
      />
      <MdOutlineShoppingCart className="self-center  md:text-xl" />
    </div>
  );
}

export default Header;
