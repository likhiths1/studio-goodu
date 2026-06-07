// src/components/AwardsSection.jsx

import awardBg from "../assets/images/awardsimage.png";
import award2026_1 from "../assets/images/award2026-1.jpeg";
import award2026_2 from "../assets/images/award2026-2.jpeg";

const awards = [
  {
    title: "National Architecture and Interior Design Excellence Awards 2025",
    description:
      "Studio Goodu has been selected for the prestigious National Architecture and Interior Design Excellence Awards 2025! Our commitment to innovation and excellence has been recognised, and we are honored to receive the 'Futuristic & Trusted Architecture, Construction & Interior Design Firm of the Year 2025' – Karnataka award under Residential & Commercial Projects (Global Edition). Adding to the celebration, our very own Ar. Tharun Mahesh has been awarded 'Promising & Creative Architect & Interior Designer of the Year 2025, Karnataka'! A huge thank you to our incredible team, clients, and well-wishers for your trust and support. Here's to designing the future!",
    image: awardBg,
    isCollage: false,
  },

  {
    // title: "Architecture & Interior Design Excellence Awards 2026",
    // description:
      // "Studio Goodu is proud to be recognized at the Architecture & Interior Design Excellence Awards 2026. This achievement reflects our commitment to innovative design, quality execution, and creating meaningful spaces for our clients. We are grateful to our clients, partners, and team members who continue to inspire excellence in every project we undertake.",
    images: [award2026_1, award2026_2],
    isCollage: true,
  },
];

export default function AwardsSection() {
  return (
    <section className="bg-[#FFF6ED] py-12 sm:py-16 md:py-20">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-6xl sm:text-8xl md:text-10xl lg:text-[12rem] font-medium tracking-tight text-black font-inter mb-10 sm:mb-12 md:mb-16">
          AWARDS
        </h2>

        <div className="space-y-12">
          {awards.map((award, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-sm h-[500px] sm:h-[550px] md:h-[650px] lg:h-[750px]"
            >
              <AwardSlide award={award} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AwardSlide({ award }) {
  return (
    <div className="relative w-full h-full">
      {/* Background Images */}
      {award.isCollage ? (
        <div className="absolute inset-0 flex flex-col md:flex-row w-full h-full">
          <div className="h-1/2 md:h-full md:w-1/2">
            <img
              src={award.images[0]}
              alt="Award Image 1"
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>

          <div className="h-[4px] md:h-full md:w-[6px] bg-white" />

          <div className="flex-1">
            <img
              src={award.images[1]}
              alt="Award Image 2"
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>
        </div>
      ) : (
        <div className="absolute inset-0">
          <img
            src={award.image}
            alt={award.title}
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/30 flex items-end">
        <div className="w-full lg:max-w-[60%] lg:ml-[40%] px-4 sm:px-6 md:px-8 lg:px-10 pb-8 sm:pb-12 lg:pb-16">
          <h3 className="font-semibold text-lg sm:text-2xl md:text-3xl lg:text-4xl text-white mb-3">
            {award.title}
          </h3>

          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 leading-relaxed">
            {award.description}
          </p>
        </div>
      </div>
    </div>
  );
}