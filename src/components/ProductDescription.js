import React from "react";
import Button from "./Button";

function ProductDescription(props) {
  return (
    <div className={props.className1}>
      <div className={props.className2}>
        <img src={props.src} alt="product image" className="mx-auto my-auto" />
      </div>
      <div className={props.className3}>
        <h3 className="mb-4 text-sm text-deepOrange font-normal uppercase tracking-[10px]">{props.new}</h3>
        <h2 className={props.className4}>{props.productName}</h2>
        <p className="font-medium text-base opacity-50 mb-4 md:px-5 lg:px-0">{props.productDetails}</p>
        <Button className='bg-deepOrange hover:bg-[#FBAF85] text-base font-bold text-white py-2 px-4' onClick={props.onClick}/>
      </div>
    </div>
  );
}

export default ProductDescription;
