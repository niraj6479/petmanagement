import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Menu } from "lucide-react"; // Or use your own SVG
import logo from "../assets/icon.svg";

export default function Navbar() {
  useEffect(() => {
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100); // wait for DOM to load
      }
    }
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <nav className="w-full bg-[#25282c] rounded-4xl">
      <div className="px-6 py-3 mx-auto flex justify-between items-center">
        {/* Logo */}
        <img
          src={logo}
          alt="logo"
          onClick={() => navigate("/")}
          className="cursor-pointer"
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center text-white font-medium text-[16px]">
          <button
            onClick={() => {
              if (window.location.pathname !== "/") {
                window.location.href = "/#feature";
              } else {
                const el = document.getElementById("feature");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="cursor-pointer"
          >
            Features
          </button>
          <Link to="/blog" className="cursor-pointer">
            Blogs
          </Link>

          <button
            onClick={() => {
              if (window.location.pathname !== "/") {
                window.location.href = "/#contactus";
              } else {
                const el = document.getElementById("contactus");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="text-[#6f3201] bg-[#ffba61] rounded-full px-5 py-2 text-center font-bold text-[14px] w-fit"
          >
            Contact Us
          </button>

          {/* <Link
            to="contact"
            className="text-[#6f3201] bg-[#ffba61] rounded-4xl py-1 px-3 font-bold text-[14px] cursor-pointer"
          >
            Contact Us
          </Link> */}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 text-white p-5">
          {/* <Link to="feature" className="text-white text-[16px] font-medium">
            Features
          </Link> */}
          <button
            onClick={() => {
              if (window.location.pathname !== "/") {
                window.location.href = "/#feature";
              } else {
                const el = document.getElementById("feature");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="cursor-pointer text-left text-white text-[16px] font-medium w-full"
          >
            Features
          </button>
          <Link to="/blog" className="text-white text-[16px] font-medium">
            Blogs
          </Link>

          <button
            onClick={() => {
              if (window.location.pathname !== "/") {
                window.location.href = "/#contactus";
              } else {
                const el = document.getElementById("contactus");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="text-[#6f3201] bg-[#ffba61] rounded-full px-5 py-2 text-center font-bold text-[14px] w-fit"
          >
            Contact Us
          </button>

          {/* <Link
            to="contact"
            className="text-[#6f3201] bg-[#ffba61] rounded-full px-5 py-2 text-center font-bold text-[14px] w-fit"
          >
            Contact Us
          </Link> */}
        </div>
      )}
    </nav>
  );
}
