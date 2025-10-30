import LineImg from "../assets/images/line1.png";

const valueData = [
  {
    title: "Exclusive",
    desc: "We create exclusive interiors tailored to the unique tastes and needs of our discerning clients.",
  },
  {
    title: "Opulent",
    desc: "We specialize in crafting opulent environments where luxury is felt in every corner of the space.",
  },
  {
    title: "Innovative",
    desc: "Each project combines innovative design with cutting-edge materials to push creative boundaries.",
  }
];

export default function ValuesSection() {
  return (
    <section className="w-full bg-[#FEF6ED] py-10 flex items-center justify-center">
      <div className="max-w-[90rem] w-full flex flex-col md:flex-row md:justify-between md:items-start md:mt-32 md:mb-32 px-1">
        {valueData.map((item, idx) => (
          <div key={item.title} className="flex flex-row w-full md:w-auto">
            {/* Value column */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1 px-16 mb-16 md:px-6">
              <div className="font-aerotis text-[2rem] md:text-[3.4rem] mb-2 text-black">{item.title}</div>
              <div className="font-inter text-[1.08rem] md:text-[1.2rem] text-black leading-relaxed max-w-xs md:max-w-xs">
                {item.desc}
              </div>
            </div>
            {/* Line image between columns */}
            {idx < valueData.length - 1 && (
              <div className="hidden md:flex flex-col items-center justify-center">
                <img src={LineImg} alt="" className="h-full w-px mx-2" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
