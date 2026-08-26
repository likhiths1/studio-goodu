import { useParams, useNavigate } from "react-router-dom";

import PortfolioHeader from "../components/PortfolioHeader";
import FooterSection from "../components/FooterSection";
import Navbar from "../components/NavbarBlack";
import FeatureBar from "../components/FeatureBar";
import ExtraContactSection from "../components/ExtraContactSection";
import PortfolioDetailSection from "../components/PortfolioDetailSection";

import Hero1 from "../assets/images/portfolio/arthavilla.jpg";
import Hero2 from "../assets/images/portfolio/snobsalon.jpg";
import Hero3 from "../assets/images/portfolio/tyd.jpg";
import Hero4 from "../assets/images/portfolio/srigangaresidence.png";

import snob1 from "../assets/images/portfoliodetail/snob1.jpg";
import snob2 from "../assets/images/portfoliodetail/snob2.jpg";
import snob3 from "../assets/images/portfoliodetail/snob3.jpg";
import snob4 from "../assets/images/portfoliodetail/snob4.jpg";
import snob5 from "../assets/images/portfoliodetail/snob5.jpg";
import snob6 from "../assets/images/portfoliodetail/snob6.jpg";
import snob7 from "../assets/images/portfoliodetail/snob7.jpg";
import snob8 from "../assets/images/portfoliodetail/snob8.jpg";
import snob9 from "../assets/images/portfoliodetail/snob9.jpg";
import snob10 from "../assets/images/portfoliodetail/snob10.jpg";

import tyd1 from "../assets/images/portfoliodetail/Tyd-5.jpg";
import tyd2 from "../assets/images/portfoliodetail/Tyd-10.jpg";
import tyd3 from "../assets/images/portfoliodetail/Tyd-12.jpg";
import tyd4 from "../assets/images/portfoliodetail/Tyd-17.jpg";
import tyd5 from "../assets/images/portfoliodetail/Tyd-19.jpg";
import tyd6 from "../assets/images/portfoliodetail/Tyd-22.jpg";
import tyd7 from "../assets/images/portfoliodetail/Tyd-23.jpg";
import tyd8 from "../assets/images/portfoliodetail/Tyd-27.jpg";
import tyd9 from "../assets/images/portfoliodetail/Tyd-29.jpg";
import tyd10 from "../assets/images/portfoliodetail/Tyd-30.jpg";

import sree1 from "../assets/images/portfoliodetail/sreee1.jpg";
import sree2 from "../assets/images/portfoliodetail/sreee2.jpg";
import sree3 from "../assets/images/portfoliodetail/sreee3.jpg";
import sree4 from "../assets/images/portfoliodetail/sreee4.jpg";
import sree5 from "../assets/images/portfoliodetail/sreee5.jpg";
import sree6 from "../assets/images/portfoliodetail/sreee6.jpg";
import sree7 from "../assets/images/portfoliodetail/sreee7.jpg";
import sree8 from "../assets/images/portfoliodetail/sreee8.jpg";
import sree9 from "../assets/images/portfoliodetail/sreee9.jpg";
import sree10 from "../assets/images/portfoliodetail/sreee10.jpg";

import run1 from "../assets/images/portfoliodetail/runway1.jpeg";
import run2 from "../assets/images/portfoliodetail/runway2.jpeg";
import run3 from "../assets/images/portfoliodetail/runway3.jpeg";
import run4 from "../assets/images/portfoliodetail/runway4.jpeg";
import run5 from "../assets/images/portfoliodetail/runway5.jpeg";
import run6 from "../assets/images/portfoliodetail/runway6.jpeg";
import run7 from "../assets/images/portfoliodetail/runway7.jpeg";
import run8 from "../assets/images/portfoliodetail/runway8.jpeg";
import run9 from "../assets/images/portfoliodetail/runway9.jpeg";
import run10 from "../assets/images/portfoliodetail/runway10.jpeg";

