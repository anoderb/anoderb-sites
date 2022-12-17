import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#E94A66]'>
          Testnet
        </p>
        <h2 className='py-4'>Active</h2>
        <div className='grid md:grid-cols-2 gap-8'>
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 dark:shadow-black rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
          <Image className='rounded-xl group-hover:opacity-10' src={'/assets/projects/Okp.png'} width='1000' height='500' alt='/' /> 
          <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <h3 className='text-2xl text-white tracking-wider text-center'>OKP4</h3>
          <p className='pb-4 pt-2 text-white text-center'>Nodes Testnet</p>
          <Link href='/Okp4' legacyBehavior>
              <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
          </Link>
        </div>
        </div>
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 dark:shadow-black rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
          <Image className='rounded-xl group-hover:opacity-10' src={'/assets/projects/Sui.png'} width='1000' height='500' alt='/' /> 
          <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <h3 className='text-2xl text-white tracking-wider text-center'>SUI</h3>
          <p className='pb-4 pt-2 text-white text-center'>Nodes Testnet</p>
          <Link href='/Sui' legacyBehavior>
              <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
          </Link>
        </div>
        </div>
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 dark:shadow-black rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
          <Image className='rounded-xl group-hover:opacity-10' src={'/assets/projects/Masa.png'} width='600' height='500' alt='/' /> 
          <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <h3 className='text-2xl text-white tracking-wider text-center'>Masa</h3>
          <p className='pb-4 pt-2 text-white text-center'>Nodes Testnet</p>
          <Link href='/Masa' legacyBehavior>
              <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
          </Link>
        </div>
        </div>
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 dark:shadow-black rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
          <Image className='rounded-xl group-hover:opacity-10' src={'/assets/projects/Aleo.png'} width='500' height='500' alt='/' /> 
          <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <h3 className='text-2xl text-white tracking-wider text-center'>Aleo</h3>
          <p className='pb-4 pt-2 text-white text-center'>Nodes Testnet</p>
          <Link href='/Aleo' legacyBehavior>
              <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
          </Link>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
