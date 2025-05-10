import React from "react";
import ServiceCards from "./utilitites/ServiceCards";


const Services = () => {
  return (
    <section className="px-3 py-24">
      <div className="container">
        <div className="flex flex-col">
          <div className="mx-auto pt-10 pb-20">
            <h2
              className="text-[50px] font-bold font-headerFont text-prmiaryColor mx-auto max-w-2xl leading-15
              md:leading-20 md:text-[80px] "
            >
              WE <span className="text-sceondryColor">PROVIDE</span> PREMIUM
              WEB SERVICES
            </h2>
            <p className="text-[22px] text-sceondryColor font-textFont ml-auto max-w-md py-5 ">
              Our ability to combine expertise and systems thinking is what
              fuels us as a team.
            </p>
          </div>
          <div className="flex flex-col gap-0.5">
            
            <ServiceCards
              col=".01"
              title="PROJECT MANAGEMENT"
              descrip="Creative Design team on demand that can design, build, ship and scale your real has development agency."
            >
              <ul>
                <li>
                  <p to="/" className="text-[18px] font-semibold text-prmiaryColor ">+ Mobile & Web Design</p>
                </li>
                <li>
                  <p to="/" className="text-[18px] font-semibold text-prmiaryColor ">+ Interation Design</p>
                </li>
                <li>
                  <p to="/" className="text-[18px] font-semibold text-prmiaryColor ">+ UX Research & Plan</p>
                </li>
              </ul>
            </ServiceCards>

          <ServiceCards
              col=".02"
              title="PRODUCT MANAGEMENT"
              descrip="Creative Design team on demand that can design, build, ship and scale your real has development agency."
            >
              <ul>
                <li>
                  <p className="text-[18px] font-semibold text-prmiaryColor ">+ Mobile & Web Design</p>
                </li>
                <li>
                  <p to="/" className="text-[18px] font-semibold text-prmiaryColor ">+ Interation Design</p>
                </li>
                <li>
                  <p to="/" className="text-[18px] font-semibold text-prmiaryColor ">+ UX Research & Plan</p>
                </li>
              </ul>
            </ServiceCards>

          <ServiceCards
              col=".03"
              title="WEB DESIGN"
              descrip="Creative Design team on demand that can design, build, ship and scale your real has development agency."
            >
              <ul>
                <li>
                  <p to="/" className="text-[18px] font-semibold text-prmiaryColor ">+ Mobile & Web Design</p>
                </li>
                <li>
                  <p to="/" className="text-[18px] font-semibold text-prmiaryColor ">+ Interation Design</p>
                </li>
                <li>
                  <p to="/" className="text-[18px] font-semibold text-prmiaryColor ">+ UX Research & Plan</p>
                </li>
              </ul>
            </ServiceCards>

          <ServiceCards
              col=".04"
              title="BACKEND DEVELOPMENT"
              descrip="Creative Design team on demand that can design, build, ship and scale your real has development agency."
            >
              <ul>
                <li>
                  <p to="/" className="text-[18px] font-semibold text-prmiaryColor ">+ Mobile & Web Design</p>
                </li>
                <li>
                  <p to="/" className="text-[18px] font-semibold text-prmiaryColor ">+ Interation Design</p>
                </li>
                <li>
                  <p to="/" className="text-[18px] font-semibold text-prmiaryColor ">+ UX Research & Plan</p>
                </li>
              </ul>
            </ServiceCards>

        

          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;