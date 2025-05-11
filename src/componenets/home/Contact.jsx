import React from "react";

import { Link } from "react-router"




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
            className="text-[40px] px-3 text-white font-headerFont  mx-auto mt-20  font-bold max-w-5xl text-center  tracking-wide leading-15
                     md:mt-30  md:text-[80px] md:leading-25
                     lg:text-[120px] lg:leading-30"
          >
            Let’s start your experience with Arolax
          </h2>
          <Link to="/design" className="text-3xl font-semibold font-textFont  text-stone-100 border-2 rounded-full py-4 px-10 mx-auto my-15 transition-all hover:bg-stone-100 hover:text-black hover:shadow-2xl hover:border-stone-300 hover:shadow-amber-50 ">
            explore more
          </Link>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
