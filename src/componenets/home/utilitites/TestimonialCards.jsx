import React from "react";

const TestimonialCards = ({ point, title, icon, image,name,tag ,children }) => {
  
  
  return (
    <div>
      <div className="bg-zinc-50 p-9">
        <div className="flex gap-4 items-center">
          <h3 className="text-5xl text-prmiaryColor font-semibold font-textFont">
            {point}
          </h3>
          <p className="text-[25px] text-amber-400">{icon}</p>
        </div>
        <small className="inline-block text-[18px] text-sceondryColor font-semibold pt-2">
          {title}
        </small>
        <p
          className="pt-15 pb-10 text-[20px] font-textFont text-prmiaryColor max-w-sm
                                  
          "
        >
          {children}
        </p>
      </div>
      <div className="flex gap-5 bg-prmiaryColor p-4">
        <div>
          <img src={image} alt="" className="w-[60px] rounded-full" />
        </div>
        <div>
          <h4 className="text-[21px] text-white font-semibold font-textFont">
            {name}
          </h4>
          <p className="text-[17px] text-stone-400 font-textFont">{tag}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCards;
