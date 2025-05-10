import React from "react";
import { Link } from "react-router";

const TeamCards = ({ image, title, descrip, className }) => {
  return (
    <Link to="/" className={`${className}`}>
      <div className="flex flex-col gap-4">
        <div className="overflow-hidden">
          <img src={image} alt="developer" className=" w-[300px] transition-all hover:scale-125" />
        </div>
        <div className="pt-2 ">
          <h3 className="text-[23px] text-baseColor font-textFont font-semibold ">
            {title}
          </h3>
          <p className="text-[15px] text-baseColor font-textFont pt-1">
            {descrip}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default TeamCards;
