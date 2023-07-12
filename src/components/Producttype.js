import { FaCaretRight } from "react-icons/fa";

const Producttype = (props) => {
  return (
    <div className=" rounded-lg bg-deepGray md:px-12 lg:px-16">
      <div className="h-[170px] ">
        <img
          src={props.src}
          alt={props.productTitle}
          width={120}
          height={160}
          className=" mx-auto mt-[-65px]"
        />
      </div>
      <div className="text-center mb-8">
        <p className="font-bold text-lg mb-2 uppercase">{props.productTitle}</p>
        <button className=" relative uppercase opacity-50 font-bold text-sm  hover:text-deepOrange" onClick={props.onClick}>
          Shop
          <FaCaretRight className="absolute top-[2px] left-11 text-base opacity-100 text-deepOrange" />
        </button>
      </div>
    </div>
  );
};

export default Producttype;
