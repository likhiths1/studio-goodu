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
        className="w-full relative z-10 bg-[#FFF6ED] py-16 md:py-24 overflow-hidden"
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
          <motion.p 
            className="text-center text-3xl sm:text-4xl md:text-5xl font-medium text-black/90 leading-[1.2] tracking-tight max-w-4xl mx-auto"
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
            More Than A Space, An Expertly <br className="hidden md:block" />
            <motion.span 
              className="inline-block"
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
            </motion.span> <br className="hidden md:block" />
            <motion.span 
              className="inline-block"
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
            </motion.span>
          </motion.p>
          
          {/* Decorative elements */}
          <motion.div 
            className="flex justify-center mt-12 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.8,
                delay: 0.8,
                ease: [0.16, 0.77, 0.47, 0.97]
              }
            }}
            viewport={{ once: true }}
          >
            <div className="w-3 h-3 rounded-full bg-black/20"></div>
            <div className="w-3 h-3 rounded-full bg-black/40"></div>
            <div className="w-3 h-3 rounded-full bg-black/60"></div>
          </motion.div>
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
