import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-28">
      <div className="grid lg:grid-cols-2 ">
        <div className="bg-[#1F2937] w-full  text-white h-[400px]  ">
          <div className=" w-1/2 mx-auto lg:mr-0 lg:ml-auto mt-20">
            <h1 className="text-3xl lg:text-4xl font-bold">CONTACT US</h1>
            <div className="mt-8 space-y-4">
              <p>123 ABS Street, Uni 21, Bangladesh</p>
              <p>+88 123456789</p>
              <p>Mon - Fri: 08:00 - 22:00</p>
              <p>Sat - Sun: 10:00 - 23:00</p>
            </div>
          </div>
        </div>
        <div className="bg-[#111827] w-full  text-white h-[400px] ">
          <div className="space-y-8 w-1/2 mx-auto mt-20">
            <h2 className="text-3xl lg:text-4xl font-bold">Follow US</h2>
            <h2 className="">Join us on social media</h2>
            <div className="flex items-center gap-4">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>
        </div>
      </div>
      <footer className="footer footer-center p-4 bg-black bg-opacity-90 text-white font-semibold">
        <div>
          <p>Copyright © {new Date().getFullYear()} CulinaryCloud. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
