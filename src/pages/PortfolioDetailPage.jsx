import PortfolioHeader from "../components/PortfolioHeader";
import FooterSection from "../components/FooterSection";
import Navbar from "../components/NavbarBlack";
import FeatureBar from "../components/FeatureBar";
import ExtraContactSection from "../components/ExtraContactSection";
import PortfolioDetailSection from "../components/PortfolioDetailSection";
import ResponsiveImageBlack from "../components/ImageBackgroundBlack";
import StartImg from "../assets/images/aboutuspage/banner2.png"
export default function PortfolioDetailPage() {
  return (
    <>
      <Navbar />
      <PortfolioHeader />
      <FeatureBar />
      <PortfolioDetailSection />
      <ResponsiveImageBlack src={StartImg} alt="Portfolio Hero" />
      <ExtraContactSection />
      <FooterSection />
      {/* ... */}
    </>
  );
}
