import React from "react";
import { Link } from "react-router";

const ServiceCards = ({ col, title, descrip, children }) => {
  return (
    <Link to="/">
      <div className="flex flex-col justify-between  py-5 gap-7  border-y-1 border-stone-300
      sm:flex-row sm:gap-5">
        <h3 className="text-4xl text-prmiaryColor font-bold font-headerFont ">{col}</h3>
        <h4 className="text-4xl text-prmiaryColor font-bold font-headerFont ">{title}</h4>
        <div className="flex flex-col gap-3">
          <h5 className="text-[18px] text-sceondryColor max-w-lg">{descrip}</h5>
          <div>{children}</div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCards;

