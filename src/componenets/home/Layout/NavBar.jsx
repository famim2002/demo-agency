import React from 'react'
import { Link } from 'react-router'

const NavBar = () => {
  return (
    <>
      <div className=" py-10 flex gap-5 justify-center">
        <Link to="/" className="text-[35px] ">
          home
        </Link>
        <Link to="/about" className="text-[35px] ">
          about
        </Link>
      </div>
    </>
  );
}

export default NavBar
