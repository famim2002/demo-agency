import React from 'react'
import Banner from '../componenets/home/Banner'
import WhoWeAre from '../componenets/home/WhoWeAre';
import Charge from '../componenets/home/Charge'
import Technologies from '../componenets/home/Technologies'
import Services from '../componenets/home/Services'
import Testimonial from '../componenets/home/Testimonial'

const Home = () => {
  return (
    <>
      <Banner/>
      <WhoWeAre />
      <Charge />
      <Technologies />
      <Services />
      <Testimonial/>
    </>
  );
}

export default Home
