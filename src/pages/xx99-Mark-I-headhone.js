import React from 'react'
import Cart from "@/components/Cart";
import { useRouter } from 'next/router';


function product2() {
 const router= useRouter()
  return (

    <div className="my-0 mx-auto  box-border">
      <Cart
      img1="/images/goldHeadset.png"
       handleClick={()=>router.push('/headphones')}
        content2="XX99 Mark I Headphones"
        content3="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go. "
        price="$1,750"
       
        description1="As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz. "
        description2="
        From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector."
        quantity1="1x"
        detail1="Headphone Unit"
        quantity2="2x"
        detail2="Replacement Earcups"
        quantity3="1x"
        detail3="User Manual"
        quantity4="1x"
        detail4="3.5mm 5m Audio Cable"
        img2="/images/pic1.png"
        img3="/images/pic2.png"
        img4="/images/pic3.png"
      />
    </div>
  )
}

export default product2