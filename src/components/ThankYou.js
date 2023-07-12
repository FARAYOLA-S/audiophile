import React from 'react'

function ThankYou() {
  return (
    <div className=" fixed w-[100%] h-[100%] left-[0px] top-[0px] bg-black/50 m-0 p-0 {hidden} overflow-y-auto  z-10">
      <div className=" mt-[50px]  md:mt-[200px]  mx-6  md:mx-[110px]  lg:mx-auto p-6  md:p-8  lg:w-[500px]  bg-white rounded-lg ">
        <div className="bg-deepOrange h-[50px] w-[50px] rounded-full relative mb-[25px]">
          <svg
            width="26"
            height="21"
            viewBox="0 0 26 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute  top-[13px] left-[12px]"
          >
            <path
              d="M1.75391 11.3328L8.50542 18.0843L24.3085 2.28125"
              stroke="white"
              stroke-width="4"
            />
          </svg>
        
        </div>
        <h1 className="font-bold text-[24px]  md:text-[30px] ">
        THANK YOU <br/>
FOR YOUR ORDER
        </h1>
        <p className="font-medium font-base opacity-50 my-[25px]">
          You will receive an email confirmation shortly.
        </p>
        <div className="md:flex">
          <div className="w-full px-[30px] py-[20px] w-2/3 rounded-lg bg-[#F1F1F1]">
            <div className="flex justify-between ">
              <div className="flex gap-[15px] lg:gap-[20px]">
              <img src='/images/smallie.png' alt="some image" />
              <div className="font-bold ">
                <p className=" text-base ">XX99 MK II</p>
                <p className="text-[15px] opacity-50">$ 2,999</p>
              </div>
              </div>
             
              <p className="opacity-50 text-base font-bold ">x1</p>
            </div>
            <div className=" border border-black/10 my-[20px]"></div>
            <button className="font-medium opacity-50 text-base ml-[35px] ">
              and 2 other item(s)
            </button>
          </div>
          <div className="bg-black w-full rounded-br-lg rounded-bl-lg w-1/3 py-[30px] pl-[20px]  text-white">
            <p className="font-medium opacity-50 text-base mb-[10px]">
              GRAND TOTAL
            </p>
            <p className="font-bold text-[18px]">$ 5,446</p>
          </div>
        </div>
        <button className="font-bold text-white text-sm text-center w-[100%] h-[48px] mt-[45px] mb-3 bg-deepOrange hover:bg-[#FBAF85]">
          BACK TO HOME
        </button>
      </div>
    </div>
  )
}

export default ThankYou