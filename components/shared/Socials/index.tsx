import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

const Index = () => {
  const socials = [
    {
      name: 'Location',
      content: 'Bengaluru, India',
    },
    {
      name: 'Phone',
      content: '8999938204',
    },
    {
      name: 'Email',
      content: 'sukriti.singh899@gmail.com',
    },
    {

    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/sukritee-singh/',
    },
    {
      name: 'Github',
      link: 'https://github.com/sukriti-singh13',
    },
   
  ];
  return (
    <div className='grid grid-cols-2 w-full'>
      {socials.map((social) => (
        <div key={social.name}>
          <h1 className='text-sm text-[#667085]'>{social.content && social.name}</h1>
          {social.content && <p className='text-base font-medium text-[#344054]'>{social.content}</p>}
          {social.link && <a  className="text-[#7852EB] flex" href={social.link} target='_blank'>{social.name }<FiArrowUpRight /></a>}
        </div>
      ))}
    </div>
  );
};

export default Index;
