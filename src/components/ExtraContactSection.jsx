import Img1 from "../assets/images/works/12.jpg";
import Img2 from "../assets/images/contact/transform2.jpeg";
import Img3 from "../assets/images/contact/transform3.jpg";

export default function ContactSection() {
  return (
    <section className="w-full bg-[#FFF6ED] lg:min-h-screen relative px-4 pt-6 pb-1 md:pt-20 md:pb-6 lg:pb-20 font-inter overflow-x-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center relative">
        {/* Headline and decorative image alignment exactly as in Figma */}
        <div className="w-full mb-0 md:mb-0 mt-0 flex flex-col gap-0 leading-tight">
          {/* TRANSFORM Row */}
          <div className="flex items-center w-full justify-start gap-0 md:-ml-[6vw]">
            <span
              className="block text-[3.2rem] sm:text-[4rem] md:text-[16rem] font-regular tracking-[-0.07em] ml-[1vw]"
              style={{ color: "#D6AF60" }}
            >
              TRANSFORM
            </span>
            <img
              src={Img2}
              alt=""
              className="ml-2 md:ml-2 w-[88px] h-[88px] md:w-[176px] md:h-[176px] object-cover"
              draggable={false}
            />
          </div>
          {/* YOUR LIVING Row */}
          <div className="flex items-center justify-center w-full gap-0 -mt-[1.2rem] md:-mt-[2.3rem]">
            <span
              className="block text-[3.2rem] sm:text-[4rem] md:text-[16rem] font-regular md:tracking-[-0.09em] whitespace-nowrap"
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
              className="mr-0 md:mr-0 w-[88px] h-[88px] md:w-[176px] md:h-[176px] object-cover"
              draggable={false}
            />
            <span
              className="block text-[3.2rem] sm:text-[4rem] md:text-[16rem] font-regular md:tracking-[-0.07em] -ml-20 md:-ml-40"
              style={{ color: "#D6AF60" }}
            >
              INTO A
            </span>
          </div>
          {/* MASTERPIECE Row - overlap text on image and move text left on mobiles */}
          <div className="relative flex items-center w-full justify-end gap-0 -mt-[1.3rem] md:-mt-[2.5rem]">
            <span
              className="block absolute md:static text-[3.2rem] sm:text-[4rem] md:text-[16rem] font-regular md:tracking-[-0.07em] ml-0 md:-mr-[12rem]"
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
              className="ml-2 md:ml-8 w-[88px] h-[88px] md:w-[176px] md:h-[176px] object-cover relative z-10"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
