import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ConstructionImg from '../assets/Construction.png';
import Footer from '../components/Footer'

const Construction = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-20'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#E94A66]'>
            SORRY
          </p>
          <h2 className='py-4'>Under Construction</h2>
          <p className='py-2 text-gray-600'>
          We are in the process of construction, please be patient... we will please come back tomorrow.
          </p>
          <Link href='/#Main' legacyBehavior>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Go Back
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={ConstructionImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default Construction;
