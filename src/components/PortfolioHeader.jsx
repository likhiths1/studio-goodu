import AboutImg from "../assets/images/portfolio/portfolioheader.jpg";
import { AnimatedSection, AnimatedItem } from "./AnimatedSection";

export default function PortfolioHeader() {
  return (
    <AnimatedSection className="w-full bg-[#FFF6ED] py-4 px-3 sm:px-8 md:px-14">
      <div className="max-w-[90rem] mx-auto bg-[#FFF6ED]">
        <div className="flex flex-row items-start justify-between w-full pt-3 pb-2">
          <AnimatedItem>
            <h2 className="font-inter text-black font-medium text-[3.2rem] md:text-[12rem] leading-none tracking-[-0.08em] text-left">
              PORTFOLIO
            </h2>
          </AnimatedItem>
          <AnimatedItem delay={1}>
            <div className="flex flex-col items-end ml-auto pt-2">
              <span className="uppercase block text-xs md:text-[1.2rem] text-black/80 text-right font-regular leading-5">
                Lorem ipsum dolor sit <br />
                amet consectetur. Suspendisse orci nisl <br />
                congue egestas porta turpis justo.
              </span>
            </div>
          </AnimatedItem>
        </div>
        <AnimatedItem delay={2}>
          <div className="w-full mt-2 mb-1">
          </div>
        </AnimatedItem>
      </div>
    </AnimatedSection>
  );
}
