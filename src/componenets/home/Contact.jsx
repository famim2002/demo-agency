import React from "react";
import { Link } from "react-router";
import { TbArrowNarrowRightDashed } from "react-icons/tb";
const Contact = () => {
  return (
    <section className="px-3 py-24">
      <div
        className="container contact_back h-[400px]
        md:h-[600px]
          lg:h-[800px]"
      >
        <div className="flex flex-col">
          <h2
            className="text-[50px] px-3 text-white font-headerFont  mx-auto mt-20  font-bold max-w-5xl text-center  tracking-wide leading-15
                     md:mt-30  md:text-[80px] md:leading-25
                     lg:text-[120px] lg:leading-30"
          >
            Let’s start your experience with Arolax
          </h2>
         
        </div>
      </div>
    </section>
  );
};

export default Contact;
