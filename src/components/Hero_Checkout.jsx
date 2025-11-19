import React, { useState } from "react";
import { IoCheckmarkOutline } from "react-icons/io5";
import { MdOutlineChevronRight } from "react-icons/md";

const Hero_Checkout = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { id: 0, label: "Shipping" },
    { id: 1, label: "Review & Payments" },
  ];
  return (
    <section className="min-h-max px-5 lg:px-40 py-10">
      <div className="text-cBlack flex items-center justify-center text-xs">
        <p>Home</p>
        <MdOutlineChevronRight />
        <p className="text-[#A7A7A7]">Checkout</p>
      </div>
      <div className="w-full max-w-md mx-auto p-8 bg-white">
        <div className="flex items-center justify-between mb-8">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              {/* Step Circle and Label */}
              <div className="flex flex-col items-center">
                <div
                  className={`
                  w-8 h-8 rounded-full border-2 flex items-center justify-center font-semibold text-sm transition-all duration-300
                  ${
                    currentStep > index
                      ? "bg-cGreen border-cGreen text-white"
                      : currentStep === index
                      ? "bg-cGreen border-cGreen text-white"
                      : "bg-white border-[#C4C4C4] text-cGrey_1"
                  }
                `}
                >
                  {currentStep > index ? (
                    <IoCheckmarkOutline className="w-4 h-4" />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>
                <span
                  className={`
                  mt-2 text-sm font-medium transition-colors duration-300
                  ${currentStep >= index ? "text-green-600" : "text-gray-500"}
                `}
                >
                  {step.label}
                </span>
              </div>

              {/* Connector Line (don't show after last step) */}
              {index < steps.length - 1 && (
                <div
                  className={`
                  flex-1 h-0.5 mx-4 transition-colors duration-300
                  ${currentStep > index ? "bg-cGreen" : "bg-[#C4C4C4]"}
                `}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero_Checkout;

{
  /* Demo Buttons */
}
// <div className="space-y-4">
//   <div className="flex space-x-4 justify-center">
//     <button
//       onClick={() => setCurrentStep(0)}
//       className={`
//       px-4 py-2 rounded-lg font-medium transition-colors duration-200
//       ${
//         currentStep === 0
//           ? "bg-cGreen text-white"
//           : "bg-gray-100 text-cFilterGrey hover:bg-gray-200"
//       }
//     `}
//     >
//       Shipping
//     </button>
//     <button
//       onClick={() => setCurrentStep(1)}
//       className={`
//       px-4 py-2 rounded-lg font-medium transition-colors duration-200
//       ${
//         currentStep === 1
//           ? "bg-cGreen text-white"
//           : "bg-gray-100 text-cFilterGrey hover:bg-gray-200"
//       }
//     `}
//     >
//       Review & Payments
//     </button>
//   </div>

//   {/* Current Step Content */}
//   <div className="mt-8 p-4 bg-gray-50 rounded-lg">
//     {currentStep === 0 && (
//       <div>
//         <h3 className="text-lg font-semibold text-gray-900 mb-2">
//           Shipping Information
//         </h3>
//         <p className="text-gray-600">
//           Enter your shipping address and delivery preferences.
//         </p>
//       </div>
//     )}
//     {currentStep === 1 && (
//       <div>
//         <h3 className="text-lg font-semibold text-gray-900 mb-2">
//           Review & Payment
//         </h3>
//         <p className="text-gray-600">
//           Review your order and complete payment.
//         </p>
//       </div>
//     )}
//   </div>

//   {/* Navigation Buttons */}
//   <div className="flex justify-between">
//     <button
//       onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
//       disabled={currentStep === 0}
//       className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
//     >
//       Previous
//     </button>
//     <button
//       onClick={() =>
//         setCurrentStep(Math.min(steps.length - 1, currentStep + 1))
//       }
//       disabled={currentStep === steps.length - 1}
//       className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
//     >
//       {currentStep === steps.length - 1 ? "Complete" : "Next"}
//     </button>
//   </div>
// </div>
