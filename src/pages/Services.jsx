import FooterSection from "../components/FooterSection";
import ServicesHeader from "../components/ServicesHeader";
import FeatureBar from "../components/FeatureBar";
import Navbar from "../components/NavbarBlack";
import ExtraContactSection from "../components/ExtraContactSection";
import ResponsiveImage from "../components/ImageBackground";
import ServicesBanner from "../assets/images/services/imgback.jpg";
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
            <h2 className="text-[3.2rem] md:text-[12rem] leading-none font-medium tracking-[-0.08em] text-black">
              PROCESS
            </h2>
            <div className="hidden md:block text-[1.6rem] text-black/80 tracking-tight font-inter text-right">
              Crafting spaces with intention, detail, and emotion, every step
              designed to make your journey seamless.
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
                <div className="text-black/50 italic mb-2 md:mb-4 text-sm md:text-3xl">
                  01.
                </div>
                <h3 className="font-playfairdisplay text-xl md:text-6xl text-black mb-2">
                  Discovery Call
                </h3>
                <p className="font-inter text-xs md:text-[1.6rem] text-black/70 leading-relaxed">
                  Every collaboration begins with conversation. We take time to
                  understand your lifestyle, vision, and aspirations what home
                  means to you, and how design can elevate that experience. This
                  stage sets the foundation for everything that follows.
                </p>
              </div>
            </div>

            {/* 02 - Left side */}
            <div className="relative flex justify-start w-full">
              <div className="max-w-[40rem] text-left px-4 md:px-0 md:ml-[calc(60%-6rem)] md:pl-10">
                <div className="text-black/50 italic mb-2 md:mb-4 text-sm md:text-3xl">
                  02.
                </div>
                <h3 className="font-playfairdisplay text-xl md:text-6xl text-black mb-2">
                  Concept & Proposal
                </h3>
                <p className="font-inter text-xs md:text-[1.6rem] text-black/70 leading-relaxed">
                  From your story, a vision emerges. We develop a conceptual
                  design that captures your aesthetic and functional needs
                  complete with mood boards, material palettes, and spatial
                  ideas. A detailed proposal outlines scope, timeline, and
                  deliverables before we move forward.
                </p>
              </div>
            </div>

            {/* 03 - Right side */}
            <div className="relative flex justify-end w-full">
              <div className="max-w-[40rem] text-right md:mr-[calc(60%-6rem)]">
                <div className="text-black/50 italic mb-2 md:mb-4 text-sm md:text-3xl">
                  03.
                </div>
                <h3 className="font-playfairdisplay text-xl md:text-6xl text-black mb-2">
                  ⁠Design Development
                </h3>
                <p className="font-inter text-xs md:text-[1.6rem] text-black/70 leading-relaxed">
                  This is where ideas take shape. We translate concepts into
                  drawings, details, and 3D visualizations, refining every line
                  and texture. From spatial layouts to finishes, this phase
                  ensures every element aligns with your intent and lifestyle.
                </p>
              </div>
            </div>

            {/* 04 - Left side */}
            <div className="relative flex justify-start w-full">
              <div className="max-w-[40rem] text-left md:ml-[calc(60%-6rem)]">
                <div className="text-black/50 italic mb-2 md:mb-4 text-sm md:text-3xl">
                  04.
                </div>
                <h3 className="font-playfairdisplay text-xl md:text-6xl text-black mb-2">
                  Project Execution
                </h3>
                <p className="font-inter text-xs md:text-[1.6rem] text-black/70 leading-relaxed">
                  Precision meets craftsmanship. Our on-site team manages
                  construction, coordination, and installation with care and
                  clarity. We collaborate with trusted artisans, vendors, and
                  craftsmen to bring each detail to life on time and to
                  standard.
                </p>
              </div>
            </div>

            {/* 05 - Right side */}
            <div className="relative flex justify-end w-full">
              <div className="max-w-[40rem] text-right md:mr-[calc(60%-6rem)]">
                <div className="text-black/50 italic mb-2 md:mb-4 text-sm md:text-3xl">
                  05.
                </div>
                <h3 className="font-playfairdisplay text-xl md:text-6xl text-black mb-2">
                  Finishing Touches
                </h3>
                <p className="font-inter text-xs md:text-[1.6rem] text-black/70 leading-relaxed">
                  Where design meets emotion. Furniture, art, lighting, and
                  accessories come together to complete the space. We style and
                  fine-tune every corner, ensuring your home feels not just
                  designed, but lived in beautifully.
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
