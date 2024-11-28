import React from 'react';
import Display from '../../assets/img/display.jpg';

const Card = () => {
  return (
    <div className="flex flex-col p-8">
      <img className='max-h-[260px] max-w-[240px] bg-cover bg-center border rounded' src={Display} alt="Display" />
    </div>
  );
}

export default Card
