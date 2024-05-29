import React from 'react';
import Title from '@/components/shared/Title';
import { IoMdHome } from 'react-icons/io';
import { MdWorkOutline } from 'react-icons/md';
import { CiHome } from 'react-icons/ci';
import { RiContactsLine } from 'react-icons/ri';
import { GrProjects } from 'react-icons/gr';
import { GoHome } from 'react-icons/go';
const Index = () => {
  return (
    <div className='p-6 border border-l h-full flex flex-col gap-8'>
      <h1 className='text-2xl font-semibold'>Sukriti.</h1>
      <ul className='grid gap-6'>
        <li className='flex gap-2 items-center text-lg'>
          <GoHome />
          Home
        </li>
        <li className='flex gap-2 items-center text-lg'>
          <MdWorkOutline />
          Experience
        </li>
        <li className='flex gap-2 items-center text-lg'>
          <GrProjects />
          Projects
        </li>
        <li className='flex gap-2 items-center text-lg'>
          <RiContactsLine />
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Index;
