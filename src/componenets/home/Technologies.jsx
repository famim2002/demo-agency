import React from 'react'
import TechCards from './utilitites/TechCards'

const Technologies = () => {
  return (
    <section className="px-3 py-20">
      <div className="container">
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="text-[24px] text-sceondryColor font-textFont font-semibold max-w-xl mx-auto">
              Our Arolax Technology Expertise includes
            </h3>
          </div>
          <div
            className="grid grid-cols-1 gap-5 place-items-center
                       md:grid-cols-2
                       lg:grid-cols-3
                       xl:grid-cols-5"
          >
            <TechCards
              className="mx-auto"
              image="/tech-logo1.webp"
              title="wordpress"
            />
            <TechCards
              className="mx-auto"
              image="/tech-logo2.webp"
              title="react.js"
            />
            <TechCards
              className="mx-auto"
              image="/tech-logo3.webp"
              title="node.js"
            />
            <TechCards
              className="mx-auto"
              image="/tech-logo4.webp"
              title="flutter"
            />
            <TechCards
              className="mx-auto"
              image="/tech-logo5.webp"
              title="redux"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technologies
