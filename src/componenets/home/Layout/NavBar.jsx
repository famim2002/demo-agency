import React from "react";
import { Link } from "react-router";

const NavBar = () => {
  return (
    <>
      <div
        className=" py-10 flex flex-col gap-10 justify-center items-center
                       sm:flex-row"
      >
        <Link
          to="/"
          className="text-[35px] pb-[13px] hover:border-b-[13px] px-2   hover:pb-0 border-brandColor active:bg-brandColor"
        >
          home
        </Link>
        <Link
          to="/about"
          className="text-[35px] pb-[13px] hover:border-b-[13px] px-2   hover:pb-0 border-brandColor active:bg-brandColor"
        >
          about
        </Link>
        <Link
          to="/blog"
          className="text-[35px] pb-[13px] hover:border-b-[13px] px-2   hover:pb-0 border-brandColor active:bg-brandColor"
        >
          blog
        </Link>
        <Link
          to="/design"
          className="text-[35px] pb-[13px] hover:border-b-[13px] px-2   hover:pb-0 border-brandColor active:bg-brandColor"
        >
          design
        </Link>
         <Link
          to="/contact"
          className="text-[35px] pb-[13px] hover:border-b-[13px] px-2   hover:pb-0 border-brandColor active:bg-brandColor"
        >
          contact
        </Link>
        
      </div>
    </>
  );
};

export default NavBar;
