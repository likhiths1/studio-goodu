import Stor4 from '../assets/images/stories/stor1.jpeg';
import Stor2 from '../assets/images/stories/stor2.jpg';
import Stor3 from '../assets/images/stories/stor3.jpg';
import Stor1 from '../assets/images/stories/stor4.jpg';
import GreenOverlay from '../assets/images/greenoverlay.png';
import { AnimatedSection, AnimatedItem } from "./AnimatedSection";

export default function StoriesSection() {
  const testimonials = [
    {
      text: "Working with your design team was an absolute pleasure. The attention to detail and creativity exceeded my expectations. Thank you for making my home beautiful!",
      name: "Sophie Carter",
      place: "New York, USA",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      text: "Absolutely loved the process and the fantastic results. Highly recommend for anyone seeking great interiors!",
      name: "Aisha Patel",
      place: "Bangalore, India",
      avatar: "https://randomuser.me/api/portraits/women/47.jpg"
    },
    {
      text: "A wonderful interior design experience. The team was attentive and went above and beyond.",
      name: "Clara Schmidt",
      place: "Berlin, Germany",
      avatar: "https://randomuser.me/api/portraits/women/50.jpg"
    },
    {
      text: "A wonderful interior design experience. The team was attentive and went above and beyond.",
      name: "Clara Schmidt",
      place: "Berlin, Germany",
      avatar: "https://randomuser.me/api/portraits/women/50.jpg"
    }
  ];

  const storyImages = [Stor1, Stor2, Stor3, Stor4];

  return (
    <AnimatedSection className="w-full bg-[#FFF6ED] py-16 md:pt-[50px] md:pb-12 px-3 sm:px-8 md:px-14 font-inter min-h-[700px] md:min-h-[850px] overflow-hidden">
      <div className="max-w-[90rem] mx-auto">
        {/* Heading */}
        <AnimatedItem className="text-left">
          <h2 className="text-[3.2rem] sm:text-[3.7rem] md:text-[12rem] font-medium tracking-[-0.08em] text-black leading-none mb-8">
            NAMMA<br />
            <span className="block tracking-[-0.08em] leading-none -mt-[6px] md:-mt-[12px]">GOODU STORIES</span>
          </h2>
        </AnimatedItem>
        {/* Responsive grid for layout control */}
        <AnimatedItem delay={0.2} className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {testimonials.map((item, idx) => (
              <AnimatedItem key={idx} delay={0.3 + (idx * 0.1)} className="relative w-full aspect-square overflow-hidden">
                {/* Image with overlay */}
                <div className="relative w-full h-full">
                  <img
                    src={storyImages[idx % storyImages.length]}
                    alt="Story Interior"
                    className="w-full h-full object-cover object-center"
                    style={{ borderRadius: 0 }}
                    draggable={false}
                  />
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ 
                      backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.1) 100%), url(${GreenOverlay})`,
                      backgroundSize: '100% 100%',
                      backgroundBlendMode: 'overlay'
                    }}
                  >
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                      <div className="text-sm md:text-base font-normal mb-3 leading-tight">{item.text}</div>
                      <div className="flex items-center gap-3 mt-3">
                        <img 
                          src={item.avatar} 
                          className="w-10 h-10 rounded-full object-cover border-2 border-white" 
                          alt={item.name} 
                          draggable="false"
                        />
                        <div>
                          <span className="block font-semibold text-sm">{item.name.toUpperCase()}</span>
                          <span className="block text-xs font-light tracking-wider">{item.place}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </div>
          {/* Right Arrow affordance */}
          <button
            className="hidden sm:flex items-center justify-center absolute top-1/2 right-0 translate-x-[calc(100%+1rem)] -translate-y-1/2 bg-white/80 hover:bg-white text-black shadow-sm p-2 rounded-full border border-gray-200 transition z-30"
            aria-label="More stories"
            type="button"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </AnimatedItem>
        {/* CTA button */}
        <AnimatedItem delay={0.7} className="w-full flex justify-center mt-10 md:mt-14">
          <a
            href="/contact"
            className="inline-block px-8 md:px-10 py-3.5 md:py-4 bg-black text-white text-sm md:text-base font-medium tracking-wide hover:opacity-90 transition min-w-[180px] text-center"
            style={{ borderRadius: 0 }}
          >
            CONTACT US
          </a>
        </AnimatedItem>
      </div>
    </AnimatedSection>
  );
}
