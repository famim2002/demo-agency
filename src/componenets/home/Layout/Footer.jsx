import React from "react";
import { Link } from "react-router";
import { TfiFacebook } from "react-icons/tfi";
import { FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-3 bg-prmiaryColor py-24">
      <div className="container">
        <div className="flex flex-col gap-6">
          <h2
            className="text-[70px] font-bold font-headerFont text-baseColor max-w-2xl leading-20 text-center mx-auto
            
            md:text-[90px] md:leading-25 
            lg:text-[120px] lg:leading-30"
          >
            LET'S TALK WITH US
          </h2>
          <div className="w-fit overflow-hidden mx-auto">
            <h3
              className="relative after after:absolute after:top-12 after:left-0 after:w-full after after:h-[3px] 
          text-[35px] font-semibold font-headerFont text-baseColor after:bg-brandColor after:transition-all hover:after:w-0"
            >
              hello69@example.com
            </h3>
          </div>
          <div
            className="flex flex-col items-center justify-between pt-20 gap-10
           lg:flex-row"
          >
            <h4 className="text-[19px] text-white font-textFont ">
              © 2024-25 CROWDYTHEME AGENCY
            </h4>
            <ul
              className="flex flex-col items-center justify-between gap-9
            md:flex-row"
            >
              <li className="text-[19px] text-white font-textFont hover:scale-110  hover:border-b-2 border-brandColor  ">
                <Link>AGENCY</Link>
              </li>
              <li className="text-[19px] text-white font-textFont hover:scale-110  hover:border-b-2 border-brandColor  ">
                <Link>CAREER</Link>
              </li>
              <li className="text-[19px] text-white font-textFont hover:scale-110  hover:border-b-2 border-brandColor  ">
                <Link>PRIVACY</Link>
              </li>
              <li className="text-[19px] text-white font-textFont hover:scale-110  hover:border-b-2 border-brandColor  ">
                <Link>TERMS & CONDITIONS</Link>
              </li>
            </ul>

            <ul
              className="flex flex-col justify-between gap-10
            sm:flex-row md:gap-6"
            >
              <li className="text-[22px] text-white font-textFont hover:scale-150 hover:text-brandColor">
                <Link>
                  <TfiFacebook />
                </Link>
              </li>
              <li className="text-[22px] text-white font-textFont hover:scale-150 hover:text-brandColor">
                <Link>
                  <FaTwitter />
                </Link>
              </li>
              <li className="text-[22px] text-white font-textFont hover:scale-150 hover:text-brandColor">
                <Link>
                  <GrInstagram />
                </Link>
              </li>
              <li className="text-[22px] text-white font-textFont hover:scale-150 hover:text-brandColor">
                <Link>
                  <FaLinkedin />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
