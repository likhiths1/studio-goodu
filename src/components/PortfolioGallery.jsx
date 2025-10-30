import ArrowIcon from "../assets/images/arrow.png";
import Port1 from "../assets/images/portfolio/port1.png";
import Port2 from "../assets/images/portfolio/port2.png";
import Port3 from "../assets/images/portfolio/port3.png";
import Port4 from "../assets/images/portfolio/port4.png";
import Port5 from "../assets/images/portfolio/port5.png";

const portfolioData = [
  {
    img: Port1,
    title: "Contemporary Bachelor Pad",
    details: "DETAILS ⇾",
  },
  {
    img: Port2,
    title: "Modern Living Room",
    details: "DETAILS ⇾",
  },
  {
    img: Port3,
    title: "Olive Wood Opulence",
    details: "DETAILS ⇾",
  },
  {
    img: Port4,
    title: "White Elegant Residential",
    details: "DETAILS ⇾",
  },
  {
    img: Port5,
    title: "Exquisite Marble Bathroom",
    details: "DETAILS ⇾",
  },
];

export default function PortfolioGallery() {
  return (
    <section className="w-full bg-[#FFF6ED] py-9 px-4 flex flex-col items-center">
      <div className="max-w-[90rem] w-full mx-auto md:mt-32">
        <h2 className="font-inter font-medium text-black text-[2.3rem] md:text-[3.31rem] md:mb-32 leading-tight mb-8 w-full text-center">
          EXPLORE OUR GALLERY OF<br />SOPHISTICATED INTERIORS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-9 md:gap-y-32 gap-y-8 mb-8 md:mb-32">
          {portfolioData.slice(0, 4).map((item, i) => (
            <div key={item.title} className="flex flex-col">
              <div className="w-full h-full md:h-full bg-transparent">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-contain rounded-none"
                  draggable={false}
                />
              </div>
              <div className="pt-3 pb-1">
                <div className="font-playfairdisplay font-medium text-[1.3rem] md:text-[2.6rem] text-black mb-1">{item.title}</div>
                <div className="flex items-center gap-1 font-inter text-xs text-[1rem] text-black mt-0">
                  {item.details}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Last image (full row width) */}
        <div className="mt-2 flex flex-col">
          <div className="w-full h-full md:h-full bg-transparent">
            <img
              src={portfolioData[4].img}
              alt={portfolioData[4].title}
              className="w-full h-full object-contain rounded-none"
              draggable={false}
            />
          </div>
          <div className="pt-3 pb-2">
            <div className="font-playfairdisplay font-medium text-[1.3rem] md:text-[2.6rem] text-black mb-1">
              {portfolioData[4].title}
            </div>
            <div className="flex items-center gap-1 font-inter text-xs md:text-[1rem] text-black mt-0">
              {portfolioData[4].details}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
