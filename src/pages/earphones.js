import React from 'react'
import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageTitle from "@/components/PageTitle";
import ProductDescription from "@/components/ProductDescription";
import { useRouter } from 'next/router';

function earphones() {
  const router = useRouter()
  return (
    <div className="my-0 mx-auto  box-border">
  <Header />
      <PageTitle title="speakers" />
      <main className=" bg-[#fafafa] px-6 md:px-10 lg:px-24">
        <ProductDescription 
        className1="mb-16 lg:flex lg:gap-[150px] lg:mt-14 "
        className2="py-6 rounded-lg bg-deepGray mb-6 lg:w-3/5 lg:px-6 lg:py-10 "
        className3="text-center lg:w-3/5 lg:text-left lg:self-center "
        className4="uppercase font-bold text-[26px] mb-4 w-[190px] md:text-4xl mx-auto md:w-[250px] lg:mx-0 "
        src="/images/BigEarphone.png"
        onClick={()=>router.push('/yx1-earphone')}
        new="New Product"
        productName="YX1 WIRELESS EARPHONES"
        productDetails="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
        />
        
       
        <Categories />
      </main>
      <Footer />
    </div>
  )
}

export default earphones