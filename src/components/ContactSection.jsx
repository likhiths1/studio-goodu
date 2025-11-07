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
          <AnimatedItem className="flex items-center w-full justify-start gap-0">
            <span
              className="block text-[2.5rem] sm:text-[3rem] md:text-[8rem] font-regular tracking-[-0.08em]"
              style={{ color: "#D6AF60" }}
            >
              TRANSFORM
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
          {/* YOUR LIVING Row - Right aligned */}
          <AnimatedItem delay={0.3} className="flex items-center justify-end w-full gap-0 -mt-[0.8rem] md:-mt-[1.5rem]">
              <span
                className="block text-[2.5rem] sm:text-[3rem] md:text-[8rem] font-regular md:tracking-[-0.04em] whitespace-nowrap"
                style={{ color: "#4D696C" }}
              >
                YOUR LIVING
              </span>
          </AnimatedItem>
          {/* INTO A Row - Left aligned */}
          <AnimatedItem delay={0.4} className="flex items-center w-full justify-start gap-0 -mt-[0.8rem] md:-mt-[1.5rem]">
            <AnimatedItem delay={0.5}>
              <img
                src={Img1}
                alt=""
                className="hidden mr-0 md:mr-36 w-[88px] h-[88px] md:w-[176px] md:h-[176px] object-cover"
                draggable={false}
              />
            </AnimatedItem>
            <span
              className="block text-[2.5rem] sm:text-[3rem] md:text-[8rem] font-regular md:tracking-[-0.08em]"
              style={{ color: "#D6AF60" }}
            >
              INTO A
            </span>
          </AnimatedItem>
          {/* MASTERPIECE Row - Right aligned */}
          <AnimatedItem delay={0.5} className="flex items-center justify-end w-full gap-0 -mt-[0.8rem] md:-mt-[1.5rem]">
            <span
              className="block text-[2.5rem] sm:text-[3rem] md:text-[8rem] font-regular md:tracking-[-0.08em]"
              style={{ color: "#4D696C" }}
            >
              MASTERPIECE
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
        </div>

        {/* Row: Left text | Right form */}
        <div className="w-full flex flex-col md:flex-row md:items-end md:justify-between mt-4">
          {/* Left Text */}
          <div className="w-full md:w-1/2 flex justify-start items-end pb-6 md:pb-0">
            <span className="text-black font-medium text-2xl sm:text-3xl md:text-5xl leading-snug text-left">
              Lorem Ipsum
              <br />
              Dolor Sit Amet
            </span>
          </div>
          {/* Right Form */}
          <form className="w-full md:w-1/2 max-w-2xl flex flex-col items-end space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-transparent border-b border-[#AAA] py-[9px] placeholder:text-2xl placeholder:text-black/70 text-base text-black focus:outline-none"
            />
            <input
              type="text"
              placeholder="Apartment Size"
              className="w-full bg-transparent border-b border-[#AAA] py-[9px] placeholder:text-2xl placeholder:text-black/70 text-base text-black focus:outline-none"
            />
            <input
              type="text"
              placeholder="Apartment Details"
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
