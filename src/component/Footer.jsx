import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
  FaApple,
} from "react-icons/fa6";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/doomyBrown.png";
import quoteIcon from "../assets/musicIcon.png";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gradient-to-b from-white via-[#FFF6EA] to-[#F6D9B5] py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT SECTION */}
        <div className="space-y-6 text-center md:text-left">
          {/* Logo */}
          <img
            src={logo}
            alt="Doommi"
            className="h-10 mx-auto md:mx-0 cursor-pointer"
            onClick={() => navigate("/")}
          />

          {/* Navigation */}
            <div className="flex flex-col gap-3 text-sm font-medium text-[#000] md:flex-row md:gap-6 text-left">

            <button className="text-left"
              onClick={() => {
                if (window.location.pathname !== "/") {
                  window.location.href = "/#feature";
                } else {
                  document.getElementById("feature")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }
              }}
            >
              Features
            </button>

            <Link to="/blog">Blogs</Link>

            <button className="text-left"
              onClick={() => {
                if (window.location.pathname !== "/") {
                  window.location.href = "/#contactus";
                } else {
                  document.getElementById("contactus")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }
              }}
            >
              Contact Us
            </button>

            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
          </div>

          {/* App Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-3">
            <button className="flex items-center gap-3 px-4 py-2 bg-white border rounded-full shadow-sm w-[210px]">
              <FaApple className="text-xl" />
              <div className="text-left leading-tight">
                <p className="text-[10px] font-semibold">Download on the</p>
                <p className="text-sm font-bold">App Store</p>
              </div>
            </button>

            <button className="flex items-center gap-3 px-4 py-2 bg-white border rounded-full shadow-sm w-[210px]">
              <IoLogoGooglePlaystore className="text-xl" />
              <div className="text-left leading-tight">
                <p className="text-[10px] font-semibold">GET IT ON</p>
                <p className="text-sm font-bold">Google Play</p>
              </div>
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-5 text-lg text-[#4A4A4A]">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <FaXTwitter />
            <FaYoutube />
          </div>
        </div>

        {/* RIGHT SECTION */}
 <div className="flex justify-center md:justify-end mt-8 md:mt-0">
  <div className="relative max-w-md w-full px-4">

    {/* Quote Icon */}
    <img
      src={quoteIcon}
      alt="Music Icon"
      className="
        absolute
        top-0
        left-[60px]
        w-10
        sm:w-12
        md:w-20
        z-10
        opacity-30
        block
      "
    />

    {/* Text */}
    <p className="relative z-20 text-center md:text-right text-[22px] sm:text-[26px] md:text-[40px] font-bold leading-tight text-[#FFB266] pt-6">
      Pets are pure joy <br />
      wrapped in fluffy <br />
      love!
    </p>

  </div>
</div>


      </div>
    </footer>
  );
};

export default Footer;
