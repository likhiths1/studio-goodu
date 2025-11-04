import ConstructionImg from "../assets/images/services/construction.png";

const services = [
  {
    title: "ARCHITECTURE",
    description: "Lorem ipsum dolor sit amet consectetur. Massa mattis lorem magna non elit. Mauris suscipit erat turpis nulla sit amet proin. Amet posuere ac ligula diam sed rhoncus suspendisse euismod. Imperdiet a ornare adipcing scelerisq.",
    included: [
      "DESIGN CONSULTATIONS",
      "PERSONALIZED FURNITURE SELECTION",
      "CUSTOM COLOR PALETTE"
    ],
    price: "₹5,000 to 30,000 inr*",
    image: ConstructionImg,
    imagePosition: "right"
  },
  {
    title: "CONSTRUCTION",
    description: "Lorem ipsum dolor sit amet consectetur. Massa mattis lorem magna non elit. Mauris suscipit erat turpis nulla sit amet proin. Amet posuere ac ligula diam sed rhoncus suspendisse euismod. Imperdiet a ornare adipcing scelerisq.",
    included: [
      "DESIGN CONSULTATIONS",
      "PERSONALIZED FURNITURE SELECTION",
      "CUSTOM COLOR PALETTE"
    ],
    price: "₹5,000 to 30,000 inr*",
    image: ConstructionImg,
    imagePosition: "left"
  },
  {
    title: "INTERIORS",
    description: "Lorem ipsum dolor sit amet consectetur. Massa mattis lorem magna non elit. Mauris suscipit erat turpis nulla sit amet proin. Amet posuere ac ligula diam sed rhoncus suspendisse euismod. Imperdiet a ornare adipcing scelerisq.",
    included: [
      "DESIGN CONSULTATIONS",
      "PERSONALIZED FURNITURE SELECTION",
      "CUSTOM COLOR PALETTE"
    ],
    price: "₹5,000 to 30,000 inr*",
    image: ConstructionImg,
    imagePosition: "right"
  },
  {
    title: "TURNKEY PROJECTS",
    description: "Lorem ipsum dolor sit amet consectetur. Massa mattis lorem magna non elit. Mauris suscipit erat turpis nulla sit amet proin. Amet posuere ac ligula diam sed rhoncus suspendisse euismod. Imperdiet a ornare adipcing scelerisq.",
    included: [
      "DESIGN CONSULTATIONS",
      "PERSONALIZED FURNITURE SELECTION",
      "CUSTOM COLOR PALETTE"
    ],
    price: "₹5,000 to 30,000 inr*",
    image: ConstructionImg,
    imagePosition: "left"
  }
];

export default function ServicesDetailSection() {
  return (
    <section className="w-full bg-[#FFF6ED] py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-[90rem] mx-auto space-y-16 md:space-y-24">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              service.imagePosition === "right" 
                ? "md:flex-row" 
                : "md:flex-row-reverse"
            } gap-8 md:gap-12 items-start`}
          >
            {/* Content Side */}
            <div className="flex-1 space-y-6">
              {/* Title */}
              <h2 className="font-inter font-medium text-2xl md:text-[3.3rem] text-black tracking-tight">
                {service.title}
              </h2>

              {/* Description */}
              <p className="font-poppins font-extralight text-sm md:text-[1.5rem] text-black/80 leading-relaxed">
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
                      <span className="font-poppins text-xs md:text-[1.4rem] text-black">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Image Side with Price Below */}
            <div className="flex-shrink-0 w-full md:w-[280px] lg:w-[320px] space-y-4">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[240px] md:h-[280px] object-cover shadow-md"
                draggable={false}
              />
              
              {/* Pricing under image */}
              <div>
                <p className="font-inter text-xs md:text-lg text-black mb-2 inline-block border-b border-black/20 pb-2">INVESTMENT</p>
                <p className="font-playfairdisplay text-lg md:text-[2.6rem] text-[#8D8271]">
                  {service.price}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* CTA Button - Sharp edges, centered */}
        <div className="flex justify-center pt-8">
          <button className="bg-black text-white px-8 py-3 text-sm font-medium tracking-wide hover:bg-black/90 transition rounded-none">
            ENQUIRE NOW
          </button>
        </div>
      </div>
    </section>
  );
}
