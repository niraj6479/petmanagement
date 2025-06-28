import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import logo from "../assets/icon.svg"; // update your path if needed
import DownloadButtons from "./DownloadButtons";

const Footer = () => {
   const navigate = useNavigate();
  return (
    <footer className="bg-[#25282c] text-white py-10 px-4 mt-10 md:mt-10">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        {/* Logo */}
        <div>
          <img
            src={logo}
            alt="Doommi Logo"
            className="mx-auto h-10 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm sm:text-base text-gray-300">
          <a href="/feature">Features</a>
          <a href="/blog">Blogs</a>
          <a href="#">Contact Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">FAQ</a>
        </div>

        {/* App Download Buttons */}
        {/* <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="border border-[#acaaad] flex items-center gap-2 px-4 py-1 rounded-full w-[230px] bg-white">
            <FaApple className="w-6 h-6 text-black" />
            <div className="text-left leading-tight">
              <p className="text-black font-bold text-[9px]">
                Download on the Store
              </p>
              <p className="text-black font-semibold text-lg">App Store</p>
            </div>
          </button>

          <button className="border border-[#acaaad] flex items-center gap-2 px-4 py-1 rounded-full w-[230px] bg-white">
            <IoLogoGooglePlaystore className="w-6 h-6 text-black" />
            <div className="text-left leading-tight">
              <p className="text-black font-bold text-[9px]">GET IT ON</p>
              <p className="text-black font-semibold text-lg">Google Play</p>
            </div>
          </button>
        </div> */}

        <DownloadButtons />

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-xl text-white mt-4">
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedinIn />
          <FaXTwitter />
          <FaYoutube />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
