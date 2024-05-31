import Image from 'next/image';
import React from 'react';
import Title from '@/components/shared/Title';
import Subtitle from '@/components/shared/Subtitle';
import { Button } from '@/components/ui/button';
import { TbMessageCircle } from 'react-icons/tb';
import { IoPeopleOutline } from 'react-icons/io5';
const Index = ({ className }: { className?: string }) => {
  return (
    <div
      className={`flex justify-between items-center -mt-[3rem] ${className}`}
    >
      <div className='flex gap-3 items-center'>
        <Image
          src='/profile.png'
          width={150}
          height={100}
          alt='Profile Picture'
          className='rounded-full aspect-square object-cover border bottom-5 border-primary'
        />
        <div>
          <Title title='Sukriti Singh' />
          <Subtitle subtitle='Frontend Engineer' />
        </div>
      </div>
      <div className='flex gap-2'>
     
      <Button className='flex gap-2 border-primary ' variant='outline'>
      <IoPeopleOutline />

        Schedule a meeting
      </Button>
      <Button className='flex gap-2 bg-primary'>
        <TbMessageCircle />
        Message
      </Button>
      </div>
    </div>
  );
};

export default Index;
