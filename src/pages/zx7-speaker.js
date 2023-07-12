import React from 'react'
import Cart from "@/components/Cart";
import { useRouter } from 'next/router';


function product5() {
  const router=useRouter()
  return (
    <div className="my-0 mx-auto  box-border">
    <Cart
    img1="/images/blackSpeaker.png"
     
    handleClick={()=>router.push('/speakers')}
      description1="Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage. "
      description2="  The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience."
      content2="ZX7 SPEAKER"
      content3="Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use. "
      price="$ 3,500"
   
      quantity1="2x"
      detail1="Speaker Unit"
      quantity2="2x"
      detail2="Speaker Cloth Panel"
      quantity3="1x"
      detail3="User Manual"
      quantity4="1x"
      detail4="3.5mm 7.5m Audio Cable"
      quantity5="1x"
      detail5="7.5m Optical Cable"
      img2="/images/pic10.png"
      img3="/images/pic11.png"
      img4="/images/pic12.png"
    />
  </div>
  )
}

export default product5