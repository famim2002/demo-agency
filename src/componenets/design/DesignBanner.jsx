import React from 'react'
import { Link } from "react-router";

const DesignBanner = () => {
  return (
    <section className="px-3 py-18">
      <div className="container">
        <div>
          <div
            className="flex flex-col justify-between gap-10
      lg:flex-row"
          >
            <h1
              className="text-[50px] text-prmiaryColor font-bold font-headerFont max-w-2xl leading-20
                    sm:text-[70px]     
                     md:text-[120px] md:leading-30"
            >
              Interaction design
            </h1>
            <div className="flex flex-col gap-6">
              <p
                className="text-[19px] text-sceondryColor font-textFont  w-2xs
          sm:w-lg
          lg:w-2xs"
              >
                We are a full-service digital agency that builds fascinating
                user experiences. our team creates and exceptional.
              </p>
              <div
                className="grid grid-cols-1 gap-4
                          sm:grid-cols-2 
                          lg:grid-cols-1
                          xl:grid-cols-2 xl:gap-15"
              >
                <ul className="flex flex-col gap-1">
                  <p className="text-[22px] text-prmiaryColor font-textFont font-semibold">
                    . Service Tag
                  </p>
                  <li className="text-[18px] text-sceondryColor font-textFont">
                    <Link>+ UX/UI Design</Link>
                  </li>
                  <li className="text-[18px] text-sceondryColor font-textFont">
                    <Link>+ Front-end Development</Link>
                  </li>
                  <li className="text-[18px] text-sceondryColor font-textFont">
                    <Link>+ Copywriting </Link>
                  </li>
                  <li className="text-[18px] text-sceondryColor font-textFont">
                    <Link>+ Shopify Development</Link>
                  </li>
                </ul>
                <ul className="grid grid-cols-1 gap-1">
                  <p className="text-[22px] text-prmiaryColor font-textFont font-semibold pt-5">
                    . Service Tag
                  </p>
                  <li className="text-[18px] text-sceondryColor font-textFont">
                    <Link>+ WordPress</Link>
                  </li>
                  <li className="text-[18px] text-sceondryColor font-textFont">
                    <Link> + Fluter Framework </Link>
                  </li>
                  <li className="text-[18px] text-sceondryColor font-textFont">
                    <Link>+ JavaScript </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="design_parallax mt-20">
            <h2
              className=" text-[50px] text-center  font-bold text-amber-50 leading-40
                        sm:text-[90px]
                        md:text-[120px]
                        lg:text-[160px] 
                        xl:text-[180px]"
            >
              RESPONSIVE DESIGN
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DesignBanner
