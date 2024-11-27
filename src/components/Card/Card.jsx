import React from 'react';
import Display from '../../assets/img/display.jpg';

const Card = () => {
  return (
    <div className='flex items-center flex-col'>
        <img src={Display} height={"320px"} width={"420px"} alt="Display" />
    </div>
  )
}

export default Card
