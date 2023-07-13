import React from 'react'
import Image from 'next/image'
import python from '../public/assets/Python.png'
import java from '../public/assets/java.png'
import pytorch from '../public/assets/pytorch.png'
import html from '../public/assets/html.png'
import css from '../public/assets/css.png'
import js from '../public/assets/javascript.png'
import react from '../public/assets/react.png'
import pine from '../public/assets/pine.png'

const Skills = () => {
    return (
      <div id='skills' className='w-full dark:bg-gray-900'>
        <h3 className='flex 
max-w-full px-10 justify-evenly mx-auto uppercase tracking-[15px] text-white text-4xl py-10'>Skills</h3>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 '>
            <div className='dark:bg-gray-800 p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={python} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center text-white'>
                  <h3>Python</h3>
                </div>
              </div>
            </div>
            <div className='dark:bg-gray-800 p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={java} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center text-white'>
                  <h3>Java</h3>
                </div>
              </div>
            </div>
            <div className='dark:bg-gray-800 p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={pytorch} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center text-white'>
                  <h3>PyTorch</h3>
                </div>
              </div>
            </div>
            <div className='dark:bg-gray-800 p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={html} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center text-white'>
                  <h3>HTML</h3>
                </div>
              </div>
            </div>
            <div className='dark:bg-gray-800 p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={css} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center text-white'>
                  <h3>CSS</h3>
                </div>
              </div>
            </div>
            <div className='dark:bg-gray-800 p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={js} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center text-white'>
                  <h3>JavaScript</h3>
                </div>
              </div>
            </div>
            <div className='dark:bg-gray-800 p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={react} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center text-white'>
                  <h3>React</h3>
                </div>
              </div>
            </div>
            <div className='dark:bg-gray-800 p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={pine} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center text-white'>
                  <h3>PineCone</h3>
                </div>
              </div>
            </div>
          </div>
          </div>
    );
  };
  
  export default Skills;
