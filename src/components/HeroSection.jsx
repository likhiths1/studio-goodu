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
      <header className="w-full min-h-[80vh] md:min-h-screen relative font-inter">
        {/* BG image */}
        <img 
          src={HeroBg} 
          alt="" 
          className="absolute inset-0 z-0 w-full h-full object-cover"
          draggable={false}
        />

        {/* Navbar */}
        <div className="relative z-50">
          <Navbar />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full h-full pt-14 md:pt-24 flex flex-col">
          <span className="text-lg md:text-xl text-[#EDE1D5] tracking-[0.17em] font-light mb-7 mt-2 md:mt-0 ml-6 md:ml-24">
            LOREM IPSUM DOLOR
          </span>

          {/* Centered Studio/Goodu block with special alignment */}
          <div className="w-full flex justify-center">
            <div className="flex flex-col items-center">
              <span
                className="block font-inter text-[#EDE1D5] uppercase font-[400] leading-none"
                style={{
                  fontSize: 'clamp(6rem, 13vw, 14rem)',
                  marginLeft: '7vw',
                  transition: 'margin 0.3s'
                }}
              >
                STUDIO
              </span>
              <span
                className="block font-inter text-[#EDE1D5] uppercase font-[400] leading-none"
                style={{
                  fontSize: 'clamp(6rem, 13vw, 14rem)',
                  marginLeft: '-6vw',
                  transition: 'margin 0.3s'
                }}
              >
                GOODU
              </span>
              <span className="block text-base md:text-lg text-[#EDE1D5] tracking-wide font-light mt-2 ml-2 self-start">
                THE NEST WE BUILD TOGETHER
              </span>
            </div>
          </div>
        </div>

        {/* FULL-WIDTH BLUR OVERLAY AT BOTTOM WITH BLUR AND TRANSPARENCY */}
        <div className="absolute left-0 bottom-0 w-full h-[100px] md:h-[160px] z-20 pointer-events-none select-none">
          <img 
            src={BlurOverlay} 
            alt="" 
            className="w-full h-full object-cover opacity-70"
            draggable={false}
          />
        </div>

        {/* Info Card above the blur overlay */}
        <div className="absolute right-3 md:right-10 lg:right-20 bottom-6 md:bottom-10 max-w-[92vw] md:max-w-sm rounded-md px-4 md:px-6 py-3 text-sm md:text-base text-[#EDE1D5] font-light tracking-wide font-inter bg-transparent shadow-none z-30 text-left">
          LOREM IPSUM DOLOR SIT AMET CONSECTETUR, SUSPENDISSE ORCI NISI, CONGUE EGESTAS EGESTAS DUIS PORTA TURPIS, JUSTO GRAVIDA FDDZDF GRSDDFT LOREM FDZFFFERGA DSAFDFW FEARHR3ER6HTFTWSFT
        </div>
      </header>
    </>
  );
}
