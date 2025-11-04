export default function AboutUsSection() {
  const stats = [
    { number: "10+", desc: "TETUR. SUSPENDISSE ORCI NISL\nCONGUE EGESTAS SAGITTIS" },
    { number: "210", desc: "TETUR. SUSPENDISSE ORCI NISL\nCONGUE EGESTAS SAGITTIS" },
    { number: "10min", desc: "TETUR. SUSPENDISSE ORCI NISL\nCONGUE EGESTAS SAGITTIS" },
    { number: "9+", desc: "TETUR. SUSPENDISSE ORCI NISL\nCONGUE EGESTAS SAGITTIS" },
    { number: "24/7", desc: "TETUR. SUSPENDISSE ORCI NISL\nCONGUE EGESTAS SAGITTIS" },
  ];

  return (
    <section className="w-full bg-[#FFF6ED] py-12 px-2 sm:px-6 md:px-14 font-inter">
      <div className="max-w-[90rem] mx-auto">
        {/* Heading aligned between center and right */}
        <h2 className="text-[3.2rem] sm:text-[3.5rem] md:text-[12rem] font-medium text-black leading-none mb-2 md:mb-4 text-right ml-auto mr-0 max-w-full md:max-w-[90rem]">
          ABOUT US
        </h2>
        {/* Subtitle between center and left */}
        <div className="w-full text-xs md:leading-none md:text-base md:text-[1.6rem] text-[#1d1d1d] opacity-80 font-inter font-regular mb-4 md:mb-6 text-left ml-0 mr-auto max-w-full md:max-w-full">
          TETUR. SUSPENDISSE ORCI NISL<br />
          CONGUE EGESTAS SAGITTIS
        </div>
        {/* Stats rows (full-bleed) */}
        <div className="flex flex-col bg-[#FFF6ED] md:mx-[-56px]">
          {stats.map((item, i) => (
            <div key={i} className="relative flex flex-row items-end min-h-[80px] md:min-h-[140px] pt-4 pb-6 md:pt-6 md:pb-8 md:px-14 mb-6 md:mb-10 last:mb-0">
              {/* The full-width line (above the number) */}
              <div className="absolute bottom-0 h-[4px] bg-[#efe2d0] z-20 inset-x-0 md:inset-x-[-56px]"></div>
              {/* Number (slightly clipped by the line) */}
              <div className="text-black flex-1 min-w-[94px] sm:min-w-[140px] md:min-w-[180px] text-[3.6rem] md:text-[5.2rem] lg:text-[16rem] font-[350] leading-none -mb-[18px] md:-mb-[30px] lg:-mb-[36px] z-10">
                {item.number}
              </div>
              {/* Description (right) */}
              <div className="flex-1 text-[0.82rem] md:text-[1.6rem] font-medium text-[#444] whitespace-pre-line text-right pt-2 md:pt-0 mb-3 md:mb-4 z-10">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
