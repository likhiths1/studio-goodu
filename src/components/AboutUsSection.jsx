import BgLine from "../assets/images/contactuspage/bgline.png";

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
        <h2 className="text-[3.2rem] sm:text-[3.5rem] md:text-[12rem] font-medium text-black tracking-[-0.08em] leading-none mb-2 md:mb-4 text-right ml-auto mr-0 max-w-full md:max-w-[90rem]">
          ABOUT US
        </h2>
        {/* Subtitle between center and left */}
        <div className="w-full text-xs md:leading-none md:text-[1.6rem] text-[#1d1d1d] opacity-80 font-inter font-regular mb-4 md:mb-6 text-left ml-0 mr-auto max-w-full md:max-w-full">
          TETUR. SUSPENDISSE ORCI NISL<br />
          CONGUE EGESTAS SAGITTIS
        </div>
        {/* Stats rows (full-bleed) */}
        <div className="flex flex-col bg-[#FFF6ED] md:mx-[-56px]">
          {stats.map((item, i) => (
            <div key={i} className="relative flex flex-row items-end min-h-[80px] md:min-h-[140px] pt-4 pb-6 md:pt-6 md:pb-8 md:px-14 mb-6 md:mb-10 last:mb-0">
              {/* Number column with overlapping divider at 25% and masked lower area */}
              <div className="relative flex-1 min-w-[94px] sm:min-w-[140px] md:min-w-[180px]">
                {/* Divider positioned at 25% of the number area */}
                <div
                  className="absolute top-[75%] w-screen -translate-x-1/3 h-[2px] bg-[#969696] z-30"
                />
                {/* Overlay from divider downwards to hide the number using bgline.png */}
                <div
                  className="absolute left-0 right-0 z-20 pointer-events-none"
                  style={{ top: 'calc(75% + 3px)', bottom: 0, backgroundImage: `url(${BgLine})`, backgroundRepeat: 'repeat-x', backgroundPosition: 'top left', backgroundSize: 'auto 12px', backgroundColor: '#FFF6ED' }}
                />
                {/* The number itself */}
                <div className="relative z-10 text-black text-[3.6rem] md:text-[5.2rem] tracking-[-0.08em] lg:text-[16rem] font-[350] leading-none">
                  {item.number}
                </div>
              </div>
              {/* Description (right) */}
              <div className="relative z-40 flex-1 text-[0.82rem] md:text-[1.6rem] font-medium text-[#444] whitespace-pre-line text-right pt-0 mb-28">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
