import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import blogStores from "../assets/blogStories.svg";
import blogStores2 from "../assets/blogStories2.png";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export default function StoriesTip() {
  return (
    <div className="w-full">
      <div className="bg-[#fcfaf8] mt-10 p-6 md:p-10 rounded-[40px] w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Left Side - Text */}
          <div className="md:col-span-7 w-full">
            <p className="text-base text-gray-600 mb-2">
              Blog – The Pet Journal by Doommi
            </p>
            <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-[#6f3201] to-[#ffba61] bg-clip-text text-transparent leading-tight break-words">
              Stories, Tips, and <br />
              Wellness Wisdom — <br />
              Straight from the Heart
            </h2>
            <p className="text-gray-700 text-base sm:text-lg mt-6 text-justify break-words">
              Welcome to The Pet Journal, Doommi’s storytelling space. Here, we
              share everything from real pet stories to health guides, adoption
              tips, and wellness insights — all written with love, just like
              everything we do.
            </p>
            <p className="text-gray-700 text-base sm:text-lg mt-3 text-justify break-words">
              Because behind every bark, purr, or playful zoomie, there’s a
              story worth telling.
            </p>
            <p className="mt-4 text-[#6f3201] font-semibold text-base underline cursor-pointer">
              View More
            </p>
          </div>

          {/* Right Side - Slider */}
          <div className="md:col-span-5 w-full">
            <Slider {...settings}>
              <div className="px-1 outline-0">
                <img
                  src={blogStores}
                  alt="Blog visual"
                  className="w-full h-[400px] object-cover rounded-[30px]"
                />
              </div>
              <div className="px-1 outline-0">
                <img
                  src={blogStores2}
                  alt="Blog visual"
                  className="w-full h-[400px] object-cover rounded-[30px]"
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
