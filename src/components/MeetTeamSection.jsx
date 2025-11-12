import Person1 from "../assets/images/team/person1.jpg";
import Person2 from "../assets/images/team/person2.jpg";
import Person3 from "../assets/images/team/person3.jpg";
import Person4 from "../assets/images/team/person4.jpg";
import Person5 from "../assets/images/team/person5.jpg";
import Person6 from "../assets/images/team/person6.jpg"
import { AnimatedSection, AnimatedItem } from "./AnimatedSection";
import { useId, useEffect, useRef } from "react";


const TEAM = [
  {
    img: Person1,
    name: "Ar. Tharun Mahesh",
    role: "Founder & Mastermind of Design and Architecture",
  },
  {
    img: Person2,
    name: "Mr. Rishab Mahesh",
    role: "Head of Ground Realities",
  },
  {
    img: Person3,
    name: "Mrs. Sakshi Summariya",
    role: "Junior Moodboard Magician of Spaces",
  },
  {
    img: Person4,
    name: "Mrs. Prapthi Prasad",
    role: "Talent in Training",
  },
  {
    img: Person6,
    name: "ArD. Nikitha Kolar Nagabhushan",
    role: "Architect, Designer & Artist",
  },
  {
    img: Person5,
    name: "Babul",
    role: "In-House Support Ninja",
  },
];

function TeamCard({ person }) {
  const maskId = useId();
  const cardRef = useRef(null);
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed');
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.35 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={cardRef} className="team-card group relative mx-4 sm:mx-8 md:mx-20 max-w-[80rem] flex flex-col h-full bg-black overflow-hidden md:shadow-[0_4px_24px_-8px_rgba(0,0,0,0.05)] font-poppins py-4 md:py-7 px-4 md:px-5">
      <div className="relative h-64 sm:h-80 md:h-[688px]">
        <img
          src={person.img}
          alt={person.name}
          className="block w-full h-full object-cover mix-blend-normal filter-none transform-gpu"
          draggable={false}
        />
      </div>
      <div className="px-2 pt-3 pb-4 text-center md:pt-24 min-h-[110px] sm:min-h-[120px] md:min-h-[180px]">
        <div className="uppercase font-poppins font-light text-white text-base md:text-4xl mb-2">
          {person.name}
        </div>
        <div className="uppercase text-[#e5dccb] text-xl tracking-widest font-medium">
          {person.role}
        </div>
      </div>
      {/* Full-card scratch overlay (covers image + text) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" viewBox="0 0 1500 1800" preserveAspectRatio="none">
        <defs>
          <mask id={maskId} maskUnits="userSpaceOnUse">
            {/* Start fully covered (white mask shows black overlay). Black stroke erases to reveal content */}
            <rect x="0" y="0" width="1500" height="1800" fill="white" />
            <polyline
              className="reveal-stroke"
              points="0,154 131,0 0,348 269,0 0,562 437,0 0,766 565,14 0,1062 719,0 289,1062 843,0 543,1062 995,0 729,1062 1161,0 947,1062 1307,0 1143,1062 1500,162 1299,1062 1500,830"
              fill="none"
              stroke="black"
              strokeWidth="240"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ strokeDasharray: 22000, strokeDashoffset: 22000 }}
              transform="matrix(-1 0 0 1 1500 0)"
            />
          </mask>
        </defs>
        {/* Black overlay uses the mask; it fades out fully after scratch animation */}
        <rect x="0" y="0" width="1500" height="1800" fill="black" mask={`url(#${maskId})`} className="overlay-rect" />
      </svg>
    </div>
  );
}

const teamCardScribbleCSS = `
@keyframes team-scratch-draw { to { stroke-dashoffset: 0; } }
/* Trigger when card scrolls into view */
.team-card .overlay-rect { opacity: 1; transition: opacity 0.2s linear 1.2s; }
.team-card.revealed .reveal-stroke { animation: team-scratch-draw 1.2s linear forwards; }
.team-card.revealed .overlay-rect { opacity: 0; }
`;

export default function MeetTeamSection() {
  // All team members will be displayed in a 2x3 grid

  return (
    <AnimatedSection className="w-full bg-[#FFF6ED] px-3 sm:px-8 md:px-14 py-8 md:py-16 font-poppins">
      <style>{teamCardScribbleCSS}</style>
      <div className="max-w-[90rem] mx-auto">
        <AnimatedItem className="flex flex-row justify-start items-end mb-7 md:mb-10">
          <h2 className="uppercase font-medium text-black text-[3rem] md:text-[10rem] leading-none tracking-[-0.09em] text-left font-inter">
            Meet the Faces Behind the Space
          </h2>
        </AnimatedItem>
        
        {/* All team members in a 2x3 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 items-stretch gap-x-1 gap-y-8">
          {TEAM.map((person, i) => (
            <AnimatedItem key={i} delay={i + 1} className="h-full">
              <TeamCard person={person} />
            </AnimatedItem>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}