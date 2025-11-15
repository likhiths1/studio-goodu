// src/components/AwardsSection.jsx

import awardIcon from '../assets/images/award.png';

const awards = [
  {
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur. Netus in enim quisque nulla tempus. Amet at eu auctor laoreet commodo dictumst nisi id. Pharetra fringilla sit gravida nibh sit amet et suspendisse aliquam.",
  },
  {
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur. Netus in enim quisque nulla tempus. Amet at eu auctor laoreet commodo dictumst nisi id. Pharetra fringilla sit gravida nibh sit amet et suspendisse aliquam.",
  },
  {
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur. Netus in enim quisque nulla tempus. Amet at eu auctor laoreet commodo dictumst nisi id. Pharetra fringilla sit gravida nibh sit amet et suspendisse aliquam.",
  },
  // Repeat and adjust as needed for additional awards
];

export default function AwardsSection() {
  return (
    <section className="bg-[#FFF6ED] py-12 sm:py-16 md:py-20">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 md:px-8">
        {/* Heading without underline */}
        <h2 className="text-6xl sm:text-8xl md:text-10xl lg:text-[12rem] font-medium tracking-tight text-black font-inter mb-10 sm:mb-12 md:mb-16">
          AWARDS
        </h2>
        
        {/* Award Items */}
        <div className="flex flex-col gap-10 sm:gap-12 md:gap-16">
          {/* Top row - left */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 max-w-full sm:max-w-2xl">
            <img src={awardIcon} alt="Award" className="w-20 h-20 sm:w-24 sm:h-24 bg-[#D9D9D9] p-4 sm:p-6 rounded-none flex-shrink-0" />
            <div className="text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black font-inter">{awards[0].title}</h3>
              <p className="mt-2 text-base sm:text-lg md:text-xl font-inter text-black leading-relaxed">{awards[0].description}</p>
            </div>
          </div>
          
          {/* Middle row - right */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 max-w-full sm:max-w-2xl ml-0 sm:ml-auto">
            <img src={awardIcon} alt="Award" className="w-20 h-20 sm:w-24 sm:h-24 bg-[#D9D9D9] p-4 sm:p-6 rounded-none flex-shrink-0" />
            <div className="text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black font-inter">{awards[1].title}</h3>
              <p className="mt-2 text-base sm:text-lg md:text-xl font-inter text-black leading-relaxed">{awards[1].description}</p>
            </div>
          </div>
          
          {/* Bottom row - left */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 max-w-full sm:max-w-2xl">
            <img src={awardIcon} alt="Award" className="w-20 h-20 sm:w-24 sm:h-24 bg-[#D9D9D9] p-4 sm:p-6 rounded-none flex-shrink-0" />
            <div className="text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black font-inter">{awards[2].title}</h3>
              <p className="mt-2 text-base sm:text-lg md:text-xl font-inter text-black leading-relaxed">{awards[2].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
