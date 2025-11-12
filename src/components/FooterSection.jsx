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
    <footer className="w-full bg-[#4D696C] mt-8 md:mt-0 pt-2 md:pt-3 pb-0 px-3 md:px-0 md:-mb-24 font-inter">
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

            const className = "flex items-center justify-between text-white font-medium text-[1rem] sm:text-[1.2rem] md:text-[1.5rem] py-1 sm:py-1.5 border-b border-[#efe2d0] group";

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
          <p className="text-[1rem] sm:text-[1.6rem] text-white text-right mt-[6px] sm:mt-[8px] md:mt-[10px] max-w-[90%] sm:max-w-[50%] md:max-w-none self-end" style={{ lineHeight: 1.2, whiteSpace: 'normal' }}>
            DESIGNING SPACES THAT<br />FEEL AS GOOD AS THEY LOOK.
          </p>
          {/* Footer social icons */}
          <div className="flex items-center gap-3 sm:gap-4 mt-auto -translate-y-1 sm:-translate-y-2 md:-translate-y-3">
            <a href="https://www.facebook.com/profile.php?id=61570917755913" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src={Icon1} alt="Instagram" className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] md:w-[32px] md:h-[32px] object-cover opacity-90 hover:opacity-100 transition" />
            </a>
            <a href="https://www.linkedin.com/in/studio-goodu-103610309/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <img src={Icon2} alt="Facebook" className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] md:w-[32px] md:h-[32px] object-cover opacity-90 hover:opacity-100 transition" />
            </a>
            <a href="https://www.instagram.com/studiogoodu/?theme=dark" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <img src={Icon3} alt="LinkedIn" className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] md:w-[32px] md:h-[32px] object-cover opacity-90 hover:opacity-100 transition" />
            </a>
            <a href="#" aria-label="Social Media">
              <img src={Icon4} alt="" className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] md:w-[32px] md:h-[32px] object-cover" />
            </a>
            <a href="#" aria-label="Social Media">
              <img src={Icon5} alt="" className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] md:w-[32px] md:h-[32px] object-cover" />
            </a>
          </div>
        </div>

        {/* Bottom STUDIO GOODU headings: full-bleed, edge-attached */}
        <div className="col-span-5 w-screen relative left-1/2 -translate-x-1/2 pt-6 pb-0 overflow-visible">
          {/* Responsive height so words don't split on small screens */}
          <div className="hidden relative w-screen h-[8rem] sm:h-[12rem] md:h-[20rem] lg:h-[24rem] xl:h-[28rem]">
            {/* STUDIO pinned left/top, responsive size and no wrap */}
            <span
              className="absolute left-0 top-0 whitespace-nowrap text-[5rem] sm:text-[8rem] md:text-[12rem] lg:text-[14rem] tracking-[-0.06em] font-regular tracking-tight leading-none"
              style={{ color: "#D6AF60" }}
            >
              STUDIO
            </span>
            {/* GOODU pinned right/bottom, responsive size and no wrap */}
            <span
              className="absolute right-0 bottom-[-1px] whitespace-nowrap text-[5rem] sm:text-[8rem] md:text-[12rem] lg:text-[14rem] font-regular tracking-tight leading-none"
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
