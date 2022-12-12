import Image from 'next/image';
import React from 'react';


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
                <Image src={'/assets/Upcoming/Dydx.png'} 
                width='64' 
                height='64' 
                alt='/' 
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>DYDX</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={'/assets/Upcoming/Entropy.png'} 
                width='64' 
                height='64' 
                alt='/' 
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>ENTROPY</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={'/assets/Upcoming/Fuel.png'} 
                width='64'
                 height='64' 
                 alt='/' 
                 />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>FUEL</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={'/assets/Upcoming/Lava.png'} 
                width='64' 
                height='64' 
                alt='/' 
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>LAVA</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={'/assets/Upcoming/Monad.png'} 
                width='64' 
                height='64' 
                alt='/' 
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>MONAD</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={'/assets/Upcoming/Namada.png'} 
                width='64' 
                height='64' 
                alt='/' 
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>NAMADA</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={'/assets/Upcoming/Neutron.png'} 
                width='64'
                 height='64' 
                 alt='/' 
                 />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>NEUTRON</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={'/assets/Upcoming/Saga.png'} 
                width='64' 
                height='64' 
                alt='/' 
                />
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
