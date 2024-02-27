import Image from "next/image";
import Surya from "../Images/surya.png";
import Toofan from "../Images/toofan.png";
import Ultra from "../Images/ultra.jpeg";
import Prakash from "../Images/prakash.png";
import cromption from "../Images/crompton.png";
import Flips from "../Images/flips.png";
import Usha from "../Images/usha.png"
import Greatwhite from "../Images/GreatWhite.png"
const OurBrandHome = () => {
  return (
    <>
      <div className="w-[100%] h-auto flex flex-col justify-center items-center mt-10">
        <h1 className="text-center text-3xl  font-serif ">Our Brands</h1>
        <div className=" brands w-[95%] h-auto flex flex-col justify-between items-center mt-4">
          <Image src={Surya} alt="Surya.png" className="w-[150px] h-auto " />
          <Image src={Toofan} alt="Toofan.png" className="w-[150px] h-auto " />
          <Image src={Ultra} alt="Ultra.jpeg" className="w-[150px] h-auto " />
          <Image src={Prakash} alt="Prakash.png" className="w-[150px] h-auto " />
          <Image src={cromption} alt="cromption.png" className="w-[150px] h-auto" />
          <Image src={Flips} alt="Flips.png" className="w-[150px] h-auto " />
          <Image src={Usha} alt="Usha.png" className="w-[150px] h-auto " />
          <Image src={Greatwhite} alt="Greatwhite.png" className="w-[150px] h-auto " />
        </div>
      </div>
    </>
  );
};

export default OurBrandHome;
