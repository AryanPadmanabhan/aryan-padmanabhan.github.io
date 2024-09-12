import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ffffff');
  const [linkColor, setLinkColor] = useState('#1f2937');
  const router = useRouter();

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

  useEffect(() => {
    if (
      router.asPath === '/property' ||
      router.asPath === '/crypto' ||
      router.asPath === '/netflix' ||
      router.asPath === '/twitch'
    ) {
      setNavBg('transparent');
      setLinkColor('#ffffff');
    } else {
      setNavBg('#ffffff');
      setLinkColor('#1f2937');
    }
  }, [router]);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={`fixed w-full h-16 z-[100] transition-shadow duration-300 ease-in-out ${shadow ? 'shadow-md' : ''}`}
    >
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16">
        <div>
          {/* Logo or brand */}
          <h1 className="text-xl font-bold text-gray-900">AP</h1>
        </div>
        <div>
          {/* Desktop Links */}
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex space-x-8">
            <Link href="/#home">
              <li className="text-sm uppercase hover:text-blue-500 transition-colors duration-300">Home</li>
            </Link>
            <Link href="/#experience">
              <li className="text-sm uppercase hover:text-blue-500 transition-colors duration-300">Experience</li>
            </Link>
            <Link href="/#projects">
              <li className="text-sm uppercase hover:text-blue-500 transition-colors duration-300">Projects</li>
            </Link>
          </ul>

          {/* Mobile Menu Button */}
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} className="text-gray-900" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div className="flex w-full items-center justify-between">
            <h1 className="text-xl font-bold text-gray-900">AP</h1>
            <div onClick={handleNav} className="rounded-full shadow-lg p-2 cursor-pointer">
              <AiOutlineClose className="text-gray-900" />
            </div>
          </div>
          <div className="mt-6">
            <ul className="uppercase text-gray-900 space-y-6">
              <Link href="/#home">
                <li onClick={() => setNav(false)} className="text-sm hover:text-blue-500 transition-colors duration-300">
                  Home
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="text-sm hover:text-blue-500 transition-colors duration-300">
                  Skills
                </li>
              </Link>
              <Link href="/#education">
                <li onClick={() => setNav(false)} className="text-sm hover:text-blue-500 transition-colors duration-300">
                  Education
                </li>
              </Link>
              <Link href="/#experience">
                <li onClick={() => setNav(false)} className="text-sm hover:text-blue-500 transition-colors duration-300">
                  Experience
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="text-sm hover:text-blue-500 transition-colors duration-300">
                  Projects
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
