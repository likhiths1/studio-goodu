import PortfolioHeader from "../components/PortfolioHeader";
import FooterSection from "../components/FooterSection";
import Navbar from "../components/NavbarBlack";
import FeatureBar from "../components/FeatureBar";
import PortfolioGallery from "../components/PortfolioGallery";
import ValueSection from "../components/ValueSection";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <PortfolioHeader />
      <FeatureBar />
      <PortfolioGallery />
      <ValueSection />
      <FooterSection />
      {/* ... */}
    </>
  );
}
