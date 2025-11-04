import Person1 from "../assets/images/team/person1.png";
import Person2 from "../assets/images/team/person2.png";
import Person3 from "../assets/images/team/person3.png";
import Person4 from "../assets/images/team/person4.png";

const TEAM = [
  {
    img: Person1,
    name: "John Woodbridge",
    role: "Principal Designer",
  },
  {
    img: Person2,
    name: "Juliana Rover",
    role: "Senior Architect",
  },
  {
    img: Person3,
    name: "Alan Thompson",
    role: "Project Manager",
  },
  {
    img: Person4,
    name: "Claire Ashford",
    role: "Design Associate",
  },
];

export default function MeetTeamSection() {
  return (
    <section className="w-full bg-[#FFF6ED] px-4 md:px-0 py-8 md:py-16 font-poppins">
      <div className="max-w-[100rem] mx-auto">
        <div className="flex flex-row justify-start items-end mb-7 md:mb-10">
          <h2 className="font-medium text-black tracking-tight text-[3.2rem] md:text-[16rem] leading-none tracking-[-0.10em] text-left font-inter">
            MEET OUR TEAM
          </h2>
          <div className="text-xs md:text-[1.6rem] text-black opacity-90 font-regular text-right mt-2 mr-24 md:mt- md:max-w-[100rem] font-inter tracking-[-0.08em] leading-none">
            TETUR. SUSPENDISSE ORCI NISL CONGUE EGESTAS SAGITTIS
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-1 gap-y-8">
          {TEAM.map((person, i) => (
            <div key={i} className="mx-20 max-w-[80rem] flex flex-col bg-black overflow-hidden shadow-[0_4px_24px_-8px_rgba(0,0,0,0.05)] font-poppins py-7 px-5">
              <img
                src={person.img}
                alt={person.name}
                className="block w-full h-[688px] md:h-[688px] object-cover"
                draggable={false}
              />
              <div className="px-3 pt-4 pb-6 text-center md:pt-24">
                <div className="uppercase font-poppins font-light text-white text-base md:text-3xl mb-2">{person.name}</div>
                <div className="uppercase text-[#e5dccb] text-xs tracking-widest font-medium">{person.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
