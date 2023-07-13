import React from 'react'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {AiOutlineMenu, AiOutlineClose, AiOutlineMail} from 'react-icons/ai'
import Link from 'next/link';
import Image from 'next/image'
import { Cursor, useTypewriter} from "react-simple-typewriter"
// import resume from '../public/assets/resume.pdf'
// bg-gray-200 dark:bg-gray-900 (previous)
// text-white-700 (a back-end developer)
// text-[#5187e5] (Aryan)

export const Main = () => {
    const [text] = useTypewriter({
        words: ['AI/ML', 'Financial Algos', 'Deep Learning', 'NLP'],
        loop: true,
        delaySpeed: 2000,
    });
  return (
    <div id='home' className='w-full h-screen text-center dark:bg-gray-900'>
        
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            
            <div>
                
                {/* <p className='uppercase text-sm tracking-widest text-black'>LET'S BUILD SOMETHING TOGETHER</p> */}
                <h1 className='pt-6 pb-2 text-white'>
                    Hi, I'm <span className='text-white'>Aryan</span>
                </h1>
                <h1 className='py-2 text-white'>
                    My Focus: <span className='text-[#8CA4CD]'> {text}</span>
                </h1>
                <p className='py-4 text-black max-w-[70%] m-auto'>
                    {/* I'm a back-end developer specializing in AI/ML  */}
                </p>
                {/* <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    
                <a
              href='https://www.linkedin.com/in/aryan-padmanabhan/'
              target='_blank'
              rel='noreferrer'
            >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300' href="www.linkedin.com">
                        <FaLinkedinIn />
                    </div>
                    </a>
                    <a
              href='https://github.com/AryanPadmanabhan'
              target='_blank'
              rel='noreferrer'
            >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaGithub />
                    </div>
                    </a>
                    <Link href='/#contact'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail />
                    </div>
                    </Link>
                    <Link href='/resume'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsFillPersonLinesFill />
                    </div>
                    </Link>
                    
                </div> */}
                <div className=" p-10 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100 flex flex-col w-full h-full mx-auto hover:scale-110 ease-in duration-300">
	<img src="https://media.licdn.com/dms/image/C4E03AQFZZda12YZB8A/profile-displayphoto-shrink_800_800/0/1643820177216?e=2147483647&v=beta&t=cffzIIOU68Es825VPIGYzzVr37ekU9MiXK6WWIzQvJw" alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
	<div className="space-y-4 text-center divide-y divide-gray-700">
		<div className="">
			<h2 className="my-2 space-y-1 text-xl font-semibold sm:text-xl">Aryan Padmanabhan</h2>
			<p className="px-5 text-sm sm:text-base text-white ">I am a student at the University of Minnesota studying computer science.</p>
            <p className="-my-1 px-5 text-sm sm:text-base text-white ">Specifically, I am interested in back-end development.</p>    
        </div>
		<div className='flex justify-center max-w-[330px] m-auto py-4'>
                    
                <a
              href='https://www.linkedin.com/in/aryan-padmanabhan/'
              target='_blank'
              rel='noreferrer'
            >
                    <div className='mx-6 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300' href="www.linkedin.com">
                        <FaLinkedinIn />
                    </div>
                    </a>
                    <a
              href='https://github.com/AryanPadmanabhan'
              target='_blank'
              rel='noreferrer'
            >
                    <div className='mx-6 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaGithub />
                    </div>
                    </a>
                    
                    
                </div>
	</div>
</div>
            </div>
            

            
            
            
        </div>
        
    </div>
    
    
  )
}

export default Main