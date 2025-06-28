import React from "react";
import dogbg from "../assets/dogbg.svg";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

import img1 from "../assets/dog1.png";
import img2 from "../assets/dog2.png";
import img3 from "../assets/dog3.png";
import img4 from "../assets/dog4.png";
import img5 from "../assets/dog5.png";

import PetJourney from "./PetJourney";
import StoriesTip from "./StoriesTip";
import ContactUs from "./ContactUs";
// import Footer from "./Footer";

export default function BodyContent() {
  return (
    <div>
      <div className="relative">
        <img src={dogbg} className="w-full" />
        <div className="absolute top-15 left-15">
          <p className="font-black text-[20px] sm:text-[60px] md:text-[90px] bg-gradient-to-r from-white to-[#ffe0b8] bg-clip-text text-transparent leading-[1.1]">
            Care for your pet <br />
            like never before.
          </p>
          <p className="mt-3 font-medium text-[14px] sm:text-[18px] md:text-[24px] bg-gradient-to-r from-white to-[#ffe0b8] bg-clip-text text-transparent">
            Doommi turns everyday pet care into an experience —<br /> effortless
            health logs, smart reminders, and heartfelt <br />
            memories, all in one elegant app.
          </p>
        </div>

        <div className="absolute bottom-0 md:bottom-10 right-0 sm:right-0 sm:flex sm:gap-5 flex-col sm:flex-row items-start sm:items-center">
          <button className="border border-[#acaaad] flex items-center justify-center gap-2 px-6 py-2 rounded-4xl w-[200px] mb-3 sm:mb-0">
            <FaApple className="w-6 h-6 text-black" />
            <div>
              <p className="text-black font-bold text-[9px] text-start">
                Download on the Store
                <br />
                <span className="text-black font-semibold text-xl leading-[1.1]">
                  App Store
                </span>
              </p>
            </div>
          </button>

          <button className="border border-[#acaaad] flex items-center justify-center gap-2 px-6 py-2 rounded-4xl w-[200px]">
            <IoLogoGooglePlaystore className="w-6 h-6 text-black" />
            <div>
              <p className="text-black font-bold text-[9px] text-start">
                GET IT ON
                <br />
                <span className="text-black font-semibold text-xl leading-[1.1]">
                  Google Play
                </span>
              </p>
            </div>
          </button>
        </div>
      </div>

      <div className="bg-[#fcfaf8] rounded-[60px] mt-10">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Image Grid */}
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
                className="object-cover h-[180px] w-full"
                alt="dog4"
              />
              <img
                src={img5}
                className="object-cover h-[100px] w-full"
                alt="dog5"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="flex flex-col justify-center lg:ps-10">
            <p className="text-2xl font-semibold text-black">
              More Than an App <br />
              <span className="bg-gradient-to-r from-[#6f3201] to-[#ffba61] bg-clip-text text-transparent italic font-medium text-4xl">
                It’s a Promise
              </span>
            </p>
            <p className="text-black mb-2 font-medium text-[20px] mt-4">
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
