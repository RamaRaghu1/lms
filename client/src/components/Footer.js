import React from "react";
import {
  FaTwitter,
  FaInstagramSquare,
  FaLinkedin,
  FaFacebookSquare,
} from "react-icons/fa";
import { IoCallSharp, IoMailSharp, IoLocationSharp } from "react-icons/io5";
import image from "../carouselimages/footerLogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" grid md:grid-cols-3 grid-cols-1 gap-3 bg-[#F7F4FD] text-[#0876DB] p-5">
      <div className="p-5 ">
        <img src={image} className="h-24 w-24" />
        <p className="font-paraFont font-medium text-lg py-3 mb-3">
          Kairaa Blockchain Academy is a top-notch online learning center that
          offers a wide range of courses.
        </p>

        <ul className="flex md:text-3xl text-3xl gap-2 ">
          <Link to="https://www.linkedin.com/company/kairaa-blockchain-academy/">
            {" "}
            <li className="hover:text-blue-700">
              <FaLinkedin />
            </li>
          </Link>
          <Link to="https://www.instagram.com/kairaaacademy/">
            <li className="hover:text-blue-700">
              <FaInstagramSquare />
            </li>
          </Link>
          <Link to="https://twitter.com/Kairaa_academy">
            <li className="hover:text-blue-700">
              <FaTwitter />
            </li>
          </Link>
          <Link to="https://www.facebook.com/kairaaacademy">
            <li className="hover:text-blue-700">
              <FaFacebookSquare />
            </li>
          </Link>
        </ul>
      </div>

      <div className="p-5">
        <h4 className="font-headingFont md:text-2xl font-bold p-2">
          Quick links
        </h4>
        <ul className="text-lg font-paraFont p-4  ">
          <Link to="/about-kairaa-blockchain-academy">
            {" "}
            <li className=" py-2">About Us</li>
          </Link>
          <Link to="/resources">
            {" "}
            <li className=" py-2">Blog</li>
          </Link>
          <Link to="/payment-terms-condition">
            <li className=" py-2">Payments Terms & Conditions</li>
          </Link>
        </ul>
      </div>

      <div className="p-5">
        <h4 className="font-headingFont md:text-2xl font-bold p-2 mb-2 ">
          Contact
        </h4>
        <div className="flex items-center gap-2 py-2">
          <IoCallSharp className="md:text-3xl hover:text-blue-800" />
          <p className="font-medium font-paraFont ">
            <a href="tel:+91 7092774077" className="">
              +91 7092774077
            </a>
          </p>
        </div>
        <div className="flex items-center gap-2 py-2">
          <IoMailSharp className="md:text-3xl hover:text-blue-800" />
          <p className=" font-medium font-paraFont ">
            <a href="mailto:support@kairaaacademy.com" className="">
              support@kairaaacademy.com
            </a>
          </p>
        </div>
        <div className="flex items-center gap-2 py-2">
          <IoLocationSharp className="md:text-3xl hover:text-blue-800" />
          <p className="font-medium font-paraFont ">
            131, 2nd floor, DB Road, RS Puram,Coimbatore - 641002
          </p>
        </div>
      </div>

      
    </div>
  );
};

export default Footer;
