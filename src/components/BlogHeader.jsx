import AboutImg from "../assets/images/villa.jpg";

export default function BlogHeader() {
  return (
    <section className="w-full bg-[#FFF6ED] py-4 px-3 sm:px-8 md:px-14">
      <div className="max-w-[90rem] mx-auto bg-[#FFF6ED]">
        <div className="flex flex-row items-start justify-between w-full pt-3 pb-2">
          <h2 className="font-inter text-black font-medium text-[3.2rem] md:text-[12rem] leading-none tracking-[-0.08em] text-left">
            BLOG
          </h2>
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
