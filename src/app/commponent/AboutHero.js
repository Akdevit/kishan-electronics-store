import React from "react";
import Image from "next/image";
import BannerHero from "../Images/homeHeroBanner.jpg";

const AboutHero = () => {
  return (
    <>
      <div className="w-[100%] h-auto  flex justify-center items-center mt-4">
        <div className="xl:h-[500px] rounded-md w-[95%] h-[400px] bg-gray-300 overflow-hidden flex justify-center items-center">
          <Image
            src={BannerHero}
            alt="about-hero.jpg"
            className="w-[100%] h-[400px] xl:h-[500px]"
          />
          <div className="absolute xl:w-[80%] lg:w-[80%] md:w-[80%] sm:w-[80%] w-[90%] h-auto ">
            <h1 className="xl:text-6xl font-bold text-2xl font-sans text-center sm:text-4xl md:text-5xl text-white">
              Welcome to Kishan Electronics Store (Bijli Ghar)!
            </h1>
            <p className="xl:text-lg text-center font-sans text-white  lg:mt-3">
              Were thrilled to have you here. Step into a world of cutting-edge
              technology, exceptional service, and unbeatable deals. Whether
              youre a tech enthusiast, a home gadget guru, or simply looking to
              upgrade your electronics, youve come to the right place. Explore
              our wide selection of high-quality products and let us help you
              find exactly what you need. At Kishan Electronics, were committed
              to providing you with an unparalleled shopping experience. Thank
              you for choosing us as your go-to destination for all things
              electronics!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHero;
