import React from 'react';
import Title from '@/components/shared/Title';
import { LogOut } from 'lucide-react';
import Image from 'next/image';
const Index = () => {
  const projects = [
    

    {
      logo: '/assets/project3.svg',
    },
    {
      logo: '/assets/project4.png',
    },
    {
      logo: '/assets/project5.png',
    },
    {
      logo: '/assets/project6.png',
    },
    // {
    //   logo: `/assets/project1.avif`,
    // },
  ];
  return (
    <div className='grid gap-4'>
      <Title title='Recent Work' />
   
        <div className='flex gap-6 overflow-x-scroll'>
        {projects.map((item, index) => (
          <div className='bg-[#9474E3]/10 grid place-content-center px-3' key={item.logo} >
          <Image 
            src={item.logo}
            width={300}
            height={100}
            // layout='fill'
            alt='Project'
            className=' object-contain  rounded-md max-w-[40rem] h-auto '
          />
          </div>
        ))}
        </div>
   
    </div>
  );
};

export default Index;
