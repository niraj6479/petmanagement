import React from "react";
import { Link } from "react-router-dom";
import flash from "../assets/flash.svg";
import dogImage from "../assets/articleImg.png";
import dateIcon from "../assets/dateIcon.png";

const blogPosts = [
  {
    id: 1,
    title: "Nutrition for Pregnant Dogs: Essential Guidelines",
    date: "20/02/2024",
    description:
      "Proper nutrition for pregnant dogs is vital for the health of both the mother and",
    image: dogImage, // Replace with actual
  },
  {
    id: 2,
    title: "Nutrition for Pregnant Dogs: Essential Guidelines",
    date: "20/02/2024",
    description:
      "Proper nutrition for pregnant dogs is vital for the health of both the mother and",
    image: dogImage,
  },
  {
    id: 3,
    title: "Nutrition for Pregnant Dogs: Essential Guidelines",
    date: "20/02/2024",
    description:
      "Proper nutrition for pregnant dogs is vital for the health of both the mother and",
    image: dogImage,
  },
  // ... add more as needed
];

export default function Blogs() {
  return (
    <div>
      <div className="flex justify-center my-5">
        <p className="flex items-center text-[#fbad36] border border-[#ffe3bd] rounded-4xl py-1 px-5">
          <img src={flash} />
          Blogs
        </p>
      </div>

      <p className="text-black font-bold text-4xl flex justify-center">
        Latest Insights & Articles
      </p>

      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="border border-[#cccccc] rounded-lg p-4 shadow-sm hover:shadow-md transition duration-300 bg-white"
            >
              {/* Image */}
              <img
                src={post.image}
                alt="Blog"
                className="rounded-md w-full h-48 object-cover mb-4"
              />

              {/* Date */}
              <p className="text-sm text-gray-500 flex items-center gap-2 mb-2 font-normal">
                <span role="img" aria-label="calendar">
                  <img src={dateIcon} />
                </span>{" "}
                {post.date}
              </p>

              {/* Title */}
              <h2 className="font-bold text-lg text-gray-800 mb-1">
                {post.title}
              </h2>

              {/* Description */}
              {/* <p className="text-sm text-gray-600 font-normal">
                {post.description}{" "}
                <span className="text-[#ffba61] font-medium cursor-pointer">
                  Read More
                </span>
              </p> */}

              <p className="text-sm text-gray-600 font-normal">
                {post.description}{" "}
                <Link
                  to={`/blogdetail/${post.id}`}
                  className="text-[#ffba61] font-medium cursor-pointer"
                >
                  Read More
                </Link>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
