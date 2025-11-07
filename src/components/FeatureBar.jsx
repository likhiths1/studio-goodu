export default function FeatureBar() {
  const features = [
    "LUXURY",
    "CRAFTSMANSHIP",
    "ELEGANCE",
    "CREATIVE"
  ];

  // Create multiple duplicates for a smoother infinite effect
  const duplicatedFeatures = [...features, ...features, ...features, ...features];

  return (
    <section className="w-full bg-[#4D696C] py-7 px-4 overflow-hidden relative">
      <div className="relative w-full">
        <div className="marquee-container">
          <div className="marquee-content">
            {duplicatedFeatures.map((feature, index) => (
              <span
                key={`${feature}-${index}`}
                className="marquee-item"
              >
                {feature}
              </span>
            ))}
          </div>
          {/* Mirrored content for seamless looping */}
          <div className="marquee-content" aria-hidden="true">
            {duplicatedFeatures.map((feature, index) => (
              <span
                key={`${feature}-${index}-mirror`}
                className="marquee-item"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[#4D696C] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#4D696C] to-transparent z-10 pointer-events-none"></div>
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 2));
          }
        }
        
        .marquee-container {
          display: flex;
          width: 100%;
          overflow: hidden;
        }
        
        .marquee-content {
          display: flex;
          animation: scroll 20s linear infinite;
          white-space: nowrap;
          will-change: transform;
        }
        
        .marquee-item {
          display: inline-block;
          font-family: 'Playfair Display', serif;
          color: white;
          text-align: center;
          font-weight: 400;
          font-size: 1rem;
          letter-spacing: 0.08em;
          padding: 0 0.5rem;
          flex-shrink: 0;
        }
        
        @media (min-width: 768px) {
          .marquee-item {
            font-size: 2.25rem;
            padding: 0 1.5rem;
          }
        }
        
        .marquee-content:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
