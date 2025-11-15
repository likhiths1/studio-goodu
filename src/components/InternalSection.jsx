// src/components/InternalSection.jsx

import img1 from '../assets/images/internal1.png';
import img2 from '../assets/images/internal2.png';
import img3 from '../assets/images/internal3.png';

const internals = [
  {
    label: "BEST PRACTICES",
    text: "Lorem ipsum dolor sit amet consectetur. Molestie arcu nulla",
    image: img1,
    alt: "Internal Best Practice 1",
  },
  {
    label: "BEST PRACTICES",
    text: "Lorem ipsum dolor sit amet consectetur. Molestie arcu nulla",
    image: img2,
    alt: "Internal Best Practice 2",
  },
  {
    label: "BEST PRACTICES",
    text: "Lorem ipsum dolor sit amet consectetur. Molestie arcu nulla",
    image: img3,
    alt: "Internal Best Practice 3",
  },
];

export default function InternalSection() {
  return (
    <section className="bg-[#FFF6ED] py-12 sm:py-16 md:py-20">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-5xl sm:text-8xl md:text-10xl lg:text-[12rem] font-medium tracking-tight text-black font-inter mb-8 sm:mb-12">
          INTERNAL
        </h2>
        <div className="flex flex-col gap-8 sm:flex-row sm:gap-6">
          {internals.map((item, i) => (
            <div key={i} className="flex flex-col items-center w-full sm:w-1/3 max-w-[400px] mx-auto">
              
              {/* White Card with top rounded corners only */}
              <div className="bg-white rounded-t-[20px] w-full p-4 sm:p-6 flex flex-col">
                <span className="text-xs sm:text-sm font-inter font-medium text-black/70 tracking-wide mb-2">{item.label}</span>
                <span className="text-lg sm:text-xl font-inter font-normal text-black leading-tight">{item.text}</span>
              </div>

              {/* Image Box with bottom rounded corners only, directly attached */}
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-32 sm:h-44 object-cover rounded-b-[20px]"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
