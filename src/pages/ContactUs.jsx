import ContactUsHeader from "../components/ContactUsHeader";
import FooterSection from "../components/FooterSection";
import Navbar from "../components/NavbarBlack";
import FeatureBar from "../components/FeatureBar";
import ContactUsSection from "../components/ContactUsSection";
import ResponsiveImage from "../components/ImageBackground";
import backImage from "../assets/images/contactuspage/back1.png";

export default function ContactUs() {
  return (
    <>
      <Navbar />
      <ContactUsHeader />
      <FeatureBar />
      <ContactUsSection />
      <ResponsiveImage src={backImage}></ResponsiveImage>
      <FooterSection />
      {/* ... */}
    </>
  );
}
