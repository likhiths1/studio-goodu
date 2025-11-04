import FooterSection from "../components/FooterSection";
import ServicesHeader from "../components/ServicesHeader";
import FeatureBar from "../components/FeatureBar";
import Navbar from "../components/NavbarBlack";
import ExtraContactSection from "../components/ExtraContactSection";
import ResponsiveImage from "../components/ImageBackground";
import ServicesBanner from "../assets/images/services/servicesbanner.png";
import ServicesSection from "../components/ServicesSection";
import ServicesDetailSection from "../components/ServicesDetailSection";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <ServicesHeader />
      <FeatureBar />
      <ServicesSection />
      <ServicesDetailSection />
      <ResponsiveImage src={ServicesBanner} alt="" />

     {/* PROCESS section */}
<section className="w-full bg-[#FFF6ED] px-6 md:px-0 py-16 md:py-28 font-inter">
  <div className="max-w-[90rem] mx-auto">
    {/* Heading row */}
    <div className="flex items-end justify-between mb-12 md:mb-20">
      <h2 className="text-[3.2rem] md:text-[16rem] leading-none font-medium tracking-[-0.08em] text-black">
        PROCESS
      </h2>
      <div className="hidden md:block text-[0.95rem] text-black/80 tracking-tight font-inter text-right">
        LOREM IPSUM DOLOR SIT AMET,<br />
        ENSDDF JOROWJNL.
      </div>
    </div>

    {/* Timeline */}
    <div className="relative flex flex-col items-center gap-20">
      {/* Center vertical line */}
      <div className="pointer-events-none hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-px h-full bg-[#2F2F2F]/30"></div>

      {/* Top diamond marker */}
      <div className="w-2.5 h-2.5 rotate-45 bg-black/80"></div>

      {/* 01 - Right side */}
      <div className="relative flex justify-end w-full">
        <div className="max-w-[40rem] text-right px-4 md:px-0 md:mr-[calc(60%-6rem)] md:pr-10">
          <div className="text-black/50 italic mb-2 md:mb-4 text-sm md:text-3xl">01.</div>
          <h3 className="font-playfairdisplay text-xl md:text-6xl text-black mb-2">
            Discovery Call
          </h3>
          <p className="font-inter text-xs md:text-[1.6rem] text-black/70 leading-relaxed">
            As the founder of Vela, I’ve always believed that interior design is more than just creating
            beautiful spaces — it’s about crafting environments that inspire, comfort, and elevate the
            everyday experience.
          </p>
        </div>
      </div>

      {/* 02 - Left side */}
      <div className="relative flex justify-start w-full">
        <div className="max-w-[40rem] text-left px-4 md:px-0 md:ml-[calc(60%-6rem)] md:pl-10">
          <div className="text-black/50 italic mb-2 md:mb-4 text-sm md:text-3xl">02.</div>
          <h3 className="font-playfairdisplay text-xl md:text-6xl text-black mb-2">
            Contract / Proposal
          </h3>
          <p className="font-inter text-xs md:text-[1.6rem] text-black/70 leading-relaxed">
            As the founder of Vela, I’ve always believed that interior design is more than just creating
            beautiful spaces — it’s about crafting environments that inspire, comfort, and elevate the
            everyday experience.
          </p>
        </div>
      </div>

      {/* 03 - Right side */}
      <div className="relative flex justify-end w-full">
        <div className="max-w-[40rem] text-right md:mr-[calc(60%-6rem)]">
          <div className="text-black/50 italic mb-2 md:mb-4 text-sm md:text-3xl">03.</div>
          <h3 className="font-playfairdisplay text-xl md:text-6xl text-black mb-2">
            Initial Concept
          </h3>
          <p className="font-inter text-xs md:text-[1.6rem] text-black/70 leading-relaxed">
            As the founder of Vela, I’ve always believed that interior design is more than just creating
            beautiful spaces — it’s about crafting environments that inspire, comfort, and elevate the
            everyday experience.
          </p>
        </div>
      </div>

      {/* 04 - Left side */}
      <div className="relative flex justify-start w-full">
        <div className="max-w-[40rem] text-left md:ml-[calc(60%-6rem)]">
          <div className="text-black/50 italic mb-2 md:mb-4 text-sm md:text-3xl">04.</div>
          <h3 className="font-playfairdisplay text-xl md:text-6xl text-black mb-2">
            Project Implementation
          </h3>
          <p className="font-inter text-xs md:text-[1.6rem] text-black/70 leading-relaxed">
            As the founder of Vela, I’ve always believed that interior design is more than just creating
            beautiful spaces — it’s about crafting environments that inspire, comfort, and elevate the
            everyday experience.
          </p>
        </div>
      </div>

      {/* 05 - Right side */}
      <div className="relative flex justify-end w-full">
        <div className="max-w-[40rem] text-right md:mr-[calc(60%-6rem)]">
          <div className="text-black/50 italic mb-2 md:mb-4 text-sm md:text-3xl">05.</div>
          <h3 className="font-playfairdisplay text-xl md:text-6xl text-black mb-2">
            Finishing Touches
          </h3>
          <p className="font-inter text-xs md:text-[1.6rem] text-black/70 leading-relaxed">
            As the founder of Vela, I’ve always believed that interior design is more than just creating
            beautiful spaces — it’s about crafting environments that inspire, comfort, and elevate the
            everyday experience.
          </p>
        </div>
      </div>

      {/* Bottom diamond marker */}
      <div className="w-2.5 h-2.5 rotate-45 bg-black/80"></div>
    </div>
  </div>
</section>






      <ExtraContactSection />
      <FooterSection />
    </>
  );
}