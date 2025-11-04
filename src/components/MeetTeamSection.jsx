import Person1 from "../assets/images/team/person1.jpg";
import Person2 from "../assets/images/team/person2.jpg";
import Person3 from "../assets/images/team/person3.jpg";
import Person4 from "../assets/images/team/person4.jpg";
import Person5 from "../assets/images/team/person5.jpg";

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
    img: Person5,
    name: "Babul",
    role: "In-House Support Ninja",
  },
];

function TeamCard({ person }) {
  return (
    <div className="mx-20 max-w-[80rem] flex flex-col bg-black overflow-hidden shadow-[0_4px_24px_-8px_rgba(0,0,0,0.05)] font-poppins py-7 px-5">
      <img
        src={person.img}
        alt={person.name}
        className="block w-full h-[688px] md:h-[688px] object-cover"
        draggable={false}
      />
      <div className="px-3 pt-4 pb-6 text-center md:pt-24">
        <div className="uppercase font-poppins font-light text-white text-base md:text-4xl mb-2">
          {person.name}
        </div>
        <div className="uppercase text-[#e5dccb] text-xl tracking-widest font-medium">
          {person.role}
        </div>
      </div>
    </div>
  );
}

export default function MeetTeamSection() {
  const firstFourMembers = TEAM.slice(0, 4);
  const fifthMember = TEAM[4];

  return (
    <section className="w-full bg-[#FFF6ED] px-4 md:px-0 py-8 md:py-16 font-poppins">
      <div className="max-w-[90rem] mx-auto">
        <div className="flex flex-row justify-start items-end mb-7 md:mb-10">
          <h2 className="font-medium text-black text-[3.2rem] md:text-[12rem] leading-none tracking-[-0.09em] text-left font-inter">
            MEET OUR TEAM
          </h2>
          <div className="text-xs md:text-[1.6rem] text-black opacity-90 font-regular text-right mt-2 mr-24 md:mt- md:max-w-[100rem] font-inter tracking-[-0.08em] leading-none">
            TETUR. SUSPENDISSE ORCI NISL CONGUE EGESTAS SAGITTIS
          </div>
        </div>
        
        {/* First 4 team members in a grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-1 gap-y-8">
          {firstFourMembers.map((person, i) => (
            <TeamCard key={i} person={person} />
          ))}
        </div>

        {/* 5th team member in its own centered section */}
        <div className="mt-12 flex justify-center">
          <TeamCard person={fifthMember} />
        </div>
      </div>
    </section>
  );
}