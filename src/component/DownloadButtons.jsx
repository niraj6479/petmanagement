import React from "react";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
export default function DownloadButtons() {
  return (
    <div className="flex sm:flex-row gap-3 sm:gap-2">
      <button className="border border-[#acaaad] flex items-center justify-center gap-2 px-4 py-2 rounded-4xl w-[180px] bg-white">
        <FaApple className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
        <div className="text-left leading-tight">
          <p className="text-black font-bold text-[8px] sm:text-[9px]">
            Download on the Store
          </p>
          <span className="text-black font-semibold text-[14px] sm:text-xl">
            App Store
          </span>
        </div>
      </button>

      <button className="border border-[#acaaad] flex items-center justify-center gap-2 px-4 py-2 rounded-4xl w-[180px] bg-white">
        <IoLogoGooglePlaystore className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
        <div className="text-left leading-tight">
          <p className="text-black font-bold text-[8px] sm:text-[9px]">
            GET IT ON
          </p>
          <span className="text-black font-semibold text-[14px] sm:text-xl">
            Google Play
          </span>
        </div>
      </button>
    </div>
  );
}
