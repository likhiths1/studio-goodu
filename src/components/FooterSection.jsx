import { Link } from "react-router-dom";
import Icon1 from "../assets/images/footer/icon1.png";
import Icon2 from "../assets/images/footer/icon2.png";
import Icon3 from "../assets/images/footer/icon3.png";
import Icon4 from "../assets/images/footer/icon4.png";
import Icon5 from "../assets/images/footer/icon5.png";
import ArrowIcon from "../assets/images/arrow.png";

export default function FooterSection() {
  return (
    <footer className="w-full bg-[#FFF6ED] pt-3 md:pt-5 lg:pt-2 pb-0 px-3 md:px-0 font-inter">
      <div className="max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-5 gap-y-5 gap-x-2 items-start md:items-stretch">
        {/* Left: Navigation links */}
        <div className="md:col-span-2 flex flex-col gap-1.5 sm:gap-2 pt-3 pb-4 min-w-0">
          {["Apartments", "About", "Infrastructure", "For Investors", "Contact"].map((item) => (
            item === "Contact" ? (
              <Link key={item} to="/contact" className="flex items-center justify-between text-black font-medium text-[1.25rem] sm:text-[1.5rem] md:text-[1.8rem] py-1.5 sm:py-2 border-b border-[#efe2d0] group">
                <span>{item}</span>
                <img src={ArrowIcon} alt="" className="ml-1 w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] md:w-[21px] md:h-[21px] opacity-100 group-hover:translate-x-1 transition" />
              </Link>
            ) :item === "About" ? (
              <Link key={item} to="/about" className="flex items-center justify-between text-black font-medium text-[1.25rem] sm:text-[1.5rem] md:text-[1.8rem] py-1.5 sm:py-2 border-b border-[#efe2d0] group">
                <span>{item}</span>
                <img src={ArrowIcon} alt="" className="ml-1 w-[21px] h-[21px] opacity-100 group-hover:translate-x-1 transition" />
              </Link>
            ): (
              <a key={item} href="#" className="flex items-center justify-between text-black font-medium text-[1.25rem] sm:text-[1.5rem] md:text-[1.8rem] py-1.5 sm:py-2 border-b border-[#efe2d0] group">
                <span>{item}</span>
                <img src={ArrowIcon} alt="" className="ml-1 w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] md:w-[21px] md:h-[21px] opacity-80 group-hover:translate-x-1 transition" />
              </a>
              
            )
          ))}
        </div>

        {/* Right/meta column */}
        <div className="md:col-span-3 flex flex-col h-full items-end justify-start gap-2 pt-2 pr-1 pl-6 sm:pl-10 md:pl-12 min-w-0">
          <span className="text-xs sm:text-sm md:text-[1.2rem] lg:text-[1.6rem] tracking-snug text-black/70 text-right mb-2 leading-loose">TETUR. SUSPENDISSE ORCI NISL<br/>CONGUE EGESTAS SAGITTIS</span>
          {/* Footer social icons */}
          <div className="flex gap-2 sm:gap-3 mb-2 mt-auto">
            <img src={Icon1} alt="Social Icon" className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] md:w-[27px] md:h-[27px] object-cover opacity-90 hover:opacity-100 transition" />
            <img src={Icon2} alt="Social Icon" className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] md:w-[27px] md:h-[27px] object-cover opacity-90 hover:opacity-100 transition" />
            <img src={Icon3} alt="Social Icon" className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] md:w-[27px] md:h-[27px] object-cover opacity-90 hover:opacity-100 transition" />
            <img src={Icon4} alt="Social Icon" className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] md:w-[27px] md:h-[27px] object-cover opacity-90 hover:opacity-100 transition" />
            <img src={Icon5} alt="Social Icon" className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] md:w-[27px] md:h-[27px] object-cover opacity-90 hover:opacity-100 transition" />
          </div>
        </div>

        {/* Bottom STUDIO GOODU headings: full-bleed, edge-attached */}
        <div className="col-span-5 w-screen relative left-1/2 -translate-x-1/2 pt-6 pb-0 overflow-visible">
          {/* Responsive height so words don't split on small screens */}
          <div className="relative w-screen h-[12rem] sm:h-[16rem] md:h-[26rem] lg:h-[30rem] xl:h-[34rem]">
            {/* STUDIO pinned left/top, responsive size and no wrap */}
            <span
              className="absolute left-0 top-0 whitespace-nowrap text-[6.5rem] sm:text-[10rem] md:text-[16rem] lg:text-[18rem] font-regular tracking-tight leading-none"
              style={{ color: "#D6AF60" }}
            >
              STUDIO
            </span>
            {/* GOODU pinned right/bottom, responsive size and no wrap */}
            <span
              className="absolute right-0 bottom-[-1px] whitespace-nowrap text-[6.5rem] sm:text-[10rem] md:text-[16rem] lg:text-[18rem] font-regular tracking-tight leading-none"
              style={{ color: "#4D696C" }}
            >
              GOODU
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
