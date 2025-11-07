import ArchitectureImg from "../assets/images/services/architecture.jpg";
import ConstructionImg from "../assets/images/services/construction.jpg";
import InteriorImg from "../assets/images/services/interior.jpg";
import TurnkeyImg from "../assets/images/services/turnkey.jpg";

const services = [
  {
    title: "ARCHITECTURE",
    description: "Designing structures that inspire and endure.We approach architecture as an art of balance between form and feeling, innovation and integrity. Each project is guided by context, purpose, and the human experience it holds. From spatial planning to material selection, every line is drawn with intention.",
    included: [
      "⁠Conceptual & Schematic Design",
      "Structural Coordination & Site Planning",
      "Spatial Flow & Elevation Detailing"
    ],
    price: "₹5,000 to 30,000 inr*",
    image: ArchitectureImg,
    imagePosition: "right"
  },
  {
    title: "CONSTRUCTION",
    description: "Building design into lasting reality. Our construction services bring design to life with precision, integrity, and craftsmanship. From foundation to finish, we ensure every element reflects both function and finesse. Guided by timelines, transparency, and trust, we turn architectural visions into tangible experiences that stand the test of time.",
    included: [
      "Structural Planning & Coordination",
      "Material Procurement & Quality Management",
      "On-Site Supervision & Project Delivery"
    ],
    price: "₹5,000 to 30,000 inr*",
    image: ConstructionImg,
    imagePosition: "left"
  },
  {
    title: "INTERIORS",
    description: "Designing spaces that feel as good as they look.At Studio Goodu, interiors go beyond aesthetics they’re about emotion, flow, and everyday ease. We curate light, texture, and proportion to craft spaces that reflect your personality while maintaining timeless sophistication. Each element is designed with intention, blending comfort with understated luxury.",
    included: [
      "Interior Concept & Space Planning",
      "Bespoke Furniture & Lighting Selection",
      "Custom Material & Color Palettes"
    ],
    price: "₹5,000 to 30,000 inr*",
    image: InteriorImg,
    imagePosition: "right"
  },
  {
    title: "TURNKEY PROJECTS",
    description: "From concept to completion seamlessly executed. Our turnkey solutions offer a complete design-to-delivery experience. From the first sketch to the final handover, we manage every detail with precision, transparency, and craftsmanship. Each project reflects our commitment to quality, ensuring your vision is realized effortlessly and elegantly.",
    included: [
      "End-to-End Project Management",
      "Material Sourcing & Quality Control",
      "Material Sourcing & Quality Control"
    ],
    price: "₹5,000 to 30,000 inr*",
    image: TurnkeyImg,
    imagePosition: "left"
  }
];

export default function ServicesDetailSection() {
  return (
    <section className="w-full bg-[#FFF6ED] py-12 md:py-20 px-3 sm:px-8 md:px-14">
      <div className="max-w-[90rem] mx-auto space-y-16 md:space-y-24">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              service.imagePosition === "right" 
                ? "md:flex-row" 
                : "md:flex-row-reverse"
            } gap-8 md:gap-12 items-stretch`}
          >
            {/* Content Side */}
            <div className="flex-1 space-y-12">
              {/* Title */}
              <h2 className="font-inter font-medium text-2xl md:text-[3.3rem] text-black tracking-tight">
                {service.title}
              </h2>

              {/* Description */}
              <p className="font-inter font-extralight text-sm md:text-[1.5rem] text-black/80 leading-relaxed">
                {service.description}
              </p>

              {/* What's Included */}
              <div className="space-y-3">
                <h3 className="font-inter text-xs md:text-lg md:mb-4 font-medium text-black tracking-wide inline-block border-b border-black/20 pb-2">
                  WHAT'S INCLUDED
                </h3>
                <ul className="space-y-6">
                  {service.included.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="text-black flex-shrink-0">•</span>
                      <span className="font-inter text-xs md:text-[1.4rem] text-black">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Image Side (expanded) */}
            <div className="flex-shrink-0 w-full md:w-[380px] lg:w-[440px] self-stretch">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full md:h-full object-cover shadow-md min-h-[360px]"
                draggable={false}
              />
            </div>
          </div>
        ))}

        {/* CTA Button - Sharp edges, centered */}
        <div className="flex justify-center pt-8">
          <button className="bg-black text-white px-10 md:px-12 py-3.5 md:py-4 text-sm md:text-base font-medium tracking-wide hover:bg-black/90 transition rounded-none">
            ENQUIRE NOW
          </button>
        </div>
      </div>
    </section>
  );
}
