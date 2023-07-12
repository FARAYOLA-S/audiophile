import React from 'react'
import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageTitle from "@/components/PageTitle";
import ProductDescription from "@/components/ProductDescription";
import { useRouter } from 'next/router';


function speakers() {
  const router = useRouter()
  return (
    <div  className="my-0 mx-auto  box-border">
    <Header />
      <PageTitle title="speakers" />
      <main className=" bg-[#fafafa] px-6 md:px-10 lg:px-24">
        <ProductDescription 
        className1="mb-16 lg:flex lg:gap-[150px] lg:mt-14 "
        className2="py-6 rounded-lg bg-deepGray mb-6 lg:w-3/5 lg:px-6 lg:py-10 "
        className3="text-center lg:w-3/5 lg:text-left lg:self-center "
          className4="uppercase font-bold text-[26px] mb-4 w-[190px] md:text-4xl mx-auto md:w-[250px] lg:mx-0 "
        onClick={()=>router.push('/zx9-speaker')}
        
        src="/images/BigSpeaker.png"
        new="New Product"
        productName="ZX9 SPEAKER"
        productDetails="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
        />
          <ProductDescription 
           className1="mb-16 lg:flex lg:gap-[150px] lg:mt-14"
           className2="py-6 rounded-lg bg-deepGray mb-6 lg:order-last lg:w-3/5 lg:px-8 lg:py-10 "
           className3="text-center lg:w-3/5 lg:text-left lg:self-center"
           className4="uppercase font-bold text-[26px] mb-4 w-[190px] md:text-4xl mx-auto md:w-[250px] lg:mx-0 "
           onClick={()=>router.push('/zx7-speaker')}
        src="/images/blackSpeak.png"  
        productName="ZX7 SPEAKER"
        productDetails="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
        />
       
        <Categories />
      </main>
      <Footer />
    </div>
  )
}

export default speakers