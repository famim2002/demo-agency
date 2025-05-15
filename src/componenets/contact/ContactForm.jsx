import React from "react";
import { TfiFacebook } from "react-icons/tfi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router";

const ContactForm = () => {
  return (
    <section className="px-3 py-18">
      <div className="container shadow-2xl">
        <div className="flex justify-between py-3 px-4 ">
          <div className="flex flex-col gap-8">
            <h2 className="text-[80px] font-bold font-headerFont text-prmiaryColor max-w-sm leading-20">
              PLACE YOUR ORDER
            </h2>
            <div className="flex flex-col gap-8">

            </div>
            <div className="grid grid-cols-2 w-fit">
              <Link to="/">
                <TfiFacebook className="inline-block h-15 w-15 text-[25px] p-2 border-radius bg-brandColor m-3 rounded-full cursor-pointer hover:scale-110 hover:text-white hover:bg-blue-700" />
              </Link>
              <Link to="/">
                <BsInstagram className="inline-block h-15 w-15 text-[25px] p-2 border-radius bg-brandColor m-3 rounded-full cursor-pointer hover:scale-110 hover:text-white hover:bg-pink-600" />
              </Link>
              <Link to="/"> 
                <FaDribbble className="inline-block h-15 w-15 text-[25px] p-2 border-radius bg-brandColor m-3 rounded-full cursor-pointer hover:scale-110 hover:text-white hover:bg-red-700" />
              </Link>
              <Link to="/">
                <FaLinkedinIn className="inline-block h-15 w-15 text-[25px] p-2 border-radius bg-brandColor m-3 rounded-full cursor-pointer hover:scale-110 hover:text-white hover:bg-blue-400" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <form className="flex flex-col"></form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
