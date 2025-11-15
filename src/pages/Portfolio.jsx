import PortfolioHeader from "../components/PortfolioHeader";
import FooterSection from "../components/FooterSection";
import Navbar from "../components/NavbarBlack";
import FeatureBar from "../components/FeatureBar";
import PortfolioGallery from "../components/PortfolioGallery";
import ValueSection from "../components/ValueSection";
import MoreProjectsSection from "../components/MoreProjectsSection";
import { AnimatedSection } from "../components/AnimatedSection";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <AnimatedSection>
        <PortfolioHeader />
      </AnimatedSection>
      <AnimatedSection>
        <FeatureBar />
      </AnimatedSection>
      <AnimatedSection>
        <PortfolioGallery />
      </AnimatedSection>
      <AnimatedSection>
        <ValueSection />
      </AnimatedSection>
      <AnimatedSection>
        <MoreProjectsSection />
      </AnimatedSection>
      <FooterSection />
      {/* ... */}
    </>
  );
}
