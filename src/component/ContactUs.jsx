import React, { useRef, useState } from "react";
import mobileDog from "../assets/mobileDog.png";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import SuccessMessage from "./SuccessMessage"; // Import it

export default function ContactUs({ fullWidth = false }) {
  const form = useRef();
  const [showSuccess, setShowSuccess] = useState(false); // Modal state

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.reply_to)) {
      alert("Please enter a valid email address.");
      return;
    }

    emailjs
      .sendForm(
        "service_asdf1234", // Your service ID
        // "template_asdf1234", // Your template ID
        "template_3p0pdev",
        form.current,
        "ItXE1huknKLKzZlaT" // Your public key
      )
      .then(
        () => {
          reset();
          setShowSuccess(true); // ✅ show success modal
          setTimeout(() => setShowSuccess(false), 5000);
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <>
      <div id="contactus">
        <div
          className={`bg-[#fcfaf8] rounded-[30px] mt-10 shadow-md ${
            fullWidth ? "w-full" : "mx-auto max-w-6xl"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <form
              ref={form}
              onSubmit={handleSubmit(onSubmit)}
              className="p-6 md:p-10 flex flex-col gap-4"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">
                Contact Us
              </h2>

              <input
                type="text"
                placeholder="Enter Name"
                {...register("from_name", { required: "Name is required" })}
                className="p-3 rounded-full border border-gray-300 outline-none focus:ring-2 focus:ring-[#ffba61]"
              />
              {errors.from_name && (
                <p className="text-red-500 text-sm -mt-2">
                  {errors.from_name.message}
                </p>
              )}

              <input
                type="email"
                placeholder="Enter Email"
                {...register("reply_to", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                className="p-3 rounded-full border border-gray-300 outline-none focus:ring-2 focus:ring-[#ffba61]"
              />
              {errors.reply_to && (
                <p className="text-red-500 text-sm -mt-2">
                  {errors.reply_to.message}
                </p>
              )}

              <textarea
                placeholder="Enter Comments"
                rows="4"
                {...register("message", { required: "Message is required" })}
                className="p-3 rounded-2xl border border-gray-300 outline-none focus:ring-2 focus:ring-[#ffba61]"
              />
              {errors.message && (
                <p className="text-red-500 text-sm -mt-2">
                  {errors.message.message}
                </p>
              )}

              <button
                type="submit"
                className="hover:bg-[#e0a24d] text-[#6f3201] bg-[#ffba61] font-semibold py-2 px-6 rounded-full w-fit cursor-pointer"
              >
                Submit
              </button>
            </form>

            <div className="flex justify-center p-0 md:p-0">
              <img
                src={mobileDog}
                alt="Doommi App Preview"
                className="max-h-[400px] w-full md:w-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* ✅ Success Modal */}
        {showSuccess && (
          <SuccessMessage
            message="Your message has been sent successfully!"
            onClose={() => setShowSuccess(false)}
          />
        )}
      </div>
    </>
  );
}
