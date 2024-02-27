"use client";
import Image from "next/image";
import userMan from "../Images/userman.png";
import UserWoman from "../Images/userwoman.png";
import NextArrow from "../Images/next.png";
import BackArrow from "../Images/back.png";
import { useState } from "react";
const TestimonialHome = () => {
  const [count, setCount] = useState(0);

  const Testimonialdeta = [
    {
      Testimonial:
        "`Kishan Electronics(Bijli ghar) exceeded my expectations with their excellent service and top-notch products. I'm thrilled with my purchase and highly recommend them to everyone.`",
      name: "kunal gupta",
      image: userMan,
    },
    {
      Testimonial:
        "`I had a fantastic experience shopping at Kishan Electronics(Bijali ghar). Their products are of excellent quality, and their service is unmatched. Highly recommended!`",
      name: "Amrita",
      image: UserWoman,
    },
    {
      Testimonial:
        "`Kishan Electronics provides exceptional service and offers a diverse range of high-quality products. I'm extremely satisfied with my purchase and would gladly shop here again!`",
      name: "Abhishek kumar",
      image: userMan,
    },
    {
      Testimonial:
        "`Exceptional service and top-notch products at Kishan Electronics(Bijli ghar). Their dedication to customer satisfaction is commendable. A trustworthy destination for electronics shopping!`",
      name: "Smita kumari",
      image: UserWoman,
    },
    {
      Testimonial:
        "`Kishan Electronics(Bijli ghar) is my preferred choice for electronics shopping. Their diverse range, coupled with excellent service, ensures a delightful experience. Highly recommended for all!`",
      name: "Aman shahu",
      image: userMan,
    },
    {
      Testimonial:
        "`Satisfied with my experience at Kishan Electronics(Bijali ghar). Their range of products and commitment to quality service make them a standout option for electronic purchases!`",
      name: "gautam kumar",
      image: userMan,
    },
    {
      Testimonial:
        "`Kishan Electronics(Bijli ghar) exceeded my expectations with their stellar service and high-quality products. A reliable destination for all electronic needs. Truly satisfied with my shopping experience!`",
      name: "swati",
      image: UserWoman,
    },
    {
      Testimonial:
        "`Impressed with the service and products at Kishan Electronics(Bijli ghar). Their attention to detail and commitment to customer satisfaction set them apart. Highly recommend for a seamless shopping experience!`",
      name: "Ranjan gupta",
      image: userMan,
    },
    {
      Testimonial:
        "`Kishan Electronics(Bijli ghar) offers an impressive array of products, accompanied by top-notch service. Their dedication to customer happiness makes them my go-to destination for electronics shopping!`",
      name: "Anju gupta",
      image: UserWoman,
    },
    {
      Testimonial:
        "`Highly satisfied with my purchases from Kishan Electronics(Bijli ghar). Their focus on quality and customer service is evident in every interaction. A trusted name in the world of electronics retail!`",
      name: "kashish ",
      image: UserWoman,
    },
  ];

  const backkey = () => {
    setCount(count - 1);
    if (count === 0) {
      setCount(0);
    }
  };

  const nextkey = () => {
    setCount(count + 1);
    if (count >= Testimonialdeta.length - 1) {
      setCount(0);
    }
  };

  return (
    <>
      <div className="w-[100%] h-auto  flex flex-col justify-center items-center mt-14">
        <h1 className="text-center font-serif text-2xl xl:text-3xl">
          Testimonial
        </h1>

        <div className="w-[95%] md:w-[600px] md:h-auto md:mb-3 lg:h-auto lg:mb-3 xl:h-auto xl:mb-3 xl:w-[800px] h-auto border mt-11 rounded-md">
          <h1 className="text-center mt-2 text-xl font-serif sm:mt-5 xl:mt-10">
            {Testimonialdeta[count].Testimonial}
          </h1>
          <div className="w-[100%] h-auto flex justify-center items-center">
            <div className="w-auto h-auto flex flex-col justify-center items-center">
              <div className="w-[100px] h-[100px] rounded-full  mt-5">
                <Image
                  src={Testimonialdeta[count].image}
                  width={100}
                  height={100}
                  alt="userman.png"
                />
              </div>
              <h1 className=" font-serif text-xl">
                {Testimonialdeta[count].name}
              </h1>
            </div>
          </div>
        </div>

        <div className="w-[95%] md:w-[600px] xl:w-[800px] h-auto flex gap-2 justify-end mt-3">
          <div
            className="w-[100px] h-[30px] border rounded-md flex justify-center items-center cursor-pointer"
            onClick={() => backkey()}
          >
            <Image src={BackArrow} alt="back.png" className="w-[20px] h-auto" />
          </div>
          <div
            className="w-[100px] h-[30px] border rounded-md flex justify-center items-center cursor-pointer"
            onClick={() => nextkey()}
          >
            <Image src={NextArrow} alt="next.png" className="w-[20px] h-auto" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialHome;
