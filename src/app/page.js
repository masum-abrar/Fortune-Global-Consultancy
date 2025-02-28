import AboutUs from "@/Components/AboutUs";
import Carousel from "@/Components/Carousel";
import Navbar from "@/Components/Navbar";
import University from "@/Components/University";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
   <div className="">
<Navbar/>
   </div>
   <div className="">
    <Carousel/>
   </div>
   <div>
    <AboutUs/>
   </div>
   <div>
    <University/>
   </div>
    </div>
  );
}
