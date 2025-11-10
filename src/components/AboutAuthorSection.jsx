import AuthorImg from "../assets/images/team/studiogoodu.jpg";
import QuoteIcon from "../assets/images/author/quote.png";
import { AnimatedSection, AnimatedItem } from "./AnimatedSection";

export default function AboutAuthorSection() {
  return (
    <AnimatedSection className="w-full bg-[#FFF6ED] px-4 sm:px-6 md:px-6 lg:px-8 xl:px-12 2xl:px-0 py-12 md:py-20 font-inter">
      <div className="max-w-[80rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Author image on left */}
        <AnimatedItem className="flex justify-center md:justify-start">
          <img
            src={AuthorImg}
            alt="Studio Goodu"
            className="w-full max-w-[400px] md:max-w-[500px] h-auto object-cover rounded-lg shadow-lg"
          />
        </AnimatedItem>

        {/* Text content on right */}
        <AnimatedItem delay={1} className="space-y-6">
          <div className="flex items-start gap-4">
            <img src={QuoteIcon} alt="" className="w-8 h-8 mt-1" />
            <p className="font-playfairdisplay text-4xl md:text-5xl lg:text-6xl font-regular text-black leading-tight mt-4">
              At Studio Goodu
            </p>
          </div>
          
          <div className="space-y-6 text-gray-700 text-lg md:text-xl leading-relaxed text-justify">
            <p>
              We believe a home is more than walls and windows it's an intimate expression of the people who live within it. Every project begins with listening, understanding, and translating emotions into spatial form.
            </p>
            <p>
              Our design philosophy lies at the intersection of architecture, artistry, and emotion. We blend modern sensibilities with traditional warmth, creating spaces that breathe, flow, and feel alive.
            </p>
            <p>
              From cozy apartments to sprawling villas, every detail every texture, every curve, every light is curated to bring harmony and depth to your living experience.
            </p>
            <p className="text-xl md:text-2xl font-semibold">
              We don't just design, <br/> we craft stories that can be lived in.
            </p>
          </div>
        </AnimatedItem>
      </div>
    </AnimatedSection>
  );
}