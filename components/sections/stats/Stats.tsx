import React from "react";
import image4 from "@/public/images/background-image-4.jpg";

export const Stats = () => {
  return (
    <section
      className="py-8 sm:py-10 lg:py-12 relative section-margin text-white"
      style={{
        backgroundImage: `url(${image4.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-gray-800/80 pointer-events-none" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-bold leading-9 sm:text-4xl sm:leading-tight">
            أرقام مميزة في عالم تنسيق الحدائق ونباتات الزينة
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:mt-16 lg:grid-cols-4">
          <div className="relative overflow-hidden border-t-4 border-primary bg-gray-600 shadow">
            <div className="px-6 py-10">
              <div className="flex flex-col gap-1 items-center">
                <h3 className="relative ml-2 inline-block text-4xl font-bold leading-none">
                  300+
                </h3>
                <span className="ml-3 text-base font-medium capitalize">
                  نوعًا من نباتات الزينة
                </span>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden border-t-4 border-primary bg-gray-600 shadow">
            <div className="px-6 py-10">
              <div className="flex flex-col gap-1 items-center">
                <h3 className="relative ml-2 inline-block text-4xl font-bold leading-none">
                  16
                </h3>
                <span className="ml-3 text-base font-medium capitalize">
                  عامًا من الخبرة
                </span>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden border-t-4 border-primary bg-gray-600 shadow">
            <div className="px-6 py-10">
              <div className="flex flex-col gap-1 items-center">
                <h3 className="relative ml-2 inline-block text-4xl font-bold leading-none">
                  41+
                </h3>
                <span className="ml-3 text-base font-medium capitalize">
                  تصميم حدائق فريد
                </span>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden border-t-4 border-primary bg-gray-600 shadow">
            <div className="px-6 py-10">
              <div className="flex flex-col gap-1 items-center">
                <h3 className="relative ml-2 inline-block text-4xl font-bold leading-none">
                  99%
                </h3>
                <span className="ml-3 text-base font-medium capitalize">
                  رضا العملاء
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};