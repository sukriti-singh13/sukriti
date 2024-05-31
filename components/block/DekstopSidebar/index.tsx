'use client'
import React from 'react';
import Title from '@/components/shared/Title';
import { IoMdHome } from 'react-icons/io';
import { MdWorkOutline } from 'react-icons/md';
import { CiHome } from 'react-icons/ci';
import { RiContactsLine } from 'react-icons/ri';
import { GrProjects } from 'react-icons/gr';
import { GoHome } from 'react-icons/go';
import { Button } from '@/components/ui/button';
import { FiArrowUpRight } from 'react-icons/fi';
import Link from 'next/link';
import { PATH } from '@/app/utils/constants/path';
import { usePathname } from 'next/navigation';
const Index = () => {
  const pathname = usePathname();
  const tabs = [
    {
      label: 'Home',
      icon: <GoHome />,
      path: PATH.HOME,
      activePaths: [PATH.HOME],
    },
    {
      label: 'Experience',
      icon: <MdWorkOutline />,
      path: PATH.EXPERIENCE,
      activePaths: [PATH.EXPERIENCE],
    },
    {
      label: 'Projects',
      icon: <GrProjects />,
      path: PATH.PROJECTS,
      activePaths: [PATH.PROJECTS],
    },
    {
      label: 'Contact',
      icon: <RiContactsLine />,
      path: PATH.CONTACT,
      activePaths: [PATH.CONTACT],
    },
  ];
  const isPathActive = (activePaths: string[]) => {
    return activePaths.find((path) => pathname === path);
  };
  return (
    <div className='p-6 w-[15rem] border border-l h-full flex flex-col justify-between '>
      <div className='flex flex-col  gap-12'>
        <h1 className='text-2xl font-semibold'>
          <span className='text-[#7852EB]'>S</span>ukriti.
        </h1>
        <ul className='grid gap-6'>
          {tabs.map((tab) => (
            <li key={tab.label} className={` text-base ${isPathActive(tab.activePaths)&&'text-[#7852EB]'}`}>
             <Link href={tab.path} className='flex gap-2 items-center'>
             {tab.icon}
              {tab.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Button className='w-full bg-[#7852EB]'>
          <Link
            className=' flex gap-2 items-center'
            href={
              'https://drive.google.com/file/d/1N8JU8i5u0OFY8NU4_QkxdbIthX2wJOx9/view?usp=sharing'
            }
            target='_blank'
          >
            Resume <FiArrowUpRight />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Index;
