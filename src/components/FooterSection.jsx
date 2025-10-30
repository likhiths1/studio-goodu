import { Link } from "react-router-dom";
import Icon1 from "../assets/images/footer/icon1.png";
import Icon2 from "../assets/images/footer/icon2.png";
import Icon3 from "../assets/images/footer/icon3.png";
import Icon4 from "../assets/images/footer/icon4.png";
import Icon5 from "../assets/images/footer/icon5.png";
import ArrowIcon from "../assets/images/arrow.png";

export default function FooterSection() {
  return (
    <footer className="w-full bg-[#FFF6ED] pt-2 pb-3 px-3 md:px-0 font-inter">
      <div className="max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-5 gap-y-5 gap-x-2 items-end">
        {/* Left: Navigation links */}
        <div className="md:col-span-2 flex flex-col gap-2 pt-3 pb-4">
          {["Apartments", "About", "Infrastructure", "For Investors", "Contact"].map((item) => (
            item === "Contact" ? (
              <Link key={item} to="/contact" className="flex items-center justify-between text-black font-medium text-[1.5rem] py-1 group">
                <span>{item}</span>
                <img src={ArrowIcon} alt="" className="ml-1 w-[21px] h-[21px] opacity-100 group-hover:translate-x-1 transition" />
              </Link>
            ) :item === "About" ? (
              <Link key={item} to="/about" className="flex items-center justify-between text-black font-medium text-[1.5rem] py-1 group">
                <span>{item}</span>
                <img src={ArrowIcon} alt="" className="ml-1 w-[21px] h-[21px] opacity-100 group-hover:translate-x-1 transition" />
              </Link>
            ): (
              <a key={item} href="#" className="flex items-center justify-between text-black font-medium text-[1.5rem] py-1 group">
                <span>{item}</span>
                <img src={ArrowIcon} alt="" className="ml-1 w-[21px] h-[21px] opacity-80 group-hover:translate-x-1 transition" />
              </a>
              
            )
          ))}
        </div>

        {/* Right/meta column */}
        <div className="md:col-span-3 flex flex-col items-end justify-start gap-2 pt-2 pr-1 pl-12">
          <span className="text-xs tracking-tight text-black/70 text-right mb-2">TETUR. SUSPENDISSE ORCI NISL<br/>CONGUE EGESTAS SAGITTIS</span>
          {/* Footer social icons */}
          <div className="flex gap-3 mb-2">
            <img src={Icon1} alt="Social Icon" className="w-[27px] h-[27px] object-cover opacity-90 hover:opacity-100 transition" />
            <img src={Icon2} alt="Social Icon" className="w-[27px] h-[27px] object-cover opacity-90 hover:opacity-100 transition" />
            <img src={Icon3} alt="Social Icon" className="w-[27px] h-[27px] object-cover opacity-90 hover:opacity-100 transition" />
            <img src={Icon4} alt="Social Icon" className="w-[27px] h-[27px] object-cover opacity-90 hover:opacity-100 transition" />
            <img src={Icon5} alt="Social Icon" className="w-[27px] h-[27px] object-cover opacity-90 hover:opacity-100 transition" />
          </div>
        </div>

        {/* Bottom STUDIO GOODU headings: stacked and center-shifted */}
        <div className="col-span-5 w-full pt-6">
          <div className="flex flex-col w-full">
            <span
              className="block w-full text-[3.1rem] md:text-[12rem] font-regular"
              style={{
                color: "#D6AF60",
                lineHeight: 1.02,
                textAlign: "left",
                marginLeft: "8vw",   // adjust margin to center it more
              }}
            >
              STUDIO
            </span>
            <span
              className="block w-full text-[3.1rem] md:text-[12rem] font-regular tracking-tight"
              style={{
                color: "#4D696C",
                lineHeight: 1.02,
                textAlign: "right",
                marginRight: "8vw",  // adjust margin to center it more
              }}
            >
              GOODU
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
