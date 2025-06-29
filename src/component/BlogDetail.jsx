import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import backIcon from "../assets/backIcon.png";
import blogDetailDog from "../assets/blogDetailDog.png";
import dateIcon from "../assets/dateIcon.png";
import dogImage from "../assets/articleImg.png";
import Contact from "./Contact";
import ContactUs from "./ContactUs";
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

export default function BlogDetail() {
  const navigate = useNavigate();
  return (
    <div className="mt-3">
      <div className="flex items-center gap-2">
        <img
          src={backIcon}
          alt="Back"
          onClick={() => navigate("/blog")}
          className="cursor-pointer"
        />
        <p className="font-semibold text-xl">Back to Blogs</p>
      </div>
      <div className="px-8 py-9 border border-[#cccccc] rounded-xl mt-3">
        <p className="font-bold text-4xl text-black">
          Nutrition for Pregnant Dogs: Essential Guidelines
        </p>
        <img src={blogDetailDog} className="w-full mt-5" />

        <p className="text-sm text-gray-500 flex items-center gap-2 mb-2 font-normal mt-5">
          <span role="img" aria-label="calendar">
            <img src={dateIcon} />
          </span>{" "}
          20/02/2024
        </p>

        <p className="font-normal text-xl text-black mt-5 text-justify">
          Proper nutrition for pregnant dogs is vital for the health of both the
          mother and her developing puppies. At DogingtonPost, we understand the
          importance of providing expectant canine moms with the right balance
          of nutrients during this critical time. In this guide, we’ll explore
          the essential nutritional needs of pregnant dogs and offer practical
          feeding strategies to support a healthy pregnancy. Whether you’re a
          first-time breeder or an experienced dog owner, this information will
          help you ensure your pregnant pup gets the best possible care.{" "}
        </p>
        <p className="font-normal text-xl text-black mt-5">
          What Do Pregnant Dogs Need to Eat?{" "}
        </p>
        <p className="font-normal text-xl text-black">
          Calorie Requirements for Expecting Canines
        </p>

        <p className="font-normal text-xl text-black mt-5 text-justify">
          Pregnant dogs have specific nutritional needs that evolve throughout
          their gestation period. As the pregnancy progresses, a dog’s calorie
          requirements increase significantly. Veterinary nutritionists
          recommend that pregnant dogs consume about 30-60% more calories than
          usual by the end of their pregnancy. This increase should not happen
          all at once. Instead, owners should gradually increase portions
          starting from the fifth week of pregnancy.
        </p>
      </div>

      <div className="max-w-screen-xl mx-auto py-10">
        <p className="font-bold text-3xl text-black">Similar Blogs</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
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

        <ContactUs fullWidth />
 
    </div>
  );
}
