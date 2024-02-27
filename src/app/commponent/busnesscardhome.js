"use client";
import Image from "next/image";
import busscard from "../Images/bussCard.png";
const busnesscardhome = () => {
  const downloder = () => {
    const link = document.createElement("a");
    link.href = busscard.src;
    link.download = "business-Card.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="w-[100%] h-auto flex justify-center items-center mt-8">
        <div className="w-[90%]  h-auto  flex flex-col md:gap-4 sm:gap-4 gap-4 lg:flex-row xl:justify-around items-center bg-blue-50">
          <div className="w-[95%] lg:w-[500px] h-auto  flex justify-center items-center">
            <Image
              src={busscard}
              alt="busnesscard.png"
              className="w-auto h-[200px] xl:h-[250px] sm:h-[250px] rounded-md mt-2 xl:mt-0 md:mt-0 lg:mt-0"
            />
          </div>
          <div className="w-[95%] xl:w-[450px] sm:w-[450px] h-auto lg:h-auto xl:h-auto ">
            <h1 className="font-sans text-3xl ">Business card</h1>
            <p className="mt-4">
              Welcome to Kishan Electronics Store, your destination for
              cutting-edge technology at unbeatable prices! Discover a vast
              selection of electronics and accessories, including stand fans,
              heaters, remotes, testers, bulbs, fuses, and more. Visit us
              in-store for expert advice and exclusive deals. Download our
              business card below and get in touch today!
            </p>
            <button
              className="w-[200px] h-[40px] border  bg-black text-white rounded-md hover:bg-white hover:text-black hover:border mt-10 duration-1000"
              onClick={() => downloder()}
            >
              {" "}
              <a href={busscard} download>
                Download
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default busnesscardhome;
