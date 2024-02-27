"use client";
import Image from "next/image";
import InstagramImage from "../Images/instagram.png";
import LinkedinImage from "../Images/linkedin.png";
const Footer = () => {
  return (
    <>
      <div className="w-[100%] h-auto bg-[#EFF6FF] flex flex-col justify-center items-center mt-12">
        <h1 className="text-center font-serif text-3xl mt-4">
          Kishan Electronics store (Bijali ghar)
        </h1>
        <div className="w-[95%] h-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-20  gap-6 justify-items-center">
          <div className="w-[350px] sm:w-[300px] h-[200px] ">
            <p className="text-center font-sans text-xl font-bold">
              Business <span className="text-green-600 font-bold">Open</span>
            </p>
            <p className="text-center">
              Monday-<span className="text-green-800 font-bold">10:00AM</span>-
              <span className="text-red-800 font-bold">10:00PM</span>
            </p>
            <p className="text-center">
              Tuesday-<span className="text-green-800 font-bold">10:00AM</span>-
              <span className="text-red-800 font-bold">10:00PM</span>
            </p>
            <p className="text-center">
              Wednesday-
              <span className="text-green-800 font-bold">10:00AM</span>-
              <span className="text-red-800 font-bold">10:00PM</span>
            </p>
            <p className="text-center">
              Thursday-<span className="text-green-800 font-bold">10:00AM</span>
              -<span className="text-red-800 font-bold">10:00PM</span>
            </p>
            <p className="text-center">
              Friday-<span className="text-green-800 font-bold">10:00AM</span>-
              <span className="text-red-800 font-bold">10:00PM</span>
            </p>
            <p className="text-center">
              Saturday-<span className="text-green-800 font-bold">10:00AM</span>
              -<span className="text-red-800 font-bold">10:00PM</span>
            </p>
            <p className="text-center">
              Sunday-<span className="text-green-800 font-bold">10:00AM</span>-
              <span className="text-red-800 font-bold">10:00PM</span>
            </p>
          </div>
          <div className="w-[350px] sm:w-[300px] h-auto ">
            <p className="text-center font-sans text-xl font-bold">
              Payment Methoods
            </p>
            <p className="text-center font-sans ">Online</p>
            <p className="text-center font-sans ">Cash</p>
          </div>

          <div className="w-[350px] sm:w-[300px] h-auto grid justify-items-center gap-3 ">
            <p className="text-center font-sans text-xl font-bold">
              Contact developer
            </p>
            <div className="w-auto h-auto grid justify-items-center cursor-pointer">
              <a
                href="https://www.instagram.com/developer_website3?igsh=MTJhZ2Y3N2h4d2prcw=="
                target="blank"
              >
                <Image
                  src={InstagramImage}
                  alt="insdtagram.png"
                  className="w-[30px] h-auto"
                />
              </a>
              <p className="text-center font-sans ">Instagram</p>
            </div>
            <div className="w-auto h-auto grid justify-items-center cursor-pointer mb-4 ">
              <a
                href="https://www.linkedin.com/in/abhishek-kumar-123a492a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="blank"
              >
                <Image
                  src={LinkedinImage}
                  alt="insdtagram.png"
                  className="w-[30px] h-auto"
                />
              </a>
              <p className="text-center font-sans ">Linkedin</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
