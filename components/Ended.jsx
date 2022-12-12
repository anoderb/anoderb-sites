import Image from 'next/image';
import React from 'react';

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
                <Image src={'/assets/Ended/Aptos.png'} 
                width='64'
                height='64'
                alt='/'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>APTOS</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={'/assets/Ended/Forta.png'} 
                width='64' 
                height='64' 
                alt='/' 
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>FORTA</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={'/assets/Ended/Layer.png'} 
                width='64' 
                height='64'
                 alt='/' 
                 />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>LAYER ZERO</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={'/assets/Ended/Nym.png'} 
                width='64' 
                height='64' 
                alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>NYM</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={'/assets/Ended/Rebus.png'} 
                width='64' 
                height='64' 
                alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>REBUS</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={'/assets/Ended/Stride.png'} 
                width='64' 
                height='64'
                 alt='/' 
                 />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>STRIDE</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={'/assets/Ended/Subquery.png'} 
                width='64' 
                height='64' 
                alt='/' 
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>SUBQUERY</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={'/assets/Ended/Subspace.png'} 
                width='64' 
                height='64' 
                alt='/' 
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>SUBSPACE</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={'/assets/Ended/Tidechain.png'} 
                width='64' 
                height='64' 
                alt='/' 
                />
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
