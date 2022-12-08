import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../assets/about.png';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#E94A66]'>
            About
          </p>
          <h2 className='py-4'>Who Are Anoderb?</h2>
          <p className='py-2 text-gray-600'>
          Anoderb is a crypto community based in Indonesia built on the desire to make it easier to learn together about the ever-growing world of cryptocurrency and also for a means of conveying information about cryptocurrency.
           We focus on nodes oprators and become beta testers in every new project from various existing ecosystems.
            experienced more than 5 years in the world of cryptocurrency then made us feel challenged to build this community.
           Anoderb was founded in 2022 by ambitious young people who are ready to provide the best service and support for the cryptocurrency world.
          </p>
          <p className='py-2 text-gray-600'>
          We always strive to provide the best and fastest information about cryptocurrency both regarding Airdrop and News Articles concerning the world of Cryptocurrency. 
          Regarding Airdrop information, of course it is in accordance with our commitment so that everyone can feel that crypto is an extraordinary thing,crypto is magic!!! only with at home they can make money by doing Airdrop which of course it also helps developers in developing their projects which directly impacts the world of cryptocurrency.
          </p>
          <Link href='t.me/anoderb' legacyBehavior>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              join here for faster information
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
