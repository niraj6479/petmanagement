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
  slidesToShow: 2, // or 3 depending on how many you want visible
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
    <div>
      <div className="bg-[#fcfaf8] mt-10 px-6 py-10 rounded-[40px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          {/* Left Side - Text */}
          <div className="col-span-12 md:col-span-8">
            <p className="font-normal text-xl text-gray-600 mb-2">
              Blog – The Pet Journal by Doommi
            </p>
            <p className="font-bold text-4xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-[#6f3201] to-[#ffba61] bg-clip-text text-transparent leading-tight">
              Stories, Tips, and <br />
              Wellness Wisdom — <br /> Straight from the Heart
            </p>

            <p className="text-gray-700 text-lg mt-6">
              Welcome to The Pet Journal, Doommi’s storytelling space. Here, we
              share everything from real pet stories to health guides, adoption
              tips, and wellness insights — all written with love, just like
              everything we do.
            </p>

            <p className="text-gray-700 text-lg mt-3">
              Because behind every bark, purr, or playful zoomie, there’s a
              story worth telling.
            </p>

            <p className="mt-4 text-[#6f3201] font-semibold text-lg underline cursor-pointer">
              View More
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="col-span-12 md:col-span-4">
            <Slider {...settings}>
              <div className="px-2">
                <img
                  src={blogStores}
                  alt="Blog visual"
                  className="w-full h-[500px] object-cover rounded-[30px]"
                />
              </div>
              <div className="px-2">
                <img
                  src={blogStores2}
                  alt="Blog visual"
                  className="w-full h-[500px] object-cover rounded-[30px]"
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
