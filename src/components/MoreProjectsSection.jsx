import { Link } from "react-router-dom";
import Port1 from "../assets/images/work1.png";
import Port2 from "../assets/images/work4.png";
import Port3 from "../assets/images/work3.png";
import Port4 from "../assets/images/work4.png";
import Port5 from "../assets/images/work5.png";

const portfolioData = [
  {
    img: Port1,
    title: "Project 1",
    details: "DETAILS ⇾",
  },
  {
    img: Port2,
    title: "Project 2",
    details: "DETAILS ⇾",
  },
];

export default function MoreProjectsSection() {
  return (
    <section className="w-full bg-[#FFF6ED] py-9 px-3 sm:px-8 md:px-14 flex flex-col items-center">
      <div className="max-w-[85rem] w-full mx-auto md:mt-32">
        <h2 className="font-inter font-medium text-black tracking-[-0.08em] leading-tight text-5xl md:text-[12rem] mx-auto md:mx-0 md:max-w-full">
          UPCOMING PROJECTS
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
        </div>
      </div>
    </section>
  );
}
