import Image from "next/image";
import Sallerimage from "../Images/29175194_seller_3.jpg";
const Aboutmoti = () => {
  return (
    <>
      <div className="w-[100%] h-auto flex justify-center mt-16 items-center">
        <div className="w-[95%] h-auto  flex flex-col lg:flex-row gap-2 justify-around items-center">
          <div className="w-[350px] sm:w-[400px] md:w-[600px] lg:w-[500px] xl:w-[600px] h-auto bg-green-200">
            <Image src={Sallerimage} alt="saller.jpg" />
          </div>
          <div className="w-[350px] sm:w-[400px] md:w-[600px] lg:w-[500px] xl:w-[600px] xl:h-[360px]  h-auto">
            <h1 className="text-center xl:text-xl xl:text-left  lg:text-left">
              At <span className="font-bold">Kishan Electronics Store (Bijli ghar)</span>, our passion for technology and
              innovation drives everything we do. We started this venture with a
              simple yet profound goal: to make cutting-edge electronics
              accessible to everyone. Our love for gadgets and our belief in the
              power of technology to enhance lives inspired us to create a space
              where customers can explore, discover, and experience the latest
              innovations firsthand. Were motivated by the opportunity to
              connect people with the products that bring joy, convenience, and
              efficiency to their daily lives. Every day, were driven by the
              satisfaction of knowing that were helping our customers stay
              connected, entertained, and empowered through the latest
              electronics. Welcome to Kishan Electronics, where our passion for
              technology fuels our commitment to serving you.{" "}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutmoti;
