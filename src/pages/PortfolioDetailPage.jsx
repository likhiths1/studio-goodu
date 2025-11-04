import PortfolioHeader from "../components/PortfolioHeader";
import FooterSection from "../components/FooterSection";
import Navbar from "../components/NavbarBlack";
import FeatureBar from "../components/FeatureBar";
import ExtraContactSection from "../components/ExtraContactSection";
import PortfolioDetailSection from "../components/PortfolioDetailSection";

export default function PortfolioDetailPage() {
  return (
    <>
      <Navbar />
      <PortfolioHeader />
      <FeatureBar />
      <PortfolioDetailSection />
      <ExtraContactSection />
      <FooterSection />
      {/* ... */}
    </>
  );
}
