import Image from 'next/image';
import React from 'react';
import stocks from '../public/assets/stocks.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import quant from '../public/assets/MNQuants.png'

const crypto = () => {
  return (
    <div className='w-full dark:bg-gray-800'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={quant}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>MN Quants</h2>
          <h3>Quantitative Developer / Head of Research</h3>
        </div>
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[90%] right-[50%] translate-x-[-10%] translate-y-[-70%] text-white z-10 mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4 text-white bg-black/50'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2 '>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1 '>
              <p className='py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Python
              </p>
              <p className='py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Pandas
              </p>
              <p className='py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Numpy
              </p>
              <p className='py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> MatplotLib
              </p>
              <p className='py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> APIs
              </p>

            </div>
          </div>
        </div>
        </div>


      </div>

      <div className='max-w-[1240px] mx-auto p-2 gap-8 py-3'>
        <div className='col-span-4 text-white'>
          {/* <p>Project</p> */}
          <h1>Overview</h1>
          <p className='pb-8'>
            MN Quants is a non-profit Quantitative Research organization run by graduate and undergraduate students. We focus on research, product
            development, and financial engineering. 
          </p>
          <h2>Projects</h2>
          <p className='pb-5'>
            Our project backlog consists of systematic trading strategies, exotic deriviative pricing, market micro-structure, etc. We also gain exposure
            to the quantitative trading industry by participating in competitions and leveraging industry profesionals. By pooling our knowledge together, 
            we are able to foster a highly collaborative environment. 
          </p>
          
          <a
            href='https://mnquants.com/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>MN Quants Website</button>
          </a>
          <a
            href='https://mnquants.notion.site/mnquants/MN-Quants-Projects-8b36020d2af84206bef2c9a7871858c9'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Project Backlog</button>
          </a> 

        </div>
        <Link href='/#experience'>
          <p className='underline cursor-pointer pt-8 pb-8'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default crypto;