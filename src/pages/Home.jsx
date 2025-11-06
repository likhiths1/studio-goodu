import HeroSection from "../components/HeroSection";
import OurProcess from "../components/OurProcess";
import OurWorks from "../components/OurWorks";
import StoriesSection from "../components/StoriesSection";
import PricingBannerSection from "../components/PricingBannerSection";
import AboutUsSection from "../components/AboutUsSection";
import BlogsSection from "../components/BlogsSection";
import ContactSection from "../components/ContactSection";
import FooterSection from "../components/FooterSection";
import PricingTable from "../components/PricingTable";


export default function Home({ loading = false }) {
  return (
    <>
      <HeroSection loading={loading} />
      <OurProcess />
      <OurWorks />
      <StoriesSection />
      <PricingBannerSection />
      <AboutUsSection />
      <BlogsSection />
      <ContactSection />
      <FooterSection />
      {/* ... */}
    </>
  );
}
