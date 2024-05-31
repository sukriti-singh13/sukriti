import React from 'react';
import Image from 'next/image';
import { PiCodeThin } from 'react-icons/pi';

const Index = () => {
  return (
    <div className='banner grid place-content-center  min-h-[8rem] w-full relative'>
      {/* <Image 
        src='/assets/2.png' 
        alt="banner" 
        layout="fill" 
        objectFit="cover" 
        className='w-full h-full'
      /> */}
 <PiCodeThin className='text-3xl text-white' />

    </div>
  );
}

export default Index;
