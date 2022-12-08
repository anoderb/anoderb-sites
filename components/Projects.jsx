import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../assets/projects/Okp4.png';
import cryptoImg from '../assets/projects/Sui.png'
import netflixImg from '../assets/projects/Masa.png'
import twitchImg from '../assets/projects/Aleo.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#E94A66]'>
          Testnet
        </p>
        <h2 className='py-4'>Active</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='OKP4'
            backgroundImg={propertyImg}
            projectUrl='/Okp4'
            tech='Nodes Testnet'
          />
          <ProjectItem
            title='SUI'
            backgroundImg={cryptoImg}
            projectUrl='/Sui'
            tech='Nodes Testnet'

          />
          <ProjectItem
            title='Masa'
            backgroundImg={netflixImg}
            projectUrl='/Masa'
            tech='Node Testnet'

          />
          <ProjectItem
            title='Aleo'
            backgroundImg={twitchImg}
            projectUrl='/Aleo'
            tech='Next JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
