import ContactSection from "../components/ContactSection";
import FooterSection from "../components/FooterSection";
import AboutUsHeader from "../components/AboutUsHeader";
import FeatureBar from "../components/FeatureBar";
import AboutAuthorSection from "../components/AboutAuthorSection";
import Navbar from "../components/NavbarBlack";
import MeetTeamSection from "../components/MeetTeamSection";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <AboutUsHeader />
      <FeatureBar />
      <AboutAuthorSection/>
      <MeetTeamSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}