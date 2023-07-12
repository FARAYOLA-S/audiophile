import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageTitle from "@/components/PageTitle";
import ProductDescription from "@/components/ProductDescription";
import { useRouter } from "next/router";
import React from "react";

function headphones() {
  const router = useRouter()
  return (
    <div className="my-0 mx-auto  box-border">
      <Header />
      <PageTitle title="headphones" />
      <main className=" bg-[#fafafa] px-6 md:px-10 lg:px-24">
        <ProductDescription 
        className1="mb-16 lg:flex lg:gap-[150px] lg:mt-14 "
        className2="py-6 rounded-lg bg-deepGray mb-6 lg:w-3/5 lg:px-6 lg:py-10 "
        className3="text-center lg:w-3/5 lg:text-left lg:self-center "
        className4="uppercase font-bold text-[26px] mb-4 w-[190px] md:text-4xl mx-auto md:w-[250px] lg:mx-0 "
        src="/images/blackset.png"
        new="New Product"
        productName="XX99 Mark II headphone"
        onClick={()=>router.push('/xx99-Mark-II-headphone')}
        productDetails="The new
        XX99 Mark II headphones is the pinnacle of pristine audio. It redefines
        your premium headphone experience by reproducing the balanced depth and
        precision of studio-quality sound."
        />
          <ProductDescription 
           className1="mb-16 lg:flex lg:gap-[150px] lg:mt-14"
           className2="py-6 rounded-lg bg-deepGray mb-6 lg:order-last lg:w-3/5 lg:px-8 lg:py-10 "
           className3="text-center lg:w-3/5 lg:text-left lg:self-center"
           className4="uppercase font-bold text-[26px] mb-4 w-[190px] md:text-4xl mx-auto md:w-[250px] lg:mx-0 "
        src="/images/goldHeadset.png"  
        onClick={()=>router.push('/xx99-Mark-I-headphone')}
        productName="XX99 Mark I Headphones"
        productDetails="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
        />
          <ProductDescription 
           className1="mb-16 lg:flex lg:gap-[150px] lg:mt-14 "
           className2="py-6 rounded-lg bg-deepGray mb-6  lg:w-3/5 lg:px-6 lg:py-10 "
           className3="text-center lg:w-3/5 lg:text-left lg:self-center "
           className4="uppercase font-bold text-[26px] mb-4 w-[190px] md:text-4xl mx-auto md:w-[250px] lg:mx-0 "
        src="/images/whiteSet.png"  
        productName="XX59 Headphones"
        onClick={()=>router.push('/xx59-headphone')}
        productDetails="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
        />
        <Categories />
      </main>
      <Footer />
    </div>
  );
}

export default headphones;
