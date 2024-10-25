import React from 'react'
import HeroImg from '../../assets/img/bakery.jpg';

const HeroSection = () => {
  return (
    <div
      className="relative flex items-center bg-cover flext-start bg-center text-left h-svh w-full"
      style={{ backgroundImage: `url(${HeroImg})` }}
    ></div>
  );
}

export default HeroSection
