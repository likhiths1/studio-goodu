import { useRef } from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection, AnimatedItem } from './AnimatedSection';
import { useNavigate } from 'react-router-dom';
import Img1 from '../assets/images/works1.png';
import Img2 from '../assets/images/works2.png';
import Img3 from '../assets/images/works3.png';
import Img4 from '../assets/images/works4.png';
import Img5 from '../assets/images/works5.png';
import Img6 from '../assets/images/works6.png';
import Img7 from '../assets/images/works7.png';
import Img8 from '../assets/images/works8.png';

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
  // Second row - 2 images (50% each)
  { 
    src: Img4, 
    row: 2, 
    size: 'w-1/2',
    title: 'Elegant Dining',
    category: 'Interior Design'
  },
  { 
    src: Img5, 
    row: 2, 
    size: 'w-1/2',
    title: 'Luxury Bathroom',
    category: 'Interior Design'
  },
  // Third row - 3 images (33.33% each)
  { 
    src: Img6, 
    row: 3, 
    size: 'w-1/3',
    title: 'Modern Workspace',
    category: 'Office Design'
  },
  { 
    src: Img7, 
    row: 3, 
    size: 'w-1/3',
    title: 'Stylish Lounge',
    category: 'Interior Design'
  },
  { 
    src: Img8, 
    row: 3, 
    size: 'w-1/3',
    title: 'Outdoor Living',
    category: 'Landscape'
  }
];

export default function OurWorks() {
  const navigate = useNavigate();
  
  const handleProjectClick = (projectId) => {
    // Navigate to the portfolio detail page with the project ID
    navigate(`/portfolio/${projectId}`);
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
                className={`flex w-full gap-2 md:gap-4 ${row === 2 ? 'px-8 md:px-16 lg:px-32' : ''}`}
              >
                {rowWorks.map((work, i) => {
                  const delay = i * 0.1 + (row - 1) * 0.3;
                  return (
                    <motion.div 
                      key={i}
                      className={`${work.size} relative group overflow-hidden`}
                      onClick={() => handleProjectClick(i + 1)} // Using index + 1 as project ID
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
                      whileHover={{ 
                        scale: 1.03,
                        transition: { 
                          duration: 0.3,
                          type: 'spring',
                          stiffness: 400,
                          damping: 10
                        }
                      }}
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
                          className="w-full h-full object-cover aspect-[4/5]"
                        />
                      </motion.div>
                      <motion.div 
                        className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <motion.span 
                          className="text-white text-lg font-medium opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                        >
                          View Project
                        </motion.span>
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
