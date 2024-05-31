import React from 'react';
import Card from '@/components/shared/Card';
import { Badge } from '@/components/ui/badge';

const experienceContent = [
  {
    date: 'January 2024 - April 2024',
    title: 'Frontend Engineer - Reachinbox.ai',
    description: [
      `Integral founding technical member in developing the core application ReachInbox, which has successfully achieved profitability in the market`,
      'Engineered Zapmail, a revenue-enhancing platform for purchasing emails and domains, handling the entire frontend architecture',
    ],
    skills: [
      'Next JS',
      'Javascript',
      'Typescript',
      'Jotai',
      'Rest API',
      'Liquid JS',
      'Tailwind CSS',
      'Shadcn',
      'Git',
      'Github',
    ],
  },
  {
    date: 'July 2023 - January 2024',
    title: 'Frontend Developer - Listed Inc',
    description: [
      'Led the launch of "OpenInapp ‐ Conversion Booster," live on the Shopify App Store,used by businesses to increase their conversion rates',
      'Developed Caption Generator (which allows users to generate captions for their social media posts using AI, increasing user engagement for the platform) ',

      'Part of the core frontend team ,responsible for code reviews and mentoring junior developers',
    ],
    skills: [
      'Next JS',
      'Javascript',
      'Jotai',
      'Rest API',
      'Tailwind CSS',
      'Shopify App',
      'Git',
      'Github',
    ],
  },
  {
    date: 'June 2022 - February 2023',
    title: 'Frontend Developer - BrewApps',
    description: [
      'Coded from scratch pixel-perfect interfaces for a recruitment-based product',
      `Ensured timely project delivery by effectively collaborating with team engineers and the
       product manager`,
      'Collaborated with designers , product managers other developers to create user-friendly interfaces',
    ],
    skills: [
      'React Js',
      'Javascript',
      'Rest API',
      'Material UI',
      'SCSS',
      'Git',
      'Github',
    ],
  },
];
const Experience = ({
  date,
  title,
  description,
  skills,
  isOdd,
}: {
  isOdd: boolean;
} & (typeof experienceContent)[0]) => {
  return (
    <div className='flex justify-between w-full '>
      <div
        className={`flex gap-6
        w-1/2
        px-8
        py-6
        relative
        ${isOdd ? 'mr-auto' : 'ml-auto'}
        ${isOdd ? 'border-r' : 'border-l'}
        `}
      >
        <div
          className={`absolute w-6 h-6 bg-primary top-6  aspect-square rounded-full
          ${isOdd ? '-right-3' : '-left-3'}
          `}
        />

          <p className={`text-sm min-w-max text-muted-foreground absolute ${isOdd ? 'left-[calc(100%+32px)]' : 'right-[calc(100%+32px)]'}`}>{date}</p>

        <div className='max-w-md'>
          <h2 className='text-lg text-primary font-medium'>{title}</h2>
          <ul className='pt-2 '>
            {description.map((desc) => (
              <li
                className='text-sm list-disc  mx-3 leading-6 py-[0.4rem]'
                key={desc}
              >
                {desc}
              </li>
            ))}
          </ul>
          <div className='pt-4 flex gap-3 flex-wrap '>
            {skills.map((skill: string) => (
              <Badge
                key={skill}
                className='text-muted-foreground font-medium'
                variant='secondary'
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
const Page = () => {
  return (
    <div className='p-6'>
      <div className='flex flex-col'>
        {experienceContent.map((content, idx) => (
          <Experience key={idx} isOdd={idx % 2 === 0} {...content} />
        ))}
      </div>
    </div>
  );
};

export default Page;
