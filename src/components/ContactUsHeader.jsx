import AboutImg from "../assets/images/contactuspage/1.png";

export default function ContactUsHeader() {
  return (
    <section className="w-full bg-[#FFF6ED] py-4 px-4 md:px-0">
      <div className="max-w-[90rem] mx-auto bg-[#FFF6ED]">
        <div className="flex flex-row items-start justify-between w-full pt-3 pb-2">
          <h2 className="font-inter text-black font-medium text-[3.2rem] md:text-[12rem] leading-none tracking-tight text-left">
            CONTACT US
          </h2>
          <div className="flex flex-col items-end ml-auto pt-2">
            <span className="block text-xs md:text-[1.2rem] text-black/80 text-right font-regular leading-5">
              LOREM IPSUM DOLOR SIT AMET<br />
              TETUR. SUSPENDISSE ORCI NISL<br />
            </span>
          </div>
        </div>
        <div className="w-full mt-2 mb-1">
          <img
            src={AboutImg}
            alt="About Us"
            className="block w-full h-full md:h-full object-cover"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}
