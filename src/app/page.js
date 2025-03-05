import AboutUs from "@/Components/AboutUs";
import Carousel from "@/Components/Carousel";
import ClientReview from "@/Components/ClientReview";
import ContactUs from "@/Components/ContactUs";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import University from "@/Components/University";
import UniversityPartner from "@/Components/UniversityPartner";
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
 
   <div>
    <ClientReview/>
    </div>
    <div>
    <UniversityPartner/>
   </div>
   <div>
    <ContactUs/>
   </div>
   <div>
    <Footer/>
   </div>
    </div>
  );
}
