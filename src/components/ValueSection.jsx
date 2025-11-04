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
      <div className="max-w-[100rem] w-full grid grid-cols-1 md:grid-cols-3 md:divide-x md:divide-[#E7DCCB] md:mt-32 md:mb-32 px-1 gap-y-10">
        {valueData.map((item) => (
          <div key={item.title} className="flex flex-col items-center text-center px-8 md:px-10 py-6">
            <div className="font-aerotis text-[2rem] md:text-[3.4rem] mb-3 text-black">{item.title}</div>
            <div className="font-inter text-[1.06rem] md:text-[1.2rem] text-black leading-relaxed max-w-[22rem]">
              {item.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
