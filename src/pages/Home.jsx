import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from "../components/HeroSection";
import OurProcess from "../components/OurProcess";
import PricingBannerSection from "../components/PricingBannerSection";
import AboutUsSection from "../components/AboutUsSection";
import BlogsSection from "../components/BlogsSection";
import ContactSection from "../components/ContactSection";
import FooterSection from "../components/FooterSection";
import Navbar from "../components/Navbar";
import PricingTable from "../components/PricingTable";
import BirdNestAnimation from '../components/BirdNestAnimation';
import OurWorks from "../components/OurWorks";
import StoriesSection from "../components/StoriesSection";

export default function Home() {
  const [showLoader, setShowLoader] = useState(true);

  const handleLoaderComplete = () => {
    setTimeout(() => setShowLoader(false), 500); // Small delay for smooth transition
  };

  // Auto-hide loader after 5 seconds as fallback
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showLoader && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-white"
            data-bird-loader="true"
          >
            <BirdNestAnimation onComplete={handleLoaderComplete} />
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.div
        initial={{ opacity: 1, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: showLoader ? 0 : 0.5, ease: "easeOut" }}
        className="w-full"
      >
        <HeroSection>
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
      </motion.div>
    </>
  );
}
