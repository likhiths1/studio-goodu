import Img1 from "../assets/images/contact/1.png";
import Img2 from "../assets/images/contact/2.png";
import Img3 from "../assets/images/contact/3.png";

export default function ContactSection() {
  return (
    <section className="w-full bg-[#FFF6ED] min-h-screen relative px-4 py-6 md:py-20 font-inter overflow-x-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center relative">
        {/* Headline and decorative image alignment exactly as in Figma */}
        <div className="w-full mb-0 md:mb-0 mt-0 flex flex-col gap-0 leading-tight">
          {/* TRANSFORM Row */}
          <div className="flex items-center w-full justify-start gap-0">
            <span
              className="block text-[3.2rem] sm:text-[4rem] md:text-[12rem] font-regular tracking-tight ml-[3vw]"
              style={{ color: "#D6AF60" }}
            >
              TRANSFORM
            </span>
            <img
              src={Img2}
              alt=""
              className="ml-2 md:ml-8 w-[80px] h-[80px] md:w-[160px] md:h-[160px] object-cover"
              draggable={false}
            />
          </div>
          {/* YOUR LIVING Row */}
          <div className="flex items-center justify-center w-full gap-0 -mt-[1.2rem] md:-mt-[2.3rem]">
            <span
              className="block text-[3.2rem] sm:text-[4rem] md:text-[12rem] font-regular tracking-tight"
              style={{ color: "#4D696C" }}
            >
              YOUR LIVING
            </span>
          </div>
          {/* INTO A Row */}
          <div className="flex items-center w-full justify-start gap-0 -mt-[1.3rem] md:-mt-[2.5rem]">
            <img
              src={Img1}
              alt=""
              className="mr-0 md:mr-0 w-[80px] h-[80px] md:w-[160px] md:h-[160px] object-cover"
              draggable={false}
            />
            <span
              className="block text-[3.2rem] sm:text-[4rem] md:text-[12rem] font-regular tracking-tight -ml-20 md:-ml-40"
              style={{ color: "#D6AF60" }}
            >
              INTO A
            </span>
          </div>
          {/* MASTERPIECE Row - overlap text on image and move text left on mobiles */}
          <div className="relative flex items-center w-full justify-end gap-0 -mt-[1.3rem] md:-mt-[2.5rem]">
            <span
              className="block absolute md:static text-[3.2rem] sm:text-[4rem] md:text-[12rem] font-regular tracking-tight ml-0 md:-mr-[12rem]"
              style={{
                color: "#4D696C",
                right: "1.5rem", // move left from right edge on mobile by 1.5rem
                zIndex: 20,
              }}
            >
              MASTERPIECE
            </span>
            <img
              src={Img3}
              alt=""
              className="ml-2 md:ml-8 w-[80px] h-[80px] md:w-[160px] md:h-[160px] object-cover relative z-10"
              draggable={false}
            />
          </div>
        </div>

        {/* Row: Left text | Right form */}
        <div className="w-full flex flex-col md:flex-row md:items-start md:justify-between mt-4">
          {/* Left Text */}
          <div className="w-full md:w-1/2 flex md:justify-start justify-center pb-6 md:pb-0">
            <span className="text-black font-bold text-base sm:text-lg leading-snug text-left">
              Lorem Ipsum
              <br />
              Dolor Sit Amet
            </span>
          </div>
          {/* Right Form */}
          <form className="w-full md:w-[340px] max-w-md flex flex-col items-end space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-transparent border-b border-[#AAA] py-[9px] placeholder:text-sm placeholder:text-black/70 text-base text-black focus:outline-none"
            />
            <input
              type="text"
              placeholder="Apartment Size"
              className="w-full bg-transparent border-b border-[#AAA] py-[9px] placeholder:text-sm placeholder:text-black/70 text-base text-black focus:outline-none"
            />
            <input
              type="text"
              placeholder="Apartment Details"
              className="w-full bg-transparent border-b border-[#AAA] py-[9px] placeholder:text-sm placeholder:text-black/70 text-base text-black focus:outline-none"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full bg-transparent border-b border-[#AAA] py-[9px] placeholder:text-sm placeholder:text-black/70 text-base text-black focus:outline-none"
            />
            <button
              type="submit"
              className="mt-2 text-black font-semibold text-[0.97rem] underline underline-offset-4 hover:opacity-80 transition"
              style={{ background: "none", border: "none" }}
            >
              CONTACT ME
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
