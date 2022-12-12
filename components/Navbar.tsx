import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaTwitter, FaInstagram, FaDiscord, FaTelegram, FaYoutube } from 'react-icons/fa';


// import { useRouter } from 'next/router';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');
  const [dropdownOpen, setdropdownOpen] = useState(false);
      
  // const [position, setPosition] = useState('fixed')
  // const router = useRouter();

  // useEffect(() => {
  //   if (
  //     router.asPath === '/Okp4' ||
  //     router.asPath === '/Sui' ||
  //     router.asPath === '/Masa' ||
  //     router.asPath === '/Aleo'
  //   ) {
  //     setNavBg('transparent');
  //     setLinkColor('#ecf0f3');
  //   } else {
  //     setNavBg('#ecf0f3');
  //     setLinkColor('#1f2937');
  //   }
  // }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16 '>
        <Link href='/'>

          <Image
            src={'/assets/Navlogo.png'}
            alt='/'
            width='125'
            height='50'
            className='cursor-pointer'
          />

        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
            <li className='ml-10 text-sm uppercase hover:border-b hover:scale-110 ease-in duration-300 hover:text-[#E94A66] cursor-pointer'>
              <Link href='/'>Home</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b hover:scale-110 ease-in duration-300 hover:text-[#E94A66] cursor-pointer'>
              <Link href='/#about'>About</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b hover:scale-110 ease-in duration-300 hover:text-[#E94A66] cursor-pointer'>
              <Link href='/#skills'>Projects</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b hover:scale-110 ease-in duration-300 hover:text-[#E94A66] cursor-pointer'>
              <Link href='/#projects'>Testnet</Link>
            </li>
            {/* <li className='ml-10 text-sm uppercase hover:border-b hover:scale-110 ease-in duration-300 hover:text-[#E94A66] cursor-pointer'>
              <Link href='/resume'>FAQ</Link>
            </li> */}
            <li className='ml-10 text-sm uppercase hover:border-b hover:scale-110 ease-in duration-300 hover:text-[#E94A66] cursor-pointer'>
              <Link href='/#contact'>Contact</Link>
            </li>
            
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between '>
              <Link href='/'>

                <Image
                  src={'/assets/Navlogo.png'}
                  width='87'
                  height='35'
                  alt='/'
                />

              </Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 hover:text-[#E94A66] '
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>
                Let&#39;s Get experience with us
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/' legacyBehavior>
                <li onClick={() => setNav(false)} className='py-4 text-sm hover:scale-110 ease-in duration-300 hover:text-[#E94A66]'>
                  Home
                </li>
              </Link>
              <Link href='/#about' legacyBehavior>
                <li onClick={() => setNav(false)} className='py-4 text-sm hover:scale-110 ease-in duration-300 hover:text-[#E94A66]'>
                  About
                </li>
              </Link>
              <Link href='/#skills' legacyBehavior>
                <li onClick={() => setNav(false)} className='py-4 text-sm hover:scale-110 ease-in duration-300 hover:text-[#E94A66]'>
                  Projects
                </li>
              </Link>
              <Link href='/#projects' legacyBehavior>
                <li onClick={() => setNav(false)} className='py-4 text-sm hover:scale-110 ease-in duration-300 hover:text-[#E94A66]'>
                  Testnet
                </li>
              </Link>
              {/* <Link href='/resume' legacyBehavior>
                <li onClick={() => setNav(false)} className='py-4 text-sm hover:scale-110 ease-in duration-300 hover:text-[#E94A66]'>
                  FAQ
                </li>
              </Link> */}
              <Link href='/#contact' legacyBehavior>
                <li onClick={() => setNav(false)} className='py-4 text-sm hover:scale-110 ease-in duration-300 hover:text-[#E94A66]'>
                  Contact
                </li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#E94A66]'>
                Let&#39;s Connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
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
                    href='https://t.me/anoderb'
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
      </div>
    </div>
  );
};

export default Navbar;
