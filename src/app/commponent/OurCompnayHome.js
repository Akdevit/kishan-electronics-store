import Image from "next/image";
import Mission from "../Images/mission_original21.jpg";
import Minstone from "../Images/milestones_orig.jpg";
import People from "../Images/people_orig.jpg";
const OurCompnayHome = () => {
  return (
    <>
      <div className="w-[100%] h-auto flex flex-col justify-center items-center mt-16">
        <h1 className="text-center text-3xl  font-serif ">Our Company</h1>
        <div className="w-[95%] h-auto mt-7 company ">
          <div className="w-[270px] h-auto bg-white rounded-md border">
            <div className="w-auto h-[200px] flex flex-col justify-center items-center">
              <Image src={Mission} alt="mission.jpg" />
              <h1 className="text-2xl font-serif mt-5">Mission</h1>
            </div>
            <h1 className="text-center pr-3 pl-3">
              Kishan Electronics Store aims to deliver top-quality products at
              unmatched prices, catering to the diverse needs of our customers.
              Were committed to providing exceptional service and value to every
              shopper.
            </h1>
          </div>

          <div className="w-[270px] h-auto bg-white rounded-md border">
            <div className="w-auto h-[200px] flex flex-col justify-center items-center">
              <Image src={Minstone} alt="mission.jpg" />
              <h1 className="text-2xl font-serif mt-5">Milestone</h1>
            </div>
            <h1 className="text-center pr-3 pl-3">
              Kishan Electronics Store celebrates each milestone with gratitude,
              reflecting our dedication to serving customers with excellence.
              With every achievement, we reaffirm our commitment to delivering
              superior products and service to our community.
            </h1>
          </div>

          <div className="w-[270px] h-auto bg-white rounded-md border">
            <div className="w-auto h-[200px] flex flex-col justify-center items-center">
              <Image src={People} alt="mission.jpg" />
              <h1 className="text-2xl font-serif mt-5">People</h1>
            </div>
            <h1 className="text-center pr-3 pl-3">
              At Kishan Electronics Store, customer satisfaction reigns supreme.
              We prioritize fulfilling every need and exceeding expectations.
              With our unwavering commitment, we ensure unparalleled service and
              products tailored to each customers delight.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurCompnayHome;
