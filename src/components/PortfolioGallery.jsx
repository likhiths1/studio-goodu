import ArrowIcon from "../assets/images/arrow.png";
import Port1 from "../assets/images/portfolio/arthavilla.jpg";
import Port2 from "../assets/images/portfolio/snobsalon.jpg";
import Port3 from "../assets/images/portfolio/tyd.jpg";
import Port4 from "../assets/images/portfolio/srigangaresidence.png";
import Port5 from "../assets/images/portfolio/port5.png";

import { Link } from "react-router-dom";

const portfolioData = [
  {
    img: Port1,
    title: "Artha Villa",
    details: "DETAILS ⇾",
  },
  {
    img: Port2,
    title: "Snob Salon",
    details: "DETAILS ⇾",
  },
  {
    img: Port3,
    title: "TYD",
    details: "DETAILS ⇾",
  },
  {
    img: Port4,
    title: "Sriganga Residence",
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
    <section className="w-full bg-[#FFF6ED] py-9 px-3 sm:px-8 md:px-14 flex flex-col items-center">
      <div className="max-w-[80rem] w-full mx-auto md:mt-32">
        <h2 className="font-inter font-medium text-black text-[2.3rem] md:text-[4.6rem] md:mb-32 tracking-[-0.06em] leading-tight mb-8 w-full text-center">
          EXPLORE OUR GALLERY OF<br />SOPHISTICATED INTERIORS
        </h2>
        <div className="flex flex-col gap-y-12 md:gap-y-24 mb-12 md:mb-24">
          {/* First row - 50/50 split */}
          <div className="flex flex-col md:flex-row gap-x-9 gap-y-8">
            {/* First item - 50% width */}
            <div className="md:w-1/2 flex flex-col">
              <div className="w-full h-[420px] md:h-[800px] bg-transparent overflow-hidden">
                <img
                  src={portfolioData[0].img}
                  alt={portfolioData[0].title}
                  className="w-full h-full object-cover rounded-none"
                  draggable={false}
                />
              </div>
              <div className="pt-4">
                <div className="mt-4 font-playfairdisplay font-medium text-[1.3rem] md:text-[2.8rem] text-black">
                  {portfolioData[0].title}
                </div>
                <Link 
                  to="/portfolio/1" 
                  className="inline-block mt-2 font-inter text-xs text-[1.4rem] text-black hover:opacity-80 transition"
                >
                  {portfolioData[0].details}
                </Link>
              </div>
            </div>
            
            {/* Second item - 50% width */}
            <div className="md:w-1/2 flex flex-col">
              <div className="w-full h-[420px] md:h-[800px] bg-transparent overflow-hidden">
                <img
                  src={portfolioData[1].img}
                  alt={portfolioData[1].title}
                  className="w-full h-full object-cover rounded-none"
                  draggable={false}
                />
              </div>
              <div className="pt-4">
                <div className="mt-4 font-playfairdisplay font-medium text-[1.3rem] md:text-[2.8rem] text-black">
                  {portfolioData[1].title}
                </div>
                <Link 
                  to="/portfolio/2" 
                  className="inline-block mt-2 font-inter text-xs text-[1.4rem] text-black hover:opacity-80 transition"
                >
                  {portfolioData[1].details}
                </Link>
              </div>
            </div>
          </div>

          {/* Second row - 50/50 split */}
          <div className="flex flex-col md:flex-row gap-x-9 gap-y-8">
            {/* First item - 50% width */}
            <div className="md:w-1/2 flex flex-col">
              <div className="w-full h-[420px] md:h-[800px] bg-transparent overflow-hidden">
                <img
                  src={portfolioData[2].img}
                  alt={portfolioData[2].title}
                  className="w-full h-full object-cover rounded-none"
                  draggable={false}
                />
              </div>
              <div className="pt-4">
                <div className="mt-4 font-playfairdisplay font-medium text-[1.3rem] md:text-[2.8rem] text-black">
                  {portfolioData[2].title}
                </div>
                <Link 
                  to="/portfolio/3" 
                  className="inline-block mt-2 font-inter text-xs text-[1.4rem] text-black hover:opacity-80 transition"
                >
                  {portfolioData[2].details}
                </Link>
              </div>
            </div>

            {/* Second item - 50% width */}
            <div className="md:w-1/2 flex flex-col">
              <div className="w-full h-[420px] md:h-[800px] bg-transparent overflow-hidden">
                <img
                  src={portfolioData[3].img}
                  alt={portfolioData[3].title}
                  className="w-full h-full object-cover rounded-none"
                  draggable={false}
                />
              </div>
              <div className="pt-4">
                <div className="mt-4 font-playfairdisplay font-medium text-[1.3rem] md:text-[2.8rem] text-black">
                  {portfolioData[3].title}
                </div>
                <Link 
                  to="/portfolio/4" 
                  className="inline-block mt-2 font-inter text-xs text-[1.4rem] text-black hover:opacity-80 transition"
                >
                  {portfolioData[3].details}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
