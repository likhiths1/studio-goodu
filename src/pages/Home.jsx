import { motion } from 'framer-motion';
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
      <motion.div 
        className="w-full relative z-10 bg-[#FFF6ED] pt-16 md:pt-24 pb-0 overflow-visible"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 1,
            ease: [0.16, 0.77, 0.47, 0.97]
          }
        }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-[90rem] mx-auto px-4 sm:px-8 md:px-14">
          <div className="space-y-2 md:space-y-4 text-center">
            <motion.p 
              className="text-4xl sm:text-5xl md:text-6xl font-medium text-black/90 leading-[1.1] tracking-tight max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.8,
                  ease: [0.16, 0.77, 0.47, 0.97],
                  delay: 0.2
                }
              }}
              viewport={{ once: true }}
            >
              More Than A Space, An Expertly
            </motion.p>
            <motion.p 
              className="text-4xl sm:text-5xl md:text-6xl font-medium text-black/90 leading-[1.1] tracking-tight max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.8,
                  delay: 0.4,
                  ease: [0.16, 0.77, 0.47, 0.97]
                }
              }}
              viewport={{ once: true }}
            >
              Curated Ecosystem, Designed For
            </motion.p>
            <motion.p 
              className="text-4xl sm:text-5xl md:text-6xl font-medium text-black/90 leading-[1.1] tracking-tight max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.8,
                  delay: 0.6,
                  ease: [0.16, 0.77, 0.47, 0.97]
                }
              }}
              viewport={{ once: true }}
            >
              Effortless, Comfortable Living.
            </motion.p>
          </div>
        </div>
      </motion.div>
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
