import AboutImg from "../assets/images/services/servicesheaderrr.png";
import { AnimatedSection, AnimatedItem } from "./AnimatedSection";

export default function ServicesHeader() {
  return (
    <AnimatedSection className="w-full bg-[#FFF6ED] py-4 px-4 md:px-0">
      <div className="max-w-[80rem] mx-auto bg-[#FFF6ED]">
        <div className="flex flex-row items-start justify-between w-full pt-3 pb-2">
          <AnimatedItem>
            <h2 className="font-inter text-black font-medium text-[3.2rem] md:text-[12rem] leading-none tracking-[-0.08em] text-left">
              SERVICES
            </h2>
          </AnimatedItem>
        </div>
        <AnimatedItem delay={2}>
          <div className="w-full mt-2 mb-1">
            <img
              src={AboutImg}
              alt="About Us"
              className="block w-full h-full md:h-full object-cover"
              draggable={false}
            />
          </div>
        </AnimatedItem>
      </div>
    </AnimatedSection>
  );
}
