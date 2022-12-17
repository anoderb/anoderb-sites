import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
// import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaTwitter, FaInstagram, FaDiscord, FaTelegram, FaYoutube } from 'react-icons/fa';
import { useState, useEffect } from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/20/solid';

// import { useRouter } from 'next/router';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  // const [navBg, setNavBg] = useState('#1F1A31');
  const [linkColor, setLinkColor] = useState('#1f2937');
  const [dropdownOpen, setdropdownOpen] = useState(false);
  const {systemTheme , theme, setTheme} = useTheme ();
  const [mounted, setMounted] = useState(false);


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

  // 'beranda-bg': '#1F1A31',
  // 'beranda-main': '#292444',
  // 'beranda-red': '#E94A66'

  // darkmode


  useEffect(() =>{
    setMounted(true);
  }

  )
  const renderThemeChanger = () => {
    if ( !mounted ) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;
  }

  // darkend

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
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300 bg-[#ecf0f3] text-[#1F1A31] dark:bg-[#1F1A31] dark:text-[#ecf0f3]'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className='flex flex-row items-center w-full h-full px-2 2xl:px-16'>
        <div className=" flex basis-full ">
        <Link href='/'>
          <Image
            src={'/assets/navlogo.png'}
            alt='/'
            width='125'
            height='50'
          />
        </Link>
        </div>
         {/* dark */}
        <div className=" flex py-5 mr-2">
        <button
            aria-label="Toggle Dark Mode"
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                className="w-6 h-6 text-yellow-500 dark:text-yellow-500"
              >
                {theme === "dark" ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
          </button>
          {/* darkend */}
        </div>
        <div>
          <ul className='hidden md:flex '>
            <li className='ml-10 text-sm uppercase hover:border-b hover:scale-110 ease-in duration-300  hover:text-[#E94A66] cursor-pointer'>
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
          <div>
          </div>
          {/* Hamburger Icon */}
          <div className=" flex md:hidden bg-[#ecf0f3] text-[#1F1A31] dark:bg-[#1F1A31] dark:text-[#ecf0f3] "
            onClick={handleNav}
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
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen p-10 ease-in duration-500 bg-[#ecf0f3] text-[#1F1A31] dark:bg-[#1F1A31] dark:text-[#ecf0f3]'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between '>
              <Link href='/'>
                <Image
                  src={'/assets/navlogo.png'}
                  width='100'
                  height='40'
                  alt='/'
                />

              </Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 dark:shadow-black p-3 cursor-pointer hover:scale-110 ease-in duration-300 hover:text-[#E94A66] '
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-[#ecf0f3] my-4'>
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
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%] '>
                <a
                    href='https://twitter.com/anoderb_id'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-black p-3 cursor-pointer hover:scale-110 ease-in duration-300 hover:text-[#E94A66] '>
                      <FaTwitter />
                    </div>
                  </a>
                  <a
                    href='https://github.com/anoderb'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-black p-3 cursor-pointer hover:scale-110 ease-in duration-300 hover:text-[#E94A66]'>
                      <FaGithub />
                    </div>
                  </a>
                   <a
                    href='https://t.me/anoderb'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-black p-3 cursor-pointer hover:scale-110 ease-in duration-300 hover:text-[#E94A66]'>
                      <FaTelegram />
                    </div>
                  </a>
                  <a
                    href='https://www.instagram.com/anoderb.id/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-black p-3 cursor-pointer hover:scale-110 ease-in duration-300 hover:text-[#E94A66]'>
                      <FaInstagram />
                    </div>
                  </a>
                  <a
                    href='#'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-black p-3 cursor-pointer hover:scale-110 ease-in duration-300 hover:text-[#E94A66]'>
                      <FaDiscord />
                    </div>
                  </a>
                  <a
                    href='#'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-black p-3 cursor-pointer hover:scale-110 ease-in duration-300 hover:text-[#E94A66]'>
                      <FaYoutube />
                    </div>
                  </a> 
              </div>
            </div>
          </div>
        </div>
      </div>
      {renderThemeChanger()}
    </div>
  );
};

export default Navbar;
