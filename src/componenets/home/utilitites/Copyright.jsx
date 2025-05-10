import React from "react";
import { FaRegCopyright } from "react-icons/fa";

const Copyright = () => {
  return (
    <div>
      <div className="flex items-center text-stone-100 font-semibold">
        <FaRegCopyright className="text-8xl" />
        <p className="text-2xl text-stone-300">famim.2002</p>
      </div>
    </div>
  );
};

export default Copyright;
