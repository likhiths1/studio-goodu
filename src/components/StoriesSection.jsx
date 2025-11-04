import Stor4 from '../assets/images/stories/stor1.jpeg';
import Stor2 from '../assets/images/stories/stor2.jpg';
import Stor3 from '../assets/images/stories/stor3.jpg';
import Stor1 from '../assets/images/stories/stor4.jpg';

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
    <section className="w-full bg-[#FFF6ED] py-16 md:pt-[50px] md:pb-12 px-3 sm:px-8 font-inter min-h-[700px] md:min-h-[850px]">
      <div className="max-w-[90rem] mx-auto">
        {/* Heading */}
        <h2 className="text-[3.2rem] sm:text-[3.7rem] md:text-[12rem] font-medium tracking-[-0.08em] text-black leading-none mb-8 text-left md:-ml-[4vw]">
          NAMMA<br />
          <span className="block tracking-[-0.08em] leading-none -mt-[6px] md:-mt-[12px]">GOODU STORIES</span>
        </h2>
        {/* Responsive grid for layout control */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8 md:ml-[-4vw]">
            {testimonials.map((item, idx) => (
              <div key={idx} className="relative w-full aspect-square sm:aspect-[5/6] lg:aspect-[4/5] flex-shrink-0">
                {/* Square Image */}
                <img
                  src={storyImages[idx % storyImages.length]}
                  alt="Story Interior"
                  className="w-full h-full object-cover object-center"
                  style={{ borderRadius: 0 }}
                  draggable={false}
                />
                {/* Bridge box between image and testimonial */}
                <div
                  className="absolute right-0 bottom-[124px] bg-[#EBD9C9] z-10"
                  style={{ borderRadius: 0, width: "88%", height: "32px", maxWidth: "99%" }}
                  aria-hidden="true"
                />
                {/* Sharp-edged Testimonial Card */}
                <div
                  className="absolute right-0 bottom-0 bg-[#495B58] text-white shadow-xl px-5 py-5 sm:px-6 sm:py-6 md:px-6 md:py-7 flex flex-col justify-between z-20"
                  style={{
                    borderRadius: 0,
                    width: "88%",
                    minHeight: "120px",
                    maxWidth: "99%",
                  }}
                >
                  <span className="block text-2xl md:text-3xl leading-none mb-2 select-none">“</span>
                  <div className="text-xs md:text-sm font-normal mb-4">{item.text}</div>
                  <div className="flex items-center gap-3 mt-auto">
                    <img src={item.avatar} className="w-8 h-8 rounded-full object-cover" alt={item.name} draggable={false} />
                    <div>
                      <span className="block font-semibold text-xs">{item.name}</span>
                      <span className="block text-xs opacity-60">{item.place}</span>
                    </div>
                  </div>
                </div>
              </div>
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
        </div>
        {/* CTA button */}
        <div className="w-full flex justify-center mt-10 md:mt-14">
          <a
            href="/contact"
            className="inline-block px-6 md:px-7 py-2.5 md:py-3 bg-black text-white text-xs md:text-sm tracking-tight hover:opacity-90 transition"
            style={{ borderRadius: 0 }}
          >
            CONTACT US
          </a>
        </div>
      </div>
    </section>
  );
}
