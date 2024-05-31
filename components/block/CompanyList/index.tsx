import React from 'react';
import Card from '../../shared/Card';
import Image from 'next/image';

const Index = () => {
  const list = [
    {
      logo:'/assets/reachinbox.png',
      name: 'Reachinbox',
      role: 'Frontend Engineer',
      year: 'Jan 2024 - April 2024',
    },
    {
      logo:'/assets/listed.png',
      name: 'Listed Inc',
      role: 'Frontend Developer',
      year: 'Jul 2023 - Jan-2024',
    },
    {
      logo:'/assets/brewapps.png',
      name: 'BrewApps LLC',
      role: 'Frontend Developer',
      year: 'June 2022 - Feb 2023',
    },
  ];
  return (
    <div className='flex gap-6'>
      {list.map((item, index) => (
        <Card key={item.name} className='grid gap-4'>
          <div className='flex gap-4 '>
            <Image src={item.logo} width={36} height={30} alt='Company Logo' className='object-cover border rounded-sm' />
            <div>
              <h3 className='text-xs text-[#667085]'>{item.name}</h3>
              <p className='text-sm text-[#344054]'>{item.role}</p>
            </div>
          </div>
          <p className='text-xs text-[#344054]'>{item.year}</p>
        </Card>
      ))}
    </div>
  );
};

export default Index;
