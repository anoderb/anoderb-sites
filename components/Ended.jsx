import Image from 'next/image';
import React from 'react';
import Aptos from '../public/assets/Ended/Aptos.png';
import Forta from '../public/assets/Ended/Forta.png';
import Layer from '../public/assets/Ended/Layer.png';
import Nym from '../public/assets/Ended/Nym.png';
import Rebus from '../public/assets/Ended/Rebus.png';
import Stride from '../public/assets/Ended/Stride.png';
import Subquery from '../public/assets/Ended/Subquery.png';
import Subspace from '../public/assets/Ended/Subspace.png';
import Tidechain from '../public/assets/Ended/Tidechain.png';

const Ended = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#E94A66]'>
          Projects
        </p>
        <h2 className='py-4'>Ended</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Aptos} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>APTOS</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Forta} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>FORTA</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Layer} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>LAYER ZERO</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Nym} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>NYM</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Rebus} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>REBUS</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Stride} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>STRIDE</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Subquery} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>SUBQUERY</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Subspace} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>SUBSPACE</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Tidechain} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>TIDECHAIN</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ended;
