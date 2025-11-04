import Navbar from './Navbar';
import HeroBg from '../assets/images/herosection/hero-background.png';
import BlurOverlay from '../assets/images/herosection/blur.png';

export default function HeroSection() {
  return (
    <>
      {/* Notification Bar */}
      <div className="w-full bg-[#FFF6ED] text-[#474747] py-2 px-2 md:px-0 text-center text-base font-medium tracking-tight">
        Namaste! Welcome to Namma Studio Goodu
      </div>
      <header className="w-full min-h-[100svh] md:min-h-[120svh] lg:min-h-[130svh] relative font-inter">
        {/* BG image */}
        <img 
          src={HeroBg} 
          alt="" 
          className="absolute inset-0 z-0 w-full h-full object-cover brightness-100"
          draggable={false}
        />

        {/* Navbar */}
        <div className="relative z-50">
          <Navbar />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full h-full pt-14 md:pt-24 pb-16 md:pb-24 lg:pb-28 flex flex-col">
          <span className="text-lg md:text-2xl text-white tracking-[0.08em] font-light mb-7 mt-2 md:mt-0 ml-6 md:ml-36">
            LOREM IPSUM DOLOR
          </span>

          {/* Centered Studio/Goodu block with special alignment */}
          <div className="w-full flex justify-center">
            <div className="flex flex-col items-center -mt-[14px] md:-mt-[16px]">
              <span
                className="block font-inter text-[#EDE1D5] uppercase font-[400] leading-none tracking-[-0.08em]"
                style={{
                  fontSize: 'clamp(7rem, 16vw, 28rem)',
                  marginLeft: '16vw',
                  marginBottom: '24px',
                  transition: 'margin 0.3s'
                }}
              >
                STUDIO
              </span>
              <span
                className="block font-inter text-[#EDE1D5] uppercase font-[400] leading-none tracking-[-0.08em] -mt-[8px] md:-mt-[14px]"
                style={{
                  fontSize: 'clamp(7rem, 16vw, 28rem)',
                  marginLeft: '-12vw',
                  marginBottom: '24px',
                  transition: 'margin 0.3s'
                }}
              >
                GOODU
              </span>
              <span className="block text-base md:text-2xl text-white tracking-wide font-light -mt-8 ml-12 self-start">
                THE NEST WE BUILD TOGETHER
              </span>
            </div>
          </div>
        </div>

        {/* Bottom brown overlay band using blur.png, multiplied + soft fade up */}
        <div
          className="absolute left-0 bottom-0 w-full h-[180px] md:h-[240px] z-20 pointer-events-none select-none"
          style={{
            WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 50%, rgba(0,0,0,0.4) 80%, rgba(0,0,0,0) 100%)',
            maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 50%, rgba(0,0,0,0.4) 80%, rgba(0,0,0,0) 100%)'
          }}
        >
          <img
            src={BlurOverlay}
            alt=""
            className="w-full h-full object-cover opacity-90 mix-blend-multiply"
            draggable={false}
          />
        </div>

        {/* Info Card above the blur overlay */}
        <div className="absolute right-3 md:right-10 lg:right-20 bottom-6 md:bottom-20 max-w-[92vw] md:max-w-lg rounded-md px-4 md:px-6 py-3 text-base md:text-2xl text-white font-light tracking-wide font-inter bg-transparent shadow-none z-30 text-left">
          LOREM IPSUM DOLOR SIT AMET CONSECTETUR, SUSPENDISSE ORCI NISI, CONGUE EGESTAS EGESTAS DUIS PORTA TURPIS, JUSTO GRAVIDA FDDZDF GRSDDFT LOREM FDZFFFERGA DSAFDFW FEARHR3ER6HTFTWSFT
        </div>
      </header>
    </>
  );
}
