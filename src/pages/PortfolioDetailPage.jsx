import { useParams, useNavigate} from "react-router-dom";
import PortfolioHeader from "../components/PortfolioHeader";
import FooterSection from "../components/FooterSection";
import Navbar from "../components/NavbarBlack";
import FeatureBar from "../components/FeatureBar";
import ExtraContactSection from "../components/ExtraContactSection";
import PortfolioDetailSection from "../components/PortfolioDetailSection";
import ResponsiveImageBlack from "../components/ImageBackgroundBlack";
import StartImg from "../assets/images/aboutuspage/banner2.png";
import Hero1 from "../assets/images/portfolio/arthavilla.jpg";
import Hero2 from "../assets/images/portfolio/snobsalon.jpg";
import Hero3 from "../assets/images/portfolio/tyd.jpg";
import Hero4 from "../assets/images/portfolio/srigangaresidence.png";

const PROJECTS = {
  "1": {
    title: "ARTHA VILLA",
    hero: Hero1,
    serviceType: "Residential Interior",
    features: "Lime Plaster, Live-edge Furniture, Custom Lighting",
  },
  "2": {
    title: "SNOB SALON",
    hero: Hero2,
    serviceType: "Commercial Interior",
    features: "Reception Desk, Accent Lighting, Textured Walls",
    // Example: make this page's copy unique
    detailSections: [
      { heading: "Redefining Glamour with Grace", paragraphs: ["Studio Goodu crafts a space where beauty and design mirror each other in quiet sophistication."] },
      { heading: "Elegance with Ease", paragraphs: ["The client’s vision was as focused as it was ambitious their first-ever salon project had to stand out in a city filled with polished competitors. The directive: premium yet approachable, striking yet subtle. “We wanted people to return not just for the service, but for the space itself,” recalls Tharun. “It had to feel comforting like a home, yet carry that undeniable wow factor. ”The design evolved from a neutral, calming base palette of beige and taupe, layered with rose-gold metallic accents and strategic hints of crimson red. The interplay of arches and capsule forms softens the geometry, lending rhythm and continuity, while crisp linear detailing anchors the Art Deco inspiration in modern restraint. Underfoot, pigmented terrazzo flooring unifies the space, adding a textural sense of quiet luxury."] },
      { heading: "Navigating Site Constraints", paragraphs: ["The site itself came with challenges deep beams, irregular columns, and protruding walls threatened to fragment the flow. The solution was rooted in spatial clarity. By aligning axes and absorbing irregularities into broader surface treatments, the design visually stretches the narrow footprint, making the layout read as open and fluid. Rigid partitions were replaced with fluted glass panels and suede curtains, creating zones without boundaries. “The space had to breathe,” says Tharun. “Avoiding claustrophobia was key light, reflection, and transparency became our tools.”"] },
      { heading: "The Visitor’s Journey", paragraphs: ["From the moment of arrival, the experience unfolds like theatre. A grand arched double door, detailed with ornate brass handles and grilled glass, sets an anticipatory tone. Instead of a conventional reception, guests are greeted by a glimpse of the salon in action mirrors angled thoughtfully to reflect motion and vitality. The hair stations, designed as floating islands, capture natural and artificial light in perfect balance. The hair-wash area, set on a raised platform, features a statement suede-clad mirror wall, adding intimacy to indulgence. Only later does the reception reveal itself defined by fluted panelling, soft beading, and curated lighting, alongside a lounge that feels more residential than retail."] },
      { heading: "Light, Art, and Texture", paragraphs: ["Lighting here is not just illumination it’s punctuation. Custom dome-shaped fixtures from Jovo, suspended on leather straps, recall the glamour of vintage flashbulbs while maintaining an enveloping softness. Pop-art compositions add a playful counterpoint to the salon’s tonal palette, reinforcing its chic, urban personality. The nail bar becomes a focal moment a crimson backdrop framed by floating shelves, illuminated by arched lamps, and paired with sleek leatherite seating that balances comfort with character."] },
      { heading: "Balancing Openness and Privacy", paragraphs: ["Spatial zoning is handled with quiet intelligence. A fluted-glass partition separates the waiting lounge, which also doubles as a selfie booth a subtle nod to the ritual of capturing the post-transformation moment. Behind arched curtains, the makeup rooms maintain privacy without heaviness. Pedicure and massage alcoves are shielded by Roman blinds, and bathrooms make a statement with colour-blocked walls fluted tiles below, crimson hues above. Throughout, lush foliage from snake plants to fiddle leaf figs punctuates the neutral base with organic freshness."] },
      { heading: "From Concept to Completion", paragraphs: ["From concept sketches to final detailing, Snob Salon was completed in just three months a feat of precision and coordination. For Studio Goodu, long celebrated for its residential and hospitality expertise, this project marked a distinctive shift bringing that sense of intimacy and warmth into a retail experience. The result is a space that feels cinematic yet personal, structured yet sensuous a salon that redefines the very idea of beauty environments."] },
      { heading: "Design Essence", paragraphs: ["Snob Salon isn’t just designed for transformation; it’s built around it spatially, sensorially, and emotionally. By merging the polish of Art Deco with the comfort of home, Studio Goodu crafts a setting that turns every visit into an experience and every mirror into a story."] },
    ],
    // Optional: control its image grid layout
    imageGroups: [
      // { images: [ImgA, ImgB], columns: 2 },
      // { images: [ImgC, ImgD, ImgE], columns: 3 },
    ]
  },
  "3": {
    title: "TYD",
    hero: Hero3,
    serviceType: "Residential Interior",
    features: "Warm Woods, Open Plan, Statement Lighting",
  },
  "4": {
    title: "SRIGANGA RESIDENCE",
    hero: Hero4,
    serviceType: "Residential Interior",
    features: "Natural Stone, Wooden Flooring, Custom Carpentry",
  },
};

export default function PortfolioDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS[id] ?? {};

  // Compute prev/next ids without wrap-around
  const ids = Object.keys(PROJECTS).sort((a, b) => Number(a) - Number(b));
  const idx = ids.indexOf(id ?? ids[0]);
  const hasPrev = idx > 0;
  const hasNext = idx > -1 && idx < ids.length - 1;
  const prevId = hasPrev ? ids[idx - 1] : null;
  const nextId = hasNext ? ids[idx + 1] : null;

  const smoothTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  };

  const onPrev = () => {
    if (!hasPrev || !prevId) return;
    navigate(`/portfolio/${prevId}`);
    smoothTop();
  };
  const onNext = () => {
    if (!hasNext || !nextId) return;
    navigate(`/portfolio/${nextId}`);
    smoothTop();
  };

  return (
    <>
      <Navbar />
      <PortfolioHeader />
      <FeatureBar />
      <PortfolioDetailSection
        title={project.title}
        hero={project.hero}
        serviceType={project.serviceType}
        features={project.features}
        detailSections={project.detailSections}
        imageGroups={project.imageGroups}
        onPrev={onPrev}
        onNext={onNext}
        hasPrev={hasPrev}
        hasNext={hasNext}
      />
      <ResponsiveImageBlack src={StartImg} alt="Portfolio Hero" />
      <ExtraContactSection />
      <FooterSection />
      {/* ... */}
    </>
  );
}
