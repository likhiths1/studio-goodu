import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Navbar from './Navbar';
import BackSky from '../assets/images/back-sky1.png';
import BackSkyless from '../assets/images/back-skyless1.png';

// Helper component for letter animations
const AnimatedText = ({ text, className = '', delay = 0, style = {} }) => {
  if (!text) return null;
  const letters = text.split('');

  return (
    <span className={className} style={style}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          style={{ display: 'inline-block', whiteSpace: 'pre' }}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: {
              delay: delay + (index * 0.03),
              duration: 0.5,
              ease: [0.16, 0.77, 0.47, 0.97],
            }
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </span>
  );
};

export default function HeroSection({ isLoading = false, children }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  
  // Only show content after initial load and when not in loading state
  const showContent = !isLoading;

  useEffect(() => {
    // Set loaded to true when component mounts
    setIsLoaded(true);
    
    // Handle scroll effect
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLoading]);

  // Hide all content during loading
  if (isLoading) {
    return (
      <div className="w-full min-h-[100svh] md:min-h-[120svh] lg:min-h-[130svh] relative font-inter overflow-hidden fixed top-0 left-0 z-10">
        {/* Keep the background elements but hide all text */}
        <img 
          src={BackSky} 
          alt="" 
          className="absolute inset-0 z-0 w-full h-full object-cover object-center"
          draggable={false}
        />
        <div className="relative z-[60]">
          <Navbar />
        </div>
      </div>
    );
  }

  // Calculate scroll progress (0 to 1) based on viewport height
  const scrollProgress = Math.min(1, Math.max(0, scrollY / (window.innerHeight * 0.75)));
  
  return (
    <>
      {/* Fixed Hero Section */}
      <div 
        className="w-full min-h-[100svh] md:min-h-[120svh] lg:min-h-[130svh] relative font-inter overflow-hidden fixed top-0 left-0 z-10"
        style={{
          opacity: 1 - (scrollProgress * 0.9), // Fade out as user scrolls
          transition: 'opacity 0.3s ease-out'
        }}
      >
        {/* Notification Bar */}
        <motion.div 
          className="w-full bg-[#FFF6ED] text-[#474747] py-2 px-2 md:px-0 text-center text-base font-medium tracking-tight relative z-[60]"
          initial={{ opacity: 0, y: -20 }}
          animate={showContent ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 4, duration: 0.8 }}
        >
          {showContent && (
            <AnimatedText 
              text="Namaste! Welcome to Namma Studio Goodu" 
              delay={4.4}
            />
          )}
        </motion.div>
      
        <img 
          src={BackSky} 
          alt="" 
          className="absolute inset-0 z-0 w-full h-full object-cover object-center"
          draggable={false}
        />

        <div className="relative z-50">
          <Navbar />
        </div>

        <div className="absolute inset-0 z-30 flex items-center justify-start">
          <div className="w-full max-w-[90rem] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
            <div className="w-full">
              <div className="w-full text-left mt-2 md:mt-4">
                {showContent && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 4.2 }}
                  >
                    <div>
                      <AnimatedText 
                        text="TRANSFORMING SPACES INTO" 
                        className="font-inter text-white uppercase font-[400] leading-[0.85] tracking-[-0.08em] block mt-[calc(-10vh-35px)] md:mt-[calc(-10vh-200px)] text-left pl-12 sm:pl-16 md:pl-24 lg:pl-32 xl:pl-40"
                        delay={4.2}
                        style={{
                          fontSize: 'clamp(1.8rem, 5vw, 5rem)',
                          lineHeight: '1',
                          marginBottom: '0.1em',
                          display: 'block',
                          width: '100%',
                          textAlign: 'left'
                        }}
                      />
                      <AnimatedText 
                        text="EXPERIENCES THAT BALANCE" 
                        className="font-inter text-white uppercase font-[400] leading-[0.85] tracking-[-0.08em] block text-left pl-12 sm:pl-16 md:pl-24 lg:pl-32 xl:pl-40"
                        delay={4.35}
                        style={{
                          fontSize: 'clamp(1.8rem, 5vw, 5rem)',
                          lineHeight: '1',
                          marginBottom: '0.1em',
                          display: 'block',
                          width: '100%',
                          textAlign: 'left'
                        }}
                      />
                      <AnimatedText 
                        text="UTILITY AND ELEGANCE" 
                        className="font-inter text-white uppercase font-[400] leading-[0.85] tracking-[-0.08em] block text-left pl-12 sm:pl-16 md:pl-24 lg:pl-32 xl:pl-40"
                        delay={4.5}
                        style={{
                          fontSize: 'clamp(1.8rem, 5vw, 5rem)',
                          lineHeight: '1',
                          marginBottom: 'clamp(0.5rem, 2vw, 2rem)',
                          display: 'block',
                          width: '100%',
                          textAlign: 'left'
                        }}
                      />
                    </div>
                  </motion.div>
                )}
                
              </div>
            </div>
          </div>
        </div>

        <img 
          src={BackSkyless} 
          alt="" 
          className="absolute inset-0 z-30 w-full h-full object-cover pointer-events-none"
          draggable={false}
        />

        {/* Bottom overlay texts: address, central blurb, right blurb */}
        <motion.div 
          className="absolute inset-x-0 bottom-0 z-[60] pointer-events-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 5.1, duration: 0.7 }}
        >
          {/* Full width gradient background */}
          <div 
            className="absolute inset-0 z-[-1]"
            style={{
              background: 'linear-gradient(180deg, rgba(60, 40, 30, 0) 0%, rgba(60, 40, 30, 0.2) 5%, rgba(60, 40, 30, 0.4) 15%, #5C3D2E 50%, #3A2A1F 100%)',
              height: '100%',
              backdropFilter: 'blur(2px)',
              WebkitBackdropFilter: 'blur(2px)',
            }}
          />
          <div className="w-full max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 pt-16 pb-24 md:pt-24 md:pb-32">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-16 items-start text-white text-sm sm:text-base md:text-lg font-light tracking-[-0.02em] text-center">
              {/* Left: Address */}
              <motion.div 
                className="flex flex-col items-start"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <p className="w-full max-w-[200px] md:max-w-none text-base sm:text-lg md:text-xl font-medium text-left">
                  3rd Block, 1st, 19/1, Main Road,<br />
                  3rd Stage 4th Block, 3rd Stage,<br />
                  Basaveshwar Nagar, Bengaluru,<br />
                  Karnataka 560079
                </p>
              </motion.div>

              {/* Center: Blurb */}
              <motion.div 
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                <p className="w-full max-w-[280px] md:max-w-none text-base sm:text-lg md:text-xl font-medium text-center">
                  Thoughtful, Designed Layouts,<br />
                  Premium Service, Interiors,<br />
                  Architecture, And Construction
                </p>
              </motion.div>

              {/* Right: Value statement */}
              <motion.div 
                className="flex flex-col items-end"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                <p className="w-full max-w-[200px] md:max-w-none text-base sm:text-lg md:text-xl font-medium text-right">
                  For Those Who Value<br />
                  Quality, Style, And<br />
                  Long-Term Living Solutions
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Spacer to push content below the hero section */}
      <div 
        className="relative z-0"
        style={{
          height: '100vh', // This creates space for the fixed hero
          pointerEvents: 'none'
        }}
      />
      
      {/* Content that will scroll over the hero */}
      <div 
        className="relative z-20 bg-white"
        style={{
          marginTop: '-100vh', // Pull content up to overlap
          position: 'relative'
        }}
      >
        {children}
      </div>
    </>
  );
}