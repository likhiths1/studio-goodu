export default function AboutUsSection() {
  const stats = [
    { number: "01+ Years of Craft", desc: "Shaping spaces that unite architecture, artistry, and emotion." },
    { number: "100+ Projects Delivered", desc: "From intimate residences to expansive spaces, each crafted with intention and precision." },
    { number: "10 min Response Time", desc: "Design conversations shouldn’t wait. We’re always within reach, always listening." },
    { number: "6+ Design Experts", desc: "A multidisciplinary team of architects, designers, and dreamers, united by craft." },
    { number: "24/7 Support", desc: "Because great design doesn’t end with delivery, it evolves with you." },
  ];

  return (
    <section className="w-full bg-[#FFF6ED] py-12 px-2 sm:px-6 md:px-14 font-inter">
      <div className="max-w-[90rem] mx-auto">
        {/* Heading aligned between center and right */}
        <h2 className="text-[3.2rem] sm:text-[3.5rem] md:text-[10rem] font-medium text-black leading-none mb-2 md:mb-4 mx-auto md:mx-0 md:mr-[15vw] max-w-full md:max-w-full text-right">
          ABOUT US
        </h2>
        {/* Subtitle between center and left */}
        <div className="w-full text-xs uppercase md:leading-none md:text-base md:text-[1.2rem] text-[#1d1d1d] opacity-80 font-inter font-regular mb-6 md:mb-10 mx-auto md:mx-0 md:ml-[15vw] text-left md:text-left max-w-full md:max-w-full">
         Designing spaces that feel as good as they look.<br />
          
        </div>
        {/* Stats rows */}
        <div className="flex flex-col bg-[#FFF6ED] ">
          {stats.map((item, i) => (
            <div key={i} className="relative flex flex-row items-end min-h-[80px] md:min-h-[140px]">
              {/* The full-width line (z-0) */}
              <div className="absolute left-0 bottom-0 w-full h-[2px] bg-[#efe2d0] z-0"></div>
              {/* Number (big, black, bottom aligned, z-10) */}
              <div className="text-black flex-1 min-w-[94px] sm:min-w-[140px] md:min-w-[180px] text-[3.6rem] md:text-[5.2rem] lg:text-[8rem] font-[350] leading-none z-10">
                {item.number}
              </div>
              {/* Description (right) */}
              <div className="flex-1 uppercase text-[0.82rem] md:text-base font-medium text-[#444] whitespace-pre-line text-right pt-2 md:pt-0 z-10">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
