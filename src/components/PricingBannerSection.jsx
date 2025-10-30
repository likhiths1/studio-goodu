import PricingBanner from '../assets/images/pricing/banner.png';

export default function PricingSection() {
  return (
    <section className="w-full bg-[#FFF6ED] py-14 md:py-24 px-2 sm:px-8 font-inter relative">
      <div className="max-w-[90rem] mx-auto relative z-10">
        {/* Headline and subtitle */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-10">
          <h2 className="text-[3.2rem] sm:text-[4.2rem] md:text-[10rem] font-medium tracking-tight text-black leading-none">
            PRICING
          </h2>
          <div className="mt-4 md:mt-0 md:text-right text-[0.87rem] sm:text-base md:1.2rem md:leading-none text-[#444] font-inter font-regular">
            TETUR. SUSPENDISSE ORCI NISL<br />
            CONGUE EGESTAS SAGITTIS
          </div>
        </div>
        {/* Banner Image/Table */}
        <div className="w-full max-w-6xl mx-auto">
          <img
            src={PricingBanner}
            alt="Pricing table"
            className="w-full h-auto object-contain object-center block"
            draggable={false}
            style={{ borderRadius: 0 }}
          />
        </div>
      </div>
    </section>
  );
}
