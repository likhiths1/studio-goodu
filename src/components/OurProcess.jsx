import { motion } from 'framer-motion';
import { AnimatedSection, AnimatedItem } from './AnimatedSection';
import Process01 from '../assets/images/process/01.png';
import Process02 from '../assets/images/process/02.png';
import Process03 from '../assets/images/process/03.png';
import Process04 from '../assets/images/process/04.png';

const steps = [
  {
    img: Process01,
    title: "DISCOVER",
    desc: "Understanding You. Every great space begins with a story of yours. We start by listening, observing, and uncovering how you live, work, and feel. This stage defines not just what we build, but why we build it.",
  },
  {
    img: Process02,
    title: "DESIGN",
    desc: "Concept to Creation. Here, imagination meets precision. We translate your aspirations into spatial concepts, balancing form, material, and emotion. Each detail is thoughtfully sketched, ensuring harmony between function and beauty.",
  },
  {
    img: Process03,
    title: "DEVELOP",
    desc: "Refine. Resolve. Realize. Our team collaborates closely with artisans, engineers, and partners to bring every element to life. From materials and finishes to lighting and ergonomics, perfection is in the process.",
  },
  {
    img: Process04,
    title: "DELIVER",
    desc: "Beyond Handover. When your space is ready, it’s more than complete, it’s alive. We walk with you through the final reveal, ensuring every line, light, and layer resonates with your vision. Our relationship doesn’t end here; it evolves, just like your space.",
  },
];

export default function OurProcess() {
  return (
    <AnimatedSection className="w-full py-16 px-3 sm:px-8 md:px-14 bg-[#FFF6ED] font-inter overflow-hidden">
      <div className="max-w-[80rem] w-full mx-auto">
        {/* Section Title with left-center alignment */}
        <AnimatedItem className="relative flex flex-col mb-16">
          <h2 className="font-inter font-medium text-black tracking-[-0.08em] leading-tight text-5xl md:text-[12rem] mx-auto md:mx-0 md:-ml-[4vw] md:max-w-full">
            OUR PROCESS
          </h2>
          {/* Subtitle with right-center alignment */}
          <div className="hidden mt-4 w-full flex justify-center md:justify-end">
            <div className="text-xs md:text-[1.6rem] font-regular text-[#3a3532] leading-snug md:mr-[4vw] text-center md:text-right max-w-full md:w-94">
              TETUR. SUSPENDISSE ORCI NISL.<br/>CONGUE EGESTAS SAGITTIS
            </div>
          </div>
        </AnimatedItem>

        {/* Steps */}
        <div className="flex flex-col gap-28 md:gap-32">
          {steps.map((step, i) => (
            <AnimatedItem 
              key={i}
              delay={i + 1}
              className={`flex flex-col md:flex-row ${
                i % 2 === 1 ? 'md:flex-row-reverse' : ''
              } w-full items-start md:items-center md:justify-between gap-4 md:gap-0`}
            >
              <motion.div 
                className="flex-shrink-0 flex justify-center w-full md:w-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <img
                  src={step.img}
                  alt={`Step 0${i + 1}`}
                  className="w-32 md:w-56 select-none pointer-events-none object-contain"
                  draggable={false}
                />
              </motion.div>
              <div
                className={`flex-1 text-center ${
                  i % 2 === 1 ? 'md:text-right md:pr-12' : 'md:text-left md:pr-12'
                }`}
              >
                <motion.h3 
                  className={`text-xl sm:text-2xl md:text-[43px] tracking-[-0.08em] font-bold text-[#222] tracking-wide mb-8 font-inter uppercase ${i % 2 === 1 ? '' : 'md:ml-12'}`}
                  whileInView={{ x: 0, opacity: 1 }}
                  initial={{ x: i % 2 === 0 ? -50 : 50, opacity: 0 }}
                  viewport={{ once: true, margin: '0px 0px -50px 0px' }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {step.title}
                </motion.h3>
                <motion.p
                  className={`text-sm sm:text-base md:text-xl font-normal text-[#2b2623] leading-[1.8] font-inter max-w-3xl mx-auto ${
                    i % 2 === 1 ? 'md:ml-auto md:mr-0 text-right' : 'md:mx-12'
                  }`}
                  whileInView={{ x: 0, opacity: 1 }}
                  initial={{ x: i % 2 === 0 ? -30 : 30, opacity: 0 }}
                  viewport={{ once: true, margin: '0px 0px -50px 0px' }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {step.desc}
                </motion.p>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
