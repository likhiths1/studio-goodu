import Process01 from '../assets/images/process/01.png';
import Process02 from '../assets/images/process/02.png';
import Process03 from '../assets/images/process/03.png';
import Process04 from '../assets/images/process/04.png';

const steps = [
  {
    img: Process01,
    title: "TETUR. SUSPENDISSE ORCI NISL",
    desc: "Lorem ipsum dolor sit amet consectetur. Ac sagittis ultrices est nisl dictum. Ultrices magna ut integer neque. Sed magnis augue feugiat tristique. Pellentesque fringilla vel etiam cursus placerat id. Faucibus odio arcu dapibus mauris. Ut morbi quam consectetur convallis id. Tincidunt pretium tellus facilisis egestas. Risus sit quam rhoncus risus. Elit tellus elit scelerisque enim vitae volutpat.",
  },
  {
    img: Process02,
    title: "TETUR. SUSPENDISSE ORCI NISL",
    desc: "Congue risus purus feugiat non. Sed sagittis nisi sagittis dui turpis. Volutpat dictum dolor dictum erat id. Quisque aliquam pharetra lectus ipsum. Vestibulum id dictum donec risus blandit. Mauris donec ac magna. Etiam elit dictum ultrices.",
  },
  {
    img: Process03,
    title: "TETUR. SUSPENDISSE ORCI NISL",
    desc: "Mauris eget pretium nullam nec. Faucibus a velit dictum cursus blandit. Et nulla varius pharetra enim feugiat placerat. Quisque tortor orci porttitor. Vestibulum consequat mauris enim tortor. Scelerisque posuere orci placerat feugiat euismod. Tempus dolor.",
  },
  {
    img: Process04,
    title: "TETUR. SUSPENDISSE ORCI NISL",
    desc: "Cras ornare gravida molestie. Leo integer pulvinar magna pretium. Urna gravida arcu quam aliquam. Ut fermentum commodo risus cursus dictum. Nunc dictum in sit mi gravida tincidunt. Nulla mattis viverra tortor erat dictumst facilisis sagittis.",
  },
];

export default function OurProcess() {
  return (
    <section className="w-full py-16 px-3 sm:px-8 md:px-14 bg-[#FFF6ED] font-inter">
      <div className="max-w-[90rem] w-full mx-auto">
        {/* Section Title with left-center alignment */}
        <div className="relative flex flex-col mb-16">
          <h2 className="font-inter font-medium text-black tracking-[-0.08em] leading-tight text-5xl md:text-[12rem] mx-auto md:mx-0 md:-ml-[4vw] md:max-w-full">
            OUR PROCESS
          </h2>
          {/* Subtitle with right-center alignment */}
          <div className="mt-4 w-full flex justify-center md:justify-end">
            <div className="text-xs md:text-[1.6rem] font-regular text-[#3a3532] leading-snug md:mr-[4vw] text-center md:text-right max-w-full md:w-94">
              TETUR. SUSPENDISSE ORCI NISL.<br/>CONGUE EGESTAS SAGITTIS
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-28 md:gap-32">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`flex flex-col md:flex-row ${
                i % 2 === 1 ? 'md:flex-row-reverse' : ''
              } w-full items-start md:items-center md:justify-between gap-4 md:gap-0`}
            >
              <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
                <img
                  src={step.img}
                  alt={`Step 0${i + 1}`}
                  className="w-32 md:w-56 select-none pointer-events-none object-contain"
                  draggable={false}
                />
              </div>
              <div
                className={`flex-1 text-center ${
                  i % 2 === 1 ? 'md:text-right md:pr-12' : 'md:text-left md:pr-12'
                }`}
              >
                <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold text-[#222] tracking-wide mb-2 font-inter uppercase ${i % 2 === 1 ? '' : 'md:ml-12'}`}>
                  {step.title}
                </h3>
                <p
                  className={`text-sm sm:text-base md:text-lg font-normal text-[#2b2623] leading-[1.8] font-inter max-w-3xl mx-auto ${
                    i % 2 === 1 ? 'md:ml-auto md:mr-0 text-right' : 'md:mx-12'
                  }`}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
