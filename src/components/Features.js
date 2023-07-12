import React from "react";

function Features(props) {
  return (
    <div className="lg:flex gap-[150px] lg:mb-16">
      <div className="lg:w-3/5">
        <h3 className="font-bold text-3xl tracking-[1.2px] mb-5 ">FEATURES</h3>
        <p className="font-medium opacity-50 text-base mb-3">{props.description1}</p>
        <p className="font-medium opacity-50 text-base">{props.description2}</p>
      </div>

      <div className="mt-9 md:flex gap-[150px] md:my-12 lg:block lg:gap-0 lg:mt-0 ">
        <h3 className="font-bold text-3xl tracking-[1.2px] mb-5">
          IN THE BOX
        </h3>
        <ul className=" mb-[50px]">
          <li className="text-deepOrange text-base font-bold  mb-2">
            
            {props.quantity1}
            <span className="font-medium text-base opacity-50 ml-5 text-black">
              {props.detail1}
            </span>
          </li>
          <li className="text-deepOrange text-base font-bold  mb-2">
        
            {props.quantity2}
            <span className="font-medium text-base opacity-50 ml-5 text-black">
              {props.detail2}
            </span>
          </li>
          <li className="text-deepOrange text-base font-bold  mb-2">
            
            {props.quantity3}
            <span className="font-medium text-base opacity-50 ml-5 text-black">
              {props.detail3}
            </span>
          </li>
          <li className="text-deepOrange text-base font-bold  mb-2">
           
            {props.quantity4}
            <span className="font-medium text-base opacity-50 ml-5 text-black">
              {props.detail4}
            </span>
          </li>
          <li className="text-deepOrange text-base font-bold  mb-2">
          
            {props.quantity5}
            <span className="font-medium text-base opacity-50 ml-5 text-black">
              {props.detail5}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Features;
