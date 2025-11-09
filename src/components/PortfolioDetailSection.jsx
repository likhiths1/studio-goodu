// Import images - adjust the count based on how many images you have
import Img1 from "../assets/images/portfoliodetail/arthavilla1.jpg";
import Img2 from "../assets/images/portfoliodetail/arthavilla2.jpg";
import Img3 from "../assets/images/portfoliodetail/arthavilla3.jpg";
import Img4 from "../assets/images/portfoliodetail/arthavilla4.jpg";
import Img5 from "../assets/images/portfoliodetail/arthavilla5.jpg";
import Img6 from "../assets/images/portfoliodetail/arthavilla6.jpg";
import Img7 from "../assets/images/portfoliodetail/arthavilla7.jpg";
import Img8 from "../assets/images/portfoliodetail/arthavilla8.jpg";
import Img9 from "../assets/images/portfoliodetail/arthavilla9.jpg";
import Img10 from "../assets/images/portfoliodetail/arthavilla10.jpg";
import StartImg from "../assets/images/portfolio/arthavilla.jpg";
import GooduLogo from "../assets/images/herosection/goodu-logoblue.png";

export default function PortfolioDetailSection({ title, hero, detailSections: detailSectionsProp, imageGroups: imageGroupsProp, serviceType = "Residential Interior", features = "Marble Counter, Wooden Flooring, Custom Lighting", onPrev, onNext, hasPrev = true, hasNext = true }) {
  // Organize images in groups: 2, 3, 2, 3, etc.
  const imageGroupsDefault = [
    { images: [Img1, Img7], columns: 2 }, // Row 1: 2 images (50-50)
    { images: [Img3, Img4, Img5], columns: 3 }, // Row 2: 3 images (33.33 each)
    { images: [Img9, Img2], columns: 2 }, // Row 3: 2 images (50-50)
    { images: [Img8, Img6, Img10], columns: 3 }, // Row 4: 3 images (33.33 each)
  ];

  const imageGroups = imageGroupsProp ?? imageGroupsDefault;

  // Data-driven detail sections (semantic headings and paragraphs)
  const detailSectionsDefault = [
    {
      heading: null,
      paragraphs: [
        "Every retreat begins with a refusal a refusal of routine, of walls that echo the everyday, of patterns worn thin by familiarity. In Bengaluru’s eastern suburbs, one family sought precisely that kind of escape: a home that didn’t resemble home. Their brief to designer Tharun Mahesh of Studio Goodu was simple yet profound ‘something out of the box, but deeply therapeutic.’",
      ],
    },
    {
      heading: "Architecture and Vision",
      paragraphs: [
        "Across 9,500 sq. ft over two levels, Artha Villa rises as a prefabricated steel structure an unconventional choice guided by speed and flexibility. ‘The challenge,’ says Mahesh, ‘was to erase every trace of prefab and elevate it to an experience to set the Bali vibes high.’",
        "What emerged is a home that fuses engineering precision with handcrafted soul. The steel skeleton is wrapped in block masonry and lime plaster, softened by textures that breathe warmth and tactility. Off-white tones, timber accents, and generous sunlight bathe the interiors in calm, while the plan quietly aligns with Vastu Shastra principles harmony expressed through spatial balance.",
      ],
    },
    {
      heading: "Material Poetry",
      paragraphs: [
        "Every surface at Artha Villa tells a tactile story. Lime plastered walls reflect soft tropical light; live-edge furniture grounds the modern aesthetic in nature; and wicker becomes a recurring motif shaping pendant lamps that cast organic shadows like woven sunlight.",
        "Rather than over-engineered carpentry, Mahesh chose masonry-built surfaces and custom pieces that merge architecture with furniture—ensuring the house feels sculpted rather than assembled.",
      ],
    },
    {
      heading: "Spatial Harmony",
      paragraphs: [
        "A carved timber door ushers you into a soaring double-height living space, where monumental arches balance the intimacy of smaller niches. The cementitious flooring—smooth as poured microcement with subtle paper joints—meets jute rugs and flamboyant pendant lights, creating an atmosphere both grounded and graceful.",
        "The dining area continues this earthy rhythm with a live-edge table, handmade chairs, and a striking papier-mâché artwork. The U-shaped kitchen flows effortlessly, its counters appearing as natural extensions of the walls—a study in quiet integration.",
        "Across the villa, open layouts and layered textures replace ornamentation with experience. A billiards corner framed by rubble-stone columns opens to the sky; a folded metal staircase floats beside an indoor garden; and a mezzanine lounge overlooks the living area—a casual space designed for conversation and drift.",
      ],
    },
    {
      heading: "The Private Realm",
      paragraphs: [
        "Each of the four bedrooms carries a whisper of Bali—masonry beds finished in lime, soft linen drapes, and arched French windows that open to palm-lined balconies. Hand-carved niches cradle clay artefacts, pendant lights bloom like tropical flowers, and a jacuzzi beneath open skies turns ritual into retreat.",
      ],
    },
    {
      heading: "A Living Boundary",
      paragraphs: [
        "In true Balinese spirit, Artha Villa refuses the idea of enclosure. Instead of walls, a permeable boundary of bamboo and palms creates a living edge that blurs the line between architecture and landscape.",
        "Here, nature is not a backdrop but an active participant—whispering through leaves, reflecting in pools, and softening every line of construction.",
      ],
    },
    {
      heading: "The Spirit of Goodu",
      paragraphs: [
        "For Mahesh, Artha Villa became an experiment in harmony between craft and technology, structure and softness, pragmatism and poetry. ‘Can a prefab structure evoke emotion? Can steel carry the soul of Bali?’ he reflects.",
        "The answer stands quietly in the eastern breeze—a retreat that conceals its precision within serenity, where design becomes therapy, and a house becomes a mood suspended between Bangalore and Bali.",
      ],
    },
  ];

  // Use provided sections if passed from the page; otherwise fallback
  const detailSections = detailSectionsProp ?? detailSectionsDefault;

  return (
    <section className="w-full bg-[#FFF6ED] py-12 md:py-20 px-4 md:px-6 font-inter">
      <div className="max-w-[80rem] mx-auto">
        {/* Top banner image */}
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-2xl md:text-[4.6rem] font-playfairdisplay font-medium text-black mb-6 tracking-tight">
            {title ?? "ARTHA VILLA"}
          </h1>
          {/* Top banner image */}
          <div className="w-full mt-12 mb-12 place-items-center">
            <img
              src={hero ?? StartImg}
              alt="Portfolio Hero"
              className="w-[60%] h-[800px] object-cover"
              draggable={false}
            />
          </div>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-14">
            {/* Left side - Description */}
            <div className="flex-1">
              <div className="mt-12 space-y-10">
                {detailSections.map((sec, idx) => (
                  <div key={idx} className="space-y-4">
                    {sec.heading && (
                      <h3 className="font-inter text-left font-medium text-xl md:text-3xl text-black tracking-tight">
                        {sec.heading}
                      </h3>
                    )}
                    {sec.paragraphs.map((p, i) => (
                      <p
                        key={i}
                        className="font-inter text-justify font-light text-sm md:text-2xl max-w-[80rem] text-black/80 leading-relaxed"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            {/* Right side - Service Type and Features */}
            <div className="flex-shrink-0 md:w-64 space-y-6 mt-12 text-left">
              <div>
                <h3 className="font-inter text-left text-xs md:text-2xl font-medium text-black tracking-wide mb-2 inline-block border-b border-black/20 pb-2">
                  SERVICE TYPE:
                </h3>
                <p className="font-inter text-left text-sm md:text-xl text-black/70 leading-snug max-w-[16rem]">
                  {serviceType}
                </p>
              </div>
              <div>
                <h3 className="font-inter text-left text-xs md:text-2xl font-medium text-black tracking-wide mb-2 inline-block border-b border-black/20 pb-2">
                  FEATURES:
                </h3>
                <p className="font-inter text-left text-sm md:text-lg text-black/70 leading-snug max-w-[16rem]">
                  {features}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Grid - Alternating 2 and 3 columns */}
        <div className="space-y-4 md:space-y-6">
          {imageGroups.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className={`grid ${
                group.columns === 2 ? "grid-cols-2" : "grid-cols-3"
              } gap-4 md:gap-6`}
            >
              {group.images.map((image, imageIndex) => (
                <div key={imageIndex} className="w-full">
                  <img
                    src={image}
                    alt={`Portfolio ${groupIndex + 1}-${imageIndex + 1}`}
                    className="w-full h-[200px] md:h-[300px] lg:h-full object-cover"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Navigation - Previous/Next with centered Goodu logo */}
        <div className="flex items-center justify-between border-t border-[#969696] pt-6 md:pt-8 mt-16">
          <button
            className={`inline-flex items-center gap-2 font-playfairdisplay tracking-[0.08em] text-[1.05rem] md:text-[1.25rem] text-black transition bg-transparent border-none focus:outline-none focus:ring-0 outline-none ring-0 hover:outline-none active:outline-none ${hasPrev ? 'hover:opacity-80' : 'opacity-40 cursor-not-allowed'}`}
            style={{ background: "none", border: "none", WebkitTapHighlightColor: "transparent" }}
            onClick={hasPrev ? onPrev : undefined}
            type="button"
            disabled={!hasPrev}
            aria-disabled={!hasPrev}
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
            className={`inline-flex items-center gap-2 font-playfairdisplay tracking-[0.08em] text-[1.05rem] md:text-[1.25rem] text-black transition bg-transparent border-none focus:outline-none focus:ring-0 outline-none ring-0 hover:outline-none active:outline-none ${hasNext ? 'hover:opacity-80' : 'opacity-40 cursor-not-allowed'}`}
            style={{ background: "none", border: "none", WebkitTapHighlightColor: "transparent" }}
            onClick={hasNext ? onNext : undefined}
            type="button"
            disabled={!hasNext}
            aria-disabled={!hasNext}
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
