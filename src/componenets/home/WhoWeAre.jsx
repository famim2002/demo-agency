import React from "react";
import Button from "./utilitites/Button"

const WhoWeAre = () => {
  return (
    <>
      <section className="px-3 pt-20 py-50 overflow-hidden">
        <div className="container">
          <div
            className="flex flex-col  justify-between lg:gap-7
        lg:flex-row"
          >
            <div className="flex flex-col gap-10">
              <h2
                className=" text-4xl font-bold font-headerFont max-w-4xl  text-prmiaryColor
            md:text-7xl"
              >
                <span
                  className="inline-block font-tagFont text-2xl font-medium w-fit pr-10 pb-5  relative after
              after:absolute  after:w-40  after:left-0 after:h-1 after:top-8 after:bg-brandColor active:bg-lightBrandColor"
                >
                  01 who we are
                </span>
                HAVE A BRILLIANT IDEA BOOST THE
                <span className=" inline-block text-sceondryColor">
                  GROWTH DEVELOPMENT
                </span>
                AGENCY YOUR BRANDING !
              </h2>
              <div className="flex flex-col gap-16  ">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <img
                      className="w-15 rounded-[100px] border-3 border-lightBrandColor "
                      src="/client (1).jpg"
                      alt=""
                    />
                    <img
                      className="w-15 rounded-[100px] border-3 border-lightBrandColor "
                      src="/client (2).jpg"
                      alt=""
                    />
                    <img
                      className="w-15 rounded-[100px] border-3 border-lightBrandColor "
                      src="/client (3).jpg"
                      alt=""
                    />
                  </div>
                  <small className="text-xl text-semibold text-sceondryColor ">
                    <span className="text-xl text-prmiaryColor font-semibold">
                      32+
                    </span>
                    happy clients
                  </small>
                </div>
                <Button />
              </div>
            </div>
            <div className="relative max-w-sm  m-auto ">
              <img
                className=" rotate-90
          lg:rounded-bl-[40%] lg:rotate-0"
                src="/idea.jpg"
                alt=""
              />
              <div
                className="absolute px-10 mx-auto py-15 bg-stone-100 translate-y-[-250px] 
            sm:translate-x-[90px]
              lg:rounded-bl-[40%]"
              >
                <h3 className="font-semibold text-center text-sceondryColor max-w-50">
                  Make your business prosper with our great team of experts.
                  We’ll make your.
                </h3>
                <p className="py-6 text-9xl  text-center text-prmiaryColor font-headerFont font-semibold  ">
                  1.8x
                </p>
                <p className="font-semibold  text-center text-prmiaryColor">
                  FASTER SERVICE
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoWeAre;
