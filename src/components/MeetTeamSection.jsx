import Person1 from "../assets/images/team/person1.png";
import Person2 from "../assets/images/team/person2.png";
import Person3 from "../assets/images/team/person3.png";
import Person4 from "../assets/images/team/person4.png";

const TEAM = [
  {
    img: Person1,
    name: "Mr. Rishab Mahesh",
    role: "Head of Ground Realities",
  },
  {
    img: Person2,
    name: "Mrs. Prapthi Prasad",
    role: "Talent In Training",
  },
  {
    img: Person3,
    name: "Mrs. Sakshi Summariya",
    role: "Junior Moodboard Magician of Spaces",
  },
  {
    img: Person4,
    name: "Mrs. Nikitha Kolar Nagabhushan",
    role: "Architect Designer",
  },
];

export default function MeetTeamSection() {
  return (
    <section className="w-full bg-[#FBF3EA] px-4 md:px-0 py-8 md:py-16 font-poppins">
      <div className="max-w-[90rem] mx-auto">
        <div className="flex flex-row justify-between items-end mb-7 md:mb-10">
          <h2 className="font-medium text-black tracking-tight text-[3.2rem] md:text-[10rem] leading-none text-left font-inter">
            MEET OUR<br />
            TEAM
          </h2>
          <div className="text-xs md:text-[1.2rem] text-black opacity-90 font-regular text-right mt-2 md:mt-3 md:max-w-full font-inter">
            TETUR. SUSPENDISSE ORCI NISL<br />
            CONGUE EGESTAS SAGITTIS
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
          {TEAM.map((person, i) => (
            <div key={i} className="flex flex-col bg-black overflow-hidden shadow-[0_4px_24px_-8px_rgba(0,0,0,0.05)] font-poppins py-7 px-5">
              <img
                src={person.img}
                alt={person.name}
                className="block w-full h-[500px] md:h-full md:object-content object-cover"
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
