import React from "react";
import ChargeCards from "./utilitites/ChargeCards";

const Charge = () => {
  return (
    <section className="px-3 py-20 overflow-hidden bg-brandColor ">
      <div className="container">
        <div className="flex flex-col gap-y-32">
          <div className="">
            <h2
              className=" text-[50px]  text-primary font-extrabold text-prmiaryColor font-headerFont max-w-2xl  leading-16
                              md:text-[75px] md:text-center md:mx-auto md:leading-20
                              lg:text-left"
            >
              TAKE CHARGE STEERING YOUR PRODUCT
            </h2>
          </div>
          <div
            className="grid justify-between gap-15
          md:grid-cols-2 md:justify-items-center 
          lg:grid-cols-3 lg:gap-5"
          >
            <ChargeCards image="/icon-1.jpg " title="Dedicated Team" >
              Find the best fit engineers led by senior, seasoned, and skilled
              our tech- lead.
            </ChargeCards>
            <ChargeCards image="/icon-2.jpg" title="Product Team" >
              Get top-notch service from an experienced Product Designer Manager
              team.
            </ChargeCards>
            <ChargeCards
              image="/icon-3.jpg"
              title="End-to-End Team"
              
            >
              Hire an elite squad of leading have professionals to turn idea
              into an ready-to-market product
            </ChargeCards>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Charge;
