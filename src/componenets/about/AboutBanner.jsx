import React from "react";

const AboutBanner = () => {
  return (
    <section className="py-18">
      <div className="grid grid-cols-2 gap-3 ">
        <div className="about_parallax1 h-dvh "></div>
        <div className="flex flex-col gap-2.5">
          <div className="about_parallax2 "></div>
          <div className="about_parallax3 "></div>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
