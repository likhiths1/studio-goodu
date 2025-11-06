import React from "react";
import { Link } from "react-router-dom";

const PricingComparison = () => {
  const plans = [
    {
      id: 1,
      label: "Architecture",
      name: "Economy",
      price: "₹180",
      isPopular: false,
      floorArea: "Up to 4000 Sq. Ft.",
      features: {
        architecturalDesign: false,
        mepDesign: true,
        structuralDesign: true,
        billOfQuantities: false,
        interiorDesign: false,
        landscapeDesign: false,
      },
    },
    {
      id: 2,
      label: "Interiors",
      name: "Premium",
      price: "₹180-350",
      isPopular: false,
      floorArea: "Up to 4000 Sq. Ft.",
      features: {
        architecturalDesign: false,
        mepDesign: true,
        structuralDesign: false,
        billOfQuantities: true,
        interiorDesign: true,
        landscapeDesign: false,
      },
    },
    {
      id: 3,
      label: "Interiors + arch",
      name: "Elite",
      price: "₹300-650",
      isPopular: true,
      floorArea: "Up to 4000 Sq. Ft.",
      features: {
        architecturalDesign: false,
        mepDesign: true,
        structuralDesign: true,
        billOfQuantities: true,
        interiorDesign: true,
        landscapeDesign: true,
      },
    },
    {
      id: 4,
      label: "Customise",
      name: "Bespoke",
      price: null,
      isPopular: false,
      floorArea: "Above 4000 Sq. Ft.",
      features: {
        architecturalDesign: true,
        mepDesign: true,
        structuralDesign: true,
        billOfQuantities: true,
        interiorDesign: true,
        landscapeDesign: true,
      },
    },
  ];

  const featureNames = {
    architecturalDesign: "Architectural Design",
    mepDesign: "MEP Design",
    structuralDesign: "Structural Design",
    billOfQuantities: "Bill of Quantities",
    interiorDesign: "Interior Design",
    landscapeDesign: "Landscape Design",
  };

  return (
    <section className="w-full bg-[#FFF6ED] py-16 sm:py-20 md:py-24 overflow-hidden px-4 sm:px-6 md:px-8">
      <div className="w-full max-w-[90rem] mx-auto">
        {/* Header - Mobile */}
        <div className="mb-8 lg:hidden">
          <h2
            className="text-2xl sm:text-3xl mb-3"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              color: "#5A6C6F",
            }}
          >
            Compare plans
          </h2>
          <p
            className="text-sm sm:text-base leading-relaxed"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 300,
              color: "#8A9EA2",
            }}
          >
            Choose your workspace plan according to your organisational plan
          </p>
        </div>

        {/* Mobile & Tablet - Card Layout */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm"
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div
                  className="w-full py-2 text-white text-xs uppercase tracking-wide text-center"
                  style={{
                    backgroundColor: "#5A6C6F",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                  }}
                >
                  Most Popular
                </div>
              )}

              {/* Card Content */}
              <div className="p-6">
                {/* Plan Header */}
                <div className="text-center mb-6">
                  <p
                    className="text-xs uppercase mb-2"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 400,
                      color: "#8A9EA2",
                    }}
                  >
                    {plan.label}
                  </p>
                  <h3
                    className="text-2xl mb-3"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 500,
                      color: "#5A6C6F",
                    }}
                  >
                    {plan.name}
                  </h3>
                  {plan.price ? (
                    <p
                      className="text-3xl font-bold"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        color: "#3A4D50",
                      }}
                    >
                      {plan.price}
                    </p>
                  ) : (
                    <Link 
                      to="/contact"
                      className="w-full py-3 text-white text-sm uppercase tracking-wide hover:opacity-90 transition-opacity block"
                      style={{
                        backgroundColor: "#5A6C6F",
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 500,
                      }}
                    >
                      Contact for Details
                    </Link>
                  )}
                </div>

                {/* Floor Area */}
                <div className="mb-4 pb-4 border-b border-gray-200">
                  <p
                    className="text-xs uppercase mb-1"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 400,
                      color: "#7A8C8F",
                    }}
                  >
                    Floor Area
                  </p>
                  <p
                    className="text-sm"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 300,
                      color: "#8A9EA2",
                    }}
                  >
                    {plan.floorArea}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  {Object.entries(plan.features).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between">
                      <span
                        className="text-sm"
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: 400,
                          color: "#7A8C8F",
                        }}
                      >
                        {featureNames[key]}
                      </span>
                      {value ? <CheckIcon /> : <CrossIcon />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop - Table Layout */}
        <div className="hidden lg:block w-full -ml-2">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                {/* Column 1: Compare Plans Header */}
                <th className="bg-white border border-gray-300 p-4 text-left align-top w-[300px]">
                  <h2
                    className="text-2xl xl:text-3xl mb-3"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 400,
                      color: "#5A6C6F",
                    }}
                  >
                    Compare plans
                  </h2>
                  <p
                    className="text-sm xl:text-base leading-relaxed"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 300,
                      color: "#8A9EA2",
                    }}
                  >
                    Choose your workspace plan according to your organisational
                    plan
                  </p>
                </th>

                {/* Dynamic Plan Columns */}
                {plans.map((plan) => (
                  <th
                    key={plan.id}
                    className="bg-white border border-gray-300 p-0 text-center align-top w-[220px] relative"
                  >
                    {/* Most Popular Badge */}
                    {plan.isPopular && (
                      <div
                        className="w-full py-2 text-white text-xs uppercase tracking-wide"
                        style={{
                          backgroundColor: "#5A6C6F",
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 500,
                        }}
                      >
                        Most Popular
                      </div>
                    )}
                    <div className={plan.isPopular ? "p-4" : "p-4 pt-8"}>
                      <p
                        className="text-xs uppercase mb-2"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 400,
                          color: "#8A9EA2",
                        }}
                      >
                        {plan.label}
                      </p>
                      <h3
                        className="text-xl xl:text-2xl mb-3"
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: 500,
                          color: "#5A6C6F",
                        }}
                      >
                        {plan.name}
                      </h3>
                      {plan.price ? (
                        <p
                          className="text-3xl xl:text-4xl font-bold"
                          style={{
                            fontFamily: "Poppins, sans-serif",
                            color: "#3A4D50",
                          }}
                        >
                          {plan.price}
                        </p>
                      ) : (
                        <Link
                          to="/contact"
                          className="w-full py-3 text-white text-sm uppercase tracking-wide hover:opacity-90 transition-opacity block"
                          style={{
                            backgroundColor: "#5A6C6F",
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 500,
                          }}
                        >
                          Contact for Details
                        </Link>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {/* Floor Area Row */}
              <tr>
                <td
                  className="bg-white border border-gray-300 p-4 whitespace-normal"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 400,
                    color: "#7A8C8F",
                  }}
                >
                  Floor Area
                </td>
                {plans.map((plan) => (
                  <td
                    key={plan.id}
                    className="bg-white border border-gray-300 p-4 text-center whitespace-normal"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 300,
                      color: "#8A9EA2",
                    }}
                  >
                    {plan.floorArea}
                  </td>
                ))}
              </tr>

              {/* Feature Rows */}
              {Object.keys(featureNames).map((featureKey) => (
                <tr key={featureKey}>
                  <td
                    className="bg-white border border-gray-300 p-4 whitespace-normal"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 400,
                      color: "#7A8C8F",
                    }}
                  >
                    {featureNames[featureKey]}
                  </td>
                  {plans.map((plan) => (
                    <td
                      key={plan.id}
                      className="bg-white border border-gray-300 p-4 text-center whitespace-normal"
                    >
                      {plan.features[featureKey] ? <CheckIcon /> : <CrossIcon />}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

// Check Icon Component
const CheckIcon = () => (
  <svg
    className="w-5 h-5 sm:w-6 sm:h-6 mx-auto"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" fill="#5A6C6F" />
    <path
      d="M8 12.5L10.5 15L16 9.5"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Cross Icon Component
const CrossIcon = () => (
  <svg
    className="w-5 h-5 sm:w-6 sm:h-6 mx-auto"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" stroke="#B8C5C7" strokeWidth="1.5" />
    <path
      d="M15 9L9 15M9 9L15 15"
      stroke="#B8C5C7"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export default PricingComparison;
