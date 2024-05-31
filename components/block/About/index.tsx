import React from 'react';
import Title from '@/components/shared/Title';
import Subtitle from '@/components/shared/Subtitle';
import Social from '@/components/shared/Socials';
const Index = () => {
  return (
    <div className='flex gap-10'>
      <div className='w-[70%] grid gap-3'>
        <Title title='About' />
        <Subtitle subtitle='I am Sukritee Singh, a Frontend Engineer with 2 years of experience in software product development. I am committed to integrity , honesty and continuous improvement, consistently mastering new technologies to deliver high-quality solutions. My professional journey includes significant contributions to successful projects and products.' />
        <p className='text-sm '>I have strong skills in frontend technologies, including <span className='font-medium'>Next.js, React.js, TypeScript, JavaScript, Jotai, Redux-Toolkit, CSS, SCSS, TailwindCSS, Shadcn, and MUI. Additionally, I am proficient with tools and platforms such as Figma, Git, GitHub, RestAPI, and Postman.</span></p>
        {/* <Subtitle subtitle='Some notable projects include'/> */}
        {/* <ul>
        <li>1. Developed the ReachInbox cold email outreach platform</li>
             <p>${''} Designed seamless UIs for complex product components</p>
             <p>-- Enhanced the bundle size to improve website performance</p>
        <li>2. Rolled out a Progressive Web App (PWA) feature and Truecaller integration for OpenInApp, serving over 1 million users</li>
        <li>3. Implemented the OpeninApp Shopify App</li>
     </ul> */}
        <Subtitle subtitle='I am seeking opportunities to work in environments that provide growth, and have a positive culture. I believe in contributing to make a significant impact and create value for the company and its users' />
      </div>
      <div className='flex flex-1 flex-wrap'>
        <Social/>
      </div>
    </div>
  );
};

export default Index;
