import { useRef } from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection, AnimatedItem } from './AnimatedSection';
import { useNavigate } from 'react-router-dom';
import Img1 from '../assets/images/work1.png';
import Img2 from '../assets/images/works/works22.jpeg';
import Img3 from '../assets/images/work3.png';
import Img4 from '../assets/images/work4.png';
import Img5 from '../assets/images/work5.png';
import Img6 from '../assets/images/work6.png';
import Img7 from '../assets/images/work7.png';
import sreeimg from '../assets/images/portfoliodetail/sreee3.jpg';

const works = [
  // First row - 3 images (33.33% each)
  { 
    src: Img1, 
    row: 1, 
    size: 'w-1/3',
    title: 'Modern Living Room',
    category: 'Interior Design'
  },
  { 
    src: Img2, 
    row: 1, 
    size: 'w-1/3',
    title: 'Minimalist Kitchen',
    category: 'Interior Design'
  },
  { 
    src: Img3, 
    row: 1, 
    size: 'w-1/3',
    title: 'Cozy Bedroom',
    category: 'Interior Design'
  },
  // Second row - 1 image (100% width)
  { 
    src: Img4, 
    row: 2, 
    size: 'w-full',
    title: 'Elegant Dining Space',
    category: 'Interior Design'
  },
  // Third row - 3 images (33.33% each)
  { 
    src: Img5, 
    row: 3, 
    size: 'w-1/3',
    title: 'Modern Workspace',
    category: 'Office Design'
  },
  { 
    src: Img6, 
    row: 3, 
    size: 'w-1/3',
    title: 'Stylish Lounge',
    category: 'Interior Design'
  },
  { 
    src: sreeimg, 
    row: 3, 
    size: 'w-1/3',
    title: 'Outdoor Living',
    category: 'Landscape'
  }
];

export default function OurWorks() {
  const navigate = useNavigate();
  
  const handleProjectClick = (index) => {
    // Map specific images to their portfolio IDs
    const portfolioMapping = {
      0: '4', // 1st image → SRIGANGA RESIDENCE
      1: null, // 2nd image → no function
      2: '3', // 3rd image → TYD
      3: '1', // 4th image → ARTHA VILLA
      4: null, // 5th image → no function
      5: '2', // 6th image → SNOB SALON
      6: '4', // 7th image → SRIGANGA RESIDENCE again
    };
    
    const projectId = portfolioMapping[index];
    if (projectId) {
      navigate(`/portfolio/${projectId}`);
    }
  };

  return (
    <AnimatedSection className="w-full bg-[#FFF6ED] py-12 md:py-16 px-4 sm:px-6 md:px-8 font-inter overflow-hidden">
      <div className="max-w-[85rem] w-full mx-auto">
        {/* Heading + Subtitle */}
        <AnimatedItem className="relative flex flex-col gap-2 mb-6 md:mb-10">
          <motion.h2 
            className="text-[3.2rem] sm:text-[4rem] md:text-[12rem] leading-none font-medium tracking-[-0.08em] text-black text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -50px 0px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            OUR WORKS
          </motion.h2>
          <motion.div 
            className="w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -50px 0px' }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
          </motion.div>
        </AnimatedItem>

        {/* Works Grid */}
        <div className="w-full space-y-2 md:space-y-4">
          {[1, 2, 3].map((row) => {
            const rowWorks = works.filter(work => work.row === row);
            if (rowWorks.length === 0) return null;
            
            return (
              <div 
                key={row} 
                className={`flex w-full gap-2 md:gap-4`}
              >
                {rowWorks.map((work, i) => {
                  const delay = i * 0.1 + (row - 1) * 0.3;
                  const globalIndex = works.indexOf(work);
                  const isClickable = globalIndex !== 1 && globalIndex !== 4; // Don't click 2nd and 5th images
                  
                  return (
                    <motion.div
                      key={i}
                      className={`${work.size} relative group overflow-hidden ${!isClickable ? 'cursor-default' : ''}`}
                      onClick={() => isClickable && handleProjectClick(globalIndex)}
                      initial={{ opacity: 0, y: 50, scale: 0.95 }}
                      whileInView={{ 
                        opacity: 1, 
                        y: 0, 
                        scale: 1, 
                        transition: { 
                          duration: 0.8, 
                          delay: delay, 
                          ease: [0.16, 0.77, 0.47, 0.97] 
                        }
                      }}
                      viewport={{ once: false, margin: '0px 0px -50px 0px' }}
                      whileHover={isClickable ? {
                        scale: 1.03, 
                        transition: { 
                          duration: 0.3, 
                          type: 'spring', 
                          stiffness: 400, 
                          damping: 10 
                        }
                      } : {}}
                    >
                      <motion.div
                        initial={{ opacity: 0, scale: 1.05 }}
                        whileInView={{ 
                          opacity: 1, 
                          scale: 1,
                          transition: { 
                            duration: 1.2,
                            delay: delay + 0.15,
                            ease: [0.2, 0, 0.1, 1],
                            scale: {
                              type: 'spring',
                              damping: 10,
                              stiffness: 100
                            }
                          }
                        }}
                        viewport={{ once: false, margin: '0px 0px -100px 0px' }}
                        className="w-full h-full will-change-transform"
                      >
                        <img
                          src={work.src}
                          alt={work.title}
                          className={`w-full h-full object-cover ${work.size === 'w-full' ? 'aspect-[16/5]' : 'aspect-[4/5]'}`}
                        />
                      </motion.div>
                      <motion.div 
                        className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        whileHover={isClickable ? { opacity: 1 } : {}}
                      >
                        {isClickable && (
                          <motion.span 
                            className="text-white text-lg font-medium opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                          >
                            View Project
                          </motion.span>
                        )}
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* View More Button */}
      </div>

    </AnimatedSection>
  );
}
