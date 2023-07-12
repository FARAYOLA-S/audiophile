import React from 'react'
import Cart from "@/components/Cart";
import { useRouter } from 'next/router';


function product4() {
  const router=useRouter()
  return (
    <div className="my-0 mx-auto  box-border">
    <Cart
    img1="/images/BigSpeaker.png"
        handleClick={()=>router.push('/speakers')}
    content1="NEW PRODUCT"
        content2="ZX9 SPEAKER"
        content3="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
        price="$ 4,500"
        
      description1="Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).

 "
      description2=" Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms."
      quantity1="2x"
      detail1="Speaker Unit"
      quantity2="2x"
      detail2="Speaker Cloth Panel"
      quantity3="1x"
      detail3="User Manual"
      quantity4="1x"
      detail4="3.5mm 10m Audio Cable"
      quantity5="1x"
      detail5="10m Optical Cable"
      img2="/images/pic7.png"
      img3="/images/pic8.png"
      img4="/images/pic9.png"
    />
  </div>
  )
}

export default product4