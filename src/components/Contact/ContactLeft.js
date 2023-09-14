import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactlogo } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full pt-20 pb-20 bg-[gradient-to-r from-[#1e2024] to-[#23272b]] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center text-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2 "
        src={contactlogo}
        alt="contactImg"
      />
      <h2 className="align-center text-[#27b5b8]">Contact me</h2>
    </div>
  );
};

export default ContactLeft;
