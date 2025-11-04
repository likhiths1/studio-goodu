import FooterSection from "../components/FooterSection";
import ServicesHeader from "../components/ServicesHeader";
import FeatureBar from "../components/FeatureBar";
import Navbar from "../components/NavbarBlack";
import ExtraContactSection from "../components/ExtraContactSection";
import ResponsiveImage from "../components/ImageBackground";
import ServicesBanner from "../assets/images/services/servicesbanner.png";
import ServicesSection from "../components/ServicesSection";
import ServicesDetailSection from "../components/ServicesDetailSection";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <ServicesHeader />
      <FeatureBar />
      <ServicesSection />
      <ServicesDetailSection />
      <ResponsiveImage src={ServicesBanner} alt="" />
      <ExtraContactSection />
      <FooterSection />
    </>
  );
}