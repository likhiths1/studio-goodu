import Img1 from "../assets/images/works/12.jpg";
import Img2 from "../assets/images/contact/transform2.jpeg";
import Img3 from "../assets/images/contact/transform3.jpg";
import Trans1 from "../assets/images/trans1.png";
import Trans2 from "../assets/images/trans2.png";
import Trans3 from "../assets/images/trans3.png";
import Trans4 from "../assets/images/trans4.png";
import Trans5 from "../assets/images/trans5.png";
import Trans6 from "../assets/images/trans6.png";
import { AnimatedSection, AnimatedItem } from "./AnimatedSection";

export default function ContactSection() {
  return (
    <AnimatedSection className="w-full bg-[#FFF6ED] lg:min-h-screen relative px-4 pt-6 pb-1 md:pt-20 md:pb-6 lg:pb-20 font-inter overflow-x-hidden">
      <div className="max-w-[85rem] mx-auto flex flex-col items-center relative">
        {/* Service Categories */}
        <div className="w-full mb-0 md:mb-0 mt-0 flex flex-col gap-0 leading-tight md:px-[12rem]">
          {/* Row 1 - Center aligned */}
          <AnimatedItem className="relative flex items-center w-full justify-center gap-0" direction="left">
            <span
              className="block text-[2.5rem] sm:text-[3rem] md:text-[7.5rem] font-regular tracking-[-0.08em] relative z-20"
              style={{ color: "#D6AF60" }}
            >
              COMMERCIAL
            </span>
            <AnimatedItem delay={0.2} className="relative z-10 -mt-8 md:-mt-16">
              <img
                src={Img2}
                alt=""
                className="hidden ml-2 md:ml-2 w-[88px] h-[88px] md:w-[176px] md:h-[176px] object-cover"
                draggable={false}
              />
            </AnimatedItem>
          </AnimatedItem>
          
          {/* Row 2 - Center aligned */}
          <AnimatedItem delay={0.3} className="relative flex items-center justify-center w-full gap-0 -mt-[0.8rem] md:-mt-[1.5rem]" direction="right">
            <div className="absolute left-[-20px] md:left-[-40px] top-[-35%] -translate-y-1/2 z-0 opacity-80">
              <img src={Trans2} alt="" className="h-48 md:h-[30rem] w-auto" />
            </div>
            <span
              className="block text-[2.5rem] sm:text-[3rem] md:text-[7.5rem] font-regular tracking-[-0.04em] md:tracking-[-0.04em] whitespace-nowrap"
              style={{ color: "#132C1F" }}
            >
              RESIDENTIAL
            </span>
          </AnimatedItem>
          
          {/* Row 3 - Center aligned */}
          <AnimatedItem delay={0.4} className="relative flex items-center w-full justify-center gap-0 -mt-[0.8rem] md:-mt-[1.5rem]" direction="left">
            <div className="absolute left-[-40px] md:left-[-80px] top-[55%] -translate-y-1/2 z-0 opacity-80" />
            <AnimatedItem delay={0.5} className="relative z-10">
              <img
                src={Img1}
                alt=""
                className="hidden mr-0 md:mr-36 w-[88px] h-[88px] md:w-[176px] md:h-[176px] object-cover"
                draggable={false}
              />
            </AnimatedItem>
            <span
              className="block text-[2.5rem] sm:text-[3rem] md:text-[7.5rem] font-regular tracking-[-0.08em] md:tracking-[-0.08em]"
              style={{ color: "#D6AF60" }}
            >
              F&B
            </span>
          </AnimatedItem>
          
          {/* Row 4 - Center aligned */}
          <AnimatedItem delay={0.5} className="relative flex items-center justify-center w-full gap-0 -mt-[0.8rem] md:-mt-[1.5rem]" direction="right">
            <div className="absolute right-[-12rem] top-1/2 -translate-y-1/2 z-10 opacity-80">
              <img src={Trans3} alt="" className="h-48 md:h-[30rem] w-auto" />
            </div>
            <span
              className="block text-[2.5rem] sm:text-[3rem] md:text-[7.5rem] font-regular tracking-[-0.08em] md:tracking-[-0.08em] relative z-20"
              style={{ color: "#132C1F" }}
            >
              HOSPITALITY
            </span>
            <AnimatedItem delay={0.6} className="relative z-10">
              <img
                src={Img3}
                alt=""
                className="hidden ml-8 md:ml-8 w-[88px] h-[88px] md:w-[176px] md:h-[176px] object-cover"
                draggable={false}
              />
            </AnimatedItem>
          </AnimatedItem>
          
          {/* Row 5 - Center aligned */}
          <AnimatedItem delay={0.6} className="relative flex items-center w-full justify-center gap-0 -mt-[0.8rem] md:-mt-[1.5rem]" direction="left">
            <div className="absolute left-[-40px] md:left-[-80px] top-[15%] -translate-y-1/2 z-0 opacity-80">
              <img src={Trans5} alt="" className="h-40 md:h-80 w-auto" />
            </div>
            <span
              className="block text-center text-[2.5rem] sm:text-[3rem] md:text-[7.5rem] font-regular tracking-[-0.08em] relative z-20"
              style={{ color: "#D6AF60" }}
            >
              EXPERIENCE & LIFESTYLE
            </span>
          </AnimatedItem>
          
          {/* Row 6 - Center aligned */}
          <AnimatedItem delay={0.7} className="relative w-full -mt-[0.8rem] md:-mt-[1.5rem]" direction="right">
            <div className="relative w-full flex justify-center">
              <div className="absolute right-0 top-[10%] -translate-y-1/2 z-0 opacity-80">
                <img src={Trans6} alt="" className="h-32 md:h-64 w-auto" />
              </div>
              <span
                className="text-center text-[2.5rem] sm:text-[3rem] md:text-[7.5rem] font-regular tracking-[-0.08em] md:tracking-[-0.08em] relative z-20"
                style={{ color: "#132C1F" }}
              >
                INSTITUTIONAL & PUBLIC
              </span>
            </div>
          </AnimatedItem>
          
          {/* Row 7 - Center aligned */}
          <AnimatedItem delay={0.8} className="relative flex items-center w-full justify-center gap-0 -mt-[0.8rem] md:-mt-[1.5rem]" direction="left">
            <div className="absolute left-[-40px] md:left-[-80px] top-[35%] -translate-y-1/2 z-10 opacity-80">
              <img src={Trans4} alt="" className="h-40 md:h-80 w-auto" />
            </div>
            <div className="absolute right-[-40px] md:right-[-80px] top-[55%] -translate-y-1/2 z-10 opacity-80">
              <img src={Trans1} alt="" className="h-40 md:h-80 w-auto" />
            </div>
            <span
              className="block text-center text-[2.5rem] sm:text-[3rem] md:text-[7.5rem] font-regular tracking-[-0.08em] relative z-20"
              style={{ color: "#D6AF60" }}
            >
              INDUSTRIAL & INFRASTRUCTURE
            </span>
          </AnimatedItem>
        </div>

        {/* Row: Left text | Right form */}
        <div className="w-full flex flex-col md:flex-row md:items-end md:justify-between mt-4">
          {/* Left Text */}
          <div className="w-full md:w-1/2 flex justify-start items-end pb-6 md:pb-0">
            {/* Left side intentionally left blank */}
          </div>
          {/* Right Form */}
          <form className="w-full md:w-1/2 max-w-2xl flex flex-col items-end space-y-5">
            <input
              type="text"
              placeholder="What should we call you?"
              className="w-full bg-transparent border-b border-[#AAA] py-[9px] placeholder:text-2xl placeholder:text-black/70 text-base text-black focus:outline-none"
            />
            <input
              type="text"
              placeholder="How big is your space?"
              className="w-full bg-transparent border-b border-[#AAA] py-[9px] placeholder:text-2xl placeholder:text-black/70 text-base text-black focus:outline-none"
            />
            <input
              type="text"
              placeholder="Tell us about your apartment"
              className="w-full bg-transparent border-b border-[#AAA] py-[9px] placeholder:text-2xl placeholder:text-black/70 text-base text-black focus:outline-none"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full bg-transparent border-b border-[#AAA] py-[9px] placeholder:text-2xl placeholder:text-black/70 text-base text-black focus:outline-none"
            />
            <button
              type="submit"
              className="mt-2 w-full bg-transparent border-0 border-b border-[#AAA] py-[9px] px-0 text-left text-black font-bold text-[1.6rem] tracking-wide hover:opacity-80 transition focus:outline-none rounded-none"
            >
              CONTACT ME
            </button>
          </form>
        </div>
      </div>
    </AnimatedSection>
  );
}
