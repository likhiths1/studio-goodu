import Navbar from './Navbar';
import BackSky from '../assets/images/back-sky.jpg';
import BackSkyless from '../assets/images/back-skyless.png';

export default function HeroSection() {
  return (
    <>
      {/* Notification Bar */}
      <div className="w-full bg-[#FFF6ED] text-[#474747] py-2 px-2 md:px-0 text-center text-base font-medium tracking-tight">
        Namaste! Welcome to Namma Studio Goodu
      </div>
      <header className="w-full min-h-[100svh] md:min-h-[120svh] lg:min-h-[130svh] relative font-inter overflow-hidden">
        {/* Layer 1: Back Sky Background */}
        <img 
          src={BackSky} 
          alt="" 
          className="absolute inset-0 z-0 w-full h-full object-cover"
          draggable={false}
        />

        {/* Navbar */}
        <div className="relative z-50">
          <Navbar />
        </div>

        {/* Layer 2: Hero Text Content (between the two images) */}
        <div className="relative z-20 w-full h-full pt-14 md:pt-24 pb-16 md:pb-24 lg:pb-28 flex flex-col">
          <span className="text-lg md:text-2xl text-white tracking-[0.08em] font-light mb-7 mt-2 md:mt-0 ml-6 md:ml-36">
            THE ART OF LIVING WELL
          </span>

          {/* Centered INTERIOR text behind the building */}
          <div className="w-full flex justify-center">
            <div className="flex flex-col items-center -mt-[14px] md:-mt-[16px] relative">
              <span
                className="block font-inter text-white uppercase font-[400] leading-none tracking-[-0.08em]"
                style={{
                  fontSize: 'clamp(5rem, 15vw, 20rem)',
                  marginTop: '8vh',
                  zIndex: 10, // Lower than building image (z-30) but above background
                  opacity: 1.0,
                }}
              >
                INTERIOR
              </span>
              <span className="block text-base md:text-2xl text-white tracking-wide font-light mt-4 md:mt-6 self-start ml-4 md:ml-8 relative z-20">
                THE NEST WE BUILD TOGETHER
              </span>
            </div>
          </div>
        </div>

        {/* Layer 3: Skyless Image (overlapping on top for 3D effect) */}
        <img 
          src={BackSkyless} 
          alt="" 
          className="absolute inset-0 z-30 w-full h-full object-cover pointer-events-none"
          draggable={false}
        />

        {/* Info Card - highest z-index to stay on top */}
        <div className="absolute right-3 md:right-10 lg:right-20 bottom-6 md:bottom-20 max-w-[92vw] md:max-w-lg rounded-md px-4 md:px-6 py-3 text-base md:text-2xl text-white font-light tracking-wide font-inter bg-transparent shadow-none z-40 text-left">
          ARCHITECTURAL & INTERIOR DESIGN STUDIO INSPIRED BY CULTURE, CRAFT, AND CONSCIOUS LIVING
        </div>
      </header>
    </>
  );
}
