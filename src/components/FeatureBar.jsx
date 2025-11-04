export default function FeatureBar() {
  const features = [
    "LUXURY",
    "CRAFTSMANSHIP",
    "ELEGANCE",
    "CREATIVE"
  ];

  return (
    <section className="w-full bg-[#4D696C] py-7 px-4">
      <marquee scrollamount="18"><div className="max-w-full flex flex-row justify-between items-center gap-2 sm:gap-6 md:gap-12">
        {features.map((feature) => (
          <span
            key={feature}
            className="flex-1 font-playfairdisplay text-white text-center font-regular text-base md:text-4xl tracking-[0.08em] whitespace-nowrap"
          >
            {feature}
          </span>
        ))}
      </div></marquee>
    </section>
  );
}
