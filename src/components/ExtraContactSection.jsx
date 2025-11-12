import Img1 from "../assets/images/works/12.jpg";
import Img2 from "../assets/images/contact/transform2.jpeg";
import Img3 from "../assets/images/contact/transform3.jpg";
import { AnimatedSection, AnimatedItem } from "./AnimatedSection";

export default function ContactSection() {
  return (
    <AnimatedSection className="w-full bg-[#FFF6ED] lg:min-h-screen relative px-4 pt-6 pb-1 md:pt-20 md:pb-6 lg:pb-20 font-inter overflow-x-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center relative">
        {/* Headline and decorative image alignment exactly as in Figma */}
        <div className="w-full mb-0 md:mb-0 mt-0 flex flex-col gap-0 leading-tight md:px-[12rem]">
          {/* TRANSFORM Row - Left aligned */}
          <AnimatedItem className="flex items-center w-full justify-start gap-0 -ml-2 md:-ml-4">
                      <span
                        className="block text-[2.5rem] sm:text-[3rem] md:text-[8rem] font-regular tracking-[-0.08em]"
                        style={{ color: "#D6AF60" }}
                      >
                        COMMERCIAL
                      </span>
                      <AnimatedItem delay={0.2}>
                        <img
                          src={Img2}
                          alt=""
                          className="hidden ml-2 md:ml-2 w-[88px] h-[88px] md:w-[176px] md:h-[176px] object-cover"
                          draggable={false}
                        />
                      </AnimatedItem>
                    </AnimatedItem>
                    
                    {/* Row 2 - Right aligned with offset */}
                    <AnimatedItem delay={0.3} className="flex items-center justify-end w-full gap-0 -mt-[0.8rem] md:-mt-[1.5rem] pr-8 md:pr-16">
                      <span
                        className="block text-[2.5rem] sm:text-[3rem] md:text-[8rem] font-regular tracking-[-0.04em] md:tracking-[-0.04em] whitespace-nowrap"
                        style={{ color: "#4D696C" }}
                      >
                        RESIDENTIAL
                      </span>
                    </AnimatedItem>
                    
                    {/* Row 3 - Left aligned with more offset */}
                    <AnimatedItem delay={0.4} className="flex items-center w-full justify-start gap-0 -mt-[0.8rem] md:-mt-[1.5rem] pl-12 md:pl-24">
                      <AnimatedItem delay={0.5}>
                        <img
                          src={Img1}
                          alt=""
                          className="hidden mr-0 md:mr-36 w-[88px] h-[88px] md:w-[176px] md:h-[176px] object-cover"
                          draggable={false}
                        />
                      </AnimatedItem>
                      <span
                        className="block text-[2.5rem] sm:text-[3rem] md:text-[8rem] font-regular tracking-[-0.08em] md:tracking-[-0.08em]"
                        style={{ color: "#D6AF60" }}
                      >
                        F&B
                      </span>
                    </AnimatedItem>
                    
                    {/* Row 4 - Right aligned with less offset */}
                    <AnimatedItem delay={0.5} className="flex items-center justify-end w-full gap-0 -mt-[0.8rem] md:-mt-[1.5rem] pr-4 md:pr-8">
                      <span
                        className="block text-[2.5rem] sm:text-[3rem] md:text-[8rem] font-regular tracking-[-0.08em] md:tracking-[-0.08em]"
                        style={{ color: "#4D696C" }}
                      >
                        HOSPITALITY
                      </span>
                      <AnimatedItem delay={0.6}>
                        <img
                          src={Img3}
                          alt=""
                          className="hidden ml-8 md:ml-8 w-[88px] h-[88px] md:w-[176px] md:h-[176px] object-cover"
                          draggable={false}
                        />
                      </AnimatedItem>
                    </AnimatedItem>
                    
                    {/* Row 5 - Left aligned with medium offset */}
                    <AnimatedItem delay={0.6} className="flex items-center w-full justify-start gap-0 -mt-[0.8rem] md:-mt-[1.5rem] pl-6 md:pl-12">
                      <span
                        className="block text-[2.5rem] sm:text-[3rem] md:text-[8rem] font-regular tracking-[-0.08em]"
                        style={{ color: "#D6AF60" }}
                      >
                        EXPERIENCE & LIFESTYLE
                      </span>
                    </AnimatedItem>
                    
                    {/* Row 6 - Right aligned with maximum offset */}
                    <AnimatedItem delay={0.7} className="flex items-center justify-end w-full gap-0 -mt-[0.8rem] md:-mt-[1.5rem] pr-16 md:pr-32">
                      <span
                        className="block text-[2.5rem] sm:text-[3rem] md:text-[8rem] font-regular tracking-[-0.08em] md:tracking-[-0.08em]"
                        style={{ color: "#4D696C" }}
                      >
                        INSTITUTIONAL & PUBLIC
                      </span>
                    </AnimatedItem>
                    
                    {/* Row 7 - Left aligned with slight offset */}
                    <AnimatedItem delay={0.8} className="flex items-center w-full justify-start gap-0 -mt-[0.8rem] md:-mt-[1.5rem] pl-2 md:pl-4">
                      <span
                        className="block text-[2.5rem] sm:text-[3rem] md:text-[8rem] font-regular tracking-[-0.08em]"
                        style={{ color: "#D6AF60" }}
                      >
                        INDUSTRIAL & INFRASTRUCTURE
                      </span>
                    </AnimatedItem>
        </div>
      </div>
    </AnimatedSection>
  );
}
