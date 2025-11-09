import { Link } from "react-router-dom";
import Icon1 from "../assets/images/footer/icon1.png";
import Icon2 from "../assets/images/footer/icon2.png";
import Icon3 from "../assets/images/footer/icon3.png";
import Icon4 from "../assets/images/footer/icon4.png";
import Icon5 from "../assets/images/footer/icon5.png";
import ArrowIcon from "../assets/images/arrow.png";

const footerLinks = [
  { name: "About", href: "/about", isExternal: false },
  { name: "Services", href: "/services", isExternal: false },
  { name: "Portfolio", href: "/portfolio", isExternal: false },
  { name: "Pricing", href: "#", isExternal: true },
  { name: "Blog", href: "/blog", isExternal: false },
  { name: "Contact", href: "/contact", isExternal: false },
];

export default function FooterSection() {
  return (
    <footer className="w-full bg-[#4D696C] mt-14 md:mt-0 pt-3 md:pt-5 lg:pt-2 pb-0 px-3 md:px-0 md:-mb-36 font-inter">
      <div className="max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-5 gap-y-5 gap-x-2 items-start md:items-stretch">
        {/* Left: Navigation links */}
        <div className="md:col-span-2 flex flex-col gap-1.5 sm:gap-2 pt-3 pb-4 min-w-0">
          {footerLinks.map((link) => {
            const content = (
              <>
                <span>{link.name}</span>
                <img 
                  src={ArrowIcon} 
                  alt="" 
                  className="ml-1 w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] md:w-[21px] md:h-[21px] opacity-100 group-hover:translate-x-1 transition filter brightness-0 invert" 
                />
              </>
            );

            const className = "flex items-center justify-between text-white font-medium text-[1.25rem] sm:text-[1.5rem] md:text-[2.3rem] py-1.5 sm:py-2 border-b border-[#efe2d0] group";

            return link.isExternal ? (
              <a key={link.name} href={link.href} className={className}>
                {content}
              </a>
            ) : (
              <Link key={link.name} to={link.href} className={className}>
                {content}
              </Link>
            );
          })}
        </div>

        {/* Right/meta column */}
        <div className="md:col-span-3 flex flex-col h-full items-end justify-start gap-3 pt-2 pr-1 pl-0 md:pl-0 min-w-0 mt-3 md:mt-0">
          <p className="text-[0.9rem] sm:text-[1.6rem] text-white text-right mt-[10px] sm:mt-[12px] md:mt-[14px] max-w-[90%] sm:max-w-[50%] md:max-w-none self-end" style={{ lineHeight: 1.2, whiteSpace: 'normal' }}>TETUR. SUSPENDISSE ORCI <br />NISL CONGUE EGESTAS SAGITTIS</p>
          {/* Footer social icons */}
          <div className="flex items-center gap-3 sm:gap-4 mt-auto -translate-y-1 sm:-translate-y-2 md:-translate-y-3">
            <a href="https://www.facebook.com/profile.php?id=61570917755913" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src={Icon1} alt="Instagram" className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[43px] md:h-[43px] object-cover opacity-90 hover:opacity-100 transition" />
            </a>
            <a href="https://www.linkedin.com/in/studio-goodu-103610309/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <img src={Icon2} alt="Facebook" className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[43px] md:h-[43px] object-cover opacity-90 hover:opacity-100 transition" />
            </a>
            <a href="https://www.instagram.com/studiogoodu/?theme=dark" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <img src={Icon3} alt="LinkedIn" className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[43px] md:h-[43px] object-cover opacity-90 hover:opacity-100 transition" />
            </a>
            <a href="#" aria-label="Social Media">
              <img src={Icon4} alt="" className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[43px] md:h-[43px] object-cover" />
            </a>
            <a href="#" aria-label="Social Media">
              <img src={Icon5} alt="" className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[43px] md:h-[43px] object-cover" />
            </a>
          </div>
        </div>

        {/* Bottom STUDIO GOODU headings: full-bleed, edge-attached */}
        <div className="col-span-5 w-screen relative left-1/2 -translate-x-1/2 pt-6 pb-0 overflow-visible">
          {/* Responsive height so words don't split on small screens */}
          <div className="hidden relative w-screen h-[12rem] sm:h-[16rem] md:h-[26rem] lg:h-[30rem] xl:h-[34rem]">
            {/* STUDIO pinned left/top, responsive size and no wrap */}
            <span
              className="absolute left-0 top-0 whitespace-nowrap text-[6.5rem] sm:text-[10rem] md:text-[16rem] lg:text-[18rem] tracking-[-0.06em] font-regular tracking-tight leading-none"
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
