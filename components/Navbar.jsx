import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineMenu, AiOutlineClose, AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { useRouter } from 'next/router';
const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)
    const [navBg, setNavBg] = useState('#ecf0f3');
    const [linkColor, setLinkColor] = useState('#1f2937');
    const router = useRouter();
    const handleNav = () => {
        setNav(!nav)
    }
    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90){
                setShadow(true)
            }else {
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow)
    })

     useEffect(() => {
    if (
      router.asPath === '/property' ||
      router.asPath === '/crypto' ||
      router.asPath === '/netflix' ||
      router.asPath === '/twitch'
    ) {
      setNavBg('transparent');
      setLinkColor('#ecf0f3');
    } else {
      setNavBg('#202937');
      setLinkColor('#FFFFFF');
    }
  }, [router]);
    return (
        <div style={{backgroundColor: `${navBg}`}} className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            <Image 
            src="/../public/assets/navLogo.png" 
            alt="/" 
            width='100' 
            height='50'
            className='opacity-0' 
            />
            {/* <div className='mr-[700px]'>
              <h1 className='text-3xl sm:text-4xl md:text-5xl'>AP</h1>
            </div> */}
            <div>

                <ul style={{color: `${linkColor}`}} className='hidden md:flex '>
                    <Link href='/#home'> 
                        <li className='ml-10 text-sm uppercase hover:border-b'> Home</li>
                    </Link>
                    <Link href='/#skills'> 
                        <li className='ml-10 text-sm uppercase hover:border-b'> Skills</li>
                    </Link>
                    <Link href='/#education'> 
                        <li className='ml-10 text-sm uppercase hover:border-b'> Education</li>
                    </Link>
                    <Link href='/#experience'> 
                        <li className='ml-10 text-sm uppercase hover:border-b'> Experience</li>
                    </Link>
                    <Link href='/#projects'> 
                        <li className='ml-10 text-sm uppercase hover:border-b'> Projects</li>
                    </Link>
                </ul>
                <div onClick={handleNav} className='md:hidden'>
                    <AiOutlineMenu size={25}/>
                </div>
            </div>
            </div>

            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen dark:bg-gray-800 p-10 ease-in duration-500' 
                                    : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Image src='/../public/assets/navLogo.png' width='87' height='35' alt='/' className='opacity-0' />
                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                <AiOutlineClose/>
                            </div>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
            <ul className='uppercase text-white'>
              <Link href='/#home'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Home
                </li>
              </Link>
              <Link href='/#skills'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Skills
                </li>
              </Link>
              <Link href='/#education'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Education
                </li>
              </Link>
              <Link href='/#experience'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Experience
                </li>
              </Link>
              <Link href='/#projects'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Projects
                </li>
              </Link>
            </ul>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar
