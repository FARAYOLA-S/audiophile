import { useRouter } from "next/router";
import Producttype from "./Producttype";

const Categories = () => {
  const router = useRouter();
  return (
    <div className="mb-10 mt-[120px] md:mt-[170px] flex flex-col gap-[100px] md:flex-row md:justify-between md:gap-0 lg:mb-16">
      <Producttype
        src="/images/goldHeadset.png"
        productTitle="Headphones"
        style="mt-[-70px]"
        onClick={() => router.push("/headphones")}
      />
      <Producttype
        src="/images/BigSpeaker.png"
        productTitle="Speakers"
        style="mt-[-70px]"
        onClick={() => router.push("/speakers")}
      />
      <Producttype
        src="/images/BigEarphone.png"
        productTitle="Earphones"
        style="mt-[-70px]"
        onClick={() => router.push("/earphones")}
      />
    </div>
  );
};

export default Categories;
