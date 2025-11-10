import PricingComparison from './PricingTable';
import PricingTable from './PricingTable';
import { AnimatedSection, AnimatedItem } from "./AnimatedSection";

export default function PricingSection() {
  return (
    <section id="pricing">
      <AnimatedSection className="w-full bg-[#FFF6ED] py-14 md:py-24 px-3 sm:px-8 md:px-14 font-inter relative">
        <div className="max-w-[90rem] mx-auto relative z-10">
        {/* Headline and subtitle */}
        <div className="flex flex-col md:flex-row justify-between items-end md:items-end mb-2 md:mb-4">
          <AnimatedItem>
            <h2 className="text-[3.2rem] sm:text-[4.2rem] md:text-[12rem] font-medium tracking-[-0.06em] text-black leading-none">
              PRICING
            </h2>
          </AnimatedItem>
        </div>
        {/* Banner Image/Table */}
        <AnimatedItem delay={0.4}>
          <PricingComparison />
        </AnimatedItem>
        </div>
      </AnimatedSection>
    </section>
  );
}
