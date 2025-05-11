import React from "react";
import TestimonialCards from "./utilitites/TestimonialCards";
import { FaStar } from "react-icons/fa6";
import { IoIosQuote } from "react-icons/io";
import { Link } from "react-router";

<IoIosQuote />;

const Testimonial = () => {
  return (
    <section className="px-3 py-24">
      <div className="container">
        <div
          className="flex flex-col gap-10 justify-between
        lg:flex-row"
        >
          <div className="flex flex-col gap-10">
            <h2
              className="text-4xl font-extrabold font-headerFont text-prmiaryColor max-w-md
                       sm:text-5xl
                       md:text-7xl "
            >
              TRUSTED CLIENTS TESTIMONIALS
            </h2>
            <p
              className="text-[16px] text-sceondryColor max-w-sm
                                    md:text-[20px]"
            >
              Consumers today rely heavily on digital means to research
              products. We research a brand of bldend
            </p>
            <Link
              to="/design"
              className="text-3xl font-semibold font-textFont  text-prmiaryColor border-3 border-baseColor outline-2 rounded-full py-4 px-10 w-fit my-5 transition-all hover:bg-prmiaryColor hover:text-stone-200 hover:shadow-2xl hover:outline-brandColor hover:border-brandColor hover:shadow-black
              mx-auto sm:m-0"
                           >
              explore more
            </Link>
          </div>
          <div
            className="grid grid-cols-1 gap-5 
                               xl:grid-cols-2 "
          >
            <TestimonialCards
              icon={<FaStar />}
              point="4.9"
              title="(out of 5 star)"
              image="/client (1).jpg"
              name="johnny sins"
              tag="Mid-Level Developer"
            >
              We full service digital agency that build’s fascinating users
              experiences...
            </TestimonialCards>
            <TestimonialCards
              icon={<FaStar />}
              point="4.9"
              title="(out of 5 star)"
              image="/testi1.jpg"
              name="dani daniels"
              tag="Mid-Level Developer"
            >
              We full service digital agency that build’s fascinating users
              experiences...
            </TestimonialCards>
            <TestimonialCards
              icon={<FaStar />}
              point="4.9"
              title="(out of 5 star)"
              image="/testi2.jpg"
              name="mia khalifa"
              tag="Mid-Level Developer"
            >
              We full service digital agency that build’s fascinating users
              experiences...
            </TestimonialCards>
            <TestimonialCards
              icon={<FaStar />}
              point="4.9"
              title="(out of 5 star)"
              image="/testi3.jpg"
              name="james deen"
              tag="Mid-Level Developer"
            >
              We full service digital agency that build’s fascinating users
              experiences...
            </TestimonialCards>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
