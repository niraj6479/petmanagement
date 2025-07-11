import React from "react";
import manwithdog from "../assets/manwithdog.svg";

import pet1 from "../assets/healthDog.png";
import pet2 from "../assets/wagDog.png";
import pet3 from "../assets/adoptionDog.png";
import pet4 from "../assets/petDog.png";

export default function PetJourney() {
  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat rounded-[60px] overflow-hidden px-4 py-10 mt-10"
      id="feature"
      style={{ backgroundImage: `url(${manwithdog})` }}
    >
      {/* Text Content */}
      <div className="max-w-screen-xl mx-auto text-right">
        <p className="bg-gradient-to-r from-[#ffba61] to-[#6f3201] bg-clip-text text-transparent font-bold text-3xl sm:text-5xl lg:text-7xl leading-[1.3] sm:leading-[1.2] md:leading-[1.1] lg:leading-[1.05] xl:leading-[1] text-right break-words">
          Your Pet’s Journey,
          <br />
          <span className="block">Just Smarter.</span>
        </p>

        <p className="font-medium text-base sm:text-xl lg:text-2xl text-black mt-3">
          With Doommi, you’re not just logging —<br />
          <span className="block">you’re understanding.</span>
        </p>

        {/* Feature Cards */}
        {/* <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[pet1, pet2, pet3, pet4].map((img, idx) => (
            <div
              key={idx}
              className="rounded-[60px] overflow-hidden shadow-md"
            >
              <img
                src={img}
                alt={`pet${idx + 1}`}
                className="w-full h-[280px] sm:h-[300px] object-cover rounded-[60px]"
              />
            </div>
          ))}
        </div> */}

        {/* Mobile - Horizontal Scroll */}
        <div className="block lg:hidden overflow-x-auto">
          <div className="flex space-x-4 px-2">
            {[pet1, pet2, pet3, pet4].map((img, idx) => (
              <div
                key={idx}
                className="min-w-[250px] flex-shrink-0 rounded-[60px] overflow-hidden shadow-md"
              >
                <img
                  src={img}
                  alt={`pet${idx + 1}`}
                  className="w-full h-[280px] object-cover rounded-[60px]"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop - Grid Layout */}
        <div className="hidden lg:grid mt-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[pet1, pet2, pet3, pet4].map((img, idx) => (
            <div key={idx} className="rounded-[60px] overflow-hidden shadow-md">
              <img
                src={img}
                alt={`pet${idx + 1}`}
                className="w-full h-[280px] sm:h-[300px] object-cover rounded-[60px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
