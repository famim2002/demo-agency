import React from "react";
import { Link } from "react-router"
import { TbArrowNarrowRightDashed } from "react-icons/tb";
import { BsArrowDown } from "react-icons/bs";
import Copyright from "./copyright"



const Banner = () => {
  return (
    <section className="px-4 py-30">
      <div className="container">
        <div className="flex flex-col gap-5 lg:flex-row">
          <div className=" text-center sm:text-left">
            <h1
              className=" text-[70px] font-bold font-headerFont max-w-4xl leading-20 tracking-tighter  text-prmiaryColor
            sm:text-[80px] sm:leading-25
            md:text-[100px] 
            lg:text-[125px] lg:leading-30
            xl:text-[145px] xl:leading-35
            2xl:text-[145px]"
            >
              WE ARE SKILLED IN <br />
              <span className=" inline-block w-2xs text-6xl font-bold text-sceondryColor ">
                WEB DESIGN
              </span>
              AND
              <span
                className="relative after text-left inline-block text-4xl font-bold text-sceondryColor
              after:absolute after:w-full after:left-0 after:h-1 after:top-10 after:bg-brandColor "
              >
                ....DEVELOPMENT
              </span>
            </h1>

            <div className="flex">
              <BsArrowDown className="hidden text-7xl mt-20 py-3  w-fit  border-2 rounded-4xl  md:flex border-lightBrandColor text-brandColor" />

              <p className="text-xl text-center max-w-md text-sceondryColor mx-auto pt-15">
                We are a full-service digital agency that builds fascinating
                user experiences. our team creates and exceptional UI design and
                functionality.
              </p>
            </div>
            <div className="text-center pt-10">
              <Link
                to="/"
                className="flex gap-5 relative after p-2 w-fit text-xl text-center font-semibold text-prmiaryColor
              after:absolute after:transition-all after:w-0 hover:after:w-full after:left-0 after:h-1 after:top-10 after:bg-brandColor active:bg-lightBrandColor"
              >
                GET STARTED NOW..
                <TbArrowNarrowRightDashed className="inline-block text-2xl scale-150" />
              </Link>
            </div>
            <Copyright />
          </div>

          <div
            className="relative flex flex-col mx-auto  pt-14
            lg:pt-0
            lg:flex-row "
          >
            <div>
              <img className=" w-[350px]" src="/banner_1.jpg" alt="" />
            </div>
            <div className="absolute w-full">
              <img
                className=" absolute  translate-y-70  border-8 border-white w-[320px]
               sm:translate-x-40 sm:translate-y-50 
              md:translate-x-40 md:translate-y-90
              lg:translate-x-10 lg:translate-y-90
              xl:translate-x-10 xl:translate-y-90
              2xl:translate-x-40 2xl:translate-y-50
              "
                src="/banner_2.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
