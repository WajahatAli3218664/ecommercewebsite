import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const HeaderTop = () => {
  return (
    <div className="border-b border-gray-200 hidden sm:block">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-1">
            <div className="header_top_icon_wrapper">
              <FaFacebook />
            </div>
            <div className="header_top_icon_wrapper">
              <FaLinkedin />
            </div>
            <div className="header_top_icon_wrapper">
              <FaInstagram />
            </div>
            <div className="header_top_icon_wrapper">
              <FaTwitter />
            </div>
          </div>

          <div className="flex-grow text-center text-gray-500 text-[12px]">
            <b>FREE SHIPPING</b> THIS WEEK ORDER OVER - 55
          </div>

          <div className="flex gap-4">
            <select
              className="text-gray-500 text-[12px] w-[70px]"
              name="currency"
              id="currency"
            >
              <option value="USD $">USD $ </option>
              <option value="EUR €"> EUR € </option>
              <option value="INR"> INR</option>
            </select>

            <select
              className="text-gray-500 text-[12px] w-[80px]"
              name="language"
              id="language"
            >
              <option value="English">English</option>
              <option value="French"> French</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;