import jankal1 from "../assets/images/portfoliodetail/jankal1.jpg";
import jankal2 from "../assets/images/portfoliodetail/jankal2.jpg";
import jankal3 from "../assets/images/portfoliodetail/jankal3.jpg";
import jankal4 from "../assets/images/portfoliodetail/jankal4.jpg";
import jankal5 from "../assets/images/portfoliodetail/jankal5.jpg";
import jankal6 from "../assets/images/portfoliodetail/jankal6.jpg";
import jankal7 from "../assets/images/portfoliodetail/jankal7.jpg";
import jankal8 from "../assets/images/portfoliodetail/jankal8.jpg";
import jankal9 from "../assets/images/portfoliodetail/jankal1.jpg";
import jankal10 from "../assets/images/portfoliodetail/jankal2.jpg";
import jankalhero from "../assets/images/portfoliodetail/jankalcover.png";

import maha1 from "../assets/images/portfoliodetail/home1.jpg";
import maha2 from "../assets/images/portfoliodetail/home2.jpg";
import maha3 from "../assets/images/portfoliodetail/home3.jpg";
import maha4 from "../assets/images/portfoliodetail/home4.jpg";
import maha5 from "../assets/images/portfoliodetail/home5.jpg";
import maha6 from "../assets/images/portfoliodetail/home6.jpg";
import maha7 from "../assets/images/portfoliodetail/home7.jpg";
import maha8 from "../assets/images/portfoliodetail/home8.jpg";
import maha9 from "../assets/images/portfoliodetail/home9.jpg";
import maha10 from "../assets/images/portfoliodetail/home10.jpg";
import mahacover from "../assets/images/portfoliodetail/226cover.jpg";

import villa431 from "../assets/images/portfoliodetail/villa431.jpeg";
import villa432 from "../assets/images/portfoliodetail/villa432.jpeg";
import villa433 from "../assets/images/portfoliodetail/villa433.jpeg";
import villa434 from "../assets/images/portfoliodetail/villa434.jpeg";
import villa435 from "../assets/images/portfoliodetail/villa435.jpeg";
import villa436 from "../assets/images/portfoliodetail/villa436.jpeg";
import villa437 from "../assets/images/portfoliodetail/villa437.jpeg";
import villa438 from "../assets/images/portfoliodetail/villa438.jpeg";
import villa439 from "../assets/images/portfoliodetail/villa439.jpeg";
import villa4310 from "../assets/images/portfoliodetail/villa4310.jpeg";

import villa211 from "../assets/images/portfoliodetail/villa211.jpeg";
import villa212 from "../assets/images/portfoliodetail/villa212.jpeg";
import villa213 from "../assets/images/portfoliodetail/villa213.jpeg";
import villa214 from "../assets/images/portfoliodetail/villa214.jpeg";
import villa215 from "../assets/images/portfoliodetail/villa215.jpeg";
import villa216 from "../assets/images/portfoliodetail/villa216.jpeg";
import villa217 from "../assets/images/portfoliodetail/villa217.jpeg";
import villa218 from "../assets/images/portfoliodetail/villa218.jpeg";
import villa219 from "../assets/images/portfoliodetail/villa219.jpeg";
import villa2110 from "../assets/images/portfoliodetail/villa2110.jpeg";

import antara1 from "../assets/images/portfoliodetail/antara1.jpeg";
import antara2 from "../assets/images/portfoliodetail/antara2.jpeg";
import antara3 from "../assets/images/portfoliodetail/antara3.jpeg";
import antara4 from "../assets/images/portfoliodetail/antara4.jpeg";
import antara5 from "../assets/images/portfoliodetail/antara5.jpg";
import antara6 from "../assets/images/portfoliodetail/antara6.jpg";
import antara7 from "../assets/images/portfoliodetail/antara7.jpg";
import antara8 from "../assets/images/portfoliodetail/antara8.jpg";
import antara9 from "../assets/images/portfoliodetail/antara9.jpeg";
import antara10 from "../assets/images/portfoliodetail/antara10.jpg";

