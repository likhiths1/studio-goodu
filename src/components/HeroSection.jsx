import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Navbar from './Navbar';

// ⬇️ Import your new images
import HeroBG from '../assets/images/herro/1.jpg';
// import HeroOverlay from '../assets/images/herro/2.png';
import BrownGrad from '../assets/images/browngrad.png';

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
              delay: delay + index * 0.03,
              duration: 0.5,
              ease: [0.16, 0.77, 0.47, 0.97],
            },
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </span>
  );
};

export default function HeroSection({ children }) {
  const [scrollY, setScrollY] = useState(0);
  const [animationDelay, setAnimationDelay] = useState(0);
  
  // Refs for scroll-triggered animations
  const thoughtfulRef = useRef(null);
  const moreThanSpaceRef = useRef(null);
  const forThoseWhoValueRef = useRef(null);
  
  // UseInView hooks
  const thoughtfulInView = useInView(thoughtfulRef, { once: false, margin: "-100px" });
  const moreThanSpaceInView = useInView(moreThanSpaceRef, { once: false, margin: "-100px" });
  const forThoseWhoValueInView = useInView(forThoseWhoValueRef, { once: false, margin: "-100px" });
  
  const scrollProgress = Math.min(1, Math.max(0, scrollY / (window.innerHeight * 0.75)));

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Fixed Hero Section */}
      <div className="relative font-inter overflow-hidden fixed top-0 left-0 w-full h-[100vh] md:h-[200vh] z-0">
        {/* Notification Bar and Navbar Container */}
        <div className="absolute top-0 left-0 w-full z-[9999]">
          {/* Notification Bar */}
          <motion.div
            className="w-full bg-[#FFF6ED] text-[#474747] py-2 px-2 md:px-0 text-center text-base font-medium tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: animationDelay, duration: 0.8 }}
          >
            <AnimatedText
              text="Namaste! Welcome to Namma Studio Goodu"
              delay={animationDelay + 0.4}
            />
          </motion.div>
          
          {/* Navbar */}
          <div className="w-full bg-transparent">
            <Navbar />
          </div>
        </div>

        {/* Background Image Container */}
        <div className="absolute inset-0 md:relative z-0 w-full h-full md:h-auto" style={{
          paddingTop: window.innerWidth >= 768 ? '150%' : '0'
        }}>
          {/* Background Image */}
          <img
            src={HeroBG}
            alt="Hero Background"
            className="w-full h-full object-cover md:absolute md:top-0 md:left-0 md:w-full md:h-full md:object-contain"
            style={{
              objectPosition: 'center top',
            }}
            draggable={false}
          />
          
          {/* Brown Grad Overlay - Bottom Half */}
          <img
            src={BrownGrad}
            alt="Brown Gradient Overlay"
            className="absolute bottom-0 left-0 w-full h-1/2 object-cover"
            draggable={false}
          />
          
          <div className="absolute inset-0 bg-black/10 z-0"></div>
        </div>

        {/* Overlay Image - Positioned over everything */}
        {/* <div className="absolute inset-0 flex items-start justify-center z-[100]" style={{
            paddingTop: '20%',
            paddingRight: '4%',  // Adjust this value to move the overlay up/down
            pointerEvents: 'none'
          }}>
            <img
              src={HeroOverlay}
              alt="Hero Overlay"
              style={{
                width: '250%',  // Much larger width
                height: 'auto',
                maxHeight: '3000vh',  // Much larger max height
                objectFit: 'contain',  // Changed to contain
                transform: 'translateY(-10%) scale(1.1)',  // Added scale transform
              }}
              draggable={false}
            />
          </div> */}

        {/* Main Text Block - Behind overlay */}
        <div className="absolute inset-0 z-5 flex items-center justify-start" style={{ transform: 'translateY(-10%)' }}>
          <div className="w-full max-w-[90rem] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
            <div className="w-full text-center">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: animationDelay + 0.2 }}>
                <div>
                  <AnimatedText
                    text="TRANSFORMING SPACES INTO"
                    className="font-inter text-white uppercase font-[400] tracking-[-0.08em]"
                    delay={animationDelay + 7.2}
                    style={{
                      fontSize: 'clamp(1.4rem, 4.5vw, 6.5rem)',
                      lineHeight: '1.1',
                      marginBottom: '0.1em',
                      textAlign: 'center',
                      width: '100%',
                      whiteSpace: 'nowrap',
                    }}
                  />
                  <AnimatedText
                    text="EXPERIENCES THAT BALANCE"
                    className="font-inter text-white uppercase font-[400] tracking-[-0.08em]"
                    delay={animationDelay + 7.35}
                    style={{
                      fontSize: 'clamp(1.4rem, 4.5vw, 6.5rem)',
                      lineHeight: '1.1',
                      marginBottom: '0.1em',
                      textAlign: 'center',
                      width: '100%',
                      whiteSpace: 'nowrap',
                    }}
                  />
                  <AnimatedText
                    text="UTILITY AND ELEGANCE"
                    className="font-inter text-white uppercase font-[400] tracking-[-0.08em]"
                    delay={animationDelay + 7.5}
                    style={{
                      fontSize: 'clamp(1.4rem, 4.5vw, 6.5rem)',
                      lineHeight: '1.1',
                      marginBottom: '0',
                      textAlign: 'center',
                      width: '100%',
                      whiteSpace: 'nowrap',
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Text Blocks - Moved up */}
        <div className="absolute bottom-[25%] md:bottom-[35%] left-0 right-0 z-20">
          <div className="w-full max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start text-white text-sm sm:text-base md:text-lg font-light tracking-[-0.02em]">
              {/* LEFT */}
              <motion.div 
                ref={thoughtfulRef}
                className="flex flex-col items-start"
                initial={{ opacity: 0, y: 20 }}
                animate={thoughtfulInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <p className="text-left text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium">
                  Thoughtful, designed layouts,<br />
                  premium service, Interiors,<br />
                  architecture, and construction
                </p>
              </motion.div>

              {/* RIGHT */}
              <motion.div 
                ref={forThoseWhoValueRef}
                className="flex flex-col items-end"
                initial={{ opacity: 0, y: 20 }}
                animate={forThoseWhoValueInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <p className="text-right text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium">
                  For Those Who Value<br />
                  Quality, Style, And<br />
                  Long-Term Living Solutions
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Text - Moved up */}
        <motion.div 
          ref={moreThanSpaceRef}
          className="absolute bottom-16 sm:bottom-32 md:bottom-48 lg:bottom-64 left-0 right-0 z-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={moreThanSpaceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-white tracking-[-0.08em] text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight max-w-6xl mx-auto px-6">
            More than a space, an expertly<br />
            curated ecosystem designed for<br />
            effortless, comfortable living.
          </p>
        </motion.div>
      </div>

      {/* Spacer - Matches the hero section height */}
      <div className="h-[100vh] md:h-[150vh]" style={{ pointerEvents: 'none' }} />

      {/* Remaining Page Content */}
      <div className="relative z-20 bg-white -mt-[100vh] md:-mt-[150vh]">
        {children}
      </div>
    </>
  );
}
