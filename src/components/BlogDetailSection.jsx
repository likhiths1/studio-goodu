import BannerImg from "../assets/images/snob.png";
import GooduLogo from "../assets/images/herosection/goodu-logoblue.png";

export default function BlogDetailSection() {
  return (
    <section className="w-full bg-[#FEF6ED] py-12 md:py-20 px-4 md:px-6 font-inter">
      <div className="max-w-[90rem] mx-auto">
        {/* Date */}
        <p className="text-sm md:text-[1.6rem] text-center text-gray-500 tracking-wide mb-6">
          APRIL 23, 2025
        </p>

        {/* Title */}
        <h1 className="text-3xl md:text-7xl font-medium text-center text-black mb-12 tracking-[-0.08em]">
          THE ROLE OF ART IN LUXURY
          <br />
          INTERIOR DESIGN
        </h1>

        {/* Intro Paragraph */}
        <p className="md:mx-36 font-inter font-light text-base md:text-2xl text-black/80 leading-relaxed mb-8 text-justify">
          Art has long been a defining element of luxury interior design,
          serving as both an aesthetic centerpiece and a reflection of personal
          taste. In a luxury space, the integration of fine art elevates the
          environment, transforming it into a sophisticated and engaging
          experience.
        </p>

        <p className="md:mx-36 font-inter font-light text-base md:text-2xl text-black/80 leading-relaxed mb-12 text-justify">
          The placement of art in a luxury interior is equally important. A
          carefully curated gallery wall or an oversized painting above a grand
          fireplace can create focal points that define a room's atmosphere.
        </p>

        {/* Banner Image */}
        {/* Banner Image */}
        <div className="w-full mb-12 flex justify-center">
          <img
            src={BannerImg}
            alt="Luxury Interior"
            className="w-full max-w-[1300px] h-auto object-cover"
            draggable={false}
          />
        </div>

        {/* Quote Block */}
        <div className="text-center mb-12">
          <p className="text-2xl md:text-5xl font-normal text-black tracking-[-0.06em] leading-relaxed">
            The details are not the details.
            <br />
            They make the design.
          </p>
        </div>

        {/* Content Paragraphs */}
        <p className="font-inter md:mx-36 font-light text-sm md:text-2xl text-black/80 leading-relaxed mb-8 text-justify">
          In addition to its visual impact, art in luxury interior design often
          reflects the homeowner's values, interests, or life experiences.
          Whether it's evoking nostalgia, honors cultural heritage, or supports
          a cause, art becomes a form of storytelling that enriches the space
          and the lives of those who live within it.
        </p>

        <p className="font-inter md:mx-36 font-light text-sm md:text-2xl text-black/80 leading-relaxed mb-16 text-justify">
          In conclusion, art plays a multifaceted role in luxury interior design
          by enhancing the aesthetic appeal, fostering emotional connection, and
          creating a refined atmosphere. It is not only a display of beauty but
          also a symbol of sophistication and individuality that transforms a
          house into a true home.
        </p>

        {/* Navigation - Previous/Next with centered Goodu logo */}
        <div className="flex items-center justify-between border-t border-[#969696] pt-6 md:pt-8">
          <button
            className="inline-flex items-center gap-2 font-playfairdisplay tracking-[0.08em] text-[1.05rem] md:text-[1.25rem] text-black hover:opacity-80 transition bg-transparent border-none"
            style={{ background: "none", border: "none" }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-80"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
            <span>PREVIOUS</span>
          </button>

          {/* Center Logo (larger) */}
          <div className="flex items-center justify-center">
            <img
              src={GooduLogo}
              alt="Studio Goodu"
              className="w-10 h-auto md:w-24 object-contain"
            />
          </div>

          <button
            className="inline-flex items-center gap-2 font-playfairdisplay tracking-[0.08em] text-[0.95rem] md:text-[1.1rem] text-black hover:opacity-80 transition bg-transparent border-none"
            style={{ background: "none", border: "none" }}
          >
            <span>NEXT</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-80"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
