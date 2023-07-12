import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ThankYou from "@/components/ThankYou";
import Image from "next/image";
import React from "react";

function checkout() {
  return (
    <div className="my-0 mx-auto  box-border">
      <Header />

      <main className=" bg-[#fafafa] px-6 md:px-10 lg:px-24">
        <div className="mt-[20px] md:my-[40px]">
          <button className="font-medium text-base opacity-50 hover:text-deepOrange">
            Go Back
          </button>
        </div>

        <div className=" mt-[30px] lg:flex justify-between">
          <div className=" w-full mb-[50px] lg:w-[750px] bg-white rounded-lg p-[30px]">
            <h3 className="uppercase text-2xl font-bold mb-[30px]">checkout</h3>
            <form action="" method=" " id="form-checkout">
              {/* on error input:border-2 border-[#CD2C2C] label:text-[#CD2C2C] <p>wrong format</p> */}
              <fieldset>
                <legend className="uppercase text-deepOrange font-bold text-base ">
                  Billing Details
                </legend>
                <div className="md:flex justify-between my-[20px]">
                  <label
                    className="font-bold text-sm "
                    htmlFor="form-name"
                  >
                    Name <br />
                    <input
                      name="name"
                      defaultValue={"Alexei Ward"}
                      type="text"
                      id="form-name"
                      className="font-bold mt-[5px] mb-5 text-[14px]   opacity-40 rounded-lg border border-[#CFCFCF] w-full md:w-[309px] h-[56px] p-[15px] focus:outline-none focus:border-deepOrange focus:font-bold focus:opacity-100 focus:text-sm focus:ring-1 focus:ring-deepOrange invalid:border-[#CD2C2C] invalid:text-[#CD2C2C]    focus:invalid:border-[#CD2C2C] focus:invalid:ring-[#CD2C2C]"
                      required
                    />
                  </label>
                  <label
                    className="mt-4 md:mt-0 font-bold text-sm"
                    htmlFor="form-email-address"
                  >
                    Email Address <br />
                    <input
                      name="emailAdd"
                      defaultValue={"alexei@mail.com"}
                      type="email"
                      id="form-email-address"
                      className="font-bold mt-[5px]   text-[14px] opacity-40 rounded-lg border border-[#CFCFCF] w-full md:w-[309px] h-[56px] p-[15px] focus:outline-none focus:border-deepOrange focus:font-bold focus:opacity-100 focus:text-sm focus:ring-1 focus:ring-deepOrange invalid:border-[#CD2C2C] invalid:text-[#CD2C2C]    focus:invalid:border-[#CD2C2C] focus:invalid:ring-[#CD2C2C]"
                      required
                    />
                  </label>
                </div>
                <label className="font-bold text-sm" htmlFor="form-phoneNumber">
                  Phone Number <br />
                  <input
                    name="PhoneNumber"
                    defaultValue={"+1 202-555-0136"}
                    type="text"
                    id="form-phoneNumber"
                    className="font-bold mt-[5px] text-[14px] opacity-40 rounded-lg border border-[#CFCFCF] w-full md:w-[309px] h-[56px] p-[15px] mb-[50px] focus:outline-none focus:border-deepOrange focus:font-bold focus:opacity-100 focus:text-sm focus:ring-1 focus:ring-deepOrange invalid:border-[#CD2C2C] invalid:text-[#CD2C2C]    focus:invalid:border-[#CD2C2C] focus:invalid:ring-[#CD2C2C]"
                    required
                  />
                </label>
              </fieldset>
              <fieldset>
                <legend className="uppercase text-deepOrange font-bold text-base mb-[20px] ">
                  shipping info
                </legend>
                <label className="font-bold text-sm" htmlFor="form-Address">
                  Address <br />
                  <input
                    name="address"
                    defaultValue={"1137 Williams Avenue"}
                    type="text"
                    id="form-Address"
                    className="font-bold text-[14px] opacity-40 rounded-lg border border-[#CFCFCF] w-[100%] h-[56px] focus:outline-none focus:border-deepOrange focus:font-bold focus:opacity-100 focus:text-sm focus:ring-1 focus:ring-deepOrange invalid:border-[#CD2C2C] invalid:text-[#CD2C2C]    focus:invalid:border-[#CD2C2C] focus:invalid:ring-[#CD2C2C] mt-[5px] p-[15px]"
                    required
                  />
                </label>
                <div className="md:flex justify-between mt-[20px] mb-[10px]">
                  <label className="font-bold text-sm " htmlFor="form-ZipCode">
                    ZIP Code
                    <br />
                    <input
                      name="zipCode"
                      defaultValue={"10001"}
                      type="text"
                      id="form-ZipCode"
                      className="font-bold text-[14px] mb-5 opacity-40 rounded-lg border border-[#CFCFCF] w-full md:w-[309px] h-[56px] focus:outline-none focus:border-deepOrange focus:font-bold focus:opacity-100 focus:text-sm focus:ring-1 focus:ring-deepOrange invalid:border-[#CD2C2C] invalid:text-[#CD2C2C]    focus:invalid:border-[#CD2C2C] focus:invalid:ring-[#CD2C2C] mt-[5px] p-[15px]"
                      required
                    />
                  </label>
                  <label className="font-bold text-sm" htmlFor="form-cityName">
                    City <br />
                    <input
                      name="city"
                      defaultValue={"New York"}
                      type="text"
                      id="form-cityName"
                      className="font-bold text-[14px] mb-3 opacity-40 rounded-lg border border-[#CFCFCF] w-full md:w-[309px] h-[56px] focus:outline-none focus:border-deepOrange focus:font-bold focus:opacity-100 focus:text-sm focus:ring-1 focus:ring-deepOrange invalid:border-[#CD2C2C] invalid:text-[#CD2C2C]    focus:invalid:border-[#CD2C2C] focus:invalid:ring-[#CD2C2C] mt-[5px] p-[15px]"
                      required
                    />
                  </label>
                </div>
                <label
                  className="font-bold text-sm mt-[10px]"
                  htmlFor="form-Country"
                >
                  Country <br />
                  <input
                    name="country"
                    defaultValue={"United States"}
                    type="text"
                    id="form-Country"
                    className="font-bold text-[14px] opacity-40 rounded-lg border border-[#CFCFCF] w-full md:w-[309px] h-[56px] focus:outline-none focus:border-deepOrange focus:font-bold focus:opacity-100 focus:text-sm focus:ring-1 focus:ring-deepOrange invalid:border-[#CD2C2C] invalid:text-[#CD2C2C]    focus:invalid:border-[#CD2C2C] focus:invalid:ring-[#CD2C2C] mt-[5px] p-[15px] mb-[40px]"
                    required
                  />
                </label>
              </fieldset>
              <fieldset>
                <legend className="uppercase text-deepOrange font-bold text-base mb-[20px]">
                  payment details
                </legend>
                <div className="md:flex justify-between mb-[30px]">
                  <label className="font-bold text-sm">Payment Method</label>
                  <div className=" mt-3 md:mt-0">
                    <li className="w-full md:w-[309px] h-[56px] font-bold text-[14px] p-[15px] rounded-lg border border-[#CFCFCF] mb-[15px] lg:ml-[15px] hover:outline-none hover:border-deepOrange  hover:opacity-100 hover:ring-1 hover:ring-deepOrange  ">
                      <input
                        type="radio"
                        name="payment-option"
                        className="h-[15px] w-[15px] border default:border-[#CFCFCF]  checked:bg-deepOrange appearance-none mr-4 rounded-full"
                        // defaultValue={"e-Money"}
                        defaultChecked
                      />
                      e-Money
                    </li>
                    <li className="w-full md:w-[309px] h-[56px] font-bold text-[14px] rounded-lg border border-[#CFCFCF] p-[15px]  lg:ml-[15px] hover:border-deepOrange  hover:opacity-100 hover:ring-1 hover:ring-deepOrange ">
                      <input
                        type="radio"
                        name="payment-option"
                        className="h-[15px] w-[15px] border border-[#CFCFCF] checked:bg-deepOrange appearance-none mr-4 rounded-full"
                        // defaultValue={"Cash on Delivery"}
                      />
                      Cash on Delivery
                    </li>
                  </div>
                </div>
                <div className="md:flex justify-between">
                  <label
                    className="font-bold text-sm"
                    htmlFor="form-e-MoneyNumber"
                  >
                    e-Money Number <br />
                    <input
                      name="e-money-number"
                      defaultValue={"238521993"}
                      type="text"
                      id="form-e-MoneyNumber"
                      className="font-bold text-[14px] mb-2 opacity-40 rounded-lg border border-[#CFCFCF] w-full md:w-[309px] h-[56px] focus:outline-none focus:border-deepOrange focus:font-bold focus:opacity-100 focus:text-sm focus:ring-1 focus:ring-deepOrange invalid:border-[#CD2C2C] invalid:text-[#CD2C2C]    focus:invalid:border-[#CD2C2C] focus:invalid:ring-[#CD2C2C] mt-[5px] p-[15px]"
                      required
                    />
                  </label>
                  <label
                    className="font-bold text-sm"
                    htmlFor="form-e-MoneyPIN"
                  >
                    e-Money PIN <br />
                    <input
                      name="eMoneyPIN"
                      defaultValue={"6891"}
                      type="text"
                      id="form-e-Money PIN"
                      className="font-bold text-[14px] opacity-40 rounded-lg border border-[#CFCFCF] w-full md:w-[309px] h-[56px] focus:outline-none focus:border-deepOrange focus:font-bold focus:opacity-100 focus:text-sm focus:ring-1 focus:ring-deepOrange invalid:border-[#CD2C2C] invalid:text-[#CD2C2C]    focus:invalid:border-[#CD2C2C] focus:invalid:ring-[#CD2C2C] mt-[5px] p-[15px]"
                      required
                    />
                  </label>
                </div>
                <div className="flex justify-between">
                  <img src="/images/Shape.png" className="w-auto h-auto" />
                  <p className="font-medium text-[15px] opacity-50 px-4">
                    The ‘Cash on Delivery’ option enables you to pay in cash
                    when our delivery courier arrives at your residence. Just
                    make sure your address is correct so that your order will
                    not be cancelled.
                  </p>
                </div>
              </fieldset>
            </form>
          </div>

          <div className="w-full lg:w-[350px] lg:h-[600px] mb-[50px] bg-white rounded-lg p-[30px]">
            <h3 className="uppercase text-lg font-bold mb-[30px]">summary</h3>
            <ul>
              {/* this should be a card displayin the items selected for purchase */}
              <li className="flex justify-between  mb-[20px]">
                <div className="flex gap-[10px] ">
                  <div className="bg-deepGray rounded-lg  w-[64px] h-[64px] pl-[13px] pt-[12px] ">
                    <Image
                      src="/images/blackset.png"
                      alt="image"
                      height={40}
                      width={36}
                    />
                  </div>
                  <div className="font-bold self-center">
                    <p className=" text-base ">XX99 MK II</p>
                    <p className="text-[15px] opacity-50">$ 2,999</p>
                  </div>
                </div>
                <p className="opacity-50 text-base font-bold self-center">x1</p>
              </li>
              <li className="flex justify-between  mb-[20px]">
                <div className="flex gap-[10px] ">
                  <div className="bg-deepGray rounded-lg  w-[64px] h-[64px] pl-[13px] pt-[12px] ">
                    <Image
                      src="/images/whiteSet.png"
                      alt="image"
                      height={40}
                      width={36}
                    />
                  </div>
                  <div className="font-bold self-center">
                    <p className=" text-base ">XX59</p>
                    <p className="text-[15px] opacity-50">$ 899</p>
                  </div>
                </div>
                <p className="opacity-50 text-base font-bold  self-center">
                  x2
                </p>
              </li>
              <li className="flex justify-between  mb-[20px]">
                <div className="flex gap-[10px]">
                  <div className="bg-deepGray rounded-lg  w-[64px] h-[64px] pl-[13px] pt-[12px] ">
                    <Image
                      src="/images/BigEarphone.png"
                      alt="image"
                      height={40}
                      width={36}
                    />
                  </div>
                  <div className="font-bold self-center">
                    <p className=" text-base ">YX1</p>
                    <p className="text-[15px] opacity-50">$ 599</p>
                  </div>
                </div>
                <p className="opacity-50 text-base font-bold  self-center">
                  x1
                </p>
              </li>
            </ul>
            <ul>
              <li className="flex justify-between mb-[15px]">
                <p className="opacity-50  font-medium text-base uppercase">
                  TOTAL
                </p>
                <p className="text-lg font-bold">$ 5,396</p>
              </li>
              <li className="flex justify-between mb-[15px]">
                <p className="opacity-50  font-medium text-base uppercase">
                  shipping
                </p>
                <p className="text-lg font-bold">$ 50</p>
              </li>
              <li className="flex justify-between mb-[15px]">
                <p className="opacity-50  font-medium text-base uppercase">
                  VAT (INCLUDED)
                </p>
                <p className="text-lg font-bold">$ 1,079</p>
              </li>
              <li className="flex justify-between mt-[10px]">
                <p className="opacity-50  font-medium text-base uppercase">
                  GRAND TOTAL
                </p>
                <p className="text-lg font-bold text-deepOrange">$ 5,446</p>
              </li>
            </ul>
            <button className="font-bold text-white hover:bg-[#FBAF85] text-sm text-center w-[100%] h-[48px] bg-deepOrange mt-3">
              CONTINUE & PAY
            </button>
          </div>
        </div>
      </main>
      <Footer />
       <ThankYou />
    </div>
  );
}

export default checkout;
