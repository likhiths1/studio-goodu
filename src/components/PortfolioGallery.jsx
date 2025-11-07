import ArrowIcon from "../assets/images/arrow.png";
import Port1 from "../assets/images/portfolio/port1.png";
import Port2 from "../assets/images/portfolio/port2.png";
import Port3 from "../assets/images/portfolio/port3.png";
import Port4 from "../assets/images/portfolio/port4.png";
import Port5 from "../assets/images/portfolio/port5.png";

import { Link } from "react-router-dom";

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
    <section className="w-full bg-[#FFF6ED] py-9 px-3 sm:px-8 md:px-14 flex flex-col items-center">
      <div className="max-w-[90rem] w-full mx-auto md:mt-32">
        <h2 className="font-inter font-medium text-black text-[2.3rem] md:text-[4.0rem] md:mb-32 leading-tight mb-8 w-full text-center">
          EXPLORE OUR GALLERY OF<br />SOPHISTICATED INTERIORS
        </h2>
        <div className="flex flex-col gap-y-12 md:gap-y-24 mb-12 md:mb-24">
          {/* First row - 60/40 split */}
          <div className="flex flex-col md:flex-row gap-x-9 gap-y-8">
            {/* First item - 60% width */}
            <div className="md:w-[60%] flex flex-col">
              <div className="w-full h-[300px] md:h-[500px] bg-transparent overflow-hidden">
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
            
            {/* Second item - 40% width */}
            <div className="md:w-[40%] flex flex-col">
              <div className="w-full h-[300px] md:h-[500px] bg-transparent overflow-hidden">
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

          {/* Second row - 40/60 split */}
          <div className="flex flex-col md:flex-row gap-x-9 gap-y-8">
            {/* First item - 40% width */}
            <div className="md:w-[40%] flex flex-col">
              <div className="w-full h-[300px] md:h-[500px] bg-transparent overflow-hidden">
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

            {/* Second item - 60% width */}
            <div className="md:w-[60%] flex flex-col">
              <div className="w-full h-[300px] md:h-[500px] bg-transparent overflow-hidden">
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
        {/* Last image (full row width) */}
        <div className="mt-2 flex flex-col">
          <div className="w-full h-[400px] md:h-[700px] bg-transparent overflow-hidden">
            <img
              src={portfolioData[4].img}
              alt={portfolioData[4].title}
              className="w-full h-full object-cover rounded-none"
              draggable={false}
            />
          </div>
          <div className="pt-6">
            <div className="mt-4 font-playfairdisplay font-medium text-[1.3rem] md:text-[2.6rem] text-black">
              {portfolioData[4].title}
            </div>
            <Link 
              to="/portfolio/5" 
              className="inline-block mt-2 font-inter text-xs text-[1.4rem] text-black hover:opacity-80 transition"
            >
              {portfolioData[4].details}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
