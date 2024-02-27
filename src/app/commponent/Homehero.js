import Image from "next/image";
import Whatsappicon from "../Images/whatsapp.png";
import Phonecall from "../Images/phone-call.png";
import AboutHeroImage from "../Images/abouthero.jpg";

const Homehero = () => {
  return (
    <>
      <div className="w-[100%] h-auto  flex justify-center items-center mt-4">
        <div className="xl:h-[500px] rounded-md w-[95%] h-[400px] bg-gray-300 overflow-hidden flex justify-center items-center">
          <Image
            src={AboutHeroImage}
            alt="hero-banner.jpg"
            className="w-[100%] h-[400px] xl:h-[500px]"
          />
          <div className="absolute xl:w-[80%] lg:w-[80%] md:w-[80%] sm:w-[80%] w-[90%] h-auto">
            <h1 className="xl:text-6xl font-bold text-2xl font-sans text-center sm:text-4xl md:text-5xl text-white">
              Discover top-quality electronics for every need. Elevate your
              space with our innovative solutions.
            </h1>
            <p className="xl:text-lg text-center font-sans text-white  lg:mt-3">
              Welcome to{" "}
              <span className="font-bold">Kishan Electronic store (Bijli ghar)</span> , your
              one-stop destination for all your electrical needs! Explore our
              extensive range of high-quality fans, heaters, bulbs, wires, and
              more. Transform your space with cutting-edge technology and
              superior performance. Experience comfort and innovation like never
              before with{" "}
              <span className="font-bold">Kishan Electronic store</span> .
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
                  Whatsapp
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
                  Phone
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homehero;

