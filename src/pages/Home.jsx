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
    <HeroSection loading={loading}>
      <div className="w-full relative z-10 bg-[#FFF6ED] py-16 md:py-24">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-8 md:px-14">
          <p className="text-center text-3xl sm:text-4xl md:text-5xl font-medium text-black/90 leading-[1.2] tracking-tight max-w-4xl mx-auto">
            More Than A Space, An Expertly <br />
            Curated Ecosystem, Designed For <br />
            Effortless, Comfortable Living.
          </p>
        </div>
      </div>
      </HeroSection>
      <OurProcess />
      <OurWorks />
      <StoriesSection />
      <PricingBannerSection />
      <AboutUsSection />
      <BlogsSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
