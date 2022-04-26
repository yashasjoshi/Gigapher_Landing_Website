import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import HeroSplit from '../components/sections/HeroSplit';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
//import classNames from 'classnames';

const Home = () => {

  return (
    <>
      <HeroSplit className="illustration-top-right-waves" />
      <FeaturesTiles  className="illustration-sun"/>
      <Testimonial topDivider className="illustration-smile" />
      <FeaturesSplit invertMobile topDivider imageFill />
      <Cta split />
    </>
  );
}

export default Home;