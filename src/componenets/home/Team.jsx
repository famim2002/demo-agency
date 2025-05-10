import React from "react";
import TeamCards from "./TeamCards";

const Team = () => {
  return (
    <section className="px-3 py-24 bg-prmiaryColor">
      <div className="container">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col items-center">
            <h2 className="text-7xl text-baseColor mx-auto font-bold font-headerFont max-w-xl">
              Introducing arolax skilled team!
            </h2>
            <p className="text-[22px]  text-stone-300 font-textFont mx-auto max-w-sm py-5 ">
              Our ability to combine expertise and systems thinking is what
              fuels us as a team.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center pt-5">
            <TeamCards
              image="/team(1).jpg"
              title="PEDRIK VADRA"
              descrip="CEO-HUBCODER"
              className="xl:pt-30"
            />
            <TeamCards
              image="/team(2).jpg"
              title="MAX MILLER"
              descrip="SR .DEVELOPER"
              className="xl:pt-15"
            />
            <TeamCards
              image="/team(3).jpg"
              title="SARAH SAFARI"
              descrip="JUNIOR EXECUTIVE"
              className="xl:pt-30"
            />
            <TeamCards
              image="/team(4).jpg"
              title="EMY WILLS"
              descrip="UI/UX DESIGNER"
              className="xl:pt-15"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
