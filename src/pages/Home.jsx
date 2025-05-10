import React from 'react'
import Banner from '../componenets/home/Banner'
import WhoWeAre from '../componenets/home/WhoWeAre';
import Charge from '../componenets/home/Charge'
import Technologies from '../componenets/home/Technologies'
import Services from '../componenets/home/Services'
import Testimonial from '../componenets/home/Testimonial'
import Team from '../componenets/home/Team'
import Question from '../componenets/home/Question'
import ParallaxBack from '../componenets/home/ParallaxBack'

const Home = () => {
  return (
    <>
      <Banner/>
      <WhoWeAre />
      <Charge />
      <Technologies />
      <Services />
      <ParallaxBack/>
      <Testimonial />
      <Team />
      <Question/>
    </>
  );
}

export default Home
