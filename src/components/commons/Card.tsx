import React from 'react';

interface CardProps {
  children: React.ReactNode; 
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className='w-11/12 md:w-[80%] xl:w-[75%] mx-auto'>
      {children}
    </div>
  );
}

export default Card;
