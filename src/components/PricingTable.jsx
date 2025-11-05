import React from "react";

const PricingTable = () => {
  return (
    <section className="w-full bg-[#FAF8F5] py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Table Container */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-sm">
            {/* Header Row */}
            <thead>
              <tr className="border-b border-gray-200">
                {/* First Column - Title */}
                <th className="text-left p-6 sm:p-8 align-top bg-[#FAF8F5] w-1/5">
                  <h2
                    className="text-2xl sm:text-3xl text-[#5B6A6F] mb-3"
                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}
                  >
                    Compare plans
                  </h2>
                  <p
                    className="text-sm text-[#8B9598] leading-relaxed"
                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: 300 }}
                  >
                    Choose your workspace plan according to your organisational plan
                  </p>
                </th>

                {/* Economy Plan */}
                <th className="p-6 sm:p-8 align-top bg-white border-l border-gray-200 w-1/5">
                  <div className="text-center">
                    <p
                      className="text-[#5B6A6F] text-base mb-1"
                      style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500 }}
                    >
                      Economy
                    </p>
                    <p
                      className="text-xs text-[#8B9598] mb-4"
                      style={{ fontFamily: "Poppins, sans-serif", fontWeight: 300 }}
                    >
                      Architecture
                    </p>
                    <p
                      className="text-3xl sm:text-4xl text-[#5B6A6F]"
                      style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500 }}
                    >
                      ₹180
                    </p>
                  </div>
                </th>

                {/* Premium Plan */}
                <th className="p-6 sm:p-8 align-top bg-white border-l border-gray-200 w-1/5">
                  <div className="text-center">
                    <p
                      className="text-[#5B6A6F] text-base mb-1"
                      style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500 }}
                    >
                      Premium
                    </p>
                    <p
                      className="text-xs text-[#8B9598] mb-4"
                      style={{ fontFamily: "Poppins, sans-serif", fontWeight: 300 }}
                    >
                      Interiors
                    </p>
                    <p
                      className="text-3xl sm:text-4xl text-[#5B6A6F]"
                      style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500 }}
                    >
                      ₹180-350
                    </p>
                  </div>
                </th>

                {/* Elite Plan - Most Popular */}
                <th className="p-0 align-top bg-white border-l border-gray-200 w-1/5 relative">
                  <div className="bg-[#5B6A6F] text-white text-center py-2 text-xs tracking-wider uppercase" style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}>
                    Most Popular
                  </div>
                  <div className="p-6 sm:p-8 text-center">
                    <p
                      className="text-[#5B6A6F] text-base mb-1"
                      style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500 }}
                    >
                      Elite
                    </p>
                    <p
                      className="text-xs text-[#8B9598] mb-4"
                      style={{ fontFamily: "Poppins, sans-serif", fontWeight: 300 }}
                    >
                      Interiors + arch
                    </p>
                    <p
                      className="text-3xl sm:text-4xl text-[#5B6A6F]"
                      style={{ fontFamily: "Poppings, sans-serif", fontWeight: 500 }}
                    >
                      ₹300-650
                    </p>
                  </div>
                </th>

                {/* Bespoke Plan */}
                <th className="p-0 align-top bg-white border-l border-gray-200 w-1/5">
                  <div className="p-6 sm:p-8 text-center">
                    <p
                      className="text-[#5B6A6F] text-base mb-1"
                      style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500 }}
                    >
                      Bespoke
                    </p>
                    <p
                      className="text-xs text-[#8B9598] mb-4"
                      style={{ fontFamily: "Poppins, sans-serif", fontWeight: 300 }}
                    >
                      Customise
                    </p>
                    <button
                      className="bg-[#5B6A6F] text-white px-6 py-3 text-xs tracking-wider uppercase hover:bg-[#4A575C] transition-colors duration-300"
                      style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
                    >
                      Contact for Details
                    </button>
                  </div>
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {/* Floor Area Row */}
              <tr className="border-b border-gray-200">
                <td className="p-6 sm:p-8 bg-[#FAF8F5] text-[#5B6A6F]" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}>
                  Floor Area
                </td>
                <td className="p-6 sm:p-8 text-center border-l border-gray-200 text-[#8B9598] text-sm" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 300 }}>
                  Up to 4000 Sq. Ft.
                </td>
                <td className="p-6 sm:p-8 text-center border-l border-gray-200 text-[#8B9598] text-sm" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 300 }}>
                  Up to 4000 Sq. Ft.
                </td>
                <td className="p-6 sm:p-8 text-center border-l border-gray-200 text-[#8B9598] text-sm" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 300 }}>
                  Up to 4000 Sq. Ft.
                </td>
                <td className="p-6 sm:p-8 text-center border-l border-gray-200 text-[#8B9598] text-sm" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 300 }}>
                  Above 4000 Sq. Ft.
                </td>
              </tr>

              {/* Architectural Design Row */}
              <tr className="border-b border-gray-200">
                <td className="p-6 sm:p-8 bg-[#FAF8F5] text-[#5B6A6F]" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}>
                  Architectural Design
                </td>
                <td className="p-6 sm:p-8 text-center border-l border-gray-200">
                  <svg className="w-6 h-6 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                    <line x1="8" y1="8" x2="16" y2="16" strokeWidth="2"/>
                  </svg>
                </td>
                <td className="p-6 sm:p-8 text-center border-l border-gray-200">
                  <svg className="w-6 h-6 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                    <line x1="8" y1="8" x2="16" y2="16" strokeWidth="2"/>
                  </svg>
                </td>
                <td className="p-6 sm:p-8 text-center border-l border-gray-200">
                  <svg className="w-6 h-6 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                    <line x1="8" y1="8" x2="16" y2="16" strokeWidth="2"/>
                  </svg>
                </td>
                <td className="p-6 sm:p-8 text-center border-l border-gray-200">
                  <svg className="w-6 h-6 mx-auto text-[#5B6A6F]" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/>
                    <path fill="white" d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </td>
              </tr>

              {/* MEP Design Row */}
              <tr className="border-b border-gray-200">
                <td className="p-6 sm:p-8 bg-[#FAF8F5] text-[#5B6A6F]" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}>
                  MEP Design
                </td>
                <td className="p-6 sm:p-8 text-center border-l border-gray-200">
                  <svg className="w-6 h-6 mx-auto text-[#5B6A6F]" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/>
                    <path fill="white" d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </td>
                <td className="p-6 sm:p-8 text-center border-l border-gray-200">
                  <svg className="w-6 h-6 mx-auto text-[#5B6A6F]" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/>
                    <path fill="white" d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </td>
                <td className="p-6 sm:p-8 text-center border-l border-gray-200">
                  <svg className="w-6 h-6 mx-auto text-[#5B6A6F]" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/>
                    <path fill="white" d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </td>
                <td className="p-6 sm:p-8 text-center border-l border-gray-200">
                  <svg className="w-6 h-6 mx-auto text-[#5B6A6F]" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/>
                    <path fill="white" d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </td>
              </tr>

              {/* Structural Design Row */}
              <tr className="border-b border-gray-200">
                <td className="p-6 sm:p-8 bg-[#FAF8F5] text-[#5B6A6F]" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}>
                  Structural Design
                </td>
                <td className="p-6 sm:p-8 text-center border-l border-gray-200">
                  <svg className="w-6 h-6 mx-auto text-[#5B6A6F]" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/>
                    <path fill="white" d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </td>
                <td className="p-6 sm:p-8 text-center border-l border-gray-200">
                  <svg className="w-6 h-6 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                    <line x1="8" y1="8" x2="16" y2="16" strokeWidth="2"/>
                  </svg>
                </td>
                <td className="p-6 sm:p-8 text-center border-l border-gray-200">
                  <svg className="w-6 h-6 mx-auto text-[#5B6A6F]" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/>
                    <path fill="white" d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </td>
                <td className="p-6 sm:p-8 text-center border-l border-gray-200">
                  <svg className="w-6 h-6 mx-auto text-[#5B6A6F]" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/>
                    <path fill="white" d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </td>
              </tr>

              {/* Bill of Quantities Row */}
              <tr className="border-b border-gray-200">
                <td className="p-6 sm:p-8 bg-[#FAF8F5] text-[#5B6A6F]" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}>
                  Bill of Quantities
                </td>
                <td className="p-6 sm:p-8 text-center border-l border-gray-200">
                  <svg className="w-6 h-6 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                    <line x1="8" y1="8" x2="16" y2="16" strokeWidth="2"/>
                  </svg>
                </td>
                <td className="p-6 sm:p-8 text-center border-l border-gray-200">
                  <svg className="w-6 h-6 mx-auto text-[#5B6A6F]" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/>
                    <path fill="white" d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </td>
                <td className="p-6 sm:p-8 text-center border-l border-gray-200">
                  <svg className="w-6 h-6 mx-auto text-[#5B6A6F]" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/>
                    <path fill="white" d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </td>
                <td className="p-6 sm:p-8 text-center border-l border-gray-200">
                  <svg className="w-6 h-6 mx-auto text-[#5B6A6F]" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/>
                    <path fill="white" d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </td>
              </tr>

              {/* Interior Design Row */}
              <tr className="border-b border-gray-200">
                <td className="p-6 sm:p-8 bg-[#FAF8F5] text-[#5B6A6F]" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}>
                  Interior Design
                </td>
                <td className="p-6 sm:p-8 text-center border-l border-gray-200">
                  <svg className="w-6 h-6 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                    <line x1="8" y1="8" x2="16" y2="16" strokeWidth="2"/>
                  </svg>
                </td>
                <td className="p-6 sm:p-8 text-center border-l border-gray-200">
                  <svg className="w-6 h-6 mx-auto text-[#5B6A6F]" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/>
                    <path fill="white" d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </td>
                <td className="p-6 sm:p-8 text-center border-l border-gray-200">
                  <svg className="w-6 h-6 mx-auto text-[#5B6A6F]" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/>
                    <path fill="white" d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </td>
                <td className="p-6 sm:p-8 text-center border-l border-gray-200">
                  <svg className="w-6 h-6 mx-auto text-[#5B6A6F]" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/>
                    <path fill="white" d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </td>
              </tr>

              {/* Landscape Design Row */}
              <tr>
                <td className="p-6 sm:p-8 bg-[#FAF8F5] text-[#5B6A6F]" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}>
                  Landscape Design
                </td>
                <td className="p-6 sm:p-8 text-center border-l border-gray-200">
                  <svg className="w-6 h-6 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                    <line x1="8" y1="8" x2="16" y2="16" strokeWidth="2"/>
                  </svg>
                </td>
                <td className="p-6 sm:p-8 text-center border-l border-gray-200">
                  <svg className="w-6 h-6 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                    <line x1="8" y1="8" x2="16" y2="16" strokeWidth="2"/>
                  </svg>
                </td>
                <td className="p-6 sm:p-8 text-center border-l border-gray-200">
                  <svg className="w-6 h-6 mx-auto text-[#5B6A6F]" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/>
                    <path fill="white" d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </td>
                <td className="p-6 sm:p-8 text-center border-l border-gray-200">
                  <svg className="w-6 h-6 mx-auto text-[#5B6A6F]" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/>
                    <path fill="white" d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
