import Image from "next/image";
import productCons from "../Images/product-cons.png";
import Storepurchase from "../Images/storepurchasing.png";
import wolesale from "../Images/wolesale.png";
import Influencer from "../Images/influencer.png";
const OurServiceshome = () => {
  return (
    <>
      <div className="w-[100%] h-auto flex flex-col justify-center items-center mt-16">
        <h1 className="text-center text-3xl  font-serif ">Our services </h1>
        <div className="w-[95%] h-auto mt-7 company ">
          <div className="w-[270px] h-auto bg-white rounded-md border">
            <div className="w-auto h-[200px] flex flex-col justify-center items-center">
              <Image
                src={productCons}
                alt="mission.jpg"
                className="w-[100px] h-auto"
              />
              <h1 className="text-xl font-serif mt-5 text-center">
                Personalized Product Consultation
              </h1>
            </div>
            <h1 className="text-center pr-3 pl-3 ">
              Our owner-operated electronic store offers personalized product
              consultations tailored to your needs. Benefit from expert advice
              and recommendations on both single and multi-products for retail
              and wholesale customers.
            </h1>
          </div>

          <div className="w-[270px] h-auto bg-white rounded-md border">
            <div className="w-auto h-[200px] flex flex-col justify-center items-center">
              <Image
                src={Storepurchase}
                alt="mission.jpg"
                className="w-[100px] h-auto"
              />
              <h1 className="text-xl font-serif mt-5 text-center">
                {" "}
                In-Store Purchases
              </h1>
            </div>
            <h1 className="text-center pr-3 pl-3 ">
              Explore our extensive inventory of electronics and accessories in
              person at our store. Our owner will assist you in finding the
              right products, whether for personal use or bulk purchases for
              wholesale purposes.
            </h1>
          </div>

          <div className="w-[270px] h-auto bg-white rounded-md border">
            <div className="w-auto h-[200px] flex flex-col justify-center items-center">
              <Image
                src={wolesale}
                alt="mission.jpg"
                className="w-[100px] h-auto"
              />
              <h1 className="text-xl font-serif mt-5 text-center">
                {" "}
                Retail & Wholesale Availability
              </h1>
            </div>
            <h1 className="text-center pr-3 pl-3 ">
              Enjoy the flexibility of shopping at our store for individual
              purchases or sourcing products for wholesale distribution. Our
              owner is committed to providing competitive pricing and
              personalized service for all customers.
            </h1>
          </div>
          <div className="w-[270px] h-auto bg-white rounded-md border">
            <div className="w-auto h-[200px] flex flex-col justify-center items-center">
              <Image
                src={Influencer}
                alt="mission.jpg"
                className="w-[100px] h-auto"
              />
              <h1 className="text-xl font-serif mt-5 text-center">
                {" "}
                personalized support and advice
              </h1>
            </div>
            <h1 className="text-center pr-3 pl-3 ">
              As a customer of our owner-operated store, youll receive
              personalized support and advice tailored to your specific needs.
              Whether you have questions about product features or need
              assistance with troubleshooting, our owner is here to help.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServiceshome;
