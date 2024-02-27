import Image from "next/image";
import OwnerImage from "../Images/owner.png";
import Whatsappicon from "../Images/whatsapp.png";
import Phonecall from "../Images/phone-call.png";
const Aboutowner = () => {
  return (
    <>
      <div className="w-[100%] h-[400px] flex justify-center items-center mt-28">
        <div className="w-[95%] md:w-[90%] lg:w-[80%] xl:w-[70%] h-auto rounded-md">
          <div className="w-auto h-auto flex justify-center items-center -mt-10">
            <div className="w-[150px] h-[150px]  rounded-full">
              <Image
                src={OwnerImage}
                alt="Owner.png"
                className="w-auto h-auto"
              />
            </div>
          </div>
          <p className="text-center pb-6 pl-2 pr-3 md:text-xl mt-3">
            Hello, Im Kishan, the founder and owner of Kishan Electronics Store
            At Kishan Electronics, were dedicated to offering top-notch
            electronics products and exceptional customer service. With years of
            experience in the industry, we strive to provide our customers with
            the latest technology, competitive prices, and personalized
            assistance. Whether youre looking for home appliances, gadgets, or
            accessories, weve got you covered. Welcome to Kishan Electronics,
            where quality meets affordability!
          </p>
          <div className="w-[100%] h-auto mt-7 flex justify-center items-center">
            <a
              href="https://wa.me/+918540969591?text=Welcome to Kishan Electronics Store, your ultimate destination for all things electronic! Dive into a world of innovation and top-notch quality. Explore our wide range of products and experience the difference today.  "
              target="blank"
            >
              <div
                type="button"
                className="flex gap-3 justify-center items-center xl:w-[200px] sm:w-[170px] w-[150px] h-[40px] cursor-pointer text-gray-900  border border-gray-300 focus:outline-none  bg-transparent   font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:text-white dark:border-gray-600  dark:hover:border-gray-600 dark:focus:ring-gray-700 hover:bg-white duration-1000"
              >
                <Image
                  src={Whatsappicon}
                  alt="whatsapp.png"
                  className="w-[25px] h-[25px]"
                />
                <span className="text-black"> Whatsapp</span>
              </div>
            </a>
            <a href="tel:+918540969591">
              <div
                type="button"
                className="flex gap-3 justify-center items-center xl:w-[200px] sm:w-[170px] w-[150px] h-[40px] cursor-pointer text-gray-900 bg-transparent border border-gray-300 focus:outline-none   font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2  dark:text-white dark:border-gray-600  dark:hover:border-gray-600 dark:focus:ring-gray-700 hover:bg-white duration-1000"
              >
                <Image
                  src={Phonecall}
                  alt="whatsapp.png"
                  className="w-[25px] h-[25px]"
                />
                <span className="text-black"> Phone</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutowner;
