import React from 'react'
import { Link } from 'react-router'

const NavBar = () => {
  return (
    <>
      <div className=" py-10 flex gap-10 justify-center">
        <Link to="/" className="text-[35px] pb-[3px] hover:border-b-[3px] hover:pb-0 border-stone-400">
          home
        </Link>
        <Link to="/about" className="text-[35px] pb-[3px] hover:border-b-[3px] hover:pb-0 border-stone-400">
          about
        </Link>
        <Link to="/blog" className="text-[35px] pb-[3px] hover:border-b-[3px] hover:pb-0 border-stone-400">
          blog

        </Link>
      </div>
    </>
  );
}

export default NavBar
