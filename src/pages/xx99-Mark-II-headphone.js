import AddtoCart from "@/components/AddtoCart";
import Cart from "@/components/Cart";
import { useRouter } from "next/router";
import React from "react";

function product1() {
  const router = useRouter()
  return (
    <div className="my-0 mx-auto  box-border">
      <Cart
      handleClick ={()=> router.push('/')}
      img1="/images/blackset.png"
        content1="NEW PRODUCT"
        content2="XX99 Mark II Headphones"
        content3="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
        price="$ 2,999"
        
        description1="Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.
        "
        description2="The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic."
        quantity1="1x"
        detail1="Headphone Unit"
        quantity2="2x"
        detail2="Replacement Earcups"
        quantity3="1x"
        detail3="User Manual"
        quantity4="1x"
        detail4="3.5mm 5m Audio Cable"
        quantity5="1x"
        detail5="Travel Bag"
        img2="/images/man.png"
        img3="/images/coffee.png"
        img4="/images/black.png"
      />
      {/* <AddtoCart /> */}
    </div>
  );
}

export default product1;
