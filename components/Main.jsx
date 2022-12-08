import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram, FaDiscord, FaTelegram, FaYoutube } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            GET&#39;S OTHER EXPERIENCE WITH US
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, WELCOME TO <span className='text-[#E94A66]'> ANODERB</span>
          </h1>
          <h1 className='py-2 text-gray-700'>CRYPTO ENTHUSIASTS AND NODE OPRATORS</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
          we always try to provide  to the best for the community.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
          <a
                    href='https://twitter.com/anoderb_id'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 hover:text-[#E94A66] '>
                      <FaTwitter />
                    </div>
                  </a>
                  <a
                    href='https://github.com/anoderb'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 hover:text-[#E94A66]'>
                      <FaGithub />
                    </div>
                  </a>
                   <a
                    href='#'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 hover:text-[#E94A66]'>
                      <FaTelegram />
                    </div>
                  </a>
                  <a
                    href='https://www.instagram.com/anoderb.id/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 hover:text-[#E94A66]'>
                      <FaInstagram />
                    </div>
                  </a>
                  <a
                    href='#'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 hover:text-[#E94A66]'>
                      <FaDiscord />
                    </div>
                  </a>
                  <a
                    href='#'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 hover:text-[#E94A66]'>
                      <FaYoutube />
                    </div>
                  </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
