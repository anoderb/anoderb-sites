import Image from 'next/image';
import React from 'react';
import { RiRadioButtonFill } from 'react-icons/ri';
import { FaGithub, FaMedium, FaTelegram, FaTwitter, FaDiscord} from 'react-icons/fa';
import Link from 'next/link';
import Footer from '../components/Footer'

const crypto = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] relative'>
        <div className='absolute top-10 left-0 w-full h-auto bg-black/70 z-10' />
        <Image
          className='relative flex items-center justify-center h-auto w-full shadow-xl'
          layout='fill'
          objectFit='cover'
          src={'/assets/projects/Sui.png'}
          alt='/'
        />
        <div className='absolute top-[80%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>SUI</h2>
          <h3>React JS / Tailwind / Firebase</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          Sui is the first permissionless Layer 1 blockchain designed from the ground up to enable creators and developers to build experiences that cater to the next billion users in web3.
           Sui is horizontally scalable to support a wide range of application development with unrivaled speed at low cost.
          </p>
          <a
            href='#'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8 hover:scale-110 ease-in duration-300'>Guide</button>
          </a>
          <a
            href='https://sui.io/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 hover:scale-110 ease-in duration-300'>Source</button>
          </a>

        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Community</p>
            <div className='grid grid-cols-3 md:grid-cols-1 '>
            <a href="https://github.com/MystenLabs">
                <p className='text-gray-600 py-2 flex items-center'>
                <FaGithub className='pr-0.4' /> Github
              </p>
              </a>
              <a href="https://medium.com/mysten-labs">
                <p className='text-gray-600 py-2 flex items-center'>
                <FaMedium className='pr-0.4' /> Medium
              </p>
              </a>
              <a href="https://twitter.com/SuiNetwork">
                <p className='text-gray-600 py-2 flex items-center'>
                <FaTwitter className='pr-0.4' /> Twitter
              </p>
              </a>
              <a href="https://discord.com/invite/sui">
                <p className='text-gray-600 py-2 flex items-center'>
                <FaDiscord className='pr-0.4' /> Discord
              </p>
              </a>
            </div>
          </div>
        </div>
        <Link href='/#projects' legacyBehavior>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default crypto;
