import React from 'react'
import Cart from "@/components/Cart";
import { useRouter } from 'next/router';


function product6() {
  const router= useRouter()
  return (
    <div className="my-0 mx-auto  box-border">
    <Cart
    handleClick={()=>router.push('/earphones')}
    img1="/images/BigEarphone.png"
    content1="NEW PRODUCT"
    content2="YX1 WIRELESS EARPHONES"
    content3="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
    price="$ 599"
   
      description1="Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.
      "
      description2="The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black."
      quantity1="2x"
      detail1="Earphone Unit"
      quantity2="6x"
      detail2="Multi-size Earplugs"
      quantity3="1x"
      detail3="User Manual"
      quantity4="1x"
      detail4="USB-C Charging Cable"
      quantity5="1x"
      detail5="Travel Pouch"
      img2="/images/earpod.png"
      img3="/images/pic13.png"
      img4="/images/pic14.png"
    />
  </div>
  )
}

export default product6