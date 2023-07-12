import Categories from "@/components/Categories";
import Earphone1 from "@/components/Earphone1";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeaderContent from "@/components/HeaderContent";
import Speaker1 from "@/components/Speaker1";
import Speaker2 from "@/components/Speaker2";
import React from "react";

function index() {
  return (
    <div className="my-0 mx-auto  box-border">
      <Header />
      <HeaderContent />
      <main className=" bg-[#fafafa] px-6 md:px-10 lg:px-24">
        <Categories />
        <Speaker1 />
        <Speaker2 />
        <Earphone1 />
      </main>
      <Footer />
    </div>
  );
}

export default index;
