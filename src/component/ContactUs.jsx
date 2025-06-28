import React from "react";
import mobileDog from "../assets/mobileDog.png";
export default function ContactUs({ fullWidth = false }) {
  return (
    // <div className="bg-[#fcfaf8] rounded-[30px] mx-auto max-w-6xl mt-10 shadow-md">
      <div
      className={`bg-[#fcfaf8] rounded-[30px] mt-10 shadow-md ${
        fullWidth ? "w-full" : "mx-auto max-w-6xl"
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: Contact Form */}
        <form className="p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black">
            Contact Us
          </h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Enter Name"
              className="p-3 rounded-full border border-gray-300 outline-none focus:ring-2 focus:ring-[#ffba61]"
            />
            <input
              type="email"
              placeholder="Enter Email"
              className="p-3 rounded-full border border-gray-300 outline-none focus:ring-2 focus:ring-[#ffba61]"
            />
            <textarea
              placeholder="Enter Comments"
              rows="4"
              className="p-3 rounded-2xl border border-gray-300 outline-none focus:ring-2 focus:ring-[#ffba61]"
            />
            <button
              type="button"
              className="hover:bg-[#e0a24d] text-[#6f3201] bg-[#ffba61] font-semibold py-2 px-6 rounded-full w-fit"
            >
              Submit
            </button>
          </form>
        </form>

        {/* Right: Image */}
        <div className="flex justify-center p-0 md:p-0">
          <img
            src={mobileDog}
            alt="Doommi App Preview"
            className="max-h-[400px] w-full md:w-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
