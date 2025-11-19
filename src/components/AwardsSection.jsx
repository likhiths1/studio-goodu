// src/components/AwardsSection.jsx
import awardBg from '../assets/images/awardsimage.png';

const awards = [
  {
    title: "National Architecture and Interior Design Excellence Awards 2025",
    description: "Studio Goodu has been selected for the prestigious National Architecture and Interior Design Excellence Awards 2025! Our commitment to innovation and excellence has been recognised, and we are honored to receive the 'Futuristic & Trusted Architecture, Construction & Interior Design Firm of the Year 2025' – Karnataka award under Residential & Commercial Projects (Global Edition). Adding to the celebration, our very own Ar. Tharun Mahesh has been awarded 'Promising & Creative Architect & Interior Designer of the Year 2025, Karnataka'! A huge thank you to our incredible team, clients, and well-wishers for your trust and support. Here's to designing the future!"
  }
];

export default function AwardsSection() {
  const current = awards[0];

  return (
    <section className="bg-[#FFF6ED] py-12 sm:py-16 md:py-20">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 md:px-8">
        {/* Heading */}
        <h2 className="text-6xl sm:text-8xl md:text-10xl lg:text-[12rem] font-medium tracking-tight text-black font-inter mb-10 sm:mb-12 md:mb-16">
          AWARDS
        </h2>
        
        <div className="w-full relative rounded-lg overflow-hidden shadow-sm h-[500px] sm:h-[550px] md:h-[650px] lg:h-[750px]">
          <AwardSlide award={current} />
        </div>
      </div>
    </section>
  );
}

function AwardSlide({ award }) {
  return (
    <div className="block w-full h-full">
      <div className="relative w-full h-full">
        <div className="absolute inset-0 w-full h-full">
          <img
            src={awardBg}
            alt="Award background"
            className="w-full h-full object-cover object-center"
            draggable={false}
          />
        </div>
        <div 
          className="absolute inset-0 bg-cover bg-left"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.1) 100%)`,
            backgroundSize: '100% 100%',
            backgroundBlendMode: 'overlay',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
            padding: '1.5rem 0.75rem 2rem',
            '@media (min-width: 640px)': {
              padding: '2rem 1.25rem 3rem',
              paddingBottom: '4rem',
            },
            '@media (min-width: 768px)': {
              padding: '2.5rem 1.5rem 4rem',
            },
            '@media (min-width: 1024px)': {
              padding: '3rem 2rem 4rem',
              paddingBottom: '5rem',
            },
            color: 'white',
          }}
        >
          <div className="w-full lg:max-w-[60%] text-left lg:ml-[40%] px-3 sm:px-6 md:pr-10 mb-4 sm:mb-6">
            <h3 className="font-semibold text-base sm:text-2xl md:text-3xl lg:text-4xl mb-1 sm:mb-3 leading-tight">
              {award.title}
            </h3>
            <div className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 leading-relaxed break-words">
              {award.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
