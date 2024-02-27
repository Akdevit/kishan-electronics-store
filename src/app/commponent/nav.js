"use client";
import Image from "next/image";
import Icon from "../Images/logo.jpg";
import Menubaar from "../Images/menu.png";
import Link from "next/link";
const Nav = () => {
  const hideMenushow = () => {
    const navitems = document.querySelector(".nav-item");
    navitems.classList.toggle("top-[9%]");
  };

  return (
    <>
      <div className="flex bg-white h-16 items-center justify-center shadow-sm ">
        <div className="w-[95%] h-auto flex items-center justify-between ">
          <Link href="/">
            <div className="w-auto h-auto flex items-center">
              <Image
                className="h-12 w-20 cursor-pointer"
                src={Icon}
                alt="icon.png"
              />
              <h1 className="font-bold text-black text-xl ">
                Kishan Electronic store<span className="text-[16px] font-sans ml-1 text-gray-600">(Bijli ghar)</span>
              </h1>
            </div>
          </Link>

          <div className=" absolute z-10 nav-item duration-500 sm:static  bg-white sm:min-h-fit min-h-[300px] left-0 top-[-100%] sm:w-auto w-full items-center px-5 ">
            <ul className=" flex sm:flex-row flex-col sm:items-center sm:gap-[2vw] gap-8 ">
              <li className="text-black cursor-pointer text-md">
                {" "}
                <Link href="/">Home</Link>
              </li>
              <li className="text-black cursor-pointer text-md ">
                <Link href="/about">About</Link>
              </li>
              <li className="text-black cursor-pointer text-md  ">
                {" "}
                <Link href="/products">Products</Link>
              </li>
              <li className="text-black cursor-pointer text-md ">
                <Link href="/sendorder">Send Order</Link>
              </li>
            </ul>
          </div>
          {/*hame menu button */}
          <div className="w-auto h-auto items-center px-6 sm:hidden">
            <Image
              className=" text-black text-3xl cursor-pointer font-bold"
              onClick={() => hideMenushow()}
              src={Menubaar}
              width={40}
              height={40}
              alt="menubaar.png"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
//https://adityavision.in/
