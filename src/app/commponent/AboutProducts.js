import React from "react";
import Image from "next/image";
import ProductImage from "../Images/12084781_20943930.jpg";
const AboutProducts = () => {
  return (
    <>
      <div className="w-[100%] h-auto flex justify-center mt-16 items-center">
        <div className="w-[95%] h-auto  flex flex-col-reverse lg:flex-row gap-2 justify-around items-center">
          <div className="w-[350px] sm:w-[400px] md:w-[600px] lg:w-[500px] xl:w-[600px] xl:h-[360px]  h-auto">
            <h1 className="text-center xl:text-xl xl:text-left  lg:text-left">
              Welcome to{" "}
              <span className="font-bold">Kishan Electronics Store (Bijli ghar)</span>, where
              we offer an array of cutting-edge products to elevate your daily
              life. From advanced home appliances to the latest gadgets and
              accessories, our curated selection meets the diverse needs of our
              customers. Discover the efficiency of our appliances, the
              innovation of our electronics, and the convenience of our
              accessories—all backed by our commitment to customer satisfaction.
              At Kishan Electronics, we strive to provide seamless shopping
              experiences, competitive prices, and expert guidance to ensure
              your utmost satisfaction. Join us as we redefine the standards of
              excellence in electronics retail. Welcome to a world of
              innovation, affordability, and unparalleled customer service.
            </h1>
          </div>
          <div className="w-[350px] sm:w-[400px] md:w-[600px] lg:w-[500px] xl:w-[600px] h-auto bg-green-200">
            <Image src={ProductImage} alt="saller.jpg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutProducts;
