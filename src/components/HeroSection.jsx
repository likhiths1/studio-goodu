import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
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

export default function HeroSection({ isLoading = false }) {
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
        <div className="relative z-50">
          <Navbar />
        </div>
      </div>
    );
  }

  return (
    <>
      <header 
        className="w-full min-h-[100svh] md:min-h-[120svh] lg:min-h-[130svh] relative font-inter overflow-hidden fixed top-0 left-0 z-10"
        style={{
          transform: `translateY(${Math.min(scrollY * 0.5, 100)}px)`,
          opacity: Math.max(1 - (scrollY / 500), 0.2),
          transition: 'all 0.3s ease-out'
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

        <div className="absolute inset-0 z-30 flex items-center justify-center">
          <div className="w-full max-w-[90rem] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
            <div className="w-full">
              <div className="w-full text-center mt-2 md:mt-4">
                {showContent && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 4.2 }}
                  >
                    <AnimatedText 
                      text="INTERIOR" 
                      className="font-inter text-white uppercase font-[400] leading-[0.85] tracking-[-0.08em] block mx-auto"
                      delay={4.2}
                      style={{
                        fontSize: 'clamp(3.5rem, 14vw, 18rem)',
                        lineHeight: '0.85',
                        textShadow: '0 0 15px rgba(0,0,0,0.3)',
                        marginTop: 'calc(-10vh - 200px)',
                        marginBottom: 'clamp(0.5rem, 2vw, 2rem)',
                        display: 'block',
                        width: '100%',
                        textAlign: 'center'
                      }}
                    />
                  </motion.div>
                )}
                
                <motion.div 
                  className="w-full max-w-2xl mx-auto px-4 sm:px-6 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={showContent ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 4.5, duration: 0.7 }}
                >
                  <AnimatedText 
                    text="THE NEST WE BUILD TOGETHER" 
                    className="text-white text-base sm:text-lg md:text-xl lg:text-2xl tracking-wide font-light mt-2 sm:mt-3 md:mt-4 text-left"
                    delay={4.6}
                  />
                </motion.div>
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

        <motion.div 
          className="absolute right-3 md:right-10 lg:right-20 bottom-6 md:bottom-20 max-w-[92vw] md:max-w-lg rounded-md px-4 md:px-6 py-3 text-base md:text-2xl text-white font-light tracking-wide font-inter bg-transparent shadow-none z-40 text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={showContent ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 4.8, duration: 0.7, ease: "easeOut" }}
        >
          {showContent && (
            <AnimatedText 
              text="ARCHITECTURAL & INTERIOR DESIGN STUDIO INSPIRED BY CULTURE, CRAFT, AND CONSCIOUS LIVING" 
              delay={4.9}
            />
          )}
        </motion.div>
      </header>
      
      {/* This empty div creates space for the fixed header */}
      <div className="min-h-[100svh] md:min-h-[120svh] lg:min-h-[130svh] w-full"></div>
    </>
  );
}