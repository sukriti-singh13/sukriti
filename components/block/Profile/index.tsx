import Image from 'next/image';
import React from 'react';
import Title from '@/components/shared/Title';
import Subtitle from '@/components/shared/Subtitle';
import { Button } from '@/components/ui/button';
import { TbMessageCircle } from 'react-icons/tb';
const Index = ({className}:{
    className?: string
}) => {
  return (
    <div className={`flex justify-between items-center ${className}`}>
      <div className='flex gap-3 items-center'>
        <Image
          src='/profile.png'
          width={100}
          height={100}
          alt='Profile Picture'
          className='rounded-full aspect-square object-cover border bottom-5 border-green-400'
        />
        <div>
          <Title title='Sukriti' />
          <Subtitle subtitle='Frontend Engineer' />
        </div>
      </div>
      <Button className='flex gap-2'><TbMessageCircle />
Message</Button>
    </div>
  );
};

export default Index;
