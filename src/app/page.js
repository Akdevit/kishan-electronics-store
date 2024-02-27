import Homehero from "./commponent/Homehero";
import OurBrandHome from "./commponent/OurBrandHome";
import OurCompnayHome from "./commponent/OurCompnayHome";
import OurServiceshome from "./commponent/OurServiceshome";
import ProductsHome from "./commponent/ProductsHome";
import TestimonialHome from "./commponent/TestimonialHome";
import Busnesscardhome from "./commponent/busnesscardhome";
import Footer from "./commponent/Footer";
import Map from "./commponent/Map";
export default function Home() {
  return (
    <>
      <Homehero />
      <OurBrandHome />
      <OurCompnayHome />
      <OurServiceshome />
      <ProductsHome />
      <TestimonialHome/>
      <Busnesscardhome />
      <Map/>
      <Footer/>
    </>
  );
}
