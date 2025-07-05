import React from "react";
import dogbg from "../assets/dogbg.svg";
// import { FaApple } from "react-icons/fa";
// import { IoLogoGooglePlaystore } from "react-icons/io5";

import img1 from "../assets/dog1.png";
import img2 from "../assets/dog2.png";
import img3 from "../assets/dog3.png";
import img4 from "../assets/dog4.png";
import img5 from "../assets/dog5.png";

import PetJourney from "./PetJourney";
import StoriesTip from "./StoriesTip";
import ContactUs from "./ContactUs";
import DownloadButtons from "./DownloadButtons";
// import Footer from "./Footer";

export default function BodyContent() {
  return (
    <div>
      <div className="relative w-full">
        {/* Background Image */}
        <img
          src={dogbg}
          alt="Dog"
          className="w-full h-auto object-cover md:mt-0 mt-3"
        />

        {/* Text on Image (Positioned for md+ screens) */}
        <div className="absolute top-6 sm:top-16 left-4 sm:left-10 max-w-[95%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[50%]">
          {/* <p className="font-black text-[20px] sm:text-[40px] md:text-[56px] lg:text-[72px] xl:text-[78px] bg-gradient-to-r from-white to-[#ffe0b8] bg-clip-text text-transparent leading-snug sm:leading-tight break-words">
            Care for your pet <br />
            like never before.
          </p> */}

          <p className="font-black text-[20px] sm:text-[40px] md:text-[56px] lg:text-[72px] xl:text-[78px] bg-gradient-to-r from-white to-[#ffe0b8] bg-clip-text text-transparent leading-[1.2] sm:leading-[1.2] md:leading-[1.1] lg:leading-[1.05] xl:leading-[1] break-words">
            Care for your pet <br />
            like never before.
          </p>

          <p className="mt-3 font-medium text-[12px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-white leading-relaxed sm:leading-snug">
            Doommi turns everyday pet care into an experience —
            <br className="hidden sm:block" />
            effortless health logs, smart reminders, and heartfelt{" "}
            <br className="hidden sm:block" />
            memories, all in one elegant app.
          </p>
        </div>

        {/* Buttons for large screens (absolute over image) */}
        <div className="hidden md:flex absolute bottom-14 right-10 gap-5">
          <DownloadButtons />
        </div>

        {/* Buttons below image for small screens */}
        <div className="block md:hidden mt-6 px-6">
          <DownloadButtons />
        </div>
      </div>

      <div className="bg-[#fcfaf8] rounded-[60px] mt-10">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Image Grid */}
          <div className="w-full">
            <div className="grid grid-cols-4 gap-4">
              {/* Left Column */}
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

              {/* Middle Column */}
              <div className="flex col-span-2 items-center">
                <img
                  src={img3}
                  className="object-cover h-[299px] w-full rounded-md"
                  alt="dog3"
                />
              </div>

              {/* Right Column */}
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

          {/* Text Section */}
          <div className="flex flex-col justify-center lg:ps-10 p-6">
            <p className="text-2xl font-semibold text-black">
              More Than an App <br />
              <span className="bg-gradient-to-r from-[#6f3201] to-[#ffba61] bg-clip-text text-transparent italic font-medium text-4xl">
                It’s a Promise
              </span>
            </p>
            <p className="text-black mb-2 font-medium text-[20px] mt-4 text-justify">
              Doommi was born from the story of Doommi, a dog who filled our
              lives with joy, chaos, and unconditional love. When Doommi passed,
              we realized how much of his journey — his favorite meals, his
              health struggles, the happy memories — had never been captured in
              one place.
            </p>
            <p className="text-black font-medium text-[20px]">
              We built Doommi to change that.
            </p>
          </div>
        </div>
      </div>

      <PetJourney />
      <StoriesTip />
      <ContactUs />
      {/* <Footer /> */}
    </div>
  );
}
