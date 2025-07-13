import React, { useState } from "react";
import dogbg from "../assets/backgroundgrass.svg";
import dogimg from "../assets/dogImg.png";

import img1 from "../assets/dog1.png";
import img2 from "../assets/dog2.png";
import img3 from "../assets/dog3.png";
import img4 from "../assets/dog4.png";
import img5 from "../assets/dog5.png";

import PetJourney from "./PetJourney";
import StoriesTip from "./StoriesTip";
import ContactUs from "./ContactUs";
import DownloadButtons from "./DownloadButtons";

export default function BodyContent() {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    // Delay a bit for smoother fade-out
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  return (
    <>
      {/* ✅ Loader (only shows on first load) */}
      {isLoading && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-white transition-opacity duration-500 opacity-90">
          <div className="text-center">
            <div className="w-10 h-10 border-4 border-gray-300 border-t-[#ffba61] rounded-full animate-spin mx-auto"></div>
            <p className="text-gray-700 mt-2 font-medium">Loading...</p>
          </div>
        </div>
      )}

      {/* ✅ Website Content */}
      <div
        className={`transition-opacity duration-700 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="relative w-full">
          {/* Background Image */}
          <img
            src={dogbg}
            alt="Background"
            onLoad={handleImageLoad}
            // className="w-full h-auto object-cover md:mt-3 mt-3"
            className="w-full h-[300px] sm:h-[500px] md:h-auto object-cover md:mt-3 mt-3 rounded-4xl"
          />

          {/* Foreground Dog Image */}
          <img
            src={dogimg}
            alt="Dog"
            className="w-full h-auto object-cover md:mt-0 mt-3 absolute md:bottom-[45px] bottom-[94px]"
          />

          {/* Text */}
          <div className="absolute top-6 sm:top-16 left-4 sm:left-10 max-w-[95%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[50%]">
            <p className="font-black text-[20px] sm:text-[40px] md:text-[56px] lg:text-[72px] xl:text-[78px] bg-gradient-to-r from-white to-[#ffe0b8] bg-clip-text text-transparent leading-[1.1] break-words">
              Care for your pet <br />
              like never before.
            </p>
            <p className="mt-2 font-medium text-[12px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-white leading-relaxed">
              Doommi turns everyday pet care into an experience —
              <br className="hidden sm:block" />
              effortless health logs, smart reminders, and heartfelt
              <br className="hidden sm:block" />
              memories, all in one elegant app.
            </p>
          </div>

          {/* Buttons for large screens */}
          <div className="hidden md:flex absolute bottom-14 right-10 gap-5">
            <DownloadButtons />
          </div>

          {/* Buttons for small screens */}
          <div className="block md:hidden mt-6">
            <DownloadButtons />
          </div>
        </div>

        {/* Image Grid Section */}
        <div className="bg-[#fcfaf8] rounded-[60px] mt-10">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full">
              <div className="grid grid-cols-4 gap-4">
                <div className="flex flex-col gap-4">
                  <img
                    src={img1}
                    className="rounded-tl-[60px] object-cover h-[180px] w-full"
                    alt="dog1"
                  />
                  <img
                    src={img2}
                    className="rounded-bl-[60px] object-cover h-[100px] w-full"
                    alt="dog2"
                  />
                </div>
                <div className="flex col-span-2 items-center">
                  <img
                    src={img3}
                    className="object-cover h-[299px] w-full rounded-md"
                    alt="dog3"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <img
                    src={img4}
                    className="object-cover h-[180px] w-full rounded-b-2xl"
                    alt="dog4"
                  />
                  <img
                    src={img5}
                    className="object-cover h-[100px] w-full rounded-t-2xl"
                    alt="dog5"
                  />
                </div>
              </div>
            </div>

            {/* Text beside grid */}
            <div className="flex flex-col justify-center lg:ps-10 p-6">
              <p className="text-2xl font-semibold text-black">
                More Than an App <br />
                <span className="bg-gradient-to-r from-[#6f3201] to-[#ffba61] bg-clip-text text-transparent italic font-medium text-4xl">
                  It’s a Promise
                </span>
              </p>
              <p className="text-black mb-2 font-medium text-[20px] mt-4 text-justify">
                Doommi was born from the story of Doommi, a dog who filled our
                lives with joy, chaos, and unconditional love. When Doommi
                passed, we realized how much of his journey — his favorite
                meals, his health struggles, the happy memories — had never been
                captured in one place.
              </p>
              <p className="text-black font-medium text-[20px]">
                We built Doommi to change that.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Sections */}
        <PetJourney />
        <StoriesTip />
        <ContactUs />
      </div>
    </>
  );
}
