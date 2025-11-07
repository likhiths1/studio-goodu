import AuthorImg from '../assets/images/team/person1.jpg';

export default function AuthorSection() {
  return (
    <section className="w-full bg-navbar px-4 py-20 flex justify-center items-center">
      <div className="flex flex-col md:flex-row items-center md:items-start max-w-5xl w-full gap-40 md:gap-24">
        {/* Image */}
        <div className="flex-shrink-0 w-[220px] h-[280px] md:w-[280px] md:h-[340px] overflow-hidden">
          <img
            src={AuthorImg}
            alt="Author"
            className="w-full h-full object-cover rounded-tl-[44px] rounded-tr-none rounded-br-none rounded-bl-none"
            draggable={false}
          />
        </div>
        {/* Content */}
        <div className="flex flex-col justify-center items-start text-left w-full max-w-[420px] md:max-w-[540px]">
          <div className="font-aerotis text-[1.45rem] md:text-[1.9rem] text-[#8D8271] mb-2 tracking-normal">Welcome</div>
          <div className="font-britishgreen text-white 1.2rem md:text-[2.6rem] leading-tight mb-4">
            I Am Marcus Finn
          </div>
          <div className="font-poppins text-menutext text-base md:text-lg mb-9 max-w-[340px] md:max-w-[510px] leading-relaxed">
            As the founder of Vela, I’ve always believed that interior design is more than just creating beautiful spaces – it’s about crafting environments that inspire, comfort, and elevate the everyday experience.
          </div>
          <div className="flex flex-row gap-4 mt-1">
            {/* Brown button */}
            <button className="px-8 py-3 bg-accentgold text-white font-poppins text-sm md:text-base uppercase rounded-none tracking-wider shadow-none transition-colors duration-150
              hover:bg-white hover:text-accentgold border-2 border-transparent hover:border-accentgold">
              Our Team
            </button>
            {/* White button */}
            <button className="px-8 py-3 border-2 border-white text-white font-poppins text-sm md:text-base uppercase rounded-none tracking-wider shadow-none bg-transparent transition-colors duration-150
              hover:bg-accentgold hover:text-white hover:border-accentgold">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
