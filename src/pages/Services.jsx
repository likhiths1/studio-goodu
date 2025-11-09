import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import Typewriter from '../components/Typewriter';
import FooterSection from "../components/FooterSection";
import ServicesHeader from "../components/ServicesHeader";
import FeatureBar from "../components/FeatureBar";
import Navbar from "../components/NavbarBlack";
import ExtraContactSection from "../components/ExtraContactSection";
import ResponsiveImage from "../components/ImageBackground";
import ServicesBanner from "../assets/images/services/imgback.jpg";
import ServicesSection from "../components/ServicesSection";
import ServicesDetailSection from "../components/ServicesDetailSection";
import { AnimatedSection } from "../components/AnimatedSection";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <ServicesHeader />
      <AnimatedSection>
        <FeatureBar />
      </AnimatedSection>
      <ServicesSection />
      <ServicesDetailSection />
      <AnimatedSection>
        <ResponsiveImage src={ServicesBanner} alt="" />
      </AnimatedSection>

      {/* PROCESS section */}
      {/* PROCESS section */}
      <section className="w-full bg-[#FFF6ED] px-3 sm:px-8 md:px-14 py-16 md:py-28 font-inter">
        <motion.div 
          className="max-w-[90rem] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Heading row */}
          <div className="flex items-end justify-between mb-12 md:mb-20">
            <h2 className="text-[3.2rem] md:text-[12rem] leading-none font-medium tracking-[-0.08em] text-black">
              PROCESS
            </h2>
            <div className="hidden md:block text-[1.6rem] text-black/80 tracking-tight font-inter text-right">
              Crafting spaces with intention, detail, and emotion, every step
              designed to make your journey seamless.
            </div>
          </div>

          {/* Timeline */}
          <div className="relative flex flex-col items-center gap-20">
            {/* Center vertical line */}
            <motion.div 
              className="pointer-events-none hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-px h-full bg-[#2F2F2F]/30"
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              transition={{ duration: 2, ease: [0.16, 0.77, 0.47, 0.97] }}
            />

            {/* Top diamond marker */}
            <motion.div 
              className="w-2.5 h-2.5 rotate-45 bg-black/80"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />

            {/* 01 - Right side */}
            <motion.div 
              className="relative flex justify-end w-full"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="max-w-[40rem] text-right px-4 md:px-0 md:mr-[calc(60%-6rem)] md:pr-10">
                <div className="text-black/50 italic mb-2 md:mb-4 text-sm md:text-3xl">
                  01.
                </div>
                <h3 className="font-playfairdisplay text-xl md:text-6xl text-black mb-2">
                  Discovery Call
                </h3>
                <div className="overflow-hidden">
                  <p className="font-inter text-xs md:text-[1.6rem] text-black/70 leading-relaxed">
                    <Typewriter 
                      text={("Every collaboration begins with conversation. We take time to understand your lifestyle, vision, and aspirations what home means to you, and how design can elevate that experience. This stage sets the foundation for everything that follows.") ?? ""}
                      delay={0.3} 
                      speed={0.03} 
                    />
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 02 - Left side */}
            <motion.div 
              className="relative flex justify-start w-full"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="max-w-[40rem] text-left px-4 md:px-0 md:ml-[calc(60%-6rem)] md:pl-10">
                <div className="text-black/50 italic mb-2 md:mb-4 text-sm md:text-3xl">
                  02.
                </div>
                <h3 className="font-playfairdisplay text-xl md:text-6xl text-black mb-2">
                  Concept & Proposal
                </h3>
                <div className="overflow-hidden">
                  <p className="font-inter text-xs md:text-[1.6rem] text-black/70 leading-relaxed">
                    <Typewriter 
                      text={("From your story, a vision emerges. We develop a conceptual design that captures your aesthetic and functional needs complete with mood boards, material palettes, and spatial ideas. A detailed proposal outlines scope, timeline, and deliverables before we move forward.") ?? ""}
                      delay={0.3} 
                      speed={0.03} 
                    />
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 03 - Right side */}
            <motion.div 
              className="relative flex justify-end w-full"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="max-w-[40rem] text-right md:mr-[calc(60%-6rem)]">
                <div className="text-black/50 italic mb-2 md:mb-4 text-sm md:text-3xl">
                  03.
                </div>
                <h3 className="font-playfairdisplay text-xl md:text-6xl text-black mb-2">
                  ⁠Design Development
                </h3>
                <div className="overflow-hidden">
                  <p className="font-inter text-xs md:text-[1.6rem] text-black/70 leading-relaxed">
                    <Typewriter 
                      text={("This is where ideas take shape. We translate concepts into drawings, details, and 3D visualizations, refining every line and texture. From spatial layouts to finishes, this phase ensures every element aligns with your intent and lifestyle.") ?? ""}
                      delay={0.3} 
                      speed={0.03} 
                    />
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 04 - Left side */}
            <motion.div 
              className="relative flex justify-start w-full"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="max-w-[40rem] text-left md:ml-[calc(60%-6rem)]">
                <div className="text-black/50 italic mb-2 md:mb-4 text-sm md:text-3xl">
                  04.
                </div>
                <h3 className="font-playfairdisplay text-xl md:text-6xl text-black mb-2">
                  Project Execution
                </h3>
                <div className="overflow-hidden">
                  <p className="font-inter text-xs md:text-[1.6rem] text-black/70 leading-relaxed">
                    <Typewriter 
                      text={("Precision meets craftsmanship. Our on-site team manages construction, coordination, and installation with care and clarity. We collaborate with trusted artisans, vendors, and craftsmen to bring each detail to life on time and to standard.") ?? ""}
                      delay={0.3} 
                      speed={0.03} 
                    />
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 05 - Right side */}
            <motion.div 
              className="relative flex justify-end w-full"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="max-w-[40rem] text-right md:mr-[calc(60%-6rem)]">
                <div className="text-black/50 italic mb-2 md:mb-4 text-sm md:text-3xl">
                  05.
                </div>
                <h3 className="font-playfairdisplay text-xl md:text-6xl text-black mb-2">
                  Finishing Touches
                </h3>
                <div className="overflow-hidden">
                  <p className="font-inter text-xs md:text-[1.6rem] text-black/70 leading-relaxed">
                    <Typewriter text={("Where design meets emotion. Furniture, art, lighting, and accessories come together to complete the space. We style and fine-tune every corner, ensuring your home feels not just designed, but lived in beautifully.") ?? ""} delay={0.3} speed={0.03} />
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Bottom diamond marker */}
            <motion.div 
              className="w-2.5 h-2.5 rotate-45 bg-black/80"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </div>
        </motion.div>
      </section>

      <ExtraContactSection />
      <FooterSection />
    </>
  );
}
