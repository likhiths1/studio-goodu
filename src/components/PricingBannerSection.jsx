import PricingComparison from './PricingTable';
import PricingTable from './PricingTable';

export default function PricingSection() {
  return (
    <section className="w-full bg-[#FFF6ED] py-14 md:py-24 px-3 sm:px-8 md:px-14 font-inter relative">
      <div className="max-w-[90rem] mx-auto relative z-10">
        {/* Headline and subtitle */}
        <div className="flex flex-col md:flex-row justify-between items-end md:items-end mb-8 md:mb-10">
          <h2 className="text-[3.2rem] sm:text-[4.2rem] md:text-[12rem] font-medium tracking-[-0.06em] text-black leading-none">
            PRICING
          </h2>
          <div className="mt-4 md:mt-0 w-full">
            <div className="w-full max-w-6xl mx-auto md:text-right text-[0.87rem] sm:text-base md:text-[1.6rem] md:leading-none text-[#444] font-inter font-regular">
              TETUR. SUSPENDISSE ORCI NISL<br />
              CONGUE EGESTAS SAGITTIS
            </div>
          </div>
        </div>
        {/* Banner Image/Table */}
        <PricingComparison  />
      </div>
    </section>
  );
}
