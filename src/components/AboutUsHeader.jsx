import AboutImg from "../assets/images/aboutuspage/aboutuspage.jpeg";
import { AnimatedSection, AnimatedItem } from "./AnimatedSection";

export default function AboutUsHeader() {
  return (
    <AnimatedSection className="w-full bg-[#FFF6ED] py-4 px-4 md:px-0">
      <div className="max-w-[90rem] mx-auto bg-[#FFF6ED]">
        <AnimatedItem className="flex flex-row items-start justify-between w-full pt-3 pb-2">
          <h2 className="font-inter text-black font-medium text-[3.2rem] md:text-[12rem] leading-none tracking-[-0.08em] text-left">
            ABOUT US
          </h2>
          {/*<div className="flex flex-col items-end ml-auto pt-2">
            <span className="block uppercase text-xs md:text-[1.2rem] text-black/80 text-right font-regular leading-none">
              Lorem ipsum dolor sit <br />
              amet consectetur. Suspendisse orci nisl <br/>
              congue egestas porta turpis justo.
            </span>
          </div> */}
        </AnimatedItem>
        <AnimatedItem delay={1} className="w-full mt-2 mb-1">
          <img
            src={AboutImg}
            alt="About Us"
            className="block w-full h-full md:h-full object-cover"
            draggable={false}
          />
        </AnimatedItem>
      </div>
    </AnimatedSection>
  );
}
