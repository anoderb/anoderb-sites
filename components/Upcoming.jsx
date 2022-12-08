import Image from 'next/image';
import React from 'react';
import dydx from '../public/assets/Upcoming/Dydx.png';
import entropy from '../public/assets/Upcoming/Entropy.png';
import fuel from '../public/assets/Upcoming/Fuel.png';
import lava from '../public/assets/Upcoming/Lava.png';
import monad from '../public/assets/Upcoming/Monad.png';
import namada from '../public/assets/Upcoming/Namada.png';
import neutron from '../public/assets/Upcoming/Neutron.png';
import saga from '../public/assets/Upcoming/Saga.png'

const Upcoming = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#E94A66]'>
          Projects
        </p>
        <h2 className='py-4'>Upcomming</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={dydx} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>DYDX</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={entropy} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>ENTROPY</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={fuel} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>FUEL</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={lava} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>LAVA</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={monad} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>MONAD</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={namada} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>NAMADA</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={neutron} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>NEUTRON</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={saga} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>SAGA</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
