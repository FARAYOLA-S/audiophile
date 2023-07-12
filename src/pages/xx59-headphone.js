import React from 'react'
import Cart from "@/components/Cart";
import { useRouter } from 'next/router';

function product3() {
  const router=useRouter()
  return (
    <div className="my-0 mx-auto  box-border">
    <Cart
    img1="/images/whiteSet.png"
    handleClick={()=>router.push('/headphones')}
      content2="XX59 Headphones"
      content3="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
      price="$ 899"
      
      description1="These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos "
      description2=" More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C."
      quantity1="1x"
      detail1="Headphone Unit"
      quantity2="2x"
      detail2="Replacement Earcups"
      quantity3="1x"
      detail3="User Manual"
      quantity4="1x"
      detail4="3.5mm 5m Audio Cable"
      img2="/images/pic4.png"
      img3="/images/pic5.png"
      img4="/images/pic6.png"
    />
  </div>
  )
}

export default product3