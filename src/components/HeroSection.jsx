import Navbar from './Navbar';
import BackSky from '../assets/images/back-sky1.png';
import BackSkyless from '../assets/images/back-skyless1.png';

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
          className="absolute inset-0 z-0 w-full h-full object-cover object-center"
          draggable={false}
        />

        {/* Navbar */}
        <div className="relative z-50">
          <Navbar />
        </div>

        {/* Layer 2: Hero Text Content */}
        <div className="absolute inset-0 z-30 flex items-center justify-center">
          <div className="w-full max-w-[90rem] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
            <div className="w-full">
              {/* INTERIOR text */}
              <div className="w-full text-center">
                <h1 
                  className="font-inter text-white uppercase font-[400] leading-[0.85] tracking-[-0.08em] mx-auto"
                  style={{
                    fontSize: 'clamp(3.5rem, 14vw, 18rem)',
                    lineHeight: '0.85',
                    textShadow: '0 0 15px rgba(0,0,0,0.3)',
                    marginTop: 'calc(-10vh - 200px)', // Moved up 35px for better desktop alignment
                    marginBottom: 'clamp(0.5rem, 2vw, 2rem)'
                  }}
                >
                  INTERIOR
                </h1>
                
                {/* Subtitle */}
                <div className="w-full max-w-2xl mx-auto px-4 sm:px-6">
                  <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl tracking-wide font-light mt-2 sm:mt-3 md:mt-4 text-left">
                    THE NEST WE BUILD TOGETHER
                  </p>
                </div>
              </div>
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
