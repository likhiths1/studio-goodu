import ContactUsHeader from "../components/ContactUsHeader";
import FooterSection from "../components/FooterSection";
import Navbar from "../components/NavbarBlack";
import FeatureBar from "../components/FeatureBar";
import ContactUsSection from "../components/ContactUsSection";
import ResponsiveImage from "../components/ImageBackground";
import backImage from "../assets/images/contactback.jpg";
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
      <AnimatedSection className="px-0 py-12 md:py-20">
        <ResponsiveImage src={backImage} />
      </AnimatedSection>
      <FooterSection />
      {/* ... */}
    </>
  );
}
