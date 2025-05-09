import React from 'react'

const TechCards = ({ image, title }) => {
  return (
    <div>
      <div className='flex flex-col gap-5 justify-center items-center  w-70 h-70 border rounded-full border-prmiaryColor'>
        <img src={image} alt="icons." className='mx-auto'/>
        <h2 className='text-center text-[28px] font-semibold font-textFont text-prmiaryColor'>{title}</h2>
      </div>
    </div>
  );
};

export default TechCards
