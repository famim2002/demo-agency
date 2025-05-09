import React from "react";

const ChargeCards = ({image,title,children}) => {
  return (
    <div>
      <div className="flex flex-col gap-10 ">
        <div className="w-fit">
          <img src={image} alt="icon" className="w-[50px]" />
        </div>
        <h3 className="text-2xl text-prmiaryColor font-tagFont max-w-sm">
          {title}
        </h3>
        <p className="text-xl text-prmiaryColor font-tagFont max-w-sm">
          {children}
        </p>
      </div>
    </div>
  );
};

export default ChargeCards;
