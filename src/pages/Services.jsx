import FooterSection from "../components/FooterSection";
import ServicesHeader from "../components/ServicesHeader";
import FeatureBar from "../components/FeatureBar";
import Navbar from "../components/NavbarBlack";
import ExtraContactSection from "../components/ExtraContactSection";
import ResponsiveImage from "../components/ImageBackground";
import ServicesBanner from "../assets/images/services/servicesbanner.png";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <ServicesHeader />
      <FeatureBar />
      <ResponsiveImage src={ServicesBanner} alt="" />
      <ExtraContactSection />
      <FooterSection />
    </>
  );
}