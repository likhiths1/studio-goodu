import ContactUsHeader from "../components/ContactUsHeader";
import FooterSection from "../components/FooterSection";
import Navbar from "../components/NavbarBlack";
import FeatureBar from "../components/FeatureBar";
import ContactUsSection from "../components/ContactUsSection";
import ResponsiveImage from "../components/ImageBackground";
import backImage from "../assets/images/contactuspage/back1.png";
import { AnimatedSection } from "../components/AnimatedSection";

export default function ContactUs() {
  return (
    <>
      <Navbar />
      <ContactUsHeader />
      <AnimatedSection>
        <FeatureBar />
      </AnimatedSection>
      <ContactUsSection />
      <AnimatedSection>
        <ResponsiveImage src={backImage}></ResponsiveImage>
      </AnimatedSection>
      <FooterSection />
      {/* ... */}
    </>
  );
}
