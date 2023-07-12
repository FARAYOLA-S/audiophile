import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Categories from "./Categories";
import Favourite from "./Favourite";
import ProductGallery from "./ProductGallery";
import Features from "./Features";
import ProductPrice from "./ProductPrice";

function Cart(props) {
  return (
    <div className="my-0 mx-auto bg-lightGray box-border">
      <Header />
      <main className=" bg-[#fafafa] px-6 md:px-10 lg:px-24">
        <div className="my-[20px] md:my-[40px]">
          <button className="font-medium text-base opacity-50 hover:text-deepOrange" onClick={props.handleClick}>
            Go Back
          </button>
        
        </div>
        <ProductPrice
        img1={props.img1}
         content1={props.content1}
         content2={props.content2}
         content3={props.content3}
         price={props.price}
         number={props.number}
        
        />
        <Features 
          description1={props.description1}
          description2={props.description2}
          quantity1={props.quantity1}
          detail1={props.detail1}
          quantity2={props.quantity2}
          detail2={props.detail2}
          quantity3={props.quantity3}
          detail3={props.detail3}
          quantity4={props.quantity4}
          detail4={props.detail4}
          quantity5={props.quantity5}
          detail5={props.detail5}/>
        <ProductGallery
          src={props.img2} 
          src2={props.img3} 
          src3={props.img4}
        />
        <Favourite />
        <Categories />
      </main>
      <Footer />
    </div>
  );
}

export default Cart;