import club71 from "../assets/images/portfoliodetail/club71.jpeg";
import club72 from "../assets/images/portfoliodetail/club72.png";
import club73 from "../assets/images/portfoliodetail/club73.png";
import club74 from "../assets/images/portfoliodetail/club74.png";
import club75 from "../assets/images/portfoliodetail/club75.png";
import club76 from "../assets/images/portfoliodetail/club76.png";
import club77 from "../assets/images/portfoliodetail/club77.png";
import club78 from "../assets/images/portfoliodetail/club78.jpeg";
import club79 from "../assets/images/portfoliodetail/club79.png";
import club710 from "../assets/images/portfoliodetail/club710.png";
import club711 from "../assets/images/portfoliodetail/club711.png";
import club712 from "../assets/images/portfoliodetail/club712.png";

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
    detailSections: [
      {
        heading: "Redefining Glamour with Grace",
        paragraphs: [
          "Studio Goodu crafts a space where beauty and design mirror each other in quiet sophistication.",
        ],
      },
      {
        heading: "Elegance with Ease",
        paragraphs: [
          "The client’s vision was as focused as it was ambitious their first-ever salon project had to stand out in a city filled with polished competitors. The directive: premium yet approachable, striking yet subtle.",
        ],
      },
    ],
    imageGroups: [
      { images: [snob1, snob9], columns: 2 },
      { images: [snob3, snob4, snob5], columns: 3 },
      { images: [snob6, snob7], columns: 2 },
      { images: [snob8, snob2, snob10], columns: 3 },
    ],
  },

  "3": {
  title: "TYD",
  hero: Hero3,
  serviceType: "Hospitality Architecture & Interior",
  features: "Brick Cladding, Stucco Finishes, Terrazzo, Acoustic Treatments",

  detailSections: [
    {
      heading: "The Subterranean Vault",
      paragraphs: [
        "TYD is an 18,000 sq ft hospitality architecture and interior project located in Bangalore, India. The space blends London Subway restobar aesthetics and old-century speakeasy dens using brick cladding, stucco finishes, and a 6\" raised wood and stone stage.",
        "The layout features diverse zones, including a 50–80 pax dance floor, fine dining areas, a rooftop terrace for brunch, and informal outdoor organic seating.",
        "Custom furniture integrates a unique touch of terrazzo, stone, and wooden table tops, beautifully complemented by upholstered wooden chairs, wicker, and bronze highlights.",
        "Site challenges with existing fire services and a delicate PT slab (restricted to 1\" drilling to protect Cobiax cables) were resolved by strategically mapping services and applying a dark olive ceiling finish.",
        "Due to nearby residences, extensive sound control (reducing levels from 130dB to 75dB) was achieved via glass wool wall treatments, acoustic panels, specialized glass, and fabric furniture."
      ]
    },

    {
      heading: "Concept",
      paragraphs: [
        "\"THE URBAN CATACOMB\""
      ]
    },

    {
      heading: "The Urban Catacomb",
      paragraphs: [
        "The design bridges the industrial nostalgia of London's historic subways with the intimate allure of a classic speakeasy.",
        "The transition from raw, vaulted brickwork and stucco-finished tunnels opens up into diverse, texture-rich social landscapes, culminating in an airy rooftop retreat.",
        "Honest structural adaptations are embraced rather than hidden, pairing rough-hewn stone and terrazzo against deep olive tones and acoustic fabric paneling to cultivate a protected, high-sensory escape."
      ]
    }
  ],

  imageGroups: [
    { images: [tyd10, tyd2], columns: 2 },
    { images: [tyd3, tyd4, tyd5], columns: 3 },
    { images: [tyd6, tyd8], columns: 2 },
    { images: [tyd1, tyd9, tyd7], columns: 3 }
  ]
},

  "4": {
    title: "SRIGANGA RESIDENCE",
    hero: Hero4,
    serviceType: "Residential Interior",
    features: "Natural Stone, Wooden Flooring, Custom Carpentry",
    detailSections: [],
    imageGroups: [
      { images: [sree1, sree7], columns: 2 },
      { images: [sree3, sree4, sree5], columns: 3 },
      { images: [sree6, sree2], columns: 2 },
      { images: [sree8, sree9, sree10], columns: 3 },
    ],
  },

  "5": {
    title: "THE RUNWAY RETREAT",
    hero: run2,
    detailSections: [],
    imageGroups: [
      { images: [run1, run2], columns: 2 },
      { images: [run3, run4, run5], columns: 3 },
      { images: [run6, run7], columns: 2 },
      { images: [run8, run9, run10], columns: 3 },
    ],
  },

  "6": {
    title: "JANKAL MARKETING OFFICE",
    hero: jankalhero,
    detailSections: [],
    imageGroups: [
      { images: [jankal1, jankal2], columns: 2 },
      { images: [jankal3, jankal4, jankal5], columns: 3 },
      { images: [jankal6, jankal7], columns: 2 },
      { images: [jankal8, jankal9, jankal10], columns: 3 },
    ],
  },

  "7": {
    title: "226 DUPLEX APARTMENT, MAHALAKSHMI LAYOUT",
    hero: mahacover,
    detailSections: [],
    imageGroups: [
      { images: [maha1, maha2], columns: 2 },
      { images: [maha3, maha4, maha5], columns: 3 },
      { images: [maha6, maha7], columns: 2 },
      { images: [maha8, maha9, maha10], columns: 3 },
    ],
  },

  "8": {
    title: "VILLA 43",
    hero: villa431,
    serviceType: "Residential Interior",
    features: "Japandi, Biophilia, Curated Solitude",
    detailSections: [
      {
        heading: "The Art of Japandi Fusion",
        paragraphs: [
          "Villa 43 is a 6,800 sq. ft. residential interior builder project located in Bangalore, India, executed under the direction of Fortius. The project introduces a sublime, Japandi-style fusion of Japanese minimalism and Scandinavian design, specifically showcased in the formal living area at Hygge.",
          "The design philosophy seamlessly blurs the boundaries between indoor and outdoor areas by delicately integrating lush backyard gardens, courtyards, and flowing water features.",
        ],
      },
      {
        heading: "CONCEPT",
        paragraphs: [
          "INSIDE OUT",
          "Merging Courtyard Biophilia with Residential Interiors.",
          "The design concept is defined as a harmonious intersection of tranquil minimalism and functional comfort, specifically tailored for this project in Bangalore. This approach, centered on the Japandi fusion of Japanese and Scandinavian philosophies, prioritizes a palette of light wood, neutral tones, and subtle burnt-orange and olive accents to evoke warmth.",
        ],
      },
    ],
    imageGroups: [
      { images: [villa431, villa437], columns: 2 },
      { images: [villa433, villa434, villa435], columns: 3 },
      { images: [villa436, villa432], columns: 2 },
      { images: [villa438, villa439, villa4310], columns: 3 },
    ],
  },

  "9": {
    title: "VILLA 21",
    hero: villa211,
    serviceType: "Residential Interior",
    features: "Natural Stone, Rustic Textures, British-inspired Details",
    detailSections: [
      {
        heading: "The Art of Earthy Luxury",
        paragraphs: [
          "This is a 10,000 sq ft bespoke architectural masterpiece crafted in partnership with Embassy Boulevard. The design marks a dramatic transformation from a conventional layout into a curated, personalized luxury narrative.",
          "An innovative entryway seamlessly transitions into an expansive dining area, setting a grand tone for the home. The interior features natural tandur flooring, rustic stonewalls, vintage arches, and distressed copperfinished doors.",
          "On the top floor, the aesthetic evolves into a British-inspired lounge and bar area defined by elegant coffered ceilings. The experience extends outdoors into a lush, landscaped backyard complete with a private gazebo and a treehouse.",
        ],
      },
      {
        heading: "CONCEPT",
        paragraphs: [
          "THE URBAN CATACOMB",
          "The project redefines conventional luxury by stripping away rigid, sterile finishes and replacing them with an earthy, texture-rich Bohemian narrative tailored to a laid-back lifestyle.",
          "By blending raw, natural materials like limestone and stonewalls with structured British-inspired architectural elements, the design strikes a deliberate balance between rustic warmth and refined sophistication.",
        ],
      },
    ],
    imageGroups: [
      { images: [villa211, villa217], columns: 2 },
      { images: [villa213, villa214, villa215], columns: 3 },
      { images: [villa216, villa212], columns: 2 },
      { images: [villa218, villa219, villa2110], columns: 3 },
    ],
  },

  "10": {
    title: "ANTARA VILLA AT NANDI",
    hero: antara1,
    serviceType: "Residential Architecture",
    features: "Natural Stone, Limewash, Biophilic Design",
    detailSections: [
      {
        heading: "Tropical Monolith",
        paragraphs: [
          "This 6500sq.ft family getaway, located near Nandi Hills, brings a luxury Bali resort-inspired aesthetic to the region.",
          "The elevation features a distinctive curving roof and lush planters on every balcony, connecting every floor to nature. Natural stone, limewash, and extensive arches define the textured interiors, while large sliding doors merge the living spaces with the outdoors.",
          "Upper floor curves guide occupants to tropical bedrooms, leading up to a dark-toned entertainment suite. Finally, the open terrace floor transforms the retreat, allowing the hills' scenic views to become the design's ultimate defining element.",
        ],
      },
      {
        heading: "CONCEPT",
        paragraphs: [
          "CONTOURS OF BALI",
          "The design concept fuses the serene, grounded essence of Balinese resort living with modern biophilic architecture tailored to the foothills of Nandi.",
          "Externally, this is articulated through a fluid, wave-like roof silhouette and cascading floor-to-floor planters that mimic the natural contours of the surrounding landscape.",
        ],
      },
    ],
    imageGroups: [
      { images: [antara1, antara7], columns: 2 },
      { images: [antara3, antara4, antara5], columns: 3 },
      { images: [antara6, antara2], columns: 2 },
      { images: [antara8, antara9, antara10], columns: 3 },
    ],
  },

  "11": {
    title: "CLUB SEVEN GYM",
    hero: club71,
    serviceType: "Commercial Interior",
    features: "Industrial Aesthetic, Dynamic Lighting, Wellness Spaces",
    detailSections: [
      {
        heading: "Premium Fitness Club",
        paragraphs: [
          "Club Seven Gym at Chandra Layout is envisioned as a premium fitness destination that seamlessly blends performance, wellness, and community.",
          "Designed with a contemporary industrial aesthetic, the space features dedicated zones for cardio, strength training, functional workouts, group classes, and athletic training, creating a well-organized and immersive fitness experience.",
          "The facility extends beyond conventional gym amenities by incorporating a café, assessment room, sauna, ice plunge, locker rooms, and spacious reception and waiting lounges, offering members a holistic health and recovery environment.",
          "Every area is planned to maximize functionality, comfort, and visual appeal, delivering a motivating atmosphere that supports fitness, recovery, and social interaction.",
        ],
      },
      {
        heading: "CONCEPT",
        paragraphs: [
          "MOMENTUM IN MOTION",
          "Inspired by movement and progress, the design combines industrial materials, clean geometric forms, and dynamic lighting to create an energetic and motivating fitness environment.",
          "Open, well-defined training zones enhance functionality, while integrated wellness spaces such as the café, sauna, and ice plunge promote recovery and community, delivering a complete fitness experience.",
        ],
      },
    ],
    imageGroups: [
      { images: [club71, club77], columns: 2 },
      { images: [club73, club74, club75], columns: 3 },
      { images: [club76, club72], columns: 2 },
      { images: [club78, club79, club710], columns: 3 },
      { images: [club711, club712], columns: 2 },
    ],
  },
};

export default function PortfolioDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = PROJECTS[id] ?? {};

  const ids = Object.keys(PROJECTS).sort(
    (a, b) => Number(a) - Number(b)
  );

  const idx = ids.indexOf(id ?? ids[0]);

  const hasPrev = idx > 0;
  const hasNext = idx > -1 && idx < ids.length - 1;

  const prevId = hasPrev ? ids[idx - 1] : null;
  const nextId = hasNext ? ids[idx + 1] : null;

  const smoothTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
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

  // Keep projects 5, 6 and 7 under UPCOMING PROJECTS
  const isUpcomingProject = ["5", "6", "7"].includes(id);

  const headerTitle = isUpcomingProject
    ? "UPCOMING PROJECTS"
    : "DESIGN ARCHIVE";

  return (
    <>
      <Navbar />

      <PortfolioHeader title={headerTitle} />

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

      <ExtraContactSection />

      <FooterSection />
    </>
  );
}