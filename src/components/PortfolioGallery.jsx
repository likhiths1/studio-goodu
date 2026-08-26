import Port1 from "../assets/images/portfolio/arthavilla.jpg";
import Port2 from "../assets/images/portfolio/snobsalon.jpg";
import Port3 from "../assets/images/portfolio/tyd.jpg";
import Port4 from "../assets/images/portfolio/srigangaresidence.png";
import Port6 from "../assets/images/portfolio/port6.jpeg";
import Port7 from "../assets/images/portfolio/port7.jpeg";
import Port8 from "../assets/images/portfolio/port8.jpeg";
import Port9 from "../assets/images/portfolio/port9.png";

import { Link } from "react-router-dom";

const portfolioData = [
  {
    img: Port1,
    title: "Artha Villa",
    details: "VIEW PROJECT ⇾",
    link: "/portfolio/1",
  },
  {
    img: Port2,
    title: "Snob Salon",
    details: "VIEW PROJECT ⇾",
    link: "/portfolio/2",
  },
  {
    img: Port3,
    title: "TYD",
    details: "VIEW PROJECT ⇾",
    link: "/portfolio/3",
  },
  {
    img: Port4,
    title: "Sriganga Residence",
    details: "VIEW PROJECT ⇾",
    link: "/portfolio/4",
  },
  {
    img: Port6,
    title: "Villa 43",
    details: "VIEW PROJECT ⇾",
    link: "/portfolio/8",
  },
  {
    img: Port7,
    title: "Villa 21",
    details: "VIEW PROJECT ⇾",
    link: "/portfolio/9",
  },
  {
    img: Port8,
    title: "Antara Villa at Nandi",
    details: "VIEW PROJECT ⇾",
    link: "/portfolio/10",
  },
  {
    img: Port9,
    title: "Club Seven Gym",
    details: "VIEW PROJECT ⇾",
    link: "/portfolio/11",
  },
];

function PortfolioCard({ project }) {
  return (
    <div className="md:w-1/2 flex flex-col">
      <div className="w-full h-[420px] md:h-[800px] bg-transparent overflow-hidden">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover rounded-none"
          draggable={false}
        />
      </div>

      <div className="pt-4">
        <div className="mt-4 font-playfairdisplay font-medium text-[1.3rem] md:text-[2.8rem] text-black">
          {project.title}
        </div>

        <Link
          to={project.link}
          className="portfolio-link inline-block mt-2 font-inter text-xs text-[1.4rem] text-black hover:opacity-80 transition"
        >
          {project.details}
        </Link>
      </div>
    </div>
  );
}

export default function PortfolioGallery() {
  return (
    <section className="w-full bg-[#FFF6ED] py-9 px-3 sm:px-8 md:px-14 flex flex-col items-center">
      <div className="max-w-[80rem] w-full mx-auto md:mt-32">

        {/* Heading */}
        <h2 className="font-inter font-medium text-black text-[2.3rem] md:text-[4.6rem] md:mb-32 tracking-[-0.06em] leading-tight mb-8 w-full text-center">
          EXPLORE OUR GALLERY OF
          <br />
          SOPHISTICATED
          <br />
          ARCHITECTURE AND INTERIORS
        </h2>

        <div className="flex flex-col gap-y-12 md:gap-y-24 mb-12 md:mb-24">

          {/* Row 1 */}
          <div className="flex flex-col md:flex-row gap-x-9 gap-y-8">
            <PortfolioCard project={portfolioData[0]} />
            <PortfolioCard project={portfolioData[1]} />
          </div>

          {/* Row 2 */}
          <div className="flex flex-col md:flex-row gap-x-9 gap-y-8">
            <PortfolioCard project={portfolioData[2]} />
            <PortfolioCard project={portfolioData[3]} />
          </div>

          {/* Row 3 - Villa 43 & Villa 21 */}
          <div className="flex flex-col md:flex-row gap-x-9 gap-y-8">
            <PortfolioCard project={portfolioData[4]} />
            <PortfolioCard project={portfolioData[5]} />
          </div>

          {/* Row 4 - Antara Villa & Club Seven Gym */}
          <div className="flex flex-col md:flex-row gap-x-9 gap-y-8">
            <PortfolioCard project={portfolioData[6]} />
            <PortfolioCard project={portfolioData[7]} />
          </div>

        </div>
      </div>
    </section>
  );
}